/**
 * ملمس حبيبي يُرسم كـ SVG مضمّن لا كصورة خلفية —
 * فلا يتأخر تحميله ولا يومض بين الإطارات عند الرندر.
 */
export const Grain: React.FC<{ readonly opacity: number; readonly seed: number }> = ({ opacity, seed }) => (
  <svg
    width="100%"
    height="100%"
    style={{ position: "absolute", inset: 0, opacity, pointerEvents: "none" }}
  >
    <filter id={`grain-${seed}`} x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={seed} />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter={`url(#grain-${seed})`} />
  </svg>
);
