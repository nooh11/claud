import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { beats } from "./script";
import { Frame } from "./Frame";
import { EndCard } from "./EndCard";

const FPS = 60;

/** R01 — «عقدك برّا إيجار؟» · قطع مباشر بين اللقطات، بلا انتقالات. */
export const TudarR01: React.FC = () => (
  <AbsoluteFill name="TudarR01">
    {beats.map((beat) => {
      const from = Math.round(beat.from * FPS);
      const durationInFrames = Math.round((beat.to - beat.from) * FPS);
      return (
        <Sequence key={beat.stage} name={beat.stage} from={from} durationInFrames={durationInFrames}>
          {beat.stage === "end" ? (
            <EndCard />
          ) : (
            <Frame stage={beat.stage} caption={beat.caption} source={beat.source} />
          )}
        </Sequence>
      );
    })}
  </AbsoluteFill>
);
