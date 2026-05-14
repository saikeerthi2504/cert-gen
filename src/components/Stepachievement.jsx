import "./FormCard.css";

const COURSES = [
  "Web Development", "Data Science", "Machine Learning", "Cybersecurity",
  "Cloud Computing", "UI/UX Design", "Digital Marketing", "Project Management",
  "Python Programming", "Java Development", "Mobile App Development", "DevOps",
];

const GRADES = [
  "A+ (Distinction)", "A (Excellent)", "B+ (Very Good)",
  "B (Good)", "C (Satisfactory)", "Pass",
];

export default function StepAchievement({ data, onChange, onNext, onBack }) {
  const isValid = data.course && data.completionDate && data.grade;

  return (
    <div className="form-card">
      <h2 className="form-card__title">Course & Achievement</h2>
      <p className="form-card__subtitle">Specify course details and performance</p>

      <div className="form-grid">
        {/* Course */}
        <div className="form-group form-group--full">
          <label className="form-label">Course / Program *</label>
          <select
            className="form-select"
            value={data.course}
            onChange={e => onChange("course", e.target.value)}
          >
            <option value="">Select a Course</option>
            {COURSES.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        {/* Duration */}
        <div className="form-group">
          <label className="form-label">Duration</label>
          <input
            className="form-input"
            value={data.duration}
            onChange={e => onChange("duration", e.target.value)}
            placeholder="e.g. 6 Months"
          />
        </div>

        {/* Completion Date */}
        <div className="form-group">
          <label className="form-label">Completion Date *</label>
          <input
            className="form-input"
            type="date"
            value={data.completionDate}
            onChange={e => onChange("completionDate", e.target.value)}
          />
        </div>

        {/* Grade */}
        <div className="form-group">
          <label className="form-label">Grade / Score *</label>
          <select
            className="form-select"
            value={data.grade}
            onChange={e => onChange("grade", e.target.value)}
          >
            <option value="">Select Grade</option>
            {GRADES.map(g => <option key={g}>{g}</option>)}
          </select>
        </div>

        {/* Issued By */}
        <div className="form-group">
          <label className="form-label">Issued By</label>
          <input
            className="form-input"
            value={data.issuedBy}
            onChange={e => onChange("issuedBy", e.target.value)}
            placeholder="e.g. TechAcademy Institute"
          />
        </div>

        {/* Remarks */}
        <div className="form-group form-group--full">
          <label className="form-label">Special Remarks (optional)</label>
          <textarea
            className="form-textarea"
            value={data.remarks}
            onChange={e => onChange("remarks", e.target.value)}
            placeholder="Any additional achievements or notes..."
          />
        </div>
      </div>

      <div className="btn-row">
        <button className="btn btn--ghost" onClick={onBack}>← Back</button>
        <button className="btn btn--gold" disabled={!isValid} onClick={onNext}>
          Review →
        </button>
      </div>
    </div>
  );
}