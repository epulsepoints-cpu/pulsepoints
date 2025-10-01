// Test endpoint to verify API is working
module.exports = (req, res) => {
  // Set CORS headers for Android app
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  res.status(200).json({
    message: '🎉 Lessons API is working!',
    timestamp: new Date().toISOString(),
    endpoints: {
      'GET /api/test': 'Test API connectivity',
      'GET /api/lessons/[lessonId]': 'Get lesson content',
      'GET /api/module/[moduleId]/list': 'Get lesson IDs for module'
    },
    status: 'healthy'
  });
};