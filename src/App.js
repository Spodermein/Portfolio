import React, { useState } from 'react';
import './style.css';  // Import the external CSS for styling
import 'font-awesome/css/font-awesome.min.css';


// Hero Section with background gradient
const Hero = ({ handleTabChange }) => (
  <section id="hero">
    <div className="hero-content">
      <h1>Hey, I'm Nguyen Vo Dang Khoa</h1>
      <p>I design things</p>
      <button onClick={() => handleTabChange('projects')}>
        View My Work
      </button>
    </div>
  </section>
);

// Home Section
const Home = () => (
  <section>
    {/* Cards Section */}
    <div className="cards-container">
      <div className="card">
        <i className="fas fa-laptop-code icon"></i> {/* Web Development Icon */}
        <h3>Web Development</h3>
        <p>Building fast, responsive websites with modern technologies like React, Node.js, and more.</p>
      </div>
      <div className="card">
        <i className="fas fa-mobile-alt icon"></i> {/* Mobile App Development Icon */}
        <h3>Mobile App Development</h3>
        <p>Creating seamless mobile applications for Android and iOS with cross-platform frameworks.</p>
      </div>
      <div className="card">
        <i className="fas fa-paint-brush icon"></i> {/* UI/UX Design Icon */}
        <h3>UI/UX Design</h3>
        <p>Designing clean, user-friendly interfaces to enhance the user experience for websites and apps.</p>
      </div>
    </div>
  </section>
);


// About Section
const About = () => (
  <section id="about">
    <div class="about-content">
      <h2>About Me</h2>
      <p>I’m a dedicated Computer Science student with a strong passion for building modern, user-friendly applications. With experience in web and mobile development, I enjoy turning ideas into functional, clean code. I’m always eager to learn new technologies and take on challenging projects that help me grow as a developer. I recently completed my Bachelor of Computer Science at Swinburne University of Technology. I have strong practical experience in web and mobile development, with skills in JavaScript, React, Node.js, Python, Java, C++, C#, and AWS. I enjoy creating clean, responsive applications and continuously expanding my knowledge to build innovative solutions.</p>
    </div>
  </section>
);

// Projects Section
const Projects = () => (
  <section id="projects">
    <h2>My Projects</h2>
    <div class="projects-container">
      <div class="project-card">
      <h3>Project 1</h3>
      <p>Description of your project.</p>
      <a href="https://github.com/Spodermein" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
    </div>
  </section>
);

// Skills Section
const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <div class="skills-list">
      <span class="skill">JavaScript</span>
      <span class="skill">React</span>
      <span class="skill">Node.js</span>
      <span class="skill">Python</span>
    </div>
  </section>
);

// Contact Section
const Contact = () => (
  <section id="contact">
    <h2>Contact Me</h2>
    <form class="contact-form">
      <input type="text" placeholder="Your Name" required />   {/* ✅ self-closing */}
      <input type="email" placeholder="Your Email" required /> {/* ✅ self-closing */}
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
);

const App = () => {
  // Create state to manage active tab
  const [activeTab, setActiveTab] = useState('home');

  // Function to change the active tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">

      {/* Hero Section */}
      <Hero handleTabChange={handleTabChange} /> 

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === 'home' ? 'active' : ''}
          onClick={() => handleTabChange('home')}
        >
          Home
        </button>
        <button
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => handleTabChange('about')}
        >
          About
        </button>
        <button
          className={activeTab === 'projects' ? 'active' : ''}
          onClick={() => handleTabChange('projects')}
        >
          Projects
        </button>
        <button
          className={activeTab === 'skills' ? 'active' : ''}
          onClick={() => handleTabChange('skills')}
        >
          Skills
        </button>
        <button
          className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => handleTabChange('contact')}
        >
          Contact
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'home' && <Home />}
        {activeTab === 'about' && <About />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'skills' && <Skills />}
        {activeTab === 'contact' && <Contact />}
      </div>
    </div>
  );
};

export default App;
