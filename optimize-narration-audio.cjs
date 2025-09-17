const fs = require('fs');
const path = require('path');

function optimizeNarrationAudio() {
  console.log('🎯 ECGkid Audio Optimization - Removing Excessive narrationUrl References');
  console.log('=' .repeat(70));
  
  const dataDir = path.join(__dirname, 'src', 'data');
  
  // Create backup first
  const backupDir = path.join(__dirname, 'lesson-backup-' + new Date().toISOString().split('T')[0]);
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir);
  }
  
  console.log(`📋 Creating backup in: ${backupDir}`);
  
  const lessonFiles = fs.readdirSync(dataDir).filter(file => 
    file.startsWith('optimized-lesson-') && file.endsWith('.ts')
  );
  
  let totalFilesProcessed = 0;
  let totalAudioRemoved = 0;
  const optimizationResults = [];
  
  lessonFiles.forEach(fileName => {
    const filePath = path.join(dataDir, fileName);
    const backupPath = path.join(backupDir, fileName);
    
    // Create backup
    fs.copyFileSync(filePath, backupPath);
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Extract lesson number
    const lessonMatch = fileName.match(/lesson-(\d+)/);
    const lessonNumber = lessonMatch ? lessonMatch[1] : 'unknown';
    
    // Count original narrationUrl references
    const originalMatches = [...content.matchAll(/narrationUrl:\s*['"`]([^'"`]+)['"`]/g)];
    const originalAudioFiles = [...new Set(originalMatches.map(m => m[1]))];
    
    if (originalAudioFiles.length <= 3) {
      console.log(`✅ Lesson ${lessonNumber}: ${originalAudioFiles.length} audio files - Already optimized`);
      return;
    }
    
    console.log(`🔧 Processing Lesson ${lessonNumber}: ${originalAudioFiles.length} audio files → targeting 3`);
    
    // Categorize and select optimal audio files
    const optimalAudio = selectOptimalNarrationFiles(originalAudioFiles);
    const audioToRemove = originalAudioFiles.filter(audio => !optimalAudio.includes(audio));
    
    console.log(`   ✅ Keeping: ${optimalAudio.join(', ')}`);
    console.log(`   🗑️  Removing: ${audioToRemove.length} files`);
    
    // Remove excessive narrationUrl references
    let removedCount = 0;
    audioToRemove.forEach(audioPath => {
      // Create regex to match the entire audio block
      const audioBlockRegex = new RegExp(
        `\\s*audio:\\s*\\{[^}]*narrationUrl:\\s*['"\`]${escapeRegex(audioPath)}['"\`][^}]*\\},?\\s*`,
        'g'
      );
      
      // Also match standalone narrationUrl lines
      const standaloneRegex = new RegExp(
        `\\s*narrationUrl:\\s*['"\`]${escapeRegex(audioPath)}['"\`],?\\s*`,
        'g'
      );
      
      const beforeReplace = content;
      content = content.replace(audioBlockRegex, '');
      content = content.replace(standaloneRegex, '');
      
      if (content !== beforeReplace) {
        removedCount++;
      }
    });
    
    // Clean up any formatting issues
    content = content
      .replace(/,\s*\n\s*}/g, '\n      }')  // Remove trailing commas before closing braces
      .replace(/\n\s*\n\s*\n/g, '\n\n')    // Remove excessive empty lines
      .replace(/,\s*,/g, ',')              // Remove duplicate commas
      .replace(/{\s*,/g, '{')              // Remove leading commas in objects
      .replace(/\[\s*,/g, '[');            // Remove leading commas in arrays
    
    // Write optimized content
    fs.writeFileSync(filePath, content, 'utf8');
    
    totalFilesProcessed++;
    totalAudioRemoved += removedCount;
    
    // Verify the result
    const newMatches = [...content.matchAll(/narrationUrl:\s*['"`]([^'"`]+)['"`]/g)];
    const newAudioFiles = [...new Set(newMatches.map(m => m[1]))];
    
    optimizationResults.push({
      lesson: lessonNumber,
      fileName,
      original: originalAudioFiles.length,
      final: newAudioFiles.length,
      removed: removedCount,
      kept: optimalAudio
    });
    
    console.log(`   📊 Result: ${originalAudioFiles.length} → ${newAudioFiles.length} audio files (removed ${removedCount})`);
  });
  
  // Generate summary report
  console.log('\n' + '=' .repeat(70));
  console.log('📊 NARRATION AUDIO OPTIMIZATION COMPLETE');
  console.log('=' .repeat(70));
  console.log(`📁 Files processed: ${totalFilesProcessed}`);
  console.log(`🎵 Total narrationUrl references removed: ${totalAudioRemoved}`);
  console.log(`💾 Backup created in: ${backupDir}`);
  
  // Show results by category
  const excellentLessons = optimizationResults.filter(r => r.final <= 3);
  const goodLessons = optimizationResults.filter(r => r.final > 3 && r.final <= 5);
  const needsMoreWork = optimizationResults.filter(r => r.final > 5);
  
  console.log(`\n✅ EXCELLENT (≤3 audio): ${excellentLessons.length} lessons`);
  console.log(`🟡 GOOD (4-5 audio): ${goodLessons.length} lessons`);
  console.log(`🔴 NEEDS MORE WORK (>5 audio): ${needsMoreWork.length} lessons`);
  
  if (needsMoreWork.length > 0) {
    console.log('\n🎯 LESSONS NEEDING ADDITIONAL CLEANUP:');
    needsMoreWork.forEach(lesson => {
      console.log(`   Lesson ${lesson.lesson}: ${lesson.final} audio files remaining`);
    });
  }
  
  // Save detailed report
  const report = generateOptimizationReport(optimizationResults);
  fs.writeFileSync('NARRATION_AUDIO_OPTIMIZATION_SUCCESS.md', report);
  console.log('\n📄 Detailed report saved to: NARRATION_AUDIO_OPTIMIZATION_SUCCESS.md');
  
  return {
    processed: totalFilesProcessed,
    removed: totalAudioRemoved,
    excellent: excellentLessons.length,
    needsWork: needsMoreWork.length
  };
}

function selectOptimalNarrationFiles(audioFiles) {
  // Priority categories for keeping narration files
  const priorities = {
    introduction: 10,
    overview: 9,
    mastery: 8,
    assessment: 7,
    quiz: 6,
    definition: 5,
    basics: 4,
    clinical: 3,
    other: 2
  };
  
  // Categorize each audio file
  const categorized = audioFiles.map(audioPath => {
    const fileName = audioPath.toLowerCase();
    let category = 'other';
    let priority = priorities.other;
    
    if (fileName.includes('intro') || fileName.includes('introduction')) {
      category = 'introduction';
      priority = priorities.introduction;
    } else if (fileName.includes('overview')) {
      category = 'overview'; 
      priority = priorities.overview;
    } else if (fileName.includes('mastery') || fileName.includes('celebration')) {
      category = 'mastery';
      priority = priorities.mastery;
    } else if (fileName.includes('assessment') || fileName.includes('quiz')) {
      category = 'assessment';
      priority = priorities.assessment;
    } else if (fileName.includes('definition')) {
      category = 'definition';
      priority = priorities.definition;
    } else if (fileName.includes('basics') || fileName.includes('fundamentals')) {
      category = 'basics';
      priority = priorities.basics;
    } else if (fileName.includes('clinical')) {
      category = 'clinical';
      priority = priorities.clinical;
    }
    
    return {
      audioPath,
      category,
      priority,
      fileName
    };
  });
  
  // Sort by priority and select top 3
  const sorted = categorized.sort((a, b) => b.priority - a.priority);
  
  // Try to get one from each essential category: intro, content, mastery
  const optimal = [];
  const usedCategories = new Set();
  
  // First pass: get one from each key category
  const keyCategories = ['introduction', 'overview', 'mastery', 'assessment'];
  for (const category of keyCategories) {
    const candidate = sorted.find(item => 
      item.category === category && !usedCategories.has(item.category)
    );
    if (candidate && optimal.length < 3) {
      optimal.push(candidate.audioPath);
      usedCategories.add(candidate.category);
    }
  }
  
  // Second pass: fill remaining slots with highest priority
  for (const item of sorted) {
    if (optimal.length >= 3) break;
    if (!optimal.includes(item.audioPath)) {
      optimal.push(item.audioPath);
    }
  }
  
  return optimal.slice(0, 3);
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function generateOptimizationReport(results) {
  const timestamp = new Date().toISOString();
  let report = `# 🎯 ECGkid Narration Audio Optimization Success Report\n\n`;
  report += `**Generated:** ${timestamp}\n`;
  report += `**Operation:** Remove excessive narrationUrl references\n`;
  report += `**Standard:** 3 audio files per lesson maximum\n\n`;
  
  report += `## 📊 Optimization Results\n\n`;
  report += `- **Lessons Processed:** ${results.length}\n`;
  report += `- **Audio References Removed:** ${results.reduce((sum, r) => sum + r.removed, 0)}\n`;
  report += `- **Lessons Meeting Standard (≤3):** ${results.filter(r => r.final <= 3).length}\n`;
  report += `- **Success Rate:** ${Math.round((results.filter(r => r.final <= 3).length / results.length) * 100)}%\n\n`;
  
  report += `## 📋 Detailed Results\n\n`;
  results.forEach(lesson => {
    const status = lesson.final <= 3 ? '✅' : lesson.final <= 5 ? '🟡' : '🔴';
    report += `### ${status} Lesson ${lesson.lesson}\n`;
    report += `- **Before:** ${lesson.original} audio files\n`;
    report += `- **After:** ${lesson.final} audio files\n`;
    report += `- **Removed:** ${lesson.removed} files\n`;
    report += `- **Kept:** ${lesson.kept.join(', ')}\n\n`;
  });
  
  return report;
}

// Run the optimization
console.log('🚀 Starting narrationUrl audio optimization...\n');
const results = optimizeNarrationAudio();
console.log(`\n🎉 Optimization complete! Processed ${results.processed} lessons, removed ${results.removed} audio references.`);
