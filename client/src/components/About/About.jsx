import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserGraduate, 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaShieldAlt, 
  FaBug,
  FaCheckCircle
} from 'react-icons/fa';
import { BsLightningChargeFill } from 'react-icons/bs';
import './About.css';

const About = () => {
  const coreCompetencies = [
    {
      icon: <FaCode className="competency-icon" style={{ color: '#61dafb' }} />,
      title: 'Frontend Development',
      description: 'Building clean, component-driven user interfaces with React.js, Vite, JavaScript, HTML5, CSS3, Flexbox, and responsive layouts.'
    },
    {
      icon: <FaServer className="competency-icon" style={{ color: '#68a063' }} />,
      title: 'Backend & REST APIs',
      description: 'Developing RESTful API endpoints with Node.js, Express.js, and Python/Django; managing CORS, request validation, and routing.'
    },
    {
      icon: <FaDatabase className="competency-icon" style={{ color: '#10b981' }} />,
      title: 'Database Architecture',
      description: 'Schema modeling, CRUD operations, and data persistence using MongoDB (with Mongoose) as well as relational SQL/MySQL.'
    },
    {
      icon: <FaShieldAlt className="competency-icon" style={{ color: '#a855f7' }} />,
      title: 'Security & Auth',
      description: 'Implementing secure user authentication and authorization mechanisms utilizing JSON Web Tokens (JWT) and protected routes.'
    },
    {
      icon: <FaBug className="competency-icon" style={{ color: '#f59e0b' }} />,
      title: 'Debugging & API Testing',
      description: 'Systematic problem solving, endpoint verification with Postman, and structured debugging across frontend and backend lifecycles.'
    },
    {
      icon: <BsLightningChargeFill className="competency-icon" style={{ color: '#ec4899' }} />,
      title: 'Axios Client Integration',
      description: 'Seamless client-server data synchronization with Axios, handling async lifecycles, error payloads, and state updates.'
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FaUserGraduate />
            <span>About Me</span>
          </span>
          <h2 className="section-title">
            Passionate Developer with <span className="gradient-text">Practical Full-Stack Experience</span>
          </h2>
          <p className="section-subtitle">
            A snapshot of my software engineering background, internship engagements, and technical problem-solving foundation.
          </p>
        </div>

        <div className="about-grid">
          
          <motion.div 
            className="glass-card about-bio-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-bio-header">
              <div className="about-profile-frame" title="Kummetha Harshavardhan">
                <img 
                  src="/profile/my-profile-photo.jpg" 
                  alt="Kummetha Harshavardhan" 
                  className="about-profile-photo"
                />
              </div>
              <div className="about-bio-title-wrap">
                <h3 className="about-bio-heading">
                  Kummetha Harshavardhan
                </h3>
                <span className="about-bio-sub">Full-Stack & MERN Developer &bull; B.Tech (84%)</span>
              </div>
            </div>
            
            <p className="about-bio-text">
              I am a recent <strong>Bachelor of Technology</strong> graduate from <strong>Audisankara College of Engineering & Technology</strong> (graduating with <strong>84%</strong> aggregate), passionate about modern web engineering and full-stack software development.
            </p>

            <p className="about-bio-text">
              Through my completed internships and ongoing role as a <strong>MERN Backend Intern at IT Spaxious Innovation</strong>, I have gained valuable hands-on experience building full-stack web applications, designing RESTful APIs, configuring CORS, and managing secure database schemas.
            </p>

            <p className="about-bio-text">
              My technical journey is grounded in solid <strong>Object-Oriented Programming (OOP)</strong> fundamentals, clean version control workflows with <strong>Git & GitHub</strong>, API testing with <strong>Postman</strong>, and a dedication to writing readable, maintainable code.
            </p>

            <div className="about-highlights-list">
              <div className="highlight-item">
                <FaCheckCircle className="check-icon" />
                <span>Hands-on MERN & Python developer with real project deployments</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle className="check-icon" />
                <span>Strong grasp of REST API lifecycle, CORS, and JWT authentication</span>
              </div>
              <div className="highlight-item">
                <FaCheckCircle className="check-icon" />
                <span>Collaborative mindset with verified internship & training track record</span>
              </div>
            </div>
          </motion.div>


          <div className="about-competencies-grid">
            {coreCompetencies.map((item, index) => (
              <motion.div
                key={index}
                className="glass-card glass-card-hover competency-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="competency-icon-box">
                  {item.icon}
                </div>
                <h4 className="competency-title">{item.title}</h4>
                <p className="competency-desc">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
