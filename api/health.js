/**
 * 🏥 HEALTH CHECK API ENDPOINT
 * GET /api/health
 * Simple health check for external lesson loader
 */

export default function handler(req, res) {
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

  // Return health status
  res.status(200).json({
    status: 'healthy',
    message: 'External Lesson API is operational',
    timestamp: new Date().toISOString(),
    environment: 'production',
    version: '1.0.0'
  });
}