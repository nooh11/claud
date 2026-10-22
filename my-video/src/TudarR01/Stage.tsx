import React from "react";
import { Img, Interactive, interpolate, Easing, staticFile, useCurrentFrame } from "remotion";
import { C, FONT } from "./theme";
import { Logo } from "./Logo";

/** لغة الأيقونات في الهوية: إطار 96، سماكة 9، وصلات حادّة، نهايات مستقيمة. */
const STROKE = 9;

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
            <svg width="240" height="240" viewBox="0 0 96 96" fill="none" stroke={C.burgundy} strokeWidth={STROKE} strokeLinejoin="miter" strokeLinecap="butt">
              <circle cx="48" cy="48" r="36" />
              <path d="M33 33 L63 63 M63 33 L33 63" stroke={C.orange} />
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
          name="Calendar"
          style={{
            opacity: interpolate(frame, [startFrame, startFrame + 16], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <Img name="CalendarIcon" src={staticFile("tudar/icons/tudar-icon-calendar-primary.svg")} style={{ width: 400, height: 400 }} />
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
        <Interactive.Div
          name="Contract"
          style={{
            opacity: interpolate(frame, [startFrame, startFrame + 16], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [startFrame, startFrame + 26], ["0px 32px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <Img name="ContractIcon" src={staticFile("tudar/icons/tudar-icon-contract-primary.svg")} style={{ width: 430, height: 430 }} />
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
            <Logo width={300} tone="reverse" />
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
              توثيق · تحصيل · متابعة
            </Interactive.Div>
          </Interactive.Div>
        </Interactive.Div>
      </Interactive.Div>
    );
  }

  return null;
};
