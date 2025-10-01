import { NextApiRequest, NextApiResponse } from 'next';
import { Lesson } from '../../../types/lesson';

// Import lesson data (you'll need to copy the optimized lessons here)
import { lessonDatabase } from '../../../data/lessonDatabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Set CORS headers for Android app
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { lessonId } = req.query;

  if (!lessonId || typeof lessonId !== 'string') {
    return res.status(400).json({ error: 'Invalid lesson ID' });
  }

  try {
    // Get lesson from database
    const lesson = lessonDatabase[lessonId];

    if (!lesson) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    // Return lesson content with version info
    return res.status(200).json({
      id: lesson.id,
      title: lesson.title,
      content: lesson.content,
      version: '1.0',
      moduleId: lesson.moduleId,
      description: lesson.description,
      order: lesson.order,
      estimatedTime: lesson.estimatedTime,
      loadedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error fetching lesson:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}