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
import { brandFont } from "./fonts";

/**
 * الإطار المشترك لكل المشاهد — مطابق لنظام بوسترات سهم الإنجاز:
 * صورة المشروع في الوسط، الأخضر يغطي السماء من فوق ويصعد خفيفًا من تحت،
 * شريط علوي بالشعارين، نص لاتيني رأسي على اليسار، وشريط تواصل سفلي.
 */
export const PosterFrame: React.FC<{
  readonly photo: string;
  readonly projectName: string;
  readonly district: string;
  readonly city: string;
  readonly latinName: string;
  readonly latinTag: string;
  readonly phonePrimary: string;
  readonly phoneSecondary: string;
  readonly website: string;
  readonly adLicence: string;
  readonly children: React.ReactNode;
}> = ({
  photo,
  projectName,
  district,
  city,
  latinName,
  latinTag,
  phonePrimary,
  phoneSecondary,
  website,
  adLicence,
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill name="Poster frame" style={{ backgroundColor: "#00221D", direction: "rtl" }}>
      <Img
        name="Project photo"
        src={staticFile(photo)}
        style={{
          position: "absolute",
          bottom: 430,
          left: -85,
          width: 1250,
          scale: interpolate(frame, [0, 360], [1.06, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.33, 0, 0.2, 1),
            output: "perceptual-scale",
          }),
        }}
      />
      <Interactive.Div
        name="Veil"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg,#003E34 0%,#003E34 42%,rgba(0,62,52,.86) 51%,rgba(0,50,42,.42) 60%,rgba(0,34,29,0) 73%),linear-gradient(0deg,#001411 0%,#001411 23%,rgba(0,20,17,.64) 31%,rgba(0,20,17,0) 44%)",
        }}
      />

      <Interactive.Div
        name="Top bar"
        style={{
          position: "absolute",
          top: 270,
          right: 88,
          left: 88,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          opacity: interpolate(frame, [0, 0.7 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        <Interactive.Div
          name="Brand mark"
          style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 18 }}
        >
          <Img name="Ehya logo" src={staticFile("ehya-amlak-white.svg")} style={{ height: 74 }} />
          <Interactive.Div
            name="Exclusive"
            style={{
              borderRight: "1px solid rgba(237,235,228,.20)",
              paddingRight: 18,
              fontFamily: brandFont,
              fontSize: 20,
              fontWeight: 300,
              lineHeight: 1.45,
              color: "rgba(237,235,228,.68)",
            }}
          >
            المسوّق
            <Interactive.Div
              name="Exclusive strong"
              style={{ fontFamily: brandFont, fontSize: 20, fontWeight: 600, lineHeight: 1.45, color: "#EDEBE4" }}
            >
              الحصري
            </Interactive.Div>
          </Interactive.Div>
        </Interactive.Div>

        <Interactive.Div name="Project mark" style={{ textAlign: "left" }}>
          <Interactive.Div
            name="Project name"
            style={{ fontFamily: brandFont, fontSize: 30, fontWeight: 600, lineHeight: 1.1, color: "#FFFFFF" }}
          >
            {projectName}
          </Interactive.Div>
          <Interactive.Div
            name="Project place"
            style={{ fontFamily: brandFont, fontSize: 20, fontWeight: 300, lineHeight: 1.4, color: "rgba(237,235,228,.6)", marginTop: 5 }}
          >
            {district} — {city}
          </Interactive.Div>
        </Interactive.Div>
      </Interactive.Div>

      <Interactive.Div
        name="Side latin"
        style={{
          position: "absolute",
          left: 62,
          top: 700,
          writingMode: "vertical-rl",
          rotate: "180deg",
          letterSpacing: 4,
          textTransform: "uppercase",
          opacity: interpolate(frame, [0.5 * fps, 1.4 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        <Interactive.Div
          name="Latin name"
          style={{ fontFamily: brandFont, fontSize: 20, fontWeight: 600, color: "#FFFFFF" }}
        >
          {latinName}
        </Interactive.Div>
        <Interactive.Div
          name="Latin tag"
          style={{ fontFamily: brandFont, fontSize: 20, fontWeight: 300, color: "#E8C77A", marginTop: 10 }}
        >
          {latinTag}
        </Interactive.Div>
      </Interactive.Div>

      {children}

      <Interactive.Div
        name="Foot"
        style={{
          position: "absolute",
          right: 88,
          bottom: 330,
          left: 88,
          borderTop: "1px solid rgba(237,235,228,.20)",
          paddingTop: 26,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          opacity: interpolate(frame, [1.6 * fps, 2.4 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.22, 1, 0.36, 1),
          }),
        }}
      >
        <Interactive.Div
          name="Phones"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 26,
            direction: "ltr",
          }}
        >
          <Img name="Contact icon" src={staticFile("icons/contact-yellow.svg")} style={{ height: 30 }} />
          <Interactive.Div
            name="Phone one"
            style={{ fontFamily: brandFont, fontSize: 32, fontWeight: 600, letterSpacing: 1.5, color: "#FFFFFF" }}
          >
            {phonePrimary}
          </Interactive.Div>
          <Interactive.Div name="Sep" style={{ width: 1, height: 26, backgroundColor: "rgba(237,235,228,.20)" }} />
          <Interactive.Div
            name="Phone two"
            style={{ fontFamily: brandFont, fontSize: 32, fontWeight: 600, letterSpacing: 1.5, color: "#FFFFFF" }}
          >
            {phoneSecondary}
          </Interactive.Div>
        </Interactive.Div>
        <Interactive.Div name="Meta" style={{ textAlign: "left" }}>
          <Interactive.Div
            name="Website"
            style={{ fontFamily: brandFont, fontSize: 22, fontWeight: 500, letterSpacing: 2.5, color: "#EDEBE4" }}
          >
            {website}
          </Interactive.Div>
          <Interactive.Div
            name="Licence"
            style={{ fontFamily: brandFont, fontSize: 16, fontWeight: 300, color: "rgba(237,235,228,.45)", marginTop: 5 }}
          >
            {adLicence}
          </Interactive.Div>
        </Interactive.Div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
