import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// IBM Plex Sans Arabic — العائلة الخطية المعتمدة في هوية إحياء (الدليل ص 13).
// محمّلة محليًا من public/fonts حتى يعمل الرندر بدون إنترنت.
export const brandFont = "IBM Plex Sans Arabic";

await Promise.all([
  loadFont({ family: "IBM Plex Sans Arabic", url: staticFile("fonts/IBMPlexSansArabic-300.ttf"), weight: "300", format: "truetype" }),
  loadFont({ family: "IBM Plex Sans Arabic", url: staticFile("fonts/IBMPlexSansArabic-400.ttf"), weight: "400", format: "truetype" }),
  loadFont({ family: "IBM Plex Sans Arabic", url: staticFile("fonts/IBMPlexSansArabic-500.ttf"), weight: "500", format: "truetype" }),
  loadFont({ family: "IBM Plex Sans Arabic", url: staticFile("fonts/IBMPlexSansArabic-600.ttf"), weight: "600", format: "truetype" }),
  loadFont({ family: "IBM Plex Sans Arabic", url: staticFile("fonts/IBMPlexSansArabic-700.ttf"), weight: "700", format: "truetype" }),
]);
