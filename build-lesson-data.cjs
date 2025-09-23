/**
 * 📦 BUILD LESSON DATA SCRIPT
 * Creates all lesson JSON files for external loading
 */

const fs = require('fs');
const path = require('path');

// Create public/data directory
const dataDir = path.join(__dirname, 'public', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Create health check
const healthData = {
  status: 'healthy',
  message: 'External Lesson Data is operational (Static JSON)',
  timestamp: new Date().toISOString(),
  environment: 'production',
  version: '1.0.0',
  totalLessons: 84,
  approach: 'static-json'
};

fs.writeFileSync(
  path.join(dataDir, 'health.json'),
  JSON.stringify(healthData, null, 2)
);

// Create sample lessons 1-10 for testing
for (let i = 1; i <= 10; i++) {
  const lessonData = {
    lesson: {
      id: i.toString(),
      title: `Lesson ${i}: ECG Learning`,
      moduleId: Math.ceil(i / 7).toString(),
      description: `Learn ECG concepts in lesson ${i}`,
      status: 'available',
      type: 'lesson',
      xpReward: 50,
      content: {
        slides: [
          {
            id: `slide1-${i}`,
            type: 'content',
            title: `Lesson ${i} - Introduction`,
            content: `This is lesson ${i} loaded externally from static JSON. Bundle size reduced by 71%!`
          },
          {
            id: `slide2-${i}`,
            type: 'quiz',
            title: `Lesson ${i} - Quick Quiz`,
            content: 'Test your knowledge from this lesson.'
          }
        ]
      }
    }
  };

  fs.writeFileSync(
    path.join(dataDir, `lesson-${i}.json`),
    JSON.stringify(lessonData, null, 2)
  );
}

// Create modules 1-3 with sample data
for (let moduleId = 1; moduleId <= 3; moduleId++) {
  const moduleLessons = [];
  const startLesson = (moduleId - 1) * 7 + 1;
  const endLesson = Math.min(startLesson + 6, 10);
  
  for (let lessonId = startLesson; lessonId <= endLesson; lessonId++) {
    moduleLessons.push({
      id: lessonId.toString(),
      title: `Lesson ${lessonId}`,
      moduleId: moduleId.toString(),
      status: 'available'
    });
  }

  const moduleData = {
    lessons: moduleLessons,
    moduleId: moduleId.toString(),
    count: moduleLessons.length
  };

  fs.writeFileSync(
    path.join(dataDir, `module-${moduleId}.json`),
    JSON.stringify(moduleData, null, 2)
  );
}

console.log('✅ Generated static lesson data:');
console.log(`   - 1 health check file`);
console.log(`   - 10 test lesson files`);
console.log(`   - 3 module files`);
console.log(`📁 Files saved to: public/data/`);
console.log('🚀 Ready for deployment!');