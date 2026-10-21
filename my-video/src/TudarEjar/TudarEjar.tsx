import { AbsoluteFill, Easing, Interactive, interpolate, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { Card } from "./Card";
import { Frame } from "./Frame";
import { shots } from "./script";
import { colors } from "./theme";
import { WordLine } from "./WordLine";

/** الكاميرا داخل البطاقة لا تتوقف: تقريب بطيء، أو غوص عميق نحو تفصيلة. */
const CAMERA: Record<string, { readonly to: number; readonly origin: string }> = {
  handshake: { to: 1.55, origin: "50% 54%" },
  palm: { to: 1.6, origin: "46% 70%" },
  chat1: { to: 1.14, origin: "50% 32%" },
  chat2: { to: 1.2, origin: "50% 40%" },
  chat3: { to: 1.26, origin: "52% 52%" },
  silence: { to: 1.3, origin: "50% 38%" },
  map: { to: 1.34, origin: "58% 60%" },
  gavel: { to: 1.18, origin: "50% 60%" },
  wait: { to: 1.15, origin: "48% 56%" },
  split: { to: 1.12, origin: "50% 50%" },
  contract: { to: 1.16, origin: "50% 46%" },
  key: { to: 1.3, origin: "50% 50%" },
  handover: { to: 1.7, origin: "50% 52%" },
  endcard: { to: 1.1, origin: "50% 44%" },
};

const Shot: React.FC<{ readonly index: number }> = ({ index }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const shot = shots[index];
  const cam = CAMERA[shot.card] ?? { to: 1.15, origin: "50% 50%" };

  const countWords = (line: string) => line.replace(/\*/g, "").split(" ").filter(Boolean).length;
  const words = countWords(shot.lineOne) + countWords(shot.lineTwo);
  const perWord = Math.max(5, Math.floor((durationInFrames * 0.55) / Math.max(words, 1)));
  const oneWords = countWords(shot.lineOne);
  const exitFrame = durationInFrames - 12;

  return (
    <Frame
      hideSeries={shot.card === "endcard"}
      textArea={
        <>
          {shot.lineOne ? (
            <WordLine
              name="Line one"
              text={shot.lineOne}
              size={62}
              weight={400}
              startFrame={0}
              perWord={perWord}
              exitFrame={exitFrame}
            />
          ) : null}
          <WordLine
            name="Line two"
            text={shot.lineTwo}
            size={92}
            weight={700}
            startFrame={oneWords * perWord}
            perWord={perWord}
            exitFrame={exitFrame}
          />
        </>
      }
    >
      <Interactive.Div
        name="Camera"
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: cam.origin,
          scale: interpolate(frame, [0, durationInFrames], [1, cam.to], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.37, 0, 0.63, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        <Card kind={shot.card} />
      </Interactive.Div>
    </Frame>
  );
};

/** قطع مباشر بين اللقطات — لا تلاشي متقاطع، كما في «سياق». */
export const TudarEjar: React.FC = () => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill name="Tudar ejar" style={{ backgroundColor: colors.paper }}>
      {shots.map((shot, i) => (
        <Sequence
          key={shot.id}
          name={`${shot.id} · ${shot.lineTwo.replace(/\*/g, "")}`}
          from={Math.round(shot.from * fps)}
          durationInFrames={Math.round((shot.to - shot.from) * fps)}
        >
          <Shot index={i} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
