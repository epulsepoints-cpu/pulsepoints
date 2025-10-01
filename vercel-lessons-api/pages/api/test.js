export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  res.status(200).json({
    message: '🎉 Vercel Lessons API is working!',
    timestamp: new Date().toISOString(),
    endpoints: {
      'GET /api/lessons/{lessonId}': 'Get lesson content',
      'GET /api/lessons/module/{moduleId}/list': 'Get lesson IDs for module',
      'GET /api/test': 'Test API connectivity'
    },
    status: 'healthy'
  });
}