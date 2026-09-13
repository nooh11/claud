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
import { PhoneIcon } from "./icons";

export const Cta: React.FC<Listing> = ({
  price,
  currency,
  propertyType,
  district,
  phonePrimary,
  phoneSecondary,
  brandName,
  adLicence,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="CTA scene"
      style={{
        backgroundColor: "#0E3B2E",
        direction: "rtl",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "470px 80px 340px",
      }}
    >
      <Interactive.Div
        name="Logo slot"
        style={{
          position: "absolute",
          top: 268,
          width: 300,
          height: 150,
          borderRadius: 24,
          border: "3px dashed rgba(201,162,39,0.55)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: bodyFont,
          fontSize: 34,
          fontWeight: 400,
          color: "rgba(201,162,39,0.75)",
          opacity: interpolate(frame, [0, 0.7 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        مكان الشعار
      </Interactive.Div>

      <Interactive.Div
        name="Price label"
        style={{
          fontFamily: bodyFont,
          fontSize: 46,
          fontWeight: 500,
          letterSpacing: 2,
          color: "#A9C3B8",
          marginBottom: 8,
          opacity: interpolate(frame, [0.2 * fps, 0.8 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        {propertyType} · {district}
      </Interactive.Div>

      <Interactive.Div
        name="Price row"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "center",
          gap: 24,
          scale: interpolate(frame, [0.35 * fps, 1.3 * fps], [0.72, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.spring({ damping: 16 }),
            output: "perceptual-scale",
          }),
          opacity: interpolate(frame, [0.35 * fps, 0.95 * fps], [0, 1], {
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
            fontSize: 140,
            fontWeight: 900,
            lineHeight: 1.4,
            color: "#C9A227",
          }}
        >
          {price}
        </Interactive.Div>
        <Interactive.Div
          name="Price currency"
          style={{
            fontFamily: headingFont,
            fontSize: 66,
            fontWeight: 700,
            lineHeight: 1.4,
            color: "#C9A227",
          }}
        >
          {currency}
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Divider"
        style={{
          height: 6,
          backgroundColor: "rgba(201,162,39,0.4)",
          borderRadius: 3,
          marginTop: 56,
          marginBottom: 56,
          width: interpolate(frame, [0.9 * fps, 1.9 * fps], ["0px", "620px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      />

      <Interactive.Div
        name="Contact prompt"
        style={{
          fontFamily: headingFont,
          fontSize: 66,
          fontWeight: 700,
          lineHeight: 1.5,
          color: "#F4EFE6",
          marginBottom: 44,
          opacity: interpolate(frame, [1.1 * fps, 1.8 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        للمعاينة والحجز
      </Interactive.Div>

      <Interactive.Div
        name="Phone primary"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 26,
          width: 640,
          backgroundColor: "rgba(244,239,230,0.08)",
          border: "2px solid rgba(201,162,39,0.35)",
          borderRadius: 9999,
          padding: "22px 40px",
          marginBottom: 24,
          fontFamily: headingFont,
          fontSize: 64,
          fontWeight: 700,
          color: "#F4EFE6",
          direction: "ltr",
          opacity: interpolate(frame, [1.4 * fps, 2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [1.4 * fps, 2 * fps],
            ["0px 40px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        <PhoneIcon />
        {phonePrimary}
      </Interactive.Div>

      <Interactive.Div
        name="Phone secondary"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 26,
          width: 640,
          backgroundColor: "rgba(244,239,230,0.08)",
          border: "2px solid rgba(201,162,39,0.35)",
          borderRadius: 9999,
          padding: "22px 40px",
          fontFamily: headingFont,
          fontSize: 64,
          fontWeight: 700,
          color: "#F4EFE6",
          direction: "ltr",
          opacity: interpolate(frame, [1.6 * fps, 2.2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [1.6 * fps, 2.2 * fps],
            ["0px 40px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        <PhoneIcon />
        {phoneSecondary}
      </Interactive.Div>

      <Interactive.Div
        name="Footer line"
        style={{
          position: "absolute",
          bottom: 300,
          fontFamily: bodyFont,
          fontSize: 34,
          fontWeight: 400,
          color: "#7E9C91",
          textAlign: "center",
          opacity: interpolate(frame, [2 * fps, 2.6 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        {brandName} · {adLicence}
      </Interactive.Div>
    </AbsoluteFill>
  );
};
