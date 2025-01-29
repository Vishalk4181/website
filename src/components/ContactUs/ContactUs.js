import React from "react";
import "../ContactUs/Contactus.css";

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Heading */}
      <div className="heading">
        <h1>Contact Us</h1>
      </div>

      {/* Address Section */}
      <div className="address-section">
        <h2>Our Address</h2>
        <p>
          69TH KM stone, Delhi-Ambala highway, Village Pattikayana, Samalkha,
          Panipat, Haryana, 132103
        </p>
        <p>
          <strong>Email:</strong> shrimadhavjansewa@gmail.com
        </p>
        <p>
          <strong>Phone: +91 9779586559 & 8199997001</strong>
        </p>
      </div>

      {/* Additional Information */}
      <div className="additional-info">
        <h2>Office Hours</h2>
        <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
        <p>Sunday: Closed</p>
      </div>

      {/* Course Inquiries */}
      <div className="course-inquiries">
        <h2>Course Inquiries</h2>
        <p>
          For any questions related to our courses, please fill out the form
          below, and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form Container */}
      {/* <div className="form-container">
        <form>
          <h2>Get in Touch</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="5" required></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div> */}
    </div>
  );
};

export default ContactUs;
