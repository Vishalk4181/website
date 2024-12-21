import React from 'react';
import './hospitalhealthcare.css';
import Slider from 'react-slick';


import Hospital1 from '../../../../assets/images/Hospital1.jpg' 
import Hospital2 from '../../../../assets/images/Hospital2.jpg'
import Hospital3 from '../../../../assets/images/Hospital3.jpg'
import Hospital4 from '../../../../assets/images/Hospital4.jpg'
import Hospital5 from '../../../../assets/images/Hospital5.jpg'



const HospitalHealthcare = () => {
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
    <div className="hospital-container">
      <h1 className="hospital-heading">Hospital & Healthcare Services</h1>

      <section className="hospital-section">
        <h2>Our Mission</h2>
        <h3>Providing Quality Healthcare</h3>
        <ul>
          <li>Dedicated to offering comprehensive and compassionate medical care to our community.</li>
          <li>Focus on patient-centered services with a commitment to health and wellness.</li>
        </ul>
      </section>

      <section className="hospital-section">
        <h2>About Our Doctors</h2>
        <h3>Experienced Medical Professionals</h3>
        <ul>
          <li>Our team includes highly qualified doctors with expertise across various medical specialties.</li>
        </ul>

        <h3>Qualifications and Credentials</h3>
        <ul>
          <li>All our doctors hold advanced degrees and certifications from reputable institutions.</li>
          <li>Continuous professional development to stay updated with the latest medical advancements.</li>
        </ul>

        <h3>Patient-Centered Approach</h3>
        <ul>
          <li>Doctors are committed to providing personalized care and building strong doctor-patient relationships.</li>
          <li>Focus on understanding patient needs and delivering effective treatment plans.</li>
        </ul>

        <h3>Meet Our Specialists</h3>
        <ul>
          <li>Introduction to key specialists and their roles within the hospital.</li>
          <li>Highlighting their contributions and areas of expertise.</li>
        </ul>
      </section>

      <section className="hospital-section">
        <h2>Facilities</h2>
        <h3>State-of-the-Art Medical Equipment</h3>
        <ul>
          <li>Equipped with the latest technology for accurate diagnosis and effective treatment.</li>
        </ul>

        <h3>Modern Patient Rooms</h3>
        <ul>
          <li>Comfortable and well-appointed rooms designed for optimal patient care and recovery.</li>
        </ul>

        <h3>Emergency Care</h3>
        <ul>
          <li>24/7 emergency services with quick response times and specialized care teams.</li>
        </ul>
      </section>

      <section className="hospital-section">
        <h2>Medical Services</h2>
        <h3>Specialized Care</h3>
        <ul>
          <li>Expert care in cardiology, oncology, orthopedics, and more.</li>
        </ul>

        <h3>Diagnostic Services</h3>
        <ul>
          <li>Advanced imaging and laboratory tests to support accurate diagnoses and treatment plans.</li>
        </ul>

        <h3>Rehabilitation Services</h3>
        <ul>
          <li>Comprehensive rehabilitation programs to aid in recovery and improve quality of life.</li>
        </ul>
      </section>

      <section className="hospital-section">
        <h2>Medicine</h2>
        <h3>Pharmacy Services</h3>
        <ul>
          <li>In-house pharmacy offering a wide range of medications with expert advice.</li>
        </ul>

        <h3>Prescription Management</h3>
        <ul>
          <li>Support with prescription refills and medication management to ensure patient compliance.</li>
        </ul>

        <h3>Medication Counseling</h3>
        <ul>
          <li>Consultations to discuss medication usage, side effects, and interactions.</li>
        </ul>
      </section>

      <section className="hospital-section">
        <h2>Physiotherapy</h2>
        <h3>Physical Therapy</h3>
        <ul>
          <li>Personalized physical therapy programs to help patients recover from injuries and surgeries.</li>
        </ul>

        <h3>Rehabilitation Exercises</h3>
        <ul>
          <li>Guided exercise programs designed to improve strength, flexibility, and mobility.</li>
        </ul>

        <h3>Post-Surgery Recovery</h3>
        <ul>
          <li>Specialized rehabilitation to support recovery and regain functionality after surgery.</li>
        </ul>
      </section>


      <section className="hospital-section">
        <h2>Patient Support</h2>
        <h3>Patient Advocacy</h3>
        <ul>
          <li>Support services to assist patients and families with navigating the healthcare system.</li>
        </ul>

        <h3>Health Education</h3>
        <ul>
          <li>Educational programs and resources to promote health and preventive care.</li>
        </ul>

        <h3>Community Outreach</h3>
        <ul>
          <li>Programs aimed at improving public health and providing access to essential services.</li>
        </ul>
      </section>

      <section className="hospital-section">
        <h2>In Conclusion</h2>
        <ul>
          <li>Our hospital is committed to delivering high-quality healthcare with a focus on patient-centered care and community well-being.</li>
        </ul>

        <div className="carousel-section">
          <Slider {...carouselSettings}>
            <div>
              <img src={Hospital1} alt="Slide 1" className="carousel-image" />
            </div>
            <div>
              <img src={Hospital2} alt="Slide 2" className="carousel-image" />
            </div>
            <div>
              <img src={Hospital3} alt="Slide 3" className="carousel-image" />
            </div>
            <div>
              <img src={Hospital4} alt="Slide 4" className="carousel-image" />
            </div>
            <div>
              <img src={Hospital5} alt="Slide 5" className="carousel-image" />
            </div>
          </Slider>
        </div>



      </section>
    </div>
  );
};

export default HospitalHealthcare;
