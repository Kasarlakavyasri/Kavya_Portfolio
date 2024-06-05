import React from 'react';
import './Education.css'; // Import CSS file for styling

const Education = () => {
  return (
    <section id="education" className="education-container">
      <h2>My Education</h2>
      <h4>Take a look at my formal education</h4>
      <div className="education-wrapper">
        <div className="education-item">
          <h3>Master of Science - MS</h3>
          <p>Computer Science</p>
          <p>Indiana University Bloomington | 2024</p>
        </div>
        <div className="education-item">
          <h3>Bachelor of Technology - BTech</h3>
          <p>Information Technology</p>
          <p>Kakatiya Institute of Technology and Science | 2021</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
