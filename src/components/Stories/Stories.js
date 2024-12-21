import React from 'react';
import './Stories.css';
import Slider from 'react-slick';

import Stories1 from '../../assets/images/Stories1.jpg'
import Stories2 from '../../assets/images/Stories2.jpg'
import Stories3 from '../../assets/images/Stories3.jpg'
import Stories4 from '../../assets/images/Stories4.jpg'
import Stories5 from '../../assets/images/Stories5.jpg'



const Stories = () => {
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
        <div className="carousel-section">
          <Slider {...carouselSettings}>
            <div>
              <img src={Stories1} alt="Slide 1" className="carousel-image" />
            </div>
            <div>
              <img src={Stories2} alt="Slide 2" className="carousel-image" />
            </div>
            <div>
              <img src={Stories3} alt="Slide 3" className="carousel-image" />
            </div>
            <div>
              <img src={Stories4} alt="Slide 4" className="carousel-image" />
            </div>
            <div>
              <img src={Stories5} alt="Slide 5" className="carousel-image" />
            </div>
          </Slider>
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
