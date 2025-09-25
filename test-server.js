const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Simple test server' });
});

app.post('/api/keywords', (req, res) => {
  res.json({ 
    message: 'Keywords endpoint test',
    received: req.body 
  });
});

app.listen(PORT, () => {
  console.log('Test server running on http://localhost:' + PORT);
});
