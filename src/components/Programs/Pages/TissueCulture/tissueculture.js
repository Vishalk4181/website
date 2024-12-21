import React from 'react';
import './tissueculture.css';

const tissueculture = () => {
  return (
    <div className="tissue-culture-page">
      <header className="header">
        <h1 className="title">Our Tissue Culture Initiatives</h1>
        <p className="subtitle">
          Dedicated to revolutionizing agriculture with advanced tissue culture techniques.
        </p>
      </header>

      <section className="intro-section">
        <div className="content-container">
          <h2>About Our Tissue Culture Program</h2>
          <p>
            SMJSN is at the forefront of agricultural innovation, leveraging tissue culture to enhance crop production and sustainability. Through this technique, we propagate high-quality, disease-free plants to support farmers and contribute to food security.
          </p>
        </div>

      </section>

      <section className="benefits-section">
        <h2>Why Tissue Culture Matters</h2>
        <ul className="benefits-list">
          <li>Boosts agricultural productivity with uniform and healthy crops.</li>
          <li>Preserves rare and endangered plant species.</li>
          <li>Reduces reliance on chemical pesticides by producing disease-resistant plants.</li>
          <li>Empowers farmers with sustainable and cost-effective solutions.</li>
        </ul>
      </section>

      <section className="impact-section">
        <h2>Our Impact</h2>
        <p>
          Over the years, our tissue culture program has positively impacted hundreds of farmers by providing them with access to high-yielding, resilient crops. We have successfully cultivated plant varieties such as bananas, sugarcane, and ornamental plants, ensuring consistent quality and productivity.
        </p>
      </section>

      <section className="process-section">
        <h2>Our Tissue Culture Process</h2>
        <div className="process-steps">
          <div className="step">
            <h3>Step 1: Selection</h3>
            <p>
              Carefully selecting the best plant varieties to ensure high-quality outputs.
            </p>
          </div>
          <div className="step">
            <h3>Step 2: Laboratory Cultivation</h3>
            <p>
              Using advanced laboratory techniques to cultivate plant tissues in sterile conditions.
            </p>
          </div>
          <div className="step">
            <h3>Step 3: Multiplication</h3>
            <p>
              Propagating plants in large quantities while maintaining genetic integrity.
            </p>
          </div>
          <div className="step">
            <h3>Step 4: Hardening</h3>
            <p>
              Preparing plants for real-world conditions in controlled environments.
            </p>
          </div>
          <div className="step">
            <h3>Step 5: Field Transfer</h3>
            <p>
              Distributing plants to farmers and supporting them during the cultivation process.
            </p>
          </div>
        </div>
      </section>

      <section className="get-involved-section">
        <h2>Get Involved</h2>
        <p>
          Join us in transforming agriculture. Whether you're a farmer, researcher, or supporter, there's a role for everyone in our journey towards sustainable farming.
        </p>
        <button className="contact-button">Contact Us</button>
      </section>
    </div>
  );
};

export default tissueculture;
