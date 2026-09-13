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
 * 1780 فريم مجموع المشاهد − (5 انتقالات × 20) = 1680 فريم = 28 ثانية عند 60 فريم/ث.
 * المدة مضبوطة على إيقاع الريلز: الهوك في أول ثلاث ثوانٍ، والباقي قصير يرفع نسبة الإكمال.
 * معدل الإطارات 60 التزامًا بالدليل ص 29: «لا يقل عن 59 فريم».
 */
export const SahmAlInjaz: React.FC<Project> = (props) => {
  return (
    <AbsoluteFill name="Sahm Al-Injaz ad" style={{ backgroundColor: "#003E34" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={340} name="1 · الهوك">
          <Hook {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={300} name="2 · الموقع">
          <Location {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={300} name="3 · الجولة">
          <Interior {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={380} name="4 · النماذج والسعر">
          <Models {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={260} name="5 · الضمانات">
          <Warranty {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={200} name="6 · الغلاف الختامي">
          <Outro {...props} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
