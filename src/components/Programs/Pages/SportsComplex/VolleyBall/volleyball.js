import React from 'react';
import './volleyball.css';
import Slider from 'react-slick';

import VolleyBall1 from '../../../../../assets/images/Volleyball1.jpg'
import VolleyBall2 from '../../../../../assets/images/Volleyball2.jpg'
import VolleyBall3 from '../../../../../assets/images/Volleyball3.jpg'
import VolleyBall4 from '../../../../../assets/images/Volleyball3.jpg'
import VolleyBall5 from '../../../../../assets/images/Volleyball5.jpg'


const Volleyball = () => {
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
    <div className="volleyball-container">
      <h1 className="volleyball-heading">Volleyball Program Overview</h1>

      <section className="volleyball-section">
        <h2>Program Overview</h2>
        <h3>Overview:</h3>
        <ul>
          <li>Our Volleyball program offers training for all skill levels, focusing on technical skills, teamwork, and strategy.</li>
          <li>Designed to promote physical fitness, agility, and sportsmanship among players.</li>
        </ul>
      </section>

      <section className="volleyball-section">
        <h2>Facilities</h2>
        <h3>Professional Volleyball Courts</h3>
        <ul>
          <li>International-standard courts with high-quality flooring and net systems.</li>
        </ul>

        <h3>Training and Fitness Centers</h3>
        <ul>
          <li>Fully equipped gym with strength training and cardio equipment to enhance players' performance.</li>
        </ul>

        <h3>Rehabilitation and Recovery</h3>
        <ul>
          <li>Advanced physiotherapy facilities for injury prevention and recovery management.</li>
        </ul>
      </section>

      <section className="volleyball-section">
        <h2>Coaching and Faculty</h2>
        <h3>Experienced Coaches</h3>
        <ul>
          <li>Certified coaches with experience in national and international volleyball tournaments.</li>
          <li>Focus on technical skills, game tactics, and mental preparation.</li>
        </ul>

        <h3>Specialized Trainers</h3>
        <ul>
          <li>Experts in physical conditioning, nutrition, and sports psychology to support athletes' development.</li>
        </ul>
      </section>

      <section className="volleyball-section">
        <h2>Equipment and Support</h2>
        <h3>Top-Quality Volleyball Gear</h3>
        <ul>
          <li>Access to high-quality volleyballs, nets, and protective gear to ensure safe and effective training.</li>
        </ul>

        <h3>Personal Gear</h3>
        <ul>
          <li>Provision of knee pads, ankle braces, and other essential equipment for player safety and comfort.</li>
        </ul>
      </section>

      <section className="volleyball-section">
        <h2>Additional Support</h2>
        <h3>Sports Nutrition Counseling</h3>
        <ul>
          <li>Custom meal plans to optimize athletes' performance, recovery, and overall health.</li>
        </ul>

        <h3>Mental Conditioning</h3>
        <ul>
          <li>Programs to enhance mental focus, resilience, and stress management during competition.</li>
        </ul>
      </section>

      <section className="volleyball-section">
        <h2>Tournaments and Exposure</h2>
        <ul>
          <li>Opportunities to participate in regional and national volleyball tournaments, gaining valuable competitive experience.</li>
        </ul>
      </section>

      <section className="volleyball-section">
        <h2>In Conclusion</h2>
        <ul>
          <li>Our Volleyball program is committed to nurturing athletes with comprehensive training, top-notch facilities, and professional coaching.</li>
        </ul>
      </section>
      <div className="carousel-section">
          <Slider {...carouselSettings}>
            <div>
              <img src={VolleyBall1} alt="Slide 1" className="carousel-image" />
            </div>
            <div>
              <img src={VolleyBall2} alt="Slide 2" className="carousel-image" />
            </div>
            <div>
              <img src={VolleyBall3} alt="Slide 3" className="carousel-image" />
            </div>
            <div>
              <img src={VolleyBall4} alt="Slide 4" className="carousel-image" />
            </div>
            <div>
              <img src={VolleyBall5} alt="Slide 5" className="carousel-image" />
            </div>
          </Slider>
        </div>
    </div>
  );
};

export default Volleyball;
