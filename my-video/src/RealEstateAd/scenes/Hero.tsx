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
import { bodyFont, headingFont } from "../fonts";
import type { Listing } from "../schema";

export const Hero: React.FC<Listing> = ({
  propertyType,
  district,
  city,
  area,
  readinessTag,
  photo,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Hero scene"
      style={{
        backgroundColor: "#0E3B2E",
        direction: "rtl",
      }}
    >
      <Img
        name="Property photo"
        src={staticFile(photo)}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          scale: interpolate(frame, [0, 200], [1, 1.12], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
            output: "perceptual-scale",
          }),
        }}
      />

      <Interactive.Div
        name="Bottom scrim"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(8,32,25,0.96) 26%, rgba(8,32,25,0.55) 48%, rgba(8,32,25,0) 70%)",
        }}
      />
      <Interactive.Div
        name="Top scrim"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(8,32,25,0.85) 0%, rgba(8,32,25,0) 24%)",
        }}
      />

      <Interactive.Div
        name="Readiness tag"
        style={{
          position: "absolute",
          top: 268,
          right: 80,
          fontFamily: bodyFont,
          fontSize: 42,
          fontWeight: 700,
          color: "#0E3B2E",
          backgroundColor: "#C9A227",
          borderRadius: 9999,
          padding: "18px 44px",
          opacity: interpolate(frame, [0.3 * fps, 1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.3 * fps, 1 * fps],
            ["40px 0px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        {readinessTag}
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
          name="Gold underline"
          style={{
            height: 8,
            backgroundColor: "#C9A227",
            borderRadius: 4,
            marginBottom: 34,
            width: interpolate(frame, [0.4 * fps, 1.4 * fps], ["0px", "180px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        />
        <Interactive.Div
          name="Property title"
          style={{
            fontFamily: headingFont,
            fontSize: 92,
            fontWeight: 900,
            lineHeight: 1.5,
            color: "#F4EFE6",
            opacity: interpolate(frame, [0.5 * fps, 1.3 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [0.5 * fps, 1.3 * fps],
              ["0px 50px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          {propertyType} · {district}
        </Interactive.Div>
        <Interactive.Div
          name="Property subtitle"
          style={{
            fontFamily: bodyFont,
            fontSize: 52,
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#CDDDD5",
            marginTop: 10,
            opacity: interpolate(frame, [0.9 * fps, 1.7 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [0.9 * fps, 1.7 * fps],
              ["0px 40px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          {city} · مساحة {area}
        </Interactive.Div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
