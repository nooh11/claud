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
import { brandFont } from "../fonts";
import { Reveal } from "../Reveal";
import type { Project } from "../schema";

/** الغلاف الختامي — إلزامي لكل مشروع (الدليل ص 29)، على قالب الآوترو ص 59. */
export const Outro: React.FC<Project> = ({
  projectName,
  district,
  city,
  phonePrimary,
  phoneSecondary,
  website,
  adLicence,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Outro scene"
      style={{
        backgroundColor: "#003E34",
        direction: "rtl",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "270px 88px 330px",
      }}
    >
      <Img
        name="Ehya logo"
        src={staticFile("ehya-amlak-white.svg")}
        style={{
          width: 420,
          marginBottom: 60,
          opacity: interpolate(frame, [0, 0.8 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      />

      <Interactive.Div name="Name slot" style={{ width: "100%", textAlign: "center" }}>
        <Reveal name="Name reveal" start={0.3 * fps} end={1.3 * fps}>
          <Interactive.Div
            name="Project name"
            style={{ fontFamily: brandFont, fontSize: 100, fontWeight: 700, lineHeight: 1.2, color: "#FFFFFF" }}
          >
            {projectName}
          </Interactive.Div>
        </Reveal>
        <Reveal name="Place reveal" start={0.6 * fps} end={1.6 * fps}>
          <Interactive.Div
            name="Project place"
            style={{ fontFamily: brandFont, fontSize: 40, fontWeight: 300, lineHeight: 1.5, color: "#E8C77A" }}
          >
            {district} — {city}
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div
        name="CTA bar"
        style={{
          marginTop: 60,
          backgroundColor: "#FFB900",
          color: "#00221D",
          fontFamily: brandFont,
          fontSize: 50,
          fontWeight: 600,
          lineHeight: 1.4,
          padding: "18px 70px",
          opacity: interpolate(frame, [1 * fps, 1.7 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
          translate: interpolate(frame, [1 * fps, 1.7 * fps], ["0px 30px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        احجــز وحدتــك الآن
      </Interactive.Div>

      <Interactive.Div
        name="Phones"
        style={{
          marginTop: 60,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 30,
          direction: "ltr",
          opacity: interpolate(frame, [1.3 * fps, 2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        <Img name="Contact icon" src={staticFile("icons/contact-yellow.svg")} style={{ height: 44 }} />
        <Interactive.Div
          name="Phone one"
          style={{ fontFamily: brandFont, fontSize: 52, fontWeight: 600, letterSpacing: 1.5, color: "#FFFFFF" }}
        >
          {phonePrimary}
        </Interactive.Div>
        <Interactive.Div name="Sep" style={{ width: 1, height: 40, backgroundColor: "rgba(237,235,228,.35)" }} />
        <Interactive.Div
          name="Phone two"
          style={{ fontFamily: brandFont, fontSize: 52, fontWeight: 600, letterSpacing: 1.5, color: "#FFFFFF" }}
        >
          {phoneSecondary}
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Meta"
        style={{
          position: "absolute",
          bottom: 330,
          textAlign: "center",
          opacity: interpolate(frame, [1.7 * fps, 2.4 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        <Interactive.Div
          name="Website"
          style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 500, letterSpacing: 2.5, color: "#EDEBE4" }}
        >
          {website}
        </Interactive.Div>
        <Interactive.Div
          name="Licence"
          style={{ fontFamily: brandFont, fontSize: 20, fontWeight: 300, color: "rgba(237,235,228,.45)", marginTop: 6 }}
        >
          {adLicence}
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Fade out"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#00221D",
          opacity: interpolate(frame, [durationInFrames - 30, durationInFrames], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 1, 1),
          }),
        }}
      />
    </AbsoluteFill>
  );
};
