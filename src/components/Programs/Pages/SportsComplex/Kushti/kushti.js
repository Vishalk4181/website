import React from 'react';
import './kushti.css';
import Slider from 'react-slick';

import Kushti1 from '../../../../../assets/images/Kushti1.jpg'
import Kushti2 from '../../../../../assets/images/Kushti2.jpg'
import Kushti3 from '../../../../../assets/images/Kushti3.jpg'
import Kushti4 from '../../../../../assets/images/Kushti4.jpg'
import Kushti5 from '../../../../../assets/images/Kushti5.jpg'


const Kushti = () => {
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
    <div className="kushti-container">
      <h1 className="kushti-heading">Kushti (Wrestling) Program Overview</h1>

      <section className="kushti-section">
        <h2>Program Overview</h2>
        <h3>Overview:</h3>
        <ul>
          <li>Our Kushti program emphasizes traditional wrestling techniques blended with modern training methods.</li>
          <li>It caters to individuals of all ages, aiming to build strength, technique, and mental fortitude.</li>
        </ul>
      </section>

      <section className="kushti-section">
        <h2>Facilities</h2>
        <h3>Wrestling Arenas</h3>
        <ul>
          <li>Traditional Akharas alongside modern wrestling mats to provide a comprehensive training environment.</li>
        </ul>

        <h3>Training and Fitness Centers</h3>
        <ul>
          <li>Fully-equipped gym for strength, conditioning, and flexibility training tailored for wrestlers.</li>
        </ul>

        <h3>Recovery and Rehabilitation</h3>
        <ul>
          <li>Physiotherapy and rehabilitation facilities focusing on injury prevention and recovery.</li>
        </ul>
      </section>

      <section className="kushti-section">
        <h2>Coaching and Faculty</h2>
        <h3>Expert Coaches</h3>
        <ul>
          <li>Coaches with national and international wrestling experience, focusing on traditional and modern techniques.</li>
          <li>Special emphasis on grappling, holds, and endurance training.</li>
        </ul>

        <h3>Specialized Trainers</h3>
        <ul>
          <li>Trainers specializing in strength conditioning, nutrition, and psychological conditioning for wrestlers.</li>
        </ul>
      </section>

      <section className="kushti-section">
        <h2>Equipment and Support</h2>
        <h3>High-Quality Mats and Equipment</h3>
        <ul>
          <li>Standard wrestling mats and equipment to ensure safe and effective training sessions.</li>
        </ul>

        <h3>Personal Gear</h3>
        <ul>
          <li>Provision of wrestling singlets, protective gear, and other necessary equipment.</li>
        </ul>
      </section>

      <section className="kushti-section">
        <h2>Additional Support</h2>
        <h3>Sports Nutrition Counseling</h3>
        <ul>
          <li>Nutrition plans designed to optimize strength, endurance, and recovery for wrestlers.</li>
        </ul>

        <h3>Mental Conditioning</h3>
        <ul>
          <li>Programs to enhance mental toughness and focus during intense matches.</li>
        </ul>
      </section>

      <section className="kushti-section">
        <h2>Tournaments and Exposure</h2>
        <ul>
          <li>Participation in traditional Kushti and modern wrestling tournaments to gain competitive experience.</li>
        </ul>
      </section>

      <section className="kushti-section">
        <h2>In Conclusion</h2>
        <ul>
          <li>Our Kushti program is dedicated to preserving the essence of traditional wrestling while incorporating modern techniques for holistic development.</li>
        </ul>
      </section>
      <div className="carousel-section">
          <Slider {...carouselSettings}>
            <div>
              <img src={Kushti1} alt="Slide 1" className="carousel-image" />
            </div>
            <div>
              <img src={Kushti2} alt="Slide 2" className="carousel-image" />
            </div>
            <div>
              <img src={Kushti3} alt="Slide 3" className="carousel-image" />
            </div>
            <div>
              <img src={Kushti4} alt="Slide 4" className="carousel-image" />
            </div>
            <div>
              <img src={Kushti5} alt="Slide 5" className="carousel-image" />
            </div>
          </Slider>
        </div>

    </div>
  );
};

export default Kushti;
