import React, { useState } from "react";
import "./Hospital.css";

const hospitalImages = [
  "/images/hospital1.jpg",
  "/images/hospital2.jpg",
  "/images/hospital3.jpg",
];

const hospitalVideos = [
  "/videos/hospital1.mp4",
  "/videos/hospital2.mp4",
];

const Hospital = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, type) => {
    setLightbox({ src, type });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div className="hospital-container">
      <h1>Hospital</h1>
      <p className="hospital-description">
        Our hospital provides top-notch medical care with advanced facilities and expert professionals.
      </p>
      <div className="gallery">
        {hospitalImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hospital ${index + 1}`}
            className="gallery-item"
            onClick={() => openLightbox(image, "image")}
          />
        ))}
        {hospitalVideos.map((video, index) => (
          <video
            key={index}
            src={video}
            className="gallery-item"
            onClick={() => openLightbox(video, "video")}
            muted
          />
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          {lightbox.type === "image" ? (
            <img src={lightbox.src} alt="Enlarged View" className="lightbox-media" />
          ) : (
            <video src={lightbox.src} controls className="lightbox-media" autoPlay />
          )}
          <button className="close-btn" onClick={closeLightbox}>&times;</button>
        </div>
      )}
    </div>
  );
};

export default Hospital;
