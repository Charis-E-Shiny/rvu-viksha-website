import "./HeroSection.css";

function HeroSection() {
  return (
    <div class="hbox">
      <div className="hero-container">
        <h1 className="gradient-heading">
          VIKSHA CODING CLUB
          <br />
          OF RVU
        </h1>
        <p className="subtext">The Official Coding Club Of RV University.</p>
        <div className="hero-buttons">
          <button className="btn join">JOIN US</button>
          <button className="btn explore">Explore Now</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
