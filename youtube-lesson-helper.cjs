const fs = require('fs');
const path = require('path');

// Your video registry data - use these video IDs in your lessons
const availableVideos = {
  anatomy: [
    {
      id: 'youtube-heart-anatomy-3d',
      youtubeId: 'e37rJqP6-aM',
      title: '3D Heart Anatomy Animation',
      description: 'Learn heart structure through detailed 3D medical visualization',
      duration: 600, // 10 minutes
      category: 'Anatomy',
      difficulty: 'Beginner'
    },
    {
      id: 'youtube-heart-cells',
      youtubeId: 'LgcgooMCxsw',
      title: 'Heart Cells & Ion Channels',
      description: 'Understand how individual heart cells create electrical activity',
      duration: 480, // 8 minutes
      category: 'Anatomy',
      difficulty: 'Intermediate'
    }
  ],
  
  ecgBasics: [
    {
      id: 'youtube-ecg-masterclass',
      youtubeId: 'WnrvNGa_bPY',
      title: 'ECG Fundamentals - Complete Masterclass',
      description: 'Comprehensive ECG training from professional cardiologist',
      duration: 3600, // 60 minutes
      category: 'ECG Basics',
      difficulty: 'Intermediate'
    },
    {
      id: 'youtube-ecg-30day-challenge',
      youtubeId: 'ZNHKl-eV-8k',
      title: '30-Day ECG Mastery Challenge',
      description: 'Start your structured ECG learning journey',
      duration: 900, // 15 minutes
      category: 'ECG Basics',
      difficulty: 'Beginner'
    }
  ],
  
  arrhythmias: [
    {
      id: 'youtube-atrial-fibrillation',
      youtubeId: 'Xa-YkT3gJWU',
      title: 'Understanding Atrial Fibrillation',
      description: 'Master the most common arrhythmia and its clinical significance',
      duration: 480, // 8 minutes
      category: 'Arrhythmias',
      difficulty: 'Advanced'
    },
    {
      id: 'youtube-afib-clinical',
      youtubeId: 'UYyr0QiY8sM',
      title: 'A-Fib Clinical Features & ECG Recognition',
      description: 'Clinical diagnosis and ECG interpretation of atrial fibrillation',
      duration: 900, // 15 minutes
      category: 'Arrhythmias',
      difficulty: 'Advanced'
    }
  ]
};

/**
 * Generate a YouTube slide object for lesson integration
 */
function createYouTubeSlide(video, options = {}) {
  const defaultOptions = {
    minimumWatchPercentage: 0.8, // 80% minimum watch time
    requireFullWatch: false,
    backgroundColor: '#fef2f2',
    textColor: '#991b1b'
  };
  
  const config = { ...defaultOptions, ...options };
  
  return `    {
      id: '${video.id}',
      title: '🎬 ${video.title}',
      content: '${video.description}',
      type: 'youtube',
      youtubeId: '${video.youtubeId}',
      videoDuration: ${video.duration},
      minimumWatchTime: ${Math.floor(video.duration * config.minimumWatchPercentage)},
      requireFullWatch: ${config.requireFullWatch},
      backgroundColor: '${config.backgroundColor}',
      textColor: '${config.textColor}',
      animation: 'fade',
      hint: '🎥 ${getVideoHint(video.category, video.difficulty)}'
    }`;
}

/**
 * Get appropriate hint based on video category and difficulty
 */
function getVideoHint(category, difficulty) {
  const hints = {
    'Anatomy': {
      'Beginner': 'Perfect foundation - visualize how the heart works!',
      'Intermediate': 'Deep dive into cellular mechanisms - take notes!',
      'Advanced': 'Master-level anatomy for clinical understanding!'
    },
    'ECG Basics': {
      'Beginner': 'Start your ECG mastery journey here!',
      'Intermediate': 'Comprehensive training from medical professionals!',
      'Advanced': 'Advanced interpretation skills development!'
    },
    'Arrhythmias': {
      'Beginner': 'Learn the most important arrhythmias step by step!',
      'Intermediate': 'Critical clinical knowledge for patient care!',
      'Advanced': 'Master complex arrhythmia recognition and management!'
    }
  };
  
  return hints[category]?.[difficulty] || 'Watch carefully and take detailed notes!';
}

/**
 * Add YouTube videos to a lesson file
 */
function addYouTubeVideosToLesson(lessonFilePath, videos, insertPosition = 'end') {
  try {
    // Check if file exists
    if (!fs.existsSync(lessonFilePath)) {
      console.error(`❌ Lesson file not found: ${lessonFilePath}`);
      return false;
    }
    
    // Read the lesson file
    let content = fs.readFileSync(lessonFilePath, 'utf8');
    
    // Generate YouTube slides
    const youtubeSlides = videos.map(video => createYouTubeSlide(video)).join(',\n\n');
    
    // Find the slides array and add videos
    if (insertPosition === 'end') {
      // Add before the closing of slides array
      content = content.replace(
        /(.*slides:\s*\[)([\s\S]*?)(\s*\]\s*,?\s*)/,
        `$1$2,\n\n${youtubeSlides}\n$3`
      );
    } else {
      // Add at the beginning of slides array
      content = content.replace(
        /(slides:\s*\[\s*)/,
        `$1\n${youtubeSlides},\n\n`
      );
    }
    
    // Write back to file
    fs.writeFileSync(lessonFilePath, content);
    
    console.log(`✅ Successfully added ${videos.length} YouTube videos to ${path.basename(lessonFilePath)}`);
    console.log(`📹 Added videos:`);
    videos.forEach(video => {
      console.log(`   • ${video.title} (${Math.floor(video.duration/60)} min)`);
    });
    
    return true;
    
  } catch (error) {
    console.error(`❌ Error adding YouTube videos to lesson: ${error.message}`);
    return false;
  }
}

/**
 * List all available videos by category
 */
function listAvailableVideos() {
  console.log('🎬 Available YouTube Videos for Lessons:\n');
  
  Object.entries(availableVideos).forEach(([category, videos]) => {
    console.log(`📚 ${category.toUpperCase()}:`);
    videos.forEach(video => {
      console.log(`   • ${video.title} (${Math.floor(video.duration/60)} min) - ${video.difficulty}`);
      console.log(`     ID: ${video.youtubeId}`);
    });
    console.log('');
  });
}

/**
 * Quick setup functions for specific lessons
 */
const quickSetups = {
  // Add anatomy videos to lesson 1
  addAnatomyToLesson1() {
    const lessonPath = 'src/data/optimized-lesson-1.ts';
    return addYouTubeVideosToLesson(lessonPath, availableVideos.anatomy);
  },
  
  // Add ECG basics to lesson 2
  addECGBasicsToLesson2() {
    const lessonPath = 'src/data/optimized-lesson-2.ts';
    return addYouTubeVideosToLesson(lessonPath, availableVideos.ecgBasics);
  },
  
  // Add arrhythmia videos to lesson 5
  addArrhythmiasToLesson5() {
    const lessonPath = 'src/data/optimized-lesson-5.ts';
    return addYouTubeVideosToLesson(lessonPath, availableVideos.arrhythmias);
  },
  
  // Add all videos to a lesson
  addAllVideos(lessonNumber) {
    const lessonPath = `src/data/optimized-lesson-${lessonNumber}.ts`;
    const allVideos = [
      ...availableVideos.anatomy,
      ...availableVideos.ecgBasics,
      ...availableVideos.arrhythmias
    ];
    return addYouTubeVideosToLesson(lessonPath, allVideos);
  }
};

// Command line interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'list':
      listAvailableVideos();
      break;
      
    case 'add-anatomy':
      console.log('🫀 Adding anatomy videos to Lesson 1...');
      quickSetups.addAnatomyToLesson1();
      break;
      
    case 'add-ecg-basics':
      console.log('📊 Adding ECG basics videos to Lesson 2...');
      quickSetups.addECGBasicsToLesson2();
      break;
      
    case 'add-arrhythmias':
      console.log('💓 Adding arrhythmia videos to Lesson 5...');
      quickSetups.addArrhythmiasToLesson5();
      break;
      
    case 'add-all':
      const lessonNumber = args[1];
      if (!lessonNumber) {
        console.error('❌ Please specify lesson number: node youtube-lesson-helper.js add-all 3');
        break;
      }
      console.log(`🎬 Adding all videos to Lesson ${lessonNumber}...`);
      quickSetups.addAllVideos(lessonNumber);
      break;
      
    case 'add-custom':
      const lessonPath = args[1];
      const category = args[2];
      if (!lessonPath || !category) {
        console.error('❌ Usage: node youtube-lesson-helper.js add-custom src/data/lesson-X.ts anatomy');
        break;
      }
      if (!availableVideos[category]) {
        console.error(`❌ Category '${category}' not found. Available: ${Object.keys(availableVideos).join(', ')}`);
        break;
      }
      console.log(`🎬 Adding ${category} videos to ${lessonPath}...`);
      addYouTubeVideosToLesson(lessonPath, availableVideos[category]);
      break;
      
    default:
      console.log(`
🎬 YouTube Lesson Helper - Usage:

📋 Commands:
   node youtube-lesson-helper.js list                     # List all available videos
   node youtube-lesson-helper.js add-anatomy             # Add anatomy videos to lesson 1
   node youtube-lesson-helper.js add-ecg-basics          # Add ECG basics to lesson 2
   node youtube-lesson-helper.js add-arrhythmias         # Add arrhythmia videos to lesson 5
   node youtube-lesson-helper.js add-all [lesson-number] # Add all videos to specified lesson
   node youtube-lesson-helper.js add-custom [lesson-path] [category]

📚 Categories: anatomy, ecgBasics, arrhythmias

🚀 Quick Start:
   1. Run 'node youtube-lesson-helper.js list' to see available videos
   2. Run 'node youtube-lesson-helper.js add-anatomy' to add videos to lesson 1
   3. Check your lesson file - YouTube videos are now integrated!

✨ Your YouTube videos will appear with countdown timers and professional controls!
      `);
  }
}

module.exports = {
  availableVideos,
  addYouTubeVideosToLesson,
  createYouTubeSlide,
  quickSetups
};
