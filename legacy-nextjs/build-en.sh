#!/usr/bin/env bash
# Wrapper to build/start the project from an English path.
# Turbopack panics on non-ASCII paths (CJK etc.), so we rsync the source
# tree into /tmp/stardy-build/ and run `next` from there. This keeps the
# build green on any host without forcing the project to live at a pure
# ASCII path.

set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
EN_DIR="/tmp/stardy-build"

# Sync source from the real project to the english build directory.
# Cheap rsync-style sync — copies only files that changed.
mkdir -p "$EN_DIR"
for top in src public scripts; do
  if [ -d "$PROJECT_DIR/$top" ]; then
    rsync -a --delete "$PROJECT_DIR/$top/" "$EN_DIR/$top/" 2>/dev/null \
      || cp -R "$PROJECT_DIR/$top/." "$EN_DIR/$top/"
  fi
done
for f in netlify.toml next.config.ts package.json tsconfig.json \
         postcss.config.mjs eslint.config.mjs components.json \
         drizzle.config.ts next-env.d.ts DEPLOY_NETLIFY.md \
         README.md AGENTS.md .env.example .gitignore; do
  if [ -f "$PROJECT_DIR/$f" ]; then
    cp "$PROJECT_DIR/$f" "$EN_DIR/$f"
  fi
done
[ -f "$PROJECT_DIR/.env" ] && cp "$PROJECT_DIR/.env" "$EN_DIR/.env" || cp "$EN_DIR/.env.example" "$EN_DIR/.env"

cd "$EN_DIR"

# Pick the action, then shift so "$@" only carries extra flags the user
# passed (e.g. -p 4000). Next.js 16 treats the first positional arg as
# the project directory, so without shift ./build-en.sh start would
# run "next start start" and fail with
# "Invalid project directory provided, no such directory: .../start".
ACTION="${1:-build}"
shift 1 || true

case "$ACTION" in
  build)
    node_modules/.bin/next build "$@"
    ;;
  start)
    node_modules/.bin/next start "$@"
    ;;
  dev)
    node_modules/.bin/next dev "$@"
    ;;
  *)
    echo "usage: $0 [build|start|dev] [args...]" >&2
    exit 1
    ;;
esac
