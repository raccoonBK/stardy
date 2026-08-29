# Deploying 星旅 · 天文闯关 to Netlify

> Last updated: 2026-08-27 (rewrote netlify.toml + this doc after removing
> the Eazo shell + fixing localhost + Netlify publish-dir error).

## What works out of the box

The app is self-contained -- no external auth, push, or AI provider is
required to deploy a usable demo. Features are intentionally opt-in:

| Feature | Default | How to enable |
|---|---|---|
| UI / routing / teach-swipe / quizzes / 53 lessons | yes | ships in repo |
| Daily-digest cron route | yes (returns 501) | wire to your push provider |
| Push notifications (/api/notifications/test) | yes (returns 501) | wire to your push provider |
| User progress persistence (Postgres) | no | set DATABASE_URL + run migrations |
| Real auth (replaces the guest stub) | no | wire NextAuth / Clerk / Lucia |

## How netlify.toml works

netlify.toml declares exactly one plugin and no manual redirects:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "22"
  NPM_FLAGS = "--prefer-offline"

[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

@netlify/plugin-nextjs handles:

- Generating Lambda functions for every app/api/**/route.ts handler.
- Setting the correct publish directory (overrides whatever we wrote).
- Configuring ISR / on-demand revalidation cache.
- Routing RSC + image-optimization requests to the Lambda.
- Setting up Next's client-side router fallback.

The explicit publish = ".next" is here to win over any publish value
cached in the Netlify UI (a UI-cached publish = /opt/build/repo would
abort the build with "Your publish directory cannot be the same as the
base directory of your site"). The plugin replaces it with the Lambda
output dir after a successful build.

**Do not** add manual redirects like /* -> /index.html or
/api/* -> /.netlify/functions/server/:splat -- they will shadow the
plugin's routing and break the site.

## One-time setup

### 1. Push to GitHub

```bash
cd /Users/raccoonbk/self_programs/app_stardy/astro-quest
gh repo create star-quest --public --source=. --remote=origin --push
```

Or via the GitHub web UI: create an empty repo, then:

```bash
git remote add origin git@github.com:<you>/star-quest.git
git push -u origin main
```

> **Never commit .env**. .gitignore already excludes it.

### 2. Connect to Netlify

1. Sign in to https://app.netlify.com
2. Add new site -> Import an existing project -> GitHub
3. Pick the star-quest repo
4. Netlify reads netlify.toml automatically. Confirm:
   - Build command: npm run build
   - Publish directory: .next (or blank -- the plugin sets it)
   - Plugins: @netlify/plugin-nextjs will be installed by Netlify from
     the [[plugins]] block
5. Click Deploy site

First deploy takes ~3-5 min (cold install of node_modules + the
Netlify Next.js plugin + Turbopack build).

### 3. Environment variables (optional)

In Site settings -> Environment variables, add only what you need:

| Variable | Required? | Notes |
|---|---|---|
| NEXT_PUBLIC_APP_TITLE | no | Overrides <title> + OG title |
| NEXT_PUBLIC_APP_DESCRIPTION | no | Overrides meta description |
| NEXT_PUBLIC_SITE_URL | no | Used for absolute OG URLs |
| DATABASE_URL | no | Postgres for user progress + teach marks |
| CRON_SECRET | no | Bearer auth for the daily-digest cron stub |

After adding vars, trigger a redeploy from the Deploys tab.

## Re-enabling push notifications

The two /api/notifications/* routes are now 501 stubs. To wire them
to a real provider:

1. Pick a push provider (OneSignal, FCM, APNs, etc.)
2. Add SDK calls in src/app/api/notifications/test/route.ts and
   src/app/api/notifications/cron/daily-digest/route.ts
3. Add the provider's credentials to Netlify env vars

## Adding user auth (replacing the guest stub)

src/lib/auth/index.ts is a local no-op -- every request resolves to a
single "guest" user. To wire real auth:

1. Pick a provider (NextAuth, Clerk, Lucia, etc.)
2. Implement requireAuth(request): AuthResult in
   src/lib/auth/index.ts -- the existing type signature
   { ok: true; user: User } | { ok: false; response: Response } is the
   contract the routes already call against
3. Add provider env vars to Netlify

## Adding Postgres (user progress sync)

1. In Netlify dashboard -> Add-ons -> Neon Postgres
2. Copy the connection string into DATABASE_URL
3. Add tables under src/lib/db/schema/:
   - user_progress (user_id, lesson_id, stars, best_at)
   - teach_marks (user_id, lesson_id, teach_index, mark)
4. Run migrations via bun run db:migrate (or npm run db:migrate)

## Custom domain

1. Domain settings -> Add custom domain
2. Netlify auto-issues a Let's Encrypt cert
3. DNS: point your domain's CNAME to <your-site>.netlify.app

## Local sanity check before pushing

```bash
npm run lint                                   # 0 errors
./build-en.sh build                            # builds clean
./build-en.sh start                            # http://localhost:3000
# (then in another terminal)
curl -sS -o /dev/null -w "%{http_code}\n" http://127.0.0.1:3000/   # expect 200
```

> build-en.sh syncs src/, public/, scripts/, and the config
> files into /tmp/stardy-build/ and runs next from there. Turbopack
> panics on paths containing non-ASCII characters (e.g. 个人小项目),
> so building under /tmp keeps the build green.
