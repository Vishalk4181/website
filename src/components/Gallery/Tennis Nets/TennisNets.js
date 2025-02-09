import React, { useState } from "react";
import "./TennisNets.css";

const tennisNetImages = [
  "/images/tennis1.jpg",
  "/images/tennis2.jpg",
  "/images/tennis3.jpg",
];

const tennisNetVideos = [
  "/videos/tennis1.mp4",
  "/videos/tennis2.mp4",
];

const TennisNets = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, type) => {
    setLightbox({ src, type });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div className="tennis-nets-container">
      <h1>Tennis Nets</h1>
      <p className="tennis-nets-description">
        Our high-quality tennis courts are equipped with professional-grade nets, ensuring a great playing experience for all levels.
      </p>

      {/* Gallery */}
      <div className="gallery">
        {tennisNetImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Tennis Net ${index + 1}`}
            className="gallery-item"
            onClick={() => openLightbox(image, "image")}
          />
        ))}

        {tennisNetVideos.map((video, index) => (
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
            <img src={lightbox.src} alt="Tennis Net Preview" className="lightbox-media" />
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

export default TennisNets;
