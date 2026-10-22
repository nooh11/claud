import React from "react";
import { AbsoluteFill, Interactive, interpolate, Easing, useCurrentFrame } from "remotion";
import { C, FONT } from "./theme";
import { Grain } from "./Grain";
import { LogoBuild } from "./Logo";

/**
 * الكارت الختامي — 3 ثوانٍ. الشعار يُبنى بالترتيب المعتمد (القسم 8)،
 * والنسخة المعكوسة لأن الخلفية برغندي.
 */
export const EndCard: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill name="EndCard" style={{ backgroundColor: C.burgundy }}>
      <Grain />
      <Interactive.Div
        name="Center"
        style={{
          position: "absolute",
          top: 520,
          right: 150,
          left: 88,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 72,
          direction: "rtl",
        }}
      >
        <LogoBuild width={540} tone="reverse" startFrame={0} />

        <Interactive.Div
          name="CTA"
          style={{
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 50,
            lineHeight: 1,
            color: C.burgundy,
            backgroundColor: C.orange,
            borderRadius: 999,
            padding: "22px 58px 28px",
            opacity: interpolate(frame, [120, 146], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(frame, [120, 146], ["0px 22px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          راسلنا
        </Interactive.Div>

        <Interactive.Div
          name="Licence"
          style={{
            fontFamily: FONT,
            fontWeight: 300,
            fontSize: 30,
            color: "rgba(243,230,213,0.62)",
            opacity: interpolate(frame, [140, 164], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          رخصة فال · يُضاف الرقم
        </Interactive.Div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
