import React, { useState, useEffect, useCallback } from "react";
import "./BasketballCourt.css";

const mediaFiles = [
  { type: "image", src: "/images/basketball1.jpg" },
  { type: "image", src: "/images/basketball2.jpg" },
  { type: "image", src: "/images/basketball3.jpg" },
  { type: "video", src: "/videos/basketball1.mp4" },
  { type: "video", src: "/videos/basketball2.mp4" }
];

const BasketballCourt = () => {
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
    <div className="basketball-container">
      <h1>Basketball Court</h1>

      <div className="basketball-description">
        <p>
          Our basketball court is designed for professional and recreational players,
          featuring high-quality flooring, ample lighting, and seating for spectators.
          It serves as a hub for training, tournaments, and community events.
        </p>
      </div>

      <div className="gallery">
        {mediaFiles.map((item, index) => (
          <div key={index} className="gallery-item" onClick={() => openMedia(index)}>
            {item.type === "image" ? (
              <img src={item.src} alt={`Basketball ${index + 1}`} className="gallery-item" />
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

export default BasketballCourt;