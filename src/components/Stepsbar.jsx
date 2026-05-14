import "./StepsBar.css";

const STEPS = ["Details", "Achievement", "Review", "Certificate"];

export default function StepsBar({ current }) {
  return (
    <div className="steps-bar">
      {STEPS.map((label, i) => {
        const isDone   = i < current;
        const isActive = i === current;
        return (
          <div key={label} style={{ display: "contents" }}>
            {i > 0 && (
              <div
                className={`steps-bar__connector ${isDone || isActive ? "steps-bar__connector--active" : ""}`}
              />
            )}
            <div
              className={[
                "steps-bar__item",
                isActive ? "steps-bar__item--active" : "",
                isDone   ? "steps-bar__item--done"   : "",
              ].join(" ")}
            >
              <div
                className={[
                  "steps-bar__circle",
                  isActive ? "steps-bar__circle--active" : "",
                  isDone   ? "steps-bar__circle--done"   : "",
                ].join(" ")}
              >
                {isDone ? "✓" : i + 1}
              </div>
              <span className="steps-bar__label">{label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}