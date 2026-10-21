import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { brandFont, colors } from "./theme";

/**
 * سطر يظهر كلمة بكلمة مع الصوت.
 * الكلمة بين نجمتين تأخذ اللون البرتقالي — لون واحد مميِّز في كل جملة.
 * الخروج يتم للجملة كاملة مرة واحدة، فلا تتداخل جملتان أبدًا.
 */
export const WordLine: React.FC<{
  readonly text: string;
  readonly size: number;
  readonly weight: number;
  readonly startFrame: number;
  readonly perWord: number;
  readonly exitFrame: number;
  readonly name: string;
}> = ({ text, size, weight, startFrame, perWord, exitFrame, name }) => {
  const frame = useCurrentFrame();
  // النجمتان قد تحيطان بأكثر من كلمة — تُفكّ المجموعة أولًا ثم تُقسَّم كلماتٍ.
  const words: { word: string; accent: boolean }[] = [];
  text.split(/(\*[^*]+\*)/).filter(Boolean).forEach((segment) => {
    const accent = segment.startsWith("*") && segment.endsWith("*");
    const body = accent ? segment.slice(1, -1) : segment;
    body.split(" ").filter(Boolean).forEach((word) => words.push({ word, accent }));
  });

  return (
    <Interactive.Div
      name={name}
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: `0 ${Math.round(size * 0.26)}px`,
        opacity: interpolate(frame, [exitFrame, exitFrame + 12], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.linear,
        }),
      }}
    >
      {words.map(({ word, accent }, i) => {
        return (
          <Interactive.Div
            key={`${word}-${i}`}
            name="Word"
            style={{
              fontFamily: brandFont,
              fontSize: size,
              fontWeight: weight,
              lineHeight: 1.25,
              color: accent ? colors.orange : colors.ink,
              paddingBottom: Math.round(size * 0.12),
              opacity: interpolate(
                frame,
                [startFrame + i * perWord, startFrame + i * perWord + 17],
                [0, 1],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.215, 0.61, 0.355, 1),
                },
              ),
              translate: interpolate(
                frame,
                [startFrame + i * perWord, startFrame + i * perWord + 17],
                ["0px 24px", "0px 0px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.215, 0.61, 0.355, 1),
                },
              ),
            }}
          >
            {word}
          </Interactive.Div>
        );
      })}
    </Interactive.Div>
  );
};
