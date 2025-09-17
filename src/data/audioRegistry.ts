// Audio Metadata Registry for ECGkid Lessons
export interface AudioMetadata {
  id: string;
  url: string;
  duration: number; // in seconds
  title: string;
  transcript?: string;
  lessonId: string;
  unitId?: string;
  slideId?: string;
  type: 'introduction' | 'educational' | 'technique' | 'clinical' | 'assessment' | 'mastery' | 'foundation' | 'recognition';
  fileSize?: number; // in bytes
  checksum?: string; // for file integrity verification
  createdAt: string;
  updatedAt: string;
}

// Centralized Audio Registry
export const AUDIO_REGISTRY: Record<string, AudioMetadata> = {
  // =====================================
  // LESSON 1: Heart Anatomy Mastery
  // =====================================
  'lesson1_heart_sounds_detailed': {
    id: 'lesson1_heart_sounds_detailed',
    url: '/lessonaudio/heart-sounds/lub-dub-detailed.mp3',
    duration: 180, // 3 minutes
    title: 'Heart Sounds Detailed Explanation',
    transcript: 'Listen carefully to the classic lub-dub heart sounds. The first sound, lub, occurs when the mitral and tricuspid valves close at the beginning of systole. The second sound, dub, occurs when the aortic and pulmonary valves close at the end of systole.',
    lessonId: 'module-1-lesson-1',
    unitId: 'unit-2',
    slideId: 'chambers-audio-lesson',
    type: 'educational',
    createdAt: '2025-09-08T00:00:00Z',
    updatedAt: '2025-09-08T00:00:00Z'
  },
  'lesson1_coronary_intro': {
    id: 'lesson1_coronary_intro',
    url: '/lessonaudio/coronary-system/coronary-intro.mp3',
    duration: 165, // 2 minutes 45 seconds
    title: 'Coronary System Introduction',
    transcript: 'The coronary circulation supplies oxygen-rich blood to the heart muscle itself. The left coronary artery branches into the LAD and circumflex arteries, while the right coronary artery supplies the inferior wall.',
    lessonId: 'module-1-lesson-1',
    unitId: 'unit-4',
    slideId: 'coronary-audio-lesson',
    type: 'introduction',
    createdAt: '2025-09-08T00:00:00Z',
    updatedAt: '2025-09-08T00:00:00Z'
  },
  'lesson1_mastery_celebration': {
    id: 'lesson1_mastery_celebration',
    url: '/lessonaudio/heart-sounds/mastery-celebration.mp3',
    duration: 90, // 1 minute 30 seconds
    title: 'Heart Anatomy Mastery Celebration',
    transcript: 'Congratulations! You have successfully mastered heart anatomy fundamentals. You now understand the four chambers, heart valves, coronary circulation, and the electrical conduction system. You are ready for advanced ECG learning!',
    lessonId: 'module-1-lesson-1',
    unitId: 'unit-6',
    slideId: 'heart-sounds-mastery',
    type: 'mastery',
    createdAt: '2025-09-08T00:00:00Z',
    updatedAt: '2025-09-08T00:00:00Z'
  },

  // =====================================
  // LESSON 2: ECG Leads & Views Mastery
  // =====================================
  'lesson2_limb_lead_placement': {
    id: 'lesson2_limb_lead_placement',
    url: '/lessonaudio/ecg-leads/limb-lead-placement.mp3',
    duration: 195, // 3 minutes 15 seconds
    title: 'Limb Lead Placement Tutorial',
    transcript: 'Proper limb lead placement is crucial for accurate ECG interpretation. Place the red electrode on the right arm, yellow on the left arm, green on the left leg, and black on the right leg as the ground. Remember the traffic light pattern: red-yellow-green.',
    lessonId: 'module-1-lesson-2',
    unitId: 'unit-1',
    slideId: 'limb-placement-demo',
    type: 'technique',
    createdAt: '2025-09-08T00:00:00Z',
    updatedAt: '2025-09-08T00:00:00Z'
  },
  'lesson2_limb_leads_overview': {
    id: 'lesson2_limb_leads_overview',
    url: '/lessonaudio/ecg-leads/limb-leads-overview.mp3',
    duration: 210, // 3 minutes 30 seconds
    title: 'Comprehensive Limb Leads Overview',
    transcript: 'The six limb leads provide views of the heart in the frontal plane. Leads I, II, and III are bipolar, measuring between two electrodes. The augmented leads aVR, aVL, and aVF are unipolar, measuring against a central reference point.',
    lessonId: 'module-1-lesson-2',
    unitId: 'unit-2',
    slideId: 'limb-leads-audio-lesson',
    type: 'educational',
    createdAt: '2025-09-08T00:00:00Z',
    updatedAt: '2025-09-08T00:00:00Z'
  },
  'lesson2_precordial_positioning': {
    id: 'lesson2_precordial_positioning',
    url: '/lessonaudio/ecg-leads/precordial-positioning.mp3',
    duration: 225, // 3 minutes 45 seconds
    title: 'Precordial Lead Positioning Guide',
    transcript: 'Precordial leads V1 through V6 provide horizontal plane views of the heart. V1 and V2 at the sternal borders view the septum, V3 and V4 show the anterior wall, and V5 and V6 at the midclavicular and anterior axillary lines view the lateral wall.',
    lessonId: 'module-1-lesson-2',
    unitId: 'unit-3',
    slideId: 'precordial-audio-lesson',
    type: 'technique',
    createdAt: '2025-09-08T00:00:00Z',
    updatedAt: '2025-09-08T00:00:00Z'
  },
  'lesson2_final_assessment': {
    id: 'lesson2_final_assessment',
    url: '/lessonaudio/ecg-leads/final-assessment.mp3',
    duration: 45, // 45 seconds
    title: 'ECG Leads Final Assessment',
    transcript: 'Congratulations on completing all six units of ECG leads mastery! You have learned the 12-lead system, placement techniques, heart area views, and clinical applications. Now prove your mastery with this comprehensive assessment.',
    lessonId: 'module-1-lesson-2',
    unitId: 'unit-6',
    slideId: 'final-ecg-leads-assessment',
    type: 'assessment',
    createdAt: '2025-09-08T00:00:00Z',
    updatedAt: '2025-09-08T00:00:00Z'
  },

  // =====================================
  // LESSON 3: ECG Paper & Measurements
  // =====================================
  'lesson3_paper_grid_intro': {
    id: 'lesson3_paper_grid_intro',
    url: '/lessonaudio/ecg-measurements/paper-grid-intro.mp3',
    duration: 155, // 2 minutes 35 seconds
    title: 'ECG Paper Grid System Introduction',
    transcript: 'ECG paper has a standardized grid system. Each small square represents 0.04 seconds horizontally and 0.1 millivolts vertically. Large squares are 0.20 seconds and 0.5 millivolts. This standardization allows accurate measurements worldwide.',
    lessonId: 'module-1-lesson-3',
    unitId: 'unit-1',
    type: 'introduction',
    createdAt: '2025-09-08T00:00:00Z',
    updatedAt: '2025-09-08T00:00:00Z'
  },

  // =====================================
  // PLACEHOLDER ENTRIES FOR LESSONS 4-8
  // =====================================
  // Additional entries can be added as lessons are analyzed
  
};

// Helper Functions
export const getAudioMetadata = (audioId: string): AudioMetadata | null => {
  return AUDIO_REGISTRY[audioId] || null;
};

export const getAudioByLesson = (lessonId: string): AudioMetadata[] => {
  return Object.values(AUDIO_REGISTRY).filter(audio => audio.lessonId === lessonId);
};

export const getAudioByUnit = (lessonId: string, unitId: string): AudioMetadata[] => {
  return Object.values(AUDIO_REGISTRY).filter(
    audio => audio.lessonId === lessonId && audio.unitId === unitId
  );
};

export const verifyAudioExists = async (audioId: string): Promise<boolean> => {
  const metadata = getAudioMetadata(audioId);
  if (!metadata) return false;

  try {
    const response = await fetch(metadata.url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

export const getTotalLessonAudioDuration = (lessonId: string): number => {
  return getAudioByLesson(lessonId).reduce((total, audio) => total + audio.duration, 0);
};

export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

// Validation Functions
export const validateAudioRegistry = (): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  Object.entries(AUDIO_REGISTRY).forEach(([id, metadata]) => {
    // Check ID consistency
    if (metadata.id !== id) {
      errors.push(`ID mismatch for ${id}: metadata.id is ${metadata.id}`);
    }
    
    // Check required fields
    if (!metadata.url || !metadata.title || !metadata.lessonId) {
      errors.push(`Missing required fields for ${id}`);
    }
    
    // Check duration is positive
    if (metadata.duration <= 0) {
      errors.push(`Invalid duration for ${id}: ${metadata.duration}`);
    }
    
    // Check URL format
    if (!metadata.url.startsWith('/lessonaudio/') || !metadata.url.endsWith('.mp3')) {
      errors.push(`Invalid URL format for ${id}: ${metadata.url}`);
    }
  });
  
  return {
    valid: errors.length === 0,
    errors
  };
};

export default AUDIO_REGISTRY;
