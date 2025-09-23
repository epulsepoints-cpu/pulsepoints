/**
 * 📋 LESSONS INDEX API ENDPOINT
 * GET /api/lessons
 * Returns all available lessons metadata
 */

import { getAllLessonIds, lessonMap } from './lessonMapper';

export default function handler(req: any, res: any) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      message: 'Only GET requests are supported' 
    });
  }

  try {
    const allLessonIds = getAllLessonIds();
    
    // Create lightweight lesson metadata (no full content)
    const lessonMetadata = allLessonIds.map(lessonId => {
      const lesson = lessonMap[lessonId as keyof typeof lessonMap];
      return {
        id: lessonId,
        moduleId: lesson.moduleId,
        title: lesson.title,
        description: lesson.description,
        order: lesson.order,
        estimatedTime: lesson.estimatedTime,
        completed: lesson.completed || false,
        hasSlides: lesson.content?.slides?.length || 0,
        hasTasks: lesson.tasks?.length || 0
      };
    });

    // Group by modules
    const modules = lessonMetadata.reduce((acc, lesson) => {
      if (!acc[lesson.moduleId]) {
        acc[lesson.moduleId] = [];
      }
      acc[lesson.moduleId].push(lesson);
      return acc;
    }, {} as Record<string, typeof lessonMetadata>);

    // Sort lessons within each module
    Object.keys(modules).forEach(moduleId => {
      modules[moduleId].sort((a, b) => a.order - b.order);
    });

    // Set cache headers
    res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Content-Type', 'application/json');

    const response = {
      lessons: lessonMetadata,
      modules,
      metadata: {
        totalLessons: allLessonIds.length,
        totalModules: Object.keys(modules).length,
        loadedAt: new Date().toISOString(),
        source: 'vercel-api',
        version: '1.0'
      }
    };

    console.log(`✅ Served lessons index: ${allLessonIds.length} lessons`);
    
    return res.status(200).json(response);

  } catch (error) {
    console.error(`❌ Error serving lessons index:`, error);
    
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to load lessons index' 
    });
  }
}