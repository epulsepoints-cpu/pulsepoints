/**
 * 🧪 TEST EXTERNAL LESSON LOADER
 * Quick test to verify the hybrid approach works
 */

import { ExternalLessonLoader } from '../services/externalLessonLoader';

const testLessonLoader = async () => {
  const loader = new ExternalLessonLoader();
  
  console.log('🧪 Testing Hybrid Lesson Loader...');
  
  // Test embedded lesson (should work immediately)
  console.log('\n📖 Testing embedded lesson 1...');
  const lesson1 = await loader.loadLesson('1');
  console.log(`✅ Lesson 1 loaded: ${lesson1 ? 'SUCCESS' : 'FAILED'}`);
  
  // Test health check for external lessons
  console.log('\n🏥 Testing external health check...');
  const healthOK = await loader.healthCheck();
  console.log(`✅ Health check: ${healthOK ? 'SUCCESS' : 'FAILED'}`);
  
  return {
    embeddedLessonWorks: !!lesson1,
    externalHealthWorks: healthOK
  };
};

// Export for use in browser console
if (typeof window !== 'undefined') {
  (window as any).testLessonLoader = testLessonLoader;
}

export { testLessonLoader };