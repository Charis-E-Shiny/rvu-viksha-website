import React, { useEffect, useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./App.css";

function App() {
  const [showMain, setShowMain] = useState(false);
  const [fadeOutAnimation, setFadeOutAnimation] = useState(false);
  const playerRef = useRef(null);

  const handleAnimationComplete = () => {
    // Start fading out the animation
    setFadeOutAnimation(true);
    setTimeout(() => {
      setShowMain(true);
    }, 1000); // Wait for fade-out to finish
  };

  return (
    <div className="App">
      {!showMain && (
        <div className={`intro-section ${fadeOutAnimation ? "fade-out" : ""}`}>
          <video autoPlay muted loop className="background-video">
            <source src="./bgvideo3.mp4" type="video/mp4" />
          </video>

          <Player
            src="/Scene-1.json"
            className="lottie-player"
            autoplay
            keepLastFrame
            style={{ height: "30vh", width: "30vw" }}
            onEvent={(e) => {
              if (e === "complete") handleAnimationComplete();
            }}
            ref={playerRef}
          />
        </div>
      )}

      {showMain && (
        <div className="main-content fade-in">
          <h1>Welcome to the Viksha</h1>
          <p>Content...</p>
          {/* Add your navbar and other content here */}

        


        </div>
      )}
    </div>
  );
}
export default App;























