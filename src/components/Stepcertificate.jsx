import { useState } from "react";
import CertificateDoc from "./CertificateDoc";
import "./FormCard.css";
import "./Certificate.css";

const THEMES = [
  { id: "gold",   label: "Gold",   color: "#c8a96e" },
  { id: "royal",  label: "Royal",  color: "#7c3aed" },
  { id: "navy",   label: "Navy",   color: "#1e40af" },
  { id: "forest", label: "Forest", color: "#166534" },
];

export default function StepCertificate({ data, onReset }) {
  const [theme, setTheme] = useState("gold");

  return (
    <div className="cert-preview-wrapper">
      {/* Heading */}
      <div className="cert-preview-wrapper__heading">
        <div className="cert-preview-wrapper__title">Your Certificate is Ready ✦</div>
        <div className="cert-preview-wrapper__sub">Choose a theme, then print or save as PDF</div>
      </div>

      {/* Theme picker */}
      <div className="theme-selector">
        {THEMES.map(t => (
          <button
            key={t.id}
            className={`theme-btn ${theme === t.id ? "theme-btn--active" : ""}`}
            style={{
              color:       t.color,
              borderColor: theme === t.id ? t.color : undefined,
            }}
            onClick={() => setTheme(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Certificate */}
      <CertificateDoc data={data} theme={theme} />

      {/* Actions */}
      <div className="cert-actions">
        <button className="btn btn--ghost" onClick={onReset}>← New Certificate</button>
        <button className="btn btn--gold"  onClick={() => window.print()}>
          🖨 Print / Save as PDF
        </button>
      </div>
    </div>
  );
}