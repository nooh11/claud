import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { Grain } from "./Grain";
import { brandFont, colors } from "./theme";

const W = 940;
const H = 1200;



const Stage: React.FC<{ readonly bg: string; readonly children: React.ReactNode }> = ({ bg, children }) => (
  <Interactive.Div name="Card stage" style={{ position: "absolute", inset: 0, backgroundColor: bg }}>
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" style={{ display: "block" }}>
      {children}
    </svg>
    <Grain opacity={0.08} seed={3} />
  </Interactive.Div>
);

/** يدان تتصافحان — أشكال مسطحة بظلّ بلونين. */
const Handshake: React.FC = () => (
  <Stage bg={colors.sand}>
    <circle cx={470} cy={600} r={330} fill={colors.burgundy} opacity={0.08} />
    <path d="M150 640 q110 -90 230 -40 l130 56 q40 18 24 56 q-16 38 -56 22 l-120 -50" fill="#E8C9A8" />
    <path d="M790 560 q-110 -90 -230 -40 l-130 56 q-40 18 -24 56 q16 38 56 22 l120 -50" fill="#D9B08C" />
    <path d="M370 656 l200 -84 q42 -18 60 22 q18 40 -24 58 l-200 84 q-42 18 -60 -22 q-18 -40 24 -58 Z" fill="#F0DCC4" />
    <path d="M370 656 l200 -84 q42 -18 60 22 l-260 108 q-18 -40 0 -46 Z" fill={colors.ink} opacity={0.10} />
    <rect x={120} y={600} width={150} height={120} rx={20} fill={colors.burgundy} />
    <rect x={690} y={520} width={150} height={120} rx={20} fill={colors.burgundy} />
  </Stage>
);

/** الغوص يكتمل: الكفّ يملأ البطاقة. */
const Palm: React.FC = () => (
  <Stage bg="#E8C9A8">
    <path d="M-40 1240 q180 -520 420 -600 q240 -80 420 40 q160 110 180 560 Z" fill="#F0DCC4" />
    <path d="M160 1240 q120 -380 320 -440" stroke={colors.ink} strokeWidth={10} opacity={0.12} fill="none" />
    <path d="M330 1240 q90 -300 270 -360" stroke={colors.ink} strokeWidth={10} opacity={0.12} fill="none" />
  </Stage>
);

const Phone: React.FC<{ readonly children: React.ReactNode }> = ({ children }) => (
  <>
    <rect x={190} y={120} width={560} height={960} rx={56} fill={colors.ink} />
    <rect x={212} y={146} width={516} height={908} rx={40} fill={colors.paper} />
    {children}
  </>
);

const Bubble: React.FC<{
  readonly x: number; readonly y: number; readonly w: number; readonly h: number;
  readonly fill: string; readonly lines: number; readonly right?: boolean;
}> = ({ x, y, w, h, fill, lines, right }) => (
  <>
    <rect x={x} y={y} width={w} height={h} rx={24} fill={fill} />
    {Array.from({ length: lines }).map((_, i) => (
      <rect
        key={i}
        x={right ? x + 26 : x + 26}
        y={y + 26 + i * 34}
        width={w - 52 - (i === lines - 1 ? 70 : 0)}
        height={16}
        rx={8}
        fill={colors.paper}
        opacity={0.75}
      />
    ))}
  </>
);

const Chat: React.FC<{ readonly stage: 1 | 2 | 3 }> = ({ stage }) => {
  const frame = useCurrentFrame();
  const pop = (at: number) =>
    interpolate(frame, [at, at + 16], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.bezier(0.215, 0.61, 0.355, 1),
    });
  return (
    <Stage bg={colors.sand}>
      <Phone>
        <g opacity={pop(10)}>
          <Bubble x={250} y={240} w={330} h={120} fill={colors.burgundy} lines={2} />
        </g>
        {stage >= 2 ? (
          <g opacity={pop(26)}>
            <Bubble x={250} y={400} w={370} h={120} fill={colors.burgundy} lines={2} />
          </g>
        ) : null}
        {stage >= 3 ? (
          <>
            <g opacity={pop(26)}>
              <Bubble x={360} y={560} w={330} h={86} fill="#2E7D5B" lines={1} right />
            </g>
            <text
              x={690} y={678} textAnchor="end"
              fontFamily={brandFont} fontSize={22} fill={colors.ink} opacity={pop(40) * 0.55}
            >
              تمت القراءة
            </text>
          </>
        ) : null}
      </Phone>
    </Stage>
  );
};

/** رجل سعودي بثوب وغترة — أسلوب مسطح بلا ملامح. */
const Silence: React.FC = () => (
  <Stage bg={colors.navy}>
    <circle cx={470} cy={520} r={300} fill="#FFFFFF" opacity={0.05} />
    <path d="M470 1200 q-260 0 -300 -260 q-20 -150 120 -200 l360 0 q140 50 120 200 q-40 260 -300 260 Z" fill="#F0EDE6" />
    <circle cx={470} cy={470} r={150} fill="#E8D9C4" />
    <path d="M300 440 q0 -220 170 -220 q170 0 170 220 q0 60 -40 70 l0 -120 l-260 0 l0 120 q-40 -10 -40 -70 Z" fill="#FFFFFF" />
    <path d="M300 440 q-10 240 90 300 l40 -30 q-90 -70 -90 -270 Z" fill="#FFFFFF" />
    <path d="M640 440 q10 240 -90 300 l-40 -30 q90 -70 90 -270 Z" fill="#FFFFFF" />
    <rect x={318} y={300} width={304} height={30} rx={15} fill={colors.ink} opacity={0.85} />
    <path d="M404 520 q36 -26 72 0" stroke={colors.ink} strokeWidth={12} fill="none" strokeLinecap="round" opacity={0.7} />
    <path d="M430 600 q40 -26 80 0" stroke={colors.ink} strokeWidth={12} fill="none" strokeLinecap="round" opacity={0.5} />
  </Stage>
);

const MapCard: React.FC = () => {
  const frame = useCurrentFrame();
  const draw = interpolate(frame, [12, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });
  return (
    <Stage bg="#E4DCCB">
      <g stroke={colors.ink} strokeWidth={3} opacity={0.18}>
        <path d="M0 300 H940 M0 620 H940 M0 900 H940 M240 0 V1200 M560 0 V1200 M790 0 V1200" />
      </g>
      <g fill={colors.ink} opacity={0.10}>
        <rect x={60} y={340} width={150} height={240} rx={8} />
        <rect x={280} y={340} width={240} height={240} rx={8} />
        <rect x={600} y={660} width={160} height={210} rx={8} />
        <rect x={60} y={940} width={150} height={200} rx={8} />
      </g>
      <path
        d="M200 420 C 330 520, 420 620, 560 700 S 740 820, 800 940"
        stroke={colors.orange} strokeWidth={14} fill="none" strokeLinecap="round"
        strokeDasharray={1200} strokeDashoffset={1200 - 1200 * draw}
      />
      <circle cx={200} cy={420} r={26} fill={colors.burgundy} />
      <rect x={742} y={900} width={116} height={80} rx={10} fill={colors.burgundy} />
      <text x={200} y={370} textAnchor="middle" fontFamily={brandFont} fontSize={30} fontWeight={600} fill={colors.ink}>شقتك</text>
      <text x={800} y={1040} textAnchor="middle" fontFamily={brandFont} fontSize={30} fontWeight={600} fill={colors.ink}>المحكمة</text>
    </Stage>
  );
};

const Gavel: React.FC = () => {
  const frame = useCurrentFrame();
  const drop = interpolate(frame, [30, 44], [-160, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.4, 0, 0.3, 1),
  });
  const shake = interpolate(frame, [44, 48, 52, 56], [0, 7, -4, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.linear,
  });
  return (
    <Stage bg={colors.sand}>
      <g transform={`translate(${shake} 0)`}>
        <rect x={210} y={560} width={520} height={420} rx={14} fill="#FFFFFF" />
        <g fill={colors.ink} opacity={0.14}>
          <rect x={260} y={620} width={420} height={16} rx={8} />
          <rect x={260} y={664} width={360} height={16} rx={8} />
          <rect x={260} y={708} width={400} height={16} rx={8} />
        </g>
        <g transform={`translate(0 ${drop})`} opacity={drop === -160 ? 0 : 1}>
          <rect x={272} y={782} width={396} height={96} rx={10} fill="none" stroke={colors.orange} strokeWidth={8} />
          <text x={470} y={846} textAnchor="middle" fontFamily={brandFont} fontSize={40} fontWeight={700} fill={colors.orange}>
            غير قابل للتنفيذ
          </text>
        </g>
        <g transform="rotate(-24 470 330)">
          <rect x={300} y={286} width={340} height={64} rx={20} fill={colors.burgundy} />
          <rect x={430} y={330} width={64} height={190} rx={18} fill={colors.burgundy} />
        </g>
        <rect x={330} y={520} width={280} height={34} rx={14} fill={colors.ink} opacity={0.75} />
      </g>
    </Stage>
  );
};

const Wait: React.FC = () => {
  const frame = useCurrentFrame();
  const tap = (i: number) =>
    interpolate((frame + i * 9) % 46, [0, 8, 16, 46], [0, -16, 0, 0], {
      extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.4, 0, 0.4, 1),
    });
  return (
    <Stage bg="#E4DCCB">
      <rect x={0} y={760} width={940} height={440} fill={colors.ink} opacity={0.12} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(0 ${tap(i)})`}>
          <rect x={250 + i * 110} y={560} width={82} height={210} rx={41} fill="#E8C9A8" />
        </g>
      ))}
      <rect x={210} y={720} width={520} height={120} rx={50} fill="#D9B08C" />
      <circle cx={760} cy={250} r={110} fill="none" stroke={colors.burgundy} strokeWidth={10} />
      <line x1={760} y1={250} x2={760} y2={170} stroke={colors.burgundy} strokeWidth={10} strokeLinecap="round"
        transform={`rotate(${(frame * 9) % 360} 760 250)`} />
      <circle cx={760} cy={250} r={10} fill={colors.orange} />
    </Stage>
  );
};

const Split: React.FC = () => {
  const frame = useCurrentFrame();
  const cross = (i: number) =>
    interpolate(frame, [20 + i * 7, 32 + i * 7], [0, 1], {
      extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.4, 0, 0.2, 1),
    });
  return (
    <Stage bg={colors.sand}>
      <rect x={0} y={0} width={940} height={600} fill={colors.navy} />
      <rect x={180} y={120} width={580} height={420} rx={10} fill="#F0EDE6" opacity={0.12} />
      <g fill="#FFD98A">
        <rect x={240} y={200} width={120} height={120} rx={8} />
        <rect x={420} y={200} width={120} height={120} rx={8} />
        <rect x={600} y={200} width={120} height={120} rx={8} />
        <rect x={240} y={370} width={120} height={120} rx={8} />
        <rect x={600} y={370} width={120} height={120} rx={8} />
      </g>
      <rect x={420} y={370} width={120} height={120} rx={8} fill={colors.orange} />
      <rect x={0} y={600} width={940} height={600} fill="#E4DCCB" />
      <rect x={150} y={670} width={640} height={460} rx={16} fill="#FFFFFF" />
      {Array.from({ length: 12 }).map((_, i) => {
        const cx = 230 + (i % 4) * 160;
        const cy = 760 + Math.floor(i / 4) * 120;
        return (
          <g key={i}>
            <rect x={cx - 48} y={cy - 40} width={96} height={82} rx={8} fill={colors.ink} opacity={0.08} />
            {i < 9 ? (
              <g opacity={cross(i)} stroke={colors.orange} strokeWidth={9} strokeLinecap="round">
                <line x1={cx - 28} y1={cy - 20} x2={cx + 28} y2={cy + 24} />
                <line x1={cx + 28} y1={cy - 20} x2={cx - 28} y2={cy + 24} />
              </g>
            ) : null}
          </g>
        );
      })}
    </Stage>
  );
};

const Contract: React.FC = () => {
  const frame = useCurrentFrame();
  const tick = (i: number) =>
    interpolate(frame, [26 + i * 20, 40 + i * 20], [0, 1], {
      extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.215, 0.61, 0.355, 1),
    });
  const badge = interpolate(frame, [92, 112], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.215, 0.61, 0.355, 1),
  });
  return (
    <Stage bg={colors.navy}>
      <rect x={150} y={150} width={640} height={760} rx={20} fill="#F6F2EA" />
      <rect x={210} y={220} width={330} height={22} rx={11} fill={colors.ink} opacity={0.22} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={210} y={330 + i * 130} width={520} height={88} rx={12} fill={colors.ink} opacity={0.06} />
          <rect x={250} y={362 + i * 130} width={300} height={16} rx={8} fill={colors.ink} opacity={0.2} />
          <g opacity={tick(i)}>
            <circle cx={660} cy={374 + i * 130} r={30} fill="#2E7D5B" />
            <path d={`M646 ${374 + i * 130} l10 12 l20 -24`} stroke="#FFFFFF" strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      ))}
      <g opacity={badge}>
        <rect x={250} y={960} width={440} height={96} rx={14} fill={colors.orange} />
        <text x={470} y={1024} textAnchor="middle" fontFamily={brandFont} fontSize={44} fontWeight={700} fill="#FFFFFF">
          عقد موثّق
        </text>
      </g>
    </Stage>
  );
};

const KeyCard: React.FC = () => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, [8, 34], [320, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.215, 0.61, 0.355, 1),
  });
  const turn = interpolate(frame, [48, 84], [0, 90], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.45, 0, 0.3, 1),
  });
  return (
    <Stage bg={colors.burgundy}>
      <circle cx={470} cy={600} r={300} fill="#FFFFFF" opacity={0.05} />
      <g transform={`translate(${enter} 0) rotate(${turn} 470 600)`}>
        <circle cx={470} cy={470} r={96} fill="none" stroke={colors.orange} strokeWidth={34} />
        <rect x={452} y={556} width={36} height={300} fill={colors.orange} />
        <rect x={452} y={760} width={110} height={32} fill={colors.orange} />
        <rect x={452} y={824} width={78} height={32} fill={colors.orange} />
      </g>
    </Stage>
  );
};

const Handover: React.FC = () => (
  <Stage bg={colors.sand}>
    <circle cx={470} cy={600} r={320} fill={colors.burgundy} opacity={0.08} />
    <path d="M60 820 q140 -130 300 -70 l150 56 q44 16 28 56 q-16 40 -60 24 l-140 -52" fill="#E8C9A8" />
    <path d="M880 500 q-140 -130 -300 -70 l-150 56 q-44 16 -28 56 q16 40 60 24 l140 -52" fill="#D9B08C" />
    <g transform="rotate(-18 470 600)">
      <circle cx={470} cy={520} r={62} fill="none" stroke={colors.orange} strokeWidth={24} />
      <rect x={458} y={578} width={24} height={190} fill={colors.orange} />
      <rect x={458} y={706} width={72} height={22} fill={colors.orange} />
      <rect x={458} y={746} width={52} height={22} fill={colors.orange} />
    </g>
  </Stage>
);

const EndCard: React.FC = () => {
  const frame = useCurrentFrame();
  const build = interpolate(frame, [10, 50], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.215, 0.61, 0.355, 1),
  });
  const line = interpolate(frame, [54, 78], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.bezier(0.215, 0.61, 0.355, 1),
  });
  return (
    <Stage bg={colors.sand}>
      <g opacity={build}>
        <rect x={290} y={430} width={360} height={116} rx={10} fill="none" stroke={colors.burgundy} strokeWidth={4} strokeDasharray="12 10" />
        <text x={470} y={504} textAnchor="middle" fontFamily={brandFont} fontSize={32} fontWeight={500} fill={colors.burgundy}>
          شعار تُدار
        </text>
      </g>
      <g opacity={line}>
        <text x={470} y={640} textAnchor="middle" fontFamily={brandFont} fontSize={44} fontWeight={700} fill={colors.ink}>
          تُدار العقارية
        </text>
        <text x={470} y={716} textAnchor="middle" fontFamily={brandFont} fontSize={32} fontWeight={400} fill={colors.ink} opacity={0.72}>
          Tudar.sa · 0534977299
        </text>
      </g>
    </Stage>
  );
};

export const Card: React.FC<{ readonly kind: string }> = ({ kind }) => {
  switch (kind) {
    case "handshake": return <Handshake />;
    case "palm": return <Palm />;
    case "chat1": return <Chat stage={1} />;
    case "chat2": return <Chat stage={2} />;
    case "chat3": return <Chat stage={3} />;
    case "silence": return <Silence />;
    case "map": return <MapCard />;
    case "gavel": return <Gavel />;
    case "wait": return <Wait />;
    case "split": return <Split />;
    case "contract": return <Contract />;
    case "key": return <KeyCard />;
    case "handover": return <Handover />;
    default: return <EndCard />;
  }
};
