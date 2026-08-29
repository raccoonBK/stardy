/**
 * Local auth stub. The original implementation re-exported `requireAuth` and
 * types from `@eazo/sdk/server`, which decrypted the `x-session` cookie
 * header sent by the host bridge (Mobile) or localStorage (web).
 *
 * We removed external auth SDK, so auth is currently a no-op: every request
 * resolves to a single "guest" user. Routes that previously required an
 * authenticated user (profile, notifications/test) now serve their stub
 * responses in demo / self-hosted mode. Wire this up to your own identity
 * provider (NextAuth, Clerk, Lucia, etc.) when you need real auth.
 */

export type User = {
  id: string;
  email: string;
  name: string | null;
  avatarUrl: string | null;
};

export type AuthResult =
  | { ok: true; user: User }
  | { ok: false; response: Response };

const GUEST_USER: User = {
  id: "guest",
  email: "guest@local",
  name: "Guest",
  avatarUrl: null,
};

export function requireAuth(_request: Request): AuthResult {
  return { ok: true, user: GUEST_USER };
}

export function getGuestUser(): User {
  return GUEST_USER;
}
