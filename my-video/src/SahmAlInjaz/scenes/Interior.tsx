import { Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { brandFont } from "../fonts";
import { PosterFrame } from "../PosterFrame";
import { Reveal } from "../Reveal";
import type { Project } from "../schema";

/** التسلسل القصصي: من الخارج إلى الداخل (الدليل ص 29). */
export const Interior: React.FC<Project> = (props) => {
  const frame = useCurrentFrame();
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
      <Interactive.Div name="Head" style={{ position: "absolute", top: 430, right: 88, left: 88, textAlign: "center" }}>
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
      <Interactive.Div
        name="Chips"
        style={{
          position: "absolute",
          top: 1300,
          right: 88,
          left: 88,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
        }}
      >
        {props.chips.map((chip, i) => (
          <Interactive.Div
            key={chip}
            name="Chip"
            style={{
              border: "1px solid rgba(237,235,228,.20)",
              backgroundColor: "rgba(0,34,29,.62)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              padding: "15px 22px",
              fontFamily: brandFont,
              fontSize: 22,
              fontWeight: 400,
              lineHeight: 1.4,
              color: "#EDEBE4",
              opacity: interpolate(frame, [(1.5 + i * 0.12) * fps, (2.1 + i * 0.12) * fps], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.22, 1, 0.36, 1),
              }),
              translate: interpolate(frame, [(1.5 + i * 0.12) * fps, (2.1 + i * 0.12) * fps], ["30px 0px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.22, 1, 0.36, 1),
              }),
            }}
          >
            <Img name="Chip icon" src={staticFile("icons/warranty-yellow.svg")} style={{ height: 22 }} />
            {chip}
          </Interactive.Div>
        ))}
      </Interactive.Div>
    </PosterFrame>
  );
};
