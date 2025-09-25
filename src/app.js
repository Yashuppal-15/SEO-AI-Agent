const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const KeywordService = require('./keywordService');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize services
const keywordService = new KeywordService();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Serve static files (for web interface)
app.use(express.static(path.join(__dirname, '../public')));

// Health check route
app.get('/', (req, res) => {
  res.json({
    message: 'SEO AI Agent is running!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    author: 'Yashuppal-15'
  });
});

// Enhanced keyword research endpoint
app.post('/api/keywords', async (req, res) => {
  const startTime = Date.now();
  
  try {
    const { seedKeyword } = req.body || {};
    
    // Input validation
    if (!seedKeyword || typeof seedKeyword !== 'string' || seedKeyword.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Invalid input',
        message: 'seedKeyword is required and must be a non-empty string',
        timestamp: new Date().toISOString()
      });
    }

    console.log('🔍 Processing keyword request for: "' + seedKeyword.trim() + '"');
    
    // Generate keywords using our enhanced service
    const keywords = await keywordService.generateKeywords(seedKeyword.trim());
    
    const processingTime = Date.now() - startTime;
    
    res.json({
      success: true,
      seedKeyword: seedKeyword.trim(),
      totalResults: keywords.length,
      keywords: keywords,
      metadata: {
        processingTime: processingTime + 'ms',
        timestamp: new Date().toISOString(),
        algorithm: 'competition_volume_ranking',
        firstPagePotential: keywords.filter(k => k.score > 50).length
      }
    });

  } catch (error) {
    const processingTime = Date.now() - startTime;
    console.error('❌ Keyword API Error:', error.message);
    
    res.status(500).json({
      success: false,
      error: 'Keyword generation failed',
      message: error.message,
      metadata: {
        processingTime: processingTime + 'ms',
        timestamp: new Date().toISOString()
      }
    });
  }
});

// API status endpoint
app.get('/api/status', (req, res) => {
  res.json({
    status: 'operational',
    service: 'SEO AI Agent',
    uptime: Math.floor(process.uptime()) + ' seconds',
    memory: process.memoryUsage(),
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log('🚀 SEO AI Agent Server Started');
  console.log('📍 Server URL: http://localhost:' + PORT);
  console.log('🔧 Environment: ' + (process.env.NODE_ENV || 'development'));
  console.log('🤖 Keyword Service: Ready');
  console.log('⏰ Started at: ' + new Date().toLocaleString());
});
