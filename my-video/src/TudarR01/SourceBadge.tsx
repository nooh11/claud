import React from "react";
import { Interactive, interpolate, Easing, useCurrentFrame } from "remotion";
import { FONT } from "./theme";

/** شارة المصدر — تظهر أثناء ذكر المعلومة فقط، أسفل الكابشن. */
export const SourceBadge: React.FC<{
  readonly label: string;
  readonly startFrame: number;
}> = ({ label, startFrame }) => {
  const frame = useCurrentFrame();
  return (
    <Interactive.Div
      name="SourceBadge"
      style={{
        direction: "rtl",
        alignSelf: "center",
        marginTop: 26,
        padding: "12px 28px",
        borderRadius: 999,
        border: "2px solid rgba(74,10,46,0.22)",
        backgroundColor: "rgba(251,246,238,0.72)",
        fontFamily: FONT,
        fontWeight: 300,
        fontSize: 34,
        color: "rgba(74,10,46,0.72)",
        opacity: interpolate(frame, [startFrame, startFrame + 20], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.215, 0.61, 0.355, 1),
        }),
        translate: interpolate(frame, [startFrame, startFrame + 20], ["0px 14px", "0px 0px"], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.215, 0.61, 0.355, 1),
        }),
      }}
    >
      {label}
    </Interactive.Div>
  );
};
