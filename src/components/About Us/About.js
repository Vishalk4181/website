import React from 'react';
import Slider from 'react-slick'; // Importing React Slick
import './About.css';

import image1 from '../../assets/images/about1.jpg';
import image2 from '../../assets/images/about2.jpg';
import image3 from '../../assets/images/about3.jpg';
import image4 from '../../assets/images/about4.jpg';
import image5 from '../../assets/images/about5.jpg';
import presidentImage from '../../assets/images/president.jpeg';

const AboutUs = () => {
  // Settings for the React Slick carousel
  const carouselSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 3000, // Time in milliseconds between slides
    arrows: true, // Enable navigation arrows
  };

  return (
    <section className="about-us">
      <div className="container">
        <div className="header-section">
          <h1 className="heading">About Us</h1>
          <div className="president-section">
            <img src={presidentImage} alt="President Pawan Jindal" className="president-image" />
            <p className="president-caption"><strong>President: Pawan Jindal</strong></p>
          </div>
        </div>

        <p className="intro-paragraph">
          भारत की 70% आबादी गांव व में निवास करती हैं। आजादी के 77 वर्ष पूरे होने के बाद भी आज जब देश के गांव को देखते हैं तो ध्यान में आता है कि गांव में रहने वाला समाज आज भी मूलभूत सुविधाओं से वंचित है। इस विषय को ध्यान करते हुए श्री माधव जन सेवा न्यास ने विचार किया है कि देश के विकास के लिए शहर के साथ-साथ गांव का भी विकास करना होगा। इस न्यास के द्वारा अस्पताल, पुस्तकालय, विशाल खेल परिसर, कौशल विकास केंद्र, योग व साधना केंद्र, जैविक जीरो बजट खेती, प्राकृतिक चिकित्सा केंद्र, न्याय चौपाल, गऊशाला, मशरूम प्लांट,  नेचुरोपैथी इत्यादि संचालित हो रहे हैं। इन प्रकल्पों के माध्यम से यहां हम एक और अच्छे खिलाड़ी व प्रतीभावान नागरिक तैयार कर पाएंगे, वहीं दूसरी और बेरोजगार युवाओं को विभिन्न कार्यों का प्रशिक्षण देकर उन्हें अपने पैरों पर खड़ा कर सकेंगे । ष्थनेकता में एकता - भारत की विशेषताहर समय रही है, इसको मजबूत करने के लिए सामाजिक सद्भाव पैदा हो इसके लिए संस्कार युक्त सामाजिक कार्यक्रम करना है।
        </p>

        <p className="intro-paragraph">
          About 70% of India's population resides in villages. Even after 77 years of independence, when we look at rural areas, we realize that village communities still lack basic amenities. Keeping this in mind, Shri Madhav Jan Seva Nyas has envisioned that for the nation's development, both urban and rural areas must progress together. The trust operates hospitals, libraries, vast sports complexes, skill development centers, yoga and meditation centers, organic zero-budget farming, naturopathy centers, judicial forums, gaushalas, mushroom plants, and other initiatives. Through these projects, we aim to nurture talented athletes and responsible citizens while also equipping unemployed youth with various skills to help them become self-reliant. Unity in diversity has always been India's strength, and to reinforce this, we conduct cultural and social programs that promote harmony and values.
        </p>

        <div className="carousel-section">
          <Slider {...carouselSettings}>
            <div>
              <img src={image1} alt="Slide 1" className="carousel-image" />
            </div>
            <div>
              <img src={image2} alt="Slide 2" className="carousel-image" />
            </div>
            <div>
              <img src={image3} alt="Slide 3" className="carousel-image" />
            </div>
            <div>
              <img src={image4} alt="Slide 4" className="carousel-image" />
            </div>
            <div>
              <img src={image5} alt="Slide 5" className="carousel-image" />
            </div>
          </Slider>
        </div>

        <h2 className="sub-heading">नवरचना प्रकल्प परिसर एक नजर में</h2>
        <div className="project-points-container">
  <div className="project-points-column">
    <ul>
      <li>लगभग 24 एकड़ भूमि में फैला विशाल सेवा परिसर</li>
      <li>2000 से अधिक प्रतिनिधियों (Delegates) के ठहरने के लिए वातानुकूलित आवास</li>
      <li>स्थानीय व वैश्विक स्तर के कार्यक्रम से संबंधित समाचार एवं विश्लेषण हेतु मल्टीमीडिया केंद्र</li>
      <li>400 प्रतिनिधि की क्षमता वाला अत्याधुनिक विश्वस्तरीय सभागार</li>
      <li>चिकित्सा जरूरत को पूरा करने के लिए एंबुलेंस सहित प्राथमिक स्वास्थ्य केंद्र</li>
      <li>प्रार्थना करने के लिए पूजागृह एवं ध्यान (Meditation) केंद्र</li>
      <li>ज्ञान संवर्धन हेतु पत्रिकाओं से संपन्न पुस्तकालय</li>
      <li>वातावरण को सुरुचिपूर्ण बनाने के लिए ऊर्जा कुशल एलईडी, प्रकाश व्यवस्था और और जल संचय प्रणाली</li>
      <li>जल संरक्षण एवं रीसाइकलिंग के लिए एसटीपी और आरओ जल प्लांट</li>
    </ul>
  </div>

  <div className="project-points-column">
    <ul>
      <li>छत पर उपलब्ध सौर ऊर्जा पैनल द्वारा स्व-उत्पादन</li>
      <li>उन्नत एचबीएसई प्रणाली के साथ वातानुकूलित आंतरिक भाग</li>
      <li>दिव्यांगजनों के लिए सेंसरयुक्त एस्केलेटर एवं एलिवेटर</li>
      <li>कौशल विकास हेतु अनुसंधान एवं प्रशिक्षण केंद्र</li>
      <li>1000 से अधिक वाहनों के लिए पाकिंग की सुविधा</li>
      <li>आधुनिक उपकरणों से सुसज्जित रसोई घर व भोजनालय</li>
      <li>विशाल प्रदर्शनी हाल</li>
      <li>खेल मैदान एवं शारीरिक व्यायाम केंद्र</li>
      <li>सीसीटीवी कैमरा व आधुनिक सुरक्षा परिसर</li>
      <li>ग्राम विकास अनुसंधान केंद्र</li>
    </ul>
  </div>
</div>

      </div>
    </section>
  );
};

export default AboutUs;