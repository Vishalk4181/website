import React, { useState } from "react";
import "./Tissuelabs.css";

const tissueLabImages = [
  "/images/tissuelab1.jpg",
  "/images/tissuelab2.jpg",
  "/images/tissuelab3.jpg",
];

const tissueLabVideos = [
  "/videos/tissuelab1.mp4",
  "/videos/tissuelab2.mp4",
];

const TissueLabs = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, type) => {
    setLightbox({ src, type });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div className="tissue-labs-container">
      <h1>Tissue Labs</h1>
      <p className="tissue-labs-description">
        Our advanced Tissue Labs are equipped with state-of-the-art technology to support research and development in regenerative medicine.
      </p>

      {/* Gallery */}
      <div className="gallery">
        {tissueLabImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Tissue Lab ${index + 1}`}
            className="gallery-item"
            onClick={() => openLightbox(image, "image")}
          />
        ))}

        {tissueLabVideos.map((video, index) => (
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
            <img src={lightbox.src} alt="Tissue Lab Preview" className="lightbox-media" />
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

export default TissueLabs;