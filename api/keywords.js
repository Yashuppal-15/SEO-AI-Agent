export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { seedKeyword } = req.body;
  if (!seedKeyword) {
    return res.status(400).json({ success: false, message: 'Seed keyword required' });
  }

  // Mock data for now
  const mockKeywords = [
    { rank: 1, keyword: `${seedKeyword} online`, searchVolume: 5400, competition: 25, difficulty: 35, cpc: 1.25 },
    { rank: 2, keyword: `${seedKeyword} guide`, searchVolume: 3200, competition: 45, difficulty: 55, cpc: 2.10 },
    { rank: 3, keyword: `best ${seedKeyword}`, searchVolume: 2800, competition: 60, difficulty: 70, cpc: 3.50 }
  ];

  res.json({
    success: true,
    totalResults: mockKeywords.length,
    keywords: mockKeywords
  });
}
