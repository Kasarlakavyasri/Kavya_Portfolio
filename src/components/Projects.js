import React from 'react';
import './Projects.css'; // Import CSS file for styling
import VMS1 from './images/event.jpeg'; // Import project images
import cnn from './images/cnn.jpeg';
import AMS from './images/ams.jpeg';
import hdp from './images/hdp.jpeg';

const Projects = () => {
  const projects = [
    {
      name: 'Venue Management System',
      technologies: 'React.js, MongoDB, Node.js, Flask, CSS, JavaScript, Figma',
      githubLink: 'https://github.com/Kasarlakavyasri/EventVenue-Management-System',
      image: VMS1,
    },
    {
      name: 'Heart Disease Prediction',
      technologies: 'Supervised Learning models, pandas, sklearn, seaborn, matplotlib, MinMaxScalar',
      githubLink: 'https://github.com/Kasarlakavyasri/HeartDiseasePrediction',
      image: hdp,
    },
    {
      name: 'Digit And Face Classification using CNN',
      technologies: 'Supervised Learning, Convolutional Neural Network, Data-preprocessing, Model Tuning',
      githubLink: 'https://github.com/Kasarlakavyasri?tab=repositories',
      image: cnn,
    },
    {
      name: 'Asset Management System',
      technologies: 'JavaScript, HTML5, CSS3, PHP, Figma, Oracle Database',
      githubLink: 'https://github.com/Kasarlakavyasri?tab=repositories',
      image: AMS,
    },
  ];

  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>
      <h4>Feel free to look at all my Projects on GitHub</h4>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.technologies}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Link</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
