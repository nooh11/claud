#!/usr/bin/env bash
# ──────────────────────────────────────────────────────────────
#  send-ref.sh — يجهّز فيديو مرجعي ويرفعه على GitHub لأقرأه
#
#  الاستخدام:
#     ./send-ref.sh ~/Downloads/reel.mp4 siyaq-ref
#
#  ينتج ملفين صغيرين ويرفعهما على فرع assets:
#     refs/<الاسم>/proxy.mp4   نسخة مصغّرة بلا صوت
#     refs/<الاسم>/sheet.jpg   ورقة تجميع 20 لقطة في صورة واحدة
# ──────────────────────────────────────────────────────────────
set -euo pipefail

SRC="${1:?مرّر مسار الفيديو: ./send-ref.sh video.mp4 اسم-المرجع}"
NAME="${2:-ref-$(date +%Y%m%d-%H%M)}"
REPO="https://github.com/nooh11/claud.git"
BRANCH="assets"

command -v ffmpeg >/dev/null || { echo "✗ ffmpeg غير مثبت.  ماك: brew install ffmpeg"; exit 1; }
command -v git    >/dev/null || { echo "✗ git غير مثبت."; exit 1; }
[ -f "$SRC" ] || { echo "✗ الملف غير موجود: $SRC"; exit 1; }

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
OUT="$WORK/refs/$NAME"
mkdir -p "$OUT"

DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$SRC" | cut -d. -f1)
echo "▸ مدة الفيديو: ${DUR}s"

echo "▸ أبني نسخة مصغّرة…"
ffmpeg -nostdin -loglevel error -y -i "$SRC" \
  -vf "scale=540:-2" -c:v libx264 -crf 32 -preset veryfast -an \
  "$OUT/proxy.mp4"

echo "▸ أبني ورقة التجميع…"
STEP=$(awk -v d="${DUR:-20}" 'BEGIN{s=d/20; print (s<0.2?0.2:s)}')
ffmpeg -nostdin -loglevel error -y -i "$SRC" \
  -vf "fps=1/${STEP},scale=360:-2,tile=4x5" -frames:v 1 -q:v 3 \
  "$OUT/sheet.jpg"

echo "▸ الأحجام:"; du -h "$OUT"/* | sed 's/^/   /'

echo "▸ أرفع على GitHub…"
cd "$WORK"
git init -q
git remote add origin "$REPO"
git fetch -q --depth 1 origin "$BRANCH"
git checkout -q -b "$BRANCH" FETCH_HEAD
git add "refs/$NAME"
git -c user.email=ref@local -c user.name=ref commit -qm "Add reference: $NAME"
git push -q origin "$BRANCH"

echo
echo "✓ تم. قل لكلود:  وصل المرجع $NAME"
