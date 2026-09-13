import { Img, Interactive, staticFile, useVideoConfig } from "remotion";
import { brandFont } from "../fonts";
import { PosterFrame } from "../PosterFrame";
import { Reveal } from "../Reveal";
import type { Project } from "../schema";

/** الهوك — العنوان يكتمل قبل الثانية الثالثة، والعمارة مكشوفة تحته. */
export const Hook: React.FC<Project> = (props) => {
  const { fps } = useVideoConfig();
  return (
    <PosterFrame {...props} photo={props.photoStreet}>
      <Interactive.Div
        name="Head scrim"
        style={{
          position: "absolute",
          top: 300,
          right: -88,
          left: -88,
          height: 620,
          background:
            "radial-gradient(ellipse 74% 60% at 50% 46%,rgba(0,20,17,.80) 0%,rgba(0,20,17,.52) 42%,rgba(0,20,17,.20) 66%,rgba(0,20,17,0) 82%)",
        }}
      />
      <Interactive.Div name="Head" style={{ position: "absolute", top: 420, right: 88, left: 88, textAlign: "center" }}>
        <Reveal name="Kicker reveal" start={0} end={0.7 * fps}>
          <Interactive.Div
            name="Kicker"
            style={{
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              border: "1px solid rgba(255,185,0,.55)",
              backgroundColor: "rgba(0,20,17,.55)",
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
        <Reveal name="T1 reveal" start={0.2 * fps} end={1.1 * fps}>
          <Interactive.Div
            name="Headline one"
            style={{ fontFamily: brandFont, fontSize: 110, fontWeight: 700, lineHeight: 1.16, color: "#FFFFFF", textShadow: "0 2px 30px rgba(0,20,17,.92), 0 0 12px rgba(0,20,17,.85), 0 1px 2px rgba(0,20,17,.6)" }}
          >
            {props.hookLineOne}
          </Interactive.Div>
        </Reveal>
        <Reveal name="T2 reveal" start={0.45 * fps} end={1.35 * fps}>
          <Interactive.Div
            name="Headline two"
            style={{ fontFamily: brandFont, fontSize: 60, fontWeight: 400, lineHeight: 1.45, color: "#E8C77A", textShadow: "0 2px 30px rgba(0,20,17,.92), 0 0 12px rgba(0,20,17,.85), 0 1px 2px rgba(0,20,17,.6)" }}
          >
            {props.hookLineTwo}
          </Interactive.Div>
        </Reveal>
        <Reveal name="Loc reveal" start={0.8 * fps} end={1.7 * fps}>
          <Interactive.Div name="Loc wrap" style={{ marginTop: 30 }}>
            <Interactive.Div
              name="Location pill"
              style={{
                display: "inline-flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
                border: "1px solid rgba(237,235,228,.35)",
                backgroundColor: "rgba(0,20,17,.45)",
                padding: "11px 26px",
                fontFamily: brandFont,
                fontSize: 24,
                fontWeight: 400,
                lineHeight: 1.4,
                color: "#FFFFFF",
              }}
            >
              <Img name="Pin icon" src={staticFile("icons/location-yellow.svg")} style={{ height: 24 }} />
              {props.district} — {props.city}
            </Interactive.Div>
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>
    </PosterFrame>
  );
};
