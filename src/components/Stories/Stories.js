import React from 'react';
import './Stories.css';

const Stories = () => {
  return (
    <section className="stories">
      <div className="container">
        <h2 className="stories-heading">Stories</h2>
        <div className="story-list">
          <Story 
            title="Empowering Youth through Skill Development" 
            date="August 2024" 
            content="This story highlights the success of our skill development programs in transforming the lives of young individuals in rural areas..."
          />
          <Story 
            title="Transforming Communities with Health Initiatives" 
            date="July 2024" 
            content="Discover how our health initiatives are making a difference in rural communities by providing essential medical facilities and education..."
          />
          {/* Add more stories as needed */}
        </div>
      </div>
    </section>
  );
};

const Story = ({ title, date, content }) => (
  <div className="story">
    <h3 className="story-title">{title}</h3>
    <p className="story-date">{date}</p>
    <p className="story-content">{content}</p>
  </div>
);

export default Stories;
