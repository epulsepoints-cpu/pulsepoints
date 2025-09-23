/**
 * Simple health check - JavaScript version for testing
 */

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  res.status(200).json({
    status: 'healthy',
    message: 'Simple API working',
    timestamp: new Date().toISOString()
  });
}