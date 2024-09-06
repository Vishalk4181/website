import React from 'react';
import './News_Events.css';

const News_Events = () => {
  return (
    <section className="news-events">
      <div className="container">
        <h2 className="news-events-heading">News & Events</h2>
        <div className="news-events-list">
          <NewsEvent 
            title="Village Education Initiative Launched" 
            date="August 2024" 
            content="We are excited to announce the launch of our Village Education Initiative, aimed at improving educational facilities and resources in rural areas. This initiative will support over 1,000 students with new textbooks, school supplies, and enhanced learning environments..."
          />
          <NewsEvent 
            title="Healthcare Outreach Program Success" 
            date="July 2024" 
            content="Our recent Healthcare Outreach Program provided essential medical services and health education to underserved communities. Over 300 individuals received free check-ups, vaccinations, and health consultations..."
          />
          <NewsEvent 
            title="Community Clean-Up Drive" 
            date="June 2024" 
            content="In our commitment to environmental sustainability, we organized a Community Clean-Up Drive. Volunteers from across the region came together to clean up local parks and streets, significantly improving the area’s cleanliness and beauty..."
          />
        </div>
      </div>
    </section>
  );
};

const NewsEvent = ({ title, date, content }) => (
  <div className="news-event">
    <h3 className="news-event-title">{title}</h3>
    <p className="news-event-date">{date}</p>
    <p className="news-event-content">{content}</p>
  </div>
);

export default News_Events;
