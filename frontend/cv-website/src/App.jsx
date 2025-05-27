import React, { useState, useEffect } from 'react';
import './App.css'; 
import ProfilPic from "../src/images/ProfilPicture.jpg"
import ParticlesComponent from './Screens/ParticleComponent';
import resume from './assets/Lebenslauf_Manuel_Schwarz.pdf';
function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [animatingOut, setAnimatingOut] = useState(false);
  const [animatingIn, setAnimatingIn] = useState(false);
  
 
  const [expandedProjects, setExpandedProjects] = useState({
    project1: false,
    project2: false,
    project3: false,
    project4: false
  });
  
  const [currentProjects, setCurrentProjects] = useState({
    project1: false,
  });
 
  const projectDetails = {
    project1: "S&P Companies Analytics Dashboard: A comprehensive financial analytics dashboard built with Dash that analyzes companies from the S&P 100 index. The application features customized company selection, historical price analysis since 2021, and CAPM (Capital Asset Pricing Model) coefficient calculations. The dashboard includes visualization of daily returns compared to the S&P 500 benchmark, along with company metadata such as employee count, sector classification, market capitalization, and corporate identity information. This project demonstrates strong capabilities in financial data processing, statistical analysis, and interactive data visualization.",
    project2: "The building and space management system is a React-based web application designed to efficiently oversee facility resources. It features an intuitive interface for room booking, maintenance scheduling, and occupancy monitoring. The system includes interactive floor plans, real-time availability updates, and comprehensive reporting tools. Its successful implementation earned a perfect grade by delivering exceptional user experience combined with robust backend functionality.",
    project3: "Marketplace App: A fully functional mobile marketplace application developed using React Native with Firebase as the backend.",
    project4: "As part of a university project, I led the end‑to‑end design of an intelligent chatbot in Figma. I began by crafting detailed user personas, defining key use cases, and mapping user scenarios to understand real needs. Through targeted surveys, I gathered qualitative and quantitative insights, then translated them into comprehensive user‑journey maps. Building on this research, I created both low‑fidelity wireframes and high‑fidelity interactive prototypes, iterating quickly to validate design decisions. This hands‑on experience sharpened my user‑centered design skills, reinforced my ability to synthesize user feedback into functional interfaces, and delivered a polished chatbot prototype ready for development."
  };
  const github_projectDetails ={
    project1: "https://github.com/einfachManu/DataAnalysisProjekt", 
    project2: "https://github.com/Wirtschaftsinformatik-Passau/gebaeudeverwaltung-gruppe-3-WS2425",
    project3: "https://github.com/einfachManu/Brandspace", 
    project4: "https://www.youtube.com/watch?v=I_8vJnLs0RM"
  }
  const currentWork = {
    project1: "The opacity linked to black-box Artificial Intelligence (AI) models (such as Deep Learning) gave rise to the development of Explainable AI (XAI) methods, which aim at explaining the AI model outputs to humans and thus serve different AI stakeholder groups, such as developers, decision-makers or impacted groups and individuals. However, some authors raise concerns about the validity of XAI results.In light of this, the seminar thesis shall investigate the literature on XAI validity. The goal of the thesis is thus to provide a structured overview on the current state of the literature, e.g. in the form of a conceptual framework. Here it should, inter alia, shed light on key challenges and limitations of XAI methods and provide a starting point for XAI researchers that want to evaluate their XAI tools and avoid common pitfalls.",
    project2: "Bot for buying all kind of Stuff"
  }

  const toggleProjectDetails = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };
  
  const toggleCurrentDetails = (projectId) => {
    setCurrentProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };


  const handleProfileClick = () => {
    if (!menuVisible) {
      setAnimatingOut(true);
      
      setTimeout(() => {
        setMenuVisible(true);
        setAnimatingOut(false);
        setAnimatingIn(true);
        
        setTimeout(() => {
          setAnimatingIn(false);
        }, 500);
      }, 300);
    } else {
      setAnimatingOut(true);
      
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
    { id: 'current-projects', text: 'Current Projects' },
    { id: 'technologies', text: 'Technologies' },
    { id: 'contact', text: 'Contact Information' },
    { id: 'github', text: 'Github' },
  ];
  
  const circleMenuItems = [
    { id: 'about',             text: 'About me',               angle: 0.00   },
    { id: 'current-projects',  text: 'Current Projects',       angle: 51.43  },
    { id: 'projects',          text: 'Projects',               angle: 102.86 },
    { id: 'academic',          text: 'Academic career',        angle: 154.29 },
    { id: 'github',            text: 'Github',                 angle: 205.71 },
    { id: 'contact',           text: 'Contact Information',    angle: 257.14 },
    { id: 'technologies',      text: 'Technologies',           angle: 308.57 },
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
            <h1 className="greeting">Hi, i am Manuel !</h1>
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
                <button 
                  className="see-more-btn" 
                  onClick={() => toggleProjectDetails('project1')}
                >
                  {expandedProjects.project1 ? 'See less' : 'See more'}
                </button>
                {expandedProjects.project1 && (
                  <div className="project-details">
                    <p>{projectDetails.project1}</p>
                    <a href= {github_projectDetails.project1} target="_blank" rel="noopener noreferrer">
                      {github_projectDetails.project1}
                    </a>
                  </div>
                )}
              </div>
              <div className="project-item">
                <p>Building and space management system (React) (Grade: 1.0)</p>
                <button 
                  className="see-more-btn" 
                  onClick={() => toggleProjectDetails('project2')}
                >
                  {expandedProjects.project2 ? 'See less' : 'See more'}
                </button>
                {expandedProjects.project2 && (
                  <div className="project-details">
                    <p>{projectDetails.project2}</p>
                    <a href= {github_projectDetails.project2} target="_blank" rel="noopener noreferrer">
                      {github_projectDetails.project2}
                    </a>
                  </div>
                )}
              </div>
              <div className="project-item">
                <p>Private Project: Advertising Marketplace (React Native, Firebase, Figma)</p>
                <button 
                  className="see-more-btn" 
                  onClick={() => toggleProjectDetails('project3')}
                >
                  {expandedProjects.project3 ? 'See less' : 'See more'}
                </button>
                {expandedProjects.project3 && (
                  <div className="project-details">
                    <p>{projectDetails.project3}</p>
                    <a href= {github_projectDetails.project3} target="_blank" rel="noopener noreferrer">
                      {github_projectDetails.project3}
                    </a>
                  </div>
                )}
              </div>
              <div className="project-item">
                <p>Chatbot design Project (Figma) (Grade: 1.3)</p>
                <button 
                  className="see-more-btn" 
                  onClick={() => toggleProjectDetails('project4')}
                >
                  {expandedProjects.project4 ? 'See less' : 'See more'}
                </button>
                {expandedProjects.project4 && (
                  <div className="project-details">
                    <p>{projectDetails.project4}</p>
                    <a href= {github_projectDetails.project4} target="_blank" rel="noopener noreferrer">
                      {github_projectDetails.project4}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>
          
          <section id="current-projects" className='section'>
          <h2 className="section-title">What i am currently working on</h2>
            <div className="project-items">
              <div className="project-item">
                <p>Seminar Thesis: Validity of XAI Result</p>
                <button 
                  className="see-more-btn" 
                  onClick={() => toggleCurrentDetails('project1')}
                >
                  {currentProjects.project1 ? 'See less' : 'See more'}
                </button>
                {currentProjects.project1 && (
                  <div className="project-details">
                    <p>{currentWork.project1}</p>
                  </div>
                )}
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
          <section id="github" className="section">
            <h2 className="section-title">leetcode</h2>
            <div className="github-link">
              <a href="https://leetcode.com/einfachManu_/" target="_blank" rel="noopener noreferrer">
                https://leetcode.com/einfachManu_/
              </a>6
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