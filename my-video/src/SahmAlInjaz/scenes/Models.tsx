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

export const Models: React.FC<Project> = ({ models }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Models scene"
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
        النماذج والأسعار
      </Interactive.Div>

      <Interactive.Div
        name="Section title"
        style={{
          fontFamily: brandFont,
          fontSize: 90,
          fontWeight: 700,
          lineHeight: 1.4,
          color: "#FFFFFF",
          marginBottom: 50,
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
        اختر دورك
      </Interactive.Div>

      {models.map((model, i) => (
        <Interactive.Div
          key={model.letter}
          name="Model card"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 30,
            width: "100%",
            backgroundColor: "#FFFFFF",
            padding: "30px 40px",
            marginBottom: 30,
            opacity: interpolate(
              frame,
              [(0.7 + i * 0.35) * fps, (1.5 + i * 0.35) * fps, durationInFrames - 24, durationInFrames],
              [0, 1, 1, 0],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
              },
            ),
            translate: interpolate(
              frame,
              [(0.7 + i * 0.35) * fps, (1.5 + i * 0.35) * fps],
              ["60px 0px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.22, 1, 0.36, 1),
              },
            ),
          }}
        >
          <Interactive.Div
            name="Model letter"
            style={{
              fontFamily: brandFont,
              fontSize: 90,
              fontWeight: 700,
              lineHeight: 1.4,
              color: "#FFFFFF",
              backgroundColor: "#003E34",
              width: 130,
              minWidth: 130,
              textAlign: "center",
            }}
          >
            {model.letter}
          </Interactive.Div>

          <Interactive.Div
            name="Model info"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexGrow: 1,
            }}
          >
            <Interactive.Div
              name="Model name"
              style={{
                fontFamily: brandFont,
                fontSize: 50,
                fontWeight: 700,
                lineHeight: 1.4,
                color: "#003E34",
              }}
            >
              {model.name}
            </Interactive.Div>
            <Interactive.Div
              name="Model specs"
              style={{
                fontFamily: brandFont,
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#003E34",
                whiteSpace: "nowrap",
              }}
            >
              {model.rooms} · {model.baths} · {model.note}
            </Interactive.Div>
            <Interactive.Div
              name="Model area"
              style={{
                fontFamily: brandFont,
                fontSize: 40,
                fontWeight: 600,
                lineHeight: 1.6,
                color: "#00B15E",
              }}
            >
              <Counter to={model.area} from={Math.round((1.1 + i * 0.35) * 60)} durationInFrames={45} /> م²
            </Interactive.Div>
          </Interactive.Div>

          <Interactive.Div
            name="Model price"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Interactive.Div
              name="Price value"
              style={{
                fontFamily: brandFont,
                fontSize: 60,
                fontWeight: 700,
                lineHeight: 1.4,
                color: "#003E34",
              }}
            >
              <Counter to={model.price} from={Math.round((1.1 + i * 0.35) * 60)} durationInFrames={55} separator />
            </Interactive.Div>
            <Interactive.Div
              name="Price unit"
              style={{
                fontFamily: brandFont,
                fontSize: 30,
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#003E34",
              }}
            >
              ريال
            </Interactive.Div>
          </Interactive.Div>
        </Interactive.Div>
      ))}

      <Interactive.Div
        name="Finance note"
        style={{
          fontFamily: brandFont,
          fontSize: 30,
          fontWeight: 300,
          lineHeight: 1.6,
          color: "#FFFFFF",
          marginTop: 10,
          opacity: interpolate(
            frame,
            [2.6 * fps, 3.2 * fps, durationInFrames - 24, durationInFrames],
            [0, 1, 1, 0],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: [Easing.bezier(0.22, 1, 0.36, 1), Easing.linear, Easing.bezier(0.22, 1, 0.36, 1)],
            },
          ),
        }}
      >
        الأسعار للبيع المباشر وتقبل التمويل العقاري.
      </Interactive.Div>
    </AbsoluteFill>
  );
};
