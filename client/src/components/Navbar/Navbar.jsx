import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaFileDownload, 
  FaBars, 
  FaTimes
} from 'react-icons/fa';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

const GITHUB_URL = "https://github.com/KummethaHarshavardhan";
const LINKEDIN_URL = "https://www.linkedin.com/in/harshavardhan-kummetha-69089228a/";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
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
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo / Profile Photo Avatar */}
        <a 
          href="#hero" 
          className="navbar-brand" 
          onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
          aria-label="Kummetha Harshavardhan Home"
        >
          <div className="navbar-profile-box" title="Kummetha Harshavardhan">
            <img 
              src="/profile/my-profile-photo.jpg" 
              alt="Kummetha Harshavardhan" 
              className="navbar-profile-photo"
            />
          </div>
          <div className="brand-text">
            <span className="brand-name">Kummetha Harshavardhan</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="nav-item">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`nav-link-btn ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="active-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Action Icons & Resume Button */}
        <div className="navbar-actions">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="social-nav-link"
            aria-label="GitHub Profile (opens in new tab)"
            title="GitHub Profile"
          >
            <FaGithub />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="social-nav-link"
            aria-label="LinkedIn Profile (opens in new tab)"
            title="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href="/resume/Kummetha-Harshavardhan-Resume.pdf"
            download="Kummetha-Harshavardhan-Resume.pdf"
            className="btn btn-primary btn-sm resume-nav-btn"
          >
            <FaFileDownload />
            <span>Resume</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="mobile-menu-inner">
              <ul className="mobile-nav-list">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mobile-socials">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-btn"
                  aria-label="GitHub"
                >
                  <FaGithub /> <span>GitHub</span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-btn"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin /> <span>LinkedIn</span>
                </a>
              </div>

              <div className="mobile-resume-action">
                <a
                  href="/resume/Kummetha-Harshavardhan-Resume.pdf"
                  download="Kummetha-Harshavardhan-Resume.pdf"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <FaFileDownload />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
