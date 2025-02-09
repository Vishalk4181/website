import React, { useState } from "react";
import "./Library.css";

const libraryImages = [
  "/images/library1.jpg",
  "/images/library2.jpg",
  "/images/library3.jpg",
];

const libraryVideos = [
  "/videos/library1.mp4",
  "/videos/library2.mp4",
];

const Library = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src, type) => {
    setLightbox({ src, type });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  return (
    <div className="library-container">
      <h1>Library</h1>
      <p className="library-description">
        Our library offers a vast collection of books, digital resources, and a quiet space for reading and learning.
      </p>
      <div className="gallery">
        {libraryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Library ${index + 1}`}
            className="gallery-item"
            onClick={() => openLightbox(image, "image")}
          />
        ))}
        {libraryVideos.map((video, index) => (
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

export default Library;
