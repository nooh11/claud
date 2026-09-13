import { Easing, Interactive, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Counter } from "../Counter";
import { brandFont } from "../fonts";
import { PosterFrame } from "../PosterFrame";
import { Reveal } from "../Reveal";
import type { Project } from "../schema";

export const Warranty: React.FC<Project> = (props) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <PosterFrame
      photo={props.galleryThree}
      projectName={props.projectName}
      district={props.district}
      city={props.city}
      latinName="Written Warranty"
      latinTag="Not Just Promises"
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
            ضمانــات مكتوبــة
          </Interactive.Div>
        </Reveal>
        <Reveal name="T2 reveal" start={0.3 * fps} end={1.3 * fps} curtain="#003E34">
          <Interactive.Div
            name="Headline two"
            style={{ fontFamily: brandFont, fontSize: 60, fontWeight: 400, lineHeight: 1.4, color: "#E8C77A" }}
          >
            لا وعــود شفهيــة
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div
        name="Big number"
        style={{
          position: "absolute",
          top: 1080,
          right: 88,
          left: 88,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 26,
          opacity: interpolate(frame, [0.7 * fps, 1.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
          translate: interpolate(frame, [0.7 * fps, 1.5 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        <Interactive.Div
          name="Big number value"
          style={{ fontFamily: brandFont, fontSize: 210, fontWeight: 700, lineHeight: 0.9, color: "#FFB900" }}
        >
          <Counter to={15} from={50} durationInFrames={70} />
        </Interactive.Div>
        <Interactive.Div name="Big number text" style={{ textAlign: "right", paddingBottom: 12 }}>
          <Interactive.Div
            name="Big number title"
            style={{ fontFamily: brandFont, fontSize: 32, fontWeight: 600, lineHeight: 1.35, color: "#FFB900" }}
          >
            سنــة ضمــان
          </Interactive.Div>
          <Interactive.Div
            name="Big number sub"
            style={{ fontFamily: brandFont, fontSize: 24, fontWeight: 300, lineHeight: 1.5, color: "rgba(237,235,228,.78)", marginTop: 4 }}
          >
            على مواسير الصرف والتغذية
          </Interactive.Div>
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Warranty chips"
        style={{
          position: "absolute",
          top: 1330,
          right: 88,
          left: 88,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
        }}
      >
        {props.warranties.map((item, i) => (
          <Interactive.Div
            key={item.label}
            name="Warranty chip"
            style={{
              border: "1px solid rgba(237,235,228,.20)",
              backgroundColor: "rgba(0,34,29,.62)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              padding: "15px 22px",
              fontFamily: brandFont,
              fontSize: 22,
              fontWeight: 400,
              lineHeight: 1.4,
              color: "#EDEBE4",
              opacity: interpolate(frame, [(1.3 + i * 0.14) * fps, (1.9 + i * 0.14) * fps], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.22, 1, 0.36, 1),
              }),
              translate: interpolate(frame, [(1.3 + i * 0.14) * fps, (1.9 + i * 0.14) * fps], ["30px 0px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.22, 1, 0.36, 1),
              }),
            }}
          >
            {item.label}
            <Interactive.Div
              name="Warranty years"
              style={{ fontFamily: brandFont, fontSize: 26, fontWeight: 600, lineHeight: 1.2, color: "#FFB900" }}
            >
              {item.years}
            </Interactive.Div>
          </Interactive.Div>
        ))}
      </Interactive.Div>
    </PosterFrame>
  );
};
