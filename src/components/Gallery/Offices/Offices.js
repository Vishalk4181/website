import React, { useState } from "react";
import "./Offices.css";

const officeImages = [
  "/images/office1.jpg",
  "/images/office2.jpg",
  "/images/office3.jpg",
];

const officeVideos = [
  "/videos/office1.mp4",
  "/videos/office2.mp4",
];

const Offices = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, type) => {
    setLightbox({ src, type });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div className="offices-container">
      <h1>Our Offices</h1>
      <p className="offices-description">
        Our office spaces provide a professional and comfortable environment, ideal for productivity and collaboration. Equipped with modern facilities and ergonomic design.
      </p>

      {/* Gallery */}
      <div className="gallery">
        {officeImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Office ${index + 1}`}
            className="gallery-item"
            onClick={() => openLightbox(image, "image")}
          />
        ))}

        {officeVideos.map((video, index) => (
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
            <img src={lightbox.src} alt="Office Preview" className="lightbox-media" />
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

export default Offices;
