import React from 'react';
import Slider from 'react-slick'; // Importing React Slick
import './About.css';

import image1 from '../../assets/images/about1.jpg';
import image2 from '../../assets/images/about2.jpg';
import image3 from '../../assets/images/about3.jpg';
import image4 from '../../assets/images/about4.jpg';
import image5 from '../../assets/images/about5.jpg';
import presidentImage from '../../assets/images/president.jpeg';

const AboutUs = () => {
  // Settings for the React Slick carousel
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
    <section className="about-us">
      <div className="container">
        <div className="header-section">
          <h1 className="heading">About Us</h1>
          <div className="president-section">
            <img src={presidentImage} alt="President Pawan Jindal" className="president-image" />
            <p className="president-caption"><strong>President: Pawan Jindal</strong></p>
          </div>
        </div>

        <p className="intro-paragraph">
          70% of India's population lives in villages. Even after the completion of 77 years of independence, when we look at the villages of the country, it comes to mind that the society living in villages is still deprived of basic facilities. Considering this topic, <strong>"Shri Madhav Jan Seva Nyas"</strong> thought that for the development of the country, along with the city, villages will also have to be developed. Projects like hospitals, libraries, huge sports complexes, skill development centres, yoga and meditation centres, organic and zero-budget farming, drug de-addiction, and Nyaya Chaupal will be run by this Nyas. Through these projects, on one hand, we will be able to prepare good players and talented citizens, on the other hand, we will be able to put unemployed youth on their feet by training them in various tasks. "Unity in diversity - the specialty of India" has been there all the time, to strengthen it, to create social harmony by organizing cultured social programs.
          India has been guiding the world in all spheres of social life since ancient times. To achieve this goal that our country once again continues the same glorious tradition and sits on the throne of the world leader, your cooperation is needed to implement all the above-mentioned tasks. This work is a project done by the society, for the society, with the cooperation of the society. For this, the Trust calls upon all the workers and members of social and religious organizations across the province to fulfill their national duty by sacrificing themselves in this yagya being conducted for the welfare of humanity. Due to the provincial scheme, local friends have come to you with the expectation of cooperation. Sewa Sadhana and Village Development Center will be very grateful to you for your cooperation.
        </p>

        <div className="carousel-section">
          <Slider {...carouselSettings}>
            <div>
              <img src={image1} alt="Slide 1" className="carousel-image" />
            </div>
            <div>
              <img src={image2} alt="Slide 2" className="carousel-image" />
            </div>
            <div>
              <img src={image3} alt="Slide 3" className="carousel-image" />
            </div>
            <div>
              <img src={image4} alt="Slide 4" className="carousel-image" />
            </div>
            <div>
              <img src={image5} alt="Slide 5" className="carousel-image" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;