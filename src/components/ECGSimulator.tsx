import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, Play, RotateCcw, Award, Clock, Zap, Target, Heart, Activity, Pause, BookOpen, Brain, Trophy, Stethoscope, Waves, AlertTriangle, Shuffle, TrendingUp, AlertCircle, Check, X, CheckCircle, Rocket, GitBranch, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import SimpleImageViewer from '@/components/SimpleImageViewer';
import { useUISounds } from '@/hooks/useUISounds';
import { usePulseStore } from '@/components/usePulseStore';
import MedicalAnimation from '@/components/MedicalAnimation';

// Import quiz data
import quizBatch1 from '@/data/ecg-quizzes-25';
import quizBatch2 from '@/data/ecg-quizzes-26-50';
import quizBatch3 from '@/data/ecg-quizzes-MI-50';
// Import video-quiz modules
import VIDEO_QUIZ_MODULES, { VideoQuizModule } from '@/data/videoQuizModules';

interface ECGSimulatorProps {
  onBack: () => void;
}

// ECG question interface - Enhanced to match comprehensive quiz structure
interface ECGQuestion {
  id: string;
  question: string;              // Quiz question text (required)
  imageUrl: string;              // Static ECG image path
  correctAnswer: string;
  options: string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category?: string;             // Optional for compatibility
  tags?: string[];               // Additional tags for categorization
  heartRate?: number;            // Heart rate for the ECG
  medicalContext?: {             // Medical context information
    mechanism?: string;
    clinical_significance?: string;
    management?: string;
  };
}

// Game modes - Enhanced with unlimited challenge mode using static medical images
const GAME_MODES = {
  learn: {
    name: 'Learn Mode',
    icon: BookOpen,
    color: 'bg-gradient-to-r from-blue-400 to-blue-600',
    description: 'Study ECG patterns by category with detailed explanations',
    features: ['Category-based learning', 'Detailed explanations', 'No time pressure'],
    timeLimit: null
  },
  practice: {
    name: 'Practice Mode', 
    icon: Brain,
    color: 'bg-gradient-to-r from-green-400 to-green-600',
    description: 'Unlimited random ECG challenges from medical image library',
    features: ['Random medical ECGs', '73+ authentic images', 'Unlimited variety'],
    timeLimit: null
  },
  challenge: {
    name: 'Challenge Mode',
    icon: Zap,
    color: 'bg-gradient-to-r from-orange-400 to-orange-600',
    description: 'Timed challenges with medically accurate ECGs',
    features: ['Medical-grade images', 'Progressive difficulty', '2 minutes per question'],
    timeLimit: 120
  },
  boost: {
    name: 'Boost Mode',
    icon: Rocket,
    color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500',
    description: 'NEET PG style MCQs with comprehensive ECG database',
    features: ['3-option MCQs', 'All diagnosis types', 'Flash animations', 'Medical exam style'],
    timeLimit: 90
  }
};

// Comprehensive Quiz Database - Load and combine all quiz batches
const loadQuizDatabase = (): ECGQuestion[] => {
  const allQuizzes: ECGQuestion[] = [];
  
  try {
    console.log('📚 Loading Quiz Batches:', {
      batch1Available: !!quizBatch1,
      batch1HasQuizzes: !!(quizBatch1 as any)?.quizzes,
      batch2Available: !!quizBatch2,
      batch2HasQuizzes: !!(quizBatch2 as any)?.quizzes,
      batch3Available: !!quizBatch3,
      batch3HasQuizzes: !!(quizBatch3 as any)?.quizzes
    });
    
    // Load quiz batch 1 (quizzes 1-25)
    if ((quizBatch1 as any)?.quizzes) {
      (quizBatch1 as any).quizzes.forEach((quiz: any) => {
        allQuizzes.push({
          id: quiz.id,
          question: quiz.question,
          imageUrl: quiz.imageUrl,
          correctAnswer: quiz.correctAnswer,
          options: quiz.options,
          explanation: quiz.explanation,
          difficulty: quiz.difficulty as 'easy' | 'medium' | 'hard',
          category: quiz.category,
          tags: quiz.tags,
          heartRate: quiz.heartRate,
          medicalContext: quiz.medicalContext
        });
      });
      console.log('✅ Loaded Batch 1:', (quizBatch1 as any).quizzes.length, 'quizzes');
    }
    
    // Load quiz batch 2 (quizzes 26-50)
    if ((quizBatch2 as any)?.quizzes) {
      (quizBatch2 as any).quizzes.forEach((quiz: any) => {
        allQuizzes.push({
          id: quiz.id,
          question: quiz.question,
          imageUrl: quiz.imageUrl,
          correctAnswer: quiz.correctAnswer,
          options: quiz.options,
          explanation: quiz.explanation,
          difficulty: quiz.difficulty as 'easy' | 'medium' | 'hard',
          category: quiz.category,
          tags: quiz.tags,
          heartRate: quiz.heartRate,
          medicalContext: quiz.medicalContext
        });
      });
      console.log('✅ Loaded Batch 2:', (quizBatch2 as any).quizzes.length, 'quizzes');
    }
    
    // Load quiz batch 3 (MI-focused quizzes)
    if ((quizBatch3 as any)?.quizzes) {
      (quizBatch3 as any).quizzes.forEach((quiz: any) => {
        allQuizzes.push({
          id: quiz.id,
          question: quiz.question,
          imageUrl: quiz.imageUrl,
          correctAnswer: quiz.correctAnswer,
          options: quiz.options,
          explanation: quiz.explanation,
          difficulty: quiz.difficulty as 'easy' | 'medium' | 'hard',
          category: quiz.category,
          tags: quiz.tags,
          heartRate: quiz.heartRate,
          medicalContext: quiz.medicalContext
        });
      });
      console.log('✅ Loaded Batch 3:', (quizBatch3 as any).quizzes.length, 'MI-focused quizzes');
    }
    
    console.log('🎯 Total Quizzes Loaded:', allQuizzes.length);
  } catch (error) {
    console.error('❌ Error loading quiz database:', error);
  }
  
  return allQuizzes;
};

// Initialize comprehensive quiz database
const COMPREHENSIVE_QUIZ_DATABASE = loadQuizDatabase();

// Debug: Log quiz database loading (only show summary)
if (COMPREHENSIVE_QUIZ_DATABASE.length > 0) {
  console.log('✅ ECG Quiz Database Loaded:', COMPREHENSIVE_QUIZ_DATABASE.length, 'quizzes');
} else {
  console.error('❌ ECG Quiz Database is empty!');
}

// ECG Categories
// Category interface for better typing
interface ECGCategory {
  name: string;
  description: string;
  icon: any;
  questions: ECGQuestion[];
  // New educational content
  educational: {
    mechanism: string;
    pathophysiology: string;
    ecgChanges: string[];
    clinicalSignificance: string;
    management: string[];
    images: string[];
  };
  // Optional video content for Learn Mode
  video?: {
    videoId: string;
    title: string;
    description: string;
    duration: number;
  };
}

// Type guard to check if category has video
const hasVideo = (category: any): category is ECGCategory & { video: NonNullable<ECGCategory['video']> } => {
  return category && typeof category === 'object' && 'video' in category && category.video !== undefined;
};

// Available ECG images for random selection
const ECG_IMAGE_LIBRARY = {
  // PTB-XL Medical Database - Authentic 12-lead ECGs
  ptbxl_afib: [
    '/ecg/ptbxl_12lead/afib/afib_351_1.png',
    '/ecg/ptbxl_12lead/afib/afib_4117_2.png',
    '/ecg/ptbxl_12lead/afib/afib_4401_3.png',
    '/ecg/ptbxl_12lead/afib/afib_4423_4.png',
    '/ecg/ptbxl_12lead/afib/afib_4531_5.png'
  ],
  ptbxl_clbbb: [
    '/ecg/ptbxl_12lead/clbbb/clbbb_180_1.png',
    '/ecg/ptbxl_12lead/clbbb/clbbb_256_2.png',
    '/ecg/ptbxl_12lead/clbbb/clbbb_279_3.png',
    '/ecg/ptbxl_12lead/clbbb/clbbb_286_4.png',
    '/ecg/ptbxl_12lead/clbbb/clbbb_287_5.png'
  ],
  ptbxl_crbbb: [
    '/ecg/ptbxl_12lead/crbbb/crbbb_172_1.png',
    '/ecg/ptbxl_12lead/crbbb/crbbb_195_2.png',
    '/ecg/ptbxl_12lead/crbbb/crbbb_269_3.png',
    '/ecg/ptbxl_12lead/crbbb/crbbb_310_4.png',
    '/ecg/ptbxl_12lead/crbbb/crbbb_424_5.png'
  ],
  ptbxl_lvh: [
    '/ecg/ptbxl_12lead/lvh/lvh_138_3.png',
    '/ecg/ptbxl_12lead/lvh/lvh_173_4.png',
    '/ecg/ptbxl_12lead/lvh/lvh_191_5.png',
    '/ecg/ptbxl_12lead/lvh/lvh_30_1.png',
    '/ecg/ptbxl_12lead/lvh/lvh_96_2.png'
  ],
  ptbxl_rvh: [
    '/ecg/ptbxl_12lead/rvh/rvh_1733_2.png',
    '/ecg/ptbxl_12lead/rvh/rvh_222_1.png',
    '/ecg/ptbxl_12lead/rvh/rvh_2417_3.png',
    '/ecg/ptbxl_12lead/rvh/rvh_2493_4.png',
    '/ecg/ptbxl_12lead/rvh/rvh_3242_5.png'
  ],
  ptbxl_wpw: [
    '/ecg/ptbxl_12lead/wpw/wpw_2145_1.png',
    '/ecg/ptbxl_12lead/wpw/wpw_4658_2.png',
    '/ecg/ptbxl_12lead/wpw/wpw_4825_3.png',
    '/ecg/ptbxl_12lead/wpw/wpw_5028_4.png',
    '/ecg/ptbxl_12lead/wpw/wpw_5303_5.png'
  ],
  normal_sinus: [
    '/ecg/medical_accurate/normal_75bpm.png',
    '/ecg/medical_accurate/normal_sinus_60bpm_1.png',
    '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
    '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
    '/ecg/medical_accurate/normal_sinus_95bpm_4.png',
    '/ecg/medical_accurate/normal_sinus_100bpm_5.png',
    '/ecg/medical_accurate/normal_60bpm.png',
    '/ecg/medical_accurate/normal_70bpm.png',
    '/ecg/medical_accurate/normal_80bpm.png',
    '/ecg/medical_accurate/normal_90bpm.png',
    '/ecg/medical_accurate/normal_100bpm.png'
  ],
  bradycardia: [
    '/ecg/medical_accurate/bradycardia_35bpm.png',
    '/ecg/medical_accurate/bradycardia_35bpm_1.png',
    '/ecg/medical_accurate/bradycardia_40bpm.png',
    '/ecg/medical_accurate/bradycardia_42bpm_2.png',
    '/ecg/medical_accurate/bradycardia_45bpm.png',
    '/ecg/medical_accurate/bradycardia_48bpm_3.png',
    '/ecg/medical_accurate/bradycardia_50bpm.png',
    '/ecg/medical_accurate/bradycardia_52bpm_4.png',
    '/ecg/medical_accurate/bradycardia_55bpm.png',
    '/ecg/medical_accurate/bradycardia_55bpm_5.png'
  ],
  tachycardia: [
    '/ecg/medical_accurate/tachycardia_105bpm.png',
    '/ecg/medical_accurate/tachycardia_105bpm_1.png',
    '/ecg/medical_accurate/tachycardia_110bpm.png',
    '/ecg/medical_accurate/tachycardia_115bpm.png',
    '/ecg/medical_accurate/tachycardia_115bpm_2.png',
    '/ecg/medical_accurate/tachycardia_125bpm.png',
    '/ecg/medical_accurate/tachycardia_125bpm_3.png',
    '/ecg/medical_accurate/tachycardia_130bpm.png',
    '/ecg/medical_accurate/tachycardia_135bpm_4.png',
    '/ecg/medical_accurate/tachycardia_140bpm.png',
    '/ecg/medical_accurate/tachycardia_145bpm_5.png',
    '/ecg/medical_accurate/tachycardia_150bpm.png',
    '/ecg/medical_accurate/tachycardia_155bpm.png',
    '/ecg/medical_accurate/tachycardia_155bpm_6.png',
    '/ecg/medical_accurate/tachycardia_165bpm_7.png'
  ],
  atrial_fibrillation: [
    '/ecg/medical_accurate/atrial_fibrillation_70bpm_1.png',
    '/ecg/medical_accurate/atrial_fibrillation_85bpm_2.png',
    '/ecg/medical_accurate/atrial_fibrillation_95bpm_3.png',
    '/ecg/medical_accurate/atrial_fibrillation_110bpm_4.png',
    '/ecg/medical_accurate/atrial_fibrillation_120bpm_5.png',
    '/ecg/medical_accurate/atrial_fibrillation_130bpm_6.png',
    '/ecg/medical_accurate/atrial_fibrillation_140bpm_7.png',
    '/ecg/medical_accurate/atrial_fibrillation_150bpm_8.png'
  ],
  ventricular_tachycardia: [
    '/ecg/medical_accurate/ventricular_tachycardia_150bpm_1.png',
    '/ecg/medical_accurate/ventricular_tachycardia_165bpm_2.png',
    '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png',
    '/ecg/medical_accurate/ventricular_tachycardia_195bpm_4.png',
    '/ecg/medical_accurate/ventricular_tachycardia_210bpm_5.png',
    '/ecg/medical_accurate/ventricular_tachycardia_225bpm_6.png',
    '/ecg/medical_accurate/vtach_150bpm.png',
    '/ecg/medical_accurate/vtach_160bpm.png',
    '/ecg/medical_accurate/vtach_170bpm.png',
    '/ecg/medical_accurate/vtach_180bpm.png',
    '/ecg/medical_accurate/vtach_190bpm.png',
    '/ecg/medical_accurate/vtach_200bpm.png',
    '/ecg/medical_accurate/vtach_210bpm.png'
  ],
  bundle_branch_blocks: [
    '/ecg/medical_accurate/rbbb_70bpm_1.png',
    '/ecg/medical_accurate/rbbb_75bpm.png',
    '/ecg/medical_accurate/rbbb_80bpm_2.png',
    '/ecg/medical_accurate/rbbb_90bpm.png',
    '/ecg/medical_accurate/rbbb_90bpm_3.png',
    '/ecg/medical_accurate/rbbb_95bpm_4.png',
    '/ecg/medical_accurate/lbbb_65bpm_1.png',
    '/ecg/medical_accurate/lbbb_70bpm.png',
    '/ecg/medical_accurate/lbbb_75bpm_2.png',
    '/ecg/medical_accurate/lbbb_85bpm.png',
    '/ecg/medical_accurate/lbbb_85bpm_3.png',
    '/ecg/medical_accurate/lbbb_90bpm_4.png'
  ],
  other_rhythms: [
    '/ecg/medical_accurate/pvc_65bpm.png',
    '/ecg/medical_accurate/pvc_70bpm_1.png',
    '/ecg/medical_accurate/pvc_78bpm_2.png',
    '/ecg/medical_accurate/pvc_80bpm.png',
    '/ecg/medical_accurate/pvc_85bpm_3.png',
    '/ecg/medical_accurate/pvc_95bpm.png',
    '/ecg/medical_accurate/atrial_flutter_75bpm_1.png',
    '/ecg/medical_accurate/atrial_flutter_100bpm_2.png',
    '/ecg/medical_accurate/atrial_flutter_150bpm_3.png',
    '/ecg/medical_accurate/supraventricular_tachycardia_160bpm_1.png',
    '/ecg/medical_accurate/supraventricular_tachycardia_180bpm_2.png',
    '/ecg/medical_accurate/supraventricular_tachycardia_200bpm_3.png',
    '/ecg/medical_accurate/first_degree_av_block_60bpm_1.png',
    '/ecg/medical_accurate/first_degree_av_block_70bpm_2.png',
    '/ecg/medical_accurate/first_degree_av_block_80bpm_3.png'
  ]
};

// NEET PG Style ECG Database - Will be replaced with Firebase quizzes
// Temporary placeholder - removed non-existent image references

// Generate NEET PG style ECG question for Boost Mode using comprehensive database
const generateBoostModeQuestion = (id: string): ECGQuestion => {
  // Use comprehensive quiz database with NEET PG style filtering
  const mediumHardQuizzes = COMPREHENSIVE_QUIZ_DATABASE.filter(quiz => 
    quiz.difficulty === 'medium' || quiz.difficulty === 'hard'
  );
  
  if (mediumHardQuizzes.length > 0) {
    const randomQuiz = mediumHardQuizzes[Math.floor(Math.random() * mediumHardQuizzes.length)];
    return {
      ...randomQuiz,
      id: id || randomQuiz.id,
      // Enhance for NEET PG style - focus on clinical significance
      question: randomQuiz.question || `What is the most likely diagnosis for this ECG finding?`
    };
  }
  
  // Fallback to any available quiz
  return generateRandomECGQuestion(id);
};

// Generate Practice mode questions - Image recognition without formal quizzes
const generatePracticeECGQuestion = (id: string): ECGQuestion => {
  // Get all PTB-XL categories for practice
  const ptbxlCategories = Object.keys(ECG_IMAGE_LIBRARY).filter(key => key.startsWith('ptbxl_'));
  const allCategories = [...ptbxlCategories, 'normal_sinus', 'bradycardia', 'tachycardia', 'atrial_fibrillation'];
  
  // Select random category
  const selectedCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
  const categoryImages = ECG_IMAGE_LIBRARY[selectedCategory as keyof typeof ECG_IMAGE_LIBRARY];
  const selectedImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
  
  // Create diagnostic options based on available categories
  const diagnosticLabels = {
    'ptbxl_afib': 'Atrial Fibrillation',
    'ptbxl_clbbb': 'Complete Left Bundle Branch Block',
    'ptbxl_crbbb': 'Complete Right Bundle Branch Block', 
    'ptbxl_lvh': 'Left Ventricular Hypertrophy',
    'ptbxl_rvh': 'Right Ventricular Hypertrophy',
    'ptbxl_wpw': 'Wolff-Parkinson-White Syndrome',
    'normal_sinus': 'Normal Sinus Rhythm',
    'bradycardia': 'Sinus Bradycardia',
    'tachycardia': 'Sinus Tachycardia',
    'atrial_fibrillation': 'Atrial Fibrillation'
  };
  
  const correctAnswer = diagnosticLabels[selectedCategory as keyof typeof diagnosticLabels];
  
  // Create answer options (3 incorrect + 1 correct)
  const allLabels = Object.values(diagnosticLabels);
  const incorrectAnswers = allLabels.filter(label => label !== correctAnswer);
  const shuffledIncorrect = incorrectAnswers.sort(() => 0.5 - Math.random()).slice(0, 3);
  const options = [correctAnswer, ...shuffledIncorrect].sort(() => 0.5 - Math.random());
  
  return {
    id,
    imageUrl: selectedImage,
    question: 'What diagnosis does this 12-lead ECG show?',
    correctAnswer,
    options,
    explanation: `This ECG demonstrates ${correctAnswer}. Study the characteristic patterns and morphology.`,
    difficulty: 'medium',
    category: selectedCategory,
    tags: ['practice', 'ptbxl', 'medical-grade']
  };
};

// Generate comprehensive ECG questions using our quiz database
const generateRandomECGQuestion = (id: string): ECGQuestion => {
  // Use comprehensive quiz database for Challenge mode and other modes
  if (COMPREHENSIVE_QUIZ_DATABASE.length > 0) {
    const randomIndex = Math.floor(Math.random() * COMPREHENSIVE_QUIZ_DATABASE.length);
    const randomQuiz = COMPREHENSIVE_QUIZ_DATABASE[randomIndex];
    
    console.log('🎲 Generated Quiz:', {
      id: id,
      quizId: randomQuiz.id,
      question: randomQuiz.question,
      category: randomQuiz.category,
      difficulty: randomQuiz.difficulty,
      selectedFromTotal: `${randomIndex + 1}/${COMPREHENSIVE_QUIZ_DATABASE.length}`
    });
    
    return {
      ...randomQuiz,
      id: id || randomQuiz.id // Use provided id or keep original
    };
  }
  
  // Fallback to basic generation if quiz database is empty (shouldn't happen)
  console.warn('⚠️ Fallback: Quiz database is empty, using basic generation');
  const categories = Object.keys(ECG_IMAGE_LIBRARY);
  const selectedCategory = categories[Math.floor(Math.random() * categories.length)];
  const categoryImages = ECG_IMAGE_LIBRARY[selectedCategory as keyof typeof ECG_IMAGE_LIBRARY];
  const selectedImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
  
  return {
    id,
    imageUrl: selectedImage,
    question: 'What rhythm is shown in this ECG?',
    correctAnswer: 'Normal Sinus Rhythm',
    options: ['Normal Sinus Rhythm', 'Sinus Bradycardia', 'Sinus Tachycardia', 'Atrial Fibrillation'],
    explanation: 'Fallback ECG question - comprehensive quiz database not loaded. Please check console for loading errors.',
    difficulty: 'easy',
    category: 'fallback'
  };
};

// Generate quiz questions by difficulty level for progressive challenges
const generateQuestionByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): ECGQuestion => {
  const filteredQuizzes = COMPREHENSIVE_QUIZ_DATABASE.filter(quiz => quiz.difficulty === difficulty);
  
  if (filteredQuizzes.length > 0) {
    const randomQuiz = filteredQuizzes[Math.floor(Math.random() * filteredQuizzes.length)];
    return {
      ...randomQuiz,
      id: `${difficulty}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }
  
  // Fallback to any available quiz if no quizzes of requested difficulty
  return generateRandomECGQuestion(`fallback_${difficulty}_${Date.now()}`);
};

// Generate quiz questions by category
const generateQuestionByCategory = (category: string): ECGQuestion => {
  const filteredQuizzes = COMPREHENSIVE_QUIZ_DATABASE.filter(quiz => 
    quiz.category === category || quiz.tags?.includes(category)
  );
  
  if (filteredQuizzes.length > 0) {
    const randomQuiz = filteredQuizzes[Math.floor(Math.random() * filteredQuizzes.length)];
    return {
      ...randomQuiz,
      id: `${category}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }
  
  // Fallback to any available quiz if no quizzes of requested category
  return generateRandomECGQuestion(`fallback_${category}_${Date.now()}`);
};

// Comprehensive ECG categories for Learn Mode - Expanded with all medical rhythms
const ECG_CATEGORIES = {
  basic: {
    name: 'Normal Sinus Rhythm',
    description: 'Normal cardiac electrical conduction and rhythm patterns',
    icon: Heart,
    video: {
      videoId: 'e37rJqP6-aM',
      title: '3D Heart Anatomy Visualization',
      description: 'Understanding heart structure and normal electrical conduction through 3D animation',
      duration: 600
    },
    educational: {
      mechanism: 'Normal sinus rhythm originates from the sinoatrial (SA) node, the heart\'s natural pacemaker. The electrical impulse travels through the atria, causing atrial depolarization, then through the atrioventricular (AV) node, bundle of His, bundle branches, and Purkinje fibers to depolarize the ventricles.',
      pathophysiology: 'In normal sinus rhythm, the SA node fires at 60-100 beats per minute. The electrical conduction system functions properly, allowing coordinated atrial and ventricular contractions. The autonomic nervous system regulates heart rate through sympathetic and parasympathetic inputs.',
      ecgChanges: [
        'Regular P waves before each QRS complex',
        'PR interval 120-200 ms (3-5 small squares)',
        'QRS duration <120 ms (3 small squares)',
        'Heart rate 60-100 bpm',
        'Regular R-R intervals'
      ],
      clinicalSignificance: 'Normal sinus rhythm indicates proper cardiac electrical function and adequate cardiac output. It\'s the baseline rhythm against which all other rhythms are compared.',
      management: [
        'No intervention required',
        'Monitor for changes during illness or stress',
        'Maintain electrolyte balance',
        'Regular cardiac health maintenance'
      ],
      images: [
        '/ecg/medical_accurate/normal_75bpm.png',
        '/ecg/medical_accurate/normal_sinus_60bpm_1.png',
        '/ecg/medical_accurate/normal_sinus_75bpm_2.png'
      ]
    },
    questions: [
      {
        id: '1',
        imageUrl: '/ecg/medical_accurate/normal_75bpm.png',
        correctAnswer: 'Normal Sinus Rhythm',
        options: ['Normal Sinus Rhythm', 'Sinus Bradycardia', 'Sinus Tachycardia', 'Atrial Fibrillation'],
        explanation: 'This shows normal sinus rhythm with regular P waves, normal PR interval, and regular QRS complexes.',
        difficulty: 'easy',
        category: 'basic'
      }
    ]
  },
  anterior_mi: {
    name: 'Anterior Wall MI (AWMI)',
    description: 'Anterior ST-elevation myocardial infarction with authentic ECG patterns',
    icon: AlertTriangle,
    educational: {
      mechanism: 'Anterior STEMI occurs due to occlusion of the left anterior descending (LAD) coronary artery. This leads to ischemia and necrosis of the anterior wall of the left ventricle, causing characteristic ECG changes in the anterior leads (V1-V6).',
      pathophysiology: 'LAD occlusion causes transmural ischemia of the anterior myocardium. The lack of oxygen leads to cellular injury, membrane depolarization, and eventually cell death. This manifests as ST elevation due to injury current and later Q wave development due to necrosis.',
      ecgChanges: [
        'ST elevation in leads V1-V6 (anterior/septal leads)',
        'Reciprocal ST depression in inferior leads (II, III, aVF)', 
        'Development of pathological Q waves in anterior leads',
        'Loss of R wave progression in precordial leads',
        'T wave inversion in anterior leads (evolutionary change)',
        'Poor R wave progression indicates extensive anterior damage'
      ],
      clinicalSignificance: 'Anterior STEMI is a medical emergency requiring immediate reperfusion therapy. It carries significant morbidity and mortality, often affecting a large portion of the left ventricle and potentially causing cardiogenic shock.',
      management: [
        'Immediate primary PCI (percutaneous coronary intervention) within 90 minutes',
        'Dual antiplatelet therapy (aspirin + P2Y12 inhibitor)',
        'Anticoagulation (heparin or bivalirudin)',
        'Beta-blockers, ACE inhibitors, and statins',
        'Emergency cardiac catheterization and revascularization'
      ],
      images: [
        '/ecg/MI_ecg_database/Anterior_wall_MI/AMI.jpg',
        '/ecg/MI_ecg_database/Anterior_wall_MI/AMI3.jpg',
        '/ecg/MI_ecg_database/Anterior_wall_MI/AMI5.jpg',
        '/ecg/MI_ecg_database/Anterior_wall_MI/AMI6.jpg',
        '/ecg/MI_ecg_database/Anterior_wall_MI/AMI8.jpg',
        '/ecg/MI_ecg_database/Anterior_wall_MI/AMI9.jpg',
        '/ecg/MI_ecg_database/Anterior_wall_MI/ami (2).jpg',
        '/ecg/MI_ecg_database/Anterior_wall_MI/ami (3).jpg',
        '/ecg/MI_ecg_database/Anterior_wall_MI/AMI(7).jpg',
        '/ecg/MI_ecg_database/Anterior_wall_MI/AMI9 (2).jpg',
        '/ecg/teaching/massive-anterior-mi.jpg',
        '/ecg/teaching/anteroseptal-mi-with-reciprocal-changes.jpg'
      ]
    },
    questions: [
      {
        id: 'ami_q1',
        question: 'Which leads typically show ST elevation in anterior wall MI?',
        imageUrl: '/ecg/MI_ecg_database/Anterior_wall_MI/AMI.jpg',
        correctAnswer: 'V1-V6 (anterior/precordial leads)',
        options: ['II, III, aVF', 'V1-V6 (anterior/precordial leads)', 'I, aVL, V5-V6', 'V7-V9'],
        explanation: 'Anterior wall MI typically shows ST elevation in the precordial leads V1-V6, representing the anterior and septal walls of the left ventricle supplied by the LAD.',
        difficulty: 'medium',
        category: 'anterior_mi'
      },
      {
        id: 'ami_q2',
        question: 'What artery is typically occluded in anterior wall MI?',
        imageUrl: '/ecg/MI_ecg_database/Anterior_wall_MI/AMI3.jpg',
        correctAnswer: 'Left Anterior Descending (LAD)',
        options: ['Right Coronary Artery (RCA)', 'Left Anterior Descending (LAD)', 'Left Circumflex (LCX)', 'Posterior Descending Artery (PDA)'],
        explanation: 'The LAD supplies the anterior wall and septum of the left ventricle. Its occlusion causes anterior wall MI with characteristic changes in V1-V6.',
        difficulty: 'medium', 
        category: 'anterior_mi'
      }
    ]
  },
  inferior_mi: {
    name: 'Inferior Wall MI (IWMI)', 
    description: 'Inferior ST-elevation myocardial infarction with authentic ECG patterns',
    icon: AlertTriangle,
    educational: {
      mechanism: 'Inferior STEMI results from occlusion of the right coronary artery (RCA) or left circumflex artery (LCX). This causes ischemia and necrosis of the inferior wall of the left ventricle, showing characteristic changes in the inferior leads (II, III, aVF).',
      pathophysiology: 'RCA or LCX occlusion leads to inferior wall ischemia. The RCA supplies the inferior wall, posterior wall, and often the right ventricle. LCX occlusion affects the inferior-lateral wall. Transmural ischemia causes ST elevation and eventual Q wave formation.',
      ecgChanges: [
        'ST elevation in leads II, III, aVF (inferior leads)',
        'Reciprocal ST depression in leads I, aVL',
        'Development of pathological Q waves in II, III, aVF',
        'T wave inversion in inferior leads (evolutionary change)',
        'May have right ventricular involvement (V4R changes)',
        'Lead III often shows more prominent changes than lead II'
      ],
      clinicalSignificance: 'Inferior STEMI may be associated with bradyarrhythmias due to RCA supplying the SA and AV nodes. Right ventricular involvement can cause hemodynamic compromise and requires specific management considerations.',
      management: [
        'Primary PCI within 90 minutes (door-to-balloon time)',
        'Dual antiplatelet therapy and anticoagulation',
        'Monitor for bradyarrhythmias and AV blocks',
        'Right heart catheterization if RV involvement suspected',
        'Avoid nitroglycerin if RV infarction present'
      ],
      images: [
        '/ecg/MI_ecg_database/Inferior_wall_MI/IMI.jpg',
        '/ecg/MI_ecg_database/Inferior_wall_MI/IMI4.jpg',
        '/ecg/MI_ecg_database/Inferior_wall_MI/imi5.jpg',
        '/ecg/MI_ecg_database/Inferior_wall_MI/imi6.jpg',
        '/ecg/MI_ecg_database/Inferior_wall_MI/imi8.jpg',
        '/ecg/MI_ecg_database/Inferior_wall_MI/imi (2).jpg',
        '/ecg/MI_ecg_database/Inferior_wall_MI/imi (3).jpg',
        '/ecg/MI_ecg_database/Inferior_wall_MI/imi (4).jpg',
        '/ecg/MI_ecg_database/Inferior_wall_MI/imi (5).jpg',
        '/ecg/MI_ecg_database/Inferior_wall_MI/imi (6).jpg',
        '/ecg/MI_ecg_database/Inferior_wall_MI/IMI(2).jpg',
        '/ecg/teaching/acute-inferior-mi.jpg',
        '/ecg/teaching/inferior-mi-reciprocal-changes.jpg',
        '/ecg/teaching/inferior-wall-mi.jpg'
      ]
    },
    questions: [
      {
        id: 'imi_q1',
        question: 'Which leads show ST elevation in inferior wall MI?',
        imageUrl: '/ecg/MI_ecg_database/Inferior_wall_MI/IMI.jpg',
        correctAnswer: 'II, III, aVF',
        options: ['V1-V4', 'II, III, aVF', 'I, aVL, V5-V6', 'V7-V9'],
        explanation: 'Inferior wall MI shows ST elevation in the inferior leads II, III, and aVF, which look at the inferior (diaphragmatic) surface of the left ventricle.',
        difficulty: 'medium',
        category: 'inferior_mi'
      },
      {
        id: 'imi_q2',
        question: 'What reciprocal changes are seen in inferior MI?',
        imageUrl: '/ecg/MI_ecg_database/Inferior_wall_MI/IMI4.jpg',
        correctAnswer: 'ST depression in leads I and aVL',
        options: ['ST elevation in V1-V4', 'ST depression in leads I and aVL', 'Q waves in lateral leads', 'T wave inversion in V5-V6'],
        explanation: 'Reciprocal changes in inferior MI include ST depression in the high lateral leads I and aVL, which are electrically opposite to the inferior leads.',
        difficulty: 'hard',
        category: 'inferior_mi'
      }
    ]
  },
  lateral_mi: {
    name: 'Lateral Wall MI (LWMI)',
    description: 'Lateral ST-elevation myocardial infarction with authentic ECG patterns',
    icon: AlertTriangle,
    educational: {
      mechanism: 'Lateral STEMI results from occlusion of the left circumflex artery (LCX) or diagonal branches of the LAD. This causes ischemia and necrosis of the lateral wall of the left ventricle, showing characteristic changes in the lateral leads (I, aVL, V5, V6).',
      pathophysiology: 'LCX occlusion affects the lateral wall of the left ventricle. The circumflex artery supplies the lateral and posterior walls, and in some patients, the inferior wall. Transmural ischemia leads to ST elevation and eventual Q wave formation in lateral leads.',
      ecgChanges: [
        'ST elevation in leads I, aVL, V5, V6 (lateral leads)',
        'Reciprocal ST depression in inferior leads (II, III, aVF)',
        'Development of pathological Q waves in lateral leads',
        'T wave inversion in lateral leads (evolutionary change)',
        'May extend to posterior wall (V7-V9 changes)'
      ],
      clinicalSignificance: 'Lateral MI often presents with less dramatic symptoms than anterior MI but still requires urgent reperfusion. It may be associated with posterior wall involvement, requiring posterior lead assessment.',
      management: [
        'Immediate primary PCI within 90 minutes',
        'Dual antiplatelet therapy and anticoagulation',
        'Obtain posterior leads (V7-V9) to assess extent',
        'Standard post-MI medications (beta-blockers, ACE inhibitors, statins)',
        'Monitor for extension to posterior territory'
      ],
      images: [
        '/ecg/MI_ecg_database/Lateral_wall_MI/LMI.jpg',
        '/ecg/MI_ecg_database/Lateral_wall_MI/lmi.png',
        '/ecg/MI_ecg_database/Lateral_wall_MI/lmi (2).jpg',
        '/ecg/MI_ecg_database/Lateral_wall_MI/lmi (3).jpg'
      ]
    },
    questions: [
      {
        id: 'lmi_q1',
        question: 'Which leads show ST elevation in lateral wall MI?',
        imageUrl: '/ecg/MI_ecg_database/Lateral_wall_MI/LMI.jpg',
        correctAnswer: 'I, aVL, V5, V6',
        options: ['II, III, aVF', 'V1-V4', 'I, aVL, V5, V6', 'V7-V9'],
        explanation: 'Lateral wall MI shows ST elevation in the high lateral leads (I, aVL) and lateral precordial leads (V5, V6).',
        difficulty: 'medium',
        category: 'lateral_mi'
      }
    ]
  },
  posterior_mi: {
    name: 'Posterior Wall MI (PWMI)',
    description: 'Posterior myocardial infarction with authentic ECG patterns',
    icon: AlertTriangle,
    educational: {
      mechanism: 'Posterior MI results from occlusion of the posterior descending artery (PDA) or posterolateral branches, usually arising from a dominant RCA or LCX. This causes ischemia of the posterior wall of the left ventricle.',
      pathophysiology: 'Posterior wall MI is often missed on standard 12-lead ECG because there are no posterior leads in the standard configuration. The diagnosis relies on reciprocal changes in anterior leads and requires posterior leads (V7-V9) for confirmation.',
      ecgChanges: [
        'Reciprocal changes in V1-V3: tall R waves, ST depression',
        'Prominent R waves in V1-V2 (mirror image of Q waves)',
        'ST depression in V1-V3 (reciprocal to posterior ST elevation)',
        'Upright T waves in V1-V2 (reciprocal to posterior T inversion)',
        'ST elevation in posterior leads V7-V9 (when obtained)'
      ],
      clinicalSignificance: 'Posterior MI is frequently missed because it does not show typical ST elevation on standard 12-lead ECG. High index of suspicion and posterior lead placement are essential for diagnosis.',
      management: [
        'Obtain posterior leads (V7-V9) for confirmation',
        'Primary PCI if confirmed posterior STEMI',
        'Standard STEMI treatment protocols apply',
        'Monitor for extension to inferior/lateral walls',
        'Echocardiogram to assess posterior wall motion'
      ],
      images: [
        '/ecg/MI_ecg_database/Posterior_wall_MI/PMI.jpg',
        '/ecg/MI_ecg_database/Posterior_wall_MI/PMI2.jpg',
        '/ecg/MI_ecg_database/Posterior_wall_MI/pmi3.jpg'
      ]
    },
    questions: [
      {
        id: 'pmi_q1',
        question: 'What are the typical reciprocal changes seen in posterior MI?',
        imageUrl: '/ecg/MI_ecg_database/Posterior_wall_MI/PMI.jpg',
        correctAnswer: 'Tall R waves and ST depression in V1-V3',
        options: ['ST elevation in II, III, aVF', 'Tall R waves and ST depression in V1-V3', 'Q waves in V4-V6', 'ST elevation in I, aVL'],
        explanation: 'Posterior MI shows reciprocal changes in the anterior leads V1-V3, including tall R waves (mirror image of Q waves) and ST depression (reciprocal to posterior ST elevation).',
        difficulty: 'hard',
        category: 'posterior_mi'
      }
    ]
  },
  anterolateral_mi: {
    name: 'Anterolateral MI',
    description: 'Combined anterior and lateral wall myocardial infarction',
    icon: AlertTriangle,
    educational: {
      mechanism: 'Anterolateral MI involves both anterior and lateral walls, typically due to proximal LAD occlusion affecting both the anterior territory and diagonal branches, or combined LAD and LCX involvement.',
      pathophysiology: 'Large territory MI affecting significant portions of the left ventricle. The extensive area of ischemia can lead to significant hemodynamic compromise and increased risk of complications including cardiogenic shock.',
      ecgChanges: [
        'ST elevation in V1-V6 (extensive anterior leads)',
        'ST elevation in leads I, aVL (lateral leads)',
        'Reciprocal ST depression in inferior leads',
        'Development of Q waves in anterior and lateral leads',
        'Loss of R wave progression across precordial leads'
      ],
      clinicalSignificance: 'Anterolateral MI represents a large territory infarction with high risk of complications. Urgent reperfusion is critical due to the extensive myocardium at risk.',
      management: [
        'Emergent primary PCI - high priority case',
        'Hemodynamic monitoring for cardiogenic shock',
        'Dual antiplatelet therapy and anticoagulation',
        'Consider mechanical circulatory support if needed',
        'Aggressive post-MI medical therapy'
      ],
      images: [
        '/ecg/MI_ecg_database/Anterolateral_MI/ANTEROLATERAL.jpg',
        '/ecg/MI_ecg_database/Anterolateral_MI/anerolateral.jpg'
      ]
    },
    questions: [
      {
        id: 'almi_q1',
        question: 'Which leads show ST elevation in anterolateral MI?',
        imageUrl: '/ecg/MI_ecg_database/Anterolateral_MI/ANTEROLATERAL.jpg',
        correctAnswer: 'V1-V6, I, aVL',
        options: ['II, III, aVF only', 'V1-V6, I, aVL', 'V7-V9 only', 'I, aVL, V5-V6 only'],
        explanation: 'Anterolateral MI shows extensive ST elevation involving both anterior leads (V1-V6) and lateral leads (I, aVL), representing a large territory infarction.',
        difficulty: 'hard',
        category: 'anterolateral_mi'
      }
    ]
  },
  post_mi_evolved: {
    name: 'Post-MI Evolved Changes',
    description: 'Chronic ECG changes following myocardial infarction',
    icon: Clock,
    educational: {
      mechanism: 'After acute MI, the ECG evolves over days to weeks. ST elevation resolves, T waves invert and may normalize, but pathological Q waves typically persist, representing areas of myocardial scar tissue.',
      pathophysiology: 'Necrotic myocardium is replaced by fibrous scar tissue over time. This scar tissue cannot conduct electrical impulses normally, leading to persistent Q waves. The evolutionary changes reflect healing and remodeling processes.',
      ecgChanges: [
        'Pathological Q waves persist (>0.04s width, >25% of R wave)',
        'ST segments return to baseline',
        'T waves may normalize or remain inverted',
        'Loss of R wave progression in affected leads',
        'Regional wall motion abnormalities on echo'
      ],
      clinicalSignificance: 'Evolved Q waves indicate previous MI and myocardial scar. These changes help identify patients with ischemic cardiomyopathy and guide long-term management and risk stratification.',
      management: [
        'Long-term post-MI medications (beta-blockers, ACE inhibitors, statins)',
        'Assess for residual ischemia with stress testing',
        'Echocardiogram to evaluate left ventricular function',
        'ICD evaluation if significant LV dysfunction',
        'Cardiac rehabilitation and lifestyle modifications'
      ],
      images: [
        '/ecg/MI_ecg_database/Post_MI_evolved_MI/Post_AWMI.jpg',
        '/ecg/MI_ecg_database/Post_MI_evolved_MI/Post_IWMI.jpg', 
        '/ecg/MI_ecg_database/Post_MI_evolved_MI/Post_LWMI.jpg',
        '/ecg/MI_ecg_database/Post_MI_evolved_MI/Post_AWMI (2).jpg',
        '/ecg/MI_ecg_database/Post_MI_evolved_MI/post_awmi (3).jpg'
      ]
    },
    questions: [
      {
        id: 'post_mi_q1',
        question: 'What is the most persistent ECG finding after MI?',
        imageUrl: '/ecg/MI_ecg_database/Post_MI_evolved_MI/Post_AWMI.jpg',
        correctAnswer: 'Pathological Q waves',
        options: ['ST elevation', 'T wave inversion', 'Pathological Q waves', 'ST depression'],
        explanation: 'Pathological Q waves are the most persistent finding after MI, representing areas of myocardial scar tissue that cannot conduct electrical impulses normally.',
        difficulty: 'medium',
        category: 'post_mi_evolved'
      }
    ]
  },
  lbbb: {
    name: 'Left Bundle Branch Block',
    description: 'Complete left bundle branch conduction block',
    icon: Zap,
    educational: {
      mechanism: 'Left bundle branch block occurs when there is a delay or complete block in the left bundle branch of the cardiac conduction system. This forces the left ventricle to be activated via the right bundle branch and transseptal conduction, causing delayed and abnormal left ventricular activation.',
      pathophysiology: 'LBBB can result from coronary artery disease, hypertensive heart disease, cardiomyopathy, or degenerative conduction system disease. The block prevents normal simultaneous ventricular activation, leading to dyssynchronous contraction and potential reduction in cardiac efficiency.',
      ecgChanges: [
        'QRS duration ≥120 ms (≥3 small squares)',
        'Broad monophasic R waves in leads I, aVL, V5, V6',
        'Absence of septal Q waves in I, aVL, V5, V6',
        'Secondary ST-T wave changes (discordant to QRS)',
        'Poor R wave progression in precordial leads'
      ],
      clinicalSignificance: 'LBBB often indicates underlying structural heart disease and is associated with increased cardiovascular morbidity and mortality. New LBBB in the setting of chest pain may indicate acute MI and requires urgent evaluation.',
      management: [
        'Evaluate for underlying structural heart disease',
        'Echocardiogram to assess left ventricular function',
        'Consider cardiac catheterization if new LBBB',
        'Cardiac resynchronization therapy (CRT) if heart failure',
        'Treat underlying conditions (hypertension, CAD)'
      ],
      images: [
        '/ecg/medical_accurate/lbbb_65bpm_1.png',
        '/ecg/medical_accurate/lbbb_70bpm.png',
        '/ecg/medical_accurate/lbbb_75bpm_2.png'
      ]
    },
    questions: []
  },
  rbbb: {
    name: 'Right Bundle Branch Block',
    description: 'Complete right bundle branch conduction block',
    icon: Zap,
    educational: {
      mechanism: 'Right bundle branch block occurs when there is a delay or complete block in the right bundle branch. The right ventricle is then activated via the left bundle branch and transseptal conduction, causing delayed right ventricular activation and characteristic ECG morphology.',
      pathophysiology: 'RBBB can be congenital or acquired due to coronary artery disease, pulmonary embolism, pulmonary hypertension, or degenerative changes. Unlike LBBB, isolated RBBB in young individuals may be a normal variant and doesn\'t necessarily indicate structural heart disease.',
      ecgChanges: [
        'QRS duration ≥120 ms (≥3 small squares)',
        'RSR\' pattern in leads V1-V2 (M-shaped QRS)',
        'Wide S waves in leads I, aVL, V5, V6',
        'Secondary ST-T wave changes in right precordial leads',
        'Normal septal Q waves still present'
      ],
      clinicalSignificance: 'RBBB is often benign in young patients but may indicate pulmonary pathology, right heart strain, or coronary disease in older patients. It can mask signs of anterior MI and make ECG interpretation more challenging.',
      management: [
        'Investigate for underlying pulmonary or cardiac disease',
        'Echocardiogram to assess right ventricular function',
        'Consider pulmonary embolism if acute onset',
        'Monitor for progression to complete heart block',
        'Generally no specific treatment required for isolated RBBB'
      ],
      images: [
        '/ecg/medical_accurate/rbbb_70bpm_1.png',
        '/ecg/medical_accurate/rbbb_75bpm.png',
        '/ecg/medical_accurate/rbbb_80bpm_2.png'
      ]
    },
    questions: []
  },
  first_degree_avb: {
    name: 'First Degree AV Block',
    description: 'Prolonged atrioventricular conduction delay',
    icon: Clock,
    educational: {
      mechanism: 'First degree AV block represents a delay in atrioventricular conduction, typically at the level of the AV node. Every atrial impulse is conducted to the ventricles, but with a prolonged PR interval due to slowed conduction through the AV node.',
      pathophysiology: 'The delay can result from increased parasympathetic tone, medications (beta-blockers, calcium channel blockers, digoxin), electrolyte imbalances, ischemia, or degenerative changes in the conduction system. The AV node conducts more slowly but remains functional.',
      ecgChanges: [
        'PR interval >200 ms (>5 small squares) consistently',
        'Every P wave is followed by a QRS complex',
        'Regular rhythm with constant PR interval',
        'Normal QRS morphology (unless concurrent BBB)',
        'P wave morphology remains normal'
      ],
      clinicalSignificance: 'First degree AV block is usually asymptomatic and benign. However, it may progress to higher degrees of AV block, especially in the setting of acute MI or degenerative conduction system disease.',
      management: [
        'Usually no treatment required',
        'Monitor for progression to higher degree AV block',
        'Review medications that may prolong AV conduction',
        'Correct electrolyte abnormalities if present',
        'Consider pacemaker only if symptomatic bradycardia develops'
      ],
      images: [
        '/ecg/medical_accurate/first_degree_av_block_60bpm_1.png',
        '/ecg/medical_accurate/first_degree_av_block_70bpm_2.png',
        '/ecg/medical_accurate/first_degree_av_block_80bpm_3.png'
      ]
    },
    questions: []
  },
  second_degree_avb: {
    name: 'Second Degree AV Block',
    description: 'Intermittent failure of atrioventricular conduction',
    icon: AlertCircle,
    educational: {
      mechanism: 'Second degree AV block involves intermittent failure of AV conduction, where some P waves are not followed by QRS complexes. This can occur at the AV node (Mobitz I/Wenckebach) or below the AV node in the His-Purkinje system (Mobitz II).',
      pathophysiology: 'Mobitz I typically occurs at the AV node with progressive conduction delay until a beat is dropped. Mobitz II occurs below the AV node with sudden conduction failure without preceding delay. The location determines the clinical significance and prognosis.',
      ecgChanges: [
        'Mobitz I: Progressive PR prolongation before dropped beat',
        'Mobitz II: Constant PR interval with sudden dropped beats',
        'P waves more numerous than QRS complexes',
        '2:1, 3:1, or variable AV conduction ratios',
        'QRS may be narrow (nodal) or wide (infranodal)'
      ],
      clinicalSignificance: 'Mobitz I is usually benign and may be physiological. Mobitz II is more serious, often progresses to complete heart block, and typically requires pacemaker implantation due to risk of sudden cardiac death.',
      management: [
        'Mobitz I: Observation unless symptomatic',
        'Mobitz II: Permanent pacemaker indicated',
        'Atropine for acute symptomatic bradycardia',
        'Temporary pacing if hemodynamically unstable',
        'Evaluate for reversible causes (medications, ischemia)'
      ],
      images: [
        '/ecg/medical_accurate/bradycardia_35bpm.png',
        '/ecg/medical_accurate/bradycardia_40bpm.png',
        '/ecg/medical_accurate/bradycardia_45bpm.png'
      ]
    },
    questions: []
  },
  third_degree_avb: {
    name: 'Complete Heart Block',
    description: 'Complete dissociation of atrial and ventricular activity',
    icon: AlertTriangle,
    educational: {
      mechanism: 'Third degree (complete) AV block represents complete failure of AV conduction. The atria and ventricles beat independently, with atrial activity controlled by the SA node and ventricular activity by an escape pacemaker (junctional or ventricular).',
      pathophysiology: 'Complete heart block can result from congenital abnormalities, degenerative disease, ischemia, infection, or medications. The ventricles are driven by escape rhythms that are inherently slower and less reliable than normal sinus rhythm.',
      ecgChanges: [
        'Complete AV dissociation (P waves and QRS independent)',
        'P waves march through at their own rate',
        'Escape rhythm rate 40-60 bpm (junctional) or 20-40 bpm (ventricular)',
        'QRS may be narrow (junctional escape) or wide (ventricular escape)',
        'Regular ventricular rate despite irregular P-QRS relationship'
      ],
      clinicalSignificance: 'Complete heart block is a medical emergency that can cause syncope, heart failure, or sudden cardiac death. The slow ventricular rate often cannot maintain adequate cardiac output, especially during stress or exercise.',
      management: [
        'Emergency temporary pacing if symptomatic',
        'Permanent pacemaker implantation indicated',
        'Atropine may be tried but often ineffective',
        'Transcutaneous pacing as bridge to permanent device',
        'Treat underlying causes when possible'
      ],
      images: [
        '/ecg/medical_accurate/bradycardia_35bpm.png',
        '/ecg/medical_accurate/bradycardia_42bpm_2.png',
        '/ecg/medical_accurate/bradycardia_50bpm.png'
      ]
    },
    questions: []
  },
  lvh: {
    name: 'Left Ventricular Hypertrophy',
    description: 'Increased left ventricular muscle mass and wall thickness',
    icon: Activity,
    educational: {
      mechanism: 'Left ventricular hypertrophy develops as a compensatory response to chronic pressure or volume overload. The increased muscle mass helps maintain cardiac output but eventually leads to diastolic dysfunction and increased oxygen demand.',
      pathophysiology: 'Chronic conditions like hypertension, aortic stenosis, or hypertrophic cardiomyopathy cause LVH. The hypertrophied muscle generates higher electrical voltages, creates strain patterns, and may develop ischemia due to increased oxygen demand exceeding supply.',
      ecgChanges: [
        'Increased QRS voltage (Cornell criteria: R in aVL + S in V3 >28mm men, >20mm women)',
        'Sokolow-Lyon criteria: S in V1 + R in V5/V6 >35mm',
        'Left axis deviation',
        'ST depression and T wave inversion in lateral leads (strain pattern)',
        'Prolonged QRS duration'
      ],
      clinicalSignificance: 'LVH increases risk of arrhythmias, sudden cardiac death, heart failure, and stroke. It\'s an independent cardiovascular risk factor and indicates target organ damage from hypertension or other cardiac conditions.',
      management: [
        'Aggressive blood pressure control (<130/80 mmHg)',
        'ACE inhibitors or ARBs preferred for regression',
        'Treat underlying causes (aortic stenosis, hypertension)',
        'Echocardiogram to assess structure and function',
        'Lifestyle modifications (weight loss, exercise, sodium restriction)'
      ],
      images: [
        '/ecg/medical_accurate/tachycardia_125bpm.png',
        '/ecg/medical_accurate/tachycardia_135bpm_4.png',
        '/ecg/medical_accurate/tachycardia_145bpm_5.png'
      ]
    },
    questions: []
  },
  rvh: {
    name: 'Right Ventricular Hypertrophy',
    description: 'Increased right ventricular muscle mass due to pressure overload',
    icon: Activity,
    educational: {
      mechanism: 'Right ventricular hypertrophy develops in response to chronic pressure overload from pulmonary hypertension, congenital heart disease, or chronic lung disease. The right ventricle thickens to maintain adequate pulmonary circulation.',
      pathophysiology: 'Conditions like pulmonary stenosis, pulmonary hypertension, tetralogy of Fallot, or chronic pulmonary disease cause RVH. The hypertrophied right ventricle generates increased electrical forces that overcome the normally dominant left ventricular forces.',
      ecgChanges: [
        'Right axis deviation (QRS axis >+90°)',
        'Tall R waves in right precordial leads (V1-V3)',
        'Deep S waves in left precordial leads (V5-V6)',
        'R/S ratio >1 in V1',
        'ST depression and T wave inversion in V1-V3 (strain pattern)'
      ],
      clinicalSignificance: 'RVH indicates significant pulmonary or right heart pathology. It\'s associated with increased morbidity and mortality, especially in the setting of pulmonary hypertension or congenital heart disease.',
      management: [
        'Treat underlying pulmonary or cardiac disease',
        'Pulmonary vasodilators for pulmonary hypertension',
        'Oxygen therapy for hypoxemic patients',
        'Diuretics for right heart failure',
        'Surgical correction of congenital lesions when appropriate'
      ],
      images: [
        '/ecg/medical_accurate/tachycardia_155bpm.png',
        '/ecg/medical_accurate/tachycardia_165bpm_7.png',
        '/ecg/medical_accurate/vtach_150bpm.png'
      ]
    },
    questions: []
  },
  wpw: {
    name: 'Wolf-Parkinson-White Syndrome',
    description: 'Ventricular pre-excitation via accessory pathway',
    icon: Zap,
    educational: {
      mechanism: 'WPW syndrome involves an accessory pathway (bundle of Kent) that bypasses the normal AV node conduction. This allows early ventricular activation, creating pre-excitation with characteristic delta waves and predisposing to reentrant tachyarrhythmias.',
      pathophysiology: 'The accessory pathway conducts faster than the AV node, causing early ventricular depolarization. This creates a fusion complex combining normal AV conduction and pre-excited conduction. Reentrant circuits can form using the normal and accessory pathways.',
      ecgChanges: [
        'Short PR interval (<120 ms)',
        'Delta wave (slurred upstroke of QRS)',
        'Wide QRS complex (>120 ms)',
        'Secondary ST-T wave changes',
        'Location of pathway determines delta wave polarity'
      ],
      clinicalSignificance: 'WPW predisposes to supraventricular tachycardia and, rarely, atrial fibrillation with rapid ventricular response that can degenerate to ventricular fibrillation. Sudden cardiac death, though rare, can occur.',
      management: [
        'Asymptomatic WPW: Risk stratification with electrophysiology study',
        'Symptomatic WPW: Radiofrequency catheter ablation',
        'Avoid AV nodal blocking agents in atrial fibrillation',
        'Emergency cardioversion for hemodynamically unstable tachycardia',
        'Procainamide for stable atrial fibrillation with WPW'
      ],
      images: [
        '/ecg/ecg_dataset_clean/WPW_Wolf-Parkinson-White_syndrome/clean_02145_Wolf-Parkinson-White%20syndrome.png',
        '/ecg/ecg_dataset_clean/WPW_Wolf-Parkinson-White_syndrome/clean_04279_Wolf-Parkinson-White%20syndrome.png',
        '/ecg/ecg_dataset_clean/WPW_Wolf-Parkinson-White_syndrome/clean_04658_Wolf-Parkinson-White%20syndrome.png'
      ]
    },
    questions: []
  },
  lafb: {
    name: 'Left Anterior Fascicular Block',
    description: 'Block in left anterior fascicle of left bundle branch',
    icon: GitBranch,
    educational: {
      mechanism: 'Left anterior fascicular block occurs when there is a block in the anterior fascicle of the left bundle branch. This causes altered ventricular activation with the impulse traveling down the posterior fascicle first, then spreading to the anterior wall.',
      pathophysiology: 'LAFB can result from coronary artery disease affecting the septal perforators, degenerative conduction system disease, or acute MI. It represents a more localized conduction abnormality than complete bundle branch blocks.',
      ecgChanges: [
        'Left axis deviation (-30° to -90°)',
        'Small Q waves in leads I and aVL',
        'Small R waves in leads II, III, aVF',
        'QRS duration usually <120 ms',
        'No other cause of left axis deviation'
      ],
      clinicalSignificance: 'Isolated LAFB is usually benign but may indicate underlying coronary disease. When combined with RBBB (bifascicular block), it indicates extensive conduction system disease and increased risk of complete heart block.',
      management: [
        'Isolated LAFB: Usually no specific treatment',
        'Evaluate for underlying coronary artery disease',
        'Monitor for progression to bifascicular or trifascicular block',
        'Pacemaker consideration if symptomatic bradycardia',
        'Bifascicular block may require closer monitoring'
      ],
      images: [
        '/ecg/ecg_dataset_clean/LAFB_left_anterior_fascicular_block/clean_00041_left%20anterior%20fascicular%20block.png',
        '/ecg/ecg_dataset_clean/LAFB_left_anterior_fascicular_block/clean_00103_left%20anterior%20fascicular%20block.png',
        '/ecg/ecg_dataset_clean/LAFB_left_anterior_fascicular_block/clean_00157_left%20anterior%20fascicular%20block.png'
      ]
    },
    questions: []
  },
  long_qt: {
    name: 'Long QT Syndrome',
    description: 'Prolonged ventricular repolarization predisposing to arrhythmias',
    icon: Clock,
    educational: {
      mechanism: 'Long QT syndrome involves abnormal ventricular repolarization due to mutations in ion channels (congenital) or acquired causes (medications, electrolytes). Prolonged repolarization creates electrical instability and predisposes to torsades de pointes.',
      pathophysiology: 'Abnormal potassium or sodium channel function prolongs the action potential duration. This creates early afterdepolarizations that can trigger polymorphic ventricular tachycardia (torsades de pointes), which can degenerate to ventricular fibrillation.',
      ecgChanges: [
        'Prolonged QT interval (>440 ms in men, >460 ms in women)',
        'QTc (corrected QT) >450 ms in men, >470 ms in women',
        'T wave morphology abnormalities',
        'U waves may be prominent',
        'T wave alternans (beat-to-beat variation)'
      ],
      clinicalSignificance: 'Long QT syndrome increases risk of syncope, seizures, and sudden cardiac death due to torsades de pointes. Risk is higher with longer QT intervals and certain triggers (exercise, emotions, medications).',
      management: [
        'Beta-blockers (particularly nadolol or propranolol)',
        'Avoid QT-prolonging medications',
        'Correct electrolyte abnormalities (K+, Mg2+)',
        'ICD implantation for high-risk patients',
        'Lifestyle modifications (avoid triggers, swimming restrictions)'
      ],
      images: [
        '/ecg/ecg_dataset_clean/LNGQT_long_QT-interval/clean_00039_long%20QT-interval.png',
        '/ecg/ecg_dataset_clean/LNGQT_long_QT-interval/clean_00260_long%20QT-interval.png',
        '/ecg/ecg_dataset_clean/LNGQT_long_QT-interval/clean_00320_long%20QT-interval.png'
      ]
    },
    questions: []
  },
  // New video-enhanced categories
  atrial_fibrillation: {
    name: 'Atrial Fibrillation',
    description: 'Chaotic atrial electrical activity with irregular ventricular response',
    icon: Waves,
    video: {
      videoId: 'Xa-YkT3gJWU',
      title: 'What is Atrial Fibrillation?',
      description: 'Understanding atrial fibrillation mechanisms, causes, and ECG recognition',
      duration: 480
    },
    educational: {
      mechanism: 'Atrial fibrillation results from multiple reentrant circuits in the atria, often originating from pulmonary veins. Chaotic atrial activity leads to irregular AV conduction and loss of organized atrial contraction.',
      pathophysiology: 'AF involves electrical and structural remodeling of atrial tissue. Risk factors include age, hypertension, heart failure, and structural heart disease. Loss of atrial kick reduces cardiac output by 15-20%.',
      ecgChanges: [
        'Irregularly irregular ventricular rhythm',
        'No discernible P waves',
        'Fibrillatory (f) waves in baseline',
        'Variable ventricular rate (usually 100-180 bpm if uncontrolled)',
        'QRS complexes typically narrow unless aberrancy'
      ],
      clinicalSignificance: 'AF is the most common sustained arrhythmia. Major complications include stroke due to thromboembolism, heart failure, and reduced quality of life. Stroke risk requires anticoagulation assessment.',
      management: [
        'Rate control (beta-blockers, calcium channel blockers, digoxin)',
        'Rhythm control (cardioversion, antiarrhythmics, ablation)',
        'Anticoagulation based on CHA2DS2-VASc score',
        'Address underlying causes and risk factors',
        'Lifestyle modifications and comorbidity management'
      ],
      images: [
        '/ecg/medical_accurate/atrial_fibrillation_110bpm_4.png',
        '/ecg/medical_accurate/atrial_fibrillation_130bpm_6.png',
        '/ecg/medical_accurate/atrial_fibrillation_150bpm_8.png',
        '/ecg/teaching/atrial-fibrillation.jpg'
      ]
    },
    questions: VIDEO_QUIZ_MODULES.find(m => m.category === 'atrial_fibrillation')?.questions || []
  },
  ventricular_tachycardia: {
    name: 'Ventricular Tachycardia',
    description: 'Life-threatening wide complex tachycardia from ventricular origin',
    icon: AlertTriangle,
    video: {
      videoId: 'prcxfvoE4C4',
      title: 'Ventricular Fibrillation - Terminal Rhythm',
      description: 'Understanding life-threatening ventricular arrhythmias and emergency management',
      duration: 480
    },
    educational: {
      mechanism: 'Ventricular tachycardia originates in ventricular tissue, bypassing the normal conduction system. It can result from reentry circuits, abnormal automaticity, or triggered activity in diseased myocardium.',
      pathophysiology: 'VT often occurs in the setting of structural heart disease, ischemia, or cardiomyopathy. The abnormal ventricular activation leads to wide QRS complexes and hemodynamic compromise due to reduced filling time.',
      ecgChanges: [
        'Wide QRS complexes (>120 ms, usually >140 ms)',
        'Ventricular rate typically 150-250 bpm',
        'Regular or slightly irregular rhythm',
        'AV dissociation (when visible)',
        'Capture beats or fusion beats (pathognomonic)'
      ],
      clinicalSignificance: 'VT is a life-threatening arrhythmia that can cause hemodynamic collapse and degenerate to ventricular fibrillation. It requires immediate recognition and treatment.',
      management: [
        'Unstable VT: Immediate synchronized cardioversion',
        'Stable VT: IV antiarrhythmics (amiodarone, lidocaine)',
        'Hemodynamically stable: Consider procainamide',
        'ICD implantation for secondary prevention',
        'Treat underlying coronary disease and heart failure'
      ],
      images: [
        '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png',
        '/ecg/medical_accurate/vtach_180bpm.png',
        '/ecg/medical_accurate/ventricular_tachycardia_210bpm_5.png',
        '/ecg/teaching/premature-ventricular-contractions.jpg',
        '/ecg/teaching/single-pvcs.jpg'
      ]
    },
    questions: VIDEO_QUIZ_MODULES.find(m => m.category === 'ventricular_tachycardia')?.questions || []
  },
  // Enhanced teaching categories with real clinical images
  clinical_mi_patterns: {
    name: 'Clinical MI Patterns',
    description: 'Real-world myocardial infarction cases with teaching analysis',
    icon: AlertTriangle,
    educational: {
      mechanism: 'Clinical MI patterns demonstrate the evolution and variation of myocardial infarction presentations. These real cases show how MI patterns can vary based on vessel involvement, timing, and patient factors.',
      pathophysiology: 'MI results from coronary artery occlusion leading to myocardial necrosis. Different territories show characteristic ECG changes based on the culprit vessel and collateral circulation.',
      ecgChanges: [
        'ST elevation in territory-specific leads',
        'Reciprocal ST depression in opposite leads',
        'Development of pathological Q waves over time',
        'T wave inversion as evolutionary change',
        'Loss of R wave progression in affected areas'
      ],
      clinicalSignificance: 'Rapid recognition of MI patterns is crucial for timely reperfusion therapy. Different MI territories have varying prognosis and complications.',
      management: [
        'Immediate reperfusion therapy (PCI or thrombolytics)',
        'Dual antiplatelet therapy and anticoagulation',
        'Beta-blockers, ACE inhibitors, statins',
        'Monitoring for complications (arrhythmias, heart failure)',
        'Risk stratification and secondary prevention'
      ],
      images: [
        '/ecg/teaching/acute-inferior-mi.jpg',
        '/ecg/teaching/massive-anterior-mi.jpg',
        '/ecg/teaching/anteroseptal-mi-with-reciprocal-changes.jpg',
        '/ecg/teaching/inferior-mi-reciprocal-changes.jpg',
        '/ecg/teaching/inferior-wall-mi.jpg',
        '/ecg/teaching/old-inferior-mi-q-waves.jpg',
        '/ecg/teaching/old-mi-pathological-q-waves.jpg'
      ]
    },
    questions: [
      {
        id: 'clinical_mi_1',
        question: 'Identify the type of myocardial infarction shown:',
        imageUrl: '/ecg/teaching/acute-inferior-mi.jpg',
        correctAnswer: 'Acute Inferior MI',
        options: ['Acute Inferior MI', 'Anterior MI', 'Lateral MI', 'Posterior MI'],
        explanation: 'This ECG shows acute inferior MI with ST elevation in leads II, III, and aVF, indicating RCA or PDA occlusion.',
        difficulty: 'medium',
        category: 'clinical_mi_patterns'
      },
      {
        id: 'clinical_mi_2',
        question: 'What does this ECG pattern indicate?',
        imageUrl: '/ecg/teaching/massive-anterior-mi.jpg',
        correctAnswer: 'Massive Anterior MI',
        options: ['Massive Anterior MI', 'Inferior MI', 'LBBB', 'Normal Sinus Rhythm'],
        explanation: 'This shows extensive anterior MI with ST elevation across precordial leads V1-V6, indicating LAD occlusion with large territory involvement.',
        difficulty: 'medium',
        category: 'clinical_mi_patterns'
      }
    ]
  },
  arrhythmia_teaching: {
    name: 'Arrhythmia Recognition',
    description: 'Clinical arrhythmia patterns with detailed teaching examples',
    icon: Activity,
    educational: {
      mechanism: 'Arrhythmias result from disorders of impulse formation, conduction, or both. Understanding the underlying mechanisms helps in recognition and treatment selection.',
      pathophysiology: 'Different arrhythmias arise from various mechanisms including automaticity, reentry, and triggered activity. Clinical context and patient factors influence arrhythmia significance.',
      ecgChanges: [
        'Rate variations from normal sinus rhythm',
        'Irregular rhythm patterns',
        'Abnormal P wave morphology or absence',
        'Wide or narrow QRS complexes',
        'AV dissociation patterns'
      ],
      clinicalSignificance: 'Rapid arrhythmia recognition is essential for appropriate treatment. Some arrhythmias are life-threatening while others are benign.',
      management: [
        'Assess hemodynamic stability first',
        'Rate vs rhythm control strategies',
        'Acute vs chronic management approaches',
        'Anticoagulation considerations',
        'Device therapy when indicated'
      ],
      images: [
        '/ecg/teaching/atrial-fibrillation.jpg',
        '/ecg/teaching/supraventricular-tachycardia.jpg',
        '/ecg/teaching/svt-differential-diagnosis.jpg',
        '/ecg/teaching/sinus-tachycardia.jpg',
        '/ecg/teaching/premature-ventricular-contractions.jpg',
        '/ecg/teaching/single-pvcs.jpg'
      ]
    },
    questions: [
      {
        id: 'arrhythmia_1',
        question: 'Identify this arrhythmia pattern:',
        imageUrl: '/ecg/teaching/atrial-fibrillation.jpg',
        correctAnswer: 'Atrial Fibrillation',
        options: ['Atrial Fibrillation', 'Atrial Flutter', 'SVT', 'Multifocal Atrial Tachycardia'],
        explanation: 'This ECG shows atrial fibrillation with irregularly irregular rhythm, absence of P waves, and fibrillatory baseline activity.',
        difficulty: 'easy',
        category: 'arrhythmia_teaching'
      },
      {
        id: 'arrhythmia_2',
        question: 'What type of tachycardia is demonstrated?',
        imageUrl: '/ecg/teaching/supraventricular-tachycardia.jpg',
        correctAnswer: 'Supraventricular Tachycardia',
        options: ['Supraventricular Tachycardia', 'Ventricular Tachycardia', 'Sinus Tachycardia', 'Atrial Flutter'],
        explanation: 'This shows supraventricular tachycardia with narrow QRS complexes and regular rapid rhythm, likely AVNRT or AVRT.',
        difficulty: 'medium',
        category: 'arrhythmia_teaching'
      }
    ]
  },
  conduction_abnormalities: {
    name: 'Conduction Disorders',
    description: 'Bundle branch blocks and conduction system abnormalities',
    icon: GitBranch,
    educational: {
      mechanism: 'Conduction disorders result from damage or dysfunction in the specialized conduction system. Bundle branch blocks affect ventricular depolarization patterns.',
      pathophysiology: 'Conduction blocks can be caused by ischemia, fibrosis, drugs, or degenerative disease. They alter the sequence of ventricular activation.',
      ecgChanges: [
        'QRS widening >120 ms in bundle branch blocks',
        'Characteristic morphology patterns',
        'Axis deviations in fascicular blocks',
        'Secondary ST-T wave changes',
        'Loss of septal Q waves in some leads'
      ],
      clinicalSignificance: 'New bundle branch blocks may indicate acute coronary syndromes. Some blocks are associated with increased mortality and may require pacing.',
      management: [
        'Identify and treat underlying causes',
        'Monitor for progression to higher-degree blocks',
        'Pacemaker therapy when indicated',
        'Consider cardiac resynchronization therapy',
        'Avoid bradycardia-inducing medications'
      ],
      images: [
        '/ecg/teaching/left-bundle-branch-block.jpg',
        '/ecg/teaching/lbbb-classic-pattern.jpg',
        '/ecg/teaching/lbbb-dilated-cardiomyopathy.jpg'
      ]
    },
    questions: [
      {
        id: 'conduction_1',
        question: 'Identify this conduction abnormality:',
        imageUrl: '/ecg/teaching/left-bundle-branch-block.jpg',
        correctAnswer: 'Left Bundle Branch Block',
        options: ['Left Bundle Branch Block', 'Right Bundle Branch Block', 'Bifascicular Block', 'Normal Conduction'],
        explanation: 'This ECG shows LBBB with wide QRS >120ms, loss of septal Q waves, and broad R waves in lateral leads.',
        difficulty: 'medium',
        category: 'conduction_abnormalities'
      }
    ]
  },
  emergency_patterns: {
    name: 'Emergency ECG Patterns',
    description: 'Life-threatening conditions requiring immediate recognition',
    icon: AlertTriangle,
    educational: {
      mechanism: 'Emergency ECG patterns represent conditions that can cause immediate hemodynamic collapse or death. Rapid recognition and treatment are critical.',
      pathophysiology: 'These patterns may result from complete electrical failure, severe metabolic disturbances, or terminal cardiac events.',
      ecgChanges: [
        'Absence of organized electrical activity',
        'Severe electrolyte-induced changes',
        'Terminal rhythm patterns',
        'Agonal rhythms with poor perfusion',
        'Cardiac arrest rhythms'
      ],
      clinicalSignificance: 'These patterns require immediate intervention including CPR, defibrillation, or advanced cardiac life support measures.',
      management: [
        'Immediate CPR and ACLS protocols',
        'Defibrillation for shockable rhythms',
        'Treat underlying causes (electrolytes, drugs)',
        'Advanced airway and circulatory support',
        'Post-resuscitation care'
      ],
      images: [
        '/ecg/teaching/pulseless-electrical-activity.jpg',
        '/ecg/teaching/pea-cardiac-arrest.jpg',
        '/ecg/teaching/hyperkalemia.jpg'
      ]
    },
    questions: [
      {
        id: 'emergency_1',
        question: 'This ECG pattern represents:',
        imageUrl: '/ecg/teaching/pulseless-electrical-activity.jpg',
        correctAnswer: 'Pulseless Electrical Activity (PEA)',
        options: ['Pulseless Electrical Activity (PEA)', 'Normal Sinus Rhythm', 'Atrial Fibrillation', 'Ventricular Tachycardia'],
        explanation: 'This shows PEA - organized electrical activity on ECG but no detectable pulse or blood pressure, requiring immediate CPR.',
        difficulty: 'hard',
        category: 'emergency_patterns'
      }
    ]
  },
  diagnostic_challenges: {
    name: 'Diagnostic Challenges',
    description: 'Complex ECG patterns requiring careful analysis',
    icon: Brain,
    educational: {
      mechanism: 'Some ECG patterns can mimic other conditions or present with subtle findings that require careful analysis and clinical correlation.',
      pathophysiology: 'Diagnostic challenges arise from overlapping patterns, early disease states, or conditions that can be easily confused with more serious pathology.',
      ecgChanges: [
        'Subtle ST-T wave abnormalities',
        'Benign vs pathological patterns',
        'Early repolarization variants',
        'Low voltage complexes',
        'Borderline interval measurements'
      ],
      clinicalSignificance: 'Proper interpretation prevents unnecessary interventions for benign findings while ensuring serious conditions are not missed.',
      management: [
        'Careful clinical correlation required',
        'Serial ECGs for comparison',
        'Consider patient demographics and risk factors',
        'Additional testing when indicated',
        'Specialty consultation for complex cases'
      ],
      images: [
        '/ecg/teaching/benign-early-repolarization.jpg',
        '/ecg/teaching/global-t-inversion-long-qt.jpg',
        '/ecg/teaching/global-t-inversion-lvh-cardiomyopathy.jpg',
        '/ecg/teaching/t-wave-inversion-lateral-leads.jpg',
        '/ecg/teaching/t-wave-inversion-low-voltage.jpg',
        '/ecg/teaching/deep-q-waves-inferior-leads.jpg',
        '/ecg/teaching/complex-ecg-analysis.jpg'
      ]
    },
    questions: [
      {
        id: 'diagnostic_1',
        question: 'This ST elevation pattern likely represents:',
        imageUrl: '/ecg/teaching/benign-early-repolarization.jpg',
        correctAnswer: 'Benign Early Repolarization',
        options: ['Benign Early Repolarization', 'Acute STEMI', 'Pericarditis', 'Hyperkalemia'],
        explanation: 'This shows benign early repolarization with concave ST elevation, notching, and no reciprocal changes - not acute MI.',
        difficulty: 'hard',
        category: 'diagnostic_challenges'
      }
    ]
  },
  bradycardia: {
    name: 'Bradycardia',
    description: 'Slow heart rate with potential hemodynamic compromise',
    icon: Clock,
    video: {
      videoId: 'U3926ZrAosM',
      title: 'Adult Bradycardia Algorithm (ACLS)',
      description: 'ACLS approach to bradycardia management and treatment protocols',
      duration: 600
    },
    educational: {
      mechanism: 'Bradycardia can result from decreased SA node automaticity, increased parasympathetic tone, or conduction blocks. It may be physiologic (athletes) or pathologic (medications, ischemia, aging).',
      pathophysiology: 'Slow heart rates can compromise cardiac output, especially in patients with fixed stroke volumes. Symptoms occur when cardiac output cannot meet metabolic demands.',
      ecgChanges: [
        'Heart rate <60 bpm',
        'Regular or irregular rhythm depending on cause',
        'Normal P-QRS relationship in sinus bradycardia',
        'May have prolonged PR intervals',
        'QRS usually narrow unless conduction disease'
      ],
      clinicalSignificance: 'Symptomatic bradycardia can cause dizziness, syncope, fatigue, and heart failure. Asymptomatic bradycardia in athletes is usually benign.',
      management: [
        'Asymptomatic: Observation and monitoring',
        'Symptomatic: Atropine 0.5-1 mg IV',
        'Transcutaneous pacing if atropine ineffective',
        'Permanent pacemaker for persistent symptomatic bradycardia',
        'Address reversible causes (medications, electrolytes)'
      ],
      images: [
        '/ecg/medical_accurate/bradycardia_45bpm.png',
        '/ecg/medical_accurate/bradycardia_35bpm.png',
        '/ecg/medical_accurate/bradycardia_52bpm_4.png'
      ]
    },
    questions: VIDEO_QUIZ_MODULES.find(m => m.category === 'bradycardia')?.questions || []
  },
  tachycardia: {
    name: 'Supraventricular Tachycardia',
    description: 'Fast heart rate originating above the ventricles',
    icon: TrendingUp,
    video: {
      videoId: 'bDyZ76QzA9s',
      title: 'Types and ECG Features of Supraventricular Tachycardia (SVT)',
      description: 'Understanding different types of SVT and their ECG characteristics',
      duration: 600
    },
    educational: {
      mechanism: 'SVT includes various tachyarrhythmias originating above the ventricles: AVNRT, AVRT, atrial tachycardia, and atrial flutter. Reentrant circuits are the most common mechanism.',
      pathophysiology: 'SVT typically involves reentry circuits using the AV node and/or accessory pathways. Fast rates can compromise ventricular filling and cardiac output, especially in patients with structural heart disease.',
      ecgChanges: [
        'Narrow QRS complexes (<120 ms) unless aberrancy',
        'Heart rate typically 150-220 bpm',
        'Regular rhythm (usually)',
        'P waves may be hidden, inverted, or abnormal',
        'Abrupt onset and termination'
      ],
      clinicalSignificance: 'SVT can cause palpitations, chest pain, dyspnea, and syncope. While rarely life-threatening, it can trigger ischemia or heart failure in vulnerable patients.',
      management: [
        'Stable SVT: Vagal maneuvers (Valsalva, carotid massage)',
        'Adenosine 6 mg IV rapid push, then 12 mg if needed',
        'Calcium channel blockers or beta-blockers',
        'Synchronized cardioversion if hemodynamically unstable',
        'Catheter ablation for recurrent SVT'
      ],
      images: [
        '/ecg/medical_accurate/supraventricular_tachycardia_180bpm_2.png',
        '/ecg/medical_accurate/tachycardia_145bpm_5.png',
        '/ecg/medical_accurate/tachycardia_125bpm_3.png'
      ]
    },
    questions: VIDEO_QUIZ_MODULES.find(m => m.category === 'tachycardia')?.questions || []
  }
};

const ECGSimulator: React.FC<ECGSimulatorProps> = ({ onBack }) => {
  // Sound effects and XP system hooks
  const { playCorrectSound, playErrorSound, playRewardSound, playPageTurnSound } = useUISounds() || {};
  const { awardXP } = usePulseStore() || {};

  // Safe function wrappers to prevent errors
  const safePlayPageTurnSound = () => {
    try {
      if (typeof playPageTurnSound === 'function') {
        playPageTurnSound();
      } else {
        console.warn('playPageTurnSound not available');
      }
    } catch (error) {
      console.warn('Error playing page turn sound:', error);
    }
  };

  const safeAwardXP = async (points: number) => {
    try {
      if (typeof awardXP === 'function') {
        await awardXP(points);
        return points;
      } else {
        console.warn('awardXP not available');
        return 0;
      }
    } catch (error) {
      console.warn('Error awarding XP:', error);
      return 0;
    }
  };

  // Core game state
  const [currentView, setCurrentView] = useState<'menu' | 'categories' | 'game' | 'results' | 'educational'>('menu');
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [currentQuestion, setCurrentQuestion] = useState<ECGQuestion | null>(null);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [currentChunk, setCurrentChunk] = useState(0);
  
  // Answer feedback popup state
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(0);
  
  // Educational mode state
  const [selectedEducationalCategory, setSelectedEducationalCategory] = useState<string>('');
  const [currentEducationalSlide, setCurrentEducationalSlide] = useState(0);
  
  // Video quiz state
  const [isVideoQuizActive, setIsVideoQuizActive] = useState(false);
  const [currentVideoQuizIndex, setCurrentVideoQuizIndex] = useState(0);
  const [videoQuizScore, setVideoQuizScore] = useState(0);
  const [videoQuizAnswered, setVideoQuizAnswered] = useState<(string | null)[]>([]);
  
  // Touch/Swipe handling for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Minimum distance required to trigger a swipe
  const minSwipeDistance = 50;
  
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && currentView === 'educational') {
      // Swipe left - next slide
      // Each educational category has 5 slides: overview, pathophysiology, ECG features, clinical impact, treatment
      const totalSlides = 5;
      safePlayPageTurnSound();
      setCurrentEducationalSlide(Math.min(totalSlides - 1, currentEducationalSlide + 1));
    }
    
    if (isRightSwipe && currentView === 'educational') {
      // Swipe right - previous slide  
      safePlayPageTurnSound();
      setCurrentEducationalSlide(Math.max(0, currentEducationalSlide - 1));
    }
  };
  
  // Game progress
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [questionCounter, setQuestionCounter] = useState(0); // Debug counter
  const [streak, setStreak] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  
  // Difficulty and animations
  const [difficultyLevel, setDifficultyLevel] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Generate static questions (fallback)
  const generateRandomQuestion = (): ECGQuestion => {
    const allQuestions: ECGQuestion[] = Object.values(ECG_CATEGORIES).flatMap(cat => 
      cat.questions.map(q => ({
        ...q,
        difficulty: q.difficulty as 'easy' | 'medium' | 'hard'
      }))
    );
    if (allQuestions.length === 0) {
      // Return a default question if no questions available
      return {
        id: 'default',
        question: 'What rhythm is shown in this ECG?',
        imageUrl: '/ecg/medical_accurate/normal_75bpm.png',
        correctAnswer: 'Normal Sinus Rhythm',
        options: ['Normal Sinus Rhythm', 'Sinus Bradycardia', 'Sinus Tachycardia', 'Atrial Fibrillation'],
        explanation: 'This is a placeholder ECG question.',
        difficulty: 'easy',
        category: 'basic'
      };
    }
    return allQuestions[Math.floor(Math.random() * allQuestions.length)];
  };

  const generateQuestion = (category: string): ECGQuestion => {
    const categoryData = ECG_CATEGORIES[category as keyof typeof ECG_CATEGORIES];
    if (!categoryData || categoryData.questions.length === 0) {
      return generateRandomQuestion();
    }
    const questions = categoryData.questions.map(q => ({
      ...q,
      difficulty: q.difficulty as 'easy' | 'medium' | 'hard'
    }));
    return questions[Math.floor(Math.random() * questions.length)];
  };

  // Game flow functions - Updated to use static image library
  const startRandomGame = async (mode: string) => {
    setSelectedCategory('mixed');
    setSelectedMode(mode);
    setCurrentView('game');
    setScore(0);
    setQuestionsAnswered(0);
    setQuestionCounter(1); // Reset debug counter
    setStreak(0);
    setGameActive(true);
    
    const modeData = GAME_MODES[mode as keyof typeof GAME_MODES];
    setTimeLeft(modeData.timeLimit);
    
    // Generate first question using appropriate generator
    const question = mode === 'boost' 
      ? generateBoostModeQuestion(`${mode}_${Date.now()}`)
      : generateRandomECGQuestion(`${mode}_${Date.now()}`);
    setCurrentQuestion(question);
    
    // Reset image states for new question
    setImageLoading(true);
    setImageError(false);
    
    setShowAnswer(false);
    setUserAnswer(null);
  };

  const startGame = async (category: string, mode: string) => {
    // Check if this is learn mode - show categories
    if (mode === 'learn') {
      setCurrentView('categories');
      setSelectedMode('learn');
      return;
    }
    
    setSelectedCategory(category);
    setSelectedMode(mode);
    setCurrentView('game');
    setScore(0);
    setQuestionsAnswered(0);
    setStreak(0);
    setGameActive(true);
    
    const modeData = GAME_MODES[mode as keyof typeof GAME_MODES];
    setTimeLeft(modeData.timeLimit);
    
    // Generate first question based on mode
    if (mode === 'practice' || mode === 'challenge' || mode === 'boost') {
      try {
        const question = (mode as string) === 'boost' 
          ? generateBoostModeQuestion(`${mode}_${Date.now()}`)
          : (mode as string) === 'practice'
            ? generatePracticeECGQuestion(`${mode}_${Date.now()}`)
            : await generateRandomECGQuestion(difficultyLevel);
        setCurrentQuestion(question);
      } catch (error) {
        const question = generateQuestion(category);
        setCurrentQuestion(question);
      }
    } else {
      const question = generateQuestion(category);
      setCurrentQuestion(question);
    }
    
    setShowAnswer(false);
    setUserAnswer(null);
  };

  // Start educational mode for specific category
  const startEducationalMode = (category: string) => {
    setSelectedEducationalCategory(category);
    setCurrentEducationalSlide(0);
    setCurrentView('educational');
  };

  const nextQuestion = async () => {
    console.log('🔍 nextQuestion called - checking selectedCategory:', selectedCategory);
    
    if (!selectedCategory) {
      console.error('❌ nextQuestion BLOCKED: selectedCategory is', selectedCategory);
      return;
    }
    
    console.log('➡️ Next Question Called:', {
      selectedMode,
      selectedCategory,
      questionsAnswered,
      currentScore: score
    });
    
    // Play page turn sound for navigation
    safePlayPageTurnSound();
    
    let question: ECGQuestion;
    
    // Generate next question using appropriate generator for unlimited challenges
    if (selectedCategory === 'mixed' || selectedMode === 'practice' || selectedMode === 'challenge' || selectedMode === 'boost') {
      question = selectedMode === 'boost' 
        ? generateBoostModeQuestion(`${selectedMode}_${Date.now()}`)
        : selectedMode === 'practice'
          ? generatePracticeECGQuestion(`${selectedMode}_${Date.now()}`)
          : generateRandomECGQuestion(`${selectedMode}_${Date.now()}`);
    } else {
      question = generateQuestion(selectedCategory);
    }
    
    console.log('✅ Question Generated:', {
      questionId: question.id,
      hasQuestion: !!question.question,
      hasImageUrl: !!question.imageUrl,
      optionsCount: question.options.length
    });
    
    console.log('🎯 Setting new question:', question);
    setCurrentQuestion(question);
    setQuestionCounter(prev => prev + 1); // Increment debug counter
    setShowAnswer(false);
    setUserAnswer(null);
    setShowHint(false);
    
    // Reset image states for new question
    setImageLoading(true);
    setImageError(false);
    
    // Reset timer for timed modes
    const mode = GAME_MODES[selectedMode as keyof typeof GAME_MODES];
    if (mode.timeLimit) {
      setTimeLeft(mode.timeLimit);
    }
    
    console.log('✅ nextQuestion completed successfully');
  };

  const startVideoQuiz = (videoQuizIndex: number) => {
    setCurrentVideoQuizIndex(videoQuizIndex);
    setIsVideoQuizActive(true);
    setVideoQuizAnswered([]);
    setVideoQuizScore(0);
  };

  const handleAnswer = async (answer: string) => {
    if (!currentQuestion || userAnswer) return;
    
    console.log('🎯 Answer Submitted:', {
      userAnswer: answer,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: answer === currentQuestion.correctAnswer,
      questionId: currentQuestion.id
    });
    
    setUserAnswer(answer);
    const isCorrect = answer === currentQuestion.correctAnswer;
    setIsAnswerCorrect(isCorrect);
    
    if (isCorrect) {
      // Play success sound
      if (typeof playCorrectSound === 'function') {
        playCorrectSound();
      }
      
      // Award 15 XP for correct answers in boost/challenge modes
      if (selectedMode === 'boost' || selectedMode === 'challenge') {
        try {
          const pointsAwarded = await safeAwardXP(15);
          setXpAwarded(pointsAwarded);
          // Play reward sound for XP
          if (typeof playRewardSound === 'function') {
            playRewardSound();
          }
        } catch (error) {
          console.error('Failed to award XP:', error);
          setXpAwarded(0);
        }
      } else {
        setXpAwarded(0);
      }
      
      setScore(score + 10 + streak);
      setStreak(streak + 1);
    } else {
      // Play error sound
      if (typeof playErrorSound === 'function') {
        playErrorSound();
      }
      setXpAwarded(0);
      setStreak(0);
    }
    
    setQuestionsAnswered(questionsAnswered + 1);
    
    // Show answer feedback popup instead of inline answer
    setShowAnswerFeedback(true);
  };

  // Continue to next question from feedback popup
  const continueToNextQuestion = async () => {
    console.log('🔄 Continue to Next Question clicked');
    console.log('🔍 Current state before continue:', {
      showAnswerFeedback,
      selectedCategory,
      selectedMode,
      currentQuestionId: currentQuestion?.id
    });
    
    setShowAnswerFeedback(false);
    setUserAnswer(null);
    setXpAwarded(0);
    setIsAnswerCorrect(false);
    
    // Reset image states for new question
    setImageLoading(true);
    setImageError(false);
    
    // Play page turn sound for flashcard-style navigation
    safePlayPageTurnSound();
    
    console.log('🚀 About to call nextQuestion()...');
    await nextQuestion();
    console.log('✅ nextQuestion() completed');
  };

  // Auto-progress removed - let users read the explanations at their own pace
  // Users must click "Continue to Next Question" manually

  const resetGame = () => {
    setCurrentView('menu');
    setSelectedMode(null);
    setSelectedCategory('');
    setCurrentQuestion(null);
    setUserAnswer(null);
    setShowAnswer(false);
    setShowAnswerFeedback(false);
    setIsAnswerCorrect(false);
    setXpAwarded(0);
    setScore(0);
    setQuestionsAnswered(0);
    setStreak(0);
    setGameActive(false);
    setTimeLeft(null);
  };

  // Timer effect
  useEffect(() => {
    if (gameActive && timeLeft !== null && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleAnswer(''); // Time's up, wrong answer
    }
  }, [gameActive, timeLeft]);

  // Animation effect
  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setAnimationProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  // Mobile back button handler - preserves app state
  useEffect(() => {
    const handleMobileBack = (event: PopStateEvent) => {
      event.preventDefault();
      
      // Internal navigation logic - prevent leaving app
      if (currentView === 'game') {
        // From game view, go back to categories or menu
        if (selectedMode === 'learn') {
          setCurrentView('categories');
        } else {
          setCurrentView('menu');
        }
        setGameActive(false);
        setTimeLeft(null);
      } else if (currentView === 'categories') {
        // From categories, go back to menu
        setCurrentView('menu');
        setSelectedCategory('');
      } else if (currentView === 'educational') {
        // From educational view, go back to categories
        setCurrentView('categories');
        setCurrentEducationalSlide(0);
      } else if (currentView === 'results') {
        // From results, go back to menu
        setCurrentView('menu');
        setScore(0);
        setQuestionsAnswered(0);
        setStreak(0);
      } else {
        // Only call onBack (leave app) if we're at the main menu
        onBack();
      }
    };

    // Add mobile back button state management
    const setupMobileNavigation = () => {
      // Push a state for internal navigation
      window.history.pushState({ page: 'ecg-simulator', view: currentView }, '', window.location.href);
    };

    // Set up mobile navigation
    setupMobileNavigation();
    
    // Listen for back button
    window.addEventListener('popstate', handleMobileBack);
    
    return () => {
      window.removeEventListener('popstate', handleMobileBack);
    };
  }, [currentView, selectedMode, onBack]);

  // Update browser history when view changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.replaceState(
        { page: 'ecg-simulator', view: currentView }, 
        '', 
        window.location.href
      );
    }
  }, [currentView]);

  // Mobile navigation helper functions
  const goBackToMenu = () => {
    setCurrentView('menu');
    setSelectedMode(null);
    setSelectedCategory('');
    setGameActive(false);
    setTimeLeft(null);
  };

  const goBackToCategories = () => {
    setCurrentView('categories');
    setCurrentQuestion(null);
    setUserAnswer(null);
    setShowAnswer(false);
    setGameActive(false);
    setTimeLeft(null);
  };

  const goBackFromEducational = () => {
    setCurrentView('categories');
    setCurrentEducationalSlide(0);
  };

  const handleInternalBack = () => {
    if (currentView === 'game') {
      if (selectedMode === 'learn') {
        goBackToCategories();
      } else {
        goBackToMenu();
      }
    } else if (currentView === 'categories') {
      goBackToMenu();
    } else if (currentView === 'educational') {
      goBackFromEducational();
    } else if (currentView === 'results') {
      goBackToMenu();
    }
  };

  // Mode selection screen - Compact Android-style
  if (currentView === 'menu') {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Simple header */}
        <div className="flex items-center justify-between p-4">
          <button 
            onClick={() => {
              // Show confirmation dialog before leaving app from main menu
              if (window.confirm('Exit ECG Master? Your progress will be saved.')) {
                onBack();
              }
            }}
            className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          <h1 className="text-lg font-bold text-white flex items-center gap-2">
            ECG Master
            <MedicalAnimation
              type="heartbeat"
              size="small"
              loop={true}
              autoplay={true}
              className="inline-block"
            />
          </h1>
          
          <div className="w-8"></div> {/* Spacer */}
        </div>

        <div className="p-4 space-y-4">
          {/* Compact Game Mode Cards */}
          {Object.entries(GAME_MODES).map(([key, mode]) => {
            const IconComponent = mode.icon;
            return (
              <button
                key={key}
                onClick={() => key === 'learn' ? setCurrentView('categories') : startRandomGame(key)}
                className="w-full group relative overflow-hidden"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mode.color} p-2.5 flex items-center justify-center`}>
                      <IconComponent className="h-full w-full text-white" />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h3 className="text-base font-semibold text-white mb-1">
                        {mode.name}
                      </h3>
                      <p className="text-sm text-blue-200 line-clamp-1">
                        {mode.description}
                      </p>
                      {mode.timeLimit && (
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3 text-amber-300" />
                          <span className="text-xs text-amber-300">{mode.timeLimit}s</span>
                        </div>
                      )}
                    </div>
                    
                    <ArrowLeft className="h-4 w-4 text-white/60 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Game view
  if (currentView === 'game' && currentQuestion) {
    const isBoostMode = selectedMode === 'boost';
    
    return (
      <div className={`ecg-simulator w-full min-h-screen relative overflow-hidden ${
        isBoostMode 
          ? 'bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 boost-mode' 
          : 'bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900'
      }`}>
        {/* Enhanced animated background elements for Boost Mode */}
        <div className="absolute inset-0 overflow-hidden">
          {isBoostMode ? (
            <>
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-bounce"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-spin-slow"></div>
              {/* Flash animation overlay for boost mode */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10 animate-shimmer"></div>
            </>
          ) : (
            <>
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </>
          )}
        </div>

        <div className="max-w-4xl mx-auto p-4 sm:p-6 relative z-10">
          {/* Modern Header with glassmorphism */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <button 
              onClick={resetGame} 
              className="group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 text-white"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">Exit Game</span>
              <span className="sm:hidden">Exit</span>
            </button>
            
            {/* Advanced Stats Display */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                  <Trophy className="h-4 w-4 text-white" />
                </div>
                <span className="text-white font-bold">{score}</span>
                <span className="text-blue-200 text-sm hidden sm:inline">points</span>
              </div>
              
              <div className="w-px h-6 bg-white/20"></div>
              
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-white">{questionsAnswered}</span>
                <span className="text-blue-200 text-sm hidden sm:inline">answered</span>
                <span className="text-yellow-300 text-xs ml-1">(Q#{questionCounter})</span>
              </div>
              
              {timeLeft !== null && timeLeft < 30 && (
                <>
                  <div className="w-px h-6 bg-white/20"></div>
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${timeLeft < 10 ? 'bg-gradient-to-r from-red-500 to-pink-500 animate-pulse' : 'bg-gradient-to-r from-orange-500 to-red-500'}`}>
                      <Clock className="h-4 w-4 text-white" />
                    </div>
                    <span className={`font-bold ${timeLeft < 10 ? 'text-red-300 animate-pulse' : 'text-orange-300'}`}>
                      {timeLeft}s
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ECG Display with advanced styling */}
          <div className="relative mb-6 sm:mb-8">
            {/* Card background with glassmorphism - Enhanced for Boost Mode */}
            <div className={`absolute inset-0 backdrop-blur-lg border rounded-3xl ${
              isBoostMode 
                ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/10 border-purple-400/30 neet-question-card animate-glow' 
                : 'bg-gradient-to-br from-white/20 to-white/5 border-white/20'
            }`}></div>
            
            {/* ECG Content */}
            <div className={`relative overflow-hidden rounded-3xl ${isBoostMode ? 'boost-mode' : ''}`}>
              <div className={`relative w-full h-48 sm:h-64 md:h-72 lg:h-80 p-1 sm:p-2 ${
                isBoostMode 
                  ? 'bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-red-900/30' 
                  : 'bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20'
              }`}>
                <div className={`w-full h-full transition-all duration-500 ${
                  isAnimating 
                    ? isBoostMode 
                      ? 'animate-boost-pulse scale-105' 
                      : 'animate-pulse scale-105' 
                    : ''
                }`}>
                  {/* Loading State */}
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-2xl">
                      <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${
                        isBoostMode ? 'border-purple-400' : 'border-cyan-400'
                      }`}></div>
                    </div>
                  )}
                  
                  {/* Error State */}
                  {imageError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-red-900/50 to-red-800/50 rounded-2xl text-center p-4">
                      <div className="text-red-300 text-lg mb-2">⚠️ Image Loading Error</div>
                      <div className="text-red-200 text-sm">Using fallback ECG image</div>
                    </div>
                  )}
                  
                  <SimpleImageViewer
                    src={currentQuestion.imageUrl}
                    alt="ECG Strip for Analysis"
                    className="rounded-xl"
                    containerClassName="w-full h-full"
                    onLoad={() => {
                      setImageLoading(false);
                      setImageError(false);
                    }}
                    onError={() => {
                      console.error('Failed to load ECG image:', currentQuestion.imageUrl);
                      setImageLoading(false);
                      setImageError(true);
                      // Fallback to a known working image if the original fails
                      if (selectedMode === 'boost' && currentQuestion.imageUrl !== '/ecg/medical_accurate/normal_75bpm.png') {
                        setCurrentQuestion(prev => prev ? {...prev, imageUrl: '/ecg/medical_accurate/normal_75bpm.png'} : prev);
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Question Card with advanced styling - Enhanced for Boost Mode */}
          <div className="relative">
            {/* Background with glassmorphism - Enhanced for Boost Mode */}
            <div className={`absolute inset-0 backdrop-blur-lg border rounded-3xl ${
              isBoostMode 
                ? 'bg-gradient-to-br from-purple-500/15 to-pink-500/10 border-purple-400/30' 
                : 'bg-gradient-to-br from-white/15 to-white/5 border-white/20'
            }`}></div>
            
            {/* Question Content */}
            <div className="relative p-6 sm:p-8">
              <h2 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${
                isBoostMode 
                  ? 'text-white text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-flash' 
                  : 'text-white'
              }`}>
                {currentQuestion.question || (isBoostMode ? 'What is the most likely ECG diagnosis?' : 'What rhythm is shown in this ECG?')}
              </h2>
              
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = userAnswer === option;
                  const isCorrect = option === currentQuestion.correctAnswer;
                  const showAsCorrect = showAnswer && isCorrect;
                  const showAsIncorrect = showAnswer && isSelected && !isCorrect;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      disabled={!!userAnswer}
                      className={`group relative p-4 sm:p-6 text-left transition-all duration-300 transform hover:scale-[1.02] rounded-2xl ${
                        isBoostMode ? 'neet-option-button' : ''
                      } ${
                        showAsCorrect
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25'
                          : showAsIncorrect
                          ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/25'
                          : isSelected
                          ? isBoostMode 
                            ? 'neet-option-button selected animate-glow' 
                            : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                      } ${!!userAnswer ? 'cursor-default' : 'cursor-pointer hover:-translate-y-1'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${
                          showAsCorrect || showAsIncorrect || isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-white/10 text-blue-300'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="font-medium text-sm sm:text-base">{option}</span>
                        
                        {/* Status icons */}
                        {showAsCorrect && (
                          <div className="ml-auto p-1 bg-white/20 rounded-lg">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        )}
                        {showAsIncorrect && (
                          <div className="ml-auto p-1 bg-white/20 rounded-lg">
                            <X className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Remove old answer sections and replace with popup */}
        </div>

        {/* Answer Feedback Popup - Duolingo Style */}
        <AnimatePresence>
          {showAnswerFeedback && currentQuestion && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className="w-full max-w-lg mx-auto"
              >
                <Card className={`${
                  isAnswerCorrect 
                    ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' 
                    : 'bg-gradient-to-br from-red-50 to-pink-50 border-red-200'
                } shadow-2xl`}>
                  <CardContent className="p-8 text-center">
                    {/* Result Icon with Lottie Animation */}
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: 0.2, 
                        type: "spring", 
                        stiffness: 150 
                      }}
                    >
                      {isAnswerCorrect ? (
                        <MedicalAnimation
                          type="success-check"
                          size="large"
                          loop={false}
                          autoplay={true}
                          className="drop-shadow-lg"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500">
                          <X className="w-10 h-10 text-white" />
                        </div>
                      )}
                    </motion.div>

                    {/* Result Title */}
                    <motion.h2 
                      className={`text-4xl font-extrabold mb-4 ${
                        isAnswerCorrect ? 'text-green-700' : 'text-red-700'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {isAnswerCorrect ? '🎉 Correct!' : '😔 Incorrect!'}
                    </motion.h2>

                    {/* XP Reward for Correct Answers with Celebration Animation */}
                    {isAnswerCorrect && xpAwarded > 0 && (
                      <motion.div 
                        className="relative flex items-center justify-center gap-2 mb-4"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                      >
                        {/* Background Celebration Animation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <MedicalAnimation
                            type="celebration"
                            size="xl"
                            loop={false}
                            autoplay={true}
                            className="opacity-60"
                          />
                        </div>
                        
                        {/* XP Display */}
                        <div className="relative z-10 flex items-center gap-2">
                          <Zap className="w-6 h-6 text-yellow-500" />
                          <span className="font-bold text-lg text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                            +{xpAwarded} XP
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {/* Correct Answer Display for Wrong Answers */}
                    {!isAnswerCorrect && (
                      <motion.div
                        className="mb-6 p-4 bg-green-100 border border-green-200 rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <p className="text-green-800 text-sm font-medium mb-1">Correct answer:</p>
                        <p className="text-green-900 text-lg font-bold">{currentQuestion.correctAnswer}</p>
                      </motion.div>
                    )}

                    {/* Explanation */}
                    <motion.div
                      className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-xl text-left"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-4 h-4 text-blue-600" />
                        <h4 className="font-semibold text-blue-800">Explanation</h4>
                      </div>
                      <p className="text-blue-700 text-sm leading-relaxed mb-3">
                        {currentQuestion.explanation}
                      </p>
                      
                      {/* Enhanced Medical Information */}
                      {(currentQuestion.heartRate || currentQuestion.medicalContext || currentQuestion.tags) && (
                        <div className="mt-4 pt-3 border-t border-blue-200">
                          {/* Heart Rate */}
                          {currentQuestion.heartRate && (
                            <div className="mb-2 flex items-center gap-2">
                              <Heart className="w-4 h-4 text-red-500" />
                              <span className="text-sm font-medium text-blue-800">
                                Heart Rate: {currentQuestion.heartRate} BPM
                              </span>
                            </div>
                          )}
                          
                          {/* Medical Context */}
                          {currentQuestion.medicalContext && (
                            <div className="space-y-2">
                              {currentQuestion.medicalContext.mechanism && (
                                <div>
                                  <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">Mechanism:</span>
                                  <p className="text-xs text-blue-600 leading-relaxed">{currentQuestion.medicalContext.mechanism}</p>
                                </div>
                              )}
                              {currentQuestion.medicalContext.clinical_significance && (
                                <div>
                                  <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">Clinical Significance:</span>
                                  <p className="text-xs text-blue-600 leading-relaxed">{currentQuestion.medicalContext.clinical_significance}</p>
                                </div>
                              )}
                              {currentQuestion.medicalContext.management && (
                                <div>
                                  <span className="text-xs font-semibold text-blue-800 uppercase tracking-wide">Management:</span>
                                  <p className="text-xs text-blue-600 leading-relaxed">{currentQuestion.medicalContext.management}</p>
                                </div>
                              )}
                            </div>
                          )}
                          
                          {/* Tags */}
                          {currentQuestion.tags && currentQuestion.tags.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1">
                              {currentQuestion.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-xs px-2 py-1 bg-blue-100 text-blue-700">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>

                    {/* Continue Button with Auto-progress indicator */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button
                        onClick={async () => {
                          console.log('🖱️ Continue button clicked');
                          try {
                            await continueToNextQuestion();
                          } catch (error) {
                            console.error('❌ Error in button click:', error);
                          }
                        }}
                        className={`w-full py-4 text-lg font-bold rounded-xl ${
                          isAnswerCorrect
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
                            : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                        } text-white shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        Continue to Next Question
                        <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
                      </Button>

                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Categories view - appears after clicking Learn Mode
  if (currentView === 'categories') {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Simple header */}
        <div className="flex items-center justify-between p-4">
          <button 
            onClick={() => setCurrentView('menu')}
            className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          <h1 className="text-lg font-bold text-white">Choose Category</h1>
          
          <div className="w-8"></div> {/* Spacer */}
        </div>

        <div className="p-4 space-y-3">
          {Object.entries(ECG_CATEGORIES).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => startEducationalMode(key)}
                className="w-full group relative overflow-hidden"
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-2.5 flex items-center justify-center">
                      <IconComponent className="h-full w-full text-white" />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <h3 className="text-base font-semibold text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-blue-200 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                        <span className="text-xs text-emerald-300">{category.questions.length} examples</span>
                      </div>
                    </div>
                    
                    <ArrowLeft className="h-4 w-4 text-white/60 rotate-180 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Educational view - Mobile-optimized swipeable with video integration
  if (currentView === 'educational' && selectedEducationalCategory) {
    const categoryData = ECG_CATEGORIES[selectedEducationalCategory as keyof typeof ECG_CATEGORIES];
    
    // Prepare content slides for mobile swiping - Include video slide first if available
    const slides = [];
    
    // Add YouTube video slide if category has video
    if (hasVideo(categoryData)) {
      slides.push({
        title: categoryData.video.title,
        subtitle: "Watch & Learn",
        videoId: categoryData.video.videoId,
        content: categoryData.video.description,
        icon: Video,
        color: "from-red-500 to-pink-500",
        isVideo: true
      });
    }
    
    // Add educational content slides
    slides.push(
      {
        title: categoryData.name,
        subtitle: "Overview",
        image: categoryData.educational.images[0],
        content: categoryData.educational.mechanism,
        icon: Heart,
        color: "from-blue-500 to-cyan-500"
      },
      {
        title: "How it Works",
        subtitle: "Pathophysiology",
        image: categoryData.educational.images[1] || categoryData.educational.images[0],
        content: categoryData.educational.pathophysiology,
        icon: Brain,
        color: "from-purple-500 to-pink-500"
      },
      {
        title: "ECG Features",
        subtitle: "What to Look For",
        image: categoryData.educational.images[2] || categoryData.educational.images[0],
        content: categoryData.educational.ecgChanges,
        icon: Activity,
        color: "from-emerald-500 to-teal-500"
      },
      {
        title: "Clinical Impact",
        subtitle: "Why it Matters",
        image: categoryData.educational.images[0],
        content: categoryData.educational.clinicalSignificance,
        icon: AlertTriangle,
        color: "from-orange-500 to-red-500"
      },
      {
        title: "Treatment",
        subtitle: "Management Approach",
        image: categoryData.educational.images[1] || categoryData.educational.images[0],
        content: categoryData.educational.management,
        icon: Stethoscope,
        color: "from-green-500 to-emerald-500"
      }
    );
    
    // Add video quiz slide if category has video
    if (hasVideo(categoryData)) {
      const videoQuizModule = VIDEO_QUIZ_MODULES.find(m => m.category === selectedEducationalCategory);
      if (videoQuizModule && videoQuizModule.questions.length > 0) {
        slides.push({
          title: "Test Your Knowledge",
          subtitle: "Video Quiz",
          content: `Ready to test what you learned from the video? Take this ${videoQuizModule.questions.length}-question quiz based on the video content.`,
          icon: Brain,
          color: "from-green-500 to-emerald-500",
          isQuiz: true,
          quizzes: videoQuizModule.questions
        });
      }
    }

    const currentSlideData = slides[currentEducationalSlide];
    const IconComponent = currentSlideData.icon;

    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden md:min-h-screen sm:h-full h-screen">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col min-h-screen md:min-h-full">
          {/* Minimal Mobile Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 flex-shrink-0">
            <button 
              onClick={() => setCurrentView('categories')} 
              className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm">Back</span>
            </button>
            
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2">
              <div className={`p-1.5 bg-gradient-to-r ${currentSlideData.color} rounded-lg`}>
                <BookOpen className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-white">Learn Mode</span>
            </div>

            <button
              onClick={() => startGame(selectedEducationalCategory, 'practice')}
              className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-medium text-sm"
            >
              <span>Quiz</span>
              <Play className="h-4 w-4" />
            </button>
          </div>

          {/* Slide Progress Indicator - Hidden on mobile */}
          <div className="hidden sm:flex justify-center gap-2 px-4 mb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  safePlayPageTurnSound();
                  setCurrentEducationalSlide(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentEducationalSlide 
                    ? 'w-8 bg-gradient-to-r ' + currentSlideData.color
                    : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Mobile swipe indicator */}
          <div className="sm:hidden flex justify-center items-center gap-2 px-4 mb-4">
            <div className="text-white/60 text-xs font-medium">
              Swipe to navigate ({currentEducationalSlide + 1}/{slides.length})
            </div>
          </div>

          {/* Main Content Slide - with swipe support for mobile */}
          <div className="flex-1 px-4 sm:px-6 pb-6">
            <div 
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl h-full overflow-hidden touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              
              {/* Header Section */}
              <div className="p-4 sm:p-6 border-b border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 bg-gradient-to-r ${currentSlideData.color} rounded-xl`}>
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-lg sm:text-xl font-bold text-white">{currentSlideData.title}</h1>
                    <p className="text-sm text-blue-200">{currentSlideData.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Dynamic Content Section */}
              <div className="p-4 sm:p-6">
                {/* Video Slide */}
                {currentSlideData.isVideo ? (
                  <div className="space-y-4">
                    <div className="bg-black rounded-2xl aspect-video relative overflow-hidden">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${currentSlideData.videoId}?rel=0&modestbranding=1`}
                        title={currentSlideData.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="text-blue-100 text-sm sm:text-base leading-relaxed">
                      <p>{currentSlideData.content}</p>
                    </div>
                  </div>
                ) : currentSlideData.isQuiz ? (
                  /* Quiz Slide */
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-2xl p-6 border border-green-500/30">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full text-green-300 text-sm font-medium mb-4">
                          <Brain className="h-4 w-4" />
                          Video Quiz Ready
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Test Your Knowledge</h3>
                        <p className="text-green-200 text-sm">
                          {currentSlideData.quizzes.length} questions based on the video you just watched
                        </p>
                      </div>
                      
                      <div className="flex justify-center">
                        <button
                          onClick={() => {
                            // Find the video quiz index for this category
                            const videoQuizIndex = VIDEO_QUIZ_MODULES.findIndex(
                              module => module.category === selectedEducationalCategory
                            );
                            if (videoQuizIndex >= 0) {
                              startVideoQuiz(videoQuizIndex);
                            }
                          }}
                          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-xl text-white font-medium transition-all duration-300 transform hover:scale-105"
                        >
                          <Play className="h-5 w-5" />
                          Start Video Quiz
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-blue-100 text-sm leading-relaxed">
                      <p>{currentSlideData.content}</p>
                    </div>
                  </div>
                ) : (
                  /* Regular Educational Slide */
                  <>
                    <div className="bg-gray-900/50 rounded-2xl p-4 mb-4">
                      <SimpleImageViewer
                        src={currentSlideData.image}
                        alt={`${currentSlideData.title} ECG Example`}
                        containerClassName="w-full h-48 sm:h-64"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="text-blue-100 text-sm sm:text-base leading-relaxed">
                      {Array.isArray(currentSlideData.content) ? (
                        <div className="space-y-2">
                          {currentSlideData.content.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className={`w-2 h-2 bg-gradient-to-r ${currentSlideData.color} rounded-full mt-2 flex-shrink-0`}></div>
                              <p>{item}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>{currentSlideData.content}</p>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Navigation Controls - Hidden on mobile, use swipe instead */}
              <div className="p-4 sm:p-6 border-t border-white/20 hidden sm:block">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => {
                      safePlayPageTurnSound();
                      setCurrentEducationalSlide(Math.max(0, currentEducationalSlide - 1));
                    }}
                    disabled={currentEducationalSlide === 0}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                      currentEducationalSlide === 0 
                        ? 'bg-white/5 text-white/50 cursor-not-allowed' 
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span className="text-sm">Previous</span>
                  </button>
                  
                  <span className="text-white/70 text-sm">
                    {currentEducationalSlide + 1} of {slides.length}
                  </span>
                  
                  {currentEducationalSlide === slides.length - 1 ? (
                    <button
                      onClick={() => startGame(selectedEducationalCategory, 'practice')}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${currentSlideData.color} text-white hover:scale-105 transition-all`}
                    >
                      <span className="text-sm">Start Quiz</span>
                      <Play className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        safePlayPageTurnSound();
                        setCurrentEducationalSlide(Math.min(slides.length - 1, currentEducationalSlide + 1));
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all"
                    >
                      <span className="text-sm">Next</span>
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </button>
                  )}
                </div>
              </div>

              {/* Mobile Action Button - Only show quiz button on last slide */}
              {currentEducationalSlide === slides.length - 1 && (
                <div className="p-4 border-t border-white/20 sm:hidden">
                  <button
                    onClick={() => startGame(selectedEducationalCategory, 'practice')}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${currentSlideData.color} text-white font-medium`}
                  >
                    <span>Start Quiz</span>
                    <Play className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Video Quiz Interface
  if (isVideoQuizActive) {
    const currentVideoQuiz = VIDEO_QUIZ_MODULES[currentVideoQuizIndex];
    if (!currentVideoQuiz) {
      return null;
    }

    return (
      <div className="fixed inset-0 bg-black flex flex-col">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-white">{currentVideoQuiz.title}</h1>
              <p className="text-white/80 text-sm">{currentVideoQuiz.description}</p>
            </div>
            <button
              onClick={() => setIsVideoQuizActive(false)}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-3 bg-white/20 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-full transition-all duration-500"
              style={{ width: `${((videoQuizAnswered.length / currentVideoQuiz.questions.length) * 100)}%` }}
            />
          </div>
          <p className="text-white/70 text-xs mt-1">
            Progress: {videoQuizAnswered.length} / {currentVideoQuiz.questions.length} questions
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {videoQuizAnswered.length === 0 && (
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-4">
              <h3 className="text-white text-lg font-semibold mb-3">Watch the Video First</h3>
              <div className="aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideoQuiz.videoId}?rel=0&modestbranding=1`}
                  className="w-full h-full"
                  allowFullScreen
                  title={currentVideoQuiz.title}
                />
              </div>
              <button
                onClick={() => setVideoQuizAnswered([null])}
                className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-xl hover:scale-105 transition-all font-medium"
              >
                Start Quiz
              </button>
            </div>
          )}

          {videoQuizAnswered.length > 0 && (
            <div className="space-y-4">
              {currentVideoQuiz.questions.map((question, index) => {
                const isAnswered = videoQuizAnswered[index] !== undefined;
                const userAnswer = videoQuizAnswered[index];
                
                if (index >= videoQuizAnswered.length) return null;
                
                return (
                  <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 flex-shrink-0">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-lg font-semibold mb-2">{question.question}</h3>
                        {question.imageUrl && (
                          <div className="bg-white rounded-lg p-4 mb-4">
                            <img 
                              src={question.imageUrl} 
                              alt="ECG strip" 
                              className="w-full h-auto rounded"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {question.options.map((option, optionIndex) => {
                        const isCorrect = option === question.correctAnswer;
                        const isSelected = userAnswer === option;
                        
                        let buttonClass = "p-4 rounded-xl text-left transition-all border-2 ";
                        
                        if (!isAnswered) {
                          buttonClass += "bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30";
                        } else {
                          if (isCorrect) {
                            buttonClass += "bg-green-500/20 border-green-500 text-green-300";
                          } else if (isSelected && !isCorrect) {
                            buttonClass += "bg-red-500/20 border-red-500 text-red-300";
                          } else {
                            buttonClass += "bg-white/5 border-white/20 text-white/70";
                          }
                        }

                        return (
                          <button
                            key={optionIndex}
                            onClick={() => {
                              if (!isAnswered) {
                                const newAnswers = [...videoQuizAnswered];
                                newAnswers[index] = option;
                                setVideoQuizAnswered(newAnswers);
                                
                                if (isCorrect) {
                                  setVideoQuizScore(prev => prev + 1);
                                }
                                
                                // Auto-progress to next question after 2 seconds
                                setTimeout(() => {
                                  if (index < currentVideoQuiz.questions.length - 1) {
                                    const nextAnswers = [...newAnswers];
                                    nextAnswers[index + 1] = null;
                                    setVideoQuizAnswered(nextAnswers);
                                  }
                                }, 2000);
                              }
                            }}
                            disabled={isAnswered}
                            className={buttonClass}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                                isAnswered && isCorrect ? 'border-green-500 bg-green-500 text-white' :
                                isAnswered && isSelected ? 'border-red-500 bg-red-500 text-white' :
                                'border-current'
                              }`}>
                                {String.fromCharCode(65 + optionIndex)}
                              </div>
                              <span>{option}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className="mt-4 p-4 bg-white/5 rounded-xl">
                        <h4 className="text-white font-semibold mb-2">Explanation:</h4>
                        <p className="text-white/80 text-sm">{question.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}

              {videoQuizAnswered.length === currentVideoQuiz.questions.length && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-center">
                  <h3 className="text-white text-xl font-bold mb-2">Quiz Complete!</h3>
                  <p className="text-white/80 mb-4">
                    Your Score: {videoQuizScore} / {currentVideoQuiz.questions.length}
                  </p>
                  <div className="flex gap-3 justify-center flex-wrap">
                    <button
                      onClick={() => {
                        setVideoQuizAnswered([]);
                        setVideoQuizScore(0);
                      }}
                      className="bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-xl transition-all"
                    >
                      Retake Quiz
                    </button>
                    <button
                      onClick={() => {
                        setIsVideoQuizActive(false);
                        setVideoQuizAnswered([]);
                        setVideoQuizScore(0);
                      }}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-xl hover:scale-105 transition-all"
                    >
                      Back to Learn Mode
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default ECGSimulator;