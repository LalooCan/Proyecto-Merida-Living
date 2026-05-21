#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
publish_dir="$root/_netlify_publish"

cd "$root"

echo "Building production bundles..."
bash "$root/build-production.sh"

cp "$root/assets/dist/index.bundle.js" "$root/index.bundle.js"
cp "$root/assets/dist/property.bundle.js" "$root/property.bundle.js"
cp "$root/assets/dist/admin.bundle.js" "$root/admin.bundle.js"

mkdir -p "$publish_dir"

case "$(cd "$publish_dir" && pwd)" in
  "$root"/*) ;;
  *) echo "Publish directory is outside the project root: $publish_dir" >&2; exit 1 ;;
esac

echo "Cleaning publish directory..."
find "$publish_dir" -mindepth 1 -maxdepth 1 -exec rm -rf {} +

files=(
  index.html
  property.html
  admin.html
  base.css
  listings.js
  image-slot.js
  index.bundle.js
  property.bundle.js
  admin.bundle.js
  favicon.png
  robots.txt
  sitemap.xml
  netlify.toml
  _headers
)

echo "Copying root assets..."
for file in "${files[@]}"; do
  if [ ! -f "$root/$file" ]; then
    echo "Missing required file: $file" >&2
    exit 1
  fi
  cp "$root/$file" "$publish_dir/$file"
done

echo "Copying asset folders..."
cp -R "$root/assets" "$publish_dir/assets"

echo "Production publish folder is ready:"
find "$publish_dir" -maxdepth 1 -mindepth 1 -printf "%f\n" | sort
