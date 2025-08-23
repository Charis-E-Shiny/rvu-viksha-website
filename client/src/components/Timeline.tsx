import React from "react";
import "./Timeline.css";
import { useLocation } from "wouter";

const CoreTeam: React.FC = () => {
  const [_, navigate] = useLocation();

  // Redirect with year as query param
  const handleRedirect = (year: number) => {
    navigate(`/team?year=${year}`);
  };

  return (
    <section className="core-team-section" id="core-team">
      <h2 className="rainbow-heading">The Core Team</h2>
      <p className="subtitle">
        Every club is powered by its people—these are ours
      </p>
      <div className="timeline">
        <span className="end-dot left" aria-hidden />

        {/* 2022 */}
        <div className="timeline-point top">
          <div className="connector up">
            <div className="circle" />
          </div>
          <span
            className="year rainbow-text clickable"
            onClick={() => handleRedirect(2022)}
          >
            2022
          </span>
        </div>

        {/* 2023 */}
        <div className="timeline-point bottom">
          <div className="connector down">
            <div className="circle" />
          </div>
          <span
            className="year rainbow-text clickable"
            onClick={() => handleRedirect(2023)}
          >
            2023
          </span>
        </div>

        {/* 2024 */}
        <div className="timeline-point top">
          <div className="connector up">
            <div className="circle" />
          </div>
          <span
            className="year rainbow-text clickable"
            onClick={() => handleRedirect(2024)}
          >
            2024
          </span>
        </div>

        {/* 2025 */}
        <div className="timeline-point bottom">
          <div className="connector down">
            <div className="circle" />
          </div>
          <span
            className="year rainbow-text clickable"
            onClick={() => handleRedirect(2025)}
          >
            2025
          </span>
        </div>

        <span className="end-dot right" aria-hidden />
      </div>
    </section>
  );
};

export default CoreTeam;
