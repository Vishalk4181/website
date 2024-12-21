import React from 'react';
import './yogameditation.css';

const YogaMeditation = () => {
  return (
    <div className="yoga-meditation-page">
      <header className="header">
        <h1 className="title">Yoga & Meditation</h1>
        <p className="subtitle">
          Nurturing mind, body, and spirit through ancient practices for modern wellness.
        </p>
      </header>

      <section className="intro-section">
        <div className="content-container">
          <h2>About Our Yoga & Meditation Program</h2>
          <p>
            Our Yoga & Meditation program focuses on holistic wellness, incorporating traditional practices with modern wellness techniques. Our sessions help individuals achieve mental clarity, physical strength, and emotional balance.
          </p>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Yoga & Meditation Matter</h2>
        <ul className="benefits-list">
          <li>Promotes mental clarity and focus.</li>
          <li>Enhances physical flexibility and strength.</li>
          <li>Reduces stress and anxiety through mindfulness techniques.</li>
          <li>Encourages emotional well-being and balance.</li>
        </ul>
      </section>

      <section className="impact-section">
        <h2>Our Impact</h2>
        <p>
          Through our Yoga & Meditation programs, we have empowered hundreds of individuals to achieve a state of peace and well-being. Our trained instructors guide participants in practicing mindfulness, deep breathing, and physical asanas, fostering long-term benefits.
        </p>
      </section>

      <section className="process-section">
        <h2>Our Yoga & Meditation Process</h2>
        <div className="process-steps">
          <div className="step">
            <h3>Step 1: Guided Meditation</h3>
            <p>
              We begin with mindfulness meditation techniques to calm the mind and focus on the present moment.
            </p>
          </div>
          <div className="step">
            <h3>Step 2: Breathing Exercises</h3>
            <p>
              We introduce breathing exercises to promote relaxation and regulate energy levels.
            </p>
          </div>
          <div className="step">
            <h3>Step 3: Asanas (Yoga Poses)</h3>
            <p>
              Participants engage in gentle yoga poses to enhance flexibility, strength, and balance.
            </p>
          </div>
          <div className="step">
            <h3>Step 4: Relaxation</h3>
            <p>
              The session concludes with deep relaxation techniques to calm the body and mind, leaving participants revitalized.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YogaMeditation;
