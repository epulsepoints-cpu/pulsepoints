/**
 * 📦 STATIC LESSON DATA GENERATOR
 * Converts API lesson mapper to static JSON files for Vercel hosting
 */

import { lessonMapper } from './api/lessons/lessonMapper.js';
import fs from 'fs';
import path from 'path';

// Create public/data directory if it doesn't exist
const dataDir = path.join(process.cwd(), 'public', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Generate health check
const healthData = {
  status: 'healthy',
  message: 'External Lesson Data is operational',
  timestamp: new Date().toISOString(),
  environment: 'production',
  version: '1.0.0',
  totalLessons: Object.keys(lessonMapper).length
};

fs.writeFileSync(
  path.join(dataDir, 'health.json'),
  JSON.stringify(healthData, null, 2)
);

// Generate individual lesson files
for (const [lessonId, lesson] of Object.entries(lessonMapper)) {
  fs.writeFileSync(
    path.join(dataDir, `lesson-${lessonId}.json`),
    JSON.stringify({ lesson }, null, 2)
  );
}

// Generate lessons index
const lessonsIndex = {
  lessons: Object.values(lessonMapper),
  totalCount: Object.keys(lessonMapper).length,
  lastUpdated: new Date().toISOString()
};

fs.writeFileSync(
  path.join(dataDir, 'lessons.json'),
  JSON.stringify(lessonsIndex, null, 2)
);

// Generate module files
const moduleData = {};
Object.values(lessonMapper).forEach(lesson => {
  if (!moduleData[lesson.moduleId]) {
    moduleData[lesson.moduleId] = [];
  }
  moduleData[lesson.moduleId].push(lesson);
});

for (const [moduleId, lessons] of Object.entries(moduleData)) {
  fs.writeFileSync(
    path.join(dataDir, `module-${moduleId}.json`),
    JSON.stringify({ lessons, moduleId, count: lessons.length }, null, 2)
  );
}

console.log(`✅ Generated static lesson data:`);
console.log(`   - ${Object.keys(lessonMapper).length} individual lesson files`);
console.log(`   - ${Object.keys(moduleData).length} module files`);
console.log(`   - 1 lessons index file`);
console.log(`   - 1 health check file`);
console.log(`📁 Files saved to: public/data/`);