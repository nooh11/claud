import React from "react";
import { Interactive, interpolate, Easing, useCurrentFrame } from "remotion";
import { C, FONT } from "./theme";

const S = 3.2; // سماكة الخط الموحّدة للرسوم الخطية

/** ورقة بيضاء بظل رملي — الأساس البصري للقالب A. */
const Sheet: React.FC<{
  readonly name: string;
  readonly w: number;
  readonly h: number;
  readonly tilt: number;
  readonly children?: React.ReactNode;
}> = ({ name, w, h, tilt, children }) => (
  <Interactive.Div
    name={name}
    style={{
      position: "absolute",
      width: w,
      height: h,
      backgroundColor: C.paper,
      borderRadius: 14,
      border: "2.5px solid rgba(74,10,46,0.18)",
      boxShadow: "18px 22px 0px rgba(230,211,186,0.9)",
      rotate: `${tilt}deg`,
      overflow: "hidden",
    }}
  >
    {children}
  </Interactive.Div>
);

/** أسطر نص وهمية داخل الورقة. */
const Ruled: React.FC<{ readonly rows: number; readonly top: number }> = ({ rows, top }) => (
  <Interactive.Div
    name="Ruled"
    style={{ position: "absolute", top, right: 34, left: 34, display: "flex", flexDirection: "column", gap: 20 }}
  >
    {Array.from({ length: rows }).map((_, i) => (
      <Interactive.Div
        key={i}
        name={`Line${i}`}
        style={{
          height: 7,
          borderRadius: 4,
          backgroundColor: "rgba(74,10,46,0.16)",
          width: i % 3 === 2 ? "58%" : "100%",
        }}
      />
    ))}
  </Interactive.Div>
);

/** المسرح البصري — سبع لقطات، كل واحدة تتحرك داخل نفسها. */
export const Stage: React.FC<{
  readonly stage: string;
  readonly startFrame: number;
}> = ({ stage, startFrame }) => {
  const frame = useCurrentFrame();

  if (stage === "paper") {
    return (
      <Interactive.Div name="StagePaper" style={{ position: "relative", width: 842, height: 700 }}>
        <Interactive.Div
          name="Drop"
          style={{
            position: "absolute",
            top: 60,
            left: 186,
            translate: interpolate(frame, [startFrame, startFrame + 26], ["0px -120px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            rotate: interpolate(frame, [startFrame, startFrame + 26], ["-9deg", "-4deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [startFrame, startFrame + 12], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <Sheet name="Contract" w={500} h={620} tilt={0}>
            <Interactive.Div
              name="Head"
              style={{ position: "absolute", top: 46, right: 34, width: 190, height: 16, borderRadius: 8, backgroundColor: C.burgundy }}
            />
            <Ruled rows={8} top={110} />
            <Interactive.Div
              name="Sign"
              style={{ position: "absolute", bottom: 54, right: 34, width: 150, height: 3, backgroundColor: "rgba(74,10,46,0.35)" }}
            />
          </Sheet>
        </Interactive.Div>
      </Interactive.Div>
    );
  }

  if (stage === "quote") {
    return (
      <Interactive.Div name="StageQuote" style={{ position: "relative", width: 842, height: 700 }}>
        <Interactive.Div
          name="Rise"
          style={{
            position: "absolute",
            top: 110,
            left: 60,
            translate: interpolate(frame, [startFrame, startFrame + 28], ["0px 56px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [startFrame, startFrame + 16], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <Sheet name="QuoteCard" w={720} h={430} tilt={-1.5}>
            <Interactive.Div
              name="Bar"
              style={{ position: "absolute", top: 0, right: 0, width: 14, height: "100%", backgroundColor: C.burgundy }}
            />
            <Interactive.Div
              name="Mark"
              style={{
                position: "absolute",
                top: 44,
                right: 62,
                fontFamily: FONT,
                fontWeight: 700,
                fontSize: 150,
                lineHeight: 0.8,
                color: C.orange,
              }}
            >
              ”
            </Interactive.Div>
            <Ruled rows={5} top={200} />
          </Sheet>
        </Interactive.Div>
      </Interactive.Div>
    );
  }

  if (stage === "void") {
    return (
      <Interactive.Div
        name="StageVoid"
        style={{ position: "relative", width: 842, height: 700, display: "flex", flexDirection: "row-reverse", justifyContent: "center", alignItems: "center", gap: 60 }}
      >
        {["إداريًا", "قضائيًا"].map((label, i) => (
          <Interactive.Div
            key={label}
            name={label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 30,
              opacity: interpolate(frame, [startFrame + i * 22, startFrame + i * 22 + 18], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              scale: interpolate(frame, [startFrame + i * 22, startFrame + i * 22 + 18], [0.86, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          >
            <svg width="230" height="230" viewBox="0 0 100 100" fill="none" stroke={C.burgundy} strokeWidth={S} strokeLinecap="round">
              <circle cx="50" cy="50" r="40" />
              <path d="M34 34 L66 66 M66 34 L34 66" stroke={C.orange} strokeWidth={S * 1.6} />
            </svg>
            <Interactive.Div
              name="Label"
              style={{ fontFamily: FONT, fontWeight: 700, fontSize: 52, color: C.burgundy, direction: "rtl" }}
            >
              {label}
            </Interactive.Div>
          </Interactive.Div>
        ))}
      </Interactive.Div>
    );
  }

  if (stage === "delay") {
    return (
      <Interactive.Div
        name="StageDelay"
        style={{ position: "relative", width: 842, height: 700, display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Interactive.Div
          name="Clock"
          style={{
            opacity: interpolate(frame, [startFrame, startFrame + 16], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <svg width="420" height="420" viewBox="0 0 100 100" fill="none" stroke={C.burgundy} strokeWidth={S} strokeLinecap="round">
            <circle cx="50" cy="52" r="36" />
            <path d="M50 24 L50 18 M50 18 L44 12 M50 18 L56 12" />
            <path d="M50 52 L50 34" strokeWidth={S * 1.3} />
            <path d="M50 52 L68 60" strokeWidth={S * 1.3} stroke={C.orange} />
            <path d="M24 26 L18 20 M76 26 L82 20" />
          </svg>
        </Interactive.Div>
        <Interactive.Div
          name="Spark"
          style={{
            position: "absolute",
            top: 150,
            left: 190,
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 170,
            color: C.orange,
            opacity: interpolate(frame, [startFrame + 40, startFrame + 56], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            rotate: interpolate(frame, [startFrame + 40, startFrame + 56], ["-16deg", "-6deg"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          !
        </Interactive.Div>
      </Interactive.Div>
    );
  }

  if (stage === "verify") {
    return (
      <Interactive.Div
        name="StageVerify"
        style={{ position: "relative", width: 842, height: 700, display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet name="Verified" w={520} h={600} tilt={-2}>
          <Interactive.Div
            name="Head"
            style={{ position: "absolute", top: 50, right: 40, width: 210, height: 16, borderRadius: 8, backgroundColor: C.burgundy }}
          />
          <Ruled rows={6} top={118} />
        </Sheet>
        <Interactive.Div
          name="Stamp"
          style={{
            position: "absolute",
            bottom: 90,
            left: 150,
            scale: interpolate(frame, [startFrame + 20, startFrame + 40], [1.5, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [startFrame + 20, startFrame + 34], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            rotate: "-8deg",
          }}
        >
          <svg width="250" height="250" viewBox="0 0 100 100" fill="none" stroke={C.orange} strokeWidth={S * 1.5} strokeLinecap="round">
            <circle cx="50" cy="50" r="40" />
            <path d="M31 51 L44 64 L70 37" strokeWidth={S * 2} />
          </svg>
        </Interactive.Div>
      </Interactive.Div>
    );
  }

  if (stage === "tudar") {
    return (
      <Interactive.Div
        name="StageTudar"
        style={{ position: "relative", width: 842, height: 700, display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Interactive.Div
          name="Lift"
          style={{
            translate: interpolate(frame, [startFrame, startFrame + 26], ["0px 44px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            opacity: interpolate(frame, [startFrame, startFrame + 16], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <Interactive.Div
            name="Card"
            style={{
              width: 700,
              height: 420,
              backgroundColor: C.burgundy,
              borderRadius: 32,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 34,
              boxShadow: "20px 24px 0px rgba(230,211,186,0.9)",
            }}
          >
            <Interactive.Div
              name="LogoSlot"
              style={{
                width: 216,
                height: 84,
                border: "2px dashed rgba(243,230,213,0.55)",
                borderRadius: 12,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: FONT,
                fontWeight: 400,
                fontSize: 28,
                color: "rgba(243,230,213,0.65)",
                direction: "rtl",
              }}
            >
              شعار تُدار
            </Interactive.Div>
            <Interactive.Div
              name="Promise"
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 22,
                direction: "rtl",
                fontFamily: FONT,
                fontWeight: 700,
                fontSize: 46,
                color: C.sand,
              }}
            >
              <svg width="58" height="58" viewBox="0 0 100 100" fill="none" stroke={C.orange} strokeWidth={S * 2.4} strokeLinecap="round">
                <path d="M24 52 L42 70 L76 30" />
              </svg>
              توثيق · تحصيل · متابعة
            </Interactive.Div>
          </Interactive.Div>
        </Interactive.Div>
      </Interactive.Div>
    );
  }

  return null;
};
