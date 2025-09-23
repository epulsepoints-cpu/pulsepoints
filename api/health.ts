/**
 * 🏥 HEALTH CHECK API ENDPOINT
 * GET /api/health
 * Simple health check for external lesson loader
 */

export default function handler(req: any, res: any) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      error: 'Method not allowed' 
    });
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  return res.status(200).json({
    status: 'healthy',
    message: 'External lesson API is running',
    timestamp: new Date().toISOString(),
    version: '1.0',
    endpoints: {
      individual: '/api/lessons/[lessonId]',
      module: '/api/lessons/module/[moduleId]',
      index: '/api/lessons',
      health: '/api/health'
    }
  });
}