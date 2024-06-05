import React, { useState } from 'react';
import './Navbar.css'; // Import CSS file for styling
//import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons from react-icons

const Navbar = () => {
  const [theme, setTheme] = useState('light'); // State for managing the theme

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'; // Toggle between light and dark themes
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme); // Apply the new theme to the HTML element
  };

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#Introduction">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li>

          
          {/*<button onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
  </button>*/}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
