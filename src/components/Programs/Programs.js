import React from 'react';
import { Link } from 'react-router-dom';
import './Programs.css';

const programsData = [
  {
    title: 'Hospital and Healthcare',
    description: 'Providing essential healthcare facilities to the rural population with modern medical equipment and services.',
    icon: '🏥',
    path: '/components/Programs/Pages/HostpitalHealthcare/hospitalhealthcare.js'
  },
  {
    title: 'Skill Development Center',
    description: 'Empowering youth with the skills needed for employment through comprehensive training programs.',
    icon: '🎓',
    path: '/components/Programs/Pages/SkillDevelopment/skilldevelopment.js'
  },
  {
    title: 'Sports Complex',
    description: 'Developing young athletes with state-of-the-art sports facilities and training programs.',
    icon: '⚽',
    path: '/components/Programs/pages/SportsComplex/sportscomplex.js'
  },
  {
    title: 'Yoga and Meditation Center',
    description: 'Promoting physical and mental well-being through yoga and meditation classes for all age groups.',
    icon: '🧘‍♂️',
    path: '/components/Programs/Pages/YogaMeditaion/yogameditaion.js'
  },
  {
    title: 'Organic Farming',
    description: 'Encouraging sustainable agriculture with organic and zero-budget farming techniques.',
    icon: '🌱',
    path: '/components/Programs/Pages/OrganicFarming/organicfarming.js'
  },
  {
    title: 'Tissue Culture Labs',
    description: 'Helping individuals overcome addiction through structured de-addiction and rehabilitation programs.',
    icon: '☘️',
    path: '/components/Programs/Pages/TissueCulture/tissueculture.js'
  },
  {
    title: 'Gaushala',
    description: 'A Gentle try to give Cows a Good life by serving them care. Doing Gau Sewa',
    icon: '🐄',
    path: '/components/Programs/Pages/Gaushala/gausahala.js'
  },
];

const Programs = () => {
  return (
    <section className="programs">
      <div className="container">
        <h1 className="heading">Our Programs</h1>
        <div className="program-grid">
          {programsData.map((program, index) => (
            <Link to={program.path} className="program-card" key={index}>
              <div className="program-icon">{program.icon}</div>
              <h2 className="program-title">{program.title}</h2>
              <p className="program-description">{program.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;