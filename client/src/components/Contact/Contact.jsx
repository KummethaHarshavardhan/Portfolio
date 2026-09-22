import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaWhatsapp,
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaFileDownload,
  FaArrowRight,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner
} from 'react-icons/fa';
import './Contact.css';

import { RESUME_DOWNLOAD_URL, GITHUB_URL, LINKEDIN_URL, EMAIL } from '../../constants';
const PHONE = "+91 6281240878";
// WhatsApp deep-link needs the number with country code, no spaces/plus sign.
const WHATSAPP_NUMBER = PHONE.replace(/[^\d]/g, '');
const LOCATION = "chemmalavagupalli, Andhra Pradesh, India";


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5718';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await axios.post(`${API_URL}/api/contact`, formData);
      setStatus('success');
      setStatusMessage(response.data?.message || 'Your message has been sent!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      const backendMessage = error.response?.data?.message;
      setStatusMessage(
        backendMessage || 'Could not send your message right now. Please try the direct email option instead.'
      );
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <FaPaperPlane />
            <span>Get In Touch</span>
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            I am actively looking for full-time Software Engineer, React.js Developer, MERN Stack Developer, and Python Developer roles. Reach out directly through any of the channels below!
          </p>
        </div>

        {/* Contact Highlights Cards Grid */}
        <div className="contact-cards-grid">
          {/* 1. Direct Email Card */}
          <motion.div 
            className="glass-card contact-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="contact-card-icon-box">
              <FaEnvelope />
            </div>
            <div className="contact-card-body">
              <span className="contact-card-label">Direct Email</span>
              <h3 className="contact-card-value">{EMAIL}</h3>
              <p className="contact-card-desc">
                Fastest way to reach me for job opportunities, interviews, and project inquiries.
              </p>
            </div>
            <a 
              href={`mailto:${EMAIL}`} 
              className="btn btn-primary contact-card-action"
              aria-label={`Send email to ${EMAIL}`}
            >
              <span>Open in Mail App</span>
              <FaArrowRight />
            </a>
          </motion.div>

          {/* 2. Direct Phone Card */}
          <motion.div 
            className="glass-card contact-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="contact-card-icon-box">
              <FaPhoneAlt />
            </div>
            <div className="contact-card-body">
              <span className="contact-card-label">Phone & WhatsApp</span>
              <h3 className="contact-card-value">{PHONE}</h3>
              <p className="contact-card-desc">
                Available for phone screenings, technical discussions, and HR calls.
              </p>
            </div>
            <div className="contact-card-action-row">
              <a
                href={`tel:${PHONE.replace(/\s+/g, '')}`}
                className="btn btn-secondary contact-card-action"
                aria-label={`Call ${PHONE}`}
              >
                <FaPhoneAlt />
                <span>Call</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Harshavardhan, I found your portfolio and would like to connect.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary contact-card-action whatsapp-action"
                aria-label={`Chat with ${PHONE} on WhatsApp`}
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* 3. Location & Availability Card */}
          <motion.div 
            className="glass-card contact-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="contact-card-icon-box">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-card-body">
              <span className="contact-card-label">Location & Relocation</span>
              <h3 className="contact-card-value">{LOCATION}</h3>
              <p className="contact-card-desc">
                Open to Remote, Hybrid, and Onsite roles in Bangalore, Hyderabad, and across India.
              </p>
            </div>
            <div className="contact-availability-badge">
              <FaCheckCircle />
              <span>Ready for Immediate Joining</span>
            </div>
          </motion.div>
        </div>

        {/* Direct Message Form — submits straight to my inbox, no email app needed */}
        <motion.div
          className="glass-card contact-form-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="contact-form-header">
            <h4>Send a Message Directly</h4>
            <p>This goes straight to my inbox — no email app required.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-form-field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div className="contact-form-field">
                <label htmlFor="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  required
                />
              </div>
            </div>

            <div className="contact-form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Job opportunity / Project inquiry"
                required
              />
            </div>

            <div className="contact-form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a bit about the role or opportunity..."
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact-form-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <FaSpinner className="spin-icon" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="contact-form-status contact-form-status-success">
                <FaCheckCircle />
                <span>{statusMessage}</span>
              </div>
            )}
            {status === 'error' && (
              <div className="contact-form-status contact-form-status-error">
                <FaExclamationCircle />
                <span>{statusMessage}</span>
              </div>
            )}
          </form>
        </motion.div>

        {/* Bottom Socials & Quick Resume Banner */}
        <motion.div 
          className="glass-card contact-bottom-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="contact-banner-text">
            <h4>Connect On Professional Networks</h4>
            <p>Explore my repositories, code samples, and verified experience.</p>
          </div>

          <div className="contact-banner-actions">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              aria-label="GitHub Profile"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href={RESUME_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Download Resume"
              id="contact-resume-btn"
            >
              <FaFileDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
