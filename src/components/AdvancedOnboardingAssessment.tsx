import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { QuizLayoutFixed } from './QuizLayoutFixed';
import { 
  CheckCircle,
  XCircle,
  Clock,
  Zap,
  ArrowLeft
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { auth, db } from '@/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { useUISounds } from '@/hooks/useUISounds';
import AnimationFeedback from '@/components/ui/AnimationFeedback';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

interface OnboardingData {
  professionCategory: 'physician' | 'nursing' | 'student' | 'allied-health';
  professionRole: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  assessmentScore: number;
  assessmentAnswers: number[];
  timeSpent: number;
  recommendedModule: number;
  learningGoals: string;
  dailyGoal: string;
  studySchedule: string;
}

interface AssessmentQuestion {
  id: string;
  question: string;
  imageUrl: string;
  imageAlt: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: string;
  points: number;
}

interface AdvancedOnboardingAssessmentProps {
  onComplete: (data: OnboardingData) => void;
  onBack?: () => void;
  userId: string;
}

// Enhanced utility functions for onboarding management
const OnboardingManager = {
  // Check if user has completed onboarding
  hasCompletedOnboarding: (): boolean => {
    return localStorage.getItem('ecg-onboarding-completed') === 'true';
  },

  // Mark onboarding as completed
  markOnboardingComplete: (): void => {
    localStorage.setItem('ecg-onboarding-completed', 'true');
    localStorage.setItem('ecg-onboarding-completion-date', new Date().toISOString());
  },

  // Get onboarding data from local storage
  getStoredOnboardingData: (): OnboardingData | null => {
    const stored = localStorage.getItem('ecg-onboarding-data');
    return stored ? JSON.parse(stored) : null;
  },

  // Store onboarding data
  storeOnboardingData: (data: OnboardingData): void => {
    localStorage.setItem('ecg-onboarding-data', JSON.stringify(data));
  },

  // Check if this is first app launch
  isFirstAppLaunch: (): boolean => {
    return !localStorage.getItem('ecg-app-launched');
  },

  // Mark app as launched
  markAppLaunched: (): void => {
    localStorage.setItem('ecg-app-launched', 'true');
    localStorage.setItem('ecg-first-launch-date', new Date().toISOString());
  },

  // Save to Firebase if user is authenticated
  saveToFirebase: async (userId: string, data: OnboardingData): Promise<void> => {
    if (!auth.currentUser) return;
    
    try {
      const userRef = doc(db, 'users', userId);
      await setDoc(userRef, {
        ...data,
        onboardingCompleted: true,
        onboardingCompletedAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString()
      }, { merge: true });
      
      console.log('✅ Onboarding data saved to Firebase');
    } catch (error) {
      console.error('❌ Failed to save onboarding data to Firebase:', error);
      throw error;
    }
  }
};

const AdvancedOnboardingAssessment: React.FC<AdvancedOnboardingAssessmentProps> = ({ 
  onComplete, 
  onBack,
  userId 
}) => {
  const [currentStep, setCurrentStep] = useState<'profession' | 'experience' | 'assessment' | 'personalization' | 'complete'>('profession');
  const [onboardingData, setOnboardingData] = useState<Partial<OnboardingData>>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [startTime] = useState(Date.now());
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(false);
  
  // Enhanced UI sounds for better UX
  const uiSounds = useUISounds();
  console.log('🔊 Available UI sounds:', Object.keys(uiSounds));
  const { playClickSound, playPageTurnSound, playCorrectSound, playErrorSound, playRewardSound } = uiSounds;

  // Safe wrapper for page turn sound
  const safePlayPageTurnSound = useCallback(() => {
    if (typeof playPageTurnSound === 'function') {
      playPageTurnSound();
    } else {
      console.warn('⚠️ playPageTurnSound is not available:', typeof playPageTurnSound);
    }
  }, [playPageTurnSound]);

  // Safe wrapper for reward sound
  const safePlayRewardSound = useCallback(() => {
    if (typeof playRewardSound === 'function') {
      playRewardSound();
    } else {
      console.warn('⚠️ playRewardSound is not available:', typeof playRewardSound);
    }
  }, [playRewardSound]);

  // Check if onboarding should be shown on component mount
  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        // For authenticated users, check Firebase + localStorage
        if (auth.currentUser && userId !== 'guest-user') {
          const userRef = doc(db, 'users', userId);
          const userDoc = await getDoc(userRef);
          const firebaseCompleted = userDoc.exists() && userDoc.data()?.onboardingCompleted;
          const localCompleted = OnboardingManager.hasCompletedOnboarding();
          
          // If both say completed, don't show onboarding
          if (firebaseCompleted && localCompleted) {
            console.log('✅ Onboarding already completed - skipping');
            return;
          }
        } else {
          // For guest users, only check localStorage
          if (OnboardingManager.hasCompletedOnboarding()) {
            console.log('✅ Guest onboarding already completed - skipping');
            return;
          }
        }

        // Mark app as launched if first time
        if (OnboardingManager.isFirstAppLaunch()) {
          OnboardingManager.markAppLaunched();
          console.log('🚀 First app launch detected');
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
      }
    };

    checkOnboardingStatus();
  }, [userId]);

  // Enhanced completion handler with Firebase integration
  const handleComplete = async (finalData: OnboardingData) => {
    console.log('🚀 AdvancedOnboarding: handleComplete called with data:', finalData);
    setIsLoading(true);
    try {
      // Always store locally first
      OnboardingManager.storeOnboardingData(finalData);
      OnboardingManager.markOnboardingComplete();

      // Save to Firebase if authenticated
      if (auth.currentUser && userId !== 'guest-user') {
        await OnboardingManager.saveToFirebase(userId, finalData);
        
        toast({
          title: "Welcome! 🎉",
          description: `Profile saved! Starting with Module ${finalData.recommendedModule}.`,
        });
      } else {
        toast({
          title: "Profile Created! 🎯",
          description: `Starting with Module ${finalData.recommendedModule}. Sign in to save progress.`,
        });
      }

      // Call parent completion handler
      console.log('🚀 AdvancedOnboarding: Calling onComplete callback with data');
      onComplete(finalData);
    } catch (error) {
      console.error('Error completing onboarding:', error);
      toast({
        title: "Error",
        description: "Failed to save your profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Professional categories with compact design
  const professionCategories = {
    physician: {
      title: '🩺 PHYSICIAN',
      roles: [
        'Attending Physician',
        'Resident (PGY 1-3)', 
        'Fellow (Cardiology)',
        'Emergency Medicine',
        'Internal Medicine'
      ]
    },
    nursing: {
      title: '👩‍⚕️ NURSING',
      roles: [
        'Registered Nurse (RN)',
        'Nurse Practitioner (NP)',
        'ICU/CCU Nurse',
        'Cardiac Nurse',
        'Emergency Nurse'
      ]
    },
    student: {
      title: '🎓 STUDENT',
      roles: [
        'Medical Student (MS1-MS4)',
        'Nursing Student (BSN)',
        'PA Student',
        'Pre-med Student'
      ]
    },
    'allied-health': {
      title: '🏥 ALLIED HEALTH',
      roles: [
        'Paramedic/EMT',
        'Respiratory Therapist',
        'ECG Technician',
        'Cardiac Technologist'
      ]
    }
  };

  // Advanced ECG Assessment Questions with Medical Accurate ECG Images
  const assessmentQuestions: AssessmentQuestion[] = [
    // BEGINNER LEVEL QUESTIONS (easier, more basic)
    {
      id: 'q1',
      question: 'What type of rhythm pattern is shown in this ECG?',
      imageUrl: '/ecg/medical_accurate/normal_75bpm.png',
      imageAlt: 'Normal ECG showing regular sinus rhythm',
      options: [
        'Regular sinus rhythm',
        'Irregular rhythm', 
        'Complete heart block',
        'Atrial fibrillation'
      ],
      correct: 0,
      explanation: 'This shows a normal sinus rhythm with regular P waves preceding each QRS complex, consistent PR intervals, and regular R-R intervals throughout the strip.',
      difficulty: 'beginner',
      category: 'Basic Rhythm Recognition',
      points: 5
    },
    {
      id: 'q2',
      question: 'Is this heart rhythm regular or irregular?',
      imageUrl: '/ecg/medical_accurate/atrial_fibrillation_120bpm_5.png',
      imageAlt: 'ECG showing atrial fibrillation with irregular rhythm',
      options: [
        'Irregular rhythm',
        'Regular rhythm',
        'Cannot determine from this strip',
        'Only slightly irregular'
      ],
      correct: 0,
      explanation: 'This shows an irregular rhythm typical of atrial fibrillation. The R-R intervals vary significantly, and there are no clear P waves visible.',
      difficulty: 'intermediate',
      category: 'Rhythm Analysis',
      points: 8
    },
    {
      id: 'q3',
      question: 'What is the most characteristic feature of this ECG rhythm?',
      imageUrl: '/ecg/medical_accurate/pvc_85bpm_3.png',
      imageAlt: 'ECG showing premature ventricular contractions',
      options: [
        'Wide, bizarre QRS complexes occurring early',
        'Narrow QRS complexes with regular timing',
        'Absent P waves throughout the strip',
        'Elevated ST segments in multiple leads'
      ],
      correct: 0,
      explanation: 'Premature ventricular contractions (PVCs) appear as wide, bizarre QRS complexes that occur earlier than expected. They originate from the ventricles and disrupt the normal rhythm.',
      difficulty: 'intermediate',
      category: 'Ectopic Rhythms',
      points: 10
    },
    
    // INTERMEDIATE TO ADVANCED QUESTIONS
    {
      id: 'q4',
      question: 'Analyze this ECG strip. What is the most likely rhythm diagnosis?',
      imageUrl: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png',
      imageAlt: 'Medical ECG showing ventricular tachycardia',
      options: [
        'Ventricular tachycardia',
        'Supraventricular tachycardia with aberrancy',
        'Sinus tachycardia',
        'Atrial flutter with 2:1 conduction'
      ],
      correct: 0,
      explanation: 'This shows ventricular tachycardia - wide complex tachycardia >100 bpm with QRS >120ms, suggesting ventricular origin. This is a life-threatening arrhythmia requiring immediate intervention.',
      difficulty: 'advanced',
      category: 'Critical Arrhythmias',
      points: 15
    },
    {
      id: 'q5',
      question: 'What conduction abnormality is demonstrated in this rhythm strip?',
      imageUrl: '/ecg/medical_accurate/first_degree_av_block_70bpm_2.png',
      imageAlt: 'Medical ECG showing first degree AV block',
      options: [
        'First degree heart block',
        'Second degree heart block Type I',
        'Second degree heart block Type II',
        'Complete heart block (3rd degree)'
      ],
      correct: 0,
      explanation: 'First degree AV block shows prolonged PR interval >200ms (0.20 seconds) with consistent 1:1 AV conduction. All P waves are followed by QRS complexes.',
      difficulty: 'intermediate',
      category: 'Conduction Disorders',
      points: 10
    },
    {
      id: 'q6',
      question: 'What rhythm abnormality is demonstrated in this ECG?',
      imageUrl: '/ecg/medical_accurate/pvc_85bpm_3.png',
      imageAlt: 'Medical ECG showing premature ventricular contractions',
      options: [
        'Premature ventricular contractions (PVCs)',
        'Premature atrial contractions (PACs)',
        'Atrial fibrillation',
        'Ventricular bigeminy'
      ],
      correct: 0,
      explanation: 'Premature ventricular contractions (PVCs) appear as wide, bizarre QRS complexes that occur earlier than expected. They originate from the ventricles and disrupt the normal rhythm.',
      difficulty: 'intermediate',
      category: 'Ectopic Rhythms',
      points: 10
    },
    
    // MORE ADVANCED QUESTIONS
    {
      id: 'q7',
      question: 'Identify this complex arrhythmia pattern:',
      imageUrl: '/ecg/medical_accurate/ventricular_tachycardia_210bpm_5.png',
      imageAlt: 'Medical ECG showing torsades de pointes',
      options: [
        'Torsades de pointes',
        'Ventricular fibrillation',
        'Atrial fibrillation with RVR',
        'Polymorphic ventricular tachycardia'
      ],
      correct: 0,
      explanation: 'Torsades de pointes is a specific type of polymorphic ventricular tachycardia characterized by QRS complexes that appear to twist around the baseline. It\'s often associated with prolonged QT interval.',
      difficulty: 'expert',
      category: 'Complex Arrhythmias',
      points: 20
    },
    {
      id: 'q8',
      question: 'What type of heart block pattern is shown in this ECG?',
      imageUrl: '/ecg/medical_accurate/bradycardia_40bpm.png',
      imageAlt: 'Medical ECG showing complete heart block',
      options: [
        'Complete heart block (3rd degree)',
        'Second degree heart block Type II',
        'Second degree heart block Type I',
        'First degree heart block with bradycardia'
      ],
      correct: 0,
      explanation: 'Complete (third degree) heart block shows complete AV dissociation. P waves and QRS complexes are independent, with no relationship between atrial and ventricular activity.',
      difficulty: 'advanced',
      category: 'Advanced Conduction Disorders',
      points: 15
    },
    {
      id: 'q9',
      question: 'Analyze this arrhythmia. What is the underlying rhythm mechanism?',
      imageUrl: '/ecg/medical_accurate/supraventricular_tachycardia_160bpm_1.png',
      imageAlt: 'Medical ECG showing supraventricular tachycardia',
      options: [
        'Supraventricular tachycardia (SVT)',
        'Ventricular tachycardia',
        'Sinus tachycardia',
        'Atrial flutter'
      ],
      correct: 0,
      explanation: 'Supraventricular tachycardia (SVT) typically shows narrow QRS complexes with regular, rapid rhythm >150 bpm. The QRS width <120ms suggests supraventricular origin.',
      difficulty: 'intermediate',
      category: 'Tachyarrhythmias',
      points: 12
    }
  ];

  // Get questions based on experience level (memoized to prevent infinite re-renders)
  const questions = useMemo(() => {
    const getQuestionsForLevel = (level: 'beginner' | 'intermediate' | 'advanced') => {
      if (level === 'beginner') {
        // Select the 3 most beginner-friendly questions
        // These focus on basic rhythm recognition, regularity assessment, and ectopic beat identification
        return assessmentQuestions.slice(0, 3); // q1: Normal rhythm, q2: Regular vs irregular, q3: PVC recognition
      } else if (level === 'intermediate') {
        // Mix of beginner and intermediate questions (4 questions)
        return assessmentQuestions.slice(0, 6); // Include PVCs, AV blocks, and some advanced patterns
      } else {
        // All questions for advanced users (includes expert-level arrhythmias)
        return assessmentQuestions; // All 9 questions including torsades, complete heart block, etc.
      }
    };

    return onboardingData.experienceLevel 
      ? getQuestionsForLevel(onboardingData.experienceLevel)
      : assessmentQuestions.slice(0, 3); // Default to beginner level
  }, [onboardingData.experienceLevel]);

  const currentQuestionData = (questions.length > 0 && currentQuestion < questions.length) 
    ? questions[currentQuestion] 
    : questions[0];

  useEffect(() => {
    if (currentQuestionData && currentQuestion < questions.length) {
      setQuestionStartTime(Date.now());
    }
  }, [currentQuestion]);

  // Reset current question when questions array changes
  useEffect(() => {
    if (questions.length > 0 && currentQuestion >= questions.length) {
      setCurrentQuestion(0);
      setAnswers([]);
      setShowExplanation(false);
      setSelectedAnswer(null);
    }
  }, [questions.length, currentQuestion]);

  const handleAnswer = (answerIndex: number) => {
    if (showExplanation) return;
    
    playClickSound();
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    setShowExplanation(true);
    
    // Play success or error sound based on correctness
    const isCorrect = answerIndex === questions[currentQuestion].correct;
    setTimeout(() => {
      if (isCorrect) {
        playCorrectSound();
      } else {
        playErrorSound();
      }
    }, 300);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        safePlayPageTurnSound();
        setCurrentQuestion(currentQuestion + 1);
        setShowExplanation(false);
        setSelectedAnswer(null);
      } else {
        // Calculate score and determine module placement
        const correctAnswers = newAnswers.reduce((count, answer, index) => {
          return count + (answer === questions[index].correct ? 1 : 0);
        }, 0);
        
        const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
        const earnedPoints = newAnswers.reduce((sum, answer, index) => {
          return sum + (answer === questions[index].correct ? questions[index].points : 0);
        }, 0);
        
        const percentage = (earnedPoints / totalPoints) * 100;
        
        let recommendedModule = 1;
        if (percentage >= 85) recommendedModule = 4; // Advanced modules
        else if (percentage >= 70) recommendedModule = 3; // Intermediate-advanced
        else if (percentage >= 50) recommendedModule = 2; // Intermediate
        
        const timeSpent = Date.now() - startTime;
        
        setOnboardingData(prev => ({ 
          ...prev, 
          assessmentScore: correctAnswers,
          assessmentAnswers: newAnswers,
          timeSpent,
          recommendedModule 
        }));
        playRewardSound();
        setCurrentStep('personalization');
      }
    }, 3000);
  };

  const handleSkipOnboarding = async () => {
    playClickSound();
    
    // Set default onboarding data for skip
    const defaultData: OnboardingData = {
      professionCategory: 'student',
      professionRole: 'Pre-Med Student',
      experienceLevel: 'beginner',
      assessmentScore: 0,
      assessmentAnswers: [],
      timeSpent: 0,
      recommendedModule: 1,
      learningGoals: 'Learn ECG basics',
      dailyGoal: '15',
      studySchedule: 'flexible'
    };
    
    toast({
      title: "Quick Start! ⚡",
      description: "Starting with basics. Complete profile later in settings.",
      duration: 3000,
    });
    
    playRewardSound();
    
    // Call onComplete immediately for Android navigation fix
    console.log('🚀 Skip: Calling onComplete callback immediately');
    onComplete(defaultData);
  };

  const renderProfessionSelection = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 p-4 h-full flex flex-col"
    >
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-800">
          Choose Your Profession
        </h2>
        <p className="text-sm text-gray-600">
          This helps us personalize your learning experience
        </p>
      </div>
      
      {/* Skip Onboarding Option */}
      <div className="flex justify-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            console.log('🎯 SKIP BUTTON CLICKED');
            try {
              playClickSound();
              console.log('🎯 Calling handleSkipOnboarding');
              handleSkipOnboarding();
            } catch (error) {
              console.error('❌ Error in skip button:', error);
            }
          }}
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Skip for now →
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-3 flex-1">
        {Object.entries(professionCategories).map(([key, category], index) => {
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Card 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-400 active:scale-[0.98] bg-gradient-to-r from-white to-blue-50"
                onClick={() => {
                  console.log('🎯 PROFESSION CARD CLICKED:', key);
                  try {
                    playClickSound();
                    // Safe call for page turn sound
                    if (typeof playPageTurnSound === 'function') {
                      playPageTurnSound();
                    } else {
                      console.warn('⚠️ playPageTurnSound is not available:', typeof playPageTurnSound);
                    }
                    console.log('🎯 Setting profession category:', key);
                    setOnboardingData(prev => ({ ...prev, professionCategory: key as any }));
                    console.log('🎯 Setting current step to experience');
                    setCurrentStep('experience');
                    console.log('🎯 Profession selection complete');
                  } catch (error) {
                    console.error('❌ Error in profession selection:', error);
                  }
                }}
              >
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-sm font-bold text-gray-800">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-3">
                  <div className="text-center">
                    <Badge variant="outline" className="text-xs px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
                      {category.roles.length} specializations
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );

  const renderExperienceLevel = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 p-4 h-full flex flex-col"
    >
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-800">
          Experience Level
        </h2>
        <p className="text-sm text-gray-600">
          Help us customize your learning path
        </p>
      </div>

      <div className="space-y-3 flex-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-green-400 active:scale-[0.98] bg-gradient-to-r from-green-50 to-white"
            onClick={() => {
              playClickSound();
              safePlayPageTurnSound();
              setOnboardingData(prev => ({ 
                ...prev, 
                experienceLevel: 'beginner',
                recommendedModule: 1,
                assessmentScore: 0
              }));
              setCurrentStep('personalization');
            }}
          >
            <CardHeader className="text-center py-4">
              <CardTitle className="text-green-600 text-lg font-bold">🌱 BEGINNER</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0 pb-4">
              <p className="text-sm text-gray-700 mb-3">
                New to ECG fundamentals and cardiac anatomy
              </p>
              <Badge variant="outline" className="bg-green-100 text-green-700 border-green-300 px-3 py-2">
                Start with Module 1
              </Badge>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-400 active:scale-[0.98] bg-gradient-to-r from-blue-50 to-white"
            onClick={() => {
              playClickSound();
              safePlayPageTurnSound();
              setOnboardingData(prev => ({ ...prev, experienceLevel: 'intermediate' }));
              setCurrentStep('assessment');
            }}
          >
            <CardHeader className="text-center py-4">
              <CardTitle className="text-blue-600 text-lg font-bold">📚 INTERMEDIATE</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0 pb-4">
              <p className="text-sm text-gray-700 mb-3">
                Some ECG knowledge - take assessment to find your level
              </p>
              <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300 px-3 py-2">
                Take Assessment (6 questions)
              </Badge>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-400 active:scale-[0.98] bg-gradient-to-r from-purple-50 to-white"
            onClick={() => {
              playClickSound();
              safePlayPageTurnSound();
              setOnboardingData(prev => ({ ...prev, experienceLevel: 'advanced' }));
              setCurrentStep('assessment');
            }}
          >
            <CardHeader className="text-center py-4">
              <CardTitle className="text-purple-600 text-lg font-bold">⚡ ADVANCED</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0 pb-4">
              <p className="text-sm text-gray-700 mb-3">
                Confident with ECGs - take full assessment
              </p>
              <Badge variant="outline" className="bg-purple-100 text-purple-700 border-purple-300 px-3 py-2">
                Full Assessment (9 questions)
              </Badge>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Back button */}
      <div className="pt-4">
        <Button
          variant="ghost"
          onClick={() => {
            playClickSound();
            setCurrentStep('profession');
          }}
          className="w-full text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </div>
    </motion.div>
  );

  const renderAssessment = () => {
    const currentQuestionData = questions[currentQuestion];
    
    // Add bounds checking to prevent crashes
    if (!currentQuestionData || currentQuestion >= questions.length) {
      console.warn('Invalid question index:', currentQuestion, 'of', questions.length);
      return <div>Loading question...</div>;
    }
    
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full flex flex-col max-h-screen overflow-hidden"
      >
        {/* Compact Progress Header */}
        <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                playClickSound();
                setCurrentStep('experience');
              }}
              className="p-1"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex-1 mx-3">
              <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                <span>Question {currentQuestion + 1}</span>
                <span>{questions.length} total</span>
              </div>
              <Progress 
                value={((currentQuestion + 1) / questions.length) * 100} 
                className="h-2 bg-gray-200"
              />
            </div>
            
            <div className="text-xs text-gray-500 min-w-[3rem] text-right">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </div>
          </div>
        </div>

        {/* Mobile-optimized Quiz Content */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full px-2 py-1">
            {/* Question */}
            <div className="mb-2">
              <h3 className="text-sm font-semibold text-gray-800 leading-tight">
                {currentQuestionData.question}
              </h3>
            </div>

            {/* ECG Image - Compact Medical Accurate */}
            <div className="mb-3">
              <div className="relative bg-white rounded-lg border shadow-sm max-w-lg mx-auto overflow-hidden">
                <img 
                  src={currentQuestionData.imageUrl}
                  alt={currentQuestionData.imageAlt}
                  className="w-full h-auto object-contain rounded-lg"
                  style={{ 
                    imageRendering: 'crisp-edges',
                    maxHeight: '200px',
                    minHeight: '120px'
                  }}
                  onLoad={() => {
                    console.log('✅ ECG Image loaded successfully:', currentQuestionData.imageUrl);
                  }}
                  onError={(e) => {
                    console.error('❌ Failed to load ECG image:', currentQuestionData.imageUrl);
                    console.error('Error details:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Answer Options - Compact */}
            <div className="space-y-2 mb-3">
              {currentQuestionData.options.map((option, index) => (
                <div key={index}>
                  <Button
                    variant="outline"
                    className={`w-full text-left p-3 h-auto text-xs transition-all duration-200 ${
                      selectedAnswer === index 
                        ? showExplanation
                          ? index === currentQuestionData.correct
                            ? 'bg-green-100 border-green-400 text-green-800'
                            : 'bg-red-100 border-red-400 text-red-800'
                          : 'bg-blue-100 border-blue-400 text-blue-800'
                        : 'bg-white hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      if (!showExplanation) {
                        playClickSound();
                        handleAnswer(index);
                      }
                    }}
                    disabled={showExplanation}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="flex-1 text-left">{option}</span>
                      {selectedAnswer === index && showExplanation && (
                        <div className="ml-2">
                          {index === currentQuestionData.correct ? (
                            <span className="text-green-600">✓</span>
                          ) : (
                            <span className="text-red-600">✗</span>
                          )}
                        </div>
                      )}
                    </div>
                  </Button>
                </div>
              ))}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className="mb-3">
                <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                  <CardContent className="p-3">
                    <div className="flex items-start space-x-2">
                      <div className="text-blue-600 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          {currentQuestionData.explanation}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 bg-white border-t"
          >
            <Button
              onClick={() => {
                console.log('🎯 BUTTON CLICKED: currentQuestion =', currentQuestion, 'questions.length =', questions.length);
                safePlayPageTurnSound();
                if (currentQuestion < questions.length - 1) {
                  console.log('🎯 NEXT QUESTION: Moving to next question');
                  setCurrentQuestion(curr => curr + 1);
                  setSelectedAnswer(null);
                  setShowExplanation(false);
                  setQuestionStartTime(Date.now());
                } else {
                  console.log('🎯 COMPLETE ASSESSMENT: Starting final score calculation');
                  // Finish assessment - calculate final score and proceed
                  const finalAnswers = [...answers];
                  const correctAnswers = finalAnswers.reduce((count, answer, index) => {
                    return count + (answer === questions[index].correct ? 1 : 0);
                  }, 0);
                  
                  const totalPoints = questions.reduce((sum, q) => sum + q.points, 0);
                  const earnedPoints = finalAnswers.reduce((sum, answer, index) => {
                    return sum + (answer === questions[index].correct ? questions[index].points : 0);
                  }, 0);
                  
                  const percentage = (earnedPoints / totalPoints) * 100;
                  
                  let recommendedModule = 1;
                  if (percentage >= 85) recommendedModule = 4;
                  else if (percentage >= 70) recommendedModule = 3;
                  else if (percentage >= 50) recommendedModule = 2;
                  
                  const timeSpent = Date.now() - startTime;
                  
                  setOnboardingData(prev => ({ 
                    ...prev, 
                    assessmentScore: correctAnswers,
                    assessmentAnswers: finalAnswers,
                    timeSpent,
                    recommendedModule 
                  }));
                  console.log('🎯 COMPLETE ASSESSMENT: Final score calculated, calling safePlayRewardSound');
                  safePlayRewardSound();
                  console.log('🎯 COMPLETE ASSESSMENT: Setting current step to personalization');
                  setCurrentStep('personalization');
                }
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3"
            >
              {currentQuestion < questions.length - 1 ? (
                <>Next Question →</>
              ) : (
                <>Complete Assessment ✅</>
              )}
            </Button>
          </motion.div>
        )}

        {/* Question Category Badge */}
        <div className="absolute top-16 right-3">
          <Badge 
            variant="outline" 
            className={`text-xs px-2 py-1 ${
              currentQuestionData.difficulty === 'beginner' ? 'bg-green-50 border-green-300 text-green-700' :
              currentQuestionData.difficulty === 'intermediate' ? 'bg-blue-50 border-blue-300 text-blue-700' :
              'bg-purple-50 border-purple-300 text-purple-700'
            }`}
          >
            {currentQuestionData.category}
          </Badge>
        </div>
      </motion.div>
    );
  };

  const renderPersonalization = () => (
    <div className="space-y-3 p-2">
      <h2 className="text-base font-bold text-center text-gray-800">
        Study Preferences
      </h2>

      <div className="space-y-3">
        {/* Daily Study Time */}
        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-2 pt-3">
            <CardTitle className="text-sm font-semibold text-gray-700 flex items-center">
              <Clock className="w-4 h-4 mr-2 text-blue-500" />
              Daily Study Time
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0 pb-3">
            {[
              { time: '15 min/day', emoji: '⚡' },
              { time: '30 min/day', emoji: '📚' },
              { time: '1 hour/day', emoji: '🎯' },
              { time: 'Flexible', emoji: '🌊' }
            ].map((option) => (
              <Button
                key={option.time}
                variant={onboardingData.learningGoals === option.time ? "default" : "outline"}
                className={`w-full text-left py-2 px-3 text-xs transition-all duration-200 ${
                  onboardingData.learningGoals === option.time 
                    ? 'bg-blue-500 text-white border-0' 
                    : 'bg-white hover:bg-blue-50 border border-gray-200'
                }`}
                onClick={() => {
                  playClickSound();
                  setOnboardingData(prev => ({ ...prev, learningGoals: option.time }));
                }}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <span>{option.emoji}</span>
                    <span className="font-medium">{option.time}</span>
                  </div>
                  {onboardingData.learningGoals === option.time && (
                    <CheckCircle className="w-3 h-3" />
                  )}
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Daily Goals */}
        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-2 pt-3">
            <CardTitle className="text-sm font-semibold text-gray-700 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-green-500" />
              Daily XP Goal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0 pb-3">
            {[
              { goal: '50', emoji: '🌱' },
              { goal: '100', emoji: '📈' },
              { goal: '200', emoji: '🚀' },
              { goal: 'No limit', emoji: '♾️' }
            ].map((option) => (
              <Button
                key={option.goal}
                variant={onboardingData.dailyGoal === option.goal ? "default" : "outline"}
                className={`w-full text-left py-2 px-3 text-xs transition-all duration-200 ${
                  onboardingData.dailyGoal === option.goal 
                    ? 'bg-green-500 text-white border-0' 
                    : 'bg-white hover:bg-green-50 border border-gray-200'
                }`}
                onClick={() => {
                  playClickSound();
                  setOnboardingData(prev => ({ ...prev, dailyGoal: option.goal }));
                }}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <span>{option.emoji}</span>
                    <span className="font-medium">{option.goal} XP</span>
                  </div>
                  {onboardingData.dailyGoal === option.goal && (
                    <CheckCircle className="w-3 h-3" />
                  )}
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="pt-3">
        <Button
          onClick={() => {
            playClickSound();
            // Set default schedule if not selected
            if (!onboardingData.studySchedule) {
              setOnboardingData(prev => ({ ...prev, studySchedule: 'flexible' }));
            }
            playRewardSound();
            setCurrentStep('complete');
          }}
          disabled={!onboardingData.learningGoals || !onboardingData.dailyGoal}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 disabled:opacity-50"
        >
          Complete Setup →
        </Button>
      </div>
    </div>
  );

  const renderComplete = () => {
    const scorePercentage = onboardingData.assessmentScore 
      ? Math.round((onboardingData.assessmentScore / questions.length) * 100)
      : 0;

    return (
      <div className="text-center space-y-6 p-4">
        <div className="space-y-4">
          <div className="text-6xl animate-bounce">🎉</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-800">Setup Complete!</h1>
          <p className="text-base text-gray-600 leading-relaxed">
            Your personalized learning journey is ready to begin.
          </p>
        </div>

        <Card className="max-w-sm mx-auto bg-white/90 backdrop-blur-sm border-2 border-purple-100 shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="text-purple-600 text-lg font-semibold">Your Learning Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-gray-700">Profession:</span>
              <Badge className="capitalize text-sm px-3 py-1 bg-purple-100 text-purple-800 border-purple-200">
                {onboardingData.professionCategory}
              </Badge>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-gray-700">Experience:</span>
              <Badge variant="outline" className="capitalize text-sm px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
                {onboardingData.experienceLevel}
              </Badge>
            </div>
            {onboardingData.assessmentScore !== undefined && (
              <>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-gray-700">Score:</span>
                  <Badge variant="outline" className="text-sm px-3 py-1 bg-gray-50 text-gray-700 border-gray-200">
                    {onboardingData.assessmentScore}/{questions.length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-gray-700">Performance:</span>
                  <Badge className={`text-sm px-3 py-1 ${
                    scorePercentage >= 85 ? 'bg-purple-600 text-white' :
                    scorePercentage >= 70 ? 'bg-blue-600 text-white' :
                    scorePercentage >= 50 ? 'bg-green-600 text-white' : 'bg-orange-600 text-white'
                  }`}>
                    {scorePercentage >= 85 ? 'Excellent' :
                     scorePercentage >= 70 ? 'Very Good' :
                     scorePercentage >= 50 ? 'Good' : 'Needs Practice'}
                  </Badge>
                </div>
              </>
            )}
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-gray-700">Starting Module:</span>
              <Badge className="bg-green-600 text-white text-sm px-3 py-1 font-semibold">
                Module {onboardingData.recommendedModule}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <div className="pt-4">
          <Button
            onClick={async () => {
              playClickSound();
              if (onboardingData.professionCategory && onboardingData.experienceLevel) {
                await handleComplete(onboardingData as OnboardingData);
              }
            }}
            disabled={isLoading}
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 w-full py-4 text-lg font-semibold transition-all duration-200 active:scale-[0.98] shadow-lg disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <LoadingAnimation size={24} />
                <span className="ml-2">Saving...</span>
              </>
            ) : (
              <>🚀 Start Module {onboardingData.recommendedModule}</>
            )}
          </Button>
        </div>
      </div>
    );
  };

  // Early return if onboarding is already completed (prevents flash)
  if (OnboardingManager.hasCompletedOnboarding() && userId === 'guest-user') {
    console.log('✅ Guest onboarding already completed');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 p-1">
      <div className="max-w-sm mx-auto min-h-screen flex flex-col">
        {/* Compact Header */}
        <div className="py-2 text-center">
          <h1 className="text-lg font-bold text-gray-800">ECG Learning Profile</h1>
          <div className="flex justify-center mt-1">
            <div className="flex space-x-1">
              <div className={`w-2 h-2 rounded-full ${currentStep === 'profession' ? 'bg-purple-500' : 'bg-gray-300'}`}></div>
              <div className={`w-2 h-2 rounded-full ${currentStep === 'experience' ? 'bg-purple-500' : 'bg-gray-300'}`}></div>
              <div className={`w-2 h-2 rounded-full ${currentStep === 'assessment' ? 'bg-purple-500' : 'bg-gray-300'}`}></div>
              <div className={`w-2 h-2 rounded-full ${currentStep === 'personalization' ? 'bg-purple-500' : 'bg-gray-300'}`}></div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-1 mb-1">
          {currentStep === 'profession' && renderProfessionSelection()}
          {currentStep === 'experience' && renderExperienceLevel()}
          {currentStep === 'assessment' && renderAssessment()}
          {currentStep === 'personalization' && renderPersonalization()}
          {currentStep === 'complete' && renderComplete()}
        </div>
      </div>
    </div>
  );
};

export default AdvancedOnboardingAssessment;
