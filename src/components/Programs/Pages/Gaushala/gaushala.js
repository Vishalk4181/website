import React from 'react';
import './gaushala.css';

const gaushala = () => {
  return (
    <div className="gaushala-page">
      <header className="header">
        <h1 className="title">Our Gaushala Initiative</h1>
        <p className="subtitle">
          Caring for cows and promoting sustainable farming practices for a better future.
        </p>
      </header>

      <section className="intro-section">
        <div className="content-container">
          <h2>About Our Gaushala</h2>
          <p>
            Our Gaushala initiative is dedicated to the welfare of cows, providing a safe and nurturing environment for them. We aim to promote sustainable farming practices and contribute to the preservation of indigenous breeds of cattle.
          </p>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Gaushala Matters</h2>
        <ul className="benefits-list">
          <li>Supports the welfare of cows and other livestock.</li>
          <li>Promotes sustainable agricultural practices with organic fertilizers.</li>
          <li>Preserves endangered and indigenous breeds of cattle.</li>
          <li>Contributes to environmental conservation through waste management and organic farming.</li>
        </ul>
      </section>

      <section className="impact-section">
        <h2>Our Impact</h2>
        <p>
          Over the years, our Gaushala has been a haven for hundreds of cows. We provide them with adequate nutrition, veterinary care, and a safe living environment. Our work supports both local farmers and the broader community by ensuring a sustainable approach to farming and livestock management.
        </p>
      </section>

      <section className="process-section">
        <h2>Our Gaushala Process</h2>
        <div className="process-steps">
          <div className="step">
            <h3>Step 1: Care & Feeding</h3>
            <p>
              Providing cows with balanced nutrition, clean water, and a healthy environment.
            </p>
          </div>
          <div className="step">
            <h3>Step 2: Veterinary Care</h3>
            <p>
              Ensuring regular health check-ups and medical attention to maintain the well-being of the cows.
            </p>
          </div>
          <div className="step">
            <h3>Step 3: Waste Management</h3>
            <p>
              Utilizing cow dung for organic farming, contributing to sustainable agricultural practices.
            </p>
          </div>
          <div className="step">
            <h3>Step 4: Community Support</h3>
            <p>
              Working with local farmers to promote eco-friendly farming practices and provide assistance where needed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default gaushala;