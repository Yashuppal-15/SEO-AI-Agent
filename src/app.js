const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const KeywordService = require('./keywordService');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize services
const keywordService = new KeywordService();

// Middleware to track request time (MUST be before routes)
app.use((req, res, next) => {
  req.startTime = Date.now();
  next();
});

// Other middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health route
app.get('/', (req, res) => {
  res.json({
    message: 'SEO AI Agent API is running!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Keyword research endpoint
app.post('/api/keywords', async (req, res) => {
  try {
    const { seedKeyword } = req.body || {};
    
    // Input validation
    if (!seedKeyword || typeof seedKeyword !== 'string') {
      return res.status(400).json({
        error: 'Invalid input',
        message: 'seedKeyword is required and must be a string'
      });
    }

    console.log(📊 Processing keyword request for: );
    
    // Generate keywords using our service
    const keywords = await keywordService.generateKeywords(seedKeyword.trim());
    
    const processingTime = Date.now() - req.startTime;
    
    res.json({
      success: true,
      seedKeyword: seedKeyword.trim(),
      totalResults: keywords.length,
      keywords: keywords,
      timestamp: new Date().toISOString(),
      processingTime: ${processingTime}ms
    });

  } catch (error) {
    console.error('❌ Keyword API Error:', error.message);
    res.status(500).json({
      error: 'Keyword generation failed',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: Route  not found
  });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(🚀 Server running on http://localhost:);
  console.log(📝 Environment: );
  console.log(🤖 Keyword Service: Ready);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
