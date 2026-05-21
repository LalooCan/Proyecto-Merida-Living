$ErrorActionPreference = 'Stop'

$root = (Resolve-Path -LiteralPath $PSScriptRoot).Path
$publishDir = Join-Path $root '_netlify_publish'

Write-Host 'Building production bundles...'
& powershell -ExecutionPolicy Bypass -File (Join-Path $root 'build-production.ps1')

Copy-Item -LiteralPath (Join-Path $root 'assets\dist\index.bundle.js') -Destination (Join-Path $root 'index.bundle.js') -Force
Copy-Item -LiteralPath (Join-Path $root 'assets\dist\property.bundle.js') -Destination (Join-Path $root 'property.bundle.js') -Force
Copy-Item -LiteralPath (Join-Path $root 'assets\dist\admin.bundle.js') -Destination (Join-Path $root 'admin.bundle.js') -Force

if (!(Test-Path -LiteralPath $publishDir)) {
  New-Item -ItemType Directory -Force -Path $publishDir | Out-Null
}

$resolvedPublish = (Resolve-Path -LiteralPath $publishDir).Path
if (!$resolvedPublish.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Publish directory is outside the project root: $resolvedPublish"
}

Write-Host 'Cleaning publish directory...'
Get-ChildItem -LiteralPath $resolvedPublish -Force | Remove-Item -Recurse -Force

$files = @(
  'index.html',
  'property.html',
  'admin.html',
  'base.css',
  'listings.js',
  'image-slot.js',
  'index.bundle.js',
  'property.bundle.js',
  'admin.bundle.js',
  'favicon.png',
  'robots.txt',
  'sitemap.xml',
  'netlify.toml',
  '_headers'
)

Write-Host 'Copying root assets...'
foreach ($file in $files) {
  $source = Join-Path $root $file
  if (Test-Path -LiteralPath $source) {
    Copy-Item -LiteralPath $source -Destination (Join-Path $resolvedPublish $file) -Force
  } else {
    throw "Missing required file: $file"
  }
}

Write-Host 'Copying asset folders...'
Copy-Item -LiteralPath (Join-Path $root 'assets') -Destination (Join-Path $resolvedPublish 'assets') -Recurse -Force

Write-Host 'Production publish folder is ready:'
Get-ChildItem -LiteralPath $resolvedPublish -Force | Select-Object Name,Mode,Length,LastWriteTime
