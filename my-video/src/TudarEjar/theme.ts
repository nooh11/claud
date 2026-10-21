/**
 * تُدار العقارية — رموز الهوية.
 * `brandFont` هو نقطة التبديل الوحيدة: ضع ملفات «نور» في public/fonts
 * وغيّر الاسم هنا، فيسري على الفيديو كله.
 */
export const colors = {
  paper: "#EDE6DA",
  ink: "#1E0A14",
  burgundy: "#4A0A2E",
  orange: "#E05526",
  sand: "#F3E6D5",
  navy: "#0A2947",
} as const;

export const brandFont = "IBM Plex Sans Arabic";

/** التخطيط الثابت — من بنية «سياق». */
export const layout = {
  width: 1080,
  height: 1920,
  margin: 64,
  sideMargin: 70,
  textTop: 230,
  cardTop: 520,
  cardBottom: 1720,
  cardRadius: 36,
  logoWidth: 150,
} as const;
