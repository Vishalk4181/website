import React from 'react';
import './News_Events.css';
import Slider from 'react-slick';

import News1 from '../../assets/images/News1.jpg'
import News2 from '../../assets/images/News2.jpg'
import News3 from '../../assets/images/News3.jpg'
import News4 from '../../assets/images/News4.jpg'
import News5 from '../../assets/images/News5.jpg'



const News_Events = () => {
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
        <div className="carousel-section">
          <Slider {...carouselSettings}>
            <div>
              <img src={News1} alt="Slide 1" className="carousel-image" />
            </div>
            <div>
              <img src={News2} alt="Slide 2" className="carousel-image" />
            </div>
            <div>
              <img src={News3} alt="Slide 3" className="carousel-image" />
            </div>
            <div>
              <img src={News4} alt="Slide 4" className="carousel-image" />
            </div>
            <div>
              <img src={News5} alt="Slide 5" className="carousel-image" />
            </div>
          </Slider>
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
