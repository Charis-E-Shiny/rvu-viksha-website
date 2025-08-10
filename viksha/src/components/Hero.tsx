
import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero-section container-fluid">
      <div className="hero-inner row align-items-center">
        {/* Left: Text */}
        <div className="col-lg-6 col-md-6 col-12 hero-text-container">
          <h1 className="gradient-text">
            VIKSHA <span>CODING</span> CLUB <span className="gold-text">OF RVU</span>
          </h1>
          <p className="hero-subtitle">
            The Official Coding Club Of RV University.
          </p>
          <div className="hero-buttons">
            <a href="#join" className="btn join-btn">JOIN US</a>
            <a href="#explore" className="btn explore-btn">Explore Now</a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="col-lg-6 col-md-6 col-12 text-center">
          <img src="/Viksha.jpg" alt="Viksha" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
