import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';
import logo from '../../assets/images/logo.png';

const NavBar = () => {
    return (
        <header className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Shri Madhav Jan Sewa Nyas" className="logo" />
                </Link>
                <div className="text-container">
                    <h1>Shri Madhav Jan Sewa Nyas</h1>
                    <p>Center Of Education, Skills & Career Advancement (CESCA)</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/programs">Programs</Link></li>
                    <li><Link to="/stories">Stories</Link></li>
                    <li><Link to="/news_events">News & Events</Link></li>   
                    <li><Link to="/getinvolved">Get Involved</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/donateus">Donate Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;