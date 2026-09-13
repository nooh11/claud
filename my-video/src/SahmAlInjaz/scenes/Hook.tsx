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
 * المشهد الأول — قالب نصوص الفيديوهات (الدليل ص 58):
 * الشعار الأبيض في الأعلى، والنص في الثلث السفلي على سطرين،
 * الثاني داخل بلوك مصمت بالأخضر الغامق.
 */
export const Hook: React.FC<Project> = ({
  projectName,
  statusTag,
  headline,
  subline,
  district,
  city,
  photo,
}) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill name="Hook scene" style={{ backgroundColor: "#003E34", direction: "rtl" }}>
      <Img
        name="Project photo"
        src={staticFile(photo)}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          scale: interpolate(frame, [0, durationInFrames], [1, 1.08], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 0.6, 1),
            output: "perceptual-scale",
          }),
        }}
      />
      <Interactive.Div
        name="Bottom scrim"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.78) 22%, rgba(0,0,0,0.30) 48%, rgba(0,0,0,0) 68%)",
        }}
      />
      <Interactive.Div
        name="Top scrim"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 22%)",
        }}
      />

      <Img
        name="Ehya logo"
        src={staticFile("ehya-logo-white.svg")}
        style={{
          position: "absolute",
          top: 250,
          right: 80,
          width: 200,
          opacity: interpolate(frame, [0, 0.7 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      />

      <Interactive.Div
        name="Status tag"
        style={{
          position: "absolute",
          top: 270,
          left: 80,
          backgroundColor: "#FFB900",
          color: "#003E34",
          fontFamily: brandFont,
          fontSize: 40,
          fontWeight: 700,
          lineHeight: 1.6,
          padding: "10px 40px",
          opacity: interpolate(frame, [0.3 * fps, 1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
          translate: interpolate(frame, [0.3 * fps, 1 * fps], ["40px 0px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        {statusTag}
      </Interactive.Div>

      <Interactive.Div
        name="Caption block"
        style={{
          position: "absolute",
          right: 80,
          left: 80,
          bottom: 330,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Interactive.Div
          name="Project name"
          style={{
            fontFamily: brandFont,
            fontSize: 130,
            fontWeight: 700,
            lineHeight: 1.4,
            color: "#FFFFFF",
            opacity: interpolate(
              frame,
              [0.5 * fps, 1.3 * fps, durationInFrames - 30, durationInFrames],
              [0, 1, 1, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
              },
            ),
            translate: interpolate(frame, [0.5 * fps, 1.3 * fps], ["0px 60px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        >
          {projectName}
        </Interactive.Div>

        <Interactive.Div
          name="Headline"
          style={{
            fontFamily: brandFont,
            fontSize: 50,
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#FFFFFF",
            marginTop: 10,
            opacity: interpolate(
              frame,
              [0.9 * fps, 1.7 * fps, durationInFrames - 30, durationInFrames],
              [0, 1, 1, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
              },
            ),
            translate: interpolate(frame, [0.9 * fps, 1.7 * fps], ["0px 40px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        >
          {headline}
        </Interactive.Div>

        <Interactive.Div
          name="Location block"
          style={{
            backgroundColor: "#003E34",
            color: "#FFFFFF",
            fontFamily: brandFont,
            fontSize: 50,
            fontWeight: 600,
            lineHeight: 1.6,
            padding: "10px 30px",
            marginTop: 20,
            opacity: interpolate(
              frame,
              [1.3 * fps, 2.1 * fps, durationInFrames - 30, durationInFrames],
              [0, 1, 1, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
              },
            ),
            translate: interpolate(frame, [1.3 * fps, 2.1 * fps], ["0px 40px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        >
          {district} — {city} · {subline}
        </Interactive.Div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
