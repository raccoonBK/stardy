/**
 * Stardy API · Cloudflare Worker
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
 *   POST   /api/progress          { lesson_id, stars } → upsert progress
 *
 * Auth model: lite "name-only" — POST /api/auth with a chosen name creates
 * a user + session and returns a cookie. No password. Easy to upgrade to
 * Better Auth later (drop the password_hash branch in users table).
 */

export interface Env {
  DB: D1Database;
  ENVIRONMENT: string;
  ALLOWED_ORIGIN: string;
}

type User = { id: string; name: string; created_at: number };

const SESSION_COOKIE = 'stardy_session';
const SESSION_TTL_DAYS = 30;

const json = (data: unknown, init?: ResponseInit) =>
  new Response(JSON.stringify(data), {
    ...init,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...(init?.headers ?? {}),
    },
  });

const err = (msg: string, status = 400) =>
  json({ error: msg }, { status });

const newId = () => {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
};

const readJson = async <T = unknown>(req: Request): Promise<T | null> => {
  try {
    const text = await req.text();
    if (!text) return null;
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
};

function corsHeaders(req: Request, env: Env): HeadersInit {
  const origin = req.headers.get('Origin') ?? '';
  const allowed = env.ALLOWED_ORIGIN === '*' || origin === env.ALLOWED_ORIGIN;
  return {
    'Access-Control-Allow-Origin': allowed ? origin || env.ALLOWED_ORIGIN : env.ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Cookie',
    'Access-Control-Allow-Credentials': 'true',
    'Vary': 'Origin',
  };
}

async function getSessionUser(req: Request, env: Env): Promise<User | null> {
  const cookie = req.headers.get('Cookie') ?? '';
  const token = cookie.split(';').map((s) => s.trim()).find((s) => s.startsWith(`${SESSION_COOKIE}=`))?.split('=')[1];
  if (!token) return null;
  const row = await env.DB.prepare(
    `SELECT u.id, u.name, u.created_at, s.expires_at
       FROM sessions s
       JOIN users u ON u.id = s.user_id
      WHERE s.token = ?1`,
  ).bind(token).first<{ id: string; name: string; created_at: number; expires_at: number }>();
  if (!row) return null;
  if (row.expires_at * 1000 < Date.now()) {
    await env.DB.prepare('DELETE FROM sessions WHERE token = ?1').bind(token).run();
    return null;
  }
  return { id: row.id, name: row.name, created_at: row.created_at };
}

function setSessionCookie(token: string, expiresAt: number): string {
  const maxAge = Math.max(0, Math.floor((expiresAt - Date.now() / 1000)));
  return `${SESSION_COOKIE}=${token}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax; Secure`;
}

function clearSessionCookie(): string {
  return `${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax; Secure`;
}

const router = {
  async health(_req: Request, env: Env) {
    return json({
      ok: true,
      env: env.ENVIRONMENT,
      ts: new Date().toISOString(),
      uptime_target: 'cloudflare-workers',
    });
  },

  async authPost(req: Request, env: Env) {
    const body = await readJson<{ name?: string }>(req);
    const name = (body?.name ?? '').trim().slice(0, 32);
    if (!name) return err('name required');
    const id = newId();
    await env.DB.prepare('INSERT INTO users (id, name) VALUES (?1, ?2)').bind(id, name).run();
    const token = newId();
    const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_DAYS * 86400;
    await env.DB.prepare(
      'INSERT INTO sessions (token, user_id, expires_at) VALUES (?1, ?2, ?3)',
    ).bind(token, id, expiresAt).run();
    const headers = new Headers({
      'Set-Cookie': setSessionCookie(token, expiresAt),
    });
    return new Response(JSON.stringify({ id, name }), {
      status: 200,
      headers: { ...Object.fromEntries(headers), 'Content-Type': 'application/json' },
    });
  },

  async me(req: Request, env: Env) {
    const user = await getSessionUser(req, env);
    if (!user) return json({ user: null }, { status: 401 });
    return json({ user });
  },

  async logout(_req: Request, _env: Env) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        'Set-Cookie': clearSessionCookie(),
        'Content-Type': 'application/json',
      },
    });
  },

  async leaderboardGet(_req: Request, env: Env) {
    const rows = await env.DB.prepare(
      `SELECT u.id, u.name, COALESCE(SUM(p.xp), 0) as xp
         FROM users u
         LEFT JOIN progress p ON p.user_id = u.id
        GROUP BY u.id
        ORDER BY xp DESC
        LIMIT 50`,
    ).all<{ id: string; name: string; xp: number }>();
    const list = (rows.results ?? []).map((r, i) => ({
      rank: i + 1,
      name: r.name,
      avatar: '🚀',
      xp: r.xp,
      tier: r.xp >= 2000 ? 'gold' : r.xp >= 1000 ? 'silver' : 'bronze',
    }));
    return json({ entries: list });
  },

  async groupsList(req: Request, env: Env) {
    const user = await getSessionUser(req, env);
    if (!user) return json({ groups: [] }, { status: 401 });
    const rows = await env.DB.prepare(
      `SELECT g.id, g.name, g.invite_code, g.owner_id,
              (SELECT COUNT(*) FROM group_members WHERE group_id = g.id) AS member_count,
              'member' AS my_role
         FROM groups g
         JOIN group_members m ON m.group_id = g.id
        WHERE m.user_id = ?1
        ORDER BY g.created_at DESC`,
    ).bind(user.id).all<{ id: string; name: string; invite_code: string; owner_id: string; member_count: number; my_role: string }>();
    return json({ groups: rows.results ?? [] });
  },

  async groupsCreate(req: Request, env: Env) {
    const user = await getSessionUser(req, env);
    if (!user) return err('not signed in', 401);
    const body = await readJson<{ name?: string }>(req);
    const name = (body?.name ?? '').trim().slice(0, 64);
    if (!name) return err('name required');
    const id = newId();
    const invite = (newId() + newId()).slice(0, 8).toUpperCase();
    await env.DB.prepare(
      'INSERT INTO groups (id, name, invite_code, owner_id) VALUES (?1, ?2, ?3, ?4)',
    ).bind(id, name, invite, user.id).run();
    await env.DB.prepare(
      'INSERT INTO group_members (group_id, user_id, role) VALUES (?1, ?2, ?3)',
    ).bind(id, user.id, 'owner').run();
    return json({ id, name, invite_code: invite });
  },

  async groupsJoin(req: Request, env: Env) {
    const user = await getSessionUser(req, env);
    if (!user) return err('not signed in', 401);
    const body = await readJson<{ invite_code?: string }>(req);
    const code = (body?.invite_code ?? '').trim().toUpperCase().slice(0, 16);
    if (!code) return err('invite_code required');
    const group = await env.DB.prepare('SELECT id, name FROM groups WHERE invite_code = ?1').bind(code).first<{ id: string; name: string }>();
    if (!group) return err('group not found', 404);
    await env.DB.prepare(
      'INSERT OR IGNORE INTO group_members (group_id, user_id, role) VALUES (?1, ?2, ?3)',
    ).bind(group.id, user.id, 'member').run();
    return json({ id: group.id, name: group.name });
  },

  async groupDetail(req: Request, env: Env, groupId: string) {
    const group = await env.DB.prepare(
      'SELECT id, name, invite_code, owner_id, created_at FROM groups WHERE id = ?1',
    ).bind(groupId).first<{ id: string; name: string; invite_code: string; owner_id: string; created_at: number }>();
    if (!group) return err('not found', 404);
    const members = await env.DB.prepare(
      `SELECT u.id, u.name, gm.role, gm.joined_at,
              COALESCE(SUM(p.xp), 0) AS xp
         FROM group_members gm
         JOIN users u ON u.id = gm.user_id
         LEFT JOIN progress p ON p.user_id = u.id
        WHERE gm.group_id = ?1
        GROUP BY u.id
        ORDER BY xp DESC`,
    ).bind(groupId).all<{ id: string; name: string; role: string; joined_at: number; xp: number }>();
    return json({
      group,
      members: (members.results ?? []).map((m, i) => ({
        rank: i + 1,
        id: m.id,
        name: m.name,
        avatar: '🚀',
        role: m.role,
        xp: m.xp,
        tier: m.xp >= 2000 ? 'gold' : m.xp >= 1000 ? 'silver' : 'bronze',
      })),
    });
  },

  async progressPost(req: Request, env: Env) {
    const user = await getSessionUser(req, env);
    if (!user) return err('not signed in', 401);
    const body = await readJson<{ lesson_id?: string; stars?: number; xp?: number }>(req);
    const lid = (body?.lesson_id ?? '').trim().slice(0, 64);
    const stars = Math.min(3, Math.max(0, Number(body?.stars ?? 0)));
    const xp = Math.max(0, Number(body?.xp ?? 0));
    if (!lid) return err('lesson_id required');
    await env.DB.prepare(
      `INSERT INTO progress (user_id, lesson_id, stars, xp, updated_at)
       VALUES (?1, ?2, ?3, ?4, unixepoch())
       ON CONFLICT(user_id, lesson_id) DO UPDATE SET
         stars = MAX(progress.stars, excluded.stars),
         xp = MAX(progress.xp, excluded.xp),
         updated_at = unixepoch()`,
    ).bind(user.id, lid, stars, xp).run();
    return json({ ok: true });
  },
};

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    const path = url.pathname;
    const method = req.method.toUpperCase();

    const cors = corsHeaders(req, env);
    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    let res: Response;
    try {
      if (path === '/api/health' && method === 'GET') {
        res = await router.health(req, env);
      } else if (path === '/api/auth' && method === 'POST') {
        res = await router.authPost(req, env);
      } else if (path === '/api/me' && method === 'GET') {
        res = await router.me(req, env);
      } else if (path === '/api/auth/logout' && method === 'POST') {
        res = await router.logout(req, env);
      } else if (path === '/api/leaderboard' && method === 'GET') {
        res = await router.leaderboardGet(req, env);
      } else if (path === '/api/groups' && method === 'GET') {
        res = await router.groupsList(req, env);
      } else if (path === '/api/groups' && method === 'POST') {
        res = await router.groupsCreate(req, env);
      } else if (path === '/api/groups/join' && method === 'POST') {
        res = await router.groupsJoin(req, env);
      } else if (path === '/api/progress' && method === 'POST') {
        res = await router.progressPost(req, env);
      } else if (path.startsWith('/api/groups/') && method === 'GET') {
        const id = path.replace('/api/groups/', '');
        res = await router.groupDetail(req, env, id);
      } else {
        res = json({ error: 'not found', path, method }, { status: 404 });
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      res = json({ error: msg }, { status: 500 });
    }

    // attach CORS headers
    const headers = new Headers(res.headers);
    for (const [k, v] of Object.entries(cors)) headers.set(k, v as string);
    return new Response(res.body, { status: res.status, headers });
  },
};
