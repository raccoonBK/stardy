import { type NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";

/**
 * GET /api/user/profile
 *
 * Previously decrypted the `x-eazo-session` header and upserted the user
 * into the local Postgres. After removing the @eazo/sdk dependency the auth
 * layer is a local no-op, so this route simply echoes the resolved user
 * (always "guest" in demo mode). Replace `requireAuth` with a real check
 * when you wire up production identity.
 */
export async function GET(request: NextRequest) {
  const auth = requireAuth(request);
  if (!auth.ok) return auth.response;

  return NextResponse.json({ ok: true, user: auth.user });
}
