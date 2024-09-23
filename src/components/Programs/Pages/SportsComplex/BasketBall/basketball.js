import React from 'react';
import './basketball.css';

const Basketball = () => {
  return (
    <div className="basketball-container">
      <h1 className="basketball-heading">Basketball Program Overview</h1>

      <section className="basketball-section">
        <h2>Program Overview</h2>
        <h3>Overview:</h3>
        <ul>
          <li>Our Basketball program focuses on building core skills, teamwork, and strategic play.</li>
          <li>Suitable for players of all ages and skill levels, from beginners to advanced athletes.</li>
        </ul>
      </section>

      <section className="basketball-section">
        <h2>Facilities</h2>
        <h3>Indoor and Outdoor Courts</h3>
        <ul>
          <li>Professional-grade indoor and outdoor courts with high-quality surfaces and lighting.</li>
        </ul>

        <h3>Fitness and Training Centers</h3>
        <ul>
          <li>Advanced fitness centers with equipment for strength, conditioning, and agility training.</li>
        </ul>

        <h3>Recovery and Rehabilitation</h3>
        <ul>
          <li>Comprehensive rehabilitation facilities with physiotherapy and injury management services.</li>
        </ul>
      </section>

      <section className="basketball-section">
        <h2>Coaching and Faculty</h2>
        <h3>Certified Coaches</h3>
        <ul>
          <li>Experienced coaches with national and international credentials in basketball training.</li>
          <li>Focus on technical skills, game strategies, and mental preparation.</li>
        </ul>

        <h3>Specialized Trainers</h3>
        <ul>
          <li>Trainers skilled in strength conditioning, sports nutrition, and mental conditioning.</li>
        </ul>
      </section>

      <section className="basketball-section">
        <h2>Equipment and Support</h2>
        <h3>High-Quality Equipment</h3>
        <ul>
          <li>Professional-grade basketballs, training cones, and agility ladders provided for practice.</li>
        </ul>

        <h3>Personal Gear</h3>
        <ul>
          <li>Provision of essential gear, including jerseys, shoes, and protective equipment.</li>
        </ul>
      </section>

      <section className="basketball-section">
        <h2>Additional Support</h2>
        <h3>Sports Nutrition Counseling</h3>
        <ul>
          <li>Personalized nutrition plans to enhance performance and recovery.</li>
        </ul>

        <h3>Mental Conditioning</h3>
        <ul>
          <li>Programs to help players build mental resilience and handle competitive pressure.</li>
        </ul>
      </section>

      <section className="basketball-section">
        <h2>Tournaments and Exposure</h2>
        <ul>
          <li>Participation in local, regional, and national basketball tournaments for competitive experience.</li>
        </ul>
      </section>

      <section className="basketball-section">
        <h2>In Conclusion</h2>
        <ul>
          <li>Our Basketball program is committed to developing well-rounded athletes with expert coaching and state-of-the-art facilities.</li>
        </ul>
      </section>
    </div>
  );
};

export default Basketball;
