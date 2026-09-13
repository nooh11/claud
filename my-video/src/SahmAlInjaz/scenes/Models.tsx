import { Easing, Img, Interactive, interpolate, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Counter } from "../Counter";
import { brandFont } from "../fonts";
import { PosterFrame } from "../PosterFrame";
import { Reveal } from "../Reveal";
import type { Project } from "../schema";

/** كارت المواصفات ثنائي اللغة مع شريط الإفراغ الذهبي — مطابق لبوستر النماذج. */
export const Models: React.FC<Project> = (props) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const model = props.models[0];

  return (
    <PosterFrame
      photo={props.galleryTwo}
      projectName={props.projectName}
      district={props.district}
      city={props.city}
      latinName="Residential"
      latinTag="Immediate Handover"
      phonePrimary={props.phonePrimary}
      phoneSecondary={props.phoneSecondary}
      website={props.website}
      adLicence={props.adLicence}
    >
      <Interactive.Div name="Head" style={{ position: "absolute", top: 520, right: 88, left: 88, textAlign: "center" }}>
        <Reveal name="T1 reveal" start={0} end={1 * fps} curtain="#003E34">
          <Interactive.Div
            name="Headline one"
            style={{ fontFamily: brandFont, fontSize: 110, fontWeight: 700, lineHeight: 1.14, color: "#FFFFFF" }}
          >
            ثلاثــة نمــاذج
          </Interactive.Div>
        </Reveal>
        <Reveal name="T2 reveal" start={0.3 * fps} end={1.3 * fps} curtain="#003E34">
          <Interactive.Div
            name="Headline two"
            style={{ fontFamily: brandFont, fontSize: 60, fontWeight: 400, lineHeight: 1.4, color: "#E8C77A" }}
          >
            اختــر دورك
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div
        name="Spec card"
        style={{
          position: "absolute",
          top: 800,
          right: 88,
          left: 88,
          background: "linear-gradient(180deg,rgba(255,255,255,.96),rgba(241,239,231,.92))",
          border: "1px solid rgba(0,62,52,.16)",
          padding: "28px 34px 0",
          opacity: interpolate(frame, [0.7 * fps, 1.5 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
          translate: interpolate(frame, [0.7 * fps, 1.5 * fps], ["0px 40px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        {props.specRows.map((row, i) => (
          <Interactive.Div
            key={row.labelAr}
            name="Spec row"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 0",
              borderBottom: "1px solid rgba(0,62,52,.15)",
              opacity: interpolate(frame, [(1 + i * 0.13) * fps, (1.6 + i * 0.13) * fps], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.22, 1, 0.36, 1),
              }),
            }}
          >
            <Interactive.Div name="Row label" style={{ textAlign: "right" }}>
              <Interactive.Div
                name="Label ar"
                style={{ fontFamily: brandFont, fontSize: 22, fontWeight: 500, lineHeight: 1.4, color: "#00302A" }}
              >
                {row.labelAr}
              </Interactive.Div>
              <Interactive.Div
                name="Label en"
                style={{ fontFamily: brandFont, fontSize: 16, fontWeight: 300, lineHeight: 1.4, color: "rgba(0,48,42,.50)", letterSpacing: 0.6 }}
              >
                {row.labelEn}
              </Interactive.Div>
            </Interactive.Div>
            <Interactive.Div
              name="Row value"
              style={{ fontFamily: brandFont, fontSize: 28, fontWeight: 600, lineHeight: 1.3, color: "#00221D", textAlign: "left" }}
            >
              {row.value}
            </Interactive.Div>
          </Interactive.Div>
        ))}

        <Interactive.Div name="Price block" style={{ padding: "28px 0 26px", textAlign: "right" }}>
          <Interactive.Div
            name="Price label"
            style={{ fontFamily: brandFont, fontSize: 20, fontWeight: 300, lineHeight: 1.4, color: "rgba(0,48,42,.62)", marginBottom: 8 }}
          >
            الســعــر
          </Interactive.Div>
          <Interactive.Div
            name="Price row"
            style={{ display: "flex", flexDirection: "row", alignItems: "baseline", gap: 10 }}
          >
            <Interactive.Div
              name="Price value"
              style={{ fontFamily: brandFont, fontSize: 84, fontWeight: 700, lineHeight: 1, color: "#00221D" }}
            >
              <Counter to={model.price} from={90} durationInFrames={70} separator />
            </Interactive.Div>
            <Interactive.Div
              name="Price currency"
              style={{ fontFamily: brandFont, fontSize: 44, fontWeight: 400, lineHeight: 1, color: "#9A6E00" }}
            >
              {props.currencyGlyph}
            </Interactive.Div>
          </Interactive.Div>
        </Interactive.Div>

        <Interactive.Div
          name="CTA bar"
          style={{
            margin: "0 -34px",
            backgroundColor: "#FFB900",
            color: "#00221D",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            padding: "22px 0",
            fontFamily: brandFont,
            fontSize: 28,
            fontWeight: 600,
            lineHeight: 1.3,
            opacity: interpolate(frame, [2 * fps, 2.7 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.22, 1, 0.36, 1),
            }),
          }}
        >
          <Img name="CTA icon" src={staticFile("icons/warranty-green.svg")} style={{ height: 28 }} />
          {props.ctaLine}
        </Interactive.Div>
      </Interactive.Div>
    </PosterFrame>
  );
};
