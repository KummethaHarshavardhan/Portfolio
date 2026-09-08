import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaArrowRight, 
  FaFileDownload, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaReact,
  FaNodeJs,
  FaPython
} from 'react-icons/fa';
import { SiMongodb, SiJavascript } from 'react-icons/si';
import Hero3D from './Hero3D';
import { RESUME_URL } from '../../constants';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="section-container hero-grid">
        {/* Left Column: Introduction & CTAs */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Profile Photo Display */}
          <div className="hero-profile-container">
            <div className="hero-profile-frame" title="Kummetha Harshavardhan">
              <img 
                src="/profile/my-profile-photo.jpg" 
                alt="Kummetha Harshavardhan" 
                className="hero-profile-img"
              />
            </div>
            <div className="hero-profile-info">
              <span className="hero-profile-tag">Full-Stack & MERN Developer</span>
              <span className="hero-profile-name">Kummetha Harshavardhan</span>
            </div>
          </div>

          {/* Status & Availability Badges */}
          <div className="hero-badge-group">
            <span className="status-pill">
              <span className="pulse-dot"></span>
              <span>Available for Full-Time Roles</span>
            </span>
            <span className="location-pill">
              <FaMapMarkerAlt />
              <span>Andhra Pradesh, India</span>
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>{' '}
            <span className="gradient-text hero-name">Kummetha Harshavardhan</span>
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle">
            <span className="subtitle-tag">React.js Developer</span>
            <span className="subtitle-sep">|</span>
            <span className="subtitle-tag">MERN Stack Developer</span>
            <span className="subtitle-sep">|</span>
            <span className="subtitle-tag">Python Developer</span>
          </h2>

          {/* Professional Introduction */}
          <p className="hero-description">
            Motivated and enthusiastic software developer with hands-on experience in 
            <strong className="text-highlight"> Python</strong>, 
            <strong className="text-highlight"> JavaScript</strong>, 
            <strong className="text-highlight"> React.js</strong>, 
            <strong className="text-highlight"> Node.js</strong>, 
            <strong className="text-highlight"> Express.js</strong>, 
            <strong className="text-highlight"> MongoDB</strong>, and 
            <strong className="text-highlight"> REST API development</strong>. Eager to build scalable full-stack solutions and deliver high-impact web applications.
          </p>

          {/* Action Buttons */}
          <div className="hero-actions">
            {/* 1. View My Work */}
            <button
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary hero-btn"
              id="hero-view-work-btn"
            >
              <span>View My Work</span>
              <FaArrowRight />
            </button>

            {/* 2. Download Resume */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary hero-btn"
              id="hero-download-resume-btn"
              aria-label="Download or View Resume on Google Drive"
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </a>

            {/* 3. Contact Me */}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-outline hero-btn"
              id="hero-contact-btn"
            >
              <FaEnvelope />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Tech Stack Mini Bar */}
          <div className="hero-tech-stack">
            <span className="tech-stack-label">Core Technologies:</span>
            <div className="tech-icon-pills">
              <span className="tech-badge" title="React.js">
                <FaReact style={{ color: '#61dafb' }} /> React.js
              </span>
              <span className="tech-badge" title="Node.js">
                <FaNodeJs style={{ color: '#68a063' }} /> Node.js
              </span>
              <span className="tech-badge" title="JavaScript">
                <SiJavascript style={{ color: '#f7df1e' }} /> JavaScript
              </span>
              <span className="tech-badge" title="MongoDB">
                <SiMongodb style={{ color: '#47a248' }} /> MongoDB
              </span>
              <span className="tech-badge" title="Python">
                <FaPython style={{ color: '#38bdf8' }} /> Python
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Canvas */}
        <motion.div 
          className="hero-3d-column"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-3d-container">
            <Hero3D />
            <div className="hero-3d-hint">
              <span>Interactive 3D Workspace &bull; Move Cursor to Orbit</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
