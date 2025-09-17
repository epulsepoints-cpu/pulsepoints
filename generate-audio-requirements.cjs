const fs = require('fs');
const path = require('path');

function generateUpdatedAudioRequirements() {
  console.log('🎵 GENERATING UPDATED AUDIO REQUIREMENTS POST-OPTIMIZATION');
  console.log('=' .repeat(70));
  
  const dataDir = path.join(__dirname, 'src', 'data');
  const lessonFiles = fs.readdirSync(dataDir).filter(file => 
    file.startsWith('optimized-lesson-') && file.endsWith('.ts')
  );
  
  const audioRequirements = [];
  let totalAudioFiles = 0;
  
  console.log(`📂 Scanning ${lessonFiles.length} lesson files for audio requirements...\n`);
  
  lessonFiles.forEach(fileName => {
    const filePath = path.join(dataDir, fileName);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract lesson number and title
    const lessonMatch = fileName.match(/lesson-(\d+)/);
    const lessonNumber = lessonMatch ? lessonMatch[1] : 'unknown';
    const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
    const lessonTitle = titleMatch ? titleMatch[1] : 'Unknown Title';
    
    // Get module info
    const moduleMatch = content.match(/moduleId:\s*["'`](module-\d+)["'`]/);
    const moduleId = moduleMatch ? moduleMatch[1] : 'unknown-module';
    
    // Find all audio references (both narrationUrl and audioUrl)
    const narrationMatches = [...content.matchAll(/narrationUrl:\s*['"`]([^'"`]+)['"`]/g)];
    const audioMatches = [...content.matchAll(/audioUrl:\s*['"`]([^'"`]+)['"`]/g)];
    
    const allAudioFiles = [
      ...narrationMatches.map(m => ({ path: m[1], type: 'narration' })),
      ...audioMatches.map(m => ({ path: m[1], type: 'audio' }))
    ];
    
    if (allAudioFiles.length > 0) {
      allAudioFiles.forEach((audio, index) => {
        const fileName = path.basename(audio.path);
        const directory = path.dirname(audio.path);
        const category = categorizeAudioFile(fileName);
        const priority = getPriorityLevel(category, lessonNumber);
        const estimatedDuration = getEstimatedDuration(category);
        const description = generateAudioDescription(fileName, category, lessonTitle);
        
        audioRequirements.push({
          id: `AUDIO_L${lessonNumber.padStart(2, '0')}_${index + 1}`,
          lessonNumber: parseInt(lessonNumber),
          lessonTitle: lessonTitle,
          module: moduleId,
          fileName: fileName,
          filePath: audio.path,
          directory: directory,
          audioType: audio.type,
          category: category,
          priority: priority,
          estimatedDuration: estimatedDuration,
          description: description,
          specifications: getAudioSpecs(category),
          status: 'Required',
          notes: generateCreationNotes(fileName, category)
        });
        
        totalAudioFiles++;
      });
    }
  });
  
  // Sort by lesson number then by priority
  audioRequirements.sort((a, b) => {
    if (a.lessonNumber !== b.lessonNumber) {
      return a.lessonNumber - b.lessonNumber;
    }
    const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
  
  console.log(`✅ Found ${totalAudioFiles} audio files across ${lessonFiles.length} lessons\n`);
  
  // Generate comprehensive CSV
  generateAudioCSV(audioRequirements);
  
  // Generate detailed requirements document
  generateAudioRequirementsDoc(audioRequirements);
  
  // Generate summary by module
  generateModuleSummary(audioRequirements);
  
  console.log('📄 Generated files:');
  console.log('   • ECGkid-Audio-Requirements-Complete.csv');
  console.log('   • ECGkid-Audio-Creation-Guide.md');
  console.log('   • ECGkid-Audio-Module-Summary.md');
  
  return audioRequirements;
}

function categorizeAudioFile(fileName) {
  const name = fileName.toLowerCase();
  
  if (name.includes('intro') || name.includes('overview')) return 'Introduction';
  if (name.includes('mastery') || name.includes('complete')) return 'Mastery';
  if (name.includes('quiz') || name.includes('assessment')) return 'Assessment';
  if (name.includes('clinical') || name.includes('significance')) return 'Clinical';
  if (name.includes('definition') || name.includes('basics')) return 'Foundation';
  if (name.includes('mechanism') || name.includes('pathophysiology')) return 'Concept';
  if (name.includes('recognition') || name.includes('criteria')) return 'Recognition';
  if (name.includes('management') || name.includes('treatment')) return 'Management';
  if (name.includes('rule') || name.includes('method') || name.includes('calculation')) return 'Technique';
  
  return 'Educational';
}

function getPriorityLevel(category, lessonNumber) {
  // Module 1 lessons (1-10) are foundation - high priority
  if (parseInt(lessonNumber) <= 10) return 'High';
  
  // Essential categories
  if (['Introduction', 'Mastery', 'Assessment'].includes(category)) return 'High';
  if (['Clinical', 'Recognition', 'Management'].includes(category)) return 'Medium';
  
  return 'Medium';
}

function getEstimatedDuration(category) {
  const durations = {
    'Introduction': '2-3 minutes',
    'Mastery': '1-2 minutes',
    'Assessment': '30-60 seconds',
    'Clinical': '3-4 minutes',
    'Foundation': '2-3 minutes',
    'Concept': '3-5 minutes',
    'Recognition': '2-3 minutes',
    'Management': '3-4 minutes',
    'Technique': '2-4 minutes',
    'Educational': '2-3 minutes'
  };
  
  return durations[category] || '2-3 minutes';
}

function generateAudioDescription(fileName, category, lessonTitle) {
  const descriptions = {
    'Introduction': `Introduction and overview for ${lessonTitle}`,
    'Mastery': `Mastery celebration and reinforcement for ${lessonTitle}`,
    'Assessment': `Quiz or assessment audio for ${lessonTitle}`,
    'Clinical': `Clinical significance and application content`,
    'Foundation': `Foundational concept explanation`,
    'Concept': `Key concept or mechanism explanation`,
    'Recognition': `Pattern recognition and diagnostic criteria`,
    'Management': `Treatment and management strategies`,
    'Technique': `Step-by-step technique instruction`,
    'Educational': `Educational content narration`
  };
  
  return descriptions[category] || `Educational audio content for ${lessonTitle}`;
}

function getAudioSpecs(category) {
  const baseSpecs = 'MP3, 128kbps minimum, clear narration, professional voice';
  
  const categorySpecs = {
    'Introduction': `${baseSpecs}, engaging and welcoming tone`,
    'Mastery': `${baseSpecs}, celebratory and encouraging tone`,
    'Assessment': `${baseSpecs}, clear question delivery`,
    'Clinical': `${baseSpecs}, authoritative medical tone`,
    'Foundation': `${baseSpecs}, clear explanatory style`,
    'Concept': `${baseSpecs}, detailed explanatory narration`,
    'Recognition': `${baseSpecs}, instructional and precise`,
    'Management': `${baseSpecs}, clinical decision-making tone`,
    'Technique': `${baseSpecs}, step-by-step instructional style`
  };
  
  return categorySpecs[category] || baseSpecs;
}

function generateCreationNotes(fileName, category) {
  const notes = {
    'Introduction': 'Set positive learning tone, introduce key concepts',
    'Mastery': 'Celebrate achievement, reinforce learning',
    'Assessment': 'Clear question delivery, pause for thinking',
    'Clinical': 'Emphasize practical application and significance',
    'Foundation': 'Build understanding from basic principles',
    'Concept': 'Explain complex medical concepts clearly',
    'Recognition': 'Focus on diagnostic criteria and patterns',
    'Management': 'Practical treatment decision guidance',
    'Technique': 'Step-by-step instructional approach'
  };
  
  return notes[category] || 'Educational content narration';
}

function generateAudioCSV(requirements) {
  const csvHeaders = [
    'Audio_ID',
    'Lesson_Number',
    'Lesson_Title',
    'Module',
    'File_Name',
    'File_Path',
    'Directory',
    'Audio_Type',
    'Category',
    'Priority',
    'Estimated_Duration',
    'Description',
    'Technical_Specifications',
    'Creation_Status',
    'Creation_Notes',
    'Target_Date'
  ];
  
  const csvData = [csvHeaders.join(',')];
  
  requirements.forEach(req => {
    const row = [
      `"${req.id}"`,
      `"${req.lessonNumber}"`,
      `"${req.lessonTitle.replace(/"/g, '""')}"`,
      `"${req.module}"`,
      `"${req.fileName}"`,
      `"${req.filePath}"`,
      `"${req.directory}"`,
      `"${req.audioType}"`,
      `"${req.category}"`,
      `"${req.priority}"`,
      `"${req.estimatedDuration}"`,
      `"${req.description.replace(/"/g, '""')}"`,
      `"${req.specifications.replace(/"/g, '""')}"`,
      `"${req.status}"`,
      `"${req.notes.replace(/"/g, '""')}"`,
      `"2025-09-15"`
    ];
    csvData.push(row.join(','));
  });
  
  fs.writeFileSync('ECGkid-Audio-Requirements-Complete.csv', csvData.join('\n'));
}

function generateAudioRequirementsDoc(requirements) {
  let doc = `# 🎵 ECGkid Audio Creation Requirements - Complete Guide\n\n`;
  doc += `**Generated:** ${new Date().toISOString().split('T')[0]}\n`;
  doc += `**Total Audio Files Needed:** ${requirements.length}\n`;
  doc += `**Post-Optimization Status:** Ready for production\n\n`;
  
  doc += `## 📊 Overview\n\n`;
  doc += `After successful audio optimization, your ECGkid app now requires **${requirements.length} strategic audio files** across **${new Set(requirements.map(r => r.lessonNumber)).size} lessons**.\n\n`;
  
  doc += `### Priority Breakdown:\n`;
  const priorities = requirements.reduce((acc, req) => {
    acc[req.priority] = (acc[req.priority] || 0) + 1;
    return acc;
  }, {});
  
  Object.entries(priorities).forEach(([priority, count]) => {
    doc += `- **${priority} Priority:** ${count} files\n`;
  });
  
  doc += `\n### Category Breakdown:\n`;
  const categories = requirements.reduce((acc, req) => {
    acc[req.category] = (acc[req.category] || 0) + 1;
    return acc;
  }, {});
  
  Object.entries(categories).forEach(([category, count]) => {
    doc += `- **${category}:** ${count} files\n`;
  });
  
  doc += `\n## 📋 Audio Creation Requirements by Lesson\n\n`;
  
  const lessonGroups = requirements.reduce((acc, req) => {
    if (!acc[req.lessonNumber]) acc[req.lessonNumber] = [];
    acc[req.lessonNumber].push(req);
    return acc;
  }, {});
  
  Object.entries(lessonGroups)
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .forEach(([lessonNum, reqs]) => {
      const lesson = reqs[0];
      doc += `### Lesson ${lessonNum}: ${lesson.lessonTitle}\n`;
      doc += `**Module:** ${lesson.module} | **Audio Files:** ${reqs.length}\n\n`;
      
      reqs.forEach((req, index) => {
        doc += `#### ${index + 1}. ${req.fileName}\n`;
        doc += `- **Category:** ${req.category}\n`;
        doc += `- **Priority:** ${req.priority}\n`;
        doc += `- **Duration:** ${req.estimatedDuration}\n`;
        doc += `- **Description:** ${req.description}\n`;
        doc += `- **Path:** \`${req.filePath}\`\n`;
        doc += `- **Specifications:** ${req.specifications}\n`;
        doc += `- **Creation Notes:** ${req.notes}\n\n`;
      });
    });
  
  doc += `\n## 🎯 Production Guidelines\n\n`;
  doc += `### Voice Requirements:\n`;
  doc += `- Professional medical narrator\n`;
  doc += `- Clear pronunciation of medical terms\n`;
  doc += `- Consistent tone throughout modules\n`;
  doc += `- Gender-neutral or diverse representation\n\n`;
  
  doc += `### Technical Standards:\n`;
  doc += `- **Format:** MP3\n`;
  doc += `- **Bitrate:** 128kbps minimum\n`;
  doc += `- **Sample Rate:** 44.1kHz\n`;
  doc += `- **Channels:** Mono (for file size efficiency)\n`;
  doc += `- **Normalization:** -23 LUFS (broadcast standard)\n\n`;
  
  doc += `### File Organization:\n`;
  doc += `- Place files in exact paths as specified\n`;
  doc += `- Use exact filenames (case-sensitive)\n`;
  doc += `- Maintain module/lesson directory structure\n`;
  doc += `- Test audio integration after creation\n\n`;
  
  fs.writeFileSync('ECGkid-Audio-Creation-Guide.md', doc);
}

function generateModuleSummary(requirements) {
  const moduleGroups = requirements.reduce((acc, req) => {
    if (!acc[req.module]) acc[req.module] = [];
    acc[req.module].push(req);
    return acc;
  }, {});
  
  let summary = `# 🎵 ECGkid Audio Requirements by Module\n\n`;
  summary += `**Generated:** ${new Date().toISOString().split('T')[0]}\n\n`;
  
  Object.entries(moduleGroups)
    .sort()
    .forEach(([module, reqs]) => {
      summary += `## ${module.toUpperCase()}\n`;
      summary += `**Total Audio Files:** ${reqs.length}\n\n`;
      
      const lessonGroups = reqs.reduce((acc, req) => {
        if (!acc[req.lessonNumber]) acc[req.lessonNumber] = [];
        acc[req.lessonNumber].push(req);
        return acc;
      }, {});
      
      Object.entries(lessonGroups)
        .sort(([a], [b]) => parseInt(a) - parseInt(b))
        .forEach(([lessonNum, lessonReqs]) => {
          const lesson = lessonReqs[0];
          summary += `### Lesson ${lessonNum}: ${lesson.lessonTitle}\n`;
          summary += `**Audio Files:** ${lessonReqs.length}\n`;
          
          lessonReqs.forEach(req => {
            summary += `- \`${req.fileName}\` (${req.category}, ${req.priority} priority)\n`;
          });
          summary += `\n`;
        });
    });
  
  fs.writeFileSync('ECGkid-Audio-Module-Summary.md', summary);
}

// Run the requirements generation
const requirements = generateUpdatedAudioRequirements();

console.log('\n🎉 Audio requirements generation complete!');
console.log(`📊 Total files to create: ${requirements.length}`);
console.log(`📁 Files organized across ${new Set(requirements.map(r => r.module)).size} modules`);
console.log(`🎯 Ready for audio production workflow!`);
