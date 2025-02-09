import React, { useState } from "react";
import "./Plants.css";

const plantImages = [
  "/images/plant1.jpg",
  "/images/plant2.jpg",
  "/images/plant3.jpg",
];

const plantVideos = [
  "/videos/plant1.mp4",
  "/videos/plant2.mp4",
];

const Plants = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, type) => {
    setLightbox({ src, type });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div className="plants-container">
      <h1>Medicinal Plants</h1>
      <p className="plants-description">
        Discover the healing power of nature with our collection of medicinal plants.
      </p>
      <div className="gallery">
        {plantImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Medicinal Plant ${index + 1}`}
            className="gallery-item"
            onClick={() => openLightbox(image, "image")}
          />
        ))}
        {plantVideos.map((video, index) => (
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
            <img src={lightbox.src} alt="Plant Lightbox" className="lightbox-media" />
          ) : (
            <video src={lightbox.src} className="lightbox-media" controls autoPlay />
          )}
          <button className="close-btn" onClick={closeLightbox}>×</button>
        </div>
      )}
    </div>
  );
};

export default Plants;
