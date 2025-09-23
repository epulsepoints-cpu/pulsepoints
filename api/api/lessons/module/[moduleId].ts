/**
 * 📁 MODULE LESSON API ENDPOINT  
 * GET /api/lessons/module/[moduleId]
 * Returns all lessons for a specific module
 */

import { getLessonsByModule } from '../lessonMapper';

export default function handler(req: any, res: any) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only GET requests are supported' 
    });
  }

  const { moduleId } = req.query;

  // Validate module ID
  if (!moduleId || typeof moduleId !== 'string') {
    return res.status(400).json({ 
      error: 'Invalid module ID',
      message: 'Module ID must be provided as a string' 
    });
  }

  try {
    // Get lessons for module
    const lessons = getLessonsByModule(moduleId);

    if (lessons.length === 0) {
      return res.status(404).json({ 
        error: 'Module not found',
        message: `No lessons found for module '${moduleId}'`,
        availableModules: ['module-1']
      });
    }

    // Set cache headers for performance
    res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=3600'); // 24hr cache, 1hr stale
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow mobile app access
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    // Sort lessons by order
    const sortedLessons = lessons.sort((a, b) => a.order - b.order);

    // Add metadata for debugging
    const response = {
      lessons: sortedLessons,
      metadata: {
        moduleId,
        totalLessons: sortedLessons.length,
        loadedAt: new Date().toISOString(),
        source: 'vercel-api',
        version: '1.0'
      }
    };

    console.log(`✅ Served module: ${moduleId} (${lessons.length} lessons)`);
    
    return res.status(200).json(response);

  } catch (error) {
    console.error(`❌ Error serving module ${moduleId}:`, error);
    
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to load module data',
      moduleId 
    });
  }
}