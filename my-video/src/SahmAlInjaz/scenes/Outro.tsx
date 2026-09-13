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
import type { Project } from "../schema";

/**
 * الغلاف الختامي — إلزامي لكل مشروع (الدليل ص 29)، ومبني على قالب الآوترو (ص 59).
 * `logo` فارغ = مساحة محجوزة لشعار المشروع. ضع الملف في public/ واكتب اسمه في الحقل.
 */
export const Outro: React.FC<Project> = ({
  projectName,
  district,
  city,
  ctaLine,
  phonePrimary,
  phoneSecondary,
  website,
  unifiedNumber,
  adLicence,
  logo,
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
        justifyContent: "center",
        alignItems: "center",
        padding: "250px 80px 320px",
      }}
    >
      {logo === "" ? (
        <Interactive.Div
          name="Logo slot"
          style={{
            width: 420,
            height: 180,
            border: "3px dashed #FFB900",
            color: "#FFB900",
            fontFamily: brandFont,
            fontSize: 30,
            fontWeight: 400,
            lineHeight: 1.6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            marginBottom: 70,
            opacity: interpolate(frame, [0, 0.7 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        >
          مكان شعار إحياء الأملاك
        </Interactive.Div>
      ) : (
        <Img
          name="Project logo"
          src={staticFile(logo)}
          style={{
            width: 420,
            marginBottom: 70,
            opacity: interpolate(frame, [0, 0.7 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        />
      )}

      <Interactive.Div
        name="Project name"
        style={{
          fontFamily: brandFont,
          fontSize: 100,
          fontWeight: 700,
          lineHeight: 1.4,
          color: "#FFFFFF",
          opacity: interpolate(frame, [0.3 * fps, 1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
          translate: interpolate(frame, [0.3 * fps, 1 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        {projectName}
      </Interactive.Div>

      <Interactive.Div
        name="Project location"
        style={{
          fontFamily: brandFont,
          fontSize: 40,
          fontWeight: 400,
          lineHeight: 1.6,
          color: "#FFFFFF",
          marginBottom: 60,
          opacity: interpolate(frame, [0.5 * fps, 1.2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
          translate: interpolate(frame, [0.5 * fps, 1.2 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        {district} — {city}
      </Interactive.Div>

      <Interactive.Div
        name="CTA line"
        style={{
          fontFamily: brandFont,
          fontSize: 60,
          fontWeight: 700,
          lineHeight: 1.4,
          color: "#003E34",
          backgroundColor: "#FFB900",
          padding: "10px 50px",
          marginBottom: 40,
          opacity: interpolate(frame, [0.8 * fps, 1.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
          translate: interpolate(frame, [0.8 * fps, 1.5 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        {ctaLine}
      </Interactive.Div>

      <Interactive.Div
        name="Phone primary"
        style={{
          fontFamily: brandFont,
          fontSize: 70,
          fontWeight: 700,
          lineHeight: 1.4,
          color: "#FFFFFF",
          direction: "ltr",
          opacity: interpolate(frame, [1.1 * fps, 1.8 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
          translate: interpolate(frame, [1.1 * fps, 1.8 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        {phonePrimary}
      </Interactive.Div>

      <Interactive.Div
        name="Phone secondary"
        style={{
          fontFamily: brandFont,
          fontSize: 70,
          fontWeight: 700,
          lineHeight: 1.4,
          color: "#FFFFFF",
          direction: "ltr",
          marginBottom: 50,
          opacity: interpolate(frame, [1.3 * fps, 2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
          translate: interpolate(frame, [1.3 * fps, 2 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        {phoneSecondary}
      </Interactive.Div>

      <Interactive.Div
        name="Web line"
        style={{
          fontFamily: brandFont,
          fontSize: 40,
          fontWeight: 500,
          lineHeight: 1.6,
          color: "#FFB900",
          direction: "ltr",
          opacity: interpolate(frame, [1.6 * fps, 2.3 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        {website} | {unifiedNumber}
      </Interactive.Div>

      <Interactive.Div
        name="Ad licence"
        style={{
          position: "absolute",
          bottom: 300,
          fontFamily: brandFont,
          fontSize: 30,
          fontWeight: 300,
          lineHeight: 1.6,
          color: "#FFFFFF",
          opacity: interpolate(frame, [2 * fps, 2.6 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        {adLicence}
      </Interactive.Div>

      <Interactive.Div
        name="Fade to black"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#000000",
          opacity: interpolate(frame, [durationInFrames - 40, durationInFrames], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 1, 1),
          }),
        }}
      />
    </AbsoluteFill>
  );
};
