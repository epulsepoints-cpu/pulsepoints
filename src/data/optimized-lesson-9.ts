import { Lesson } from '@/types/learning';

export const optimizedLesson9: Lesson = {
  id: 'module-1-lesson-9',
  moduleId: 'module-1',
  order: 9,
  title: '🎯 ECG Axis Learning Journey',
  description: 'Master ECG axis interpretation through a structured journey from normal axis concepts to clinical applications.',
  estimatedTime: 25,
  
  content: {
    type: 'mixed',
    introduction: 'Master ECG axis interpretation through a structured journey from normal axis concepts to clinical applications.',
    sections: [
      {
        id: 'axis-overview',
        title: '🎯 ECG Axis Learning Path',
        content: 'Complete systematic learning journey covering all essential axis concepts and calculations.',
        mediaType: 'image' as const
      }
    ],
    summary: 'Complete mastery of ECG axis interpretation through systematic progressive learning with 6 comprehensive units covering normal axis, calculation methods, deviations, and clinical applications.',
    slides: [
      
      // 🎬 YOUTUBE VIDEO: Day 6 - Pathological Q Waves
      {
        id: 'youtube-day6-q-waves',
        title: '🎬 Day 6: Pathological Q Waves on ECG',
        content: 'Identifying pathological Q waves indicating previous MI. Essential for understanding axis changes after myocardial infarction!',
        type: 'youtube',
        youtubeId: 'CIsKlVXRjnY',
        videoDuration: 600,
        minimumWatchTime: 480,
        requireFullWatch: true,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '🚨 Q waves can change axis - critical knowledge!'
      },

      // 🎬 YOUTUBE VIDEO: Day 7 - Heart Activity Analysis
      {
        id: 'youtube-day7-heart-activity',
        title: '🎬 Day 7: Decoding Heart Activity Through ECG',
        content: 'Comprehensive heart activity analysis through ECG patterns. Perfect foundation for understanding how electrical axis relates to overall heart function!',
        type: 'youtube',
        youtubeId: 'HvzLAcynxP4',
        videoDuration: 720,
        minimumWatchTime: 600,
        requireFullWatch: false,
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        hint: '🫀 Complete heart activity understanding!'
      }
      
    ],
    keyPoints: [
      'ECG axis represents the heart\'s main electrical direction',
      'Normal axis range is -30° to +90°',
      'Use Lead I and aVF to determine axis quadrant',
      'Left axis deviation: Lead I positive, aVF negative',
      'Right axis deviation: Lead I negative, aVF positive',
      'Extreme axis deviation requires immediate clinical evaluation'
    ],
    resources: [
      {
        type: 'reference',
        title: 'ECG Axis Reference Guide',
        url: '/resources/ecg-axis-guide.pdf'
      },
      {
        type: 'video', 
        title: 'Axis Calculation Methods',
        url: '/resources/axis-calculation-video.mp4'
      },
      {
        type: 'tool',
        title: 'ECG Axis Calculator',
        url: '/tools/axis-calculator'
      }
    ]
  },
  
  tasks: [],
  
  completed: false,
  attempts: 0,  
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
} as any; // Type assertion to allow extended properties
