#!/usr/bin/env bash
set -euo pipefail

version="0.25.5"
cache="${TMPDIR:-/tmp}/ml-esbuild"
pkg_dir="$cache/package"
exe="$pkg_dir/bin/esbuild"

if [ ! -x "$exe" ]; then
  mkdir -p "$cache"
  tgz="$cache/esbuild-linux-x64-$version.tgz"
  curl -L "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-$version.tgz" -o "$tgz"
  rm -rf "$pkg_dir"
  tar -xzf "$tgz" -C "$cache"
fi

out_dir="assets/dist"
mkdir -p "$out_dir"

home_input="$out_dir/__index-entry.jsx"
property_input="$out_dir/__property-entry.jsx"
admin_input="$out_dir/__admin-entry.jsx"

cat \
  tweaks-panel.jsx \
  brand.jsx \
  data.jsx \
  sections-hero.jsx \
  sections-properties.jsx \
  sections-social.jsx \
  sections-footer.jsx \
  app.jsx > "$home_input"

cat \
  tweaks-panel.jsx \
  brand.jsx \
  data.jsx \
  sections-hero.jsx \
  sections-footer.jsx \
  property.jsx \
  property-app.jsx > "$property_input"

cat \
  brand.jsx \
  admin.jsx > "$admin_input"

cleanup() {
  rm -f "$home_input" "$property_input" "$admin_input"
}
trap cleanup EXIT

"$exe" "$home_input" --bundle=false --format=iife --target=es2017 --minify --legal-comments=none --outfile="$out_dir/index.bundle.js"
"$exe" "$property_input" --bundle=false --format=iife --target=es2017 --minify --legal-comments=none --outfile="$out_dir/property.bundle.js"
"$exe" "$admin_input" --bundle=false --format=iife --target=es2017 --minify --legal-comments=none --outfile="$out_dir/admin.bundle.js"

ls -lh "$out_dir"/*.bundle.js
