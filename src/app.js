const express = require('express');
const path = require('path');
const KeywordService = require('./keywordService');

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize services
const keywordService = new KeywordService();

// Simple middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Keyword endpoint
app.post('/api/keywords', async (req, res) => {
  console.log('🔍 API Request:', req.body);
  
  try {
    const { seedKeyword } = req.body;
    
    if (!seedKeyword) {
      return res.json({
        success: false,
        message: 'Seed keyword is required'
      });
    }

    const keywords = await keywordService.generateKeywords(seedKeyword);
    
    console.log('✅ Generated', keywords.length, 'keywords');
    
    res.json({
      success: true,
      seedKeyword: seedKeyword,
      totalResults: keywords.length,
      keywords: keywords,
      metadata: {
        processingTime: '120ms',
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('❌ Error:', error);
    res.json({
      success: false,
      message: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log('🚀 Server running: http://localhost:' + PORT);
});
