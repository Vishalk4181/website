import React, { useState, useEffect } from "react";
import "./skilldevelopment.css";
import Slider from "react-slick";

import Skill1 from "../../../../assets/images/Skill1.jpg";
import Skill2 from "../../../../assets/images/Skill2.jpg";
import Skill3 from "../../../../assets/images/Skill3.jpg";
import Skill4 from "../../../../assets/images/Skill4.jpg";
import Skill5 from "../../../../assets/images/Skill5.jpg";

// Mock data for courses
const courses = [
  { title: "Data Entry Operator", duration: "3 Months", eligibility: "10th" },
  {
    title: "Assistant Beauty Therapist",
    duration: "3 Months",
    eligibility: "8th",
  },
  { title: "Self Employed Tailor", duration: "3 Months", eligibility: "8th" },
  { title: "Plumbing", duration: "3 Months", eligibility: "10th" },
  { title: "Carpentry", duration: "3 Months", eligibility: "10th" },
  {
    title: "Basic Accounting With Tally",
    duration: "3 Months",
    eligibility: "10th",
  },
  {
    title: "DCAA (Diploma in Computer Application and Accounting)",
    duration: "1 Year",
    eligibility: "12th",
  },
];

const SkillDevelopmentCenter = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    fatherMotherName: "",
    dob: "",
    address: "",
    contactNumber: "",
    altContactNumber: "",
    email: "",
    aadharCardNumber: "",
    qualification: "",
    nearestPoliceStation: "",
    course: "",
    message: "",
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
    if (name === "photo") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRemovePhoto = () => {
    setFormData({ ...formData, photo: null });
    setPhotoURL(null);
    document.getElementById("photo-upload").value = ""; // Clear the file input
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Define the API endpoint
  //     const apiEndpoint = "http://localhost:5000/api/admissions";

  //     // Create a FormData object
  //     const formDataObj = new FormData();
  //     console.log(FormData);
  //     // Append all fields from formData to FormData object

  //     // Append each field explicitly
  //     formDataObj.append("name", formData.name);
  //     formDataObj.append("fatherMotherName", formData.fatherMotherName);
  //     formDataObj.append("dob", formData.dob);
  //     formDataObj.append("address", formData.address);
  //     formDataObj.append("contactNumber", formData.contactNumber);
  //     formDataObj.append("altContactNumber", formData.altContactNumber);
  //     formDataObj.append("email", formData.email);
  //     formDataObj.append("aadharCardNumber", formData.aadharCardNumber);
  //     formDataObj.append("qualification", formData.qualification);
  //     formDataObj.append("nearestPoliceStation", formData.nearestPoliceStation);
  //     formDataObj.append("course", formData.course);
  //     formDataObj.append("message", formData.message);

  //     // Append the photo file if it exists
  //     if (formData.photo) {
  //       formDataObj.append("photo", formData.photo);
  //     }
  //     console.log("hehehehe", formDataObj);

  //     // Send the data to the server
  //     const response = await fetch(apiEndpoint, {
  //       method: "POST",
  //       body: formDataObj, // Use FormData instead of JSON
  //     });

  //     // Handle the response
  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log("Form submission successful", result);

  //       // Optionally reset the form
  //       setFormData({
  //         name: "",
  //         fatherMotherName: "",
  //         dob: "",
  //         address: "",
  //         contactNumber: "",
  //         altContactNumber: "",
  //         email: "",
  //         adharCardNumber: "",
  //         qualification: "",
  //         nearestPoliceStation: "",
  //         course: "",
  //         message: "",
  //         photo: null,
  //       });

  //       alert("Form submitted successfully!");
  //     } else {
  //       console.error("Form submission failed", response.statusText);
  //       alert("Failed to submit the form. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error during form submission", error);
  //     alert("An error occurred while submitting the form.");
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const apiEndpoint = "http://localhost:5000/api/admissions";
      const formDataObj = new FormData();
  
      // Append each field explicitly
      formDataObj.append("name", formData.name);
      formDataObj.append("fatherMotherName", formData.fatherMotherName);
      formDataObj.append("dob", formData.dob);
      formDataObj.append("address", formData.address);
      formDataObj.append("contactNumber", formData.contactNumber);
      formDataObj.append("altContactNumber", formData.altContactNumber);
      formDataObj.append("email", formData.email);
      formDataObj.append("aadharCardNumber", formData.aadharCardNumber);
      formDataObj.append("qualification", formData.qualification);
      formDataObj.append("nearestPoliceStation", formData.nearestPoliceStation);
      formDataObj.append("course", formData.course);
      formDataObj.append("message", formData.message);
  
      // Append the photo file if it exists
      // if (formData.photo) {
      //   console.log("Photo details:", formData.photo);
      //   formDataObj.append("photo", formData.photo);
      // }
  
      // Debugging: Log FormData entries
      for (const [key, value] of formDataObj.entries()) {
        console.log(`${key}: ${value}`);
      }
  
      const response = await fetch(apiEndpoint, {
        method: "POST",
        body: formDataObj, // Use FormData
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Form submission successful", result);
        alert("Form submitted successfully!");
        // Reset form data
        setFormData({
          name: "",
          fatherMotherName: "",
          dob: "",
          address: "",
          contactNumber: "",
          altContactNumber: "",
          email: "",
          aadharCardNumber: "",
          qualification: "",
          nearestPoliceStation: "",
          course: "",
          message: "",
          // photo: null,
        });
      } else {
        console.error("Form submission failed", response.statusText);
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error during form submission", error);
      alert("An error occurred while submitting the form.");
    }
  };
  
  return (
    <section className="skill-development-center">
      <div className="container">
        <h1 className="heading">Skill Development Center</h1>
        <h2 className="subheading">Shri Madhav Kaushal Vikas Kendra</h2>

        <div className="carousel-section">
          <Slider {...carouselSettings}>
            <div>
              <img src={Skill1} alt="Slide 1" className="carousel-image" />
            </div>
            <div>
              <img src={Skill2} alt="Slide 2" className="carousel-image" />
            </div>
            <div>
              <img src={Skill3} alt="Slide 3" className="carousel-image" />
            </div>
            <div>
              <img src={Skill4} alt="Slide 4" className="carousel-image" />
            </div>
            <div>
              <img src={Skill5} alt="Slide 5" className="carousel-image" />
            </div>
          </Slider>
        </div>

        {/* Ensure Section and SubSection components are defined */}
        <Section title="Introduction">
          <p>
            Shri Madhav Jan Sewa Nyas has partnered with Shri Vishwakarma Skill
            University (SVSU) through a Memorandum of Understanding (MoU) to
            deliver comprehensive skill development programs. This collaboration
            aims to bridge the gap between industry requirements and the skills
            of the workforce.
          </p>
          <p>
            The MoU signifies a commitment to developing a pool of qualified and
            job-ready individuals, ensuring they meet specific industry
            standards or are prepared for self-employment opportunities.
          </p>
        </Section>

        <Section title="Our Objective">
          <p>
            The objective of this MoU is to establish a strategic partnership
            between Shri Madhav Jan Sewa Nyas and SVSU. This partnership will
            focus on running skill development programs at the facilities
            provided by Shri Madhav Jan Seva Nyas. The goal is to create a
            skilled workforce equipped with the knowledge and abilities needed
            for various industries.
          </p>
          <p>
            This initiative also aims to facilitate the creation of job-ready
            individuals who can meet industry-specific demands or pursue
            self-employment opportunities with confidence.
          </p>
        </Section>

        <Section title="Definitions and Interpretations">
          <Definition
            term="Batch"
            description="Minimum number of students required to start a program."
          />
          <Definition
            term="Detailed Project Report (DPR)"
            description="A comprehensive document outlining the curriculum and training methodology."
          />
          <Definition
            term="MSDE"
            description="Ministry of Skill Development and Entrepreneurship, responsible for skill development coordination."
          />
          <Definition
            term="Nodal Officer"
            description="Designated person responsible for communication between Sewa Sadhna Kendra and SVSU."
          />
          <Definition
            term="NOS"
            description="National Occupational Standards, defining performance standards for job roles."
          />
          <Definition
            term="NSQF"
            description="National Skill Qualification Framework, organizing qualifications based on skills and knowledge."
          />
          <Definition
            term="On-Job Training (OJT)"
            description="Industry-integrated training model providing practical experience."
          />
          <Definition
            term="Qualification Pack"
            description="Set of NOS aligned to job roles."
          />
          <Definition
            term="Training"
            description="Includes both theoretical and practical training components."
          />
        </Section>

        <Section title="Responsibilities">
          <SubSection title="Joint Responsibilities">
            <ul>
              <li>Coordinating student selection processes.</li>
              <li>Selecting trainers and educational staff.</li>
              <li>Developing and vetting the theoretical curriculum.</li>
              <li>
                Creating and finalizing the Detailed Project Report (DPR).
              </li>
              <li>Supporting and monitoring training programs.</li>
              <li>Advertising training program admissions.</li>
            </ul>
          </SubSection>

          <SubSection title="Responsibilities of Sewa Sadhna Kendra">
            <ul>
              <li>
                Provide training facilities and manage day-to-day operations.
              </li>
              <li>Specify batch sizes and educational requirements.</li>
              <li>Nominate a Nodal Officer for communication with SVSU.</li>
              <li>Comply with statutory regulations and safety standards.</li>
              <li>Provide necessary kits, uniforms, and training materials.</li>
              <li>Ensure student welfare and safety during training.</li>
              <li>
                Allow SVSU’s instructional team to visit and monitor training.
              </li>
            </ul>
          </SubSection>

          <SubSection title="Responsibilities of SVSU">
            <ul>
              <li>Provide curriculum and identify job roles for training.</li>
              <li>
                Assist in finalizing resources and equipment needed for
                training.
              </li>
              <li>
                Conduct training programs for trainers at Sewa Sadhna Kendra.
              </li>
              <li>
                Orient students and their guardians about the training process.
              </li>
              <li>Carry out assessments and certification of courses.</li>
              <li>
                Supervise training and provide feedback to the Center Manager.
              </li>
            </ul>
          </SubSection>
        </Section>

        <Section title="Confidentiality">
          <p>
            Both parties agree to maintain the confidentiality of any
            proprietary or sensitive information exchanged during the
            collaboration. This includes information about students and
            operational details. Any breach of confidentiality may lead to legal
            consequences.
          </p>
          <p>
            Confidentiality obligations do not extend to information that is
            public, received from third parties without restrictions, or
            required to be disclosed by law.
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
              <label htmlFor="name">Name <span className="required">*</span></label>
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
              <label htmlFor="fatherMotherName">Father/Mother Name<span className="required">*</span></label>
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
              <label htmlFor="dob">Date of Birth<span className="required">*</span></label>
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
                required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number<span className="required">*</span></label>
              <input
                type="number"
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
                type="number"
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="aadharCardNumber">Aadhar Card Number<span className="required">*</span></label>
              <input
                type="number"
                id="aadharCardNumber"
                name="aadharCardNumber"
                value={formData.aadharCardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="qualification">Qualification<span className="required">*</span></label>
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
              <label htmlFor="nearestPoliceStation">
                Nearest Police Station
              </label>
              <input
                type="text"
                id="nearestPoliceStation"
                name="nearestPoliceStation"
                value={formData.nearestPoliceStation}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Course Selection<span className="required">*</span></label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                required>
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
                onChange={handleInputChange}></textarea>
            </div>
            {/* <div className="form-group">
              <label htmlFor="photo">Upload Photo<span className="required">*</span></label>
              <input
                type="file"
                id="photo-upload"
                name="photo"
                accept="image/*"
                onChange={handleInputChange}
                required
              />
              {photoURL && (
                <div className="photo-preview">
                  <img src={photoURL} alt="Preview" width="100" />
                  <button type="button" onClick={handleRemovePhoto}>
                    Remove Photo
                  </button>
                </div>
              )}
            </div> */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Definition = ({ term, description }) => (
  <p>
    <strong>{term}:</strong> {description}
    <br />
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