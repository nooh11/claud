import { Interactive, useVideoConfig } from "remotion";
import { brandFont } from "../fonts";
import { InfoList } from "../InfoList";
import { PosterFrame } from "../PosterFrame";
import { Reveal } from "../Reveal";
import type { Project } from "../schema";

export const Nearby: React.FC<Project> = (props) => {
  const { fps } = useVideoConfig();
  return (
    <PosterFrame photo={props.photoEntrance} {...props} latinTag="Minutes Away">
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
            كل وجهاتــك حولــك
          </Interactive.Div>
        </Reveal>
        <Reveal name="T2 reveal" start={0.25 * fps} end={1.15 * fps}>
          <Interactive.Div
            name="Headline two"
            style={{ fontFamily: brandFont, fontSize: 60, fontWeight: 400, lineHeight: 1.45, color: "#E8C77A", textShadow: "0 2px 30px rgba(0,20,17,.92), 0 0 12px rgba(0,20,17,.85), 0 1px 2px rgba(0,20,17,.6)" }}
          >
            في دائــرة ربــع ساعــة
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <InfoList
        top={1120}
        startAt={40}
        rows={props.places.map((place) => ({ label: place.name, value: "دقائق", count: place.minutes }))}
      />
    </PosterFrame>
  );
};
