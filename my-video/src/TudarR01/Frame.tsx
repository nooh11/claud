import React from "react";
import { AbsoluteFill, Interactive } from "remotion";
import { C, SAFE } from "./theme";
import { Logo } from "./Logo";
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
      style={{ position: "absolute", top: SAFE.top, right: SAFE.right }}
    >
      <Logo width={SAFE.logoWidth} tone="primary" />
    </Interactive.Div>

    <Interactive.Div
      name="StageArea"
      style={{
        position: "absolute",
        top: 400,
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
