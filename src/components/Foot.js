import React from 'react';
import './Foot.css';
import git from './images/git.png';
import linkedin from './images/linkedin.png';

const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const message = formData.get('message');
    const subject = `Contact Form Submission from ${name}`;

    const mailtoLink = `mailto:kasarlak11@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <footer className='footer'>
      {/* Social Icons */}
      <div className="social">
        <h3>GENERAL</h3>
        <ul>
          <li><a href="#Introduction">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
        <h3>SOCIAL</h3>
        <div className="social-icons">
          <a href="https://github.com/Kasarlakavyasri" target="_blank" rel="noopener noreferrer">
            <img src={git} alt="Git" />
          </a>
          <a href="https://www.linkedin.com/in/kavya-sri-kasarla-b80023186/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Vertical Line */}
      <div className="vertical-line"></div>

      {/* Footer Contents */}
      <div className="footer-contents">
        {/*<h3>Get in touch</h3>*/}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" required placeholder='Enter your Name' />
          </div>
          <div className="form-group">
            <label htmlFor="message"></label>
            <textarea id="message" name="message" rows="4" required placeholder='Type your message'></textarea>
          </div>
          <button type="submit">Get in touch</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
