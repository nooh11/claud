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
 * التسلسل القصصي (الدليل ص 29): من اللقطات الخارجية إلى التفاصيل الداخلية.
 * ثلاث لقطات تتعاقب بتلاشٍ متقاطع مع حركة تقريب بطيئة.
 */
export const Interior: React.FC<Project> = ({ galleryOne, galleryTwo, galleryThree }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill name="Interior scene" style={{ backgroundColor: "#003E34", direction: "rtl" }}>
      <Img
        name="Shot one"
        src={staticFile(galleryOne)}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          scale: interpolate(frame, [0, 130], [1, 1.07], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 0.6, 1),
            output: "perceptual-scale",
          }),
          opacity: interpolate(frame, [0, 20, 100, 130], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
          }),
        }}
      />
      <Img
        name="Shot two"
        src={staticFile(galleryTwo)}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          scale: interpolate(frame, [100, 240], [1, 1.07], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 0.6, 1),
            output: "perceptual-scale",
          }),
          opacity: interpolate(frame, [100, 130, 210, 240], [0, 1, 1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
          }),
        }}
      />
      <Img
        name="Shot three"
        src={staticFile(galleryThree)}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          scale: interpolate(frame, [210, 340], [1, 1.07], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 0.6, 1),
            output: "perceptual-scale",
          }),
          opacity: interpolate(frame, [210, 240], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      />

      <Interactive.Div
        name="Bottom scrim"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.80) 20%, rgba(0,0,0,0.25) 44%, rgba(0,0,0,0) 62%)",
        }}
      />

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
          name="Caption line one"
          style={{
            fontFamily: brandFont,
            fontSize: 70,
            fontWeight: 400,
            lineHeight: 1.5,
            color: "#FFFFFF",
            opacity: interpolate(
              frame,
              [0.4 * fps, 1.2 * fps, durationInFrames - 30, durationInFrames],
              [0, 1, 1, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
              },
            ),
            translate: interpolate(frame, [0.4 * fps, 1.2 * fps], ["0px 40px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        >
          تدخل بيتك جاهزًا
        </Interactive.Div>
        <Interactive.Div
          name="Caption line two"
          style={{
            backgroundColor: "#003E34",
            color: "#FFFFFF",
            fontFamily: brandFont,
            fontSize: 70,
            fontWeight: 700,
            lineHeight: 1.5,
            padding: "10px 30px",
            marginTop: 20,
            opacity: interpolate(
              frame,
              [0.8 * fps, 1.6 * fps, durationInFrames - 30, durationInFrames],
              [0, 1, 1, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
              },
            ),
            translate: interpolate(frame, [0.8 * fps, 1.6 * fps], ["0px 40px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        >
          وتبدأ حياتك فيه من أول يوم
        </Interactive.Div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
