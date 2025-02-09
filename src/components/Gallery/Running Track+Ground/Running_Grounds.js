import React, { useState } from "react";
import "./Running_Grounds.css";

const runningGroundImages = [
  "/images/running1.jpg",
  "/images/running2.jpg",
  "/images/running3.jpg",
];

const runningGroundVideos = [
  "/videos/running1.mp4",
  "/videos/running2.mp4",
];

const RunningGrounds = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, type) => {
    setLightbox({ src, type });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div className="running-grounds-container">
      <h1>Running Grounds</h1>
      <p className="running-grounds-description">
        Our running grounds provide a perfect space for fitness enthusiasts. Whether you're training for a marathon or a casual jog, our tracks are designed to suit all needs.
      </p>

      {/* Gallery */}
      <div className="gallery">
        {runningGroundImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Running Ground ${index + 1}`}
            className="gallery-item"
            onClick={() => openLightbox(image, "image")}
          />
        ))}

        {runningGroundVideos.map((video, index) => (
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
            <img src={lightbox.src} alt="Running Ground Preview" className="lightbox-media" />
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

export default RunningGrounds;
