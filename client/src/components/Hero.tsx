"use client";

import { useEffect, useState } from "react";
import CodingInterviewPractice from "./CodingInterviewPractice";
import NewsFeed from "./NewsFeed";

export default function Hero() {
  const texts = [
    "Empowering coders to build the future_",
    "Where collaboration meets innovation_",
    "Turning ideas into impactful projects_",
  ];

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < texts[index].length) {
        setCurrentText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentText("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % texts.length);
        }, 2000); // pause before next text
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex, index, texts]);

  return (
    <section
  id="home"
  className="
    flex flex-col items-center justify-center 
    text-center 
    min-h-screen 
    relative z-10 
    px-4 sm:px-6 md:px-10
    pt-24 sm:pt-28
    lg:pt-5
  "
>
      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-cyan-400 mb-4 sm:mb-6 max-w-[90%]">
        VIKSHA CODING CLUB
      </h1>

      {/* Typing Effect */}
      <p className="text-cyan-300 text-base sm:text-lg md:text-xl font-mono max-w-[95%]">
        {currentText}
        <span className="animate-pulse">|</span>
      </p>

      {/* Widgets Section */}
      <div
        className="
          flex flex-col lg:flex-row 
          gap-6 sm:gap-8 
          justify-center items-center lg:items-start 
          mt-8 sm:mt-12 
          w-full max-w-[1200px]
        "
      >
        <CodingInterviewPractice />
        <NewsFeed />
      </div>
    </section>
  );
}
