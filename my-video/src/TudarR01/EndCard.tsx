import React from "react";
import { AbsoluteFill, Interactive, interpolate, Easing, useCurrentFrame } from "remotion";
import { C, FONT } from "./theme";
import { Grain } from "./Grain";

/** الكارت الختامي — 3 ثوان، نداء فعل واحد. */
export const EndCard: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill name="EndCard" style={{ backgroundColor: C.burgundy }}>
      <Grain />
      <Interactive.Div
        name="Center"
        style={{
          position: "absolute",
          top: 560,
          right: 150,
          left: 88,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 46,
          direction: "rtl",
          opacity: interpolate(frame, [0, 18], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(frame, [0, 26], ["0px 30px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        <Interactive.Div
          name="LogoSlot"
          style={{
            width: 216,
            height: 90,
            border: "2px dashed rgba(243,230,213,0.5)",
            borderRadius: 12,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: FONT,
            fontWeight: 400,
            fontSize: 28,
            color: "rgba(243,230,213,0.6)",
          }}
        >
          شعار تُدار
        </Interactive.Div>

        <Interactive.Div
          name="Line"
          style={{ fontFamily: FONT, fontWeight: 700, fontSize: 76, lineHeight: 1.4, color: C.sand, textAlign: "center" }}
        >
          إدارة أملاكك
          <br />
          بعقود موثّقة
        </Interactive.Div>

        <Interactive.Div
          name="CTA"
          style={{
            padding: "20px 52px",
            borderRadius: 999,
            backgroundColor: C.orange,
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 48,
            color: C.paper,
          }}
        >
          راسلنا
        </Interactive.Div>

        <Interactive.Div
          name="Licence"
          style={{ fontFamily: FONT, fontWeight: 400, fontSize: 30, color: "rgba(243,230,213,0.6)" }}
        >
          رخصة فال · يُضاف الرقم
        </Interactive.Div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
