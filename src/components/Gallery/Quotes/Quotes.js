import React, { useState } from "react";
import "./Quotes.css";

const quoteImages = [
  "/images/quote1.jpg",
  "/images/quote2.jpg",
  "/images/quote3.jpg",
];

const quoteVideos = [
  "/videos/quote1.mp4",
  "/videos/quote2.mp4",
];

const Quotes = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, type) => {
    setLightbox({ src, type });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div className="quotes-container">
      <h1>Inspirational Quotes</h1>
      <p className="quotes-description">
        Words have the power to inspire, uplift, and motivate us. Here are some timeless quotes to keep you going.
      </p>

      {/* Gallery */}
      <div className="gallery">
        {quoteImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Quote ${index + 1}`}
            className="gallery-item"
            onClick={() => openLightbox(image, "image")}
          />
        ))}

        {quoteVideos.map((video, index) => (
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
            <img src={lightbox.src} alt="Quote Preview" className="lightbox-media" />
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

export default Quotes;
