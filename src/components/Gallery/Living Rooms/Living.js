import React, { useState } from "react";
import "./Living.css";

const livingImages = [
  "/images/living1.jpg",
  "/images/living2.jpg",
  "/images/living3.jpg",
];

const livingVideos = [
  "/videos/living1.mp4",
  "/videos/living2.mp4",
];

const Living = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, type) => {
    setLightbox({ src, type });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div className="living-container">
      <h1>Living Spaces</h1>
      <p className="living-description">
        Our living spaces provide comfort, modern amenities, and a peaceful environment for residents.
      </p>
      <div className="gallery">
        {livingImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Living Space ${index + 1}`}
            className="gallery-item"
            onClick={() => openLightbox(image, "image")}
          />
        ))}
        {livingVideos.map((video, index) => (
          <video
            key={index}
            src={video}
            className="gallery-item"
            onClick={() => openLightbox(video, "video")}
            controls
          />
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          {lightbox.type === "image" ? (
            <img src={lightbox.src} alt="Living Lightbox" className="lightbox-media" />
          ) : (
            <video src={lightbox.src} className="lightbox-media" controls autoPlay />
          )}
          <button className="close-btn" onClick={closeLightbox}>×</button>
        </div>
      )}
    </div>
  );
};

export default Living;
