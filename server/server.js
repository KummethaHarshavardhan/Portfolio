const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');

// Load environment variables reliably from .env file in server directory
dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// Middleware: CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or same-origin)
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        CLIENT_URL,
        'http://localhost:5173',
        'http://localhost:3000',
        'http://127.0.0.1:5173'
      ];

      if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS policy'));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
);

// Middleware: Body parser
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    service: 'Kummetha Harshavardhan Portfolio API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Contact routes (handles form submission + relays message to owner's email)
app.use('/api/contact', contactRoutes);

// Root welcome message
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Backend API Server for Kummetha Harshavardhan Portfolio',
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact',
      contactHealth: 'GET /api/contact/health'
    },
    clientOrigin: CLIENT_URL
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found on this server.`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('[Unhandled Error]:', err.stack || err.message);
  res.status(500).json({
    success: false,
    message: 'An unexpected server error occurred.',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`======================================================`);
  console.log(`  Portfolio Backend API Server Running Successfully!`);
  console.log(`  Port:             http://localhost:${PORT}`);
  console.log(`  Allowed Client:   ${CLIENT_URL}`);
  console.log(`  Health Endpoint:  GET  http://localhost:${PORT}/api/health`);
  console.log(`======================================================`);
});
