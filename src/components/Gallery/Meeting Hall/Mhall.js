import React, { useState } from "react";
import "./Mhall.css";

const mhallImages = [
  "/images/mhall1.jpg",
  "/images/mhall2.jpg",
  "/images/mhall3.jpg",
];

const mhallVideos = [
  "/videos/mhall1.mp4",
  "/videos/mhall2.mp4",
];

const Mhall = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, type) => {
    setLightbox({ src, type });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div className="mhall-container">
      <h1>Meeting Halls</h1>
      <p className="mhall-description">
        Our meeting halls provide a professional and comfortable environment for business conferences, seminars, and group discussions. Equipped with modern facilities, these halls are perfect for all your meeting needs.
      </p>

      {/* Gallery */}
      <div className="gallery">
        {mhallImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Meeting Hall ${index + 1}`}
            className="gallery-item"
            onClick={() => openLightbox(image, "image")}
          />
        ))}

        {mhallVideos.map((video, index) => (
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
            <img src={lightbox.src} alt="Meeting Hall Preview" className="lightbox-media" />
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

export default Mhall;
