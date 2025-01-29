import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';
import logo from '../../assets/images/logo.png';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Shri Madhav Jan Sewa Nyas" className="logo" />
                </Link>
                <div className="text-container">
                
                    <h1>Shri Madhav Jan Sewa Nyas</h1>
                    <p> Sewa Sadhana & Jan Vikas Kendra (S.S.K)</p>
                </div>
                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
            <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
                    <li><Link to="/programs" onClick={toggleMenu}>Programs</Link></li>
                    <li><Link to="/stories" onClick={toggleMenu}>Stories</Link></li>
                    <li><Link to="/news_events" onClick={toggleMenu}>News & Events</Link></li>
                    <li><Link to="/getinvolved" onClick={toggleMenu}>Get Involved</Link></li>
                    <li><Link to="/contactus" onClick={toggleMenu}>Contact Us</Link></li>
                    {/* <li><Link to="/donateus" onClick={toggleMenu}>Donate Us</Link></li> */}
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;