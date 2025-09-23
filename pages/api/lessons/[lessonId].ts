/**
 * 🎯 INDIVIDUAL LESSON API ENDPOINT
 * GET /api/lessons/[lessonId]
 * Returns specific lesson data for external loading
 */

import { getLessonById } from './lessonMapper';

export default function handler(req: any, res: any) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only GET requests are supported' 
    });
  }

  const { lessonId } = req.query;

  // Validate lesson ID
  if (!lessonId || typeof lessonId !== 'string') {
    return res.status(400).json({ 
      error: 'Invalid lesson ID',
      message: 'Lesson ID must be provided as a string' 
    });
  }

  try {
    // Get lesson from mapper
    const lesson = getLessonById(lessonId);

    if (!lesson) {
      return res.status(404).json({ 
        error: 'Lesson not found',
        message: `Lesson with ID '${lessonId}' does not exist`,
        availablePattern: 'module-1-lesson-[1-76]'
      });
    }

    // Set cache headers for performance
    res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=3600'); // 24hr cache, 1hr stale
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow mobile app access
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    // Add metadata for debugging
    const response = {
      lesson,
      metadata: {
        loadedAt: new Date().toISOString(),
        source: 'vercel-api',
        lessonId,
        version: '1.0'
      }
    };

    console.log(`✅ Served lesson: ${lessonId} (${lesson.title})`);
    
    return res.status(200).json(response);

  } catch (error) {
    console.error(`❌ Error serving lesson ${lessonId}:`, error);
    
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to load lesson data',
      lessonId 
    });
  }
}