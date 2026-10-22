#!/usr/bin/env bash
# Cloudflare Workers Builds entrypoint: pull the latest Baymesh firmware manifest, then build the flasher.
set -euo pipefail

FIRMWARE_REPO=https://github.com/baymesh/bayme.sh-firmware-pages.git

fw="$(mktemp -d)"
git clone --depth 1 --branch gh-pages "$FIRMWARE_REPO" "$fw"
latest="$(cd "$fw" && ls firmware-*.json 2>/dev/null | sort -V | tail -1 || true)"
mkdir -p public/data/firmware
if [ -n "$latest" ]; then
  cp "$fw/$latest" "public/data/firmware/$latest"
  echo "Bundled firmware manifest: $latest"
else
  echo "No firmware-*.json manifest found in $FIRMWARE_REPO" >&2
fi

npm install -g pnpm@9
pnpm install --frozen-lockfile
rm -rf .nuxt .output
pnpm run build
