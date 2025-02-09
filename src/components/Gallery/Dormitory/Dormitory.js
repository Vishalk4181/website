import React, { useState } from 'react';
import './Dormitory.css';

const Dormitory = () => {
    const [lightbox, setLightbox] = useState(null);
    const images = [
        '/images/dormitory1.jpg',
        '/images/dormitory2.jpg',
        '/images/dormitory3.jpg',
        '/images/dormitory4.jpg',
    ];

    const openLightbox = (index) => {
        setLightbox(index);
    };

    const closeLightbox = () => {
        setLightbox(null);
    };

    const nextImage = () => {
        setLightbox((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setLightbox((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="dormitory-container">
            <h1>Dormitory</h1>
            <p className="dormitory-description">
                Our dormitory offers a comfortable and secure living space with modern facilities, ensuring a peaceful environment for residents.
            </p>
            <div className="gallery">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Dormitory ${index + 1}`}
                        className="gallery-item"
                        onClick={() => openLightbox(index)}
                    />
                ))}
            </div>
            {lightbox !== null && (
                <div className="lightbox">
                    <button className="lightbox-btn prev-btn" onClick={prevImage}>&#10094;</button>
                    <img src={images[lightbox]} alt="Enlarged view" className="lightbox-media" />
                    <button className="lightbox-btn next-btn" onClick={nextImage}>&#10095;</button>
                    <span className="close-btn" onClick={closeLightbox}>&times;</span>
                </div>
            )}
        </div>
    );
};

export default Dormitory;
