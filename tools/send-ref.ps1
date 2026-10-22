# ──────────────────────────────────────────────────────────────
#  send-ref.ps1 — يجهّز فيديو مرجعي ويرفعه على GitHub لأقرأه
#
#  الاستخدام في PowerShell:
#     .\send-ref.ps1 "C:\Users\me\Downloads\reel.mp4" "siyaq-ref"
# ──────────────────────────────────────────────────────────────
param(
  [Parameter(Mandatory = $true)][string]$Source,
  [string]$Name = "ref-$(Get-Date -Format 'yyyyMMdd-HHmm')"
)
$ErrorActionPreference = "Stop"
$Repo   = "https://github.com/nooh11/claud.git"
$Branch = "assets"

foreach ($exe in @("ffmpeg", "git")) {
  if (-not (Get-Command $exe -ErrorAction SilentlyContinue)) {
    Write-Host "x $exe غير مثبت.  ويندوز: winget install $exe" -ForegroundColor Red; exit 1
  }
}
if (-not (Test-Path $Source)) { Write-Host "x الملف غير موجود: $Source" -ForegroundColor Red; exit 1 }

$Work = Join-Path $env:TEMP ("ref-" + [guid]::NewGuid().ToString("N").Substring(0,8))
$Out  = Join-Path $Work "refs\$Name"
New-Item -ItemType Directory -Force -Path $Out | Out-Null

$dur = [double](ffprobe -v error -show_entries format=duration -of csv=p=0 $Source)
Write-Host "> مدة الفيديو: $([int]$dur)s"

Write-Host "> أبني نسخة مصغّرة..."
ffmpeg -nostdin -loglevel error -y -i $Source -vf "scale=540:-2" `
  -c:v libx264 -crf 32 -preset veryfast -an (Join-Path $Out "proxy.mp4")

Write-Host "> أبني ورقة التجميع..."
$step = [math]::Max(0.2, $dur / 20)
ffmpeg -nostdin -loglevel error -y -i $Source `
  -vf "fps=1/$step,scale=360:-2,tile=4x5" -frames:v 1 -q:v 3 (Join-Path $Out "sheet.jpg")

Get-ChildItem $Out | ForEach-Object { "   {0}  {1:N1} MB" -f $_.Name, ($_.Length / 1MB) }

Write-Host "> أرفع على GitHub..."
Push-Location $Work
git init -q
git remote add origin $Repo
git fetch -q --depth 1 origin $Branch
git checkout -q -b $Branch FETCH_HEAD
git add "refs/$Name"
git -c user.email=ref@local -c user.name=ref commit -qm "Add reference: $Name"
git push -q origin $Branch
Pop-Location
Remove-Item -Recurse -Force $Work

Write-Host ""
Write-Host "تم. قل لكلود:  وصل المرجع $Name" -ForegroundColor Green
