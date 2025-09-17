const fs = require('fs');
const path = require('path');

function correctAudioAnalysis() {
  try {
    console.log('🔍 CORRECTED AUDIO ANALYSIS - Looking for actual lesson patterns');
    console.log('=' .repeat(70));
    
    const dataDir = path.join(__dirname, 'src', 'data');
    const lessonFiles = fs.readdirSync(dataDir).filter(file => 
      file.startsWith('optimized-lesson-') && file.endsWith('.ts')
    );
    
    const lessonAudioCounts = {};
    const allAudioFiles = new Set();
    const lessonDetails = {};
    
    console.log(`📂 Found ${lessonFiles.length} lesson files to analyze\n`);
    
    lessonFiles.forEach(fileName => {
      const filePath = path.join(dataDir, fileName);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract lesson number from filename
      const lessonMatch = fileName.match(/lesson-(\d+)/);
      const lessonNumber = lessonMatch ? lessonMatch[1] : 'unknown';
      
      // Look for ALL audio patterns (both narrationUrl and audioUrl)
      const narrationMatches = [...content.matchAll(/narrationUrl:\s*['"`]([^'"`]+)['"`]/g)];
      const audioMatches = [...content.matchAll(/audioUrl:\s*['"`]([^'"`]+)['"`]/g)];
      
      const allMatches = [...narrationMatches, ...audioMatches];
      const uniqueAudioFiles = [...new Set(allMatches.map(m => m[1]))];
      
      if (uniqueAudioFiles.length > 0) {
        lessonAudioCounts[lessonNumber] = uniqueAudioFiles.length;
        lessonDetails[lessonNumber] = {
          fileName,
          audioFiles: uniqueAudioFiles,
          narrationCount: narrationMatches.length,
          audioUrlCount: audioMatches.length
        };
        
        uniqueAudioFiles.forEach(audioFile => allAudioFiles.add(audioFile));
      }
    });
    
    // Sort lessons by audio count
    const sortedLessons = Object.entries(lessonAudioCounts)
      .sort((a, b) => b[1] - a[1]);
    
    console.log('=== 🚨 CORRECTED AUDIO OVERLOAD ANALYSIS ===\n');
    console.log(`Total Audio Files Found: ${allAudioFiles.size}`);
    console.log(`Lessons with Audio: ${Object.keys(lessonAudioCounts).length}`);
    console.log(`Expected: 2-3 audio files per lesson\n`);
    
    console.log('=== 📊 TOP 15 LESSONS WITH MOST AUDIO FILES ===');
    sortedLessons.slice(0, 15).forEach(([lesson, count], index) => {
      const details = lessonDetails[lesson];
      const status = count > 3 ? '🔴 EXCESSIVE' : count > 2 ? '🟡 BORDERLINE' : '✅ GOOD';
      const excess = count > 3 ? ` (${count - 3} excess)` : '';
      
      console.log(`${index + 1}. Lesson ${lesson}: ${count} audio files ${status}${excess}`);
      console.log(`   📁 File: ${details.fileName}`);
      console.log(`   🎵 narrationUrl: ${details.narrationCount}, audioUrl: ${details.audioUrlCount}`);
      
      if (count > 5) {
        console.log(`   🎯 Sample files:`);
        details.audioFiles.slice(0, 3).forEach(file => {
          console.log(`      - ${file}`);
        });
        if (details.audioFiles.length > 3) {
          console.log(`      ... and ${details.audioFiles.length - 3} more`);
        }
      }
      console.log('');
    });
    
    // Calculate the real optimization need
    const problemLessons = sortedLessons.filter(([lesson, count]) => count > 3);
    const excessiveAudioCount = problemLessons.reduce((sum, [lesson, count]) => sum + (count - 3), 0);
    const targetAudioCount = sortedLessons.length * 3;
    
    console.log('=== 🎯 REAL OPTIMIZATION REQUIREMENTS ===');
    console.log(`Problem Lessons (>3 audio): ${problemLessons.length}`);
    console.log(`Current Total Audio Files: ${allAudioFiles.size}`);
    console.log(`Target Audio Count: ${targetAudioCount} (3 per lesson)`);
    console.log(`Excess Audio Files: ${excessiveAudioCount}`);
    console.log(`Reduction Needed: ${allAudioFiles.size > targetAudioCount ? allAudioFiles.size - targetAudioCount : 0} files`);
    console.log(`Reduction Percentage: ${Math.round(((allAudioFiles.size - targetAudioCount) / allAudioFiles.size) * 100)}%\n`);
    
    // Check if optimization is actually needed
    if (problemLessons.length === 0) {
      console.log('✅ GREAT NEWS: No lessons exceed the 3-audio limit!');
      console.log('🎯 Your lesson structure already follows the 2-3 audio standard.');
      return {
        optimizationNeeded: false,
        totalAudio: allAudioFiles.size,
        problemLessons: problemLessons.length
      };
    } else {
      console.log('⚠️  OPTIMIZATION REQUIRED');
      console.log(`🔧 ${problemLessons.length} lessons need audio reduction`);
      return {
        optimizationNeeded: true,
        totalAudio: allAudioFiles.size,
        problemLessons: problemLessons.length,
        lessonsToOptimize: problemLessons,
        lessonDetails: lessonDetails
      };
    }
    
  } catch (error) {
    console.error('❌ Error in corrected audio analysis:', error.message);
    return { error: error.message };
  }
}

// Run the corrected analysis
const result = correctAudioAnalysis();

if (result.error) {
  console.log('\n❌ Analysis failed. Please check the error above.');
} else if (result.optimizationNeeded) {
  console.log('\n📋 NEXT STEPS:');
  console.log('1. Review the analysis above');  
  console.log('2. Confirm which lessons need optimization');
  console.log('3. Create a proper optimization script for narrationUrl patterns');
} else {
  console.log('\n🎉 NO OPTIMIZATION NEEDED!');
  console.log('Your lessons already meet the 2-3 audio per lesson standard.');
}
