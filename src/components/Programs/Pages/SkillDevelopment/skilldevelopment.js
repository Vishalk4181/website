import React, { useState, useEffect } from 'react';
import './skilldevelopment.css';

// Mock data for courses
const courses = [
  { title: 'Data Entry Operator', duration: '3 Months', eligibility: '10th' },
  { title: 'Assistant Beauty Therapist', duration: '3 Months', eligibility: '8th' },
  { title: 'Self Employed Tailor', duration: '3 Months', eligibility: '8th' },
  { title: 'Plumbing', duration: '3 Months', eligibility: '10th' },
  { title: 'Carpentry', duration: '3 Months', eligibility: '10th' },
  { title: 'Basic Accounting With Tally', duration: '3 Months', eligibility: '10th' },
  { title: 'DCAA (Diploma in Computer Application and Accounting)', duration: '1 Year', eligibility: '12th' },
];

const SkillDevelopmentCenter = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherMotherName: '',
    dob: '',
    address: '',
    contactNumber: '',
    altContactNumber: '',
    email: '',
    aadharCardNumber: '',
    qualification: '',
    nearestPoliceStation: '',
    course: '',
    message: '',
    photo: null,
  });

  const [photoURL, setPhotoURL] = useState(null);

  useEffect(() => {
    if (formData.photo) {
      setPhotoURL(URL.createObjectURL(formData.photo));
    }

    return () => {
      if (photoURL) URL.revokeObjectURL(photoURL);
    };
  }, [formData.photo]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRemovePhoto = () => {
    setFormData({ ...formData, photo: null });
    setPhotoURL(null);
    document.getElementById('photo-upload').value = ''; // Clear the file input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    // Add form submission logic here (e.g., send to a server)
  };

  return (
    <section className="skill-development-center">
      <div className="container">
        <h1 className="heading">Skill Development Center</h1>
        <h2 className="subheading">Shri Madhav Kaushal Vikas Kendra</h2>

        {/* Ensure Section and SubSection components are defined */}
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

        {/* Courses Section */}
        <div className="section">
          <h2>Available Courses</h2>
          <table className="courses-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Duration</th>
                <th>Eligibility</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.title}</td>
                  <td>{course.duration}</td>
                  <td>{course.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Admission Form Section */}
        <div className="section">
          <h2>Admission Form</h2>
          <form className="admission-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="fatherMotherName">Father/Mother Name</label>
              <input
                type="text"
                id="fatherMotherName"
                name="fatherMotherName"
                value={formData.fatherMotherName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="altContactNumber">Alternate Contact Number</label>
              <input
                type="tel"
                id="altContactNumber"
                name="altContactNumber"
                value={formData.altContactNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="adharCardNumber">Aadhar Card Number</label>
              <input
                type="text"
                id="adharCardNumber"
                name="adharCardNumber"
                value={formData.adharCardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="qualification">Qualification</label>
              <input
                type="text"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nearestPoliceStation">Nearest Police Station</label>
              <input
                type="text"
                id="nearestPoliceStation"
                name="nearestPoliceStation"
                value={formData.nearestPoliceStation}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Course Selection</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a course</option>
                {courses.map((course, index) => (
                  <option key={index} value={course.title}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="photo">Upload Photo</label>
              <input
                type="file"
                id="photo-upload"
                name="photo"
                accept="image/*"
                onChange={handleInputChange}
              />
              {photoURL && (
                <div className="photo-preview">
                  <img
                    src={photoURL}
                    alt="Preview"
                    width="100"
                  />
                  <button type="button" onClick={handleRemovePhoto}>
                    Remove Photo
                  </button>
                </div>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Definition = ({ term, description }) => (
  <p>
    <strong>{term}:</strong> {description}<br />
  </p>
);

const Section = ({ title, children }) => (
  <div className="section">
    <h2>{title}</h2>
    {children}
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="sub-section">
    <h3>{title}</h3>
    {children}
  </div>
);

export default SkillDevelopmentCenter;