const fs = require('fs');
const path = require('path');

// Get all lesson files
const lessonDir = 'src/data';
const lessonFiles = fs.readdirSync(lessonDir)
  .filter(file => file.startsWith('optimized-lesson-') && file.endsWith('.ts'))
  .sort((a, b) => {
    const aNum = parseInt(a.match(/\d+/)[0]);
    const bNum = parseInt(b.match(/\d+/)[0]);
    return aNum - bNum;
  });

console.log(`Found ${lessonFiles.length} lesson files to analyze...\n`);

const allMedia = {
  images: new Set(),
  audio: new Set(),
  video: new Set()
};

const mediaByLesson = {};

// Process each lesson file
lessonFiles.forEach(file => {
  const lessonNum = file.match(/\d+/)[0];
  console.log(`Processing ${file}...`);
  
  try {
    const content = fs.readFileSync(path.join(lessonDir, file), 'utf8');
    
    // Initialize lesson media tracking
    mediaByLesson[lessonNum] = {
      images: new Set(),
      audio: new Set(),
      video: new Set()
    };
    
    // Extract image references
    const imageMatches = content.match(/image:\s*['"`]([^'"`]+)['"`]/g) || [];
    imageMatches.forEach(match => {
      const imagePath = match.match(/image:\s*['"`]([^'"`]+)['"`]/)[1];
      allMedia.images.add(imagePath);
      mediaByLesson[lessonNum].images.add(imagePath);
    });
    
    // Extract audio references
    const audioMatches = content.match(/audioUrl:\s*['"`]([^'"`]+)['"`]/g) || [];
    audioMatches.forEach(match => {
      const audioPath = match.match(/audioUrl:\s*['"`]([^'"`]+)['"`]/)[1];
      allMedia.audio.add(audioPath);
      mediaByLesson[lessonNum].audio.add(audioPath);
    });
    
    // Extract video references
    const videoMatches = content.match(/videoUrl:\s*['"`]([^'"`]+)['"`]/g) || [];
    videoMatches.forEach(match => {
      const videoPath = match.match(/videoUrl:\s*['"`]([^'"`]+)['"`]/)[1];
      allMedia.video.add(videoPath);
      mediaByLesson[lessonNum].video.add(videoPath);
    });
    
    // Also check for src references in components
    const srcMatches = content.match(/src:\s*['"`]([^'"`]+)['"`]/g) || [];
    srcMatches.forEach(match => {
      const srcPath = match.match(/src:\s*['"`]([^'"`]+)['"`]/)[1];
      if (srcPath.includes('/images/') || srcPath.includes('.jpg') || srcPath.includes('.png') || srcPath.includes('.svg')) {
        allMedia.images.add(srcPath);
        mediaByLesson[lessonNum].images.add(srcPath);
      } else if (srcPath.includes('/audio/') || srcPath.includes('.mp3') || srcPath.includes('.wav')) {
        allMedia.audio.add(srcPath);
        mediaByLesson[lessonNum].audio.add(srcPath);
      } else if (srcPath.includes('/video/') || srcPath.includes('.mp4') || srcPath.includes('.webm')) {
        allMedia.video.add(srcPath);
        mediaByLesson[lessonNum].video.add(srcPath);
      }
    });
    
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('\n=== COMPREHENSIVE MEDIA REQUIREMENTS ===\n');

// Summary stats
console.log('📊 SUMMARY STATISTICS:');
console.log(`Total Images: ${allMedia.images.size}`);
console.log(`Total Audio Files: ${allMedia.audio.size}`);
console.log(`Total Video Files: ${allMedia.video.size}`);
console.log(`Total Media Files: ${allMedia.images.size + allMedia.audio.size + allMedia.video.size}\n`);

// All Images
console.log('🖼️  ALL REQUIRED IMAGES:');
console.log('========================');
const sortedImages = Array.from(allMedia.images).sort();
sortedImages.forEach((image, index) => {
  console.log(`${(index + 1).toString().padStart(3, ' ')}. ${image}`);
});

console.log('\n🎵 ALL REQUIRED AUDIO FILES:');
console.log('=============================');
const sortedAudio = Array.from(allMedia.audio).sort();
sortedAudio.forEach((audio, index) => {
  console.log(`${(index + 1).toString().padStart(3, ' ')}. ${audio}`);
});

console.log('\n🎬 ALL REQUIRED VIDEO FILES:');
console.log('=============================');
const sortedVideo = Array.from(allMedia.video).sort();
sortedVideo.forEach((video, index) => {
  console.log(`${(index + 1).toString().padStart(3, ' ')}. ${video}`);
});

// Create CSV export
const csvContent = [
  'Media Type,File Path,Lesson Numbers',
  ...sortedImages.map(img => {
    const lessons = Object.keys(mediaByLesson).filter(lesson => 
      mediaByLesson[lesson].images.has(img)
    ).join(';');
    return `Image,${img},"${lessons}"`;
  }),
  ...sortedAudio.map(audio => {
    const lessons = Object.keys(mediaByLesson).filter(lesson => 
      mediaByLesson[lesson].audio.has(audio)
    ).join(';');
    return `Audio,${audio},"${lessons}"`;
  }),
  ...sortedVideo.map(video => {
    const lessons = Object.keys(mediaByLesson).filter(lesson => 
      mediaByLesson[lesson].video.has(video)
    ).join(';');
    return `Video,${video},"${lessons}"`;
  })
].join('\n');

// Save CSV file
fs.writeFileSync('media-requirements-complete.csv', csvContent);
console.log('\n📄 CSV export saved as: media-requirements-complete.csv');

// Create folder structure script
const folderStructure = [
  '# REQUIRED FOLDER STRUCTURE',
  '',
  '## Images Directory Structure:',
  ...Array.from(new Set(sortedImages.map(img => path.dirname(img)))).sort().map(dir => `mkdir -p "public${dir}"`),
  '',
  '## Audio Directory Structure:',
  ...Array.from(new Set(sortedAudio.map(audio => path.dirname(audio)))).sort().map(dir => `mkdir -p "public${dir}"`),
  '',
  '## Video Directory Structure:',
  ...Array.from(new Set(sortedVideo.map(video => path.dirname(video)))).sort().map(dir => `mkdir -p "public${dir}"`)
].join('\n');

fs.writeFileSync('MEDIA_FOLDER_STRUCTURE.md', folderStructure);
console.log('📁 Folder structure guide saved as: MEDIA_FOLDER_STRUCTURE.md');

console.log('\n✅ Analysis complete! Check the generated files for detailed requirements.');
