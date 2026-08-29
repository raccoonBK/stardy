import { type NextRequest, NextResponse } from "next/server";

/**
 * GET /api/notifications/cron/daily-digest
 *
 * Stub. The previous implementation called `notifications.publish` from
 * `@eazo/sdk/server` to push a daily reminder to all app subscribers. With
 * the SDK removed, push notifications are no-ops. Wire this to your own
 * push provider (OneSignal, Firebase Cloud Messaging, etc.) to re-enable.
 */
export async function GET(_request: NextRequest) {
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
