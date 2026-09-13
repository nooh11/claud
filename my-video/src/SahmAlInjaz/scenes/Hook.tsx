import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Counter } from "../Counter";
import { brandFont } from "../fonts";
import { Reveal } from "../Reveal";
import type { Project } from "../schema";

/**
 * الغلاف — العمارة هي البطل: الصورة تملأ الكادر كاملًا بسماء ممتدّة،
 * والنص يجلس في السماء بالأخضر الغامق، وشريط سفلي رفيع يحمل التواصل
 * فوق منطقة المظلات دون أن يغطّي الواجهة.
 */
export const Hook: React.FC<Project> = ({
  headline,
  district,
  city,
  coverTall,
  logoGreen,
  priceFrom,
  currencyGlyph,
  statusTag,
  phonePrimary,
  phoneSecondary,
  adLicence,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill name="Cover scene" style={{ backgroundColor: "#003E34", direction: "rtl" }}>
      <Img
        name="Building photo"
        src={staticFile(coverTall)}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center bottom",
          scale: interpolate(frame, [0, 320], [1.05, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.33, 0, 0.2, 1),
            output: "perceptual-scale",
          }),
        }}
      />

      <Interactive.Div
        name="Logo slot"
        style={{ position: "absolute", top: 270, right: 80, left: 80, textAlign: "center" }}
      >
        <Reveal name="Logo reveal" start={0} end={1 * fps} curtain="#9CCDEC">
          <Img name="Ehya logo" src={staticFile(logoGreen)} style={{ width: 250 }} />
        </Reveal>
      </Interactive.Div>

      <Interactive.Div
        name="Headline slot"
        style={{ position: "absolute", top: 470, right: 80, left: 80, textAlign: "center" }}
      >
        <Reveal name="Headline reveal" start={0.4 * fps} end={1.5 * fps} curtain="#9CCDEC">
          <Interactive.Div
            name="Headline"
            style={{ fontFamily: brandFont, fontSize: 90, fontWeight: 700, lineHeight: 1.4, color: "#003E34" }}
          >
            {headline}
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div
        name="Status slot"
        style={{ position: "absolute", top: 620, right: 80, left: 80, textAlign: "center" }}
      >
        <Reveal name="Status reveal" start={0.8 * fps} end={1.8 * fps} curtain="#9CCDEC">
          <Interactive.Div
            name="Status chip"
            style={{
              display: "inline-block",
              fontFamily: brandFont,
              fontSize: 40,
              fontWeight: 600,
              lineHeight: 1.5,
              color: "#003E34",
              backgroundColor: "#FFB900",
              padding: "8px 40px",
            }}
          >
            {statusTag} · {district} — {city}
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div
        name="Price slot"
        style={{ position: "absolute", top: 730, right: 80, left: 80, textAlign: "center" }}
      >
        <Reveal name="Price reveal" start={1.2 * fps} end={2.3 * fps} curtain="#9CCDEC">
          <Interactive.Div
            name="Price stack"
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <Interactive.Div
              name="Price label"
              style={{ fontFamily: brandFont, fontSize: 40, fontWeight: 400, lineHeight: 1.4, color: "#003E34" }}
            >
              تبدأ الأسعار من
            </Interactive.Div>
            <Interactive.Div
              name="Price row"
              style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 20 }}
            >
              <Interactive.Div
                name="Price value"
                style={{ fontFamily: brandFont, fontSize: 150, fontWeight: 700, lineHeight: 1.2, color: "#003E34" }}
              >
                <Counter to={priceFrom} from={80} durationInFrames={80} separator />
              </Interactive.Div>
              <Interactive.Div
                name="Currency glyph"
                style={{ fontFamily: brandFont, fontSize: 80, fontWeight: 400, lineHeight: 1.2, color: "#003E34" }}
              >
                {currencyGlyph}
              </Interactive.Div>
            </Interactive.Div>
          </Interactive.Div>
        </Reveal>
      </Interactive.Div>

      <Interactive.Div
        name="Contact bar"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          left: 0,
          height: 200,
          backgroundColor: "#003E34",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          translate: interpolate(frame, [1.8 * fps, 2.7 * fps], ["0px 200px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        <Interactive.Div
          name="Phones row"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
            fontFamily: brandFont,
            fontSize: 50,
            fontWeight: 600,
            lineHeight: 1.4,
            color: "#FFFFFF",
            direction: "ltr",
          }}
        >
          <Img name="Contact icon" src={staticFile("icons/contact-yellow.svg")} style={{ height: 44 }} />
          {phonePrimary}
          <Interactive.Div name="Phone divider" style={{ width: 2, height: 36, backgroundColor: "#FFB900" }} />
          {phoneSecondary}
        </Interactive.Div>
        <Interactive.Div
          name="Ad licence"
          style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 300, lineHeight: 1.4, color: "#FFFFFF" }}
        >
          {adLicence}
        </Interactive.Div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
