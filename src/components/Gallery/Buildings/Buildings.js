import React, { useState, useEffect, useCallback } from "react";
import "./Buildings.css";

const mediaFiles = [
  { type: "image", src: "/images/building1.jpg" },
  { type: "image", src: "/images/building2.jpg" },
  { type: "image", src: "/images/building3.jpg" },
  { type: "video", src: "/videos/building1.mp4" },
  { type: "video", src: "/videos/building2.mp4" }
];

const Buildings = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openMedia = (index) => {
    setCurrentIndex(index);
  };

  const closeMedia = () => {
    setCurrentIndex(null);
  };

  const nextMedia = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaFiles.length);
  }, []);

  const prevMedia = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaFiles.length) % mediaFiles.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (currentIndex !== null) {
        if (event.key === "ArrowRight") nextMedia();
        else if (event.key === "ArrowLeft") prevMedia();
        else if (event.key === "Escape") closeMedia();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, nextMedia, prevMedia]);

  let touchStartX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    let touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) nextMedia();
    else if (touchEndX - touchStartX > 50) prevMedia();
  };

  return (
    <div className="buildings-container">
      <h1>Buildings</h1>

      <div className="buildings-description">
        <p>
          Our buildings are designed with modern architecture and sustainability in mind. Featuring state-of-the-art facilities, spacious interiors, and energy-efficient designs, they provide an optimal environment for various activities.
        </p>
      </div>

      <div className="gallery">
        {mediaFiles.map((item, index) => (
          <div key={index} className="gallery-item" onClick={() => openMedia(index)}>
            {item.type === "image" ? (
              <img src={item.src} alt={`Building ${index + 1}`} className="gallery-item" />
            ) : (
              <video src={item.src} className="gallery-item" />
            )}
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className="lightbox" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <span className="close-btn" onClick={closeMedia}>&times;</span>
          {mediaFiles[currentIndex].type === "video" ? (
            <video src={mediaFiles[currentIndex].src} controls autoPlay className="lightbox-media" />
          ) : (
            <img src={mediaFiles[currentIndex].src} alt="Full View" className="lightbox-media" />
          )}
          <button className="lightbox-btn prev-btn" onClick={prevMedia}>&#10094;</button>
          <button className="lightbox-btn next-btn" onClick={nextMedia}>&#10095;</button>
        </div>
      )}
    </div>
  );
};

export default Buildings;