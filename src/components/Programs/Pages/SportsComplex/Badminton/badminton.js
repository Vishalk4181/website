import React from 'react';
import './badminton.css';

const Badminton = () => {
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
    </div>
  );
};

export default Badminton;
