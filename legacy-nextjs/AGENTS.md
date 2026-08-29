# Agent Guide — 星旅 · 天文闯关 / StarQuest

This file governs code quality and conventions for the 星旅 · 天文闯关
app: stack, structure, i18n, API boundaries, CSS rules, component structure,
local commands, and validation. It is the single source of truth for any agent
or collaborator touching this repo.

## Scope

- In scope: generated app code (src/), public assets, scripts, build config,
  Netlify deploy config, docs.
- Out of scope: external platform orchestration (Netlify dashboard, GitHub
  repo settings, push provider consoles, Postgres hosting).

## Stack

- **Next.js 16** App Router, React 19, TypeScript, Tailwind CSS v4.
- **shadcn/ui** source components, **lucide-react**, **framer-motion**.
- **Drizzle ORM** with PostgreSQL via postgres.js (optional -- only when
  DATABASE_URL is set).
- **i18next + react-i18next** with en-US and zh-CN. User preference is
  persisted in localStorage under star-quest.locale.v1.
- Package manager declared: bun@1.3.9. Lock files: bun.lock +
  pnpm-lock.yaml. The repo also ships build-en.sh so non-Bun installs
  work via plain npm install from /tmp/stardy-build/.

## App contract

- App title/description come from NEXT_PUBLIC_APP_TITLE and
  NEXT_PUBLIC_APP_DESCRIPTION. Defaults are "星旅 · 天文闯关" and
  "A bite-sized astronomy learning app. Daily star path, swipe-to-learn, no
  login." so the app is self-contained without env vars.
- Prefer Bun for install + scripts. If Bun is unavailable, use the
  build-en.sh wrapper.
- Before shipping, run npm run lint and ./build-en.sh build.

## Must preserve

- src/app/layout.tsx keeps the provider chain in this exact order
  (I18nProvider -> LocaleSyncEffect -> GameProvider ->
  ThemeProvider -> ThemePackProvider -> TeachUnderstandingProvider
  -> OnboardingProvider -> children -> OnboardingOverlay ->
  SplashScreen -> Toaster). h-full on both <html> and <body>
  is required so percentage-height app roots render correctly in
  embedded webviews.
- src/lib/auth/index.ts is the app's only auth surface. It exports
  requireAuth(request): AuthResult with signature
  { ok: true; user: User } | { ok: false; response: Response }. The
  current implementation is a local no-op that always returns a "guest"
  user -- this is intentional for the demo / self-hosted build. Replace
  it (do not wrap it) when wiring real auth.
- src/lib/api/request.ts is the API request wrapper. It injects the
  x-app-locale header. Do not reintroduce x-eazo-session or any
  external auth header -- the app is self-hosted.
- src/i18n/locales/en-US.json and src/i18n/locales/zh-CN.json are the
  required locale files.
- src/lib/themes/ is the theme abstraction; the astronomy pack lives at
  src/lib/themes/packs/astronomy.ts. Add new packs by registering them
  in src/lib/themes/registry.ts.
- src/components/astro/teach-swipe.tsx drives the Tinder-style teach
  cards. State persists via src/stores/teach-understanding-store.tsx
  under localStorage.
- src/lib/astro/content-expansion.ts ships the full 53-lesson /
  318-question content tree. Source of truth -- never derive lesson data
  from anywhere else.

## API contract

All src/app/api/**/route.ts files export HTTP method handlers. The auth
helper requireAuth is the standard way to gate them:

```ts
import { requireAuth } from "@/lib/auth";
export async function POST(request: NextRequest) {
  const auth = requireAuth(request);
  if (!auth.ok) return auth.response;
  // ... auth.user.id is available here
}
```

Routes that return 501 Not Implemented (e.g. /api/notifications/*)
must keep their JSON shape stable so client UI can detect the disabled
state. The current shape is:

```json
{ "ok": false, "error": "notifications_disabled",
  "message": "Push notifications are disabled. ..." }
```

## Self-hosting boundary

This app is intentionally **self-contained**. There is no external platform
dependency. Anything that looks like a remote SDK call (@eazo/sdk,
@eazo/sdk/server, @eazo/sdk/react) is a bug -- remove it. If a
comment mentions "Eazo" while describing what was removed, leave the
breadcrumb (it documents the migration) but never add new Eazo references.

## Canvas Point-Select (data-el)

Some embedded previews let users click an element to target it in chat.
Selection precedence is data-el > data-testid > id > CSS path,
so the only reliable anchor is data-el.

- Every meaningful, product-semantic element (page sections, cards, list
  items, primary CTAs, nav entries, form groups) should carry a stable,
  human-readable data-el attribute. Prefer feature-scoped kebab-case
  names, e.g. data-el="lesson-card", data-el="nav-daily".
- Keep data-el values stable across edits so re-selection keeps pointing
  at the same logical element. Never derive from volatile data (ids,
  indexes).
- The bridge is inert in production. Never gate real behavior on these
  attributes.

## Design tokens

Design tokens are captured as tokens.json (colors, typography, spacing,
radius, motion). New components must consume tokens via Tailwind utility
classes that map to them; do not hardcode hex codes or px values.

## Local commands

```bash
./build-en.sh dev              # http://localhost:3000
./build-en.sh build            # production build
./build-en.sh start            # serve the last build on :3000
npm run lint                   # eslint
bun run db:generate            # generate Drizzle migrations
bun run db:migrate             # run migrations
```

## Validation

Before considering a change done:

1. npm run lint returns 0 errors.
2. ./build-en.sh build completes with no TypeScript errors.
3. ./build-en.sh start boots, and
   `curl -sS -o /dev/null -w "%{http_code}" http://127.0.0.1:3000/`
   returns 200.
4. /api/notifications/test (POST) returns 501 with the expected JSON shape.
5. /api/user/profile (GET) returns 200 with { ok: true, user: {...} }.
