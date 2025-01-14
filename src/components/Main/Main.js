import React from 'react';
import Slider from 'react-slick';
import '../Main/Main.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
];

const Main = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div>
            <div className="main">
                <div className="background-image"></div>
                <div className="overlay"></div>
                <div className="carousel-container">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Slide ${index}`} className="carousel-image" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="navigation-table-container">
                <table className="navigation-table">
                    <thead>
                        <tr>
                            <th>Topic</th>
                            <th>Description</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        <tr>
                            <td>Form of Skill Development</td>
                            <td>Learn more about skill development forms offered at our center.</td>
                            <td>
                                <Link to="/skill-development-form">Go to Form</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Programs</td>
                            <td>Explore the programs we offer for personal and professional growth.</td>
                            <td>
                                <Link to="/programs">View Programs</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>About Us</td>
                            <td>Learn more about Shri Madhav Jan Sewa Nyas and our initiatives.</td>
                            <td>
                                <Link to="/about">About Us</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Gaushala</td>
                            <td>Discover our Gaushala initiative and how it supports the community.</td>
                            <td>
                                <Link to="/gaushala">Visit Gaushala</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Contact Us</td>
                            <td>Get in touch with us for inquiries or assistance.</td>
                            <td>
                                <Link to="/contact">Contact Us</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <section className="background-purpose">
                <div className="section-container">
                    <img src={logo} alt="Background" />
                    <div className="section-content">
                        <h2>Background & Purpose</h2>
                        <p>
                            <strong>Shri Madhav Jan Sewa Nyas (SMJSN)</strong>, having its main campus at
                            6246+H38, Patti Kalyana, Samalkha, Haryana is desirous of establishing Advanced
                            Skill Development Center at its flagship campus with overall vision of providing
                            unemployed & unskilled youth with hands-on, industry-oriented training, further
                            education, and placement opportunities that will help shape their careers and future
                            through jobs and self-employment.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray" }}
            onClick={onClick}
        />
    );
}

export default Main;