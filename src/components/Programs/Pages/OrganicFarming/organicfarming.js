import React from 'react'; 
import './organicfarming.css';
import Slider from 'react-slick';

import Organic1 from '../../../../assets/images/Organic1.jpg';
import Organic2 from '../../../../assets/images/Organic2.jpg';
import Organic3 from '../../../../assets/images/Organic3.jpg';
import Organic4 from '../../../../assets/images/Organic4.jpg';
import Organic5 from '../../../../assets/images/Organic5.jpg';

const OrganicFarming = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="organic-farming-container">
      <h1 className="organic-farming-heading">Organic Farming: Nurturing Nature</h1>

      <section className="organic-farming-section">
        <h2>Introduction to Organic Farming</h2>
        <p>
          Organic farming is a method of agriculture that emphasizes the use of natural processes and materials
          to enhance soil fertility, promote biodiversity, and produce food in an environmentally friendly manner.
          Unlike conventional farming, which often relies on synthetic chemicals and GMOs, organic farming focuses
          on sustainable practices that support ecosystem health and reduce the impact on the environment.
        </p>
      </section>

      <section className="modern-farming-section">
        <h2>जैविक एवं जीरो बजट खेती</h2>
        <p>
          • 2000 sq mtr के 2 पॉली हाउस (4000 sq mtr)<br/>
          • 2000 sq mtr के 2 नेट हाउस<br/>
          • 3 एकड़ में ड्रिप सिंचाई प्रणाली<br/>
        </p>
        <p>
          जिसमें शिमला मिर्च, टमाटर, खीरा और लिली फूल, ओपन में ब्रोकली, गोभी, मटर, खरबूजा और तरबूज की खेती की जाती है।
        </p>
        <p>
          उद्देश्य: आसपास के गांव के लोगों को आधुनिक खेती के बारे में जानकारी देना तथा युवा वर्ग को समझाना कि खेती अनपढ़ लोगों का कार्य नहीं है। यह पढ़े-लिखे लोगों का कार्य है, और जो कमाई बाहर जाकर नौकरी में कमाते हैं, वह हम अपने खेत में अपने परिवार के साथ रहकर कमा सकते हैं। साथ ही, हम 10 लोगों को रोजगार भी प्रदान कर सकते हैं।
        </p>
      </section>

      <h2 className="what-we-farm-heading">What We Farm</h2>

      <section className="vegetable-section">
        <h3>Mushrooms</h3>
        <p>
        हमारे यहां पर 3 एकड़ में मशरूम प्लांट लगा हुआ है जिसमें उत्पादन, बीज और खाद तीनों चीज बनाई जाती है। उत्पादन रू हमारे यहां पर आठ कमरे हैं जिसमें हमारे कमरे हाई टेक्नोलॉजी से जुड़े हुए हैं। जिसके कारण हमारा उत्पादन अच्छा हो रहा है साथ ही साथ इसकी गुणवता भी बड़ी है।</p>
        <p>खाद रू हमारे यहां पर कंपोस्ट खाद भी बनाई जाती है जिससे हमारी उत्पादन क्षमता में वृद्धि हुई है साथ ही साथ गुणवता भी अधिक बेहतर हुई है </p>
          <p>Mushrooms are a highly nutritious and versatile crop that can be grown in various environments. They are
          rich in vitamins, minerals, and antioxidants. Organic mushroom farming focuses on using natural substrates
          and avoiding synthetic chemicals, ensuring high-quality and chemical-free produce.
        </p>

        <h3>Sugarcane</h3>
        <p>
          Sugarcane is a tropical plant known for its sweet juice, which is processed to produce sugar. Organic
          sugarcane farming involves using natural pest control methods and organic fertilizers to promote healthy
          growth and yield. This approach ensures a sustainable and environmentally friendly sugar production process.
        </p>

        <h3>Peanuts</h3>
        <p>
          Peanuts, or groundnuts, are a protein-rich legume commonly used in various culinary applications. Organic
          peanut farming emphasizes the use of organic compost and natural pest management techniques to grow high-
          quality peanuts without synthetic chemicals. This method improves soil health and produces nutritious nuts.
        </p>

        <h3>Corn</h3>
        <p>
          Corn, also known as maize, is a staple crop used in a wide range of foods and products. Organic corn
          farming practices include crop rotation and organic pest control methods to maintain soil fertility and
          minimize environmental impact. Organic corn production supports sustainable agriculture and produces healthy,
          chemical-free corn.
        </p>

        <h3>Capsicum</h3>
        <p>
          Capsicum, also known as bell pepper, is a colorful and nutrient-rich vegetable. Organic capsicum farming
          involves natural fertilizers and eco-friendly pest management techniques to produce high-quality, chemical-free
          peppers that are rich in vitamins A and C.
        </p>

        <h3>Tomato</h3>
        <p>
          Tomatoes are a widely used vegetable known for their juicy texture and tangy flavor. Organic tomato farming
          utilizes compost, crop rotation, and natural pest deterrents to grow nutritious and pesticide-free tomatoes,
          preserving soil health and enhancing yield quality.
        </p>

        <h3>Cucumber</h3>
        <p>
          Cucumbers are refreshing and hydrating vegetables commonly used in salads. Organic cucumber farming
          promotes the use of natural compost and organic pest control, ensuring chemical-free and crisp cucumbers
          packed with essential nutrients.
        </p>

        <h3>Lily Flower</h3>
        <p>
          Lily flowers are cultivated for their beauty and medicinal properties. Organic lily flower farming
          emphasizes natural fertilizers and pest control methods, resulting in vibrant blooms free from harmful chemicals.
        </p>

        <h3>Broccoli</h3>
        <p>
          Broccoli is a nutrient-dense vegetable known for its health benefits. Organic broccoli farming incorporates
          crop rotation and biological pest control to maintain soil fertility and produce fresh, chemical-free broccoli.
        </p>

        <h3>Cauliflower</h3>
        <p>
          Cauliflower is a versatile vegetable rich in fiber and vitamins. Organic cauliflower farming relies on
          compost, natural fertilizers, and eco-friendly pest management to grow healthy, pesticide-free cauliflower.
        </p>

        <h3>Peas</h3>
        <p>
          Peas are a protein-rich legume commonly used in various dishes. Organic pea farming involves sustainable
          agricultural practices such as crop rotation and organic compost, ensuring chemical-free and nutritious peas.
        </p>

        <h3>Muskmelon</h3>
        <p>
          Muskmelon is a sweet and juicy fruit known for its refreshing taste. Organic muskmelon farming utilizes
          natural compost and organic pest control techniques to grow flavorful and pesticide-free melons.
        </p>

        <h3>Watermelon</h3>
        <p>
          Watermelon is a hydrating summer fruit packed with vitamins and antioxidants. Organic watermelon farming
          focuses on sustainable soil management and natural fertilizers to produce fresh, chemical-free watermelons.
        </p>
      </section>

      <div className="carousel-section">
        <Slider {...carouselSettings}>
          <div>
            <img src={Organic1} alt="Organic farming process - Slide 1" className="carousel-image" />
          </div>
          <div>
            <img src={Organic2} alt="Organic crops growing - Slide 2" className="carousel-image" />
          </div>
          <div>
            <img src={Organic3} alt="Harvesting organic vegetables - Slide 3" className="carousel-image" />
          </div>
          <div>
            <img src={Organic4} alt="Sustainable organic farming - Slide 4" className="carousel-image" />
          </div>
          <div>
            <img src={Organic5} alt="Fresh organic produce - Slide 5" className="carousel-image" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OrganicFarming;