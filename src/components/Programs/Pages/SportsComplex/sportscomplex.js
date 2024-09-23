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
