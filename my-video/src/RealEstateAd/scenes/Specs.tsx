import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { bodyFont, headingFont } from "../fonts";
import type { Listing } from "../schema";
import { AreaIcon, BathIcon, ParkingIcon, RoomsIcon } from "./icons";

export const Specs: React.FC<Listing> = ({
  area,
  rooms,
  bathrooms,
  parking,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill
      name="Specs scene"
      style={{
        backgroundColor: "#0E3B2E",
        direction: "rtl",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "250px 80px 320px",
      }}
    >
      <Interactive.Div
        name="Section label"
        style={{
          fontFamily: bodyFont,
          fontSize: 42,
          fontWeight: 500,
          letterSpacing: 2,
          color: "#C9A227",
          opacity: interpolate(frame, [0, 0.6 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        المواصفات
      </Interactive.Div>

      <Interactive.Div
        name="Section title"
        style={{
          fontFamily: headingFont,
          fontSize: 96,
          fontWeight: 900,
          lineHeight: 1.5,
          color: "#F4EFE6",
          marginBottom: 76,
          opacity: interpolate(frame, [0.15 * fps, 0.85 * fps], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(
            frame,
            [0.15 * fps, 0.85 * fps],
            ["0px 44px", "0px 0px"],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            },
          ),
        }}
      >
        تفاصيل العقار
      </Interactive.Div>

      <Interactive.Div
        name="Specs grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          width: "100%",
        }}
      >
        <Interactive.Div
          name="Spec area"
          style={{
            backgroundColor: "rgba(244,239,230,0.06)",
            border: "2px solid rgba(201,162,39,0.32)",
            borderRadius: 36,
            padding: "44px 40px",
            opacity: interpolate(frame, [0.5 * fps, 1.1 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [0.5 * fps, 1.1 * fps],
              ["0px 50px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          <AreaIcon />
          <Interactive.Div
            name="Area value"
            style={{
              fontFamily: headingFont,
              fontSize: 78,
              fontWeight: 900,
              lineHeight: 1.5,
              color: "#F4EFE6",
              marginTop: 18,
            }}
          >
            {area}
          </Interactive.Div>
          <Interactive.Div
            name="Area label"
            style={{
              fontFamily: bodyFont,
              fontSize: 42,
              fontWeight: 400,
              color: "#A9C3B8",
            }}
          >
            المساحة
          </Interactive.Div>
        </Interactive.Div>

        <Interactive.Div
          name="Spec rooms"
          style={{
            backgroundColor: "rgba(244,239,230,0.06)",
            border: "2px solid rgba(201,162,39,0.32)",
            borderRadius: 36,
            padding: "44px 40px",
            opacity: interpolate(frame, [0.68 * fps, 1.28 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [0.68 * fps, 1.28 * fps],
              ["0px 50px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          <RoomsIcon />
          <Interactive.Div
            name="Rooms value"
            style={{
              fontFamily: headingFont,
              fontSize: 78,
              fontWeight: 900,
              lineHeight: 1.5,
              color: "#F4EFE6",
              marginTop: 18,
            }}
          >
            {rooms}
          </Interactive.Div>
          <Interactive.Div
            name="Rooms label"
            style={{
              fontFamily: bodyFont,
              fontSize: 42,
              fontWeight: 400,
              color: "#A9C3B8",
            }}
          >
            غرف النوم
          </Interactive.Div>
        </Interactive.Div>

        <Interactive.Div
          name="Spec bathrooms"
          style={{
            backgroundColor: "rgba(244,239,230,0.06)",
            border: "2px solid rgba(201,162,39,0.32)",
            borderRadius: 36,
            padding: "44px 40px",
            opacity: interpolate(frame, [0.86 * fps, 1.46 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [0.86 * fps, 1.46 * fps],
              ["0px 50px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          <BathIcon />
          <Interactive.Div
            name="Bathrooms value"
            style={{
              fontFamily: headingFont,
              fontSize: 78,
              fontWeight: 900,
              lineHeight: 1.5,
              color: "#F4EFE6",
              marginTop: 18,
            }}
          >
            {bathrooms}
          </Interactive.Div>
          <Interactive.Div
            name="Bathrooms label"
            style={{
              fontFamily: bodyFont,
              fontSize: 42,
              fontWeight: 400,
              color: "#A9C3B8",
            }}
          >
            دورات المياه
          </Interactive.Div>
        </Interactive.Div>

        <Interactive.Div
          name="Spec parking"
          style={{
            backgroundColor: "rgba(244,239,230,0.06)",
            border: "2px solid rgba(201,162,39,0.32)",
            borderRadius: 36,
            padding: "44px 40px",
            opacity: interpolate(frame, [1.04 * fps, 1.64 * fps], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(
              frame,
              [1.04 * fps, 1.64 * fps],
              ["0px 50px", "0px 0px"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              },
            ),
          }}
        >
          <ParkingIcon />
          <Interactive.Div
            name="Parking value"
            style={{
              fontFamily: headingFont,
              fontSize: 78,
              fontWeight: 900,
              lineHeight: 1.5,
              color: "#F4EFE6",
              marginTop: 18,
            }}
          >
            {parking}
          </Interactive.Div>
          <Interactive.Div
            name="Parking label"
            style={{
              fontFamily: bodyFont,
              fontSize: 42,
              fontWeight: 400,
              color: "#A9C3B8",
            }}
          >
            مواقف السيارات
          </Interactive.Div>
        </Interactive.Div>
      </Interactive.Div>
    </AbsoluteFill>
  );
};
