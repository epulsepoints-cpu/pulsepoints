import { Lesson } from '../types/lesson';

// Sample lesson data for testing the hybrid approach
// In production, you'd copy your optimized lessons here

export const lessonDatabase: { [key: string]: Lesson } = {
  'module-1-lesson-1': {
    id: 'module-1-lesson-1',
    moduleId: 'module-1',
    title: "Complete Heart Anatomy Mastery",
    description: "Master heart anatomy through 6 focused learning units: Foundation, Chambers, Valves, Coronary System, Electrical System, and Heart Sounds",
    order: 1,
    estimatedTime: 40,
    content: {
      type: 'mixed',
      introduction: "🫀 Welcome to Heart Mastery! Learn cardiac anatomy through 6 progressive units with slides, audio, video, and quizzes.",
      sections: [
        {
          id: 'section-overview',
          title: "🎯 Your Learning Journey",
          content: "UNIT 1: Foundation → UNIT 2: Chambers → UNIT 3: Valves → UNIT 4: Coronary System → UNIT 5: Electrical System → UNIT 6: Heart Sounds",
          mediaType: 'image'
        }
      ],
      slides: [
        {
          id: 'unit1-intro',
          title: '🎯 Unit 1: Heart Foundation',
          content: 'Start your heart mastery journey! Learn the essential basics that make everything else possible.',
          type: 'highlight',
          layout: 'centered',
          backgroundColor: '#f0f9ff',
          textColor: '#1e40af',
          animation: 'fade',
          imageUrl: '/lessonimages/heart-anatomy-overview.png',
          imageAlt: 'Complete heart anatomy overview for foundation learning',
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
          imageUrl: '/lessonimages/heart-location.png',
          imageAlt: 'Heart location in chest cavity',
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
    description: "Comprehensive exploration of the four heart chambers: right atrium, right ventricle, left atrium, and left ventricle",
    order: 2,
    estimatedTime: 35,
    content: {
      type: 'mixed',
      introduction: "🏠 Explore the four chambers of the heart and understand their unique roles in circulation.",
      sections: [
        {
          id: 'chambers-overview',
          title: "🏠 Four Heart Chambers",
          content: "Right Atrium → Right Ventricle → Left Atrium → Left Ventricle",
          mediaType: 'image'
        }
      ],
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
            options: [
              'Right Atrium',
              'Right Ventricle',
              'Left Atrium',
              'Left Ventricle'
            ],
            correctAnswer: 3,
            explanation: 'The left ventricle is the strongest chamber and pumps oxygenated blood to the entire body through the aorta.'
          }
        }
      ]
    }
  },

  'module-1-lesson-3': {
    id: 'module-1-lesson-3',
    moduleId: 'module-1',
    title: "Heart Valves Mastery",
    description: "Complete guide to the four heart valves: tricuspid, pulmonary, mitral, and aortic valves",
    order: 3,
    estimatedTime: 30,
    content: {
      type: 'mixed',
      introduction: "🚪 Learn about the heart's four valves that ensure blood flows in the right direction.",
      sections: [
        {
          id: 'valves-overview',
          title: "🚪 Four Heart Valves",
          content: "Tricuspid → Pulmonary → Mitral (Bicuspid) → Aortic",
          mediaType: 'image'
        }
      ],
      slides: [
        {
          id: 'valves-intro',
          title: '🚪 Heart Valves Function',
          content: 'Heart valves are like one-way doors that prevent blood from flowing backward.',
          type: 'content',
          layout: 'image-right',
          imageUrl: '/lessonimages/heart-valves.png',
          imageAlt: 'Four heart valves anatomy',
          keyPoints: [
            'Tricuspid valve - between right atrium and ventricle',
            'Pulmonary valve - between right ventricle and pulmonary artery',
            'Mitral valve - between left atrium and ventricle', 
            'Aortic valve - between left ventricle and aorta'
          ]
        }
      ],
      tasks: [
        {
          id: 'task-valves',
          title: 'Valve Identification',
          type: 'quiz',
          content: {
            question: 'Which valve is also known as the bicuspid valve?',
            options: [
              'Tricuspid valve',
              'Pulmonary valve',
              'Mitral valve',
              'Aortic valve'
            ],
            correctAnswer: 2,
            explanation: 'The mitral valve is also called the bicuspid valve because it has two cusps (leaflets).'
          }
        }
      ]
    }
  }
};

// Module mapping for easy lookup
export const moduleToLessons: { [moduleId: string]: string[] } = {
  'module-1': ['module-1-lesson-1', 'module-1-lesson-2', 'module-1-lesson-3'],
  'module-2': [], // Add more modules as needed
  'module-3': []
};