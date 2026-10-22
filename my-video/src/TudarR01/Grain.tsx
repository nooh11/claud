import React from "react";
import { AbsoluteFill } from "remotion";

/** حبيبات ورق خفيفة — SVG داخلي لأن background-image ممنوع في Remotion. */
export const Grain: React.FC = () => (
  <AbsoluteFill name="Grain" style={{ opacity: 0.16, mixBlendMode: "multiply" }}>
    <svg width="100%" height="100%">
      <filter id="r01grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#r01grain)" />
    </svg>
  </AbsoluteFill>
);
