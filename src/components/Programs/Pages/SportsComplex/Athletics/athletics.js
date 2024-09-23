import React from 'react';
import './athletics.css';

const Athletics = () => {
  return (
    <div className="athletics-container">
      <h1 className="athletics-heading">Athletics Program Overview</h1>

      <section className="athletics-section">
        <h2>Program Overview</h2>
        <h3>Overview:</h3>
        <ul>
          <li>Our Athletics program focuses on developing strength, endurance, and agility.</li>
          <li>Designed for all levels, from beginners to advanced athletes.</li>
        </ul>
      </section>

      <section className="athletics-section">
        <h2>Facilities</h2>
        <h3>International Standard Track and Field</h3>
        <ul>
          <li>400-meter synthetic track with high-quality field areas for various events.</li>
        </ul>

        <h3>Strength and Conditioning Centers</h3>
        <ul>
          <li>Modern gym with equipment for strength, agility, and flexibility training.</li>
        </ul>

        <h3>Recovery and Rehabilitation</h3>
        <ul>
          <li>Advanced physiotherapy rooms for injury management and recovery.</li>
        </ul>
      </section>

      <section className="athletics-section">
        <h2>Coaching and Faculty</h2>
        <h3>Certified Coaches</h3>
        <ul>
          <li>National and international level coaches specialized in athletics events.</li>
          <li>Focus on personalized training plans and sports psychology.</li>
        </ul>

        <h3>Specialized Trainers</h3>
        <ul>
          <li>Experts in biomechanics, nutrition, and mental conditioning.</li>
        </ul>
      </section>

      <section className="athletics-section">
        <h2>Equipment and Support</h2>
        <h3>High-Quality Equipment</h3>
        <ul>
          <li>Top-grade athletic equipment including hurdles, poles, and jumping mats.</li>
        </ul>

        <h3>Personal Gear</h3>
        <ul>
          <li>Provision of essential gear including shoes, jerseys, and safety equipment.</li>
        </ul>
      </section>

      <section className="athletics-section">
        <h2>Additional Support</h2>
        <h3>Sports Nutrition Counseling</h3>
        <ul>
          <li>Personalized nutrition plans to enhance performance and recovery.</li>
        </ul>

        <h3>Mental Conditioning</h3>
        <ul>
          <li>Programs to build mental resilience and manage competition stress.</li>
        </ul>
      </section>

      <section className="athletics-section">
        <h2>Tournaments and Exposure</h2>
        <ul>
          <li>Participation in national and international athletics competitions.</li>
        </ul>
      </section>

      <section className="athletics-section">
        <h2>In Conclusion</h2>
        <ul>
          <li>We are dedicated to nurturing athletic talent with world-class facilities and expert coaching.</li>
        </ul>
      </section>
    </div>
  );
};

export default Athletics;
