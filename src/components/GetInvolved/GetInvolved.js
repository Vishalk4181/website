import React from 'react';
import './GetInvolved.css';

const Get_Involved = () => {
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
      </div>
    </section>
  );
};

export default Get_Involved;
