import { Easing, Interactive, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { brandFont } from "../fonts";
import { PosterFrame } from "../PosterFrame";
import { Reveal } from "../Reveal";
import type { Project } from "../schema";

export const Features: React.FC<Project> = (props) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <PosterFrame photo={props.photoFront} {...props} latinTag="Fully Finished">
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
        <Reveal name="T1 reveal" start={0} end={0.9 * fps}>
          <Interactive.Div
            name="Headline one"
            style={{ fontFamily: brandFont, fontSize: 110, fontWeight: 700, lineHeight: 1.16, color: "#FFFFFF", textShadow: "0 2px 30px rgba(0,20,17,.92), 0 0 12px rgba(0,20,17,.85), 0 1px 2px rgba(0,20,17,.6)" }}
          >
            كل شــيء جاهــز
          </Interactive.Div>
        </Reveal>
        <Reveal name="T2 reveal" start={0.25 * fps} end={1.15 * fps}>
          <Interactive.Div
            name="Headline two"
            style={{ fontFamily: brandFont, fontSize: 60, fontWeight: 400, lineHeight: 1.45, color: "#E8C77A", textShadow: "0 2px 30px rgba(0,20,17,.92), 0 0 12px rgba(0,20,17,.85), 0 1px 2px rgba(0,20,17,.6)" }}
          >
            تنقــل أثاثــك وتســكن
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div name="Features" style={{ position: "absolute", top: 1120, right: 88, left: 88 }}>
        {props.features.map((feature, i) => (
          <Interactive.Div
            key={feature}
            name="Feature row"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 18,
              paddingTop: 12,
              paddingBottom: 12,
              borderBottom: "1px solid rgba(237,235,228,.22)",
              opacity: interpolate(frame, [40 + i * 7, 62 + i * 7], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
              translate: interpolate(frame, [40 + i * 7, 62 + i * 7], ["36px 0px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          >
            <Interactive.Div name="Marker" style={{ width: 9, height: 9, backgroundColor: "#FFB900", flexShrink: 0 }} />
            <Interactive.Div
              name="Feature label"
              style={{ fontFamily: brandFont, fontSize: 34, fontWeight: 500, lineHeight: 1.4, color: "#FFFFFF", textShadow: "0 2px 18px rgba(0,20,17,.9), 0 0 8px rgba(0,20,17,.75)" }}
            >
              {feature}
            </Interactive.Div>
          </Interactive.Div>
        ))}
      </Interactive.Div>
    </PosterFrame>
  );
};
