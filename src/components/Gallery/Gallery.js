import React from "react";
import "./Gallery.css";
import { Link } from "react-router-dom";


const galleryItems = [
    { id: "Auditorium", title: "Auditorium", image: "images/auditorium.jpg", path: '/components/Gallery/Auditorium' },
    { id: "basketball", title: "Basketball Court", image: "images/basketball.jpg", path: '/components/Gallery/Basketball Court' },
    { id: "bhojnalya", title: "Bhojnalya", image: "images/bhojnalya.jpg", path: '/components/Gallery/Bhojnalya' },
    { id: "buildings", title: "Buildings", image: "images/buildings.jpg", path: '/components/Gallery/Buildings' },
    { id: "cinema&sports", title: "Cinema & Sports Hall", image: "images/cinema.jpg", path: '/components/Gallery/Cinema & Sports Hall' },
    { id: "dormitory", title: "Dormitory", image: "images/dormitory.jpg", path: '/components/Gallery/Dormitory' },
    { id: "exercise", title: "Exercise", image: "images/exercise.jpg", path: '/components/Gallery/Exercise' },
    { id: "farming", title: "Farming", image: "images/farming.jpg", path: '/components/Gallery/farming' },
    { id: "gaushala", title: "Gaushala", image: "images/gaushala.jpg", path: '/components/Gallery/Gaushala' },
    { id: "generator", title: "Generator Set", image: "images/generator.jpg", path: '/components/Gallery/Generator Set' },
    { id: "hospital", title: "Hospital", image: "images/hospital.jpg", path: '/components/Gallery/Hospital' },
    { id: "library", title: "Library", image: "images/library.jpg", path: '/components/Gallery/Library' },
    { id: "livingroom", title: "Living Rooms", image: "images/living-rooms.jpg", path: '/components/Gallery/Living Rooms' },
    { id: "meetinghall", title: "Meeting Hall", image: "images/medical-hall.jpg", path: '/components/Gallery/Meeting Hall' },
    { id: "medicalplant", title: "Medical Plants", image: "images/medical-plants.jpg", path: '/components/Gallery/Medical Plants' },
    { id: "mlrooms", title: "Meeting+Living Rooms", image: "images/meeting-rooms.jpg", path: '/components/Meeting+Living Rooms' },
    { id: "offices", title: "Offices", image: "images/offices.jpg", path: '/components/Gallery/offices' },
    { id: "polyhouses", title: "Polyhouses", image: "images/polyhouses.jpg", path: '/components/Gallery/Polyhouses' },
    { id: "running&ground", title: "Running Track+Ground", image: "images/running-track.jpg", path: '/components/Gallery/Running Track+Ground' },
    { id: "tennisnets", title: "Tennis Nets", image: "images/tennis.jpg", path: '/components/Gallery/Tennis Nets' },
    { id: "tissueculturelabs", title: "Tissue Culture Lab", image: "images/tissue-culture.jpg", path: '/components/Gallery/Tissue Culture Labs' },
    { id: "quotes", title: "Quotes", image: "images/quotes.jpg", path: '/components/Gallery/Quotes' },
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