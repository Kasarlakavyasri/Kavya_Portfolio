import React from 'react';
import './Experience.css'; // Import CSS file for styling

const Experience = () => {
  return (
    <section id="experience" className="work-experience-container">
      <h2>Experience</h2>
      <h4>Where I've interned and worked during my career.</h4>
      <div className="experience-item">
        <div className="experience-title">
          <h3>Associate Professional Software Engineer</h3>
          <p>DXC TECHNOLOGY | MAY 2021 - JULY 2022</p>
        </div>
        <div className="experience-description">
          <p>
            As an Associate Professional Software Engineer at DXC Technology, I transitioned into the role of Portal Administrator, replacing a colleague with 6 years of experience. In this capacity, I led management and optimization efforts for web portals, enhancing data access and improving user experience. I collaborated with cross-functional teams to identify user needs and implement necessary improvements. Proficient in IBM WebSphere, I effectively deployed, configured, and maintained web applications on the platform. Additionally, I monitored batch job execution, troubleshooting issues promptly to minimize downtime. My dedication and top performance were recognized with the prestigious Quarter Champ Award. Technologies utilized include IBM WebSphere, Linux, Unix, Java, Batch Jobs, and Eclipse.
          </p>
        </div>
      </div>
      <div className="experience-item">
        <div className="experience-title">
          <h3>Software Development Intern</h3>
          <p>DXC TECHNOLOGY | FEBRUARY 2021 - MAY 2022</p>
        </div>
        <div className="experience-description">
          <p>
            As a Software Development Intern at DXC Technology in Hyderabad, India, from March 2021 to April 2021, I collaborated with cross-functional teams to implement software enhancements, ensuring scalability, maintainability, and adherence to best practices. I proficiently conducted Java code modifications, crafted SQL queries, and contributed to enhancing software applications and database performance. Additionally, I gained experience in developing web applications using JEE enterprise applications, showcasing my skills in Java, SQL, Oracle, and Eclipse.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
