import { Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Counter } from "../Counter";
import { brandFont } from "../fonts";
import { PosterFrame } from "../PosterFrame";
import { Reveal } from "../Reveal";
import type { Project } from "../schema";

/** المشهد الأول — الهوك: العنوان والسعر يظهران خلال أول ثلاث ثوانٍ. */
export const Hook: React.FC<Project> = (props) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <PosterFrame
      photo={props.photo}
      projectName={props.projectName}
      district={props.district}
      city={props.city}
      latinName={props.latinName}
      latinTag={props.latinTag}
      phonePrimary={props.phonePrimary}
      phoneSecondary={props.phoneSecondary}
      website={props.website}
      adLicence={props.adLicence}
    >
      <Interactive.Div
        name="Head"
        style={{ position: "absolute", top: 600, right: 88, left: 88, textAlign: "center" }}
      >
        <Reveal name="Kicker reveal" start={0} end={0.8 * fps} curtain="#003E34">
          <Interactive.Div
            name="Kicker"
            style={{
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              border: "1px solid rgba(255,185,0,.55)",
              color: "#FFB900",
              fontFamily: brandFont,
              fontSize: 20,
              fontWeight: 500,
              lineHeight: 1.5,
              padding: "9px 26px",
              marginBottom: 34,
            }}
          >
            <Interactive.Div name="Kicker dot" style={{ width: 7, height: 7, backgroundColor: "#FFB900" }} />
            {props.statusTag}
          </Interactive.Div>
        </Reveal>

        <Reveal name="T1 reveal" start={0.2 * fps} end={1.2 * fps} curtain="#003E34">
          <Interactive.Div
            name="Headline one"
            style={{ fontFamily: brandFont, fontSize: 110, fontWeight: 700, lineHeight: 1.14, color: "#FFFFFF" }}
          >
            {props.hookLineOne}
          </Interactive.Div>
        </Reveal>

        <Reveal name="T2 reveal" start={0.5 * fps} end={1.5 * fps} curtain="#003E34">
          <Interactive.Div
            name="Headline two"
            style={{ fontFamily: brandFont, fontSize: 60, fontWeight: 400, lineHeight: 1.4, color: "#E8C77A" }}
          >
            {props.hookLineTwo}
          </Interactive.Div>
        </Reveal>

        <Reveal name="Loc reveal" start={0.9 * fps} end={1.9 * fps} curtain="#003E34">
          <Interactive.Div
            name="Location pill wrap"
            style={{ marginTop: 34 }}
          >
            <Interactive.Div
              name="Location pill"
              style={{
                display: "inline-flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                backgroundColor: "rgba(0,20,17,.28)",
                border: "1px solid rgba(237,235,228,.20)",
                padding: "11px 26px",
                fontFamily: brandFont,
                fontSize: 24,
                fontWeight: 400,
                lineHeight: 1.4,
                color: "#EDEBE4",
              }}
            >
              <Img name="Pin icon" src={staticFile("icons/location-yellow.svg")} style={{ height: 24 }} />
              {props.district} — {props.city}
            </Interactive.Div>
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div
        name="Stats"
        style={{
          position: "absolute",
          top: 1140,
          right: 0,
          left: 0,
          padding: "62px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse 60% 58% at 50% 50%,rgba(0,20,17,.88) 0%,rgba(0,20,17,.66) 42%,rgba(0,20,17,.28) 72%,rgba(0,20,17,0) 100%)",
          opacity: interpolate(frame, [1.2 * fps, 2 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
          translate: interpolate(frame, [1.2 * fps, 2 * fps], ["0px 30px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        <Interactive.Div name="Stat price" style={{ padding: "0 46px", textAlign: "center" }}>
          <Interactive.Div
            name="Stat price value"
            style={{ fontFamily: brandFont, fontSize: 60, fontWeight: 600, lineHeight: 1, color: "#FFFFFF" }}
          >
            <Counter to={props.priceThousands} from={80} durationInFrames={60} />
            <Interactive.Div
              name="Stat price unit"
              style={{ display: "inline", fontFamily: brandFont, fontSize: 24, fontWeight: 400, color: "#FFB900" }}
            >
              {" "}
              ألف {props.currencyGlyph}
            </Interactive.Div>
          </Interactive.Div>
          <Interactive.Div
            name="Stat price label"
            style={{ fontFamily: brandFont, fontSize: 20, fontWeight: 300, lineHeight: 1.4, color: "rgba(237,235,228,.72)", marginTop: 11 }}
          >
            تبدأ الأسعار من
          </Interactive.Div>
        </Interactive.Div>

        <Interactive.Div name="Stat divider" style={{ width: 1, backgroundColor: "rgba(237,235,228,.20)", margin: "8px 0" }} />

        <Interactive.Div name="Stat warranty" style={{ padding: "0 46px", textAlign: "center" }}>
          <Interactive.Div
            name="Stat warranty value"
            style={{ fontFamily: brandFont, fontSize: 60, fontWeight: 600, lineHeight: 1, color: "#FFFFFF" }}
          >
            <Counter to={10} from={100} durationInFrames={50} />
            <Interactive.Div
              name="Stat warranty unit"
              style={{ display: "inline", fontFamily: brandFont, fontSize: 24, fontWeight: 400, color: "#FFB900" }}
            >
              {" "}
              سنوات
            </Interactive.Div>
          </Interactive.Div>
          <Interactive.Div
            name="Stat warranty label"
            style={{ fontFamily: brandFont, fontSize: 20, fontWeight: 300, lineHeight: 1.4, color: "rgba(237,235,228,.72)", marginTop: 11 }}
          >
            تأمين على العيوب
          </Interactive.Div>
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Chips"
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
