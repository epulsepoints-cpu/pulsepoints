#!/usr/bin/env node

/**
 * Lesson Validation Script
 * Analyzes all optimized lesson files for structure, audio, and content issues
 */

const fs = require('fs');
const path = require('path');

// Configuration
const LESSONS_DIR = './src/data';
const AUDIO_BASE_PATH = './public/lessonaudio';
const REPORT_FILE = './LESSON_VALIDATION_REPORT.md';

// Validation Results
let validationResults = {
  totalLessons: 0,
  validLessons: 0,
  errors: [],
  warnings: [],
  audioIssues: [],
  contentIssues: [],
  structureIssues: []
};

/**
 * Get all optimized lesson files
 */
function getLessonFiles() {
  const files = fs.readdirSync(LESSONS_DIR)
    .filter(file => file.startsWith('optimized-lesson-') && file.endsWith('.ts'))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || '0');
      const numB = parseInt(b.match(/\d+/)?.[0] || '0');
      return numA - numB;
    });
  
  return files.map(file => path.join(LESSONS_DIR, file));
}

/**
 * Parse lesson file content (basic text parsing)
 */
function parseLessonFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  
  return {
    fileName,
    filePath,
    content,
    hasAudioUrl: content.includes('audioUrl:'),
    hasNarrationUrl: content.includes('narrationUrl:'),
    audioUrlCount: (content.match(/audioUrl:/g) || []).length,
    hasTypeAudio: content.includes("type: 'audio'"),
    audioTypeCount: (content.match(/type: 'audio'/g) || []).length,
    hasQuestions: content.includes('question:'),
    questionCount: (content.match(/question:/g) || []).length,
    hasUnits: content.includes('units:'),
    hasSlides: content.includes('slides:'),
    hasContent: content.includes('content:'),
    hasTasks: content.includes('tasks:'),
    exportName: content.match(/export const (\w+):/)?.[1] || 'unknown',
    lessonId: content.match(/id: ['"]([^'"]+)['"]/)?.[1] || 'unknown',
    title: content.match(/title: ['"]([^'"]+)['"]/)?.[1] || 'unknown'
  };
}

/**
 * Extract audio URLs from lesson content
 */
function extractAudioUrls(content) {
  const audioUrlPattern = /audioUrl: ['"]([^'"]+)['"]/g;
  const narrationUrlPattern = /narrationUrl: ['"]([^'"]+)['"]/g;
  
  const audioUrls = [];
  let match;
  
  // Extract audioUrl references
  while ((match = audioUrlPattern.exec(content)) !== null) {
    audioUrls.push(match[1]);
  }
  
  // Extract narrationUrl references
  while ((match = narrationUrlPattern.exec(content)) !== null) {
    audioUrls.push(match[1]);
  }
  
  return [...new Set(audioUrls)]; // Remove duplicates
}

/**
 * Check if audio file exists
 */
function checkAudioFileExists(audioUrl) {
  if (audioUrl.startsWith('/lessonaudio/')) {
    const filePath = path.join('./public', audioUrl);
    return fs.existsSync(filePath);
  }
  return false; // External URLs - assume they exist
}

/**
 * Validate individual lesson
 */
function validateLesson(lessonData) {
  const errors = [];
  const warnings = [];
  const audioIssues = [];
  const contentIssues = [];
  const structureIssues = [];
  
  const { fileName, content, lessonId, title } = lessonData;
  
  console.log(`\n🔍 Validating ${fileName}...`);
  
  // Structure Validation
  if (!lessonData.hasContent) {
    structureIssues.push(`${fileName}: Missing content property`);
  }
  
  if (!lessonData.hasTasks) {
    structureIssues.push(`${fileName}: Missing tasks property`);
  }
  
  if (lessonData.exportName === 'unknown') {
    structureIssues.push(`${fileName}: Cannot determine export name`);
  }
  
  // Audio Validation
  const audioUrls = extractAudioUrls(content);
  console.log(`  📁 Found ${audioUrls.length} audio references`);
  
  audioUrls.forEach(audioUrl => {
    console.log(`    🔊 Checking: ${audioUrl}`);
    if (!checkAudioFileExists(audioUrl)) {
      audioIssues.push(`${fileName}: Missing audio file: ${audioUrl}`);
    }
  });
  
  // Audio slide validation
  if (lessonData.audioTypeCount > 0) {
    console.log(`  🎵 Found ${lessonData.audioTypeCount} audio slides`);
    if (lessonData.audioUrlCount < lessonData.audioTypeCount) {
      audioIssues.push(`${fileName}: Has ${lessonData.audioTypeCount} audio slides but only ${lessonData.audioUrlCount} audio URLs`);
    }
  }
  
  // Content Quality Validation
  if (lessonData.questionCount > 0) {
    console.log(`  ❓ Found ${lessonData.questionCount} questions`);
    
    // Check for duplicate questions (simple pattern matching)
    const questions = content.match(/question: ['"]([^'"]+)['"]/g) || [];
    const uniqueQuestions = [...new Set(questions)];
    if (questions.length !== uniqueQuestions.length) {
      contentIssues.push(`${fileName}: Contains duplicate questions`);
    }
  }
  
  // TypeScript compatibility (basic checks)
  if (content.includes('number:') && !content.includes('order:')) {
    structureIssues.push(`${fileName}: Uses 'number' property instead of 'order'`);
  }
  
  if (content.includes("type: 'pdf'") || content.includes("type: 'interactive'")) {
    structureIssues.push(`${fileName}: Uses invalid resource types (should be 'reference' or 'tool')`);
  }
  
  // Extended properties check
  if (lessonData.hasUnits && !content.includes('as any')) {
    warnings.push(`${fileName}: Uses 'units' property without type assertion`);
  }
  
  return {
    fileName,
    lessonId,
    title,
    audioUrlsCount: audioUrls.length,
    errors,
    warnings,
    audioIssues,
    contentIssues,
    structureIssues,
    isValid: errors.length === 0 && audioIssues.length === 0 && structureIssues.length === 0
  };
}

/**
 * Generate validation report
 */
function generateReport(results) {
  const timestamp = new Date().toISOString();
  let report = `# 📋 LESSON VALIDATION REPORT\n\n`;
  report += `**Generated**: ${timestamp}\n`;
  report += `**Total Lessons**: ${results.totalLessons}\n`;
  report += `**Valid Lessons**: ${results.validLessons}\n`;
  report += `**Validation Success Rate**: ${((results.validLessons / results.totalLessons) * 100).toFixed(1)}%\n\n`;
  
  // Summary Stats
  report += `## 📊 VALIDATION SUMMARY\n\n`;
  report += `| Category | Count |\n`;
  report += `|----------|-------|\n`;
  report += `| Total Errors | ${results.errors.length} |\n`;
  report += `| Audio Issues | ${results.audioIssues.length} |\n`;
  report += `| Structure Issues | ${results.structureIssues.length} |\n`;
  report += `| Content Issues | ${results.contentIssues.length} |\n`;
  report += `| Warnings | ${results.warnings.length} |\n\n`;
  
  // Detailed Results
  results.lessonResults?.forEach(lesson => {
    const status = lesson.isValid ? '✅' : '❌';
    report += `## ${status} ${lesson.fileName}\n\n`;
    report += `**Lesson ID**: ${lesson.lessonId}\n`;
    report += `**Title**: ${lesson.title}\n`;
    report += `**Audio Files**: ${lesson.audioUrlsCount}\n`;
    report += `**Status**: ${lesson.isValid ? 'VALID' : 'NEEDS FIXES'}\n\n`;
    
    if (lesson.structureIssues.length > 0) {
      report += `### 🏗️ Structure Issues:\n`;
      lesson.structureIssues.forEach(issue => report += `- ${issue}\n`);
      report += `\n`;
    }
    
    if (lesson.audioIssues.length > 0) {
      report += `### 🎵 Audio Issues:\n`;
      lesson.audioIssues.forEach(issue => report += `- ${issue}\n`);
      report += `\n`;
    }
    
    if (lesson.contentIssues.length > 0) {
      report += `### 📝 Content Issues:\n`;
      lesson.contentIssues.forEach(issue => report += `- ${issue}\n`);
      report += `\n`;
    }
    
    if (lesson.warnings.length > 0) {
      report += `### ⚠️ Warnings:\n`;
      lesson.warnings.forEach(warning => report += `- ${warning}\n`);
      report += `\n`;
    }
    
    report += `---\n\n`;
  });
  
  // Recommendations
  report += `## 🎯 RECOMMENDATIONS\n\n`;
  
  if (results.audioIssues.length > 0) {
    report += `### Priority 1: Fix Missing Audio Files\n`;
    report += `Create or verify the following audio files:\n`;
    const uniqueAudioIssues = [...new Set(results.audioIssues)];
    uniqueAudioIssues.forEach(issue => report += `- ${issue}\n`);
    report += `\n`;
  }
  
  if (results.structureIssues.length > 0) {
    report += `### Priority 2: Fix Structure Issues\n`;
    report += `Update lesson structure for TypeScript compatibility:\n`;
    const uniqueStructureIssues = [...new Set(results.structureIssues)];
    uniqueStructureIssues.forEach(issue => report += `- ${issue}\n`);
    report += `\n`;
  }
  
  if (results.contentIssues.length > 0) {
    report += `### Priority 3: Fix Content Quality\n`;
    report += `Improve content quality and uniqueness:\n`;
    const uniqueContentIssues = [...new Set(results.contentIssues)];
    uniqueContentIssues.forEach(issue => report += `- ${issue}\n`);
    report += `\n`;
  }
  
  report += `## 🚀 NEXT STEPS\n\n`;
  report += `1. **Create Missing Audio Files**: Use text-to-speech or record audio for missing files\n`;
  report += `2. **Fix Structure Issues**: Update lesson TypeScript compatibility\n`;
  report += `3. **Implement Enhanced Audio Player**: Add timing and controls\n`;
  report += `4. **Content Quality Review**: Ensure unique questions and comprehensive coverage\n`;
  report += `5. **Re-run Validation**: Verify fixes with this script\n\n`;
  
  report += `---\n*Report generated by lesson-validation.cjs*\n`;
  
  return report;
}

/**
 * Main validation function
 */
async function validateAllLessons() {
  console.log('🔍 Starting lesson validation...\n');
  
  const lessonFiles = getLessonFiles();
  validationResults.totalLessons = lessonFiles.length;
  validationResults.lessonResults = [];
  
  console.log(`Found ${lessonFiles.length} lesson files to validate:`);
  lessonFiles.forEach(file => console.log(`  - ${path.basename(file)}`));
  
  for (const filePath of lessonFiles) {
    const lessonData = parseLessonFile(filePath);
    const validation = validateLesson(lessonData);
    
    validationResults.lessonResults.push(validation);
    
    if (validation.isValid) {
      validationResults.validLessons++;
      console.log(`  ✅ Valid`);
    } else {
      console.log(`  ❌ Issues found`);
    }
    
    // Aggregate results
    validationResults.errors.push(...validation.errors);
    validationResults.warnings.push(...validation.warnings);
    validationResults.audioIssues.push(...validation.audioIssues);
    validationResults.contentIssues.push(...validation.contentIssues);
    validationResults.structureIssues.push(...validation.structureIssues);
  }
  
  // Generate report
  const report = generateReport(validationResults);
  fs.writeFileSync(REPORT_FILE, report);
  
  console.log(`\n📋 Validation complete!`);
  console.log(`📊 Results: ${validationResults.validLessons}/${validationResults.totalLessons} lessons valid`);
  console.log(`📄 Report saved to: ${REPORT_FILE}`);
  
  // Show critical issues
  if (validationResults.audioIssues.length > 0) {
    console.log(`\n🚨 ${validationResults.audioIssues.length} audio issues need immediate attention`);
  }
  
  if (validationResults.structureIssues.length > 0) {
    console.log(`🏗️ ${validationResults.structureIssues.length} structure issues need fixing`);
  }
  
  return validationResults;
}

// Run validation if called directly
if (require.main === module) {
  validateAllLessons().catch(console.error);
}

module.exports = {
  validateAllLessons,
  validateLesson,
  parseLessonFile,
  getLessonFiles
};
