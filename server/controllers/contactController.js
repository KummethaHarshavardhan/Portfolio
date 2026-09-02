const nodemailer = require('nodemailer');
const { ContactMessage, contactSubmissions } = require('../models/Contact');

const buildTransporter = () => {
  const { EMAIL_USER, EMAIL_PASS, SMTP_HOST, SMTP_PORT, SMTP_SECURE } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    return null;
  }

  if (SMTP_HOST) {
    return nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: SMTP_SECURE === 'true',
      auth: { user: EMAIL_USER, pass: EMAIL_PASS }
    });
  }

  // Gmail
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user: EMAIL_USER, pass: EMAIL_PASS }
  });
};


const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};
    const validation = ContactMessage.validate({ name, email, subject, message });
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed. Please provide all required fields correctly.',
        errors: validation.errors
      });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();
    const clientIp = req.ip || req.connection?.remoteAddress || '127.0.0.1';

    const contactRecord = new ContactMessage({
      name: trimmedName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
      ip: clientIp
    });

    contactSubmissions.push(contactRecord);

    console.log(`[Contact API] New message received from ${trimmedName} (${trimmedEmail}): "${trimmedSubject}"`);

    const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || process.env.EMAIL_USER;
    const transporter = buildTransporter();

    if (transporter && RECEIVER_EMAIL) {
      try {
        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
          to: RECEIVER_EMAIL,
          replyTo: trimmedEmail,
          subject: `[Portfolio] ${trimmedSubject}`,
          text: `New message from your portfolio contact form.\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nSubject: ${trimmedSubject}\n\nMessage:\n${trimmedMessage}\n\nSubmitted at: ${contactRecord.createdAt}`,
          html: `
            <h2>New Portfolio Contact Message</h2>
            <p><strong>Name:</strong> ${trimmedName}</p>
            <p><strong>Email:</strong> ${trimmedEmail}</p>
            <p><strong>Subject:</strong> ${trimmedSubject}</p>
            <p><strong>Message:</strong></p>
            <p>${trimmedMessage.replace(/\n/g, '<br/>')}</p>
            <hr/>
            <p style="color:#888;font-size:12px;">Submitted at ${contactRecord.createdAt}</p>
          `
        });
        console.log(`[Contact API] Email relayed to ${RECEIVER_EMAIL}`);
      } catch (emailError) {

        console.error('[Contact API] Email sending failed:', emailError.message || emailError);
        return res.status(200).json({
          success: true,
          delivered: false,
          message: 'Your message was received, but email delivery is not configured correctly on the server yet. Please also reach out directly.',
          data: {
            id: contactRecord.id,
            submittedAt: contactRecord.createdAt
          }
        });
      }
    } else {
      console.warn('[Contact API] EMAIL_USER / EMAIL_PASS not set in .env — skipping email delivery, message only logged.');
    }

    return res.status(200).json({
      success: true,
      delivered: Boolean(transporter && RECEIVER_EMAIL),
      message: 'Thank you! Your message has been submitted successfully.',
      data: {
        id: contactRecord.id,
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject,
        submittedAt: contactRecord.createdAt
      }
    });

  } catch (error) {
    console.error('[Contact Controller Error]: Failed to process contact message:', error.message || error);
    
    return res.status(500).json({
      success: false,
      message: 'Unable to submit your message. Please try again or reach out directly.'
    });
  }
};

const getContactHealth = (req, res) => {
  return res.status(200).json({
    success: true,
    status: 'Contact API is operational',
    totalMessagesReceived: contactSubmissions.length,
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  submitContact,
  getContactHealth
};