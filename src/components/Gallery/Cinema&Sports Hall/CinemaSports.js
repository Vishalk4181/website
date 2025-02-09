import React, { useState } from "react";
import "./CinemaSports.css";

const CinemaSports = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, src: "" });

  const galleryItems = [
    { type: "image", src: "/images/cinema1.jpg" },
    { type: "image", src: "/images/cinema2.jpg" },
    { type: "video", src: "/videos/sports1.mp4" },
    { type: "image", src: "/images/sports1.jpg" },
    { type: "video", src: "/videos/cinema2.mp4" },
  ];

  const openLightbox = (src) => {
    setLightbox({ isOpen: true, src });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: "" });
  };

  return (
    <div className="cinemasports-container">
      <h1>Cinema & Sports</h1>
      <p className="cinemasports-description">
        Explore our state-of-the-art cinema and sports facilities, featuring
        high-quality entertainment and training arenas.
      </p>
      <div className="gallery">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item" onClick={() => openLightbox(item.src)}>
            {item.type === "image" ? (
              <img src={item.src} alt="Gallery" className="gallery-media" />
            ) : (
              <video src={item.src} className="gallery-media" />
            )}
          </div>
        ))}
      </div>

      {lightbox.isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          {lightbox.src.includes(".mp4") ? (
            <video src={lightbox.src} controls autoPlay className="lightbox-media" />
          ) : (
            <img src={lightbox.src} alt="Fullscreen" className="lightbox-media" />
          )}
          <span className="close-btn" onClick={closeLightbox}>&times;</span>
        </div>
      )}
    </div>
  );
};

export default CinemaSports;