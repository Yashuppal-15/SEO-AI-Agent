const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from SEO AI Agent!' });
});

app.post('/api/keywords', (req, res) => {
  res.json({ 
    success: true,
    message: 'Basic test working',
    seedKeyword: req.body.seedKeyword,
    keywords: ['test keyword 1', 'test keyword 2'] 
  });
});

app.listen(3000, () => {
  console.log('Simple server running on port 3000');
});
