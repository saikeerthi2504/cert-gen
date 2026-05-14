/** Decorative corner SVG used on the certificate. */
export default function CornerOrnament({ accentColor = "#c8a96e" }) {
  return (
    <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 48 L4 4 L48 4"  stroke={accentColor} strokeWidth="1.6" />
      <path d="M4 4 L18 18"        stroke={accentColor} strokeWidth="1"   />
      <circle cx="4"  cy="4"  r="3.5" fill={accentColor} />
      <circle cx="48" cy="4"  r="2"   fill="none" stroke={accentColor} strokeWidth="1" />
      <circle cx="4"  cy="48" r="2"   fill="none" stroke={accentColor} strokeWidth="1" />
      <path d="M10 4 L4 4 L4 10" stroke={accentColor} strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}