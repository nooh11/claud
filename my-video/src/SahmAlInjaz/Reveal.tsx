import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";

/**
 * كشف بستارة: النص ثابت وستارة بلون الخلفية تنزاح من اليمين لليسار فتكشفه تدريجيًا.
 * الاتجاه موحّد مع قاعدة الدليل ص 30، والحركة ناعمة بلا ارتداد.
 */
export const Reveal: React.FC<{
  readonly children: React.ReactNode;
  readonly start: number;
  readonly end: number;
  readonly curtain: string;
  readonly name: string;
}> = ({ children, start, end, curtain, name }) => {
  const frame = useCurrentFrame();
  return (
    <Interactive.Div
      name={name}
      style={{ position: "relative", overflow: "hidden", width: "100%" }}
    >
      {children}
      <Interactive.Div
        name="Curtain"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: 1080,
          backgroundColor: curtain,
          translate: interpolate(frame, [start, end], ["0px 0px", "-1120px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.76, 0, 0.24, 1),
          }),
        }}
      />
    </Interactive.Div>
  );
};
