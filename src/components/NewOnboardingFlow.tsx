import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Stethoscope, GraduationCap, Heart, UserCheck, Zap, Target, Calendar } from 'lucide-react';

interface OnboardingData {
  professionCategory: 'physician' | 'nursing' | 'student' | 'allied-health';
  professionRole: string;
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  assessmentScore?: number;
  recommendedModule: number;
  learningGoals: string;
  dailyGoal: string;
  studySchedule: string;
}

interface OnboardingFlowProps {
  onComplete: (data: OnboardingData) => void;
}

const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState<'welcome' | 'profession' | 'experience' | 'assessment' | 'personalization' | 'complete'>('welcome');
  const [onboardingData, setOnboardingData] = useState<Partial<OnboardingData>>({});
  
  // Assessment state (always initialized to avoid hook count changes)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  // Reset assessment state when entering assessment step
  React.useEffect(() => {
    if (currentStep === 'assessment') {
      setCurrentQuestion(0);
      setAnswers([]);
      setShowExplanation(false);
    }
  }, [currentStep]);

  // Professional categories and roles
  const professionCategories = {
    physician: {
      icon: Stethoscope,
      title: '🩺 PHYSICIAN',
      roles: [
        'Attending Physician',
        'Resident/Fellow', 
        'Cardiologist',
        'Emergency Physician'
      ]
    },
    nursing: {
      icon: Heart,
      title: '👩‍⚕️ NURSING',
      roles: [
        'Registered Nurse',
        'Nurse Practitioner',
        'ICU/CCU Nurse',
        'Cardiac Nurse'
      ]
    },
    student: {
      icon: GraduationCap,
      title: '🎓 STUDENT',
      roles: [
        'Medical Student',
        'Nursing Student',
        'PA Student',
        'Pre-med Student',
        'Pharmacy Student',
        'Resident/Intern'
      ]
    },
    'allied-health': {
      icon: UserCheck,
      title: '🏥 ALLIED HEALTH',
      roles: [
        'Paramedic/EMT',
        'Respiratory Therapist',
        'Medical Technician',
        'ECG Technician',
        'Other Healthcare'
      ]
    }
  };

  // Assessment questions for intermediate/advanced
  const assessmentQuestions = {
    intermediate: [
      {
        question: "Identify this rhythm pattern:",
        options: ["Normal Sinus Rhythm", "Sinus Bradycardia", "Sinus Tachycardia", "Atrial Fibrillation"],
        correct: 0,
        explanation: "Normal sinus rhythm has regular P waves, normal rate (60-100 bpm), and normal QRS."
      },
      {
        question: "Calculate the heart rate using the 6-second method:",
        options: ["Count QRS × 10", "Count QRS × 6", "Count P waves × 10", "Count intervals × 300"],
        correct: 0,
        explanation: "Count QRS complexes in 6 seconds and multiply by 10 for heart rate."
      },
      {
        question: "Are the P waves normal in this strip?",
        options: ["Present and normal", "Present but abnormal", "Absent", "Cannot determine"],
        correct: 0,
        explanation: "Normal P waves are upright in leads I, II, aVF and precede each QRS."
      },
      {
        question: "Is the QRS narrow or wide?",
        options: ["Narrow (<0.12 sec)", "Wide (>0.12 sec)", "Borderline", "Cannot measure"],
        correct: 0,
        explanation: "QRS width <0.12 seconds (3 small boxes) is considered narrow."
      },
      {
        question: "Is this rhythm regular?",
        options: ["Regular", "Regularly irregular", "Irregularly irregular", "Cannot determine"],
        correct: 0,
        explanation: "Regular rhythm has consistent R-R intervals throughout the strip."
      }
    ],
    advanced: [
      {
        question: "Identify this arrhythmia:",
        options: ["Atrial Fibrillation", "SVT", "Ventricular Tachycardia", "Sinus Rhythm"],
        correct: 0,
        explanation: "Look for absence of P waves and irregularly irregular rhythm for A-Fib."
      },
      {
        question: "Determine the cardiac axis:",
        options: ["Normal axis", "Left axis deviation", "Right axis deviation", "Extreme axis deviation"],
        correct: 0,
        explanation: "Normal axis is between -30° to +90°, use leads I and aVF to determine."
      },
      {
        question: "Identify signs of ischemia:",
        options: ["ST depression", "ST elevation", "T wave inversion", "No ischemic changes"],
        correct: 0,
        explanation: "ST changes indicate acute ischemia requiring immediate attention."
      },
      {
        question: "Type of heart block present:",
        options: ["First degree", "Second degree Type I", "Second degree Type II", "Third degree"],
        correct: 0,
        explanation: "Analyze PR intervals and relationship between P waves and QRS complexes."
      },
      {
        question: "Most likely diagnosis:",
        options: ["STEMI", "NSTEMI", "Unstable angina", "Stable angina"],
        correct: 0,
        explanation: "Consider clinical presentation with ECG findings for accurate diagnosis."
      }
    ]
  };

  const renderWelcomeScreen = () => (
    <div className="text-center space-y-6">
      <div className="space-y-4">
        <img src="/ecgkid_logo.png" alt="ECGkid Logo" className="w-24 h-24 mx-auto object-contain" />
        <h1 className="text-4xl font-bold text-purple-800">Welcome to ECG Master!</h1>
        <p className="text-lg text-gray-600">
          Let's personalize your ECG learning journey based on your professional background and experience.
        </p>
      </div>
      
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Target className="w-5 h-5 text-purple-600" />
              <span className="font-medium">Personalized Assessment</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Adaptive Learning Path</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <span className="font-medium">Custom Study Schedule</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button 
        onClick={() => setCurrentStep('profession')}
        size="lg"
        className="bg-purple-600 hover:bg-purple-700"
      >
        Continue to Assessment →
      </Button>
    </div>
  );

  const renderProfessionSelection = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-purple-800">Select Your Profession</h2>
        <p className="text-gray-600 mt-2">This helps us customize your learning experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(professionCategories).map(([key, category]) => {
          const IconComponent = category.icon;
          return (
            <Card 
              key={key}
              className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-purple-300"
              onClick={() => {
                setOnboardingData(prev => ({ ...prev, professionCategory: key as any }));
                setCurrentStep('experience');
              }}
            >
              <CardHeader className="text-center">
                <IconComponent className="w-12 h-12 mx-auto text-purple-600" />
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.roles.map((role, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2">
                      {role}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  const renderExperienceLevel = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-purple-800">How familiar are you with ECGs?</h2>
        <p className="text-gray-600 mt-2">This determines your starting point and assessment difficulty</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card 
          className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-green-300"
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
          <CardHeader className="text-center">
            <div className="text-4xl mb-2">🌱</div>
            <CardTitle className="text-green-600">BEGINNER</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-gray-600">
              "Little to no ECG experience"
            </p>
            <div className="mt-4">
              <Badge variant="outline" className="bg-green-50">Skip Assessment</Badge>
              <p className="text-xs text-gray-500 mt-2">Start with Module 1 (Fundamentals)</p>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-blue-300"
          onClick={() => {
            setOnboardingData(prev => ({ ...prev, experienceLevel: 'intermediate' }));
            setCurrentStep('assessment');
          }}
        >
          <CardHeader className="text-center">
            <div className="text-4xl mb-2">📚</div>
            <CardTitle className="text-blue-600">INTERMEDIATE</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-gray-600">
              "Some experience reading ECGs"
            </p>
            <div className="mt-4">
              <Badge variant="outline" className="bg-blue-50">Basic Assessment</Badge>
              <p className="text-xs text-gray-500 mt-2">5 fundamental questions</p>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-purple-300"
          onClick={() => {
            setOnboardingData(prev => ({ ...prev, experienceLevel: 'advanced' }));
            setCurrentStep('assessment');
          }}
        >
          <CardHeader className="text-center">
            <div className="text-4xl mb-2">🎯</div>
            <CardTitle className="text-purple-600">ADVANCED</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-gray-600">
              "Confident with most ECG patterns"
            </p>
            <div className="mt-4">
              <Badge variant="outline" className="bg-purple-50">Advanced Assessment</Badge>
              <p className="text-xs text-gray-500 mt-2">5 complex questions</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderAssessment = () => {
    const questions = onboardingData.experienceLevel === 'advanced' 
      ? assessmentQuestions.advanced 
      : assessmentQuestions.intermediate;
    
    const question = questions[currentQuestion];
    
    const handleAnswer = (answerIndex: number) => {
      const newAnswers = [...answers, answerIndex];
      setAnswers(newAnswers);
      setShowExplanation(true);
      
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setShowExplanation(false);
        } else {
          // Calculate score and determine module placement
          const correctAnswers = newAnswers.reduce((count, answer, index) => {
            return count + (answer === questions[index].correct ? 1 : 0);
          }, 0);
          
          let recommendedModule = 1;
          if (correctAnswers >= 4) recommendedModule = 3; // Advanced
          else if (correctAnswers >= 2) recommendedModule = 2; // Intermediate
          
          setOnboardingData(prev => ({ 
            ...prev, 
            assessmentScore: correctAnswers,
            recommendedModule 
          }));
          
          // Reset assessment state for potential future use
          setCurrentQuestion(0);
          setAnswers([]);
          setShowExplanation(false);
          
          setCurrentStep('personalization');
        }
      }, 2000);
    };

    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-purple-800">ECG Assessment</h2>
          <p className="text-gray-600 mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl">{question.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant={showExplanation ? 
                    (index === question.correct ? "default" : "outline") : 
                    "outline"
                  }
                  className={`w-full justify-start ${
                    showExplanation && index === question.correct ? 'bg-green-600 hover:bg-green-700' : ''
                  }`}
                  onClick={() => !showExplanation && handleAnswer(index)}
                  disabled={showExplanation}
                >
                  {option}
                </Button>
              ))}
            </div>
            
            {showExplanation && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Explanation:</strong> {question.explanation}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderPersonalization = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-purple-800">Customize Your Learning</h2>
        <p className="text-gray-600 mt-2">Set your goals and study preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Learning Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Learning Goals</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {['Learn 15 min/day', 'Learn 30 min/day', 'Learn 1 hour/day', 'Custom Schedule'].map((goal) => (
              <Button
                key={goal}
                variant={onboardingData.learningGoals === goal ? "default" : "outline"}
                className="w-full"
                onClick={() => setOnboardingData(prev => ({ ...prev, learningGoals: goal }))}
              >
                {goal}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Daily Goals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Daily Goals</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {['1 Lesson per day', '2 Lessons per day', '5 Tasks per day', 'Custom Goal'].map((goal) => (
              <Button
                key={goal}
                variant={onboardingData.dailyGoal === goal ? "default" : "outline"}
                className="w-full"
                onClick={() => setOnboardingData(prev => ({ ...prev, dailyGoal: goal }))}
              >
                {goal}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Study Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Study Schedule</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {['Morning Learner', 'Evening Learner', 'Weekend Warrior', 'Flexible Schedule'].map((schedule) => (
              <Button
                key={schedule}
                variant={onboardingData.studySchedule === schedule ? "default" : "outline"}
                className="w-full"
                onClick={() => setOnboardingData(prev => ({ ...prev, studySchedule: schedule }))}
              >
                {schedule}
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button
          onClick={() => setCurrentStep('complete')}
          size="lg"
          className="bg-purple-600 hover:bg-purple-700"
          disabled={!onboardingData.learningGoals || !onboardingData.dailyGoal || !onboardingData.studySchedule}
        >
          Complete Setup →
        </Button>
      </div>
    </div>
  );

  const renderComplete = () => (
    <div className="text-center space-y-6">
      <div className="space-y-4">
        <div className="text-6xl">🎉</div>
        <h1 className="text-4xl font-bold text-purple-800">Ready to Master ECGs!</h1>
        <p className="text-lg text-gray-600">
          Your personalized learning journey is now set up based on your professional background.
        </p>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-purple-600">Your Learning Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="font-medium">Profession:</span>
            <Badge>{onboardingData.professionCategory}</Badge>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Experience:</span>
            <Badge variant="outline">{onboardingData.experienceLevel}</Badge>
          </div>
          {onboardingData.assessmentScore !== undefined && (
            <div className="flex justify-between">
              <span className="font-medium">Assessment Score:</span>
              <Badge variant="outline">{onboardingData.assessmentScore}/5</Badge>
            </div>
          )}
          <div className="flex justify-between">
            <span className="font-medium">Starting Module:</span>
            <Badge className="bg-green-600">{onboardingData.recommendedModule}</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={() => {
            if (onComplete && onboardingData.professionCategory && onboardingData.experienceLevel) {
              onComplete(onboardingData as OnboardingData);
            }
          }}
          size="lg"
          className="bg-purple-600 hover:bg-purple-700"
        >
          🎯 Start Learning
        </Button>
        <Button variant="outline" size="lg">
          📚 View Progress
        </Button>
        <Button variant="outline" size="lg">
          🏆 View Achievements
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-4xl mx-auto py-8">
        {currentStep === 'welcome' && renderWelcomeScreen()}
        {currentStep === 'profession' && renderProfessionSelection()}
        {currentStep === 'experience' && renderExperienceLevel()}
        {currentStep === 'assessment' && renderAssessment()}
        {currentStep === 'personalization' && renderPersonalization()}
        {currentStep === 'complete' && renderComplete()}
      </div>
    </div>
  );
};

export default OnboardingFlow;
