/**
 * Stardy API · 腾讯云 CloudBase HTTP 云函数
 *
 * Endpoints:
 *   GET    /api/health
 *   POST   /api/auth              { name } → set session cookie, returns user
 *   GET    /api/me                → current user (or 401)
 *   POST   /api/auth/logout       → clear session
 *   GET    /api/leaderboard       → top XP users
 *   GET    /api/groups            → groups I'm in
 *   POST   /api/groups            { name } → create
 *   POST   /api/groups/join       { invite_code } → join
 *   GET    /api/groups/:id        → group detail + members + leaderboard
 *   POST   /api/progress          { lesson_id, stars, xp } → upsert progress
 *
 * Runtime: Node 18 (matches scf_bootstrap binary path).
 * Bind on port 9000 — required by CloudBase.
 *
 * DB: CloudBase NoSQL via @cloudbase/node-sdk.
 *   Collections: users, sessions, groups, group_members, progress
 *   These are created idempotently on first boot.
 *
 * Auth: lite "name-only" — POST /api/auth creates a user + session and
 * returns a cookie. No password. Upgrade to CloudBase 邮箱登录/微信登录
 * later by swapping getSessionUser() and the auth.* handlers.
 */

'use strict';

const http = require('http');
const { URL } = require('url');
const cloudbase = require('@cloudbase/node-sdk');

const ENV_ID = process.env.TCB_ENV_ID || '';
const ALLOW_ORIGIN = process.env.TCB_ALLOW_ORIGIN || '*';
const SESSION_COOKIE = 'stardy_session';
const SESSION_TTL_SECONDS = 30 * 86400;

let app = null;
let db = null;
let dbReady = null;

function initApp() {
  if (app) return app;
  if (!ENV_ID) {
    throw new Error('TCB_ENV_ID env var not set');
  }
  app = cloudbase.init({
    env: ENV_ID,
    secretId: process.env.TENCENTCLOUD_SECRETID,
    secretKey: process.env.TENCENTCLOUD_SECRETKEY,
  });
  db = app.database();
  return app;
}

async function ensureCollections() {
  if (dbReady) return dbReady;
  initApp();
  dbReady = (async () => {
    const names = ['users', 'sessions', 'groups', 'group_members', 'progress'];
    for (const name of names) {
      try {
        await db.createCollection(name);
      } catch (e) {
        const msg = String(e && e.message || e);
        // Already-exists is the expected idempotent path; anything else we
        // log but do not throw — first write to a collection will succeed
        // even if createCollection failed.
        if (!/already|exist|EXIST/i.test(msg)) {
          console.warn(`[ensureCollections] ${name}: ${msg}`);
        }
      }
    }
  })();
  return dbReady;
}

// ---- helpers ----

function corsHeaders(req) {
  const origin = req.headers.origin || '';
  const allowed = ALLOW_ORIGIN === '*' || origin === ALLOW_ORIGIN;
  return {
    'Access-Control-Allow-Origin': allowed ? origin || ALLOW_ORIGIN : ALLOW_ORIGIN,
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Cookie',
    'Access-Control-Allow-Credentials': 'true',
    'Vary': 'Origin',
  };
}

function newId() {
  return (
    Date.now().toString(36) +
    Math.random().toString(36).slice(2, 10) +
    Math.random().toString(36).slice(2, 10)
  ).slice(0, 24);
}

function sendJson(res, status, data, extraHeaders = {}) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    ...extraHeaders,
  });
  res.end(body);
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (c) => { raw += c; if (raw.length > 1e6) { req.destroy(); reject(new Error('body too large')); } });
    req.on('end', () => {
      if (!raw) return resolve({});
      try { resolve(JSON.parse(raw)); } catch (e) { reject(new Error('invalid json')); }
    });
    req.on('error', reject);
  });
}

function setSessionCookie(token, maxAgeSeconds) {
  return `${SESSION_COOKIE}=${token}; Path=/; Max-Age=${maxAgeSeconds}; HttpOnly; SameSite=Lax${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`;
}

function clearSessionCookie() {
  return `${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax`;
}

function parseCookies(req) {
  const out = {};
  const h = req.headers.cookie || '';
  for (const part of h.split(';')) {
    const idx = part.indexOf('=');
    if (idx < 0) continue;
    const k = part.slice(0, idx).trim();
    const v = part.slice(idx + 1).trim();
    if (k) out[k] = decodeURIComponent(v);
  }
  return out;
}

async function getSessionUser(req) {
  const cookies = parseCookies(req);
  const token = cookies[SESSION_COOKIE];
  if (!token) return null;
  initApp();
  try {
    const sess = await db.collection('sessions').where({ token }).limit(1).get();
    const s = sess.data && sess.data[0];
    if (!s) return null;
    if (s.expires_at && s.expires_at < Math.floor(Date.now() / 1000)) {
      await db.collection('sessions').doc(s._id).remove().catch(() => {});
      return null;
    }
    const u = await db.collection('users').doc(s.user_id).get();
    return u.data && u.data[0] ? { id: s.user_id, name: u.data[0].name } : null;
  } catch (e) {
    console.warn('[getSessionUser]', e.message);
    return null;
  }
}

// ---- handlers ----

async function health(_req, res, cors) {
  sendJson(res, 200, {
    ok: true,
    env: ENV_ID,
    runtime: 'cloudbase-http-function',
    ts: new Date().toISOString(),
  }, cors);
}

async function authPost(req, res, cors) {
  const body = await readJsonBody(req);
  const name = String(body.name || '').trim().slice(0, 32);
  if (!name) return sendJson(res, 400, { error: 'name required' }, cors);
  initApp();
  const userId = newId();
  try {
    await db.collection('users').add({ _id: userId, name, created_at: Date.now() });
  } catch (e) {
    return sendJson(res, 500, { error: 'create user failed: ' + e.message }, cors);
  }
  const token = newId();
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS;
  await db.collection('sessions').add({
    _id: token,
    token,
    user_id: userId,
    expires_at: expiresAt,
    created_at: Date.now(),
  }).catch((e) => {
    console.warn('[auth sessions.add]', e.message);
  });
  sendJson(res, 200, { id: userId, name }, {
    ...cors,
    'Set-Cookie': setSessionCookie(token, SESSION_TTL_SECONDS),
  });
}

async function meGet(req, res, cors) {
  const user = await getSessionUser(req);
  if (!user) return sendJson(res, 401, { user: null }, cors);
  sendJson(res, 200, { user }, cors);
}

async function logoutPost(_req, res, cors) {
  sendJson(res, 200, { ok: true }, { ...cors, 'Set-Cookie': clearSessionCookie() });
}

async function leaderboardGet(_req, res, cors) {
  initApp();
  try {
    // CloudBase NoSQL aggregation: sum xp per user, join users
    const agg = await db.collection('progress').aggregate()
      .group({
        _id: '$user_id',
        totalXp: db.command.aggregate.sum('$xp'),
      })
      .end();
    const xpByUser = {};
    for (const r of (agg.data || [])) xpByUser[r._id] = r.totalXp || 0;
    const usersRes = await db.collection('users').limit(200).get();
    const arr = (usersRes.data || []).map((u) => ({
      id: u._id,
      name: u.name,
      xp: xpByUser[u._id] || 0,
    })).sort((a, b) => b.xp - a.xp).slice(0, 50);
    const entries = arr.map((r, i) => ({
      rank: i + 1,
      name: r.name,
      avatar: '🚀',
      xp: r.xp,
      tier: r.xp >= 2000 ? 'gold' : r.xp >= 1000 ? 'silver' : 'bronze',
    }));
    sendJson(res, 200, { entries }, cors);
  } catch (e) {
    sendJson(res, 500, { error: e.message }, cors);
  }
}

async function groupsList(req, res, cors) {
  const user = await getSessionUser(req);
  if (!user) return sendJson(res, 401, { groups: [] }, cors);
  initApp();
  try {
    const mem = await db.collection('group_members').where({ user_id: user.id }).get();
    const ids = (mem.data || []).map((m) => m.group_id);
    if (ids.length === 0) return sendJson(res, 200, { groups: [] }, cors);
    // NoSQL: fetch each by doc id
    const groups = [];
    for (const gid of ids) {
      const g = await db.collection('groups').doc(gid).get();
      if (g.data && g.data[0]) {
        const memberCount = (await db.collection('group_members').where({ group_id: gid }).count()).total || 0;
        const me = (mem.data || []).find((m) => m.group_id === gid);
        groups.push({
          id: g.data[0]._id,
          name: g.data[0].name,
          invite_code: g.data[0].invite_code,
          owner_id: g.data[0].owner_id,
          member_count: memberCount,
          my_role: me ? me.role : 'member',
        });
      }
    }
    sendJson(res, 200, { groups }, cors);
  } catch (e) {
    sendJson(res, 500, { error: e.message }, cors);
  }
}

async function groupsCreate(req, res, cors) {
  const user = await getSessionUser(req);
  if (!user) return sendJson(res, 401, { error: 'not signed in' }, cors);
  const body = await readJsonBody(req);
  const name = String(body.name || '').trim().slice(0, 64);
  if (!name) return sendJson(res, 400, { error: 'name required' }, cors);
  initApp();
  const id = newId();
  const invite = (newId() + newId()).replace(/[^A-Z0-9]/gi, '').slice(0, 8).toUpperCase();
  try {
    await db.collection('groups').add({ _id: id, name, invite_code: invite, owner_id: user.id, created_at: Date.now() });
    await db.collection('group_members').add({ _id: newId(), group_id: id, user_id: user.id, role: 'owner', joined_at: Date.now() });
    sendJson(res, 200, { id, name, invite_code: invite }, cors);
  } catch (e) {
    sendJson(res, 500, { error: e.message }, cors);
  }
}

async function groupsJoin(req, res, cors) {
  const user = await getSessionUser(req);
  if (!user) return sendJson(res, 401, { error: 'not signed in' }, cors);
  const body = await readJsonBody(req);
  const code = String(body.invite_code || '').trim().toUpperCase().slice(0, 16);
  if (!code) return sendJson(res, 400, { error: 'invite_code required' }, cors);
  initApp();
  try {
    const g = await db.collection('groups').where({ invite_code: code }).limit(1).get();
    const group = g.data && g.data[0];
    if (!group) return sendJson(res, 404, { error: 'group not found' }, cors);
    await db.collection('group_members').add({ _id: newId(), group_id: group._id, user_id: user.id, role: 'member', joined_at: Date.now() }).catch(() => {});
    sendJson(res, 200, { id: group._id, name: group.name }, cors);
  } catch (e) {
    sendJson(res, 500, { error: e.message }, cors);
  }
}

async function groupDetail(req, res, groupId, cors) {
  initApp();
  try {
    const g = await db.collection('groups').doc(groupId).get();
    const group = g.data && g.data[0];
    if (!group) return sendJson(res, 404, { error: 'not found' }, cors);
    const mem = await db.collection('group_members').where({ group_id: groupId }).get();
    const members = [];
    for (const m of (mem.data || [])) {
      const u = await db.collection('users').doc(m.user_id).get();
      const xpAgg = await db.collection('progress').where({ user_id: m.user_id }).get();
      const xp = (xpAgg.data || []).reduce((s, p) => s + (p.xp || 0), 0);
      members.push({
        id: m.user_id,
        name: u.data && u.data[0] ? u.data[0].name : '(unknown)',
        role: m.role,
        xp,
      });
    }
    members.sort((a, b) => b.xp - a.xp);
    const out = members.map((m, i) => ({
      rank: i + 1,
      id: m.id,
      name: m.name,
      avatar: '🚀',
      role: m.role,
      xp: m.xp,
      tier: m.xp >= 2000 ? 'gold' : m.xp >= 1000 ? 'silver' : 'bronze',
    }));
    sendJson(res, 200, {
      group: {
        id: group._id,
        name: group.name,
        invite_code: group.invite_code,
        owner_id: group.owner_id,
        created_at: group.created_at,
      },
      members: out,
    }, cors);
  } catch (e) {
    sendJson(res, 500, { error: e.message }, cors);
  }
}

async function progressPost(req, res, cors) {
  const user = await getSessionUser(req);
  if (!user) return sendJson(res, 401, { error: 'not signed in' }, cors);
  const body = await readJsonBody(req);
  const lessonId = String(body.lesson_id || '').trim().slice(0, 64);
  const stars = Math.min(3, Math.max(0, Number(body.stars || 0)));
  const xp = Math.max(0, Number(body.xp || 0));
  if (!lessonId) return sendJson(res, 400, { error: 'lesson_id required' }, cors);
  initApp();
  try {
    const existing = await db.collection('progress').where({ user_id: user.id, lesson_id: lessonId }).limit(1).get();
    if (existing.data && existing.data[0]) {
      const doc = existing.data[0];
      await db.collection('progress').doc(doc._id).update({
        stars: Math.max(doc.stars || 0, stars),
        xp: Math.max(doc.xp || 0, xp),
        updated_at: Date.now(),
      });
    } else {
      await db.collection('progress').add({
        _id: newId(),
        user_id: user.id,
        lesson_id: lessonId,
        stars, xp,
        updated_at: Date.now(),
      });
    }
    sendJson(res, 200, { ok: true }, cors);
  } catch (e) {
    sendJson(res, 500, { error: e.message }, cors);
  }
}

// ---- router ----

async function handle(req, res, url) {
  const cors = corsHeaders(req);
  if (req.method === 'OPTIONS') {
    res.writeHead(204, cors);
    return res.end();
  }

  // Best-effort DB init; do not block health from succeeding if DB is down.
  if (url.pathname !== '/api/health') {
    try { await ensureCollections(); } catch (e) {
      console.warn('[boot]', e.message);
    }
  }

  const path = url.pathname;
  const method = req.method;

  try {
    if (path === '/api/health' && method === 'GET') return health(req, res, cors);
    if (path === '/api/auth' && method === 'POST') return authPost(req, res, cors);
    if (path === '/api/me' && method === 'GET') return meGet(req, res, cors);
    if (path === '/api/auth/logout' && method === 'POST') return logoutPost(req, res, cors);
    if (path === '/api/leaderboard' && method === 'GET') return leaderboardGet(req, res, cors);
    if (path === '/api/groups' && method === 'GET') return groupsList(req, res, cors);
    if (path === '/api/groups' && method === 'POST') return groupsCreate(req, res, cors);
    if (path === '/api/groups/join' && method === 'POST') return groupsJoin(req, res, cors);
    if (path === '/api/progress' && method === 'POST') return progressPost(req, res, cors);

    const groupMatch = path.match(/^\/api\/groups\/([^/]+)$/);
    if (groupMatch && method === 'GET') return groupDetail(req, res, groupMatch[1], cors);

    sendJson(res, 404, { error: 'not found', path, method }, cors);
  } catch (e) {
    console.error('[handler]', e);
    sendJson(res, 500, { error: e.message || 'internal' }, cors);
  }
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || '/', 'http://127.0.0.1');
  Promise.resolve(handle(req, res, url)).catch((e) => {
    console.error('[fatal]', e);
    try {
      const cors = corsHeaders(req);
      sendJson(res, 500, { error: e.message || 'internal' }, cors);
    } catch (_) { try { res.end(); } catch {} }
  });
});

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`[stardy-api] listening on :${PORT} (env=${ENV_ID})`);
});
