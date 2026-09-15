import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
  FaTerminal
} from 'react-icons/fa';
import './Footer.css';

import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '../../constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="portfolio-footer">
      <div className="section-container footer-inner">
        {/* Top Footer Row */}
        <div className="footer-top-row">
          {/* Brand & Brief */}
          <div className="footer-brand-side">
            <div className="footer-logo">
              <div className="footer-profile-box" title="Kummetha Harshavardhan">
                <img
                  src="/profile/my-profile-photo.jpg"
                  alt="Kummetha Harshavardhan"
                  className="footer-profile-photo"
                />
              </div>
              <span className="footer-logo-text">Kummetha Harshavardhan</span>
            </div>
            <p className="footer-brief">
              React.js Developer &bull; MERN Stack Developer &bull; Python Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-social-links">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="GitHub (opens in new tab)"
            >
              <FaGithub />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="LinkedIn (opens in new tab)"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="footer-social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Back to Top Action */}
          <div className="footer-top-action">
            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              aria-label="Scroll back to top of page"
              id="footer-back-to-top-btn"
            >
              <span>Back to Top</span>
              <FaArrowUp />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Credit Row */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; 2026 <strong>Kummetha Harshavardhan</strong>. All rights reserved.
          </p>
          <p className="built-with-text">
            Built with <strong>React.js</strong> + <strong>Vite</strong> &bull; Styled with Vanilla CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
