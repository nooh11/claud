// أيقونات خطّية بسماكة ثابتة ونهايات مربّعة وزوايا حادة — الدليل ص 15.
const STROKE = "#FFB900";

export const AreaIcon: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke={STROKE} strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M3 3h18v18H3z" />
    <path d="M3 9h5V3M21 15h-5v6" />
  </svg>
);

export const ModelsIcon: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke={STROKE} strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M3 21V8l6-4v17M9 21V9l7-4v16M16 21V11l5-3v13M2 21h20" />
  </svg>
);

export const RoomsIcon: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke={STROKE} strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter">
    <path d="M2 19v-6h20v6M2 19v2M22 19v2M4 13V7h16v6M7 10h4M13 10h4" />
  </svg>
);
