import React from 'react';
import './Introduction.css'; // Import CSS file for styling
import myPhoto from './myPhoto.jpg'; // Import your photo

const Introduction = () => {
  return (
    <section id="introduction">
      <h2 className="name">Hey there!! I'm Kavya Sri Kasarla...</h2>
      <div className="intro-container">
        <div className="intro-content">
          <div className="intro-text">
            <p>A passionate tech enthusiast with a knack for turning ideas into innovative solutions with expertise in Python, JavaScript, SQL, web development, and a range of visualization tools like Power BI, Tableau, etc. With a Master's degree in Computer Science and hands-on experience in software engineering, data analysis/visualization, machine learning, and project management, I have contributed to many impactful projects.</p>
            <p>Explore my portfolio to learn more about my skills, and professional experience. Feel free to get in touch for collaboration opportunities, discussions on innovative projects, or to learn more about my journey in the tech industry.</p>
          </div>
          <div className="intro-photo">
            <img src={myPhoto} alt="Kavya Sri Kasarla" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
