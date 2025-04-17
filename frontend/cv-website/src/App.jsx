import React, { useState, useEffect } from 'react';
import './App.css'; 
import ProfilPic from "../src/images/ProfilPicture.jpg"
import ParticlesComponent from './Screens/ParticleComponent';
import resume from './assets/Lebenslauf_Manuel_Schwarz.pdf';
function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  // Neue States für Animation
  const [animatingOut, setAnimatingOut] = useState(false);
  const [animatingIn, setAnimatingIn] = useState(false);
  
  const handleProfileClick = () => {
    if (!menuVisible) {
      // Erst ausblenden Animation starten
      setAnimatingOut(true);
      
      // Nach der Ausblend-Animation das Menü einblenden
      setTimeout(() => {
        setMenuVisible(true);
        setAnimatingOut(false);
        setAnimatingIn(true);
        
        // Animation abschließen
        setTimeout(() => {
          setAnimatingIn(false);
        }, 500);
      }, 300);
    } else {
      // Menü ausblenden
      setAnimatingOut(true);
      
      // Nach der Animation zurücksetzen
      setTimeout(() => {
        setMenuVisible(false);
        setAnimatingOut(false);
      }, 300);
    }
  };
  
  const handleMenuClick = (section) => {
    setActiveSection(section);
    setMenuVisible(false);
    setContentVisible(true);
  };
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    if (activeSection) {
      setTimeout(() => {
        scrollToSection(activeSection);
      }, 500);
    }
  }, [contentVisible, activeSection]);
  
  const menuItems = [
    { id: 'about', text: 'About me' },
    { id: 'academic', text: 'Academic Career' },
    { id: 'projects', text: 'Projects' },
    { id: 'technologies', text: 'Technologies' },
    { id: 'contact', text: 'Contact Information' },
    { id: 'github', text: 'Github' },
    { id: 'leetcode', text: 'Leetcode'}
  ];
  
  const circleMenuItems = [
    { id: 'about', text: 'About me', angle: 0 },
    { id: 'technologies', text: 'Technologies', angle: 300 },
    { id: 'projects', text: 'Projects', angle: 60 },
    { id: 'academic', text: 'Academic career', angle: 120 },
    { id: 'contact', text: 'Contact Information', angle: 240 },
    { id: 'github', text: 'Github', angle: 180 },
  ];
  
  
  return (
    <div className="app-container">
      <ParticlesComponent/>
      <div className="nav-trigger"></div>
      {contentVisible && (
        <div className="nav-header">
          <div className="nav-content">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {!contentVisible && (
        <div className="landing-container">
          {!menuVisible && (
            <div className={`container-greeting ${animatingOut ? 'animate-out' : ''}`}> 
              <h1 className="greeting">Hi, i am Manuel !</h1>
            </div>
          )}
          
          <div className="profile-container">
            {!menuVisible && (
              <div className={`press-me ${animatingOut ? 'animate-out' : ''}`}>
                <span>Press me</span>
                <img src='../src/images/Arrow-white.png' className='arrow-white'/>
              </div>
            )}
            
            <div className="profile-wrapper">
              <img
                src="../src/images/ProfilPicture.jpg"
                alt="Profile"
                className="profile-img"
                onClick={handleProfileClick}
              />
            </div>
            
            {menuVisible && (
              <div className={`circle-menu ${animatingIn ? 'animate-in' : ''}`}>
                {circleMenuItems.map((item, index) => {
                  const angle = item.angle * (Math.PI / 180);
                  const distance = 150;
                  const x = Math.cos(angle) * distance;
                  const y = Math.sin(angle) * distance;
                  
                  return (
                    <button
                      key={item.id}
                      className="circle-menu-item"
                      style={{
                        transform: `translate(${x}px, ${y}px)`
                      }}
                      onClick={() => handleMenuClick(item.id)}
                    >
                      {item.text}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
      
      {contentVisible && (
        <div className="content-container">
          <div className="profile-header">
            <div className={`container-greeting-mainPage`}> 
              <h1 className="greeting">Hi, i am Manuel !</h1>
            </div>
            <img
              src="../src/images/ProfilPicture.jpg"
              alt="Profile"
              className="content-profile-img"
            />
          </div>
          
          <section id="about" className="section">
            <h2 className="section-title">About me</h2>
            <p className="section-text">
              Hi, I'm Manuel Schwarz! I'm currently studying Business Informatics at the University of Passau, and ever since I started my studies, I've been hooked on coding. When I'm not diving into programming challenges or crunching numbers, you'll probably find me at the gym, hopping on my bike, or just getting active with various sports. I believe staying fit and active is the perfect counterbalance to the sometimes hectic life of a university student. Cheers to staying curious, coding hard, and always finding time for a good workout!
            </p>
          </section>
          
          <section id="academic" className="section">
            <h2 className="section-title">Academic Career</h2>
            <div className="academic-items">
              <div className="academic-item">
                <h3 className="item-title">2022-now</h3>
                <p>Bachelor Business informatics (University of Passau)</p>
              </div>
              <div className="academic-item">
                <h3 className="item-title">2021-2022</h3>
                <p>Bachelor Information Systems (University of Passau)</p>
              </div>
              <div className="academic-item">
                <h3 className="item-title">2013-2021</h3>
                <p>St.-Gotthard-Gymnasium Niederalteich</p>
              </div>
              <div className="academic-item">
                <h3 className="item-title">2009-2013</h3>
                <p>Elementary school in Seebach</p>
              </div>
            </div>
          </section>
          
          <section id="projects" className="section">
            <h2 className="section-title">Projects</h2>
            <div className="project-items">
              <div className="project-item">
                <p>Data Analysis and Digital Reporting Project in Python (Grade: 1.7)</p>
              </div>
              <div className="project-item">
                <p>Building and space management system (React) (Grade: 1.0)</p>
              </div>
              <div className="project-item">
                <p>Private Project: Advertising Marketplace (React Native, Firebase)</p>
              </div>
            </div>
          </section>
          
          <section id="technologies" className="section">
            <h2 className="section-title">Technologies</h2>
            <div className="tech-container">
              <div className="tech-item">
                <img src='../src/images/pythonLogo.png' className="tech-icon"/>
                <span>Python</span>
              </div>
              <div className="tech-item">
                <img src='../src/images/javascriptLogo.png' className="tech-icon"/>
                <span>JavaScript</span>
              </div>
              <div className="tech-item">
                <img src='../src/images/Java.png' className="tech-icon"/>
                <span>Java</span>
              </div>
              <div className="tech-item">
                <img src='../src/images/reactNative.png' className="tech-icon"/>
                <span>React/React Native</span>
              </div>
              <div className="tech-item">
                <img src='../src/images/HTML.png' className="tech-icon"/>
                <span>HTML</span>
              </div>
              <div className="tech-item">
                <img src='../src/images/CSS.png' className="tech-icon"/>
                <span>CSS</span>
              </div>
              <div className="tech-item">
                <img src='../src/images/icons8-figma-50.png' className="tech-icon"/>
                <span>Figma</span>
              </div>
            </div>
          </section>
          
          <section id="contact" className="section">
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-items">
              <p className="contact-item">
                <strong>Email:</strong> manuel.schwarz1811@gmail.com
              </p>
              <p className="contact-item">
                <strong>Mobile Number:</strong> +49 160 8740858
              </p>
            </div>
          </section>
          
          <section id="github" className="section">
            <h2 className="section-title">Github</h2>
            <div className="github-link">
              <a href="https://github.com/einfachManu" target="_blank" rel="noopener noreferrer">
                https://github.com/einfachManu
              </a>
            </div>
          </section>

          <section id="leetcode" className="section">
            <h2 className="section-title">Leetcode</h2>
            <div className="github-link">
              <a href="https://leetcode.com/einfachManu_/" target="_blank" rel="noopener noreferrer">
                https://leetcode.com/einfachManu_/
              </a>
            </div>
          </section>

          <div className="print-container">
            <button 
            className='print-cv'
            onClick={() => {
            const link = document.createElement('a');
            link.href = resume;
            link.download = 'Lebenslauf_Manuel_Schwarz.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            }}>
              Print CV
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;