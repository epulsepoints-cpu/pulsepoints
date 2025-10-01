// Get all lessons metadata
const lessonsMetadata = [
  {
    id: 'module-1-lesson-1',
    moduleId: 'module-1',
    title: "Complete Heart Anatomy Mastery",
    description: "Master heart anatomy through 6 focused learning units",
    order: 1,
    estimatedTime: 40,
    thumbnail: '/images/heart-anatomy-thumb.jpg',
    difficulty: 'intermediate',
    status: 'active'
  },
  {
    id: 'module-1-lesson-2',
    moduleId: 'module-1', 
    title: "Heart Chambers Deep Dive",
    description: "Comprehensive exploration of the four heart chambers",
    order: 2,
    estimatedTime: 35,
    thumbnail: '/images/heart-chambers-thumb.jpg',
    difficulty: 'intermediate',
    status: 'active'
  },
  {
    id: 'module-1-lesson-3',
    moduleId: 'module-1',
    title: "Blood Flow Pathways",
    description: "Understand circulation through heart and body",
    order: 3,
    estimatedTime: 30,
    thumbnail: '/images/blood-flow-thumb.jpg',
    difficulty: 'advanced',
    status: 'coming-soon'
  }
];

// Full lesson content database
const lessonDatabase = {
  'module-1-lesson-1': {
    id: 'module-1-lesson-1',
    moduleId: 'module-1',
    title: "Complete Heart Anatomy Mastery",
    description: "Master heart anatomy through 6 focused learning units",
    order: 1,
    estimatedTime: 40,
    content: {
      type: 'mixed',
      introduction: "🫀 Welcome to Heart Mastery! Learn cardiac anatomy through 6 progressive units with slides, audio, video, and quizzes.",
      slides: [
        {
          id: 'unit1-intro',
          title: '🎯 Unit 1: Heart Foundation',
          content: 'Start your heart mastery journey! Learn the essential basics that make everything else possible.',
          type: 'highlight',
          layout: 'centered',
          backgroundColor: '#f0f9ff',
          textColor: '#1e40af',
          highlights: [
            '📏 Heart size and location',
            '💓 Pumping function',
            '🔄 Circulation systems', 
            '🏗️ Heart structure layers'
          ],
          hint: '🚀 Your foundation to heart mastery!'
        },
        {
          id: 'heart-location',
          title: '📍 Heart Location & Size',
          content: 'Your heart is located in the mediastinum, between your lungs. It\'s about the size of your fist and weighs approximately 250-350 grams.',
          type: 'content',
          layout: 'image-left',
          keyPoints: [
            'Located in mediastinum',
            'Between the lungs',
            'Size of your fist',
            'Weighs 250-350g'
          ]
        }
      ],
      tasks: [
        {
          id: 'task-1',
          title: 'Heart Location Quiz',
          type: 'quiz',
          content: {
            question: 'Where is the heart located in the chest?',
            options: [
              'Right side of chest',
              'Left side of chest', 
              'Center of chest (mediastinum)',
              'Behind the stomach'
            ],
            correctAnswer: 2,
            explanation: 'The heart is located in the mediastinum, the central compartment of the chest between the lungs.'
          }
        }
      ]
    }
  },
  'module-1-lesson-2': {
    id: 'module-1-lesson-2',
    moduleId: 'module-1',
    title: "Heart Chambers Deep Dive",
    description: "Comprehensive exploration of the four heart chambers",
    order: 2,
    estimatedTime: 35,
    content: {
      type: 'mixed',
      introduction: "🏠 Explore the four chambers of the heart and understand their unique roles in circulation.",
      slides: [
        {
          id: 'chambers-intro',
          title: '🏠 Heart Chambers Overview',
          content: 'The heart has four chambers that work together to pump blood throughout your body.',
          type: 'highlight',
          layout: 'centered',
          backgroundColor: '#fef3f2',
          textColor: '#dc2626',
          highlights: [
            '🔴 Right Atrium - receives deoxygenated blood',
            '🔴 Right Ventricle - pumps to lungs',
            '🔵 Left Atrium - receives oxygenated blood',
            '🔵 Left Ventricle - pumps to body'
          ]
        }
      ],
      tasks: [
        {
          id: 'task-chambers',
          title: 'Chamber Function Quiz',
          type: 'quiz',
          content: {
            question: 'Which chamber pumps oxygenated blood to the body?',
            options: ['Right Atrium', 'Right Ventricle', 'Left Atrium', 'Left Ventricle'],
            correctAnswer: 3,
            explanation: 'The left ventricle is the strongest chamber and pumps oxygenated blood to the entire body through the aorta.'
          }
        }
      ]
    }
  }
};

module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Parse query parameters
  const url = new URL('http://dummy.com' + (req.url || ''));
  const moduleId = url.searchParams.get('moduleId');
  const lessonId = url.searchParams.get('lesson');

  // Get specific lesson content
  if (lessonId) {
    const lesson = lessonDatabase[lessonId];
    
    if (!lesson) {
      return res.status(404).json({ 
        error: 'Lesson not found',
        lessonId: lessonId,
        availableLessons: Object.keys(lessonDatabase)
      });
    }

    return res.status(200).json({
      ...lesson,
      version: '1.0',
      loadedAt: new Date().toISOString()
    });
  }

  // Get lessons list (metadata only)
  let filteredLessons = lessonsMetadata;
  
  if (moduleId) {
    filteredLessons = lessonsMetadata.filter(lesson => lesson.moduleId === moduleId);
  }

  return res.status(200).json({
    lessons: filteredLessons,
    total: filteredLessons.length,
    version: '1.0',
    loadedAt: new Date().toISOString()
  });
};