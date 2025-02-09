import React from 'react';
import './WellnessCenter.css';

const WellnessCenter = () => {
  return (
    <div className="wellness-center-page">
      <header className="header">
        <h1 className="title">Wellness Center</h1>
        <p className="subtitle">
          A holistic approach to nurturing physical, mental, and emotional well-being.
        </p>
      </header>

      <section className="intro-section">
        <div className="content-container">
          <h2>About Our Wellness Center</h2>
          <p>
            Our Wellness Center is dedicated to promoting overall well-being by integrating a variety of health and wellness practices. From physical fitness and mental health workshops to nutritional counseling and stress management, we offer programs designed to empower individuals to lead healthier, more balanced lives.
          </p>
        </div>
      </section>

      <section className="naturopathy-section">
        <div className="content-container">
          <h3>प्राकृतिक चिकित्सा (Naturopathy)</h3>
          <p>
            हमारा उद्देश्य ग्रामीण व शहरी लोगों को बीमारियों से दूर रखना है, जिसके लिए हमने वर्ल्ड स्तरीय व्यवस्था अपने केंद्र में ही शुरू की है। अत्याधुनिक सुविधाओं और प्रशिक्षित चिकित्सकों की देखरेख में यह केंद्र लोगों को रोग मुक्त करने का कार्य रियायती दरों पर करेगा। हजार में से 999 रोगियों को सिर्फ नियंत्रित आहार, पानी, हवा, सूर्य, मिट्टी चिकित्सा एवं घरेलू इलाजों से ठीक किया जा सकता है।
          </p>
          <p>
            प्राकृतिक चिकित्सा को एक औषधि पद्धति और जीवन शैली के रूप में विकसित करना हमारा प्रथम उद्देश्य है। हमारी चिकित्सा विधियों में शामिल हैं:
          </p>
          <div className="treatment-container">
            <ul>
              <li>अंतर जल मालिश</li>
              <li>मिट्टी स्नान</li>
              <li>भाप स्नान</li>
              <li>एक्युपंचर</li>
              <li>एक्यूप्रेशर</li>
              <li>भौतिक चिकित्सा</li>
              <li>गर्म स्नान</li>
              <li>चुंबकीय चिकित्सा</li>
              <li>अन्य प्राकृतिक उपचार</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Wellness Matters</h2>
        <ul className="benefits-list">
          <li>Improves physical health through regular exercise and activities.</li>
          <li>Encourages mental resilience and emotional balance.</li>
          <li>Reduces stress and promotes relaxation techniques.</li>
          <li>Supports long-term lifestyle changes for holistic well-being.</li>
        </ul>
      </section>

      <section className="impact-section">
        <h2>Our Impact</h2>
        <p>
          The Wellness Center has positively impacted countless lives by providing resources and guidance for physical fitness, mental health, and lifestyle management. Our expert team works closely with participants to help them achieve their personal wellness goals and foster sustainable habits for a healthier life.
        </p>
      </section>

      <section className="process-section">
        <h2>Our Wellness Approach</h2>
        <div className="process-steps">
          <div className="step">
            <h3>Step 1: Assessment</h3>
            <p>
              We begin by understanding individual needs and goals through a detailed wellness assessment.
            </p>
          </div>
          <div className="step">
            <h3>Step 2: Customized Plans</h3>
            <p>
              Personalized wellness plans are created, including fitness routines, dietary guidance, and mental health strategies.
            </p>
          </div>
          <div className="step">
            <h3>Step 3: Guided Activities</h3>
            <p>
              Participants engage in various wellness activities such as yoga, meditation, fitness training, and workshops.
            </p>
          </div>
          <div className="step">
            <h3>Step 4: Progress Evaluation</h3>
            <p>
              Regular follow-ups and evaluations ensure participants stay on track and achieve their wellness goals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessCenter;