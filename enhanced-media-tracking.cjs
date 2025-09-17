const fs = require('fs');
const path = require('path');

console.log('🔍 ENHANCED MEDIA TRACKING SPREADSHEET GENERATOR\n');

// Get all lesson files
const lessonDir = 'src/data';
const lessonFiles = fs.readdirSync(lessonDir)
  .filter(file => file.startsWith('optimized-lesson-') && file.endsWith('.ts'))
  .sort((a, b) => {
    const aNum = parseInt(a.match(/\d+/)[0]);
    const bNum = parseInt(b.match(/\d+/)[0]);
    return aNum - bNum;
  });

console.log(`📚 Analyzing ${lessonFiles.length} lesson files...\n`);

const mediaByLesson = {};
const allMediaPaths = new Set();

// Enhanced regex patterns for better media detection
const mediaPatterns = {
  images: [
    /image:\s*['"`]([^'"`]+)['"`]/g,
    /src:\s*['"`]([^'"`]*\.(jpg|jpeg|png|gif|svg|webp)[^'"`]*)['"`]/gi,
    /background.*:\s*['"`]url\([^)]*([^)]*\.(jpg|jpeg|png|gif|svg|webp)[^)]*)\)['"`]/gi,
    /icon:\s*['"`]([^'"`]*\.(jpg|jpeg|png|gif|svg|webp)[^'"`]*)['"`]/gi,
    /thumbnail:\s*['"`]([^'"`]*\.(jpg|jpeg|png|gif|svg|webp)[^'"`]*)['"`]/gi,
    /poster:\s*['"`]([^'"`]*\.(jpg|jpeg|png|gif|svg|webp)[^'"`]*)['"`]/gi
  ],
  audio: [
    /audioUrl:\s*['"`]([^'"`]+)['"`]/g,
    /src:\s*['"`]([^'"`]*\.(mp3|wav|ogg|m4a|aac)[^'"`]*)['"`]/gi,
    /audio:\s*['"`]([^'"`]*\.(mp3|wav|ogg|m4a|aac)[^'"`]*)['"`]/gi,
    /sound:\s*['"`]([^'"`]*\.(mp3|wav|ogg|m4a|aac)[^'"`]*)['"`]/gi
  ],
  video: [
    /videoUrl:\s*['"`]([^'"`]+)['"`]/g,
    /src:\s*['"`]([^'"`]*\.(mp4|webm|avi|mov|wmv|flv)[^'"`]*)['"`]/gi,
    /video:\s*['"`]([^'"`]*\.(mp4|webm|avi|mov|wmv|flv)[^'"`]*)['"`]/gi,
    /https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]+/g
  ]
};

// Process each lesson file
lessonFiles.forEach(file => {
  const lessonNum = file.match(/\d+/)[0];
  console.log(`Processing ${file}... (Lesson ${lessonNum})`);
  
  try {
    const content = fs.readFileSync(path.join(lessonDir, file), 'utf8');
    
    // Initialize lesson media tracking
    if (!mediaByLesson[lessonNum]) {
      mediaByLesson[lessonNum] = {
        images: new Set(),
        audio: new Set(),
        video: new Set(),
        title: `Lesson ${lessonNum}`
      };
      
      // Try to extract lesson title from the file
      const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/);
      if (titleMatch) {
        mediaByLesson[lessonNum].title = `Lesson ${lessonNum}: ${titleMatch[1]}`;
      }
    }
    
    // Extract media using enhanced patterns
    Object.keys(mediaPatterns).forEach(mediaType => {
      mediaPatterns[mediaType].forEach(pattern => {
        let match;
        const regex = new RegExp(pattern.source, pattern.flags);
        while ((match = regex.exec(content)) !== null) {
          let mediaPath = match[1] || match[0];
          
          // Clean up the path
          mediaPath = mediaPath.replace(/['"` ]/g, '');
          
          // Skip empty paths or common false positives
          if (!mediaPath || mediaPath.length < 5 || mediaPath.includes('undefined')) {
            continue;
          }
          
          // Normalize paths
          if (!mediaPath.startsWith('/') && !mediaPath.startsWith('http')) {
            mediaPath = '/' + mediaPath;
          }
          
          mediaByLesson[lessonNum][mediaType].add(mediaPath);
          allMediaPaths.add(`${mediaType}:${mediaPath}`);
        }
      });
    });
    
    // Additional specific checks for common patterns
    // Check for ECG image references
    const ecgImageMatches = content.match(/ecg[_-]?image[s]?[_-]?\w*/gi) || [];
    ecgImageMatches.forEach(match => {
      const imagePath = `/images/ecg/${match.toLowerCase()}.png`;
      mediaByLesson[lessonNum].images.add(imagePath);
      allMediaPaths.add(`images:${imagePath}`);
    });
    
    // Check for rhythm strip references
    const rhythmMatches = content.match(/rhythm[_-]?strip[s]?[_-]?\w*/gi) || [];
    rhythmMatches.forEach(match => {
      const imagePath = `/images/rhythms/${match.toLowerCase()}.png`;
      mediaByLesson[lessonNum].images.add(imagePath);
      allMediaPaths.add(`images:${imagePath}`);
    });
    
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
  }
});

// Function to determine module and category from lesson number
function getLessonDetails(lessonNum) {
  const num = parseInt(lessonNum);
  
  let module = 'Other';
  let category = 'General';
  
  if (num >= 1 && num <= 10) {
    module = 'Module 1 - ECG Fundamentals';
    category = 'Foundation';
  } else if (num >= 11 && num <= 20) {
    module = 'Module 2 - Rhythm Analysis';
    category = 'Basic Rhythms';
  } else if (num >= 21 && num <= 28) {
    module = 'Module 3 - Advanced Arrhythmias';
    category = 'Complex Arrhythmias';
  } else if (num >= 29 && num <= 38) {
    module = 'Module 4 - Conduction Disorders';
    category = 'Conduction Issues';
  } else if (num >= 39 && num <= 43) {
    module = 'Module 5 - Bundle Branch Blocks';
    category = 'Conduction Blocks';
  } else if (num >= 44 && num <= 68) {
    module = 'Module 6 - Clinical Conditions';
    category = 'Pathology';
  } else if (num >= 69 && num <= 76) {
    module = 'Module 7 - Advanced Diagnostics';
    category = 'Advanced Analysis';
  } else if (num >= 77 && num <= 84) {
    module = 'Module 8 - Integration & Mastery';
    category = 'Clinical Integration';
  }
  
  return { module, category };
}

// Function to get content description from filename
function getContentDescription(filePath, mediaType) {
  const filename = path.basename(filePath, path.extname(filePath));
  
  if (mediaType === 'Audio') {
    if (filename.includes('mastery') || filename.includes('celebration')) return 'Achievement/Completion Audio';
    if (filename.includes('intro') || filename.includes('basics')) return 'Introduction/Overview';
    if (filename.includes('quiz') || filename.includes('assessment')) return 'Quiz/Assessment Audio';
    if (filename.includes('clinical') || filename.includes('management')) return 'Clinical Application';
    return 'Educational Content';
  }
  
  if (mediaType === 'Video') {
    if (filename.includes('quiz-explanation')) return 'Quiz Explanation Video';
    if (filename.includes('intro') || filename.includes('foundation')) return 'Introduction Video';
    if (filename.includes('advanced') || filename.includes('expert')) return 'Advanced Tutorial';
    if (filename.includes('demo') || filename.includes('technique')) return 'Demonstration Video';
    if (filename.includes('mechanism') || filename.includes('physiology')) return 'Conceptual Explanation';
    return 'Educational Video';
  }
  
  if (mediaType === 'Image') {
    if (filename.includes('ecg') || filename.includes('rhythm')) return 'ECG Strip/Rhythm';
    if (filename.includes('anatomy') || filename.includes('heart')) return 'Anatomical Diagram';
    if (filename.includes('diagram') || filename.includes('chart')) return 'Educational Diagram';
    if (filename.includes('quiz') || filename.includes('question')) return 'Quiz Image';
    return 'Educational Image';
  }
  
  return 'Educational Content';
}

// Function to determine priority
function getPriority(module, mediaType, filePath) {
  // High priority: Module 1-2 audio, core ECG images
  if (module.includes('Module 1') || module.includes('Module 2')) {
    if (mediaType === 'Audio') return 'High';
    if (mediaType === 'Image' && filePath.includes('ecg')) return 'High';
  }
  
  // High priority: Quiz explanation videos
  if (mediaType === 'Video' && filePath.includes('quiz-explanation')) return 'High';
  
  // Medium priority: Most other content
  if (module.includes('Module 3') && mediaType === 'Video') return 'High';
  
  return 'Medium';
}

// Function to estimate file size and duration
function getEstimatedDetails(filePath, mediaType) {
  const filename = path.basename(filePath);
  
  if (mediaType === 'Audio') {
    let duration = '3-5 min';
    let size = '3-5 MB';
    
    if (filename.includes('intro') || filename.includes('mastery')) {
      duration = '2-3 min';
      size = '2-3 MB';
    } else if (filename.includes('comprehensive') || filename.includes('detailed')) {
      duration = '8-12 min';
      size = '8-12 MB';
    }
    
    return { duration, size };
  }
  
  if (mediaType === 'Video') {
    let duration = '5-10 min';
    let size = '50-100 MB';
    
    if (filename.includes('quiz-explanation')) {
      duration = '2-4 min';
      size = '20-40 MB';
    } else if (filename.includes('comprehensive') || filename.includes('advanced')) {
      duration = '10-20 min';
      size = '100-200 MB';
    } else if (filename.includes('intro') || filename.includes('basics')) {
      duration = '3-7 min';
      size = '30-70 MB';
    }
    
    return { duration, size };
  }
  
  if (mediaType === 'Image') {
    return { 
      duration: 'N/A', 
      size: filePath.includes('svg') ? '50-200 KB' : '200-800 KB' 
    };
  }
  
  return { duration: 'N/A', size: 'Unknown' };
}

// Collect all media with enhanced details
const mediaArray = [];

Object.keys(mediaByLesson).forEach(lessonNum => {
  const lessonDetails = getLessonDetails(lessonNum);
  const lessonTitle = mediaByLesson[lessonNum].title;
  
  // Process all media types
  ['images', 'audio', 'video'].forEach(mediaType => {
    mediaByLesson[lessonNum][mediaType].forEach(mediaPath => {
      const capitalizedType = mediaType.charAt(0).toUpperCase() + mediaType.slice(0, -1);
      const priority = getPriority(lessonDetails.module, capitalizedType, mediaPath);
      const contentDesc = getContentDescription(mediaPath, capitalizedType);
      const details = getEstimatedDetails(mediaPath, capitalizedType);
      const isExternal = mediaPath.includes('youtube.com') || mediaPath.includes('youtu.be');
      
      mediaArray.push({
        mediaType: capitalizedType,
        fileName: path.basename(mediaPath),
        filePath: mediaPath,
        directory: path.dirname(mediaPath),
        module: lessonDetails.module,
        category: lessonDetails.category,
        contentDescription: contentDesc,
        lessonNumber: lessonNum,
        lessonTitle: lessonTitle,
        priority: priority,
        estimatedDuration: details.duration,
        estimatedSize: details.size,
        fileExists: isExternal ? 'External' : 'Unknown',
        uploaded: isExternal ? 'N/A' : 'No',
        tested: 'No',
        creationStatus: isExternal ? 'External Link' : 'Needs Creation',
        qualityCheck: 'Pending',
        creatorAssigned: '',
        dueDate: '',
        completionPercent: isExternal ? '100%' : '0%',
        notes: isExternal ? 'External YouTube video' : '',
        lastUpdated: new Date().toISOString().split('T')[0],
        technicalSpecs: mediaType === 'audio' ? 'MP3, 128kbps min' : 
                       mediaType === 'video' ? 'MP4, 1080p preferred' : 
                       'PNG/JPG, web-optimized'
      });
    });
  });
});

// Merge duplicates and count lesson usage
const mergedMedia = {};
mediaArray.forEach(item => {
  const key = item.filePath;
  if (mergedMedia[key]) {
    // Merge lesson information
    if (!mergedMedia[key].lessonNumbers) {
      mergedMedia[key].lessonNumbers = [mergedMedia[key].lessonNumber];
      mergedMedia[key].lessonTitles = [mergedMedia[key].lessonTitle];
    }
    mergedMedia[key].lessonNumbers.push(item.lessonNumber);
    mergedMedia[key].lessonTitles.push(item.lessonTitle);
  } else {
    mergedMedia[key] = { ...item };
  }
});

// Finalize merged data
const finalMediaArray = Object.values(mergedMedia).map(item => {
  if (item.lessonNumbers) {
    item.lessonsUsed = [...new Set(item.lessonNumbers)].sort((a, b) => parseInt(a) - parseInt(b)).join('; ');
    item.lessonCount = new Set(item.lessonNumbers).size;
    delete item.lessonNumbers;
    delete item.lessonTitles;
    delete item.lessonNumber;
    delete item.lessonTitle;
  } else {
    item.lessonsUsed = item.lessonNumber;
    item.lessonCount = 1;
    delete item.lessonNumber;
  }
  return item;
});

// Sort by priority, module, media type, then filename
finalMediaArray.sort((a, b) => {
  const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };
  if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  }
  if (a.module !== b.module) {
    return a.module.localeCompare(b.module);
  }
  if (a.mediaType !== b.mediaType) {
    return a.mediaType.localeCompare(b.mediaType);
  }
  return a.fileName.localeCompare(b.fileName);
});

// Create comprehensive CSV with all tracking columns
const csvHeaders = [
  'ID',
  'Media Type',
  'File Name',
  'Full File Path',
  'Directory',
  'Module',
  'Category',
  'Content Description',
  'Lessons Used',
  'Lesson Count',
  'Priority',
  'Estimated Duration',
  'Estimated File Size',
  'File Exists',
  'Uploaded to Server',
  'Tested in App',
  'Quality Check',
  'Creation Status',
  'Creator Assigned',
  'Due Date',
  'Completion %',
  'Technical Specs',
  'Notes',
  'Last Updated'
];

const csvRows = [
  csvHeaders.join(','),
  ...finalMediaArray.map((item, index) => [
    `"MEDIA${(index + 1).toString().padStart(3, '0')}"`, // ID
    `"${item.mediaType}"`,
    `"${item.fileName}"`,
    `"${item.filePath}"`,
    `"${item.directory}"`,
    `"${item.module}"`,
    `"${item.category}"`,
    `"${item.contentDescription}"`,
    `"${item.lessonsUsed}"`,
    `"${item.lessonCount}"`,
    `"${item.priority}"`,
    `"${item.estimatedDuration}"`,
    `"${item.estimatedSize}"`,
    `"${item.fileExists}"`,
    `"${item.uploaded}"`,
    `"${item.tested}"`,
    `"${item.qualityCheck}"`,
    `"${item.creationStatus}"`,
    `"${item.creatorAssigned}"`,
    `"${item.dueDate}"`,
    `"${item.completionPercent}"`,
    `"${item.technicalSpecs}"`,
    `"${item.notes}"`,
    `"${item.lastUpdated}"`
  ].join(','))
];

// Write main tracking CSV
const csvContent = csvRows.join('\n');
fs.writeFileSync('ECGkid-Media-Tracking-Master.csv', csvContent);

// Create statistics and summary
const stats = {
  total: finalMediaArray.length,
  byType: {},
  byModule: {},
  byPriority: {},
  byStatus: {}
};

finalMediaArray.forEach(item => {
  // By type
  stats.byType[item.mediaType] = (stats.byType[item.mediaType] || 0) + 1;
  
  // By module
  stats.byModule[item.module] = (stats.byModule[item.module] || 0) + 1;
  
  // By priority
  stats.byPriority[item.priority] = (stats.byPriority[item.priority] || 0) + 1;
  
  // By status
  stats.byStatus[item.creationStatus] = (stats.byStatus[item.creationStatus] || 0) + 1;
});

// Create dashboard CSV
const dashboardRows = [
  ['ECGkid PulsePoints - Media Tracking Dashboard', '', ''],
  ['Generated:', new Date().toLocaleString(), ''],
  ['Total Media Files:', stats.total, ''],
  ['', '', ''],
  ['BY MEDIA TYPE', 'Count', '%'],
  ...Object.entries(stats.byType).map(([type, count]) => [type, count, ((count/stats.total)*100).toFixed(1) + '%']),
  ['', '', ''],
  ['BY MODULE', 'Count', '%'],
  ...Object.entries(stats.byModule).map(([module, count]) => [module, count, ((count/stats.total)*100).toFixed(1) + '%']),
  ['', '', ''],
  ['BY PRIORITY', 'Count', '%'],
  ...Object.entries(stats.byPriority).map(([priority, count]) => [priority, count, ((count/stats.total)*100).toFixed(1) + '%']),
  ['', '', ''],
  ['BY STATUS', 'Count', '%'],
  ...Object.entries(stats.byStatus).map(([status, count]) => [status, count, ((count/stats.total)*100).toFixed(1) + '%'])
];

const dashboardContent = dashboardRows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
fs.writeFileSync('ECGkid-Media-Dashboard.csv', dashboardContent);

// Output results
console.log('\n🎉 ENHANCED MEDIA TRACKING SPREADSHEETS CREATED!\n');

console.log('📊 FILES GENERATED:');
console.log('1. ECGkid-Media-Tracking-Master.csv - Complete tracking spreadsheet');
console.log('2. ECGkid-Media-Dashboard.csv - Summary statistics dashboard\n');

console.log('📈 ANALYSIS RESULTS:');
console.log(`📁 Total Media Files Found: ${stats.total}`);
console.log(`🖼️  Images: ${stats.byType['Image'] || 0}`);
console.log(`🎵 Audio Files: ${stats.byType['Audio'] || 0}`);
console.log(`🎬 Video Files: ${stats.byType['Video'] || 0}`);
console.log(`⚡ High Priority: ${stats.byPriority['High'] || 0}`);
console.log(`📋 Medium Priority: ${stats.byPriority['Medium'] || 0}\n`);

console.log('📋 TRACKING FEATURES INCLUDED:');
console.log('✅ Unique ID for each media file');
console.log('✅ Complete file path and directory structure');
console.log('✅ Module, category, and content classification');
console.log('✅ Multi-lesson usage tracking');
console.log('✅ Priority levels and estimated specifications');
console.log('✅ Creation status and quality tracking');
console.log('✅ Project management columns (assignee, due date, progress)');
console.log('✅ Technical specifications and notes');
console.log('✅ Enhanced image detection with ECG-specific patterns\n');

console.log('🚀 GOOGLE SHEETS IMPORT:');
console.log('1. Open Google Sheets → Create new spreadsheet');
console.log('2. File → Import → Upload ECGkid-Media-Tracking-Master.csv');
console.log('3. Select "Replace spreadsheet" and "Detect automatically"');
console.log('4. Apply conditional formatting for status columns');
console.log('5. Create filters for Module and Priority columns\n');

console.log('💡 RECOMMENDED GOOGLE SHEETS SETUP:');
console.log('• Freeze header row and ID column');
console.log('• Color-code priority levels (High=Red, Medium=Yellow)');
console.log('• Use data validation for dropdown lists');
console.log('• Create pivot tables for module summaries');
console.log('• Set up completion percentage progress bars\n');

console.log('✅ Ready for professional media production tracking!');
