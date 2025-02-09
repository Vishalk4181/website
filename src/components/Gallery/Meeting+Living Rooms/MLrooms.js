import React, { useState } from "react";
import "./MLrooms.css";

const mlroomImages = [
  "/images/mlroom1.jpg",
  "/images/mlroom2.jpg",
  "/images/mlroom3.jpg",
];

const mlroomVideos = [
  "/videos/mlroom1.mp4",
  "/videos/mlroom2.mp4",
];

const MLrooms = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, type) => {
    setLightbox({ src, type });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div className="mlrooms-container">
      <h1>Meeting cum Living Rooms</h1>
      <p className="mlrooms-description">
        Our Meeting cum Living Rooms offer a comfortable and functional space for both business and leisure. Ideal for professionals who need a space to work, collaborate, and relax.
      </p>

      {/* Gallery */}
      <div className="gallery">
        {mlroomImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`ML Room ${index + 1}`}
            className="gallery-item"
            onClick={() => openLightbox(image, "image")}
          />
        ))}

        {mlroomVideos.map((video, index) => (
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
            <img src={lightbox.src} alt="ML Room Preview" className="lightbox-media" />
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

export default MLrooms;
