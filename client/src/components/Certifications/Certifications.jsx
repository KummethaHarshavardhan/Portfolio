import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCertificate, 
  FaCalendarAlt, 
  FaBuilding, 
  FaImage, 
  FaExternalLinkAlt, 
  FaCheckCircle,
  FaShieldAlt
} from 'react-icons/fa';
import { SiPython } from 'react-icons/si';
import { BsBarChartFill } from 'react-icons/bs';
import './Certifications.css';

const CERTIFICATES_DATA = [
  {
    id: 'cert-python',
    title: 'Python Training Program',
    courseName: 'Python Training (Core & Advanced)',
    organization: 'Besant Technologies',
    date: '23-Dec-2025',
    certificateId: '25BFT455192',
    icon: <SiPython style={{ color: '#38bdf8' }} />,
    imageUrl: '/certificates/python-certificate.png',
    fallbackUrls: [
      '/certificates/python-training-certificate.png',
      '/certificates/Python-Certificate.png',
      '/certificates/python-certificate.jpg'
    ],
    topics: [
      'Core & Advanced Python Architecture',
      'Object-Oriented Programming (OOP)',
      'File Handling (.txt, .csv, .pdf CRUD)',
      'Exception Management & OS Module'
    ],
    authority: 'Mohamed Ismail (Head of Training)'
  },
  {
    id: 'cert-analytics',
    title: 'Data Analytics Program',
    courseName: 'Data Analytics Program',
    organization: 'Besant Technologies',
    date: '24-Aug-2025',
    certificateId: '25BFT426136',
    icon: <BsBarChartFill style={{ color: '#10b981' }} />,
    imageUrl: '/certificates/data-analytics-certificate.png',
    fallbackUrls: [
      '/certificates/Data-Analytics-Certificate.png',
      '/certificates/data-analytics-certificate.jpg',
      '/certificates/data-analytics.png'
    ],
    topics: [
      'Data Analytics Fundamentals',
      'Data Processing & Manipulation',
      'Pandas Library Operations',
      'Analytical Logic & Reporting'
    ],
    authority: 'Mohamed Ismail (Head of Training)'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding certifications-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FaCertificate />
            <span>Verified Credentials</span>
          </span>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Training</span>
          </h2>
          <p className="section-subtitle">
            Industry-recognized training programs with authentic certificate image previews and direct view in browser.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications-grid">
          {CERTIFICATES_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="glass-card glass-card-hover cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              {/* Certificate Image Preview Box */}
              <div className="cert-preview-frame">
                <img
                  src={cert.imageUrl}
                  alt={`${cert.title} Certificate`}
                  className="cert-preview-img"
                  loading="lazy"
                  onError={(e) => {
                    const attemptedIndex = parseInt(e.target.dataset.fallbackIndex || '0', 10);
                    if (cert.fallbackUrls && attemptedIndex < cert.fallbackUrls.length) {
                      e.target.dataset.fallbackIndex = String(attemptedIndex + 1);
                      e.target.src = cert.fallbackUrls[attemptedIndex];
                    } else if (!e.target.dataset.usedDefault) {
                      e.target.dataset.usedDefault = 'true';
                      e.target.src = '/certificates/certificate-placeholder.svg';
                    }
                  }}
                />
                <div className="cert-preview-overlay">
                  <a
                    href={cert.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-preview-overlay-btn"
                  >
                    <FaExternalLinkAlt />
                    <span>View Full Certificate</span>
                  </a>
                </div>
              </div>

              <div className="cert-top-row">
                <div className="cert-icon-wrap">
                  {cert.icon}
                </div>
                <div className="cert-id-badge" title={`Verified Certificate ID: ${cert.certificateId}`}>
                  <FaShieldAlt className="shield-icon" />
                  <span>ID: <strong>{cert.certificateId}</strong></span>
                </div>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-org-meta">
                <FaBuilding className="meta-icon" />
                <span>{cert.organization}</span>
              </div>

              <div className="cert-meta-bar">
                <span className="cert-meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  <span>Completed: {cert.date}</span>
                </span>
              </div>

              <div className="cert-topics-block">
                <h4 className="topics-heading">Covered Topics & Competencies:</h4>
                <ul className="cert-topics-list">
                  {cert.topics.map((topic, i) => (
                    <li key={i}>
                      <FaCheckCircle className="topic-check" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cert-footer">
                <span className="cert-authority-text">
                  Signatory: {cert.authority}
                </span>
                <a
                  href={cert.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm cert-btn"
                  id={`view-cert-${cert.certificateId}`}
                >
                  <FaImage style={{ color: '#38bdf8' }} />
                  <span>View Certificate</span>
                  <FaExternalLinkAlt style={{ fontSize: '0.75rem' }} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
