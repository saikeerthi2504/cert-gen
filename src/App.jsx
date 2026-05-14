import { useState } from "react";
import "./App.css";

import StepsBar        from "./components/Stepsbar";
import StepDetails     from "./components/Stepdetails";
import StepAchievement from "./components/Stepachievement";
import StepReview      from "./components/Stepreview";
import StepCertificate from "./components/Stepcertificate";

const INITIAL_FORM = {
  fullName:       "",
  email:          "",
  phone:          "",
  education:      "",
  institution:    "",
  course:         "",
  duration:       "",
  completionDate: "",
  grade:          "",
  issuedBy:       "",
  remarks:        "",
};

export default function App() {
  const [step, setForm_step] = useState(0);
  const [form, setForm]      = useState(INITIAL_FORM);

  const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

  const reset = () => {
    setForm(INITIAL_FORM);
    setForm_step(0);
  };

  return (
    <div className="app-wrapper">

      {/* ── Header ── */}
      <header className="app-header">
        <div className="app-header__eyebrow">✦ Excellence Awards Platform ✦</div>
        <h1 className="app-header__title">Certificate Generator</h1>
        <span className="app-header__rule" />
      </header>

      {/* ── Steps bar (hidden on certificate screen) ── */}
      {step < 3 && <StepsBar current={step} />}

      {/* ── Step Screens ── */}
      {step === 0 && (
        <StepDetails
          data={form}
          onChange={update}
          onNext={() => setForm_step(1)}
        />
      )}

      {step === 1 && (
        <StepAchievement
          data={form}
          onChange={update}
          onNext={() => setForm_step(2)}
          onBack={() => setForm_step(0)}
        />
      )}

      {step === 2 && (
        <StepReview
          data={form}
          onBack={() => setForm_step(1)}
          onGenerate={() => setForm_step(3)}
        />
      )}

      {step === 3 && (
        <StepCertificate
          data={form}
          onReset={reset}
        />
      )}

    </div>
  );
}