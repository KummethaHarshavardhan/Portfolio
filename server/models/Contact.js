

class ContactMessage {
  constructor({ name, email, subject, message, ip = '127.0.0.1' }) {
    this.id = Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
    this.name = name?.trim();
    this.email = email?.trim()?.toLowerCase();
    this.subject = subject?.trim();
    this.message = message?.trim();
    this.ip = ip;
    this.createdAt = new Date().toISOString();
  }

  static validate(data) {
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.name || data.name.trim().length < 2) {
      errors.push('Name is required and must be at least 2 characters long.');
    }

    if (!data.email || !emailRegex.test(data.email.trim())) {
      errors.push('A valid email address is required.');
    }

    if (!data.subject || data.subject.trim().length < 2) {
      errors.push('Subject is required and must be at least 2 characters long.');
    }

    if (!data.message || data.message.trim().length < 5) {
      errors.push('Message is required and must be at least 5 characters long.');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

// In-memory array to log recent submissions during server runtime
const contactSubmissions = [];

module.exports = {
  ContactMessage,
  contactSubmissions
};
