import React from "react";
import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import VikshaStory from "./components/VikshaStory";
import CoreTeam from "./components/CoreTeam";
import Team from "./components/Team";
import ContactUs from "./components/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Events from "./components/Events";

const App: React.FC = () => {
  return (
    <>
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/public/bg4.mp4" type="video/mp4" />
      </video>
      <div className="page-content">
        <CustomNavbar />
        <Hero />
        <br/>
        <br/>
        <br/>
        <VikshaStory />
        <CoreTeam />
        <Team />
        <Events />
        <br />
        <br />
        <ContactUs />
      </div>
    </>
  );
};

export default App;
