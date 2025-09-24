
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health route
app.get('/', (req, res) => {
  res.json({
    message: 'SEO AI Agent API is running!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Keyword research route (placeholder)
app.post('/api/keywords', (req, res) => {
  const { seedKeyword } = req.body || {};
  res.json({
    message: 'Keyword endpoint - coming soon!',
    seedKeyword: seedKeyword || null,
    status: 'development'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
});

