import React from 'react';
import './Programs.css';

const programsData = [
  {
    title: 'Hospital and Healthcare',
    description: 'Providing essential healthcare facilities to the rural population with modern medical equipment and services.',
    icon: '🏥', // You can use FontAwesome or other icon libraries for more stylized icons
  },
  {
    title: 'Skill Development Center',
    description: 'Empowering youth with the skills needed for employment through comprehensive training programs.',
    icon: '🎓',
  },
  {
    title: 'Yoga and Meditation Center',
    description: 'Promoting physical and mental well-being through yoga and meditation classes for all age groups.',
    icon: '🧘‍♂️',
  },
  {
    title: 'Organic Farming',
    description: 'Encouraging sustainable agriculture with organic and zero-budget farming techniques.',
    icon: '🌱',
  },
  {
    title: 'Sports Complex',
    description: 'Developing young athletes with state-of-the-art sports facilities and training programs.',
    icon: '⚽',
  },
  {
    title: 'Drug De-addiction Programs',
    description: 'Helping individuals overcome addiction through structured de-addiction and rehabilitation programs.',
    icon: '🚭',
  },
];

const Programs = () => {
  return (
    <section className="programs">
      <div className="container">
        <h1 className="heading">Our Programs</h1>
        <div className="program-grid">
          {programsData.map((program, index) => (
            <div className="program-card" key={index}>
              <div className="program-icon">{program.icon}</div>
              <h2 className="program-title">{program.title}</h2>
              <p className="program-description">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;