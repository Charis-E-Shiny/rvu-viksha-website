import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop className="bg-video">
        <source src="/bgvideo3.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
