/**
 * Stardy · API client for the 腾讯云 CloudBase HTTP 云函数.
 *
 *  - 默认 ''（同源 /api/*），适用于 CloudBase 静态托管 + APIGW 把 /api/*
 *    路由到 `api` 云函数的场景（生产推荐配置）
 *  - 本地 dev: `EXPO_PUBLIC_API_BASE=http://127.0.0.1:9000/api`
 *    （cloud function 用 `node functions/api/index.js` 本地起在 9000 端口）
 *  - 显式覆盖: `EXPO_PUBLIC_API_BASE=https://xxx.apigw.tencentcs.com/release/api`
 *
 *  部署时不需要 env 变量也能跑（静态托管默认就有 env domain + APIGW），
 *  但若用户想自定义域名 / 直连函数 URL，可设这个。
 */

const BASE: string =
  process.env.EXPO_PUBLIC_API_BASE ||
  '';

const TOKEN_KEY = 'stardy:session-token';

function readToken(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

function writeToken(token: string | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (token) window.localStorage.setItem(TOKEN_KEY, token);
    else window.localStorage.removeItem(TOKEN_KEY);
  } catch {}
}

function fullUrl(path: string): string {
  if (!BASE) return path;
  return `${BASE.replace(/\/$/, '')}${path.startsWith('/') ? path : '/' + path}`;
}

async function http<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = readToken();
  const res = await fetch(fullUrl(path), {
    ...init,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init.headers ?? {}),
    },
  });
  const text = await res.text();
  if (!res.ok) {
    let body: { error?: string } = {};
    try {
      body = text ? JSON.parse(text) : {};
    } catch {}
    throw new Error(body.error || `${res.status} ${res.statusText}`);
  }
  const payload = text ? JSON.parse(text) : null;
  // CloudBase HTTP 网关 may serialize a normal cloud-function response as
  // { statusCode, headers, body, isBase64Encoded }.
  if (
    payload &&
    typeof payload === 'object' &&
    typeof payload.body === 'string' &&
    typeof payload.statusCode === 'number'
  ) {
    return (payload.body ? JSON.parse(payload.body) : null) as T;
  }
  return payload as T;
}

export const api = {
  health: () => http<{ ok: boolean; env: string }>('/api/health'),

  auth: {
    signIn: async (name: string) => {
      const result = await http<{ id: string; name: string; token?: string }>('/api/auth', {
        method: 'POST',
        body: JSON.stringify({ name }),
      });
      if (result.token) writeToken(result.token);
      return result;
    },
    me: () =>
      http<{ user: { id: string; name: string } | null }>('/api/me').catch(() => ({ user: null })),
    logout: async () => {
      const result = await http<{ ok: true }>('/api/auth/logout', { method: 'POST' });
      writeToken(null);
      return result;
    },
  },

  leaderboard: () =>
    http<{
      entries: { rank: number; name: string; avatar: string; xp: number; tier: string }[];
    }>('/api/leaderboard'),

  groups: {
    list: () =>
      http<{
        groups: { id: string; name: string; invite_code: string; owner_id: string; member_count: number; my_role: string }[];
      }>('/api/groups'),
    create: (name: string) =>
      http<{ id: string; name: string; invite_code: string }>('/api/groups', {
        method: 'POST',
        body: JSON.stringify({ name }),
      }),
    join: (invite_code: string) =>
      http<{ id: string; name: string }>('/api/groups/join', {
        method: 'POST',
        body: JSON.stringify({ invite_code }),
      }),
    detail: (id: string) =>
      http<{
        group: { id: string; name: string; invite_code: string; owner_id: string; created_at: number };
        members: { rank: number; id: string; name: string; role: string; xp: number; tier: string }[];
      }>(`/api/groups/${id}`),
  },

  progress: {
    save: (lesson_id: string, stars: number, xp: number) =>
      http<{ ok: true }>('/api/progress', {
        method: 'POST',
        body: JSON.stringify({ lesson_id, stars, xp }),
      }),
  },
};
