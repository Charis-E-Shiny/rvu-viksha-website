import React, { useRef, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./IntroAnimation.css";

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const playerRef = useRef<Player>(null);

  const handleAnimationComplete = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 1000); // fade-out delay
  };

  return (
    <div className={`intro-section ${fadeOut ? "fade-out" : ""}`}>
      <video autoPlay muted loop className="background-video">
        <source src="./bgvideo3.mp4" type="video/mp4" />
      </video>

      <Player
        src="/Scene-1.json"
        className="lottie-player"
        autoplay
        keepLastFrame
        style={{ height: "30vh", width: "35vw" }}
        onEvent={(e) => {
          if (e === "complete") handleAnimationComplete();
        }}
        ref={playerRef}
      />
    </div>
  );
};

export default IntroAnimation;
