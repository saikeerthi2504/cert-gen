// CornerOrnament.jsx
export default function CornerOrnament({ accentColor = "#c8a96e" }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main L-shaped border lines */}
      <path d="M6 58 L6 6 L58 6" stroke={accentColor} strokeWidth="2" />

      {/* Diagonal inner accent */}
      <path d="M6 6 L22 22" stroke={accentColor} strokeWidth="1" opacity="0.55" />

      {/* Small inner bracket tick */}
      <path d="M14 6 L6 6 L6 14" stroke={accentColor} strokeWidth="0.8" opacity="0.4" />

      {/* Corner dot — filled circle at apex */}
      <circle cx="6"  cy="6"  r="4"   fill={accentColor} />

      {/* End-cap circles on the two arms */}
      <circle cx="58" cy="6"  r="2.5" fill="none" stroke={accentColor} strokeWidth="1.5" />
      <circle cx="6"  cy="58" r="2.5" fill="none" stroke={accentColor} strokeWidth="1.5" />

      {/* Short tick marks partway along each arm */}
      <line x1="6" y1="20" x2="6" y2="24" stroke={accentColor} strokeWidth="1" opacity="0.35" />
      <line x1="20" y1="6" x2="24" y2="6" stroke={accentColor} strokeWidth="1" opacity="0.35" />
    </svg>
  );
}