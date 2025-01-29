import React from 'react';
import './tissueculture.css';
import Slider from 'react-slick';


import TissueCulture1 from '../../../../assets/images/TissueCulture1.jpg'
import TissueCulture2 from '../../../../assets/images/TissueCulture2.jpg'
import TissueCulture3 from '../../../../assets/images/TissueCulture3.jpg'
import TissueCulture4 from '../../../../assets/images/TissueCulture4.jpg'
import TissueCulture5 from '../../../../assets/images/TissueCulture5.jpg'



const tissueculture = () => {
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

      <div className="carousel-section">
          <Slider {...carouselSettings}>
            <div>
              <img src={TissueCulture1} alt="Slide 1" className="carousel-image" />
            </div>
            <div>
              <img src={TissueCulture2} alt="Slide 2" className="carousel-image" />
            </div>
            <div>
              <img src={TissueCulture3} alt="Slide 3" className="carousel-image" />
            </div>
            <div>
              <img src={TissueCulture4} alt="Slide 4" className="carousel-image" />
            </div>
            <div>
              <img src={TissueCulture5} alt="Slide 5" className="carousel-image" />
            </div>
          </Slider>
        </div>



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
    </div>
  );
};

export default tissueculture;
