/**
 * Stardy · API client for the Cloudflare Worker backend.
 *
 * In production: set EXPO_PUBLIC_API_BASE to your Worker URL
 *   (e.g. https://stardy-api.<account>.workers.dev).
 *
 * In dev: defaults to http://127.0.0.1:8787 (wrangler dev runs there).
 */

const BASE =
  (typeof process !== 'undefined' && process.env?.EXPO_PUBLIC_API_BASE) ||
  'http://127.0.0.1:8787';

async function http<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
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
  return (text ? JSON.parse(text) : null) as T;
}

export const api = {
  health: () => http<{ ok: boolean; env: string }>('/api/health'),

  auth: {
    signIn: (name: string) =>
      http<{ id: string; name: string }>('/api/auth', {
        method: 'POST',
        body: JSON.stringify({ name }),
      }),
    me: () =>
      http<{ user: { id: string; name: string } | null }>('/api/me').catch(() => ({ user: null })),
    logout: () => http<{ ok: true }>('/api/auth/logout', { method: 'POST' }),
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
