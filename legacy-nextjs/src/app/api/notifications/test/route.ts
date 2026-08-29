import { type NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";

/**
 * POST /api/notifications/test
 *
 * Stub. The previous implementation sent a test push via @eazo/sdk. With the
 * SDK removed, this returns 501 so the client UI can detect the disabled
 * state and surface a friendly message.
 */
export async function POST(request: NextRequest) {
  const auth = requireAuth(request);
  if (!auth.ok) return auth.response;

  return NextResponse.json(
    {
      ok: false,
      error: "notifications_disabled",
      message:
        "Push notifications are disabled. Re-enable by wiring this route to a push provider.",
    },
    { status: 501 },
  );
}
