import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.css";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const carouselImages = [
    { id: 1, src: "/images/image1.jpg", alt: "Image 1" },
    { id: 2, src: "/images/image2.jpg", alt: "Image 2" },
    { id: 3, src: "/images/image3.jpg", alt: "Image 3" },
    { id: 4, src: "/images/image4.jpg", alt: "Image 4" },
    { id: 5, src: "/images/image5.jpg", alt: "Image 5" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="main-page">
      {/* 🔹 Carousel Section */}
      <div className="carousel-container">
        <Slider {...settings}>
          {carouselImages.map((image) => (
            <div key={image.id} className="carousel-slide">
              <img src={image.src} alt={image.alt} className="carousel-image" />
            </div>
          ))}
        </Slider>
      </div>

      {/* 🔹 Intro Section */}
      <div className="intro-section">
        <h1 className="intro-heading">श्री माधव जन सेवा न्यास</h1>
        <p className="intro-description">
          <strong>श्री माधव जन सेवा न्यास</strong> एक समर्पित संसथा है जो समुदायों के उत्थान और विभिन्न महत्वपूर्ण क्षेत्रों में देश की प्रगति में योगदान देने पर केंद्रित है। न्यास स्वास्थ्य देखभाल, शिक्षा, कृषि, खेल और सामाजिक कल्याण जैसे क्षेत्रों में आवश्यक संसाधन और सहायता प्रदान करने में सक्रिय रूप से शामिल है। 
          अस्पतालों, स्कूलों और कौशल विकास केंद्रों की स्थापना करके, इसका उद्देश्य ग्रामीण और वंचित क्षेत्रों में व्यक्तियों की भलाई में सुधार करना है, जिससे समाज के समग्र विकास में योगदान दिया जा सके। जैविक खेती, खेल परिसरों और नशीली दवाओं के पुनर्वास कार्यक्रमों जैसी पहलों के माध्यम से, श्री माधव जन सेवा न्यास समग्र विकास को बढ़ावा देता है, व्यक्तियों को स्वस्थ और अधिक समृद्ध जीवन जीने के लिए सशक्त बनाता है। 
          एकता और सहयोग की भावना को बढ़ावा देकर यह संगठन सामाजिक सद्भाव को मजबूत करने, आर्थिक स्थिति में सुधार लाने और विविध क्षेत्रों में देश की प्रगति को आगे बढ़ाने में महत्वपूर्ण भूमिका निभाता है।
        </p>
      </div>

      {/* 🔹 Navigation Table Section */}
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
                <a href="/components/Programs/Pages/SkillDevelopment/skilldevelopment.js">
                  Admission Form
                </a>
              </td>
            </tr>
            <tr>
              <td>Programs</td>
              <td>Explore the programs we offer for personal and professional growth.</td>
              <td>
                <a href="/programs">Programs</a>
              </td>
            </tr>
            <tr>
              <td>About Us</td>
              <td>Learn more about Shri Madhav Jan Sewa Nyas and our initiatives.</td>
              <td>
                <a href="/about">About Us</a>
              </td>
            </tr>
            <tr>
              <td>Contact Us</td>
              <td>Get in touch with us for inquiries or assistance.</td>
              <td>
                <a href="/contactus">Contact Us</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 🔹 Background and Purpose Section */}
      <section className="background-purpose">
        <div className="section-container">
          <img src={logo} alt="Background" className="section-image" />
          <div className="section-content">
            <h2>Background & Purpose</h2>
            <p>
              <strong>Shri Madhav Jan Sewa Nyas (SMJSN)</strong>, having its main
              campus at 6246+H38, Patti Kalyana, Samalkha, Haryana, is desirous of
              establishing an Advanced Skill Development Center at its flagship
              campus to provide unemployed & unskilled youth with hands-on,
              industry-oriented training, further education, and placement
              opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Custom Arrows for Carousel
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