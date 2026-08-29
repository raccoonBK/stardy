# 星旅 · 天文闯关

A bite-sized astronomy learning app built with Next.js 16 (App Router) + React 19 + Tailwind v4.

## What's inside

- **53-lesson astronomy curriculum** — `src/lib/astro/content-expansion.ts` ships
  the full content tree, 318 questions across 5 tracks.
- **Tinder-style teach swipe** — `src/components/astro/teach-swipe.tsx`
  (keyboard + touch + button), wired through `src/stores/teach-understanding-store.tsx`
  with `localStorage` persistence.
- **Lesson runner** — `src/components/astro/lesson-runner.tsx` orchestrates
  the four-phase flow: `teach_swipe -> quiz -> review -> settle`.
- **Themed UI** — `src/lib/themes/` ships a pluggable theme system; the
  astronomy pack lives at `src/lib/themes/packs/astronomy.ts`.
- **i18n** — `src/i18n/index.ts` (en-US + zh-CN, `localStorage`-backed
  preference).
- **Daily / Leaderboard / Profile** routes under `src/app/`.

## Getting started

The repo ships with a wrapper script that builds from an English-only path
(`/tmp/stardy-build/`) so Turbopack doesn't panic on non-ASCII host paths:

```bash
cd /Users/raccoonbk/self_programs/app_stardy/astro-quest
./build-en.sh dev          # http://localhost:3000
./build-en.sh build        # production build (writes to .next/)
./build-en.sh start        # serve the last build on :3000
```

If you prefer the upstream package manager (the repo declares `bun@1.3.9`):

```bash
bun install
bun run dev
```

If Bun install stalls on `sharp`:

```bash
SHARP_IGNORE_GLOBAL_LIBVIPS=1 bun install
```

## Environment variables

Copy `.env.example` to `.env` and fill in anything you need. The app runs
without any of these set (it falls back to a guest user and no external
services):

| Variable | Required? | Notes |
|---|---|---|
| `NEXT_PUBLIC_APP_TITLE` | no | Overrides `<title>` + OG title |
| `NEXT_PUBLIC_APP_DESCRIPTION` | no | Overrides meta description |
| `NEXT_PUBLIC_SITE_URL` | no | Used for absolute OG URLs |
| `DATABASE_URL` | no | Postgres for user progress + teach marks |
| `CRON_SECRET` | no | Bearer auth for the daily-digest stub |

There are intentionally **no Eazo / external auth / push provider** env vars
— the app is self-contained. Wire your own (NextAuth, Clerk, OneSignal, etc.)
when you need them.

## Learn more

- [Next.js App Router docs](https://nextjs.org/docs/app)
- [Deploying to Netlify](./DEPLOY_NETLIFY.md) (one extra plugin, no manual redirects)
