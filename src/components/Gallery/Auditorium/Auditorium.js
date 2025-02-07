import React from "react";
import "./Auditorium.css";

const auditoriumImages = [
  { id: 1, src: "images/auditorium/1.jpg", alt: "Auditorium View 1" },
  { id: 2, src: "images/auditorium/2.jpg", alt: "Auditorium View 2" },
  { id: 3, src: "images/auditorium/3.jpg", alt: "Auditorium View 3" },
  { id: 4, src: "images/auditorium/4.jpg", alt: "Stage View" },
  { id: 5, src: "images/auditorium/5.jpg", alt: "Seating Arrangement" },
  { id: 6, src: "images/auditorium/6.jpg", alt: "Lighting Setup" },
];

const Auditorium = () => {
  return (
    <div className="auditorium-container">
      <h1 className="auditorium-title">🎭 Auditorium Gallery</h1>
      <p className="auditorium-description">
        Explore stunning views of our state-of-the-art auditorium, featuring a spacious stage, modern lighting, and comfortable seating arrangements.
      </p>
      
      <div className="auditorium-grid">
        {auditoriumImages.map((image) => (
          <div key={image.id} className="auditorium-item">
            <img src={image.src} alt={image.alt} className="auditorium-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auditorium;