import React from "react";
import "./CoreTeam.css";

const CoreTeam: React.FC = () => {
  return (
    <section className="core-team-section" id="core-team">
      <h2 className="rainbow-heading">The Core Team</h2>
      <p className="subtitle">Every club is powered by its people—these are ours</p>

      <div className="timeline">
        <span className="end-dot left" aria-hidden />

        <div className="timeline-point top">
          <div className="connector up">
            <div className="circle" />
          </div>
          <span className="year rainbow-text">2025</span>
        </div>

        <div className="timeline-point bottom">
          <div className="connector down">
            <div className="circle" />
          </div>
          <span className="year rainbow-text">2024</span>
        </div>

        <div className="timeline-point top">
          <div className="connector up">
            <div className="circle" />
          </div>
          <span className="year rainbow-text">2023</span>
        </div>

        <div className="timeline-point bottom">
          <div className="connector down">
            <div className="circle" />
          </div>
          <span className="year rainbow-text">2022</span>
        </div>

        <span className="end-dot right" aria-hidden />
      </div>
    </section>
  );
};

export default CoreTeam;
