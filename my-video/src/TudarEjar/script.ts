/**
 * السكربت والتوقيتات. المدد بالثواني كما في جدول البرومبت.
 * عند وصول voice.mp3 تُستبدل هذه الأرقام بتوقيتات المحاذاة الفعلية.
 */
export type Shot = {
  readonly id: number;
  readonly from: number;
  readonly to: number;
  /** السطر الأول — كلام عادي. فارغ يعني بلا سطر أول. */
  readonly lineOne: string;
  /** السطر الثاني — ثقيل. الكلمة بين نجمتين تأخذ اللون البرتقالي. */
  readonly lineTwo: string;
  /** ما يعرضه داخل البطاقة. */
  readonly card: string;
};

export const shots: readonly Shot[] = [
  { id: 1,  from: 0.0,  to: 2.3,  lineOne: "أجّرت شقتك..", lineTwo: "بكلمة *رجال؟*", card: "handshake" },
  { id: 2,  from: 2.4,  to: 3.4,  lineOne: "",             lineTwo: "*اسمعني*",       card: "palm" },
  { id: 3,  from: 3.5,  to: 6.0,  lineOne: "أول شهر",      lineTwo: "«أبشر.. *بحوّل لك*»", card: "chat1" },
  { id: 4,  from: 6.1,  to: 7.7,  lineOne: "ثاني شهر",     lineTwo: "«والله *ظروف*»",  card: "chat2" },
  { id: 5,  from: 7.8,  to: 8.3,  lineOne: "وتسأله..",     lineTwo: "*وين الإيجار؟*",  card: "chat3" },
  { id: 6,  from: 8.4,  to: 10.2, lineOne: "ثالث شهر..",   lineTwo: "ولا *رد*",        card: "silence" },
  { id: 7,  from: 10.3, to: 12.2, lineOne: "تقول:",        lineTwo: "بروح أطالب *بحقي*", card: "map" },
  { id: 8,  from: 12.3, to: 14.0, lineOne: "يقولون لك:",   lineTwo: "وين العقد *الموثّق؟*", card: "gavel" },
  { id: 9,  from: 14.1, to: 15.6, lineOne: "ما فيه؟ ارفع قضية..", lineTwo: "*وانتظر*", card: "wait" },
  { id: 10, from: 15.7, to: 18.2, lineOne: "والشقة؟ مشغولة.", lineTwo: "والإيجار؟ *واقف*", card: "split" },
  { id: 11, from: 18.3, to: 21.4, lineOne: "أما لو عقدك موثّق في «إيجار»..", lineTwo: "حقك ينفّذ *على طول*", card: "contract" },
  { id: 12, from: 21.5, to: 24.0, lineOne: "خلك أذكى..",   lineTwo: "لا تسلّم مفتاح قبل *التوثيق*", card: "key" },
  { id: 13, from: 24.1, to: 27.2, lineOne: "وحنا في تُدار..", lineTwo: "ما نسلّم مفتاح إلا والعقد *موثّق*", card: "handover" },
  { id: 14, from: 27.3, to: 31.0, lineOne: "نُدير لك أملاكك،", lineTwo: "ونسوّق لك *عقارك*", card: "endcard" },
];

export const TOTAL_SECONDS = 31.0;
export const SERIES_NAME = "أخطاء الملّاك";
