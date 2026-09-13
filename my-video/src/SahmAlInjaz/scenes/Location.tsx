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

export const Location: React.FC<Project> = ({ places }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Location scene"
      style={{
        backgroundColor: "#003E34",
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
          color: "#FFB900",
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
        الموقع والمسافات
      </Interactive.Div>

      <Interactive.Div
        name="Section title"
        style={{
          fontFamily: brandFont,
          fontSize: 90,
          fontWeight: 700,
          lineHeight: 1.4,
          color: "#FFFFFF",
          marginBottom: 70,
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
        كل وجهاتك حولك
      </Interactive.Div>

      {places.map((place, i) => (
        <Interactive.Div
          key={place.name}
          name="Place row"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            gap: 30,
            width: "100%",
            borderBottom: "2px solid #00B15E",
            paddingBottom: 24,
            marginBottom: 30,
            opacity: interpolate(
              frame,
              [(0.6 + i * 0.22) * fps, (1.3 + i * 0.22) * fps, durationInFrames - 24, durationInFrames],
              [0, 1, 1, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
              },
            ),
            translate: interpolate(
              frame,
              [(0.6 + i * 0.22) * fps, (1.3 + i * 0.22) * fps],
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
            name="Minutes"
            style={{
              fontFamily: brandFont,
              fontSize: 90,
              fontWeight: 700,
              lineHeight: 1.4,
              color: "#FFB900",
              minWidth: 120,
            }}
          >
            <Counter to={place.minutes} from={Math.round((0.8 + i * 0.22) * 60)} durationInFrames={40} />
          </Interactive.Div>
          <Interactive.Div
            name="Minutes unit"
            style={{
              fontFamily: brandFont,
              fontSize: 40,
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#FFB900",
            }}
          >
            دقائق
          </Interactive.Div>
          <Interactive.Div
            name="Place name"
            style={{
              fontFamily: brandFont,
              fontSize: 50,
              fontWeight: 500,
              lineHeight: 1.6,
              color: "#FFFFFF",
            }}
          >
            {place.name}
          </Interactive.Div>
        </Interactive.Div>
      ))}

      <Interactive.Div
        name="Disclaimer"
        style={{
          fontFamily: brandFont,
          fontSize: 30,
          fontWeight: 300,
          lineHeight: 1.6,
          color: "#FFFFFF",
          marginTop: 20,
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
        الأزمنة تقديرية بالسيارة وتختلف حسب حركة السير.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
