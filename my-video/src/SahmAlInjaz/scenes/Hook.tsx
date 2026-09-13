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
import type { Project } from "../schema";

/**
 * الغلاف — الصورة تملأ الأسفل وتذوب في كتلة الأخضر الغامق أعلاها،
 * والمحتوى يتدرّج: الشعار ← الحي ← السعر ← مؤشرات ← دعوة الحجز.
 */
export const Hook: React.FC<Project> = ({
  projectName,
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
  website,
  unifiedNumber,
  adLicence,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill name="Cover scene" style={{ backgroundColor: "#003E34", direction: "rtl" }}>
      <Img
        name="Project photo"
        src={staticFile(photo)}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          width: "100%",
          height: 800,
          objectFit: "cover",
          objectPosition: "center 40%",
          scale: interpolate(frame, [0, durationInFrames], [1.05, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 0.6, 1),
            output: "perceptual-scale",
          }),
        }}
      />
      <Interactive.Div
        name="Green wash"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, #003E34 0%, #003E34 55%, rgba(0,62,52,0.88) 62%, rgba(0,62,52,0.45) 70%, rgba(0,62,52,0) 80%)",
        }}
      />

      <Interactive.Div
        name="Footer scrim"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          left: 0,
          height: 240,
          background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      <Interactive.Div
        name="Content column"
        style={{
          position: "absolute",
          top: 250,
          right: 80,
          left: 80,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Img
          name="Project logo"
          src={staticFile(logo)}
          style={{
            width: 280,
            opacity: interpolate(frame, [0, 0.8 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
            translate: interpolate(frame, [0, 0.8 * fps], ["0px 30px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        />

        <Interactive.Div
          name="Eyebrow"
          style={{
            fontFamily: brandFont,
            fontSize: 40,
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#FFFFFF",
            marginTop: 70,
            opacity: interpolate(frame, [0.3 * fps, 1.1 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
            translate: interpolate(frame, [0.3 * fps, 1.1 * fps], ["0px 30px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        >
          تملّك في {projectName} · {district} — {city}
        </Interactive.Div>

        <Interactive.Div
          name="Price label"
          style={{
            fontFamily: brandFont,
            fontSize: 60,
            fontWeight: 400,
            lineHeight: 1.5,
            color: "#FFFFFF",
            marginTop: 30,
            opacity: interpolate(frame, [0.6 * fps, 1.4 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
            translate: interpolate(frame, [0.6 * fps, 1.4 * fps], ["0px 30px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        >
          بأسعار تبدأ من
        </Interactive.Div>

        <Interactive.Div
          name="Price row"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            marginTop: 10,
            opacity: interpolate(frame, [0.9 * fps, 1.6 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
            translate: interpolate(frame, [0.9 * fps, 1.6 * fps], ["0px 30px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        >
          <Interactive.Div
            name="Currency glyph"
            style={{
              fontFamily: brandFont,
              fontSize: 90,
              fontWeight: 400,
              lineHeight: 1.3,
              color: "#FFFFFF",
            }}
          >
            {currencyGlyph}
          </Interactive.Div>
          <Interactive.Div
            name="Price value"
            style={{
              fontFamily: brandFont,
              fontSize: 150,
              fontWeight: 600,
              lineHeight: 1.3,
              color: "#FFFFFF",
            }}
          >
            <Counter to={priceFrom} from={54} durationInFrames={70} separator />
          </Interactive.Div>
        </Interactive.Div>

        <Interactive.Div
          name="Stat row"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: 90,
            marginTop: 60,
            opacity: interpolate(frame, [1.4 * fps, 2.2 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
            translate: interpolate(frame, [1.4 * fps, 2.2 * fps], ["0px 30px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        >
          <Interactive.Div
            name="Stat area"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 220 }}
          >
            <Img name="Area icon" src={staticFile("icons/area-yellow.svg")} style={{ height: 80 }} />
            <Interactive.Div
              name="Area value"
              style={{ fontFamily: brandFont, fontSize: 50, fontWeight: 600, lineHeight: 1.5, color: "#FFFFFF", marginTop: 20 }}
            >
              <Counter to={areaMax} from={90} durationInFrames={50} /> م²
            </Interactive.Div>
            <Interactive.Div
              name="Area label"
              style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 300, lineHeight: 1.5, color: "#FFFFFF" }}
            >
              مساحات تصل إلى
            </Interactive.Div>
          </Interactive.Div>

          <Interactive.Div
            name="Stat rooms"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 220 }}
          >
            <Img name="Rooms icon" src={staticFile("icons/bedrooms-yellow.svg")} style={{ height: 80 }} />
            <Interactive.Div
              name="Rooms value"
              style={{ fontFamily: brandFont, fontSize: 50, fontWeight: 600, lineHeight: 1.5, color: "#FFFFFF", marginTop: 20 }}
            >
              {roomsCount}
            </Interactive.Div>
            <Interactive.Div
              name="Rooms label"
              style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 300, lineHeight: 1.5, color: "#FFFFFF" }}
            >
              غرف نوم
            </Interactive.Div>
          </Interactive.Div>

          <Interactive.Div
            name="Stat models"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 220 }}
          >
            <Img name="Models icon" src={staticFile("icons/models-yellow.svg")} style={{ height: 80 }} />
            <Interactive.Div
              name="Models value"
              style={{ fontFamily: brandFont, fontSize: 50, fontWeight: 600, lineHeight: 1.5, color: "#FFFFFF", marginTop: 20 }}
            >
              {modelsCount}
            </Interactive.Div>
            <Interactive.Div
              name="Models label"
              style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 300, lineHeight: 1.5, color: "#FFFFFF" }}
            >
              نماذج
            </Interactive.Div>
          </Interactive.Div>
        </Interactive.Div>

        <Interactive.Div
          name="CTA line"
          style={{
            fontFamily: brandFont,
            fontSize: 60,
            fontWeight: 600,
            lineHeight: 1.5,
            color: "#FFFFFF",
            marginTop: 70,
            opacity: interpolate(frame, [1.9 * fps, 2.7 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
            translate: interpolate(frame, [1.9 * fps, 2.7 * fps], ["0px 30px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        >
          {ctaLine}
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Footer bar"
        style={{
          position: "absolute",
          bottom: 60,
          right: 80,
          left: 80,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: brandFont,
          fontSize: 30,
          fontWeight: 400,
          lineHeight: 1.5,
          color: "#FFFFFF",
          opacity: interpolate(frame, [2.3 * fps, 3 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        <Interactive.Div name="Footer licence" style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 300, color: "#FFFFFF" }}>
          {adLicence}
        </Interactive.Div>
        <Interactive.Div name="Footer web" style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 400, color: "#FFFFFF", direction: "ltr" }}>
          {website} · {unifiedNumber}
        </Interactive.Div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
