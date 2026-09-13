import { Easing, interpolate, useCurrentFrame } from "remotion";

/**
 * عدّاد رقمي — الدليل ص 30: «تحريك الأرقام: تفعيل خاصية الـ Counter عند ظهور
 * النسب المئوية والخصومات لإضافة حيوية وجذب انتباه المشاهد».
 */
export const Counter: React.FC<{
  readonly to: number;
  readonly from: number;
  readonly durationInFrames: number;
  readonly decimals?: number;
  readonly separator?: boolean;
}> = ({ to, from, durationInFrames, decimals = 0, separator = false }) => {
  const frame = useCurrentFrame();
  const value = interpolate(frame, [from, from + durationInFrames], [0, to], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });
  const fixed = value.toFixed(decimals);
  return <>{separator ? Number(fixed).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) : fixed}</>;
};
