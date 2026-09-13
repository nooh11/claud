import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// الخطوط محمّلة محليًا من مجلد public/fonts حتى يعمل الرندر بدون إنترنت.
// خط العناوين والأرقام
export const headingFont = "Cairo";
// خط التفاصيل
export const bodyFont = "Tajawal";

await Promise.all([
  loadFont({
    family: "Cairo",
    url: staticFile("fonts/Cairo-700.ttf"),
    weight: "700",
    format: "truetype",
  }),
  loadFont({
    family: "Cairo",
    url: staticFile("fonts/Cairo-900.ttf"),
    weight: "900",
    format: "truetype",
  }),
  loadFont({
    family: "Tajawal",
    url: staticFile("fonts/Tajawal-400.ttf"),
    weight: "400",
    format: "truetype",
  }),
  loadFont({
    family: "Tajawal",
    url: staticFile("fonts/Tajawal-500.ttf"),
    weight: "500",
    format: "truetype",
  }),
  loadFont({
    family: "Tajawal",
    url: staticFile("fonts/Tajawal-700.ttf"),
    weight: "700",
    format: "truetype",
  }),
]);
