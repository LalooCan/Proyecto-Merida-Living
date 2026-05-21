$ErrorActionPreference = 'Stop'

$version = '0.25.5'
$cache = Join-Path $env:TEMP 'ml-esbuild'
$pkgDir = Join-Path $cache 'package'
$exe = Join-Path $pkgDir 'esbuild.exe'

if (!(Test-Path -LiteralPath $exe)) {
  New-Item -ItemType Directory -Force -Path $cache | Out-Null
  $tgz = Join-Path $cache "esbuild-win32-x64-$version.tgz"
  Invoke-WebRequest -Uri "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-$version.tgz" -OutFile $tgz
  if (Test-Path -LiteralPath $pkgDir) {
    Remove-Item -LiteralPath $pkgDir -Recurse -Force
  }
  tar -xzf $tgz -C $cache
}

$outDir = 'assets/dist'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
$distRoot = (Resolve-Path -LiteralPath $outDir).Path

$homeInput = Join-Path $distRoot '__index-entry.jsx'
$propertyInput = Join-Path $distRoot '__property-entry.jsx'
$adminInput = Join-Path $distRoot '__admin-entry.jsx'

$homeFiles = @(
  'tweaks-panel.jsx',
  'brand.jsx',
  'data.jsx',
  'sections-hero.jsx',
  'sections-properties.jsx',
  'sections-social.jsx',
  'sections-footer.jsx',
  'app.jsx'
)

$propertyFiles = @(
  'tweaks-panel.jsx',
  'brand.jsx',
  'data.jsx',
  'sections-hero.jsx',
  'sections-footer.jsx',
  'property.jsx',
  'property-app.jsx'
)

$adminFiles = @(
  'brand.jsx',
  'admin.jsx'
)

$utf8NoBom = [System.Text.UTF8Encoding]::new($false)
$utf8 = [System.Text.UTF8Encoding]::new($false, $true)
[System.IO.File]::WriteAllText($homeInput, (($homeFiles | ForEach-Object { [System.IO.File]::ReadAllText((Resolve-Path -LiteralPath $_).Path, $utf8) }) -join "`n`n"), $utf8NoBom)
[System.IO.File]::WriteAllText($propertyInput, (($propertyFiles | ForEach-Object { [System.IO.File]::ReadAllText((Resolve-Path -LiteralPath $_).Path, $utf8) }) -join "`n`n"), $utf8NoBom)
[System.IO.File]::WriteAllText($adminInput, (($adminFiles | ForEach-Object { [System.IO.File]::ReadAllText((Resolve-Path -LiteralPath $_).Path, $utf8) }) -join "`n`n"), $utf8NoBom)

try {
  & $exe @($homeInput, '--bundle=false', '--format=iife', '--target=es2017', '--minify', '--legal-comments=none', "--outfile=$(Join-Path $distRoot 'index.bundle.js')")
  & $exe @($propertyInput, '--bundle=false', '--format=iife', '--target=es2017', '--minify', '--legal-comments=none', "--outfile=$(Join-Path $distRoot 'property.bundle.js')")
  & $exe @($adminInput, '--bundle=false', '--format=iife', '--target=es2017', '--minify', '--legal-comments=none', "--outfile=$(Join-Path $distRoot 'admin.bundle.js')")
}
finally {
  Remove-Item -LiteralPath $homeInput,$propertyInput,$adminInput -Force -ErrorAction SilentlyContinue
}

Get-ChildItem -LiteralPath $outDir -Filter '*.bundle.js' | Select-Object Name,Length
