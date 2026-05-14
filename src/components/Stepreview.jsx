import "./FormCard.css";
import "./StepReview.css";

function fmtDate(d) {
  if (!d) return "—";
  return new Date(d + "T00:00:00").toLocaleDateString("en-IN", {
    day: "2-digit", month: "long", year: "numeric",
  });
}

export default function StepReview({ data, onBack, onGenerate }) {
  const rows = [
    ["Full Name",        data.fullName],
    ["Email",            data.email],
    ["Phone",            data.phone         || "—"],
    ["Education",        data.education],
    ["Institution",      data.institution   || "—"],
    ["Course",           data.course],
    ["Duration",         data.duration      || "—"],
    ["Completion Date",  fmtDate(data.completionDate)],
    ["Grade",            data.grade],
    ["Issued By",        data.issuedBy      || "—"],
    ["Remarks",          data.remarks       || "None"],
  ];

  return (
    <div className="form-card">
      <h2 className="form-card__title">Review Your Details</h2>
      <p className="form-card__subtitle">Confirm everything before generating the certificate</p>

      <div className="review-grid">
        {rows.map(([label, value]) => (
          <div className="review-item" key={label}>
            <span className="review-item__label">{label}</span>
            <span className="review-item__value">{value}</span>
          </div>
        ))}
      </div>

      <div className="btn-row">
        <button className="btn btn--ghost" onClick={onBack}>← Edit</button>
        <button className="btn btn--gold" onClick={onGenerate}>
          Generate Certificate ✦
        </button>
      </div>
    </div>
  );
}