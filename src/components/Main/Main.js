import React from 'react';
import Slider from 'react-slick';
import '../Main/Main.css';
import logo from '../../assets/images/logo.png';

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
        prevArrow: <SamplePrevArrow />
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

            <section className="background-purpose">
                <div className="section-container">
                    <img src={logo} alt="Background" />
                     <div className="section-content">
                        <h2>Background & Purpose</h2>
                        <p><strong>Shri Madhav Jan Sewa Nyas (SMJSN)</strong>, having its main campus at 6246+H38, Patti Kalyana, Samalkha, Haryana is desirous of establishing Advanced    Skill Development Center at its flagship campus with overall vision of providing unemployed & unskilled youth with hands-on, industry-oriented training, further education, and placement opportunities that will help shape their careers and future through jobs and self-employment.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}


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