import "./FormCard.css";

export default function StepDetails({ data, onChange, onNext }) {
  const isValid = data.fullName.trim() && data.email.trim() && data.education;

  return (
    <div className="form-card">
      <h2 className="form-card__title">Personal Information</h2>
      <p className="form-card__subtitle">Enter the recipient's details below</p>

      <div className="form-grid">
        {/* Full Name */}
        <div className="form-group form-group--full">
          <label className="form-label">Full Name *</label>
          <input
            className="form-input"
            value={data.fullName}
            onChange={e => onChange("fullName", e.target.value)}
            placeholder="e.g. Alexandra Johnson"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="form-label">Email Address *</label>
          <input
            className="form-input"
            type="email"
            value={data.email}
            onChange={e => onChange("email", e.target.value)}
            placeholder="alex@example.com"
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            className="form-input"
            value={data.phone}
            onChange={e => onChange("phone", e.target.value)}
            placeholder="+91 98765 43210"
          />
        </div>

        {/* Education */}
        <div className="form-group">
          <label className="form-label">Education Level *</label>
          <select
            className="form-select"
            value={data.education}
            onChange={e => onChange("education", e.target.value)}
          >
            <option value="">Select Education</option>
            <option>High School</option>
            <option>Diploma</option>
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
            <option>PhD / Doctorate</option>
            <option>Other</option>
          </select>
        </div>

        {/* Institution */}
        <div className="form-group">
          <label className="form-label">Institution / College</label>
          <input
            className="form-input"
            value={data.institution}
            onChange={e => onChange("institution", e.target.value)}
            placeholder="Your institution name"
          />
        </div>
      </div>

      <div className="btn-row">
        <button
          className="btn btn--gold"
          disabled={!isValid}
          onClick={onNext}
        >
          Next Step →
        </button>
      </div>
    </div>
  );
}