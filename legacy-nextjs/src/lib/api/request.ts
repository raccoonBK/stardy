"use client";

import { getResolvedLocale } from "@/i18n";
import { appAIRequest } from "@/lib/api/app-ai-request";

/**
 * Drop-in replacement for `fetch` that tags every authenticated API call
 * with the resolved app locale. The original also injected an
 * `x-eazo-session` header from `@eazo/sdk`; that header is gone now that
 * the SDK has been removed.
 */
export async function request(
  input: RequestInfo | URL,
  init: RequestInit = {},
): Promise<Response> {
  const headers = new Headers(init.headers);
  headers.set("x-app-locale", getResolvedLocale());

  return appAIRequest(input, {
    ...init,
    headers,
  });
}
