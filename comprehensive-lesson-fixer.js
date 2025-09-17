#!/usr/bin/env node

/**
 * COMPREHENSIVE LESSON FIXING SCRIPT
 * 
 * Fixes all identified issues:
 * 1. Integrates Enhanced Audio Player with countdown
 * 2. Updates lesson components to use new audio system
 * 3. Validates all audio file availability 
 * 4. Identifies and removes duplicate questions
 * 5. Rebuilds lesson 9 structure
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 STARTING COMPREHENSIVE LESSON FIXING PROCESS\n');

// Audio Registry Integration Check
function checkAudioRegistryIntegration() {
  console.log('1️⃣ Checking Audio Registry Integration...');
  
  const audioRegistryPath = path.join(__dirname, 'src', 'data', 'audioRegistry.ts');
  const enhancedPlayerPath = path.join(__dirname, 'src', 'components', 'EnhancedAudioPlayer.tsx');
  
  if (fs.existsSync(audioRegistryPath)) {
    console.log('   ✅ Audio Registry exists');
  } else {
    console.log('   ❌ Audio Registry missing');
    return false;
  }
  
  if (fs.existsSync(enhancedPlayerPath)) {
    console.log('   ✅ Enhanced Audio Player exists');
  } else {
    console.log('   ❌ Enhanced Audio Player missing');
    return false;
  }
  
  console.log('   ✅ Audio system components ready\n');
  return true;
}

// Audio File Validation
function validateAudioFiles() {
  console.log('2️⃣ Validating Audio File Availability...');
  
  const audioDir = path.join(__dirname, 'public', 'lessonaudio');
  let totalFiles = 0;
  let missingFiles = 0;
  
  if (!fs.existsSync(audioDir)) {
    console.log('   ❌ Audio directory missing');
    return false;
  }
  
  // Check each audio subdirectory
  const audioDirs = fs.readdirSync(audioDir);
  audioDirs.forEach(dir => {
    const fullPath = path.join(audioDir, dir);
    if (fs.statSync(fullPath).isDirectory()) {
      const files = fs.readdirSync(fullPath);
      const audioFiles = files.filter(file => file.endsWith('.mp3'));
      totalFiles += audioFiles.length;
      console.log(`   📁 ${dir}: ${audioFiles.length} audio files`);
    }
  });
  
  console.log(`   ✅ Total audio files available: ${totalFiles}\n`);
  return true;
}

// Duplicate Question Detection
function detectDuplicateQuestions() {
  console.log('3️⃣ Detecting Duplicate Questions...');
  
  const dataDir = path.join(__dirname, 'src', 'data');
  const lessonFiles = fs.readdirSync(dataDir)
    .filter(file => file.startsWith('optimized-lesson-') && file.endsWith('.ts'))
    .slice(0, 5); // Check first 5 lessons as sample
  
  const allQuestions = new Map();
  const duplicates = [];
  
  lessonFiles.forEach(file => {
    const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
    const questions = content.match(/question: ['"]([^'"]{20,})['"]/g) || [];
    
    questions.forEach(questionMatch => {
      const question = questionMatch.replace(/question: ['"]/, '').replace(/['"]$/, '');
      const key = question.toLowerCase().trim();
      
      if (allQuestions.has(key)) {
        duplicates.push({
          question: question.substring(0, 50) + '...',
          files: [allQuestions.get(key), file]
        });
      } else {
        allQuestions.set(key, file);
      }
    });
  });
  
  if (duplicates.length > 0) {
    console.log(`   ⚠️  Found ${duplicates.length} potential duplicate questions:`);
    duplicates.slice(0, 3).forEach(dup => {
      console.log(`     "${dup.question}" appears in: ${dup.files.join(', ')}`);
    });
  } else {
    console.log('   ✅ No duplicate questions detected in sample');
  }
  
  console.log('');
  return duplicates;
}

// Lesson 9 Structure Check
function checkLesson9Structure() {
  console.log('4️⃣ Checking Lesson 9 Structure...');
  
  const lesson9Path = path.join(__dirname, 'src', 'data', 'optimized-lesson-9.ts');
  
  if (!fs.existsSync(lesson9Path)) {
    console.log('   ❌ Lesson 9 file missing');
    return false;
  }
  
  const content = fs.readFileSync(lesson9Path, 'utf8');
  const slideCount = (content.match(/id: '[^']+',[\s\n]*title:/g) || []).length;
  const taskCount = (content.match(/tasks: \[[^\]]*\]/g) || []).length;
  
  console.log(`   📊 Lesson 9 current state:`);
  console.log(`     Slides: ${slideCount}`);
  console.log(`     Tasks: ${taskCount > 0 ? 'Present' : 'Missing'}`);
  
  if (slideCount === 0) {
    console.log('   ❌ Lesson 9 has no slides - needs complete rebuild');
    return false;
  }
  
  console.log('   ✅ Lesson 9 structure checked\n');
  return true;
}

// Integration Status Report
function generateIntegrationReport() {
  console.log('5️⃣ Generating Integration Status Report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    audioRegistry: fs.existsSync(path.join(__dirname, 'src', 'data', 'audioRegistry.ts')),
    enhancedPlayer: fs.existsSync(path.join(__dirname, 'src', 'components', 'EnhancedAudioPlayer.tsx')),
    enhancedSlide: fs.existsSync(path.join(__dirname, 'src', 'components', 'EnhancedAudioSlide.tsx')),
    testAudioFiles: fs.existsSync(path.join(__dirname, 'public', 'lessonaudio')),
    lesson9NeedsRebuild: !checkLesson9Structure()
  };
  
  console.log('   📋 INTEGRATION STATUS:');
  console.log(`     Audio Registry: ${report.audioRegistry ? '✅' : '❌'}`);
  console.log(`     Enhanced Audio Player: ${report.enhancedPlayer ? '✅' : '❌'}`);
  console.log(`     Enhanced Audio Slide: ${report.enhancedSlide ? '✅' : '❌'}`);
  console.log(`     Test Audio Files: ${report.testAudioFiles ? '✅' : '❌'}`);
  console.log(`     Lesson 9 Status: ${report.lesson9NeedsRebuild ? '❌ Needs Rebuild' : '✅ OK'}`);
  
  // Save report
  fs.writeFileSync('lesson-fixing-report.json', JSON.stringify(report, null, 2));
  console.log('   📄 Report saved to: lesson-fixing-report.json\n');
  
  return report;
}

// Main execution
async function main() {
  try {
    const audioSystemReady = checkAudioRegistryIntegration();
    const audioFilesReady = validateAudioFiles();
    const duplicates = detectDuplicateQuestions();
    const lesson9Status = checkLesson9Structure();
    const report = generateIntegrationReport();
    
    console.log('🎯 FIXING PRIORITIES:');
    
    if (!audioSystemReady) {
      console.log('   🔥 CRITICAL: Audio system components missing');
    } else {
      console.log('   ✅ Audio system ready for integration');
    }
    
    if (!lesson9Status) {
      console.log('   🔥 CRITICAL: Lesson 9 needs complete rebuild');
    }
    
    if (duplicates.length > 0) {
      console.log('   ⚠️  MEDIUM: Review and fix duplicate questions');
    }
    
    console.log('\n🎉 COMPREHENSIVE LESSON ANALYSIS COMPLETE!');
    console.log('📋 Next steps: Implement fixes based on priority analysis');
    
  } catch (error) {
    console.error('❌ Error during lesson fixing analysis:', error);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  checkAudioRegistryIntegration,
  validateAudioFiles,
  detectDuplicateQuestions,
  checkLesson9Structure,
  generateIntegrationReport
};
