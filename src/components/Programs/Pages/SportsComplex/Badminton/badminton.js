import React from 'react';
import './badminton.css';
import Slider from 'react-slick';

import Badminton1 from '../../../../../assets/images/Badminton1.jpg'
import Badminton2 from '../../../../../assets/images/Badminton2.jpg'
import Badminton3 from '../../../../../assets/images/Badminton3.jpg'
import Badminton4 from '../../../../../assets/images/Badminton4.jpg'
import Badminton5 from '../../../../../assets/images/Badminton5.jpg'

const Badminton = () => {
  const carouselSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Time in milliseconds between slides
    arrows: true, // Enable navigation arrows
  };

  return (
    <div className="badminton-container">
      <h1 className="badminton-heading">Badminton Program Overview</h1>

      <section className="badminton-section">
        <h2>Program Overview</h2>
        <h3>Overview:</h3>
        <ul>
          <li>Our Badminton program aims to develop agility, strategy, and technical skills.</li>
          <li>Suitable for players of all levels, from beginners to advanced.</li>
        </ul>
      </section>

      <section className="badminton-section">
        <h2>Facilities</h2>
        <h3>Indoor Badminton Courts</h3>
        <ul>
          <li>State-of-the-art indoor courts with high-quality wooden flooring and lighting.</li>
        </ul>

        <h3>Fitness and Training Centers</h3>
        <ul>
          <li>Fully equipped gym with cardio, strength, and flexibility training equipment.</li>
        </ul>

        <h3>Recovery and Rehabilitation</h3>
        <ul>
          <li>Advanced physiotherapy facilities for injury management and recovery.</li>
        </ul>
      </section>

      <section className="badminton-section">
        <h2>Coaching and Faculty</h2>
        <h3>Experienced Coaches</h3>
        <ul>
          <li>National and international coaches with expertise in technical and tactical training.</li>
          <li>Focus on skill development, strategy, and mental preparation.</li>
        </ul>

        <h3>Specialized Trainers</h3>
        <ul>
          <li>Trainers specializing in strength, conditioning, nutrition, and mental conditioning.</li>
        </ul>
      </section>

      <section className="badminton-section">
        <h2>Equipment and Support</h2>
        <h3>High-Quality Equipment</h3>
        <ul>
          <li>Top-grade badminton rackets, shuttlecocks, and training gear provided.</li>
        </ul>

        <h3>Personal Gear</h3>
        <ul>
          <li>Provision of essential gear, including shoes, jerseys, and protective equipment.</li>
        </ul>
      </section>

      <section className="badminton-section">
        <h2>Additional Support</h2>
        <h3>Sports Nutrition Counseling</h3>
        <ul>
          <li>Custom nutrition plans to enhance performance and recovery.</li>
        </ul>

        <h3>Mental Conditioning</h3>
        <ul>
          <li>Programs to build mental resilience and manage competition pressure.</li>
        </ul>
      </section>

      <section className="badminton-section">
        <h2>Tournaments and Exposure</h2>
        <ul>
          <li>Participation in national and regional badminton tournaments for real-world experience.</li>
        </ul>
      </section>

      <section className="badminton-section">
        <h2>In Conclusion</h2>
        <ul>
          <li>Our Badminton program is dedicated to nurturing talent with top-notch facilities and coaching.</li>
        </ul>
      </section>
      <div className="carousel-section">
          <Slider {...carouselSettings}>
            <div>
              <img src={Badminton1} alt="Slide 1" className="carousel-image" />
            </div>
            <div>
              <img src={Badminton2} alt="Slide 2" className="carousel-image" />
            </div>
            <div>
              <img src={Badminton3} alt="Slide 3" className="carousel-image" />
            </div>
            <div>
              <img src={Badminton4} alt="Slide 4" className="carousel-image" />
            </div>
            <div>
              <img src={Badminton5} alt="Slide 5" className="carousel-image" />
            </div>
          </Slider>
        </div>

    </div>
  );
};

export default Badminton;
