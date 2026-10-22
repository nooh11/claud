/**
 * تُدار — رموز القالب A «مفيد».
 * المرجع: ملف سياق الهوية (08-Brand-Context.md) + خطة ريلز نوفمبر 2026.
 */
export const C = {
  burgundy: "#4A0A2E",
  orange: "#E05526",
  sand: "#F3E6D5",
  navy: "#0A2947",
  paper: "#FBF6EE",
  black: "#000000",
} as const;

/** القسم 5: العربي Noor، الإنجليزي والأرقام Alexandria. */
export const FONT = "Noor";
export const FONT_NUM = "Alexandria";

/**
 * القسم 7 — تيك توك: 180 أعلى، 480 أسفل، 150 يمين.
 * خطة الريلز تشدّد الأعلى إلى 250، وأخذنا بالأشدّ.
 * الشعار أعلى اليمين على حدّ الهامش، وعرضه خُمس عرض المنشور = 216.
 */
export const SAFE = {
  top: 250,
  bottom: 480,
  right: 150,
  left: 88,
  captionTop: 1050,
  captionBottom: 1400,
  logoWidth: 216,
} as const;
