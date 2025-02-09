import React, { useState } from 'react';
import './Farming.css';

const Farming = () => {
    const [lightbox, setLightbox] = useState(null);
    const mediaItems = [
        '/images/farming1.jpg',
        '/images/farming2.jpg',
        '/images/farming3.jpg',
        '/videos/farming1.mp4',
        '/videos/farming2.mp4'
    ];

    const openLightbox = (index) => {
        setLightbox(index);
    };

    const closeLightbox = () => {
        setLightbox(null);
    };

    const navigateLightbox = (direction) => {
        if (lightbox !== null) {
            let newIndex = lightbox + direction;
            if (newIndex < 0) newIndex = mediaItems.length - 1;
            if (newIndex >= mediaItems.length) newIndex = 0;
            setLightbox(newIndex);
        }
    };

    return (
        <div className="farming-container">
            <h1>Farming</h1>
            <div className="farming-description">
                <p>Discover our sustainable farming techniques, organic crops, and eco-friendly agricultural practices.</p>
            </div>
            <div className="gallery">
                {mediaItems.map((item, index) => (
                    item.includes('.mp4') ? (
                        <video key={index} className="gallery-item" onClick={() => openLightbox(index)}>
                            <source src={item} type="video/mp4" />
                        </video>
                    ) : (
                        <img key={index} src={item} alt="Farming" className="gallery-item" onClick={() => openLightbox(index)} />
                    )
                ))}
            </div>
            {lightbox !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    {mediaItems[lightbox].includes('.mp4') ? (
                        <video className="lightbox-media" controls autoPlay>
                            <source src={mediaItems[lightbox]} type="video/mp4" />
                        </video>
                    ) : (
                        <img src={mediaItems[lightbox]} alt="Farming" className="lightbox-media" />
                    )}
                    <button className="lightbox-btn prev-btn" onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}>&#8249;</button>
                    <button className="lightbox-btn next-btn" onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}>&#8250;</button>
                    <span className="close-btn" onClick={closeLightbox}>&times;</span>
                </div>
            )}
        </div>
    );
};

export default Farming;