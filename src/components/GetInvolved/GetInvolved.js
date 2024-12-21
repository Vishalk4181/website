import React from 'react';
import './GetInvolved.css';
import Slider from 'react-slick';

import Involved1 from '../../assets/images/Involved1.jpg'
import Involved2 from '../../assets/images/Involved2.jpg'
import Involved3 from '../../assets/images/Involved3.jpg'
import Involved4 from '../../assets/images/Involved4.jpg'
import Involved5 from '../../assets/images/Involved5.jpg'

const Get_Involved = () => {
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
    <section className="get-involved">
      <div className="container">
        <h2 className="get-involved-heading">Get Involved</h2>
        <div className="get-involved-content">
          <p>
            Are you passionate about making a difference in your community? There are many ways you can get involved and contribute to our mission. Whether you're interested in volunteering your time, making a donation, or partnering with us for a project, your support can make a significant impact.
          </p>
          <div className="get-involved-options">
            <div className="get-involved-option">
              <h3>Volunteer</h3>
              <p>Join our team of dedicated volunteers and help us with various activities and programs. Your time and effort can make a real difference in our community.</p>
            </div>
            <div className="get-involved-option">
              <h3>Donate</h3>
              <p>Your generous donations support our projects and initiatives. Every contribution helps us provide resources and services to those in need.</p>
            </div>
            <div className="get-involved-option">
              <h3>Partner with Us</h3>
              <p>We welcome partnerships with individuals and organizations who share our vision. Collaborate with us on projects and help us achieve our goals more effectively.</p>
            </div>
          </div>
        </div>
        <div className="carousel-section">
          <Slider {...carouselSettings}>
            <div>
              <img src={Involved1} alt="Slide 1" className="carousel-image" />
            </div>
            <div>
              <img src={Involved2} alt="Slide 2" className="carousel-image" />
            </div>
            <div>
              <img src={Involved3} alt="Slide 3" className="carousel-image" />
            </div>
            <div>
              <img src={Involved4} alt="Slide 4" className="carousel-image" />
            </div>
            <div>
              <img src={Involved5} alt="Slide 5" className="carousel-image" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Get_Involved;
