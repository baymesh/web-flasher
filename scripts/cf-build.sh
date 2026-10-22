#!/usr/bin/env bash
# Cloudflare Workers Builds entrypoint: pull the latest Baymesh firmware manifest, then build the flasher.
# Workers Builds has already run `pnpm install` from the lockfile by the time this runs.
set -euo pipefail

FIRMWARE_REPO=https://github.com/baymesh/bayme.sh-firmware-pages.git

fw="$(mktemp -d)"
git clone --depth 1 --branch gh-pages "$FIRMWARE_REPO" "$fw"
latest="$(cd "$fw" && ls | grep -E '^firmware-[0-9]+\.[0-9]+\.[0-9]+\.[0-9a-f]+\.json$' | sort -V | tail -1 || true)"
mkdir -p public/data/firmware
if [ -n "$latest" ]; then
  cp "$fw/$latest" "public/data/firmware/$latest"
  echo "Bundled firmware manifest: $latest"
else
  echo "No firmware-X.Y.Z.<hash>.json manifest found in $FIRMWARE_REPO" >&2
fi

rm -rf .output
pnpm run build
