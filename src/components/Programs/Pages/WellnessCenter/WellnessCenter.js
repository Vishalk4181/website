import React from 'react';
import './WellnessCenter.css';

const WellnessCenter = () => {
  return (
    <div className="wellness-center-page">
      <header className="header">
        <h1 className="title">Wellness Center</h1>
        <p className="subtitle">
          A holistic approach to nurturing physical, mental, and emotional well-being.
        </p>
      </header>

      <section className="intro-section">
        <div className="content-container">
          <h2>About Our Wellness Center</h2>
          <p>
            Our Wellness Center is dedicated to promoting overall well-being by integrating a variety of health and wellness practices. From physical fitness and mental health workshops to nutritional counseling and stress management, we offer programs designed to empower individuals to lead healthier, more balanced lives.
          </p>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Wellness Matters</h2>
        <ul className="benefits-list">
          <li>Improves physical health through regular exercise and activities.</li>
          <li>Encourages mental resilience and emotional balance.</li>
          <li>Reduces stress and promotes relaxation techniques.</li>
          <li>Supports long-term lifestyle changes for holistic well-being.</li>
        </ul>
      </section>

      <section className="impact-section">
        <h2>Our Impact</h2>
        <p>
          The Wellness Center has positively impacted countless lives by providing resources and guidance for physical fitness, mental health, and lifestyle management. Our expert team works closely with participants to help them achieve their personal wellness goals and foster sustainable habits for a healthier life.
        </p>
      </section>

      <section className="process-section">
        <h2>Our Wellness Approach</h2>
        <div className="process-steps">
          <div className="step">
            <h3>Step 1: Assessment</h3>
            <p>
              We begin by understanding individual needs and goals through a detailed wellness assessment.
            </p>
          </div>
          <div className="step">
            <h3>Step 2: Customized Plans</h3>
            <p>
              Personalized wellness plans are created, including fitness routines, dietary guidance, and mental health strategies.
            </p>
          </div>
          <div className="step">
            <h3>Step 3: Guided Activities</h3>
            <p>
              Participants engage in various wellness activities such as yoga, meditation, fitness training, and workshops.
            </p>
          </div>
          <div className="step">
            <h3>Step 4: Progress Evaluation</h3>
            <p>
              Regular follow-ups and evaluations ensure participants stay on track and achieve their wellness goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessCenter;