import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
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

           

            <section className="operating-model">
                <h2>Operating Model Proposed</h2>
                <p className="intro">Our operating model is designed to drive efficiency, foster innovation, and ensure excellence in every aspect of our operations.</p>
                <div className="operating-sections">
                    <div className="operating-sector">
                        <div className="operating-header">
                            <h3>Build</h3>
                        </div>
                        <div className="operating-details">
                        <Link to="/build"><div className="operating-item">
                                <p>15 sq ft of existing building to be repurposed for a skill center with labs, classrooms & workshops.</p>
                            </div></Link>
                        </div>
                    </div>
                    <div className="operating-sector">
                        <div className="operating-header">
                            <h3>Operate</h3>
                        </div>
                        <div className="operating-details">
                        <Link to="/operate"><div className="operating-item">
                                <p>Institute to be setup as a section 8, not for profit. Company and Management team to be recruited/deployed from CUTM.</p>
                            </div></Link>
                        </div>
                    </div>
                    <div className="operating-sector">
                        <div className="operating-header">
                            <h3>Assist</h3>
                        </div>
                        <div className="operating-details">
                        <Link to="/assist"><div className="operating-item">
                                <p>CUTM to move onto pure advisory role by year 3 and provide strategic inputs for new sectors/courses introduction.</p>
                            </div></Link>
                        </div>
                    </div>
                    <div className="operating-sector">
                        <div className="operating-header">
                            <h3>Transfer</h3>
                        </div>
                        <div className="operating-details">
                        <Link to="/transfer"><div className="operating-item">
                                <p>Trainers, counselors, Center heads & Management team to be mentored by CUTM and be independent by year 2.</p>
                            </div></Link>
                        </div>
                    </div>
                </div>
            </section>




            <section className="sustainable-development">
                <h2>Sustainable Development Goals</h2>
                <p>Transforming lives through sustainable solutions.</p>
                <div className="sustainable-sections">
                    <div className="sustainable-sector">
                    <div className="sustainable-header">
                            <h3>No Poverty</h3>
                        </div>
                        <Link to="/nopoverty"><div className="goal-details">
                            <p className="goal-description">End poverty in all its forms everywhere.</p>
                            <div className="goal-stats">
                                <div className="goal-stat">
                                    <p><span>Targets:</span> 7</p>
                                    <p><span>Publications:</span> 49</p>
                                </div>
                                <div className="goal-stat">
                                    <p><span>Events:</span> 119</p>
                                    <p><span>Actions:</span> 1438</p>
                                </div>
                            </div>
                            
                        </div></Link>
                    </div>
                    <div className="sustainable-sector">
                    <div className="sustainable-header">
                            <h3>Zero Hunger</h3>
                        </div>
                        <Link to="/zerohunger"><div className="goal-details">
                            <p className="goal-description">End hunger, achieve food security and improved nutrition and promote sustainable agriculture.</p>
                            <div className="goal-stats">
                                <div className="goal-stat">
                                    <p><span>Targets:</span> 8</p>
                                    <p><span>Publications:</span> 17</p>
                                </div>
                                <div className="goal-stat">
                                    <p><span>Events:</span> 104</p>
                                    <p><span>Actions:</span> 1372</p>
                                </div>
                            </div>
                        </div></Link>
                    </div>
                    <div className="sustainable-sector">
                    <div className="sustainable-header">
                            <h3>Good Health & Well-Being</h3>
                        </div>
                        <Link to="/goodhealth"><div className="goal-details">
                            <p className="goal-description">Ensure healthy life and promote well-being for all at all ages.</p>
                            <div className="goal-stats">
                                <div className="goal-stat">
                                    <p><span>Targets:</span> 13</p>
                                    <p><span>Publications:</span> 47</p>
                                </div>
                                <div className="goal-stat">
                                    <p><span>Events:</span> 48</p>
                                    <p><span>Actions:</span> 1288</p>
                                </div>
                            </div>
                        </div></Link>
                    </div>
                    <div className="sustainable-sector">
                    <div className="sustainable-header">
                            <h3>Quality Education</h3>
                        </div>
                        <Link to="/qualityeducation"><div className="goal-details">
                            <p className="goal-description">Ensure quality education for all children.</p>
                            <div className="goal-stats">
                                <div className="goal-stat">
                                    <p><span>Targets:</span> 10</p>
                                    <p><span>Publications:</span> 11</p>
                                </div>
                                <div className="goal-stat">
                                    <p><span>Events:</span> 60</p>
                                    <p><span>Actions:</span> 1822</p>
                                </div>
                            </div>
                        </div></Link>
                    </div>
                    <div className="sustainable-sector">
                    <div className="sustainable-header">
                            <h3>Gender Equality</h3>
                        </div>
                        <Link to="/genderequality"><div className="goal-details">
                            <p className="goal-description">Achieve gender equality and empower all women and girls.</p>
                            <div className="goal-stats">
                                <div className="goal-stat">
                                    <p><span>Targets:</span> 9</p>
                                    <p><span>Publications:</span> 46</p>
                                </div>
                                <div className="goal-stat">
                                    <p><span>Events:</span> 81</p>
                                    <p><span>Actions:</span> 1664</p>
                                </div>
                            </div>
                        </div></Link>
                    </div>
                    <div className="sustainable-sector">
                    <div className="sustainable-header">
                            <h3>Affordable and Clean Energy</h3>
                        </div>
                        <Link to="/cleanenergy"><div className="goal-details">
                            <p className="goal-description">Ensure access to affordable, reliable, sustainable, and modern energy for all.</p>
                            <div className="goal-stats">
                                <div className="goal-stat">
                                    <p><span>Targets:</span> 5</p>
                                    <p><span>Publications:</span> 45</p>
                                </div>
                                <div className="goal-stat">
                                    <p><span>Events:</span> 77</p>
                                    <p><span>Actions:</span> 1047</p>
                                </div>
                            </div>
                        </div></Link>
                    </div>
                    <div className="sustainable-sector">
                    <div className="sustainable-header">
                            <h3>Industry Innovation and Infrastructure</h3>
                        </div>
                        <Link to="/industryinnovation"><div className="goal-details">
                            <p className="goal-description">Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.</p>
                            <div className="goal-stats">
                                <div className="goal-stat">
                                    <p><span>Targets:</span> 8</p>
                                    <p><span>Publications:</span> 17</p>
                                </div>
                                <div className="goal-stat">
                                    <p><span>Events:</span> 104</p>
                                    <p><span>Actions:</span> 1044</p>
                                </div>
                            </div>
                        </div></Link>
                    </div>
                    <div className="sustainable-sector">
                    <div className="sustainable-header">
                            <h3>Reduce Inequalities</h3>
                        </div>
                        <Link to="/reduceinequalities"><div className="goal-details">
                            <p className="goal-description">Reduce inequality within and among countries.</p>
                            <div className="goal-stats">
                                <div className="goal-stat">
                                    <p><span>Targets:</span> 10</p>
                                    <p><span>Publications:</span> 14</p>
                                </div>
                                <div className="goal-stat">
                                    <p><span>Events:</span> 82</p>
                                    <p><span>Actions:</span> 994</p>
                                </div>
                            </div>
                        </div></Link>
                    </div>
                    <div className="sustainable-sector">
                    <div className="sustainable-header">
                            <h3>Life Below Water</h3>
                        </div>
                        <Link to="/lifebelowwater"><div className="goal-details">
                            <p className="goal-description">Conserve and sustainably use the oceans, seas, and marine resources for sustainable development.</p>
                            <div className="goal-stats">
                                <div className="goal-stat">
                                    <p><span>Targets:</span> 10</p>
                                    <p><span>Publications:</span> 42</p>
                                </div>
                                <div className="goal-stat">
                                    <p><span>Events:</span> 102</p>
                                    <p><span>Actions:</span> 2858</p>
                                </div>
                            </div>
                        </div></Link>
                    </div>
                    <div className="sustainable-sector">
                    <div className="sustainable-header">
                            <h3>Life On Land</h3>
                        </div>
                        <Link to="/lifeonland"><div className="goal-details">
                            <p className="goal-description">Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt.</p>
                            <div className="goal-stats">
                                <div className="goal-stat">
                                    <p><span>Targets:</span> 12</p>
                                    <p><span>Publications:</span> 34</p>
                                </div>
                                <div className="goal-stat">
                                    <p><span>Events:</span> 47</p>
                                    <p><span>Actions:</span> 1318</p>
                                </div>
                            </div>
                         </div></Link>
                    </div>
                </div>
            </section>
            <section className="background-purpose">
                <div className="section-container">
                    <img src={logo} alt="Background" />
                    <div className="section-content">
                        <h2>Background & Purpose</h2>
                        <p><strong>Shri Madhav Jan Sewa Nyas (SMJSN)</strong>, having its main campus at 6246+H38, Patti Kalyana, Samalkha, Haryana is desirous of establishing Advanced    Skill Development Center at its flagship campus with overall vision of providing unemployed & unskilled youth with hands-on, industry-oriented training, further education, and placement opportunities that will help shape their careers and future through jobs and self-employment.</p>
                        <p><strong>Centurion University of Technology & Management (CUTM)</strong>, a NAAC A+ accredited state-enacted private university of Odisha established by state legislation (Orissa Act 4 of 2010), having its principal campus at Plot No.136/137 Ramchandrapur, Jatni, Khurda, Odisha, and having developed extensive expertise in skill development & skill-integrated higher education with the following credentials:</p>
                        <ul>
                            <li>UGC notified & NAAC A+ Grade accredited University and an innovation partner of National Skill Development Corporation.</li>
                            <li>Gazette Notified as a Skills University of Odisha by Govt. of Odisha in 2017,</li>
                            <li>Gazette Notified as a Center of Excellence by the Ministry of Skill Development & Entrepreneurship, Govt, of India, and</li>
                            <li>A partner of DCT, MSDE under Flexi MoU program for high employment potential courses, Accredited with Awarding body status National Council for Vocational Education & Training (NCVET) for assessing & certifying QP NOS-linked NSQF aligned skill courses.</li>
                            <li>Strong track record of training & placements having skilled over 500,000 youth through its social outreach, Gram Tarang, and extensive industry partnerships with over 200 industry partners.</li>
                        </ul>
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