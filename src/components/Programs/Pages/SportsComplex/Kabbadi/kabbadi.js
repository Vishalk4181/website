import React from 'react';
import './kabbadi.css';
import Slider from 'react-slick';

import Kabbadi1 from '../../../../../assets/images/Kabbadi1.jpg'
import Kabbadi2 from '../../../../../assets/images/Kabbadi2.jpg'
import Kabbadi3 from '../../../../../assets/images/Kabbadi3.jpg'
import Kabbadi4 from '../../../../../assets/images/Kabbadi4.jpg'
import Kabbadi5 from '../../../../../assets/images/Kabbadi5.jpg'


const Kabbadi = () => {
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
    <div className="kabaddi-container">
      <h1 className="kabaddi-heading">Kabaddi Program Overview</h1>

      <section className="kabaddi-section">
        <h2>Program Overview</h2>
        <h3>Overview:</h3>
        <ul>
          <li>Shri Madhav Jan Sewa Nyas offers a comprehensive Kabaddi program for all skill levels.</li>
          <li>Focuses on physical conditioning, skill development, and mental toughness.</li>
        </ul>
      </section>

      <section className="kabaddi-section">
        <h2>Facilities</h2>
        <h3>State-of-the-Art Kabaddi Courts</h3>
        <ul>
          <li>International-standard courts with safety-focused high-quality flooring.</li>
        </ul>

        <h3>Training and Fitness Centers</h3>
        <ul>
          <li>Modern gym with strength and conditioning equipment, cardiovascular machines, and flexibility areas.</li>
        </ul>

        <h3>Recovery and Rehabilitation Areas</h3>
        <ul>
          <li>Physiotherapy rooms equipped with the latest technology for injury prevention and rehabilitation.</li>
        </ul>

        <h3>Locker Rooms and Player Lounges</h3>
        <ul>
          <li>Comfortable and hygienic spaces for players to relax after sessions.</li>
        </ul>
      </section>

      <section className="kabaddi-section">
        <h2>Coaching and Faculty</h2>
        <h3>Certified and Experienced Coaches</h3>
        <ul>
          <li>Coaches with national and international experience.</li>
          <li>Focus on sports psychology and modern training techniques.</li>
        </ul>

        <h3>Specialized Trainers</h3>
        <ul>
          <li>Experts in strength conditioning, sports nutrition, and mental conditioning.</li>
        </ul>

        <h3>Guest Lectures and Clinics</h3>
        <ul>
          <li>Insights from Kabaddi professionals on advanced strategies and mental focus.</li>
        </ul>
      </section>

      <section className="kabaddi-section">
        <h2>Equipment and Support</h2>
        <h3>High-Quality Kabaddi Mats</h3>
        <ul>
          <li>Internationally approved, shock-absorbent mats to minimize injury risk.</li>
        </ul>

        <h3>Personal Gear</h3>
        <ul>
          <li>Shri Madhav Jan Sewa Nyas provides you knee pads, ankle braces and more equipments for player safety.</li>
        </ul>
      </section>

      <section className="kabaddi-section">
        <h2>Additional Support</h2>
        <h3>Sports Nutrition Counseling</h3>
        <ul>
          <li>Personalized meal plans for optimal physical performance and well-being.</li>
        </ul>

        <h3>Mental Conditioning</h3>
        <ul>
          <li>Programs designed to help players manage pressure and enhance their focus.</li>
        </ul>
      </section>

      <section className="kabaddi-section">
        <h2>Tournaments and Exposure</h2>
        <ul>
          <li>Participation in national and regional Kabaddi tournaments with real-world experience.</li>
        </ul>
      </section>

      <section className="kabaddi-section">
        <h2>In Conclusion</h2>
        <ul>
          <li>Shri Madhav Jan Sewa Nyas is committed to developing the next generation of Kabaddi champions with top-tier facilities and expert coaching.</li>
        </ul>
      </section>
      <div className="carousel-section">
          <Slider {...carouselSettings}>
            <div>
              <img src={Kabbadi1} alt="Slide 1" className="carousel-image" />
            </div>
            <div>
              <img src={Kabbadi2} alt="Slide 2" className="carousel-image" />
            </div>
            <div>
              <img src={Kabbadi3} alt="Slide 3" className="carousel-image" />
            </div>
            <div>
              <img src={Kabbadi4} alt="Slide 4" className="carousel-image" />
            </div>
            <div>
              <img src={Kabbadi5} alt="Slide 5" className="carousel-image" />
            </div>
          </Slider>
        </div>

    </div>
  );
};

export default Kabbadi;