import React from 'react';
import './sportscomplex.css'; // Make sure to create this CSS file for styling
import { Link } from 'react-router-dom';

const sportsData = [
  { name: 'Kabaddi', icon: '🏋️', path: '/components/Programs/Pages/SportsComplex/Kabbadi/kabbadi.js' },
  { name: 'Kushti', icon: '🤼‍♂️', path: '/components/programs/Pages/SportsComplex/Kushti/kushti.js' },
  { name: 'Athletics', icon: '🏃‍♂️', path: '/components/Programs/Pages/SportsComplex/Athletics/athletics.js' },
  { name: 'Badminton', icon: '🏸', path: '/components/Programs/Pages/SportsComplex/Badminton/badminton.js' },
  { name: 'Volleyball', icon: '🏐', path: '/components/Programs/Pages/SportsComplex/Volleyball/volleyball.js' },
  { name: 'Basketball', icon: '🏀', path: '/components/Programs/Pages/SportsComplex/Basketball/basketball.js' },
];

const SportsComplex = () => {
  return (
    <section className="sports-complex">
      <div className="container">
        <h1 className="heading">Sports Complex</h1>
        
        <section className="sports-info">
          <p className="sports-description">
            खेल हमारे जीवन का एक महत्वपूर्ण हिस्सा है। यह हमें स्वस्थ रखने के साथ-साथ मानसिक, शारीरिक और सामाजिक विकास का भी माध्यम है। खेलने से हमारे शरीर की शक्ति बढ़ती है और हम तंदुरुस्त रहते हैं। इसके साथ ही, खेल हमें विज्ञान, मनोविज्ञान, संघटना, अनुशासन और नैतिकता की महत्वपूर्ण शिक्षाएं भी प्रदान करता है।
          </p>
          <ul className="sports-facilities">
            <li>हमारे यहां लॉन टेनिस के 6 सिंथेटिक कोर्ट हैं जो कि सिर्फ हरियाणा के इसी केंद्र में उपलब्ध हैं।</li>
            <li>बैडमिंटन के 2 इंडोर स्टेडियम मौजूद हैं।</li>
            <li>हमारे यहां रेसलिंग मैट भी उपलब्ध हैं और ग्रामीण क्षेत्रों से 80 लड़के और लड़कियां रोजाना अभ्यास करने आते हैं।</li>
          </ul>
        </section>

        <div className="sports-grid">
          {sportsData.map((sport, index) => (
            <Link to={sport.path} className="sport-card" key={index}>
              <div className="sport-icon">{sport.icon}</div>
              <h2 className="sport-title">{sport.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsComplex;
