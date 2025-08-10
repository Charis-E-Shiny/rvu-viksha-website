import React, { useState, useEffect } from "react";
import "./VikshaStory.css";

const VikshaStory: React.FC = () => {
  // Image list (replace these paths with your images from public folder or src/assets)
  const images = [
    "i1.png",
    "i2.png",
    "i3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="viksha-story-section">
      <div className="story-container">
        {/* Image Box */}
        <div className="story-image-box">
          <img
            src={images[currentIndex]}
            alt={`Story Slide ${currentIndex + 1}`}
            className="story-image"
          />
        </div>

        {/* Text Content */}
        <div className="story-content">
          <h2 className="story-title">
            The <span>Viksha</span> <span>Story</span>
          </h2>
          <p className="story-text">
            Viksha is the official coding and innovation club at RV University,
            fostering tech, creativity, and peer learning for all branches.
            Explore the events and memories that define our community.
          </p>
          <a href="#more" className="rainbow-btn">
            Know More
          </a>
        </div>
      </div>
    </section>
  );
};

export default VikshaStory;
