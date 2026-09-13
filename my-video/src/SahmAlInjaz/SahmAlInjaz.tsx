import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill } from "remotion";
import type { Project } from "./schema";
import { Hook } from "./scenes/Hook";
import { Interior } from "./scenes/Interior";
import { Location } from "./scenes/Location";
import { Models } from "./scenes/Models";
import { Outro } from "./scenes/Outro";
import { Warranty } from "./scenes/Warranty";

/**
 * 2200 فريم مجموع المشاهد − (5 انتقالات × 20) = 2100 فريم = 35 ثانية عند 60 فريم/ث.
 * معدل الإطارات 60 التزامًا بالدليل ص 29: «لا يقل عن 59 فريم».
 */
export const SahmAlInjaz: React.FC<Project> = (props) => {
  return (
    <AbsoluteFill name="Sahm Al-Injaz ad" style={{ backgroundColor: "#003E34" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={320} name="1 · الغلاف">
          <Hook {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={340} name="2 · الموقع">
          <Location {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={340} name="3 · جولة المشروع">
          <Interior {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={560} name="4 · النماذج والأسعار">
          <Models {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={300} name="5 · الضمانات">
          <Warranty {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={340} name="6 · الغلاف الختامي">
          <Outro {...props} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
