import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaAward, 
  FaUniversity,
  FaSchool
} from 'react-icons/fa';
import './Education.css';

const EDUCATION_DATA = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Audisankara College of Engineering & Technology',
    location: 'Gudur, Andhra Pradesh, India',
    duration: '2022 – 2026',
    score: '84%',
    scoreLabel: 'Aggregate Percentage',
    icon: <FaUniversity />,
    status: 'Graduating 2026',
    description: 'Comprehensive undergraduate program covering Object-Oriented Programming, Data Structures, Web Technologies, Database Management Systems, and Software Engineering principles.'
  },
  {
    degree: 'Intermediate Education (Class XII)',
    institution: 'Nalanda Junior College',
    location: 'Anantapur, Andhra Pradesh, India',
    duration: '2020 – 2022',
    score: '81%',
    scoreLabel: 'Percentage',
    icon: <FaSchool />,
    status: 'Completed',
    description: 'Higher secondary education with a strong analytical foundation in Mathematics, Physics, and Chemistry (MPC).'
  },
  {
    degree: 'Secondary School of Education (Class X)',
    institution: 'Z.P. High School',
    location: 'Cheemalavagupalli, Andhra Pradesh, India',
    duration: '2019 – 2020',
    score: '98%',
    scoreLabel: 'Percentage',
    icon: <FaAward />,
    status: 'Completed with Distinction',
    description: 'Foundational academic education completed with an exemplary 98% distinction.'
  }
];

const Education = () => {
  return (
    <section id="education" className="section-padding education-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FaGraduationCap />
            <span>Academic Background</span>
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal educational milestones with verified academic achievements and coursework foundations.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-grid">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card glass-card-hover education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Top Row: Icon & Score Badge */}
              <div className="edu-top-row">
                <div className="edu-icon-badge">
                  {item.icon}
                </div>
                <div className="edu-score-pill">
                  <FaAward className="award-icon" />
                  <span className="score-value">{item.score}</span>
                  <span className="score-type">({item.scoreLabel})</span>
                </div>
              </div>

              {/* Degree & Institution */}
              <h3 className="edu-degree-title">{item.degree}</h3>
              <h4 className="edu-institution-name">{item.institution}</h4>

              {/* Meta Info */}
              <div className="edu-meta-list">
                <span className="edu-meta-item">
                  <FaCalendarAlt />
                  <span>{item.duration}</span>
                </span>
                <span className="edu-meta-item">
                  <FaMapMarkerAlt />
                  <span>{item.location}</span>
                </span>
              </div>

              {/* Description */}
              <p className="edu-desc-text">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
