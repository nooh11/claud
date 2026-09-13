import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Counter } from "../Counter";
import { brandFont } from "../fonts";
import type { Project } from "../schema";

export const Warranty: React.FC<Project> = ({ warranties }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Warranty scene"
      style={{
        backgroundColor: "#FFFFFF",
        direction: "rtl",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "250px 80px 320px",
      }}
    >
      <Interactive.Div
        name="Section label"
        style={{
          fontFamily: brandFont,
          fontSize: 40,
          fontWeight: 500,
          lineHeight: 1.6,
          color: "#00B15E",
          opacity: interpolate(
            frame,
            [0, 0.6 * fps, durationInFrames - 24, durationInFrames],
            [0, 1, 1, 0],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
            },
          ),
        }}
      >
        الضمانات
      </Interactive.Div>

      <Interactive.Div
        name="Section title"
        style={{
          fontFamily: brandFont,
          fontSize: 90,
          fontWeight: 700,
          lineHeight: 1.4,
          color: "#003E34",
          marginBottom: 80,
          opacity: interpolate(
            frame,
            [0.2 * fps, 0.9 * fps, durationInFrames - 24, durationInFrames],
            [0, 1, 1, 0],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
            },
          ),
          translate: interpolate(frame, [0.2 * fps, 0.9 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        ضمانات مكتوبة، لا وعود شفهية
      </Interactive.Div>

      {warranties.map((item, i) => (
        <Interactive.Div
          key={item.label}
          name="Warranty row"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            gap: 30,
            width: "100%",
            borderBottom: "2px solid #003E34",
            paddingBottom: 20,
            marginBottom: 40,
            opacity: interpolate(
              frame,
              [(0.7 + i * 0.3) * fps, (1.4 + i * 0.3) * fps, durationInFrames - 24, durationInFrames],
              [0, 1, 1, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
              },
            ),
            translate: interpolate(
              frame,
              [(0.7 + i * 0.3) * fps, (1.4 + i * 0.3) * fps],
              ["0px 40px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.22, 1, 0.36, 1),
              },
            ),
          }}
        >
          <Interactive.Div
            name="Years"
            style={{
              fontFamily: brandFont,
              fontSize: 140,
              fontWeight: 700,
              lineHeight: 1.4,
              color: "#003E34",
              minWidth: 190,
            }}
          >
            <Counter to={item.years} from={Math.round((0.9 + i * 0.3) * 60)} durationInFrames={45} />
          </Interactive.Div>
          <Interactive.Div
            name="Warranty label"
            style={{
              fontFamily: brandFont,
              fontSize: 50,
              fontWeight: 500,
              lineHeight: 1.6,
              color: "#003E34",
            }}
          >
            {item.label}
          </Interactive.Div>
        </Interactive.Div>
      ))}

      <Interactive.Div
        name="Warranty note"
        style={{
          fontFamily: brandFont,
          fontSize: 30,
          fontWeight: 300,
          lineHeight: 1.6,
          color: "#003E34",
          marginTop: 10,
          opacity: interpolate(
            frame,
            [2.2 * fps, 2.8 * fps, durationInFrames - 24, durationInFrames],
            [0, 1, 1, 0],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
            },
          ),
        }}
      >
        إضافة إلى تقرير إشراف هندسي معتمد — كل شهادة تقدر تطّلع عليها قبل التوقيع.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
