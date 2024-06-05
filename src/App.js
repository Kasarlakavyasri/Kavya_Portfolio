// App.js
import React from 'react';
import Navbar from './components/Navbar';
//import Navigation from './components/Navigation';
//import Header from './components/Header';
import Introduction from './components/Introduction';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
//import Certifications from './components/Certifications';
//import Footer from './components/Footer';
import Foot from'./components/Foot';
import './App.css'; // Import CSS file for global styling


//import background from './components/background.jpg';

/*const App = () => {
  return (
    <div className="app" style={{ background: `url(${background})` }}>
      <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Introduction />        
        <Skills />
        <Projects />  
        <Experience />      
        <Education />
      </main>
      <Foot />
      
    </div>
    </div>
  );
}*/

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Introduction />
        <Education /> 
        <Skills />
        <Experience /> 
        <Projects /> 
        
              
        
         
        
             
        
        
      </main>
      <Foot />
      
    </div>  

  );
}

export default App;
