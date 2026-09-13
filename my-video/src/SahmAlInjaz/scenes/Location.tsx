import { Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Counter } from "../Counter";
import { brandFont } from "../fonts";
import { PosterFrame } from "../PosterFrame";
import { Reveal } from "../Reveal";
import type { Project } from "../schema";

export const Location: React.FC<Project> = (props) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <PosterFrame
      photo={props.galleryOne}
      projectName={props.projectName}
      district={props.district}
      city={props.city}
      latinName={props.latinName}
      latinTag="Everything Minutes Away"
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
            فرصــة سكنيــة
          </Interactive.Div>
        </Reveal>
        <Reveal name="T2 reveal" start={0.3 * fps} end={1.3 * fps} curtain="#003E34">
          <Interactive.Div
            name="Headline two"
            style={{ fontFamily: brandFont, fontSize: 60, fontWeight: 400, lineHeight: 1.4, color: "#E8C77A" }}
          >
            في حــي الشعلــة بالدمــام
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div
        name="Places"
        style={{
          position: "absolute",
          top: 1080,
          right: 88,
          left: 88,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
        }}
      >
        {props.places.map((place, i) => (
          <Interactive.Div
            key={place.name}
            name="Place chip"
            style={{
              border: "1px solid rgba(237,235,228,.20)",
              backgroundColor: "rgba(0,34,29,.72)",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              padding: "18px 22px",
              opacity: interpolate(frame, [(0.7 + i * 0.15) * fps, (1.4 + i * 0.15) * fps], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.22, 1, 0.36, 1),
              }),
              translate: interpolate(frame, [(0.7 + i * 0.15) * fps, (1.4 + i * 0.15) * fps], ["30px 0px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.22, 1, 0.36, 1),
              }),
            }}
          >
            <Interactive.Div
              name="Place name"
              style={{ fontFamily: brandFont, fontSize: 22, fontWeight: 400, lineHeight: 1.4, color: "#EDEBE4" }}
            >
              {place.name}
            </Interactive.Div>
            <Interactive.Div
              name="Place minutes"
              style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 600, lineHeight: 1.2, color: "#FFB900" }}
            >
              <Counter to={place.minutes} from={Math.round((1 + i * 0.15) * 60)} durationInFrames={36} /> د
            </Interactive.Div>
          </Interactive.Div>
        ))}
      </Interactive.Div>

      <Interactive.Div
        name="Places note"
        style={{
          position: "absolute",
          top: 1330,
          right: 88,
          left: 88,
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          fontFamily: brandFont,
          fontSize: 20,
          fontWeight: 300,
          lineHeight: 1.5,
          color: "rgba(237,235,228,.72)",
          opacity: interpolate(frame, [1.6 * fps, 2.3 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        <Img name="Pin icon" src={staticFile("icons/location-yellow.svg")} style={{ height: 20 }} />
        الأزمنة تقديرية بالسيارة
      </Interactive.Div>
    </PosterFrame>
  );
};
