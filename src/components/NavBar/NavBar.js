import React from 'react';
import '../NavBar/NavBar.css';
import logo from '../../assets/images/logo.png';

const NavBar = () => {
    return (
        <header className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Shri Madhav Jan Seva Nyas" className="logo" />
                <div className="text-container">
                    <h1>Shri Madhav Jan Seva Nyas</h1>
                    <p>Center Of Education, Skills & Career Advancement (CESCA)</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/programs">Programs</a></li>
                    <li><a href="/stories">Stories</a></li>
                    <li><a href="/news_events">News & Events</a></li>
                    <li><a href="/getinvolved">Get Involved</a></li>
                    <li><a href="/contactus">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
