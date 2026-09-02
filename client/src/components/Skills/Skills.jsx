import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub, 
  FaLock, 
  FaDatabase, 
  FaLaptopCode,
  FaKey,
  FaCheckDouble
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiVite, 
  SiAxios, 
  SiExpress, 
  SiDjango, 
  SiMongodb, 
  SiMysql, 
  SiPostman, 
  SiPycharm,  
} from 'react-icons/si';
import { TbApi, TbBrandOffice } from 'react-icons/tb';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    id: 'all',
    label: 'All Skills'
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <FaReact />
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    icon: <FaNodeJs />
  },
  {
    id: 'programming',
    label: 'Programming',
    icon: <FaPython />
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: <FaDatabase />
  },
  {
    id: 'auth',
    label: 'Auth & Security',
    icon: <FaLock />
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: <FaGitAlt />
  }
];

const SKILLS_DATA = [
  // Frontend
  {
    name: 'React.js',
    category: 'frontend',
    icon: <FaReact style={{ color: '#61dafb' }} />,
    description: 'Component architecture, hooks, state management & SPA routing'
  },
  {
    name: 'Vite',
    category: 'frontend',
    icon: <SiVite style={{ color: '#bd34fe' }} />,
    description: 'Lightning-fast modern frontend build tooling & development server'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    icon: <SiJavascript style={{ color: '#f7df1e' }} />,
    description: 'Modern ES6+ syntax, asynchronous programming, promises & DOM'
  },
  {
    name: 'HTML5',
    category: 'frontend',
    icon: <FaHtml5 style={{ color: '#e34f26' }} />,
    description: 'Semantic HTML markup, web accessibility & structured documents'
  },
  {
    name: 'CSS3',
    category: 'frontend',
    icon: <FaCss3Alt style={{ color: '#1572b6' }} />,
    description: 'Flexbox, Grid, keyframe animations, responsive design & layouts'
  },
  {
    name: 'Axios',
    category: 'frontend',
    icon: <SiAxios style={{ color: '#5a29e4' }} />,
    description: 'HTTP client for REST API communication, interceptors & error handlers'
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    icon: <FaNodeJs style={{ color: '#68a063' }} />,
    description: 'Server-side JavaScript runtime environment & event-driven architecture'
  },
  {
    name: 'Express.js',
    category: 'backend',
    icon: <SiExpress style={{ color: '#ffffff' }} />,
    description: 'Minimalist web framework for Node.js REST API creation & routing'
  },
  {
    name: 'Django',
    category: 'backend',
    icon: <SiDjango style={{ color: '#092e20' }} />,
    description: 'High-level Python web framework for backend architectures'
  },
  {
    name: 'REST APIs',
    category: 'backend',
    icon: <TbApi style={{ color: '#06b6d4' }} />,
    description: 'RESTful endpoint design, CRUD operations, CORS handling & status codes'
  },

  // Programming
  {
    name: 'Python',
    category: 'programming',
    icon: <FaPython style={{ color: '#38bdf8' }} />,
    description: 'OOP, file handling (.txt/.csv/.pdf), exception management & Pandas'
  },
  {
    name: 'JavaScript',
    category: 'programming',
    icon: <SiJavascript style={{ color: '#f7df1e' }} />,
    description: 'Core logic, data structures, algorithms & functional concepts'
  },

  // Databases
  {
    name: 'MongoDB',
    category: 'databases',
    icon: <SiMongodb style={{ color: '#47a248' }} />,
    description: 'NoSQL document database, Mongoose ODM, collections & querying'
  },
  {
    name: 'MySQL',
    category: 'databases',
    icon: <SiMysql style={{ color: '#00758f' }} />,
    description: 'Relational database schema design, queries, joins & constraints'
  },
  {
    name: 'SQL',
    category: 'databases',
    icon: <FaDatabase style={{ color: '#3b82f6' }} />,
    description: 'Structured Query Language, table relationships & data integrity'
  },

  // Auth & Security
  {
    name: 'JWT (JSON Web Tokens)',
    category: 'auth',
    icon: <FaKey style={{ color: '#ec4899' }} />,
    description: 'Token generation, signing, decoding & protected route verification'
  },
  {
    name: 'Authentication',
    category: 'auth',
    icon: <FaLock style={{ color: '#a855f7' }} />,
    description: 'Secure user login, password hashing & session management'
  },
  {
    name: 'Authorization',
    category: 'auth',
    icon: <FaCheckDouble style={{ color: '#10b981' }} />,
    description: 'Role-based access control (RBAC) & protected resource endpoints'
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    icon: <FaGitAlt style={{ color: '#f05032' }} />,
    description: 'Distributed version control, branching, committing & merging'
  },
  {
    name: 'GitHub',
    category: 'tools',
    icon: <FaGithub style={{ color: '#ffffff' }} />,
    description: 'Remote repository hosting, project tracking & collaboration'
  },
  {
    name: 'Postman',
    category: 'tools',
    icon: <SiPostman style={{ color: '#ff6c37' }} />,
    description: 'API endpoint testing, header inspection & request verification'
  },
  
  {
    name: 'PyCharm',
    category: 'tools',
    icon: <SiPycharm style={{ color: '#21d789' }} />,
    description: 'Python development environment for scripting & backend systems'
  },
  {
    name: 'MS Office & Excel',
    category: 'tools',
    icon: <TbBrandOffice style={{ color: '#d83b01' }} />,
    description: 'Data documentation, spreadsheet computation & technical reporting'
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding skills-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FaLaptopCode />
            <span>Technical Stack</span>
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical capabilities spanning frontend, backend, databases, authentication, and developer tools.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="skills-filter-container">
          <div className="skills-filter-scroll">
            {SKILL_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.icon && <span className="filter-icon">{category.icon}</span>}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Animated Grid */}
        <motion.div 
          className="skills-grid"
          layout
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="glass-card glass-card-hover skill-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              layout
            >
              <div className="skill-card-top">
                <div className="skill-icon-wrap">
                  {skill.icon}
                </div>
                <span className="skill-cat-tag">{skill.category}</span>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
