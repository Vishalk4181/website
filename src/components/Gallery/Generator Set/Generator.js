import React, { useState } from "react";
import "./Generator.css";
import generator1 from "../../../assets/Photos/Gernator Set/generator1";
import generator2 from "./images/generator2.jpg";
import generatorVideo1 from "./videos/generator1.mp4";
import generatorVideo2 from "./videos/generator2.mp4";
import generatorVideo3 from "./videos/generator3.mp4";

const Generator = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxContent, setLightboxContent] = useState(null);
    const [isVideo, setIsVideo] = useState(false);

    const openLightbox = (content, video = false) => {
        setLightboxContent(content);
        setIsVideo(video);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setLightboxContent(null);
        setIsVideo(false);
    };

    return (
        <div className="generator-container">
            <h1>Generator</h1>
            <p className="generator-description">
                Our Generator facility ensures uninterrupted power supply across the premises. Equipped with high-capacity generators, we provide a reliable energy backup system.
            </p>
            
            {/* Gallery */}
            <div className="gallery">
                <img
                    src={generator1}
                    alt="Generator 1"
                    className="gallery-item"
                    onClick={() => openLightbox(generator1)}
                />
                <img
                    src={generator2}
                    alt="Generator 2"
                    className="gallery-item"
                    onClick={() => openLightbox(generator2)}
                />
                <video
                    className="gallery-item"
                    onClick={() => openLightbox(generatorVideo1, true)}
                    src={generatorVideo1}
                    muted
                />
                <video
                    className="gallery-item"
                    onClick={() => openLightbox(generatorVideo2, true)}
                    src={generatorVideo2}
                    muted
                />
                <video
                    className="gallery-item"
                    onClick={() => openLightbox(generatorVideo3, true)}
                    src={generatorVideo3}
                    muted
                />
            </div>
            
            {/* Lightbox */}
            {lightboxOpen && (
                <div className="lightbox" onClick={closeLightbox}>
                    {isVideo ? (
                        <video className="lightbox-media" src={lightboxContent} controls autoPlay />
                    ) : (
                        <img className="lightbox-media" src={lightboxContent} alt="Generator Lightbox" />
                    )}
                    <button className="close-btn" onClick={closeLightbox}>&times;</button>
                </div>
            )}
        </div>
    );
};

export default Generator;
