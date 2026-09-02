import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFolderOpen, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaStar, 
  FaLayerGroup, 
  FaCheckCircle,
  FaShieldAlt,
  FaChartLine,
  FaServer,
  FaDatabase,
  FaCode
} from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiAxios, SiJsonwebtokens, SiPostman } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section-padding projects-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FaFolderOpen />
            <span>Featured Portfolio</span>
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Demonstrating real-world full-stack development, RESTful API architecture, JWT authentication, and responsive user interfaces.
          </p>
        </div>

        {/* Projects List */}
        <div className="projects-showcase">
          
          {/* ============================================================
              FEATURED PROJECT: SMART EXPENSE TRACKER
              ============================================================ */}
          <motion.div 
            className="glass-card project-card featured-project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {/* Featured Badge */}
            <div className="featured-badge-ribbon">
              <FaStar />
              <span>Featured Full-Stack Project</span>
            </div>

            <div className="project-grid">
              {/* Project Details */}
              <div className="project-info-side">
                <div className="project-meta">
                  <span className="project-type-tag">Full-Stack MERN Application</span>
                </div>

                <h3 className="project-heading">Smart Expense Tracker</h3>

                <p className="project-overview-text">
                  Built a robust full-stack MERN expense management system with secure JWT-based user authentication and authorization. Enables users to manage income, record categorized expenses, and view real-time financial health summaries.
                </p>

                {/* Key Features List */}
                <div className="project-features-block">
                  <h4 className="features-subheading">Key Implementation Highlights:</h4>
                  <ul className="project-features-list">
                    <li>
                      <FaCheckCircle className="feat-bullet" />
                      <span><strong>User Authentication & Authorization:</strong> Secure token-based access with JWT and protected API middleware.</span>
                    </li>
                    <li>
                      <FaCheckCircle className="feat-bullet" />
                      <span><strong>Income & Expense CRUD:</strong> Complete lifecycle management for transactions across multiple customizable categories.</span>
                    </li>
                    <li>
                      <FaCheckCircle className="feat-bullet" />
                      <span><strong>Real-Time Financial Summaries:</strong> Instant calculations for balances, cashflow, and category breakdowns.</span>
                    </li>
                    <li>
                      <FaCheckCircle className="feat-bullet" />
                      <span><strong>10+ RESTful API Endpoints:</strong> Built with Node.js & Express.js for scalable transaction querying and state persistence.</span>
                    </li>
                    <li>
                      <FaCheckCircle className="feat-bullet" />
                      <span><strong>Mongoose Schema Modeling:</strong> Strongly validated database schemas in MongoDB for users and transactions.</span>
                    </li>
                    <li>
                      <FaCheckCircle className="feat-bullet" />
                      <span><strong>Axios Client Integration:</strong> Seamless client-server communication with responsive desktop & mobile layouts.</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="project-tech-tags">
                  <span className="tech-pill"><SiReact /> React.js</span>
                  <span className="tech-pill"><SiNodedotjs /> Node.js</span>
                  <span className="tech-pill"><SiExpress /> Express.js</span>
                  <span className="tech-pill"><SiMongodb /> MongoDB</span>
                  <span className="tech-pill"><SiAxios /> Axios</span>
                  <span className="tech-pill"><SiJsonwebtokens /> JWT</span>
                  <span className="tech-pill">Mongoose</span>
                  <span className="tech-pill">JavaScript</span>
                  <span className="tech-pill">HTML5/CSS3</span>
                </div>

                {/* Project Links */}
                <div className="project-cta-group">
                  <a
                    href="https://github.com/KummethaHarshavardhan/smart_expense_tracker.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    id="project-expense-tracker-repo"
                  >
                    <FaGithub />
                    <span>View Repository on GitHub</span>
                  </a>
                </div>
              </div>

              {/* Visual Architecture Diagram */}
              <div className="project-diagram-side">
                <div className="architecture-panel">
                  <div className="arch-header">
                    <FaLayerGroup />
                    <span>MERN System Architecture Flow</span>
                  </div>

                  <div className="arch-flow-container">
                    {/* Node 1: Client */}
                    <div className="arch-node arch-client">
                      <div className="arch-node-icon"><SiReact style={{ color: '#61dafb' }} /></div>
                      <div className="arch-node-info">
                        <span className="arch-node-name">Frontend Client</span>
                        <span className="arch-node-tech">React.js + Vite</span>
                        <span className="arch-node-detail">Responsive UI / State</span>
                      </div>
                    </div>

                    {/* Flow Arrow 1 */}
                    <div className="arch-arrow">
                      <div className="arch-arrow-line"></div>
                      <span className="arch-arrow-badge"><SiAxios /> Axios HTTP Requests (REST)</span>
                      <div className="arch-arrow-line"></div>
                    </div>

                    {/* Node 2: Backend */}
                    <div className="arch-node arch-backend">
                      <div className="arch-node-icon"><SiNodedotjs style={{ color: '#68a063' }} /></div>
                      <div className="arch-node-info">
                        <span className="arch-node-name">Backend REST API</span>
                        <span className="arch-node-tech">Node.js + Express.js</span>
                        <span className="arch-node-detail">JWT Auth & 10+ Endpoints</span>
                      </div>
                    </div>

                    {/* Flow Arrow 2 */}
                    <div className="arch-arrow">
                      <div className="arch-arrow-line"></div>
                      <span className="arch-arrow-badge">Mongoose Schema Validation</span>
                      <div className="arch-arrow-line"></div>
                    </div>

                    {/* Node 3: Database */}
                    <div className="arch-node arch-database">
                      <div className="arch-node-icon"><SiMongodb style={{ color: '#47a248' }} /></div>
                      <div className="arch-node-info">
                        <span className="arch-node-name">Database Layer</span>
                        <span className="arch-node-tech">MongoDB</span>
                        <span className="arch-node-detail">User & Transaction Collections</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ============================================================
              PROJECT 2: STUDENT MANAGEMENT SYSTEM (CRUD REST API)
              ============================================================ */}
          <motion.div 
            className="glass-card project-card secondary-project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="project-grid">
              {/* Project Details */}
              <div className="project-info-side">
                <div className="project-meta">
                  <span className="project-type-tag">Backend RESTful API Service</span>
                </div>

                <h3 className="project-heading">Student Management System</h3>

                <p className="project-overview-text">
                  A comprehensive backend REST API engineered to manage student records, admissions data, and academic queries with structured request validation and robust database persistence.
                </p>

                {/* Key Features List */}
                <div className="project-features-block">
                  <h4 className="features-subheading">Key Implementation Highlights:</h4>
                  <ul className="project-features-list">
                    <li>
                      <FaCheckCircle className="feat-bullet" />
                      <span><strong>Complete CRUD Operations:</strong> Implemented Create, Read, Update, and Delete endpoints for student record lifecycles.</span>
                    </li>
                    <li>
                      <FaCheckCircle className="feat-bullet" />
                      <span><strong>RESTful API Architecture:</strong> Designed clean routing endpoints following standard HTTP methods and status codes.</span>
                    </li>
                    <li>
                      <FaCheckCircle className="feat-bullet" />
                      <span><strong>Mongoose Schema & Validation:</strong> Modeled student data constraints, field requirements, and database indexing.</span>
                    </li>
                    <li>
                      <FaCheckCircle className="feat-bullet" />
                      <span><strong>Postman Testing Suite:</strong> Thoroughly tested and verified edge cases, request headers, and payload structures.</span>
                    </li>
                    <li>
                      <FaCheckCircle className="feat-bullet" />
                      <span><strong>Error Handling:</strong> Structured centralized error responses for invalid IDs, missing parameters, and server exceptions.</span>
                    </li>
                    <li>
                      <FaCheckCircle className="feat-bullet" />
                      <span><strong>Version Control:</strong> Managed code revisions and repository structure with Git and GitHub.</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="project-tech-tags">
                  <span className="tech-pill"><SiNodedotjs /> Node.js</span>
                  <span className="tech-pill"><SiExpress /> Express.js</span>
                  <span className="tech-pill"><SiMongodb /> MongoDB</span>
                  <span className="tech-pill">Mongoose</span>
                  <span className="tech-pill">REST APIs</span>
                  <span className="tech-pill"><SiPostman /> Postman</span>
                  <span className="tech-pill">Git / GitHub</span>
                </div>

                {/* Project Links */}
                <div className="project-cta-group">
                  <a
                    href="https://github.com/KummethaHarshavardhan/Task3.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    id="project-student-system-repo"
                  >
                    <FaGithub />
                    <span>View Repository on GitHub</span>
                  </a>
                </div>
              </div>

              {/* Backend API Endpoints Showcase */}
              <div className="project-diagram-side">
                <div className="api-endpoints-card">
                  <div className="api-card-header">
                    <FaServer />
                    <span>REST API Endpoints Specification</span>
                  </div>

                  <div className="endpoints-list">
                    <div className="endpoint-row">
                      <span className="http-badge http-post">POST</span>
                      <span className="endpoint-path">/api/students</span>
                      <span className="endpoint-desc">Create new student record</span>
                    </div>

                    <div className="endpoint-row">
                      <span className="http-badge http-get">GET</span>
                      <span className="endpoint-path">/api/students</span>
                      <span className="endpoint-desc">Fetch all student records</span>
                    </div>

                    <div className="endpoint-row">
                      <span className="http-badge http-get">GET</span>
                      <span className="endpoint-path">/api/students/:id</span>
                      <span className="endpoint-desc">Get student by unique ID</span>
                    </div>

                    <div className="endpoint-row">
                      <span className="http-badge http-put">PUT</span>
                      <span className="endpoint-path">/api/students/:id</span>
                      <span className="endpoint-desc">Update existing student</span>
                    </div>

                    <div className="endpoint-row">
                      <span className="http-badge http-delete">DELETE</span>
                      <span className="endpoint-path">/api/students/:id</span>
                      <span className="endpoint-desc">Remove student record</span>
                    </div>
                  </div>

                  <div className="api-testing-note">
                    <SiPostman style={{ color: '#ff6c37' }} />
                    <span>All endpoints verified with Postman collection</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
