import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Library.css';

const Library = () => {
  const images = [
    '/images/library1.jpg',
    '/images/library2.jpg',
    '/images/library3.jpg',
    '/images/library4.jpg',
    '/images/library5.jpg',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="library-page">
      <div className="header">
        <h1 className="title">Library</h1>
        <span className="subtitle">A treasure trove of knowledge and wisdom</span>
      </div>
      
      <div className="carousel-section">
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Library ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>

      <section className="intro-section">
        <h2>Introduction</h2>
        <p>Our library offers a vast collection of books, journals, and digital resources to nurture learning and curiosity.</p>
      </section>

      <section className="facilities-section">
        <h2>Facilities</h2>
        <p>We provide reading rooms, digital archives, reference sections, and study areas for an enriched learning experience.</p>
      </section>

      <section className="benefits-section">
        <h2>Benefits</h2>
        <ul className="benefits-list">
          <li>Access to thousands of books and research materials</li>
          <li>Quiet and conducive environment for study</li>
          <li>Digital resources and e-books</li>
          <li>Workshops and knowledge-sharing sessions</li>
        </ul>
      </section>

      <section className="rules-section">
        <h2>Rules & Regulations</h2>
        <ol className="rules-list">
          <li>Maintain silence in the library premises.</li>
          <li>Handle books and materials with care.</li>
          <li>Return borrowed books on time.</li>
          <li>Respect the library staff and fellow readers.</li>
        </ol>
      </section>

      <section className="membership-section">
        <h2>Membership</h2>
        <div className="membership-steps">
          <div className="step">
            <h3>Step 1: Register</h3>
            <p>Fill out the membership form online or at the library.</p>
          </div>
          <div className="step">
            <h3>Step 2: Verification</h3>
            <p>Provide a valid ID and address proof for verification.</p>
          </div>
          <div className="step">
            <h3>Step 3: Access</h3>
            <p>Get your membership card and start exploring the library.</p>
          </div>
        </div>
      </section>

      <section className="get-involved-section">
        <h2>Get Involved</h2>
        <p>Support our library by donating books, volunteering, or participating in community reading programs.</p>
      </section>
    </div>
  );
};

export default Library;
