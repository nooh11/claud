import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";

/**
 * كشف بلا أي لون فوق الصورة: النص يصعد داخل حدوده وحدها،
 * والقصّ يتم بحدود السطر نفسه — لا ستارة ولا مستطيل ملوّن.
 */
export const Reveal: React.FC<{
  readonly children: React.ReactNode;
  readonly start: number;
  readonly end: number;
  readonly name: string;
}> = ({ children, start, end, name }) => {
  const frame = useCurrentFrame();
  return (
    <Interactive.Div name={name} style={{ overflow: "hidden", paddingBottom: 6 }}>
      <Interactive.Div
        name="Rise"
        style={{
          translate: interpolate(frame, [start, end], ["0px 130px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          opacity: interpolate(frame, [start, start + 8], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.linear,
          }),
        }}
      >
        {children}
      </Interactive.Div>
    </Interactive.Div>
  );
};
