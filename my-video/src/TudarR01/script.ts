/**
 * R01 — «عقدك خارج إيجار؟» · الأحد 25 أكتوبر · مفيد · القالب A · 30 ث
 *
 * النبرة: عربية فصيحة فقط. القسم 2 من ملف الهوية يمنع العامية منعًا صريحًا،
 * وهو «المرجع المعتمد، ويتقدّم على أي افتراض» — فكُتبت الجمل فصحى
 * خلافًا لدليل اللهجة في خطة الريلز.
 */
export type Beat = {
  readonly from: number;
  readonly to: number;
  /** النص على الشاشة. ما بين *نجمتين* يأخذ الكبسولة البرتقالية. */
  readonly caption: string;
  readonly stage: string;
  /** شارة المصدر تظهر أثناء ذكر المعلومة فقط. */
  readonly source?: string;
};

export const beats: readonly Beat[] = [
  { from: 0,    to: 2.5,  caption: "هل أجّرتَ شقتك بعقد *ورقي*؟", stage: "paper" },
  { from: 2.5,  to: 8,    caption: "«إيجار»: العقد غير المسجّل *لا يُعتدّ به*", stage: "quote",
    source: "المصدر: تصريح «إيجار» — سبق، 9 يوليو 2025" },
  { from: 8,    to: 13,   caption: "لا *إداريًا* ولا *قضائيًا*", stage: "void" },
  { from: 13,   to: 18,   caption: "يتأخّر المستأجر.. فيقع *الخلاف*", stage: "delay" },
  { from: 18,   to: 23,   caption: "الحل: *وثّق العقد*", stage: "verify" },
  { from: 23,   to: 27,   caption: "أملاكك *تُدار*.. وأنت مرتاح", stage: "tudar" },
  { from: 27,   to: 30,   caption: "", stage: "end" },
];

export const TOTAL = 30;
