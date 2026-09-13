import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { Counter } from "./Counter";
import { brandFont } from "./fonts";

/** صف معلومة في الشريط السفلي — خط شعري رفيع بلا صناديق تحجب الصورة. */
export const InfoList: React.FC<{
  readonly rows: { readonly label: string; readonly value: string; readonly count?: number }[];
  readonly startAt: number;
  readonly top: number;
}> = ({ rows, startAt, top }) => {
  const frame = useCurrentFrame();
  return (
    <Interactive.Div name="Info list" style={{ position: "absolute", top, right: 88, left: 88 }}>
      {rows.map((row, i) => (
        <Interactive.Div
          key={row.label}
          name="Info row"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 20,
            paddingTop: 14,
            paddingBottom: 14,
            borderBottom: "1px solid rgba(237,235,228,.22)",
            opacity: interpolate(frame, [startAt + i * 7, startAt + 22 + i * 7], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(frame, [startAt + i * 7, startAt + 22 + i * 7], ["36px 0px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <Interactive.Div
            name="Info label"
            style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 400, lineHeight: 1.4, color: "#FFFFFF", textShadow: "0 2px 18px rgba(0,20,17,.9), 0 0 8px rgba(0,20,17,.75)" }}
          >
            {row.label}
          </Interactive.Div>
          <Interactive.Div
            name="Info value"
            style={{ fontFamily: brandFont, fontSize: 34, fontWeight: 600, lineHeight: 1.3, color: "#FFB900", textShadow: "0 2px 18px rgba(0,20,17,.9), 0 0 8px rgba(0,20,17,.75)" }}
          >
            {row.count === undefined ? (
              row.value
            ) : (
              <>
                <Counter to={row.count} from={startAt + 10 + i * 7} durationInFrames={30} /> {row.value}
              </>
            )}
          </Interactive.Div>
        </Interactive.Div>
      ))}
    </Interactive.Div>
  );
};
