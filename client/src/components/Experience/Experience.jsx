import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaCalendarAlt, 
  FaBuilding, 
  FaCheckCircle, 
  FaImage, 
  FaExternalLinkAlt
} from 'react-icons/fa';
import { SiNodedotjs, SiPython, SiHtml5 } from 'react-icons/si';
import './Experience.css';

const EXPERIENCES = [
  {
    id: 'it-spaxious',
    role: 'MERN Intern',
    company: 'IT Spaxious Innovation',
    status: 'ongoing',
    statusLabel: 'Currently Ongoing',
    duration: '3 Months (Ongoing)',
    badgeColor: 'emerald',
    icon: <SiNodedotjs style={{ color: '#68a063' }} />,
    responsibilities: [
      'Worked on an HRMS project as a Backend Developer.',
      'Implemented API fetching using CORS in MERN.',
      'Contributed to problem-solving tasks.'
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CORS', 'REST APIs'],
    imageUrl: null,
    note: 'Active ongoing internship focusing on backend HRMS architecture.'
  },
  {
    id: 'besant-python',
    role: 'Python Intern',
    company: 'Besant Technologies',
    status: 'completed',
    statusLabel: 'Completed Internship',
    duration: '2025/12 – Besant Technology, India (1-Month Virtual Internship)',
    badgeColor: 'cyan',
    icon: <SiPython style={{ color: '#38bdf8' }} />,
    responsibilities: [
      'Completed an Advanced Python internship focusing on Object-Oriented Programming (OOP), file handling, and data processing.',
      'Developed a Python-based File Management System implementing CRUD operations using file handling.',
      'Implemented features such as file creation (.txt, .csv, .pdf), writing, reading, appending, renaming, and deleting files using Python and the OS module.',
      'Applied Object-Oriented Programming concepts such as classes and functions to structure application logic.',
      'Utilized the Pandas library for basic data manipulation and analysis operations.',
      'Improved problem-solving, debugging, and application development skills through practical coding exercises.'
    ],
    techStack: ['Python', 'OOP', 'OS Module', 'File Handling (.txt, .csv, .pdf)', 'Pandas', 'CRUD'],
    imageUrl: '/internship-certificates/python-internship-certificate.png',
    fallbackUrls: [
      '/internship-certificates/python-internship.png',
      '/internship-certificates/Python-Internship-Certificate.png',
      '/internship-certificates/python-internship-certificate.jpg'
    ],
    certificateTitle: 'Besant Technologies Certificate of Internship'
  },
  {
    id: 'igenuine-frontend',
    role: 'Frontend Intern',
    company: 'IGENUINE (iGenuine Learning, Coimbatore)',
    status: 'completed',
    statusLabel: 'Completed Internship',
    duration: '02/06/2025 to 27/05/2026 (2025/11)',
    badgeColor: 'cyan',
    icon: <SiHtml5 style={{ color: '#e34f26' }} />,
    responsibilities: [
      'Completed internship training in HTML and CSS for frontend web development.',
      'Developed responsive web pages using HTML structure and CSS styling.',
      'Implemented layouts, forms, and navigation components for user-friendly web interfaces.',
      'Applied CSS properties such as flexbox, positioning, and styling techniques to design web pages.'
    ],
    techStack: ['HTML5', 'CSS3', 'Flexbox', 'Responsive Design', 'Form Handling', 'UI Navigation'],
    imageUrl: '/internship-certificates/frontend-internship-certificate.png',
    fallbackUrls: [
      '/internship-certificates/frontend-internship.png',
      '/internship-certificates/Frontend-Internship-Certificate.png',
      '/internship-certificates/frontend-internship-certificate.jpg'
    ],
    certificateTitle: 'iGenuine Learning Internship Completion Certificate'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding experience-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FaBriefcase />
            <span>Career Journey</span>
          </span>
          <h2 className="section-title">
            Work & Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on professional experience encompassing full-stack development, ongoing MERN backend projects, and verified completed internships with certificate image previews.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {EXPERIENCES.map((exp, index) => {
            const isOngoing = exp.status === 'ongoing';
            return (
              <motion.div
                key={exp.id}
                className={`timeline-item ${isOngoing ? 'timeline-item-ongoing' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                {/* Timeline Dot & Line Marker */}
                <div className="timeline-marker">
                  <div className={`timeline-dot ${isOngoing ? 'dot-ongoing' : 'dot-completed'}`}>
                    {isOngoing ? <span className="pulse-dot"></span> : <FaCheckCircle />}
                  </div>
                  {index < EXPERIENCES.length - 1 && <div className="timeline-connector"></div>}
                </div>

                {/* Experience Card */}
                <div className={`glass-card experience-card ${isOngoing ? 'card-ongoing' : ''}`}>
                  {/* Top Bar: Role, Status Badge, Duration */}
                  <div className="exp-card-header">
                    <div>
                      <div className="exp-role-title-wrap">
                        <span className="exp-tech-icon">{exp.icon}</span>
                        <h3 className="exp-role-title">{exp.role}</h3>
                      </div>
                      <div className="exp-company-wrap">
                        <FaBuilding className="meta-icon" />
                        <span className="exp-company-name">{exp.company}</span>
                      </div>
                    </div>

                    <div className="exp-status-wrap">
                      {isOngoing ? (
                        <span className="status-badge-ongoing">
                          <span className="pulse-dot"></span>
                          <span>{exp.statusLabel}</span>
                        </span>
                      ) : (
                        <span className="status-badge-completed">
                          <FaCheckCircle />
                          <span>{exp.statusLabel}</span>
                        </span>
                      )}
                      <span className="exp-duration">
                        <FaCalendarAlt className="meta-icon" />
                        <span>{exp.duration}</span>
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="exp-body">
                    <h4 className="exp-resp-heading">Key Responsibilities & Scope:</h4>
                    <ul className="exp-resp-list">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>
                          <FaCheckCircle className="resp-check-icon" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Internship Certificate Preview (If completed) */}
                  {exp.imageUrl && (
                    <div className="internship-cert-block">
                      <h5 className="internship-cert-heading">
                        <FaImage style={{ color: '#38bdf8' }} />
                        <span>Internship Certificate Preview</span>
                      </h5>
                      <div className="internship-cert-preview-frame">
                        <img
                          src={exp.imageUrl}
                          alt={`${exp.company} Internship Certificate`}
                          className="internship-cert-preview-img"
                          loading="lazy"
                          onError={(e) => {
                            const attemptedIndex = parseInt(e.target.dataset.fallbackIndex || '0', 10);
                            if (exp.fallbackUrls && attemptedIndex < exp.fallbackUrls.length) {
                              e.target.dataset.fallbackIndex = String(attemptedIndex + 1);
                              e.target.src = exp.fallbackUrls[attemptedIndex];
                            } else if (!e.target.dataset.usedDefault) {
                              // All known filenames failed to load — show a default
                              // placeholder instead of a broken image icon. Replace this
                              // file with the real certificate image to update the preview.
                              e.target.dataset.usedDefault = 'true';
                              e.target.src = '/internship-certificates/certificate-placeholder.svg';
                            }
                          }}
                        />
                        <div className="internship-cert-preview-overlay">
                          <a
                            href={exp.imageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="internship-cert-overlay-btn"
                          >
                            <FaExternalLinkAlt />
                            <span>View Full Certificate</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Pills & View Certificate Action */}
                  <div className="exp-footer">
                    <div className="exp-tech-pills">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="tech-pill">{tech}</span>
                      ))}
                    </div>

                    {/* View Certificate Action (Image View in new tab) */}
                    {exp.imageUrl && (
                      <div className="exp-actions">
                        <a
                          href={exp.imageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                          aria-label={`View Certificate for ${exp.role}`}
                        >
                          <FaImage style={{ color: '#38bdf8' }} />
                          <span>View Certificate</span>
                          <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
