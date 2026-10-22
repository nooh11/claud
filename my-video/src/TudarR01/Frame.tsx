import React from "react";
import { AbsoluteFill, Interactive } from "remotion";
import { C, FONT, SAFE } from "./theme";
import { Grain } from "./Grain";
import { Stage } from "./Stage";
import { Caption } from "./Caption";
import { SourceBadge } from "./SourceBadge";

/**
 * الإطار الثابت للقالب A. المناطق الآمنة من القسم 3:
 * أعلى 250 · أسفل 480 (أزرار تيك توك) · يمين 150 · يسار 88.
 */
export const Frame: React.FC<{
  readonly stage: string;
  readonly caption: string;
  readonly source?: string;
}> = ({ stage, caption, source }) => (
  <AbsoluteFill name="Frame" style={{ backgroundColor: C.sand }}>
    <Grain />

    <Interactive.Div
      name="BrandMark"
      style={{
        position: "absolute",
        top: SAFE.top,
        right: SAFE.right,
        width: 190,
        height: 66,
        border: "2px dashed rgba(74,10,46,0.3)",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: FONT,
        fontWeight: 400,
        fontSize: 24,
        color: "rgba(74,10,46,0.5)",
        direction: "rtl",
      }}
    >
      شعار تُدار
    </Interactive.Div>

    <Interactive.Div
      name="StageArea"
      style={{
        position: "absolute",
        top: 350,
        right: SAFE.right,
        left: SAFE.left,
        height: 660,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stage stage={stage} startFrame={0} />
    </Interactive.Div>

    <Interactive.Div
      name="CaptionArea"
      style={{
        position: "absolute",
        top: SAFE.captionTop,
        right: SAFE.right,
        left: SAFE.left,
        height: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Caption text={caption} startFrame={4} size={caption.length > 30 ? 70 : 86} />
      {source ? <SourceBadge label={source} startFrame={34} /> : null}
    </Interactive.Div>
  </AbsoluteFill>
);
