export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { seedKeyword } = req.body;
  if (!seedKeyword) {
    return res.status(400).json({ success: false, message: 'Seed keyword required' });
  }

  // Generate 50 mock keyword suggestions
  const mockKeywords = [];
  for (let i = 1; i <= 50; i++) {
    mockKeywords.push({
      rank: i,
      keyword: `${seedKeyword} suggestion ${i}`,
      searchVolume: Math.floor(Math.random() * 10000),
      competition: Math.floor(Math.random() * 100),
      difficulty: Math.floor(Math.random() * 100),
      cpc: Number((Math.random() * 5).toFixed(2)) 
    });
  }

  res.json({
    success: true,
    totalResults: mockKeywords.length,
    keywords: mockKeywords
  });
}
