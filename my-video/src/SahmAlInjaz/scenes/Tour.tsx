import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { brandFont } from "../fonts";
import { Reveal } from "../Reveal";
import type { Project } from "../schema";

/**
 * لقطة التنفّس — أربع لقطات داخلية بملء الكادر، بأقل تعتيم وأقل نص.
 * العقار وحده يتكلم هنا؛ الكتابة تأتي متأخرة وفي الشريط السفلي فقط.
 */
export const Tour: React.FC<Project> = ({ tourShots, tourLineOne, tourLineTwo }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const shot = Math.floor(durationInFrames / tourShots.length);

  return (
    <AbsoluteFill name="Tour scene" style={{ backgroundColor: "#001411", direction: "rtl" }}>
      {tourShots.map((src, i) => (
        <Img
          key={src}
          name="Tour shot"
          src={staticFile(src)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            scale: interpolate(frame, [i * shot, (i + 1) * shot + 20], [1.0, 1.09], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.33, 0, 0.4, 1),
              output: "perceptual-scale",
            }),
            opacity: interpolate(
              frame,
              [i * shot - 14, i * shot + 14, (i + 1) * shot - 14, (i + 1) * shot + 14],
              [0, 1, 1, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.linear,
              },
            ),
          }}
        />
      ))}

      <Interactive.Div
        name="Base veil"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(0deg,rgba(0,20,17,.92) 0%,rgba(0,20,17,.55) 9%,rgba(0,20,17,0) 22%)," +
            "linear-gradient(180deg,rgba(0,20,17,.55) 0%,rgba(0,20,17,0) 14%)",
        }}
      />

      <Interactive.Div name="Caption" style={{ position: "absolute", right: 88, bottom: 380, left: 88 }}>
        <Reveal name="Tour line one" start={0.6 * fps} end={1.6 * fps}>
          <Interactive.Div
            name="Tour headline"
            style={{ fontFamily: brandFont, fontSize: 96, fontWeight: 700, lineHeight: 1.16, color: "#FFFFFF", textShadow: "0 2px 30px rgba(0,20,17,.92), 0 0 12px rgba(0,20,17,.85), 0 1px 2px rgba(0,20,17,.6)" }}
          >
            {tourLineOne}
          </Interactive.Div>
        </Reveal>
        <Reveal name="Tour line two" start={0.9 * fps} end={1.9 * fps}>
          <Interactive.Div
            name="Tour sub"
            style={{ fontFamily: brandFont, fontSize: 50, fontWeight: 400, lineHeight: 1.45, color: "#E8C77A", textShadow: "0 2px 30px rgba(0,20,17,.92), 0 0 12px rgba(0,20,17,.85), 0 1px 2px rgba(0,20,17,.6)" }}
          >
            {tourLineTwo}
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
