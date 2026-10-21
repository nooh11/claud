import { AbsoluteFill, Interactive } from "remotion";
import { Grain } from "./Grain";
import { SERIES_NAME } from "./script";
import { brandFont, colors, layout } from "./theme";

/** حبيبات ورق خفيفة جدًا — تُولَّد كـ SVG مضمّن فلا تحتاج ملفًا خارجيًا. */
/** التخطيط الثابت: الشعار أعلى اليمين، اسم السلسلة أعلى اليسار، والبطاقة في مكانها. */
export const Frame: React.FC<{
  readonly children: React.ReactNode;
  readonly textArea: React.ReactNode;
  readonly hideSeries?: boolean;
}> = ({ children, textArea, hideSeries }) => {
  return (
    <AbsoluteFill name="Tudar frame" style={{ backgroundColor: colors.paper, direction: "rtl" }}>
      <Grain opacity={0.07} seed={11} />

      <Interactive.Div
        name="Logo slot"
        style={{
          position: "absolute",
          top: layout.margin,
          right: layout.margin,
          width: layout.logoWidth,
          height: 54,
          border: `2px dashed ${colors.burgundy}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: brandFont,
          fontSize: 18,
          fontWeight: 400,
          color: colors.burgundy,
        }}
      >
        شعار تُدار
      </Interactive.Div>

      {hideSeries ? null : (
        <Interactive.Div
          name="Series name"
          style={{
            position: "absolute",
            top: layout.margin,
            left: layout.margin,
            fontFamily: brandFont,
            fontSize: 30,
            fontWeight: 400,
            lineHeight: 1.4,
            color: colors.ink,
            opacity: 0.7,
          }}
        >
          {SERIES_NAME}
        </Interactive.Div>
      )}

      <Interactive.Div
        name="Text area"
        style={{
          position: "absolute",
          top: layout.textTop,
          right: layout.sideMargin,
          left: layout.sideMargin,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {textArea}
      </Interactive.Div>

      <Interactive.Div
        name="Card"
        style={{
          position: "absolute",
          top: layout.cardTop,
          right: layout.sideMargin,
          left: layout.sideMargin,
          height: layout.cardBottom - layout.cardTop,
          borderRadius: layout.cardRadius,
          overflow: "hidden",
          backgroundColor: colors.sand,
        }}
      >
        {children}
      </Interactive.Div>
    </AbsoluteFill>
  );
};
