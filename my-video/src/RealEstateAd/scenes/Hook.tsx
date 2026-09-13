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

export const Hook: React.FC<Listing> = ({
  propertyType,
  district,
  city,
  price,
  currency,
  brandName,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Hook scene"
      style={{
        backgroundColor: "#0E3B2E",
        direction: "rtl",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "250px 80px 320px",
      }}
    >
      <Interactive.Div
        name="Gold ring"
        style={{
          position: "absolute",
          top: 430,
          width: 1180,
          height: 1180,
          borderRadius: 9999,
          border: "3px solid #C9A227",
          opacity: 0.18,
          rotate: interpolate(frame, [0, 130], ["-8deg", "10deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          }),
        }}
      />
      <Interactive.Div
        name="Gold arc"
        style={{
          position: "absolute",
          top: 620,
          width: 820,
          height: 820,
          borderRadius: 9999,
          border: "18px solid #C9A227",
          borderBottomColor: "transparent",
          borderLeftColor: "transparent",
          opacity: 0.22,
          rotate: interpolate(frame, [0, 130], ["30deg", "-12deg"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      <Interactive.Div
        name="Eyebrow"
        style={{
          fontFamily: bodyFont,
          fontSize: 42,
          fontWeight: 500,
          letterSpacing: 2,
          color: "#C9A227",
          marginBottom: 44,
          opacity: interpolate(frame, [0, 0.6 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [0, 0.6 * fps], ["0px 30px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        {brandName} · عرض عقاري
      </Interactive.Div>

      <Interactive.Div
        name="Headline"
        style={{
          fontFamily: headingFont,
          fontSize: 138,
          fontWeight: 900,
          lineHeight: 1.5,
          color: "#F4EFE6",
          textAlign: "center",
          opacity: interpolate(frame, [0.25 * fps, 1 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.25 * fps, 1 * fps],
            ["0px 60px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        {propertyType} للبيع
      </Interactive.Div>

      <Interactive.Div
        name="Location"
        style={{
          fontFamily: bodyFont,
          fontSize: 62,
          fontWeight: 400,
          lineHeight: 1.6,
          color: "#CDDDD5",
          marginTop: 12,
          opacity: interpolate(frame, [0.6 * fps, 1.3 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.6 * fps, 1.3 * fps],
            ["0px 40px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        {district} — {city}
      </Interactive.Div>

      <Interactive.Div
        name="Price chip"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          gap: 16,
          color: "#0E3B2E",
          backgroundColor: "#C9A227",
          borderRadius: 9999,
          padding: "26px 68px",
          marginTop: 72,
          scale: interpolate(frame, [1 * fps, 1.9 * fps], [0.6, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 14 }),
            output: "perceptual-scale",
          }),
          opacity: interpolate(frame, [1 * fps, 1.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <Interactive.Div
          name="Price value"
          style={{
            fontFamily: headingFont,
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1.4,
            color: "#0E3B2E",
          }}
        >
          {price}
        </Interactive.Div>
        <Interactive.Div
          name="Price currency"
          style={{
            fontFamily: headingFont,
            fontSize: 44,
            fontWeight: 700,
            lineHeight: 1.4,
            color: "#0E3B2E",
          }}
        >
          {currency}
        </Interactive.Div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
