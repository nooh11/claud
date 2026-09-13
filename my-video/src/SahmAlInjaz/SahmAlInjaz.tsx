import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { AbsoluteFill } from "remotion";
import type { Project } from "./schema";
import { Hook } from "./scenes/Hook";
import { Location } from "./scenes/Location";
import { Models } from "./scenes/Models";
import { Outro } from "./scenes/Outro";
import { Warranty } from "./scenes/Warranty";

/**
 * 1880 فريم مجموع المشاهد − (4 انتقالات × 20) = 1800 فريم = 30 ثانية عند 60 فريم/ث.
 * معدل الإطارات 60 التزامًا بالدليل ص 29: «لا يقل عن 59 فريم».
 */
export const SahmAlInjaz: React.FC<Project> = (props) => {
  return (
    <AbsoluteFill name="Sahm Al-Injaz ad" style={{ backgroundColor: "#003E34" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={300} name="1 · الغلاف">
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
        <TransitionSeries.Sequence durationInFrames={580} name="3 · النماذج والأسعار">
          <Models {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={300} name="4 · الضمانات">
          <Warranty {...props} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 20 })}
        />
        <TransitionSeries.Sequence durationInFrames={360} name="5 · الغلاف الختامي">
          <Outro {...props} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
