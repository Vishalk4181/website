import React from 'react';
import '../Footer/Footer.css';
import logo from '../../assets/images/logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                    <h2>Shri Madhav Jan Seva Nyas</h2>
                    <p className="footer-description">
                        Center Of Education, Skills & Career Advancement (CESCA)
                    </p>
                </div>
                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/programs">Programs</a>
                    <a href="/stories">Stories</a>
                    <a href="/news">News & Events</a>
                    <a href="/get-involved">Get Involved</a>
                    <a href="/contact">Contact Us</a>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Shri Madhav Jan Seva Nyas. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
