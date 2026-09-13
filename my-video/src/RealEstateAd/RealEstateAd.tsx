import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { AbsoluteFill } from "remotion";
import type { Listing } from "./schema";
import { Cta } from "./scenes/Cta";
import { Features } from "./scenes/Features";
import { Hero } from "./scenes/Hero";
import { Hook } from "./scenes/Hook";
import { Specs } from "./scenes/Specs";

export const RealEstateAd: React.FC<Listing> = (props) => {
  return (
    <AbsoluteFill name="Real estate ad" style={{ backgroundColor: "#0E3B2E" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={130} name="1 · الهوك">
          <Hook {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence durationInFrames={200} name="2 · صورة العقار">
          <Hero {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence durationInFrames={220} name="3 · المواصفات">
          <Specs {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence durationInFrames={190} name="4 · المميزات">
          <Features {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 15 })}
        />
        <TransitionSeries.Sequence durationInFrames={220} name="5 · السعر والتواصل">
          <Cta {...props} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
