import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill } from "remotion";
import type { Project } from "./schema";
import { Features } from "./scenes/Features";
import { Hook } from "./scenes/Hook";
import { Nearby } from "./scenes/Nearby";
import { Outro } from "./scenes/Outro";
import { Tour } from "./scenes/Tour";
import { Warranty } from "./scenes/Warranty";

/**
 * 1780 فريم مجموع المشاهد − (5 انتقالات × 20) = 1680 فريم = 28 ثانية عند 60 فريم/ث.
 * بلا أسعار: الهوك ثم المميزات ثم القريب منك ثم الضمانات، ولقطة تنفّس للعقار قبل الختام.
 */
export const SahmAlInjaz: React.FC<Project> = (props) => {
  return (
    <AbsoluteFill name="Sahm Al-Injaz ad" style={{ backgroundColor: "#001411" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={320} name="1 · الهوك">
          <Hook {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 20 })} />
        <TransitionSeries.Sequence durationInFrames={320} name="2 · المميزات">
          <Features {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 20 })} />
        <TransitionSeries.Sequence durationInFrames={320} name="3 · القريب منك">
          <Nearby {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 20 })} />
        <TransitionSeries.Sequence durationInFrames={320} name="4 · الضمانات">
          <Warranty {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 20 })} />
        <TransitionSeries.Sequence durationInFrames={280} name="5 · الجولة">
          <Tour {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 20 })} />
        <TransitionSeries.Sequence durationInFrames={220} name="6 · الختام">
          <Outro {...props} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
