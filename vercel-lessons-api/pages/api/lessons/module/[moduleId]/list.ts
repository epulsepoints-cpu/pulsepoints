import { NextApiRequest, NextApiResponse } from 'next';
import { moduleToLessons } from '../../../../../data/lessonDatabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set CORS headers for Android app
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { moduleId } = req.query;

  if (!moduleId || typeof moduleId !== 'string') {
    return res.status(400).json({ error: 'Invalid module ID' });
  }

  try {
    // Get lesson IDs for the module
    const lessonIds = moduleToLessons[moduleId];

    if (!lessonIds) {
      return res.status(404).json({ error: 'Module not found' });
    }

    // Return lesson IDs list
    return res.status(200).json({
      moduleId,
      lessonIds,
      count: lessonIds.length,
      generatedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error fetching module lessons:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}