/**
 * تُدار — رموز القالب A «مفيد».
 * المرجع: خطة ريلز نوفمبر 2026، القسمان 1 و3.
 */
export const C = {
  burgundy: "#4A0A2E",
  orange: "#E05526",
  sand: "#F3E6D5",
  sandDeep: "#E6D3BA",
  paper: "#FBF6EE",
  navy: "#0A2947",
  ink: "#1E0413",
} as const;

/** ضع ملفات نور في public/fonts وغيّر هذا السطر وحده. */
export const FONT = "IBM Plex Sans Arabic";

/** المناطق الآمنة كما في القسم 3 — أسفل 480 لأزرار تيك توك. */
export const SAFE = {
  top: 250,
  bottom: 480,
  right: 150,
  left: 88,
  captionTop: 1050,
  captionBottom: 1400,
} as const;
