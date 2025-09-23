import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, Play, RotateCcw, Award, Clock, Zap, Target, Heart, Activity, Pause, BookOpen, Brain, Trophy, Stethoscope, Waves, AlertTriangle, Shuffle, TrendingUp, AlertCircle, Check, X, CheckCircle, Rocket, GitBranch } from 'lucide-react';
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

interface ECGSimulatorProps {
  onBack: () => void;
}

// ECG question interface for static image library
interface ECGQuestion {
  id: string;
  imageUrl: string;              // Static ECG image path
  correctAnswer: string;
  options: string[];
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
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
}

// Available ECG images for random selection
const ECG_IMAGE_LIBRARY = {
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

// NEET PG Style ECG Database - Comprehensive diagnostic categories with 3-option MCQs
const BOOST_MODE_ECG_DATABASE = {
  'NORM_normal_ECG': {
    correct: 'Normal ECG',
    options: ['Normal ECG', 'Sinus Bradycardia', 'First Degree AV Block'],
    explanation: 'Normal ECG showing regular sinus rhythm, normal axis, normal intervals, and no pathological findings.',
    category: 'Normal Variants',
    difficulty: 'easy',
    images: [
      '/ecg/ecg_dataset_clean/NORM_normal_ECG/clean_00001_normal ECG.png',
      '/ecg/ecg_dataset_clean/NORM_normal_ECG/clean_00002_normal ECG.png',
      '/ecg/ecg_dataset_clean/NORM_normal_ECG/clean_00003_normal ECG.png',
      '/ecg/ecg_dataset_clean/NORM_normal_ECG/clean_00004_normal ECG.png',
      '/ecg/ecg_dataset_clean/NORM_normal_ECG/clean_00005_normal ECG.png'
    ]
  },
  'AMI_anterior_myocardial_infarction': {
    correct: 'Anterior STEMI',
    options: ['Anterior STEMI', 'NSTEMI', 'Pericarditis'],
    explanation: 'Anterior ST-elevation myocardial infarction with characteristic ST elevation in V1-V4, indicating LAD territory involvement.',
    category: 'Myocardial Infarction',
    difficulty: 'medium',
    images: [
      '/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00311_anterior myocardial infarction.png',
      '/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00418_anterior myocardial infarction.png',
      '/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00486_anterior myocardial infarction.png',
      '/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00600_anterior myocardial infarction.png',
      '/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00716_anterior myocardial infarction.png'
    ]
  },
  'IMI_inferior_myocardial_infarction': {
    correct: 'Inferior STEMI',
    options: ['Inferior STEMI', 'Lateral STEMI', 'Posterior STEMI'],
    explanation: 'Inferior ST-elevation myocardial infarction with ST elevation in leads II, III, aVF indicating RCA or LCX involvement.',
    category: 'Myocardial Infarction',
    difficulty: 'medium',
    images: [
      '/ecg/ecg_dataset_clean/IMI_inferior_myocardial_infarction/clean_00008_inferior myocardial infarction.png',
      '/ecg/ecg_dataset_clean/IMI_inferior_myocardial_infarction/clean_00153_inferior myocardial infarction.png',
      '/ecg/ecg_dataset_clean/IMI_inferior_myocardial_infarction/clean_00161_inferior myocardial infarction.png',
      '/ecg/ecg_dataset_clean/IMI_inferior_myocardial_infarction/clean_00175_inferior myocardial infarction.png',
      '/ecg/ecg_dataset_clean/IMI_inferior_myocardial_infarction/clean_00210_inferior myocardial infarction.png'
    ]
  },
  'CLBBB_complete_left_bundle_branch_block': {
    correct: 'Complete LBBB',
    options: ['Complete LBBB', 'Complete RBBB', 'Bifascicular Block'],
    explanation: 'Complete left bundle branch block with QRS >120ms, broad monophasic R in I, aVL, V5-V6.',
    category: 'Conduction Disorders',
    difficulty: 'medium',
    images: [
      '/ecg/ecg_dataset_clean/CLBBB_complete_left_bundle_branch_block/clean_00180_complete left bundle branch block.png',
      '/ecg/ecg_dataset_clean/CLBBB_complete_left_bundle_branch_block/clean_00256_complete left bundle branch block.png',
      '/ecg/ecg_dataset_clean/CLBBB_complete_left_bundle_branch_block/clean_00279_complete left bundle branch block.png',
      '/ecg/ecg_dataset_clean/CLBBB_complete_left_bundle_branch_block/clean_00286_complete left bundle branch block.png',
      '/ecg/ecg_dataset_clean/CLBBB_complete_left_bundle_branch_block/clean_00287_complete left bundle branch block.png'
    ]
  },
  'CRBBB_complete_right_bundle_branch_block': {
    correct: 'Complete RBBB',
    options: ['Complete RBBB', 'Complete LBBB', 'IVCD'],
    explanation: 'Complete right bundle branch block with RSR pattern in V1-V2, wide S in I, aVL, V5-V6.',
    category: 'Conduction Disorders',
    difficulty: 'medium',
    images: [
      '/ecg/ecg_dataset_clean/CRBBB_complete_right_bundle_branch_block/clean_00172_complete right bundle branch block.png',
      '/ecg/ecg_dataset_clean/CRBBB_complete_right_bundle_branch_block/clean_00195_complete right bundle branch block.png',
      '/ecg/ecg_dataset_clean/CRBBB_complete_right_bundle_branch_block/clean_00424_complete right bundle branch block.png',
      '/ecg/ecg_dataset_clean/CRBBB_complete_right_bundle_branch_block/clean_00428_complete right bundle branch block.png',
      '/ecg/ecg_dataset_clean/CRBBB_complete_right_bundle_branch_block/clean_00455_complete right bundle branch block.png'
    ]
  },
  '1AVB_first_degree_AV_block': {
    correct: 'First Degree AV Block',
    options: ['First Degree AV Block', 'Second Degree AV Block', 'Third Degree AV Block'],
    explanation: 'First degree AV block with prolonged PR interval >200ms but every P wave is followed by QRS.',
    category: 'AV Blocks',
    difficulty: 'easy',
    images: [
      '/ecg/ecg_dataset_clean/1AVB_first_degree_AV_block/clean_00102_first degree AV block.png',
      '/ecg/ecg_dataset_clean/1AVB_first_degree_AV_block/clean_00218_first degree AV block.png',
      '/ecg/ecg_dataset_clean/1AVB_first_degree_AV_block/clean_00522_first degree AV block.png',
      '/ecg/ecg_dataset_clean/1AVB_first_degree_AV_block/clean_00556_first degree AV block.png',
      '/ecg/ecg_dataset_clean/1AVB_first_degree_AV_block/clean_01135_first degree AV block.png'
    ]
  },
  '2AVB_second_degree_AV_block': {
    correct: 'Second Degree AV Block',
    options: ['Second Degree AV Block', 'First Degree AV Block', 'Third Degree AV Block'],
    explanation: 'Second degree AV block with intermittent failure of AV conduction - some P waves not followed by QRS.',
    category: 'AV Blocks',
    difficulty: 'medium',
    images: [
      '/ecg/ecg_dataset_clean/2AVB_second_degree_AV_block/clean_11209_second degree AV block.png',
      '/ecg/ecg_dataset_clean/2AVB_second_degree_AV_block/clean_13938_second degree AV block.png',
      '/ecg/ecg_dataset_clean/2AVB_second_degree_AV_block/clean_14009_second degree AV block.png',
      '/ecg/ecg_dataset_clean/2AVB_second_degree_AV_block/clean_16401_second degree AV block.png'
    ]
  },
  '3AVB_third_degree_AV_block': {
    correct: 'Complete Heart Block',
    options: ['Complete Heart Block', 'Second Degree AV Block', 'Junctional Rhythm'],
    explanation: 'Third degree (complete) AV block with complete dissociation between atrial and ventricular activity.',
    category: 'AV Blocks',
    difficulty: 'hard',
    images: [
      '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_07688_third degree AV block.png',
      '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_08210_third degree AV block.png',
      '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_10505_third degree AV block.png',
      '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_16271_third degree AV block.png'
    ]
  },
  'LVH_left_ventricular_hypertrophy': {
    correct: 'Left Ventricular Hypertrophy',
    options: ['Left Ventricular Hypertrophy', 'Right Ventricular Hypertrophy', 'Biventricular Hypertrophy'],
    explanation: 'Left ventricular hypertrophy with increased QRS voltage, left axis deviation, and strain pattern.',
    category: 'Hypertrophy',
    difficulty: 'medium',
    images: [
      '/ecg/ecg_dataset_clean/LVH_left_ventricular_hypertrophy/clean_00030_left ventricular hypertrophy.png',
      '/ecg/ecg_dataset_clean/LVH_left_ventricular_hypertrophy/clean_00096_left ventricular hypertrophy.png',
      '/ecg/ecg_dataset_clean/LVH_left_ventricular_hypertrophy/clean_00138_left ventricular hypertrophy.png',
      '/ecg/ecg_dataset_clean/LVH_left_ventricular_hypertrophy/clean_00173_left ventricular hypertrophy.png',
      '/ecg/ecg_dataset_clean/LVH_left_ventricular_hypertrophy/clean_00191_left ventricular hypertrophy.png'
    ]
  },
  'RVH_right_ventricular_hypertrophy': {
    correct: 'Right Ventricular Hypertrophy',
    options: ['Right Ventricular Hypertrophy', 'Left Ventricular Hypertrophy', 'Pulmonary Embolism'],
    explanation: 'Right ventricular hypertrophy with right axis deviation, tall R in V1, deep S in V6.',
    category: 'Hypertrophy',
    difficulty: 'medium',
    images: [
      '/ecg/ecg_dataset_clean/RVH_right_ventricular_hypertrophy/clean_00222_right ventricular hypertrophy.png',
      '/ecg/ecg_dataset_clean/RVH_right_ventricular_hypertrophy/clean_02417_right ventricular hypertrophy.png',
      '/ecg/ecg_dataset_clean/RVH_right_ventricular_hypertrophy/clean_04713_right ventricular hypertrophy.png',
      '/ecg/ecg_dataset_clean/RVH_right_ventricular_hypertrophy/clean_04794_right ventricular hypertrophy.png',
      '/ecg/ecg_dataset_clean/RVH_right_ventricular_hypertrophy/clean_04868_right ventricular hypertrophy.png'
    ]
  },
  'WPW_Wolf_Parkinson_White_syndrome': {
    correct: 'Wolf-Parkinson-White Syndrome',
    options: ['WPW Syndrome', 'Bundle Branch Block', 'Ventricular Pre-excitation'],
    explanation: 'WPW syndrome with short PR interval, delta waves, and wide QRS due to accessory pathway.',
    category: 'Pre-excitation',
    difficulty: 'hard',
    images: [
      '/ecg/ecg_dataset_clean/WPW_Wolf-Parkinson-White_syndrome/clean_02145_Wolf-Parkinson-White syndrome.png',
      '/ecg/ecg_dataset_clean/WPW_Wolf-Parkinson-White_syndrome/clean_04279_Wolf-Parkinson-White syndrome.png',
      '/ecg/ecg_dataset_clean/WPW_Wolf-Parkinson-White_syndrome/clean_04658_Wolf-Parkinson-White syndrome.png',
      '/ecg/ecg_dataset_clean/WPW_Wolf-Parkinson-White_syndrome/clean_04825_Wolf-Parkinson-White syndrome.png',
      '/ecg/ecg_dataset_clean/WPW_Wolf-Parkinson-White_syndrome/clean_05028_Wolf-Parkinson-White syndrome.png'
    ]
  },
  'LAFB_left_anterior_fascicular_block': {
    correct: 'Left Anterior Fascicular Block',
    options: ['LAFB', 'LPFB', 'Complete LBBB'],
    explanation: 'Left anterior fascicular block with left axis deviation -30° to -90°, small Q in I, aVL.',
    category: 'Fascicular Blocks',
    difficulty: 'medium',
    images: [
      '/ecg/ecg_dataset_clean/LAFB_left_anterior_fascicular_block/clean_00041_left anterior fascicular block.png',
      '/ecg/ecg_dataset_clean/LAFB_left_anterior_fascicular_block/clean_00103_left anterior fascicular block.png',
      '/ecg/ecg_dataset_clean/LAFB_left_anterior_fascicular_block/clean_00157_left anterior fascicular block.png',
      '/ecg/ecg_dataset_clean/LAFB_left_anterior_fascicular_block/clean_00162_left anterior fascicular block.png',
      '/ecg/ecg_dataset_clean/LAFB_left_anterior_fascicular_block/clean_00182_left anterior fascicular block.png'
    ]
  },
  'LNGQT_long_QT_interval': {
    correct: 'Long QT Syndrome',
    options: ['Long QT Syndrome', 'Short QT Syndrome', 'Hypokalemia'],
    explanation: 'Prolonged QT interval >440ms in men, >460ms in women, predisposing to Torsades de Pointes.',
    category: 'QT Abnormalities',
    difficulty: 'medium',
    images: [
      '/ecg/ecg_dataset_clean/LNGQT_long_QT-interval/clean_00039_long QT-interval.png',
      '/ecg/ecg_dataset_clean/LNGQT_long_QT-interval/clean_00260_long QT-interval.png',
      '/ecg/ecg_dataset_clean/LNGQT_long_QT-interval/clean_00320_long QT-interval.png',
      '/ecg/ecg_dataset_clean/LNGQT_long_QT-interval/clean_00907_long QT-interval.png',
      '/ecg/ecg_dataset_clean/LNGQT_long_QT-interval/clean_02221_long QT-interval.png'
    ]
  }
};

// Generate NEET PG style ECG question for Boost Mode
const generateBoostModeQuestion = (id: string): ECGQuestion => {
  const categories = Object.keys(BOOST_MODE_ECG_DATABASE);
  const selectedCategory = categories[Math.floor(Math.random() * categories.length)];
  const categoryData = BOOST_MODE_ECG_DATABASE[selectedCategory as keyof typeof BOOST_MODE_ECG_DATABASE];
  
  // Select random image from the category's image array
  let imagePath = '/ecg/medical_accurate/normal_75bpm.png'; // fallback
  if (categoryData.images && categoryData.images.length > 0) {
    const rawImagePath = categoryData.images[Math.floor(Math.random() * categoryData.images.length)];
    // Handle spaces in filenames by encoding only the filename part
    const pathParts = rawImagePath.split('/');
    const filename = pathParts.pop();
    const encodedFilename = filename ? encodeURIComponent(filename) : '';
    imagePath = pathParts.join('/') + '/' + encodedFilename;
    console.log('Generated image path for boost mode:', imagePath);
  }
  
  // Shuffle options for randomization
  const shuffledOptions = [...categoryData.options].sort(() => Math.random() - 0.5);
  
  return {
    id: `boost_${id}`,
    imageUrl: imagePath,
    correctAnswer: categoryData.correct,
    options: shuffledOptions,
    explanation: categoryData.explanation,
    difficulty: categoryData.difficulty as 'easy' | 'medium' | 'hard',
    category: categoryData.category
  };
};

// Generate unlimited random ECG questions
const generateRandomECGQuestion = (id: string): ECGQuestion => {
  const categories = Object.keys(ECG_IMAGE_LIBRARY);
  const selectedCategory = categories[Math.floor(Math.random() * categories.length)];
  const categoryImages = ECG_IMAGE_LIBRARY[selectedCategory as keyof typeof ECG_IMAGE_LIBRARY];
  const selectedImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
  
  // Define answer options based on category
  const answerMap: Record<string, { correct: string; options: string[]; explanation: string; difficulty: string }> = {
    normal_sinus: {
      correct: 'Normal Sinus Rhythm',
      options: ['Normal Sinus Rhythm', 'Sinus Bradycardia', 'Sinus Tachycardia', 'First Degree AV Block'],
      explanation: 'Normal sinus rhythm with regular P waves, normal PR interval (120-200ms), and regular QRS complexes.',
      difficulty: 'easy'
    },
    bradycardia: {
      correct: 'Sinus Bradycardia',
      options: ['Normal Sinus Rhythm', 'Sinus Bradycardia', 'Junctional Rhythm', 'Second Degree AV Block'],
      explanation: 'Sinus bradycardia with heart rate below 60 BPM but normal P waves and PR intervals.',
      difficulty: 'easy'
    },
    tachycardia: {
      correct: 'Sinus Tachycardia',
      options: ['Normal Sinus Rhythm', 'Sinus Tachycardia', 'Atrial Fibrillation', 'Supraventricular Tachycardia'],
      explanation: 'Sinus tachycardia with heart rate above 100 BPM and normal P wave morphology.',
      difficulty: 'easy'
    },
    atrial_fibrillation: {
      correct: 'Atrial Fibrillation',
      options: ['Atrial Fibrillation', 'Atrial Flutter', 'Multifocal Atrial Tachycardia', 'Sinus Arrhythmia'],
      explanation: 'Atrial fibrillation showing irregularly irregular rhythm with no distinct P waves, only fibrillatory waves.',
      difficulty: 'medium'
    },
    ventricular_tachycardia: {
      correct: 'Ventricular Tachycardia',
      options: ['Sinus Tachycardia', 'Supraventricular Tachycardia', 'Ventricular Tachycardia', 'Atrial Flutter'],
      explanation: 'Ventricular tachycardia shows wide QRS complexes (>120ms) with rapid rate, typically >150 BPM.',
      difficulty: 'hard'
    },
    bundle_branch_blocks: {
      correct: selectedImage.includes('rbbb') ? 'Right Bundle Branch Block' : 'Left Bundle Branch Block',
      options: ['Normal Sinus Rhythm', 'Right Bundle Branch Block', 'Left Bundle Branch Block', 'First Degree AV Block'],
      explanation: selectedImage.includes('rbbb') 
        ? 'Right bundle branch block shows widened QRS complexes with characteristic RSR\' pattern in V1.'
        : 'Left bundle branch block shows wide QRS complexes with broad R waves in lateral leads and no septal Q waves.',
      difficulty: 'hard'
    },
    other_rhythms: {
      correct: selectedImage.includes('pvc') ? 'Premature Ventricular Contractions' :
               selectedImage.includes('atrial_flutter') ? 'Atrial Flutter' :
               selectedImage.includes('supraventricular') ? 'Supraventricular Tachycardia' :
               'First Degree AV Block',
      options: selectedImage.includes('pvc') ? 
               ['Normal Sinus Rhythm', 'Atrial Fibrillation', 'Premature Ventricular Contractions', 'Bundle Branch Block'] :
               selectedImage.includes('atrial_flutter') ?
               ['Atrial Fibrillation', 'Atrial Flutter', 'Supraventricular Tachycardia', 'Ventricular Tachycardia'] :
               selectedImage.includes('supraventricular') ?
               ['Sinus Tachycardia', 'Supraventricular Tachycardia', 'Ventricular Tachycardia', 'Atrial Flutter'] :
               ['Normal Sinus Rhythm', 'First Degree AV Block', 'Second Degree AV Block', 'Third Degree AV Block'],
      explanation: selectedImage.includes('pvc') ? 
                  'PVCs appear as wide, bizarre QRS complexes that occur earlier than expected.' :
                  selectedImage.includes('atrial_flutter') ?
                  'Atrial flutter with characteristic sawtooth pattern of flutter waves.' :
                  selectedImage.includes('supraventricular') ?
                  'SVT shows rapid, regular rhythm with narrow QRS complexes and P waves may be hidden.' :
                  'First degree AV block shows prolonged PR interval (>200ms) but all P waves are conducted.',
      difficulty: selectedImage.includes('pvc') || selectedImage.includes('first_degree') ? 'medium' : 'hard'
    }
  };

  const answerData = answerMap[selectedCategory];
  
  return {
    id,
    imageUrl: selectedImage,
    correctAnswer: answerData.correct,
    options: answerData.options,
    explanation: answerData.explanation,
    difficulty: answerData.difficulty as 'easy' | 'medium' | 'hard',
    category: 'random'
  };
};

// Comprehensive ECG categories for Learn Mode - Expanded with all medical rhythms
const ECG_CATEGORIES = {
  basic: {
    name: 'Normal Sinus Rhythm',
    description: 'Normal cardiac electrical conduction and rhythm patterns',
    icon: Heart,
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
        '/ecg/ecg_dataset_clean/NORM_normal_ECG/clean_00001_normal%20ECG.png',
        '/ecg/ecg_dataset_clean/NORM_normal_ECG/clean_00002_normal%20ECG.png',
        '/ecg/ecg_dataset_clean/NORM_normal_ECG/clean_00003_normal%20ECG.png'
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
    name: 'Anterior STEMI',
    description: 'Anterior ST-elevation myocardial infarction patterns',
    icon: AlertTriangle,
    educational: {
      mechanism: 'Anterior STEMI occurs due to occlusion of the left anterior descending (LAD) coronary artery. This leads to ischemia and necrosis of the anterior wall of the left ventricle, causing characteristic ECG changes in the anterior leads (V1-V4).',
      pathophysiology: 'LAD occlusion causes transmural ischemia of the anterior myocardium. The lack of oxygen leads to cellular injury, membrane depolarization, and eventually cell death. This manifests as ST elevation due to injury current and later Q wave development due to necrosis.',
      ecgChanges: [
        'ST elevation in leads V1-V4 (anterior leads)',
        'Reciprocal ST depression in inferior leads (II, III, aVF)',
        'Development of pathological Q waves in V1-V4',
        'T wave inversion in anterior leads (late finding)',
        'Loss of R wave progression in precordial leads'
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
        '/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00311_anterior%20myocardial%20infarction.png',
        '/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00418_anterior%20myocardial%20infarction.png',
        '/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00486_anterior%20myocardial%20infarction.png'
      ]
    },
    questions: []
  },
  inferior_mi: {
    name: 'Inferior STEMI',
    description: 'Inferior ST-elevation myocardial infarction patterns',
    icon: AlertTriangle,
    educational: {
      mechanism: 'Inferior STEMI results from occlusion of the right coronary artery (RCA) or left circumflex artery (LCX). This causes ischemia and necrosis of the inferior wall of the left ventricle, showing characteristic changes in the inferior leads (II, III, aVF).',
      pathophysiology: 'RCA or LCX occlusion leads to inferior wall ischemia. The RCA supplies the inferior wall, posterior wall, and often the right ventricle. LCX occlusion affects the inferior-lateral wall. Transmural ischemia causes ST elevation and eventual Q wave formation.',
      ecgChanges: [
        'ST elevation in leads II, III, aVF (inferior leads)',
        'Reciprocal ST depression in leads I, aVL',
        'Development of pathological Q waves in II, III, aVF',
        'T wave inversion in inferior leads (later finding)',
        'May have right ventricular involvement (V4R changes)'
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
        '/ecg/ecg_dataset_clean/IMI_inferior_myocardial_infarction/clean_00008_inferior%20myocardial%20infarction.png',
        '/ecg/ecg_dataset_clean/IMI_inferior_myocardial_infarction/clean_00153_inferior%20myocardial%20infarction.png',
        '/ecg/ecg_dataset_clean/IMI_inferior_myocardial_infarction/clean_00161_inferior%20myocardial%20infarction.png'
      ]
    },
    questions: []
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
        '/ecg/ecg_dataset_clean/CLBBB_complete_left_bundle_branch_block/clean_00180_complete%20left%20bundle%20branch%20block.png',
        '/ecg/ecg_dataset_clean/CLBBB_complete_left_bundle_branch_block/clean_00256_complete%20left%20bundle%20branch%20block.png',
        '/ecg/ecg_dataset_clean/CLBBB_complete_left_bundle_branch_block/clean_00279_complete%20left%20bundle%20branch%20block.png'
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
        '/ecg/ecg_dataset_clean/CRBBB_complete_right_bundle_branch_block/clean_00172_complete%20right%20bundle%20branch%20block.png',
        '/ecg/ecg_dataset_clean/CRBBB_complete_right_bundle_branch_block/clean_00195_complete%20right%20bundle%20branch%20block.png',
        '/ecg/ecg_dataset_clean/CRBBB_complete_right_bundle_branch_block/clean_00424_complete%20right%20bundle%20branch%20block.png'
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
        '/ecg/ecg_dataset_clean/1AVB_first_degree_AV_block/clean_00102_first%20degree%20AV%20block.png',
        '/ecg/ecg_dataset_clean/1AVB_first_degree_AV_block/clean_00218_first%20degree%20AV%20block.png',
        '/ecg/ecg_dataset_clean/1AVB_first_degree_AV_block/clean_00522_first%20degree%20AV%20block.png'
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
        '/ecg/ecg_dataset_clean/2AVB_second_degree_AV_block/clean_11209_second%20degree%20AV%20block.png',
        '/ecg/ecg_dataset_clean/2AVB_second_degree_AV_block/clean_13938_second%20degree%20AV%20block.png',
        '/ecg/ecg_dataset_clean/2AVB_second_degree_AV_block/clean_14009_second%20degree%20AV%20block.png'
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
        '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_07688_third%20degree%20AV%20block.png',
        '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_08210_third%20degree%20AV%20block.png',
        '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_10505_third%20degree%20AV%20block.png'
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
        '/ecg/ecg_dataset_clean/LVH_left_ventricular_hypertrophy/clean_00030_left%20ventricular%20hypertrophy.png',
        '/ecg/ecg_dataset_clean/LVH_left_ventricular_hypertrophy/clean_00096_left%20ventricular%20hypertrophy.png',
        '/ecg/ecg_dataset_clean/LVH_left_ventricular_hypertrophy/clean_00138_left%20ventricular%20hypertrophy.png'
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
        '/ecg/ecg_dataset_clean/RVH_right_ventricular_hypertrophy/clean_00222_right%20ventricular%20hypertrophy.png',
        '/ecg/ecg_dataset_clean/RVH_right_ventricular_hypertrophy/clean_02417_right%20ventricular%20hypertrophy.png',
        '/ecg/ecg_dataset_clean/RVH_right_ventricular_hypertrophy/clean_04713_right%20ventricular%20hypertrophy.png'
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
  }
};

const ECGSimulator: React.FC<ECGSimulatorProps> = ({ onBack }) => {
  // Sound effects and XP system hooks
  const { playCorrectSound, playErrorSound, playRewardSound, playPageTurnSound } = useUISounds();
  const { awardXP } = usePulseStore();

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
      playPageTurnSound();
      setCurrentEducationalSlide(Math.min(totalSlides - 1, currentEducationalSlide + 1));
    }
    
    if (isRightSwipe && currentView === 'educational') {
      // Swipe right - previous slide  
      playPageTurnSound();
      setCurrentEducationalSlide(Math.max(0, currentEducationalSlide - 1));
    }
  };
  
  // Game progress
  const [score, setScore] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
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
    if (!selectedCategory) return;
    
    // Play page turn sound for navigation
    playPageTurnSound();
    
    let question: ECGQuestion;
    
    // Generate next question using appropriate generator for unlimited challenges
    if (selectedCategory === 'mixed' || selectedMode === 'practice' || selectedMode === 'challenge' || selectedMode === 'boost') {
      question = selectedMode === 'boost' 
        ? generateBoostModeQuestion(`${selectedMode}_${Date.now()}`)
        : generateRandomECGQuestion(`${selectedMode}_${Date.now()}`);
    } else {
      question = generateQuestion(selectedCategory);
    }
    
    setCurrentQuestion(question);
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
  };

  const handleAnswer = async (answer: string) => {
    if (!currentQuestion || userAnswer) return;
    
    setUserAnswer(answer);
    const isCorrect = answer === currentQuestion.correctAnswer;
    setIsAnswerCorrect(isCorrect);
    
    if (isCorrect) {
      // Play success sound
      playCorrectSound();
      
      // Award 15 XP for correct answers in boost/challenge modes
      if (selectedMode === 'boost' || selectedMode === 'challenge') {
        try {
          await awardXP(15);
          setXpAwarded(15);
          // Play reward sound for XP
          playRewardSound();
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
      playErrorSound();
      setXpAwarded(0);
      setStreak(0);
    }
    
    setQuestionsAnswered(questionsAnswered + 1);
    
    // Show answer feedback popup instead of inline answer
    setShowAnswerFeedback(true);
  };

  // Continue to next question from feedback popup
  const continueToNextQuestion = async () => {
    setShowAnswerFeedback(false);
    setUserAnswer(null);
    setXpAwarded(0);
    setIsAnswerCorrect(false);
    
    // Reset image states for new question
    setImageLoading(true);
    setImageError(false);
    
    // Play page turn sound for flashcard-style navigation
    playPageTurnSound();
    
    await nextQuestion();
  };

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
                {isBoostMode ? 'What is the most likely ECG diagnosis?' : 'What rhythm is shown in this ECG?'}
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
                      <p className="text-blue-700 text-sm leading-relaxed">
                        {currentQuestion.explanation}
                      </p>
                    </motion.div>

                    {/* Continue Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button
                        onClick={continueToNextQuestion}
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

  // Educational view - Mobile-optimized swipeable
  if (currentView === 'educational' && selectedEducationalCategory) {
    const categoryData = ECG_CATEGORIES[selectedEducationalCategory as keyof typeof ECG_CATEGORIES];
    
    // Prepare content slides for mobile swiping
    const slides = [
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
    ];

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
                  playPageTurnSound();
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

              {/* ECG Image Section */}
              <div className="p-4 sm:p-6">
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
              </div>

              {/* Navigation Controls - Hidden on mobile, use swipe instead */}
              <div className="p-4 sm:p-6 border-t border-white/20 hidden sm:block">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => {
                      playPageTurnSound();
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
                        playPageTurnSound();
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

  return null;
};

export default ECGSimulator;