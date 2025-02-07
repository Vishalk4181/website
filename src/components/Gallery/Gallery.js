import React from "react";
import "./Gallery.css";
import { Link } from "react-router-dom";


const galleryItems = [
    { id: "auditorium", title: "Auditorium", image: "images/auditorium.jpg", path: '/components/Gallery/Auditorium' },
    { id: "basketball", title: "Basketball Court", image: "images/basketball.jpg" },
    { id: "bhojnalya", title: "Bhojnalya", image: "images/bhojnalya.jpg" },
    { id: "buildings", title: "Buildings", image: "images/buildings.jpg" },
    { id: "cinema&sports", title: "Cinema & Sports Hall", image: "images/cinema.jpg" },
    { id: "dormitory", title: "Dormitory", image: "images/dormitory.jpg" },
    { id: "exercise", title: "Exercise", image: "images/exercise.jpg" },
    { id: "farming", title: "Farming", image: "images/farming.jpg" },
    { id: "gaushala", title: "Gaushala", image: "images/gaushala.jpg" },
    { id: "generator", title: "Generator Set", image: "images/generator.jpg" },
    { id: "hospital", title: "Hospital", image: "images/hospital.jpg" },
    { id: "library", title: "Library", image: "images/library.jpg" },
    { id: "livingroom", title: "Living Rooms", image: "images/living-rooms.jpg" },
    { id: "meetinghall", title: "Meeting Hall", image: "images/medical-hall.jpg" },
    { id: "medicalplant", title: "Medical Plants", image: "images/medical-plants.jpg" },
    { id: "mlrooms", title: "Meeting + Living Rooms", image: "images/meeting-rooms.jpg" },
    { id: "offices", title: "Offices", image: "images/offices.jpg" },
    { id: "polyhouses", title: "Polyhouses", image: "images/polyhouses.jpg" },
    { id: "running&ground", title: "Running Track + Ground", image: "images/running-track.jpg" },
    { id: "tennisnets", title: "Tennis Nets", image: "images/tennis.jpg" },
    { id: "tissueculturelabs", title: "Tissue Culture Lab", image: "images/tissue-culture.jpg" },
    { id: "quotes", title: "Quotes", image: "images/quotes.jpg" },
];

const Gallery = () => {
    return (
        <div className="gallery-container">
            <h1 className="gallery-title">📸 Our Gallery</h1>
            <p className="gallery-description">
                Take a virtual tour through our diverse facilities, including sports, healthcare,
                education, and agriculture. Click on any section to explore further.
            </p>

            <div className="gallery-grid">
                {galleryItems.map((item) => (
                    <Link to={`/gallery/${item.id}`} key={item.id} className="gallery-card">
                        <img src={item.image} alt={item.title} className="gallery-thumbnail" />
                        <h3>{item.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Gallery;