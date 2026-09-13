import { Interactive, useVideoConfig } from "remotion";
import { brandFont } from "../fonts";
import { PosterFrame } from "../PosterFrame";
import { Reveal } from "../Reveal";
import type { Project } from "../schema";

/** التسلسل القصصي: من الخارج إلى الداخل (الدليل ص 29). */
export const Interior: React.FC<Project> = (props) => {
  const { fps } = useVideoConfig();

  return (
    <PosterFrame
      photo={props.galleryTwo}
      projectName={props.projectName}
      district={props.district}
      city={props.city}
      latinName="Move In Today"
      latinTag="Fully Finished"
      phonePrimary={props.phonePrimary}
      phoneSecondary={props.phoneSecondary}
      website={props.website}
      adLicence={props.adLicence}
    >
      <Interactive.Div name="Head" style={{ position: "absolute", top: 600, right: 88, left: 88, textAlign: "center" }}>
        <Reveal name="T1 reveal" start={0} end={1 * fps} curtain="#003E34">
          <Interactive.Div
            name="Headline one"
            style={{ fontFamily: brandFont, fontSize: 110, fontWeight: 700, lineHeight: 1.14, color: "#FFFFFF" }}
          >
            تدخــل جاهــزًا
          </Interactive.Div>
        </Reveal>
        <Reveal name="T2 reveal" start={0.3 * fps} end={1.3 * fps} curtain="#003E34">
          <Interactive.Div
            name="Headline two"
            style={{ fontFamily: brandFont, fontSize: 60, fontWeight: 400, lineHeight: 1.4, color: "#E8C77A" }}
          >
            تشطيــب فاخــر لا يحتــاج ريــالًا
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>
    </PosterFrame>
  );
};
