// src/components/About.js
import React from 'react';
import '../About Us/About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Shri Madhav Seva Nyas, Center Of Education, Skills & Career Advancement (CESCA), is dedicated to fostering an environment of learning and growth. Our mission is to provide quality education, develop skills, and guide our students towards successful careers. We believe in the power of knowledge and strive to empower individuals to achieve their full potential.
        </p>
        <div className="about-values">
          <div className="value">
            <h2>Our Mission</h2>
            <p>To provide quality education and skill development to our students, helping them build successful careers.</p>
          </div>
          <div className="value">
            <h2>Our Vision</h2>
            <p>To be a leading institution in education and career advancement, fostering growth and development in every individual.</p>
          </div>
          <div className="value">
            <h2>Our Values</h2>
            <p>Commitment to excellence, innovation, and integrity in everything we do.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
