import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Counter } from "../Counter";
import { brandFont } from "../fonts";
import { Reveal } from "../Reveal";
import type { Project } from "../schema";

/**
 * الغلاف — كتلة خضراء داكنة، الشعار في الأعلى، عنوان عريض،
 * صورة مؤطّرة بين لوحين مائلين، ثم السعر ككتلة رقمية كبيرة.
 * الكشف بستارة تنزاح من اليمين لليسار، واللوحان ينزلقان من الحافتين.
 */
export const Hook: React.FC<Project> = ({
  projectName,
  headline,
  district,
  city,
  photo,
  logo,
  priceFrom,
  currencyGlyph,
  areaMax,
  modelsCount,
  roomsCount,
  ctaLine,
  phonePrimary,
  phoneSecondary,
  adLicence,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill name="Cover scene" style={{ backgroundColor: "#003E34", direction: "rtl" }}>
      <Img
        name="Ehya logo"
        src={staticFile(logo)}
        style={{
          position: "absolute",
          top: 250,
          right: 80,
          width: 240,
          opacity: interpolate(frame, [0, 0.8 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      />

      <Interactive.Div name="Status slot" style={{ position: "absolute", top: 280, left: 80, width: 380 }}>
        <Reveal name="Status reveal" start={0.2 * fps} end={1 * fps} curtain="#003E34">
          <Interactive.Div
            name="Status chip"
            style={{
              display: "inline-block",
              fontFamily: brandFont,
              fontSize: 30,
              fontWeight: 500,
              lineHeight: 1.5,
              color: "#003E34",
              backgroundColor: "#FFB900",
              padding: "8px 30px",
            }}
          >
            بدأ البيع · جاهز للتسليم
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div
        name="Headline block"
        style={{ position: "absolute", top: 420, right: 80, left: 80, textAlign: "center" }}
      >
        <Reveal name="Name reveal" start={0.4 * fps} end={1.4 * fps} curtain="#003E34">
          <Interactive.Div
            name="Project name"
            style={{ fontFamily: brandFont, fontSize: 120, fontWeight: 700, lineHeight: 1.3, color: "#FFB900" }}
          >
            {projectName}
          </Interactive.Div>
        </Reveal>
        <Reveal name="Headline reveal" start={0.8 * fps} end={1.8 * fps} curtain="#003E34">
          <Interactive.Div
            name="Headline"
            style={{ fontFamily: brandFont, fontSize: 50, fontWeight: 400, lineHeight: 1.5, color: "#FFFFFF" }}
          >
            {headline}
          </Interactive.Div>
        </Reveal>
        <Reveal name="Location reveal" start={1.1 * fps} end={2.1 * fps} curtain="#003E34">
          <Interactive.Div
            name="Location"
            style={{ fontFamily: brandFont, fontSize: 40, fontWeight: 300, lineHeight: 1.5, color: "#FFFFFF" }}
          >
            {district} — {city}
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div
        name="Photo slot"
        style={{ position: "absolute", top: 750, right: 250, left: 250, height: 400 }}
      >
        <Reveal name="Photo reveal" start={1 * fps} end={2.1 * fps} curtain="#003E34">
          <Interactive.Div name="Photo frame" style={{ width: "100%", height: 400, overflow: "hidden" }}>
            <Img
              name="Project photo"
              src={staticFile(photo)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 42%",
                scale: interpolate(frame, [0, 320], [1.12, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.33, 0, 0.2, 1),
                  output: "perceptual-scale",
                }),
              }}
            />
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div
        name="Right panel"
        style={{
          position: "absolute",
          top: 750,
          right: 0,
          width: 230,
          height: 400,
          backgroundColor: "#FFB900",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 96%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          padding: "20px 24px 40px 16px",
          translate: interpolate(frame, [1.2 * fps, 2.1 * fps], ["230px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        <Interactive.Div name="Panel area" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Img name="Area icon" src={staticFile("icons/area-green.svg")} style={{ height: 60 }} />
          <Interactive.Div
            name="Area value"
            style={{ fontFamily: brandFont, fontSize: 40, fontWeight: 700, lineHeight: 1.4, color: "#003E34", marginTop: 10 }}
          >
            <Counter to={areaMax} from={110} durationInFrames={50} /> م²
          </Interactive.Div>
          <Interactive.Div
            name="Area label"
            style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 400, lineHeight: 1.4, color: "#003E34" }}
          >
            مساحة
          </Interactive.Div>
        </Interactive.Div>
        <Interactive.Div name="Panel rooms" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Img name="Rooms icon" src={staticFile("icons/bedrooms-green.svg")} style={{ height: 60 }} />
          <Interactive.Div
            name="Rooms value"
            style={{ fontFamily: brandFont, fontSize: 40, fontWeight: 700, lineHeight: 1.4, color: "#003E34", marginTop: 10 }}
          >
            {roomsCount}
          </Interactive.Div>
          <Interactive.Div
            name="Rooms label"
            style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 400, lineHeight: 1.4, color: "#003E34" }}
          >
            غرف نوم
          </Interactive.Div>
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Left panel"
        style={{
          position: "absolute",
          top: 750,
          left: 0,
          width: 230,
          height: 400,
          backgroundColor: "#00B15E",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 96%, 0% 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          padding: "20px 16px 40px 24px",
          translate: interpolate(frame, [1.4 * fps, 2.3 * fps], ["-230px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        <Interactive.Div name="Panel models" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Img name="Models icon" src={staticFile("icons/models-white.svg")} style={{ height: 60 }} />
          <Interactive.Div
            name="Models value"
            style={{ fontFamily: brandFont, fontSize: 40, fontWeight: 700, lineHeight: 1.4, color: "#FFFFFF", marginTop: 10 }}
          >
            {modelsCount}
          </Interactive.Div>
          <Interactive.Div
            name="Models label"
            style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 400, lineHeight: 1.4, color: "#FFFFFF" }}
          >
            نماذج
          </Interactive.Div>
        </Interactive.Div>
        <Interactive.Div name="Panel warranty" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Img name="Warranty icon" src={staticFile("icons/warranty-white.svg")} style={{ height: 60 }} />
          <Interactive.Div
            name="Warranty value"
            style={{ fontFamily: brandFont, fontSize: 40, fontWeight: 700, lineHeight: 1.4, color: "#FFFFFF", marginTop: 10 }}
          >
            10
          </Interactive.Div>
          <Interactive.Div
            name="Warranty label"
            style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 400, lineHeight: 1.4, color: "#FFFFFF" }}
          >
            سنوات ضمان
          </Interactive.Div>
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div name="Price slot" style={{ position: "absolute", top: 1200, right: 80, left: 80 }}>
        <Reveal name="Price reveal" start={1.7 * fps} end={2.7 * fps} curtain="#003E34">
          <Interactive.Div
            name="Price stack"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Interactive.Div
              name="Price label"
              style={{ fontFamily: brandFont, fontSize: 40, fontWeight: 400, lineHeight: 1.4, color: "#FFFFFF" }}
            >
              تبدأ الأسعار من
            </Interactive.Div>
            <Interactive.Div
              name="Price row"
              style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 30 }}
            >
            <Interactive.Div
              name="Price value"
              style={{ fontFamily: brandFont, fontSize: 160, fontWeight: 700, lineHeight: 1.2, color: "#FFFFFF" }}
            >
              <Counter to={priceFrom} from={110} durationInFrames={80} separator />
            </Interactive.Div>
            <Interactive.Div
              name="Currency glyph"
              style={{ fontFamily: brandFont, fontSize: 80, fontWeight: 400, lineHeight: 1.2, color: "#FFB900" }}
            >
              {currencyGlyph}
            </Interactive.Div>
            </Interactive.Div>
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div name="CTA slot" style={{ position: "absolute", top: 1430, right: 80, left: 80, textAlign: "center" }}>
        <Reveal name="CTA reveal" start={2.2 * fps} end={3.1 * fps} curtain="#003E34">
          <Interactive.Div
            name="CTA line"
            style={{ fontFamily: brandFont, fontSize: 60, fontWeight: 600, lineHeight: 1.5, color: "#FFB900" }}
          >
            {ctaLine}
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div
        name="Contact bar"
        style={{
          position: "absolute",
          top: 1540,
          right: 80,
          left: 80,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
          fontFamily: brandFont,
          fontSize: 50,
          fontWeight: 600,
          lineHeight: 1.4,
          color: "#FFFFFF",
          direction: "ltr",
          opacity: interpolate(frame, [2.6 * fps, 3.4 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        <Img name="Contact icon" src={staticFile("icons/contact-yellow.svg")} style={{ height: 46 }} />
        {phonePrimary}
        <Interactive.Div name="Phone divider" style={{ width: 2, height: 40, backgroundColor: "#FFB900" }} />
        {phoneSecondary}
      </Interactive.Div>

      <Interactive.Div
        name="Ad licence"
        style={{
          position: "absolute",
          bottom: 250,
          right: 80,
          left: 80,
          textAlign: "center",
          fontFamily: brandFont,
          fontSize: 30,
          fontWeight: 300,
          lineHeight: 1.5,
          color: "#FFFFFF",
          opacity: interpolate(frame, [2.9 * fps, 3.6 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        {adLicence}
      </Interactive.Div>
    </AbsoluteFill>
  );
};
