import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { bodyFont, headingFont } from "../fonts";
import type { Listing } from "../schema";
import { CheckIcon } from "./icons";

export const Features: React.FC<Listing> = ({ features }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Features scene"
      style={{
        backgroundColor: "#F4EFE6",
        direction: "rtl",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "250px 80px 320px",
      }}
    >
      <Interactive.Div
        name="Section label"
        style={{
          fontFamily: bodyFont,
          fontSize: 42,
          fontWeight: 500,
          letterSpacing: 2,
          color: "#9A7B18",
          opacity: interpolate(frame, [0, 0.6 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        لماذا هذا العرض
      </Interactive.Div>

      <Interactive.Div
        name="Section title"
        style={{
          fontFamily: headingFont,
          fontSize: 96,
          fontWeight: 900,
          lineHeight: 1.5,
          color: "#0E3B2E",
          marginBottom: 70,
          opacity: interpolate(frame, [0.15 * fps, 0.85 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.15 * fps, 0.85 * fps],
            ["0px 44px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        مميزات العقار
      </Interactive.Div>

      <Interactive.Div
        name="Feature one"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 36,
          marginBottom: 44,
          opacity: interpolate(frame, [0.5 * fps, 1.1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.5 * fps, 1.1 * fps],
            ["60px 0px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        <Interactive.Div
          name="Check one"
          style={{
            width: 96,
            height: 96,
            borderRadius: 9999,
            backgroundColor: "#C9A227",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <CheckIcon />
        </Interactive.Div>
        <Interactive.Div
          name="Feature one text"
          style={{
            fontFamily: bodyFont,
            fontSize: 56,
            fontWeight: 500,
            lineHeight: 1.6,
            color: "#123F31",
          }}
        >
          {features[0]}
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Feature two"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 36,
          marginBottom: 44,
          opacity: interpolate(frame, [0.72 * fps, 1.32 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.72 * fps, 1.32 * fps],
            ["60px 0px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        <Interactive.Div
          name="Check two"
          style={{
            width: 96,
            height: 96,
            borderRadius: 9999,
            backgroundColor: "#C9A227",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <CheckIcon />
        </Interactive.Div>
        <Interactive.Div
          name="Feature two text"
          style={{
            fontFamily: bodyFont,
            fontSize: 56,
            fontWeight: 500,
            lineHeight: 1.6,
            color: "#123F31",
          }}
        >
          {features[1]}
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Feature three"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 36,
          marginBottom: 44,
          opacity: interpolate(frame, [0.94 * fps, 1.54 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.94 * fps, 1.54 * fps],
            ["60px 0px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        <Interactive.Div
          name="Check three"
          style={{
            width: 96,
            height: 96,
            borderRadius: 9999,
            backgroundColor: "#C9A227",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <CheckIcon />
        </Interactive.Div>
        <Interactive.Div
          name="Feature three text"
          style={{
            fontFamily: bodyFont,
            fontSize: 56,
            fontWeight: 500,
            lineHeight: 1.6,
            color: "#123F31",
          }}
        >
          {features[2]}
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Feature four"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 36,
          opacity: interpolate(frame, [1.16 * fps, 1.76 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [1.16 * fps, 1.76 * fps],
            ["60px 0px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        <Interactive.Div
          name="Check four"
          style={{
            width: 96,
            height: 96,
            borderRadius: 9999,
            backgroundColor: "#C9A227",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <CheckIcon />
        </Interactive.Div>
        <Interactive.Div
          name="Feature four text"
          style={{
            fontFamily: bodyFont,
            fontSize: 56,
            fontWeight: 500,
            lineHeight: 1.6,
            color: "#123F31",
          }}
        >
          {features[3]}
        </Interactive.Div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
