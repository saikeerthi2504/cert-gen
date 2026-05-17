import "./Certificate.css";

/* ── helpers ─────────────────────────────────────────────────────────────── */
function fmtDate(d) {
  if (!d) return "";
  return new Date(d + "T00:00:00").toLocaleDateString("en-IN", {
    day: "2-digit", month: "long", year: "numeric",
  });
}

function makeCertId() {
  const alpha = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const rand4 = () =>
    Array.from({ length: 4 }, () => alpha[Math.floor(Math.random() * alpha.length)]).join("");
  const num4 = () => String(Math.floor(1000 + Math.random() * 9000));
  return `${rand4()}-${num4()}-${rand4()}`;
}

const ACCENT_MAP = {
  gold:   "#b8963e",
  royal:  "#6d28d9",
  navy:   "#1e3a8a",
  forest: "#14532d",
};

/* ── Corner ornament ─────────────────────────────────────────────────────── */
function Corner({ color }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 58 L6 6 L58 6" stroke={color} strokeWidth="2" />
      <path d="M6 6 L22 22"       stroke={color} strokeWidth="1"   opacity="0.55" />
      <path d="M14 6 L6 6 L6 14" stroke={color} strokeWidth="0.8" opacity="0.4" />
      <circle cx="6"  cy="6"  r="4"   fill={color} />
      <circle cx="58" cy="6"  r="2.5" fill="none" stroke={color} strokeWidth="1.5" />
      <circle cx="6"  cy="58" r="2.5" fill="none" stroke={color} strokeWidth="1.5" />
      <line x1="6" y1="20" x2="6" y2="24" stroke={color} strokeWidth="1" opacity="0.35" />
      <line x1="20" y1="6" x2="24" y2="6" stroke={color} strokeWidth="1" opacity="0.35" />
    </svg>
  );
}

/* ── Official Seal ───────────────────────────────────────────────────────── */
function OfficialSeal({ color, org }) {
  const label = org.length > 20 ? org.slice(0, 20) + "…" : org;
  const rays  = Array.from({ length: 16 });

  return (
    <svg className="cert-seal-svg" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path id="sealTopArc"    d="M 16,80 A 64,64 0 0,1 144,80" />
        <path id="sealBottomArc" d="M 22,90 A 62,62 0 0,0 138,90" />
      </defs>

      {/* Ray burst behind everything */}
      {rays.map((_, i) => {
        const angle = (i * (360 / rays.length) * Math.PI) / 180;
        const x1 = 80 + 42 * Math.cos(angle);
        const y1 = 80 + 42 * Math.sin(angle);
        const x2 = 80 + 68 * Math.cos(angle);
        const y2 = 80 + 68 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1" opacity="0.3" />;
      })}

      {/* Outer decorative ring */}
      <circle cx="80" cy="80" r="75" fill="none" stroke={color} strokeWidth="1.5" />
      {/* Dashed ring */}
      <circle cx="80" cy="80" r="68" fill="none" stroke={color} strokeWidth="0.7"
              strokeDasharray="3 5" />
      {/* Main ring */}
      <circle cx="80" cy="80" r="60" fill="none" stroke={color} strokeWidth="2" />
      {/* Fill */}
      <circle cx="80" cy="80" r="59" fill={color} fillOpacity="0.05" />

      {/* Diamond ticks at cardinal points */}
      {[0, 90, 180, 270].map((deg) => {
        const r  = (deg * Math.PI) / 180;
        const cx = 80 + 75 * Math.cos(r);
        const cy = 80 + 75 * Math.sin(r);
        return (
          <rect key={deg} x={cx - 4} y={cy - 4} width="8" height="8"
                fill={color} transform={`rotate(45 ${cx} ${cy})`} />
        );
      })}

      {/* Shield */}
      <path d="M80 42 L98 52 L98 70 Q98 84 80 92 Q62 84 62 70 L62 52 Z"
            fill="none" stroke={color} strokeWidth="2" />
      <path d="M80 48 L93 56 L93 70 Q93 80 80 87 Q67 80 67 70 L67 56 Z"
            fill={color} fillOpacity="0.10" />

      {/* Laurel sprigs inside shield */}
      {/* left sprig */}
      <path d="M72 68 Q69 62 71 57" stroke={color} strokeWidth="1.2" fill="none" opacity="0.7" />
      <ellipse cx="70" cy="60" rx="4" ry="2.5" fill={color} fillOpacity="0.4"
               transform="rotate(-30 70 60)" />
      <ellipse cx="71" cy="65" rx="4" ry="2.5" fill={color} fillOpacity="0.4"
               transform="rotate(-15 71 65)" />
      {/* right sprig */}
      <path d="M88 68 Q91 62 89 57" stroke={color} strokeWidth="1.2" fill="none" opacity="0.7" />
      <ellipse cx="90" cy="60" rx="4" ry="2.5" fill={color} fillOpacity="0.4"
               transform="rotate(30 90 60)" />
      <ellipse cx="89" cy="65" rx="4" ry="2.5" fill={color} fillOpacity="0.4"
               transform="rotate(15 89 65)" />

      {/* Star / check in shield centre */}
      <polyline points="73,71 77,76 87,63"
                stroke={color} strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Arc text — top */}
      <text fontSize="10" fill={color} fontFamily="Cinzel,serif"
            letterSpacing="2.5" fontWeight="700">
        <textPath href="#sealTopArc" startOffset="50%" textAnchor="middle">
          {label.toUpperCase()}
        </textPath>
      </text>

      {/* Arc text — bottom */}
      <text fontSize="8.5" fill={color} fontFamily="Lato,sans-serif"
            letterSpacing="2" opacity="0.8">
        <textPath href="#sealBottomArc" startOffset="50%" textAnchor="middle">
          OFFICIAL CERTIFICATION
        </textPath>
      </text>

      {/* Year in centre bottom of seal */}
      <text x="80" y="108" textAnchor="middle"
            fontSize="9" fill={color} fontFamily="Cinzel,serif"
            letterSpacing="1" opacity="0.6">
        {new Date().getFullYear()}
      </text>
    </svg>
  );
}

/* ── Signature block ─────────────────────────────────────────────────────── */
function Signature({ name, role }) {
  return (
    <div className="cert-sig">
      {/* Simulated cursive signature using italic serif */}
      <div className="cert-sig__cursive">{name}</div>
      <div className="cert-sig__rule" />
      <div className="cert-sig__printed">{name}</div>
      <div className="cert-sig__role">{role}</div>
    </div>
  );
}

/* ── Main Certificate ────────────────────────────────────────────────────── */
export default function CertificateDoc({ data, theme = "gold" }) {
  const org    = data.issuedBy || "Excellence Academy";
  const id     = makeCertId();
  const accent = ACCENT_MAP[theme] || ACCENT_MAP.gold;
  const date   = fmtDate(data.completionDate);
  const gradeCore = data.grade.replace(/\(.*\)/, "").trim();

  return (
    <div className={`certificate certificate--${theme}`} id="certificate-doc">

      {/* ── Decorative frame lines ── */}
      <div className="cert-frame cert-frame--outer" />
      <div className="cert-frame cert-frame--mid"   />
      <div className="cert-frame cert-frame--inner" />

      {/* ── Corner ornaments ── */}
      {["tl", "tr", "bl", "br"].map(pos => (
        <div key={pos} className={`cert-corner cert-corner--${pos}`}>
          <Corner color={accent} />
        </div>
      ))}

      {/* ── Watermark ── */}
      <div className="cert-watermark" aria-hidden="true">CERTIFIED</div>

      {/* ══════════════════════════════════════════════════════════════════
          CONTENT BODY
      ══════════════════════════════════════════════════════════════════ */}
      <div className="cert-content">

        {/* 1 ── Organisation header */}
        <div className="cert-org-header">
          <div className="cert-org-header__emblem" style={{ borderColor: accent }}>
            <svg viewBox="0 0 48 48" fill="none" width="30" height="30">
              <polygon
                points="24,4 29,17 44,17 32,26 37,39 24,30 11,39 16,26 4,17 19,17"
                fill={accent} fillOpacity="0.18"
                stroke={accent} strokeWidth="1.5" strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="cert-org-header__centre">
            <div className="cert-org-header__name">{org.toUpperCase()}</div>
            <div className="cert-org-header__tagline">
              Committed to Excellence in Education &amp; Professional Development
            </div>
          </div>
          <div className="cert-org-header__emblem" style={{ borderColor: accent }}>
            <svg viewBox="0 0 48 48" fill="none" width="30" height="30">
              <polygon
                points="24,4 29,17 44,17 32,26 37,39 24,30 11,39 16,26 4,17 19,17"
                fill={accent} fillOpacity="0.18"
                stroke={accent} strokeWidth="1.5" strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* ── Ornate rule ── */}
        <div className="cert-rule">
          <div className="cert-rule__line" />
          <svg width="28" height="14" viewBox="0 0 28 14">
            <polygon points="14,0 28,7 14,14 0,7" fill={accent} />
          </svg>
          <div className="cert-rule__line" />
        </div>

        {/* 2 ── Certificate title */}
        <div className="cert-title-area">
          <div className="cert-title-area__pre">This is to Certify that</div>
          <div className="cert-title-area__main">Certificate of Completion</div>
          <div className="cert-title-area__award">
            <span className="cert-deco" style={{ color: accent }}>◆</span>
            &ensp;Awarded with <em>{gradeCore}</em>&ensp;
            <span className="cert-deco" style={{ color: accent }}>◆</span>
          </div>
        </div>

        {/* 3 ── Recipient */}
        <div className="cert-recipient">
          <div className="cert-recipient__intro">has been duly conferred upon</div>
          <div className="cert-recipient__name">{data.fullName}</div>
          {(data.institution || data.education) && (
            <div className="cert-recipient__meta">
              {[data.institution, data.education].filter(Boolean).join(" · ")}
            </div>
          )}
        </div>

        {/* ── Small ornate rule ── */}
        <div className="cert-rule cert-rule--sm">
          <div className="cert-rule__line" />
          <div className="cert-rule__dot" style={{ background: accent }} />
          <div className="cert-rule__line" />
        </div>

        {/* 4 ── Formal achievement paragraph */}
        <div className="cert-para-block">
          <p className="cert-para">
            In recognition of the successful and meritorious completion of the{" "}
            <strong>{data.course}</strong> Programme
            {data.duration && (
              <>, conducted over a period of <strong>{data.duration}</strong></>
            )}
            , the candidate has demonstrated outstanding academic rigour, dedication,
            and professional conduct throughout the duration of the programme.
            A final assessment grade of <strong>{data.grade}</strong> has been awarded
            in acknowledgement of the candidate's exemplary performance.
          </p>

          {data.remarks && (
            <p className="cert-para cert-para--commend">
              <span style={{ color: accent, fontWeight: 700 }}>Special Commendation —</span>{" "}
              <em>"{data.remarks}"</em>
            </p>
          )}
        </div>

        {/* 5 ── Footer: sigs + seal */}
        <div className="cert-footer">

          <Signature name={org}  role="Director of Certification" />

          <div className="cert-seal-area">
            <OfficialSeal color={accent} org={org} />
          </div>

          <Signature name={date} role="Date of Completion" />

        </div>

        {/* 6 ── Meta strip */}
        <div className="cert-meta">
          <span>Certificate ID: <strong>{id}</strong></span>
          <span className="cert-meta__sep">|</span>
          <span>Issued by: <strong>{org}</strong></span>
          <span className="cert-meta__sep">|</span>
          <span>Date: <strong>{date}</strong></span>
        </div>

      </div>{/* /cert-content */}
    </div>
  );
}