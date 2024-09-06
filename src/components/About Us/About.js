import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h1 className="heading">About Us</h1>

        <p className="intro-paragraph">
          70% of India's population lives in villages. Even after the completion of 77 years of independence, when we look at the villages of the country, it comes to mind that the society living in villages is still deprived of basic facilities. Considering this topic, <strong>"Shri Madhav Jan Seva Nyas"</strong> thought that for the development of the country, along with the city, villages will also have to be developed. Projects like hospitals, libraries, huge sports complexes, skill development centres, yoga and meditation centres, organic and zero-budget farming, drug de-addiction, and Nyaya Chaupal will be run by this Nyas. Through these projects, on one hand, we will be able to prepare good players and talented citizens, on the other hand, we will be able to put unemployed youth on their feet by training them in various tasks. "Unity in diversity - the specialty of India" has been there all the time, to strengthen it, to create social harmony by organizing cultured social programs.
          India has been guiding the world in all spheres of social life since ancient times. To achieve this goal that our country once again continues the same glorious tradition and sits on the throne of the world leader, your cooperation is needed to implement all the above-mentioned tasks. This work is a project done by the society, for the society, with the cooperation of the society. For this, the Trust calls upon all the workers and members of social and religious organizations across the province to fulfill their national duty by sacrificing themselves in this yagya being conducted for the welfare of humanity. Due to the provincial scheme, local friends have come to you with the expectation of cooperation. Sewa Sadhana and Village Development Center will be very grateful to you for your cooperation.
        </p>

        <Section title="Introduction">
          <p>
            Shri Madhav Jan Sewa Nyas has partnered with Shri Vishwakarma Skill University (SVSU) through a Memorandum of Understanding (MoU) to deliver comprehensive skill development programs. This collaboration aims to bridge the gap between industry requirements and the skills of the workforce.
          </p>
          <p>
            The MoU signifies a commitment to developing a pool of qualified and job-ready individuals, ensuring they meet specific industry standards or are prepared for self-employment opportunities.
          </p>
        </Section>

        <Section title="Our Objective">
          <p>
            The objective of this MoU is to establish a strategic partnership between Shri Madhav Jan Sewa Nyas and SVSU. This partnership will focus on running skill development programs at the facilities provided by Shri Madhav Jan Seva Nyas. The goal is to create a skilled workforce equipped with the knowledge and abilities needed for various industries.
          </p>
          <p>
            This initiative also aims to facilitate the creation of job-ready individuals who can meet industry-specific demands or pursue self-employment opportunities with confidence.
          </p>
        </Section>

        <Section title="Definitions and Interpretations">
          <Definition term="Batch" description="Minimum number of students required to start a program." />
          <Definition term="Detailed Project Report (DPR)" description="A comprehensive document outlining the curriculum and training methodology." />
          <Definition term="MSDE" description="Ministry of Skill Development and Entrepreneurship, responsible for skill development coordination." />
          <Definition term="Nodal Officer" description="Designated person responsible for communication between Sewa Sadhna Kendra and SVSU." />
          <Definition term="NOS" description="National Occupational Standards, defining performance standards for job roles." />
          <Definition term="NSQF" description="National Skill Qualification Framework, organizing qualifications based on skills and knowledge." />
          <Definition term="On-Job Training (OJT)" description="Industry-integrated training model providing practical experience." />
          <Definition term="Qualification Pack" description="Set of NOS aligned to job roles." />
          <Definition term="Training" description="Includes both theoretical and practical training components." />
        </Section>

        <Section title="Responsibilities">
          <SubSection title="Joint Responsibilities">
            <ul>
              <li>Coordinating student selection processes.</li>
              <li>Selecting trainers and educational staff.</li>
              <li>Developing and vetting the theoretical curriculum.</li>
              <li>Creating and finalizing the Detailed Project Report (DPR).</li>
              <li>Supporting and monitoring training programs.</li>
              <li>Advertising training program admissions.</li>
            </ul>
          </SubSection>

          <SubSection title="Responsibilities of Sewa Sadhna Kendra">
            <ul>
              <li>Provide training facilities and manage day-to-day operations.</li>
              <li>Specify batch sizes and educational requirements.</li>
              <li>Nominate a Nodal Officer for communication with SVSU.</li>
              <li>Comply with statutory regulations and safety standards.</li>
              <li>Provide necessary kits, uniforms, and training materials.</li>
              <li>Ensure student welfare and safety during training.</li>
              <li>Allow SVSU’s instructional team to visit and monitor training.</li>
            </ul>
          </SubSection>

          <SubSection title="Responsibilities of SVSU">
            <ul>
              <li>Provide curriculum and identify job roles for training.</li>
              <li>Assist in finalizing resources and equipment needed for training.</li>
              <li>Conduct training programs for trainers at Sewa Sadhna Kendra.</li>
              <li>Orient students and their guardians about the training process.</li>
              <li>Carry out assessments and certification of courses.</li>
              <li>Supervise training and provide feedback to the Center Manager.</li>
            </ul>
          </SubSection>
        </Section>

        <Section title="Confidentiality">
          <p>
            Both parties agree to maintain the confidentiality of any proprietary or sensitive information exchanged during the collaboration. This includes information about students and operational details. Any breach of confidentiality may lead to legal consequences.
          </p>
          <p>
            Confidentiality obligations do not extend to information that is public, received from third parties without restrictions, or required to be disclosed by law.
          </p>
        </Section>
      </div>
    </section>
  );
};

const Section = ({ title, children }) => (
  <div className="section">
    <h2 className="sub-heading">{title}</h2>
    {children}
  </div>
);

const SubSection = ({ title, children }) => (
  <>
    <h3>{title}</h3>
    {children}
  </>
);

const Definition = ({ term, description }) => (
  <p>
    <strong>{term}:</strong> {description}<br />
  </p>
);

export default AboutUs;