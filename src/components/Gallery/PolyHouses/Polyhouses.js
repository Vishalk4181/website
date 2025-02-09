import React, { useState } from "react";
import "./Polyhouses.css";

const polyhouseImages = [
  "/images/polyhouse1.jpg",
  "/images/polyhouse2.jpg",
  "/images/polyhouse3.jpg",
];

const polyhouseVideos = [
  "/videos/polyhouse1.mp4",
  "/videos/polyhouse2.mp4",
];

const Polyhouses = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, type) => {
    setLightbox({ src, type });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div className="polyhouses-container">
      <h1>Polyhouses</h1>
      <p className="polyhouses-description">
        Polyhouses provide a controlled environment for growing crops, protecting them from extreme weather and pests, ensuring better yield and quality.
      </p>

      {/* Gallery */}
      <div className="gallery">
        {polyhouseImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Polyhouse ${index + 1}`}
            className="gallery-item"
            onClick={() => openLightbox(image, "image")}
          />
        ))}

        {polyhouseVideos.map((video, index) => (
          <video
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(video, "video")}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          {lightbox.type === "image" ? (
            <img src={lightbox.src} alt="Polyhouse Preview" className="lightbox-media" />
          ) : (
            <video controls className="lightbox-media">
              <source src={lightbox.src} type="video/mp4" />
            </video>
          )}
          <span className="close-btn" onClick={closeLightbox}>&times;</span>
        </div>
      )}
    </div>
  );
};

export default Polyhouses;
