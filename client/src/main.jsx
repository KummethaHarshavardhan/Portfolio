import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<App />} />
        <Route path="/skills" element={<App />} />
        <Route path="/projects" element={<App />} />
        <Route path="/experience" element={<App />} />
        <Route path="/education" element={<App />} />
        <Route path="/certifications" element={<App />} />
        <Route path="/resume" element={<App />} />
        <Route path="/contact" element={<App />} />
        {/* Wildcard fallback */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
