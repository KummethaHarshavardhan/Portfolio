import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFilePdf,
  FaDownload,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaShieldAlt,
  FaFileAlt
} from 'react-icons/fa';
import { RESUME_URL } from '../../constants';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="section-padding resume-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FaFileAlt />
            <span>Curriculum Vitae</span>
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            Access my complete, verified professional resume for offline review, job applications, and recruitment evaluation.
          </p>
        </div>

        {/* Resume Action Card */}
        <motion.div
          className="glass-card resume-main-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="resume-grid">
            {/* Left: Document Information & Download Actions */}
            <div className="resume-info-panel">
              <div className="resume-badge-group">
                <span className="pdf-type-badge">
                  <FaFilePdf style={{ color: '#ef4444' }} />
                  <span>Resume (Google Drive)</span>
                </span>
                <span className="updated-badge">
                  <FaShieldAlt style={{ color: '#10b981' }} />
                  <span>Verified Link</span>
                </span>
              </div>

              <h3 className="resume-doc-title">Kummetha Harshavardhan</h3>
              <p className="resume-doc-subtitle">
                Software Engineer &bull; React.js &bull; MERN Stack &bull; Python Developer
              </p>

              <p className="resume-doc-summary">
                My resume provides a comprehensive breakdown of my educational foundation at Audisankara College of Engineering & Technology (84%), hands-on MERN & Python internship roles, full-stack project implementations, and technical competencies.
              </p>

              {/* Verified Checklist */}
              <div className="resume-verified-checklist">
                <div className="checklist-item">
                  <FaCheckCircle className="chk-icon" />
                  <span>Full-Stack Projects: Smart Expense Tracker & Student Management System</span>
                </div>
                <div className="checklist-item">
                  <FaCheckCircle className="chk-icon" />
                  <span>Internships: IT Spaxious Innovation (MERN Ongoing), Besant Technologies (Python), iGenuine Learning</span>
                </div>
                <div className="checklist-item">
                  <FaCheckCircle className="chk-icon" />
                  <span>Verified Training: Python & Data Analytics Certification IDs</span>
                </div>
              </div>

              {/* Action Buttons: View & Download */}
              <div className="resume-action-buttons">
                {/* 1. View Resume Button */}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary resume-btn"
                  id="resume-view-action-btn"
                  aria-label="View Resume on Google Drive"
                >
                  <FaExternalLinkAlt />
                  <span>View Resume</span>
                </a>

                {/* 2. Download Resume Button */}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary resume-btn"
                  id="resume-download-action-btn"
                  aria-label="Download or View Resume on Google Drive"
                >
                  <FaDownload />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Right: Interactive Resume Preview Card */}
            <div className="resume-preview-panel">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-paper-link"
                title="Click to view full resume on Google Drive"
                aria-label="Open Resume on Google Drive"
              >
                <div className="resume-paper-preview">
                  <div className="paper-header">
                    <div className="paper-name">K HARSHAVARDHAN</div>
                    <div className="paper-contact">harshakummetha78@gmail.com &bull; +91 6281240878</div>
                    <div className="paper-location">Tadipatri / Cheemalavagupalli, Andhra Pradesh, India</div>
                  </div>

                  <div className="paper-section">
                    <div className="paper-sec-title">CAREER OBJECTIVE</div>
                    <p className="paper-text">
                      Motivated and enthusiastic Software Engineer with hands-on experience in Python, JavaScript, React.js, Node.js, Express.js, MongoDB, and REST API development. Strong foundation in Object-Oriented Programming and software development principles...
                    </p>
                  </div>

                  <div className="paper-section">
                    <div className="paper-sec-title">EDUCATION</div>
                    <div className="paper-row">
                      <span><strong>B.Tech</strong> &bull; Audisankara College of Engg & Tech</span>
                      <span className="paper-score">84% (2022 – 2026)</span>
                    </div>
                    <div className="paper-row">
                      <span><strong>Intermediate</strong> &bull; Nalanda Junior College</span>
                      <span className="paper-score">81% (2020 – 2022)</span>
                    </div>
                  </div>

                  <div className="paper-section">
                    <div className="paper-sec-title">CORE PROJECTS</div>
                    <div className="paper-proj">
                      <strong>Smart Expense Tracker (MERN)</strong>: Full-stack CRUD with JWT auth, 10+ REST endpoints, MongoDB Mongoose.
                    </div>
                  </div>

                  <div className="paper-watermark">
                    <span>VIEW RESUME</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
