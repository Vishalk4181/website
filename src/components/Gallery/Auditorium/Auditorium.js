import React, { useState, useEffect, useCallback } from "react";
import "./Auditorium.css";

const mediaFiles = [
  { type: "image", src: "/images/auditorium1.jpg" },
  { type: "image", src: "/images/auditorium2.jpg" },
  { type: "image", src: "/images/auditorium3.jpg" },
  { type: "video", src: "/videos/auditorium1.mp4" },
  { type: "video", src: "/videos/auditorium2.mp4" }
];

const Auditorium = () => {
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
    <div className="auditorium-container">
      <h1>Auditorium</h1>

      <div className="auditorium-description">
        <p>
          Our auditorium is equipped with modern facilities to host cultural, educational,
          and social events. With high-quality audio-visual equipment, comfortable seating,
          and a spacious stage, it provides an excellent venue for a variety of occasions.
        </p>
      </div>

      <div className="gallery">
        {mediaFiles.map((item, index) => (
          <div key={index} className="gallery-item" onClick={() => openMedia(index)}>
            {item.type === "image" ? (
              <img src={item.src} alt={`Auditorium ${index + 1}`} className="gallery-item" />
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

export default Auditorium;