import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import EnhancedImage from './EnhancedImage';
import { QuizLayoutFixed } from './QuizLayoutFixed';
import { 
  CheckCircle,
  XCircle,
  Clock,
  Zap
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import ECGPlaceholder from './ECGPlaceholder';
import { auth, db } from '@/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

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
      imageUrl: '/ecg/medical_accurate/premature_ventricular_contractions_pvc_3.png',
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
      imageUrl: '/ecg/medical_accurate/torsades_de_pointes_200bpm_2.png',
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
      imageUrl: '/ecg/medical_accurate/third_degree_av_block_40bpm_1.png',
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

  // Map question IDs to ECG placeholder types (fallback for image loading failures)
  const getPlaceholderType = (questionId: string): 'afib-rvr' | 'stemi-anterior' | 'complete-heart-block' | 'ventricular-tachycardia' | 'rbbb-pattern' | 'hyperkalemia' => {
    const mapping = {
      'q1': 'afib-rvr' as const,           // Maps to atrial fibrillation (351_AFIB.png)
      'q2': 'stemi-anterior' as const,     // Maps to ST elevation MI (152_LMI.png)
      'q3': 'complete-heart-block' as const, // Maps to first degree block (placeholder approximation)
      'q4': 'ventricular-tachycardia' as const, // Maps to ventricular tachycardia
      'q5': 'rbbb-pattern' as const,       // Maps to right bundle branch block (172_CRBBB.png)
      'q6': 'ventricular-tachycardia' as const, // Maps to SVT (1299_PSVT.png) - closest placeholder
    };
    return mapping[questionId as keyof typeof mapping] || 'afib-rvr';
  };

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

  const currentQuestionData = questions[currentQuestion];

  useEffect(() => {
    if (currentQuestionData) {
      setQuestionStartTime(Date.now());
    }
  }, [currentQuestion]);

  const handleAnswer = (answerIndex: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    setShowExplanation(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
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
        setCurrentStep('personalization');
      }
    }, 3000);
  };

  const handleSkipOnboarding = async () => {
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
    
    await handleComplete(defaultData);
  };

  const renderProfessionSelection = () => (
    <div className="space-y-3 p-2">
      <h2 className="text-base font-bold text-center text-gray-800">
        Choose Your Profession
      </h2>
      
      {/* Skip Onboarding Option */}
      <div className="flex justify-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSkipOnboarding}
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors py-1 px-2 rounded text-xs"
        >
          Skip →
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {Object.entries(professionCategories).map(([key, category]) => {
          return (
            <Card 
              key={key}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-400 active:scale-[0.96] bg-white"
              onClick={() => {
                setOnboardingData(prev => ({ ...prev, professionCategory: key as any }));
                setCurrentStep('experience');
              }}
            >
              <CardHeader className="text-center pb-1 pt-3">
                <CardTitle className="text-xs font-bold text-gray-800">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 pb-2">
                <div className="text-center">
                  <Badge variant="outline" className="text-xs px-2 py-0.5 bg-gray-50 text-gray-700 border-gray-200">
                    {category.roles.length} roles
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  const renderExperienceLevel = () => (
    <div className="space-y-3 p-2">
      <h2 className="text-base font-bold text-center text-gray-800">
        Experience Level
      </h2>

      <div className="space-y-2">
        <Card 
          className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-green-400 active:scale-[0.98] bg-white"
          onClick={() => {
            setOnboardingData(prev => ({ 
              ...prev, 
              experienceLevel: 'beginner',
              recommendedModule: 1,
              assessmentScore: 0
            }));
            setCurrentStep('personalization');
          }}
        >
          <CardHeader className="text-center py-3">
            <CardTitle className="text-green-600 text-sm font-bold">BEGINNER</CardTitle>
          </CardHeader>
          <CardContent className="text-center pt-0 pb-3">
            <p className="text-xs text-gray-700 mb-2">
              New to ECG fundamentals
            </p>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300 px-2 py-1 text-xs">
              Start Module 1
            </Badge>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-400 active:scale-[0.98] bg-white"
          onClick={() => {
            setOnboardingData(prev => ({ ...prev, experienceLevel: 'intermediate' }));
            setCurrentStep('assessment');
          }}
        >
          <CardHeader className="text-center py-3">
            <CardTitle className="text-blue-600 text-sm font-bold">INTERMEDIATE</CardTitle>
          </CardHeader>
          <CardContent className="text-center pt-0 pb-3">
            <p className="text-xs text-gray-700 mb-2">
              Some ECG knowledge
            </p>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300 px-2 py-1 text-xs">
              Assessment (6 Q)
            </Badge>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-400 active:scale-[0.98] bg-white"
          onClick={() => {
            setOnboardingData(prev => ({ ...prev, experienceLevel: 'advanced' }));
            setCurrentStep('assessment');
          }}
        >
          <CardHeader className="text-center py-3">
            <CardTitle className="text-purple-600 text-sm font-bold">ADVANCED</CardTitle>
          </CardHeader>
          <CardContent className="text-center pt-0 pb-3">
            <p className="text-xs text-gray-700 mb-2">
              Confident with ECGs
            </p>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-300 px-2 py-1 text-xs">
              Full Test (9 Q)
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderAssessment = () => {
    const currentQuestionData = questions[currentQuestion];
    
    return (
      <div className="h-full flex flex-col">
        {/* Minimal Progress Bar Only */}
        <div className="p-2 bg-gray-50 rounded-lg shadow-sm mb-2">
          <div className="space-y-1">
            <p className="text-gray-600 text-xs font-medium text-center">
              Q{currentQuestion + 1}/{questions.length}
            </p>
            <div className="max-w-full mx-auto">
              <Progress 
                value={((currentQuestion + 1) / questions.length) * 100} 
                className="h-2 bg-gray-200"
              />
            </div>
            <p className="text-xs text-gray-500 text-center">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </p>
          </div>
        </div>

        {/* Quiz Layout */}
        <div className="flex-1 px-1">
          <QuizLayoutFixed
            title={`Question ${currentQuestion + 1}`}
            question={currentQuestionData.question}
            imageUrl={currentQuestionData.imageUrl}
            imageAlt={currentQuestionData.imageAlt}
            options={currentQuestionData.options}
            selectedAnswer={selectedAnswer}
            showResult={showExplanation}
            isCorrect={selectedAnswer === currentQuestionData.correct}
            explanation={currentQuestionData.explanation}
            category={currentQuestionData.category}
            points={currentQuestionData.points}
            onAnswerSelect={handleAnswer}
            onSubmit={undefined} // Assessment submits immediately
            className="flex-1"
          />
        </div>

        {/* Question Info Footer */}
        <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-t-3xl mt-4">
          <div className="flex justify-between items-center text-xs">
            <Badge variant="outline" className="bg-white border-gray-300 text-gray-600 px-3 py-1">
              {currentQuestionData.category}
            </Badge>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                currentQuestionData.difficulty === 'beginner' ? 'bg-green-500' :
                currentQuestionData.difficulty === 'intermediate' ? 'bg-blue-500' :
                currentQuestionData.difficulty === 'advanced' ? 'bg-purple-500' : 'bg-red-500'
              }`}></div>
              <span className="text-gray-600 capitalize font-medium">
                {currentQuestionData.difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>
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
                onClick={() => setOnboardingData(prev => ({ ...prev, learningGoals: option.time }))}
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
                onClick={() => setOnboardingData(prev => ({ ...prev, dailyGoal: option.goal }))}
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
            // Set default schedule if not selected
            if (!onboardingData.studySchedule) {
              setOnboardingData(prev => ({ ...prev, studySchedule: 'flexible' }));
            }
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
                <Clock className="w-4 h-4 mr-2 animate-spin" />
                Saving...
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-1">
      <div className="max-w-sm mx-auto min-h-screen flex flex-col">
        {/* Compact Header */}
        <div className="py-2 text-center">
          <h1 className="text-lg font-bold text-gray-800">ECG Learning Profile</h1>
          <div className="flex justify-center mt-1">
            <div className="flex space-x-1">
              <div className={`w-2 h-2 rounded-full ${currentStep === 'profession' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              <div className={`w-2 h-2 rounded-full ${currentStep === 'experience' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              <div className={`w-2 h-2 rounded-full ${currentStep === 'assessment' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              <div className={`w-2 h-2 rounded-full ${currentStep === 'personalization' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-1 mb-1">
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
