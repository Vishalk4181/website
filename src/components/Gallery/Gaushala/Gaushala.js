import React, { useState } from 'react';
import './Gaushala.css';

const mediaItems = [
    { type: 'image', src: '/images/gaushala1.jpg' },
    { type: 'image', src: '/images/gaushala2.jpg' },
    { type: 'image', src: '/images/gaushala3.jpg' },
    { type: 'video', src: '/videos/gaushala1.mp4' },
    { type: 'video', src: '/videos/gaushala2.mp4' }
];

const Gaushala = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const navigateLightbox = (direction) => {
        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = mediaItems.length - 1;
        if (newIndex >= mediaItems.length) newIndex = 0;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="gaushala-container">
            <h1>Our Gaushala Initiative</h1>
            <p className="gaushala-description">Preserving indigenous cow breeds and promoting sustainable dairy farming.</p>
            <div className="gallery">
                {mediaItems.map((item, index) => (
                    <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
                        {item.type === 'image' ? (
                            <img src={item.src} alt="Gaushala" className="media-thumb" />
                        ) : (
                            <video src={item.src} className="media-thumb" muted />
                        )}
                    </div>
                ))}
            </div>
            {lightboxOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    {mediaItems[currentIndex].type === 'image' ? (
                        <img src={mediaItems[currentIndex].src} alt="Gaushala" className="lightbox-media" />
                    ) : (
                        <video src={mediaItems[currentIndex].src} className="lightbox-media" controls autoPlay />
                    )}
                    <button className="lightbox-btn prev-btn" onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}>&#10094;</button>
                    <button className="lightbox-btn next-btn" onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}>&#10095;</button>
                    <span className="close-btn" onClick={closeLightbox}>&times;</span>
                </div>
            )}
        </div>
    );
};

export default Gaushala;
