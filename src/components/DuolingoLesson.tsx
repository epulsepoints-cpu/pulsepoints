import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useUISounds } from '@/hooks/useUISounds';
import { 
  ArrowLeft, 
  ArrowRight,
  CheckCircle, 
  X,
  Heart,
  Zap,
  Target,
  Brain,
  Timer,
  Star,
  Trophy
} from 'lucide-react';
import { Lesson, LessonContent } from '@/types/learning';

interface DuolingoLessonProps {
  lesson: Lesson;
  onComplete: (score: number, timeSpent: number) => void;
  onExit: () => void;
  userHearts: number;
  onHeartLost: () => void;
}

interface LessonStep {
  id: string;
  type: 'introduction' | 'content' | 'quiz' | 'practice' | 'summary';
  title: string;
  content: string;
  options?: string[];
  correctAnswer?: number;
  explanation?: string;
  mediaUrl?: string;
  interactive?: boolean;
}

const DuolingoLesson: React.FC<DuolingoLessonProps> = ({
  lesson,
  onComplete,
  onExit,
  userHearts,
  onHeartLost
}) => {
  // Initialize UI sounds
  const { playClickSound, playCorrectSound, playErrorSound } = useUISounds();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hearts, setHearts] = useState(userHearts);
  const [score, setScore] = useState(0);
  const [startTime] = useState(Date.now());
  const [stepStartTime, setStepStartTime] = useState(Date.now());
  const [mistakes, setMistakes] = useState(0);
  const [streak, setStreak] = useState(0);

  // Convert lesson content to interactive steps
  const generateSteps = (): LessonStep[] => {
    const steps: LessonStep[] = [];

    // Introduction step
    steps.push({
      id: 'intro',
      type: 'introduction',
      title: `Let's learn about ${lesson.title}`,
      content: lesson.content.introduction,
    });

    // Content steps with mini-quizzes
    lesson.content.sections.forEach((section, index) => {
      // Content explanation
      steps.push({
        id: `content-${index}`,
        type: 'content',
        title: section.title,
        content: section.content,
        mediaUrl: section.mediaUrl,
      });

      // Interactive quiz for each section
      if (section.content.length > 100) { // Only add quiz for substantial content
        steps.push({
          id: `quiz-${index}`,
          type: 'quiz',
          title: `Quick Check: ${section.title}`,
          content: generateQuizQuestion(section),
          options: generateQuizOptions(section),
          correctAnswer: 0, // First option is always correct in this example
          explanation: `Great! ${section.title} is an important ECG concept.`,
        });
      }
    });

    // Practice step
    steps.push({
      id: 'practice',
      type: 'practice',
      title: 'Let\'s Practice!',
      content: generatePracticeQuestion(lesson),
      options: generatePracticeOptions(lesson),
      correctAnswer: 0,
      explanation: 'Excellent! You\'re mastering ECG interpretation.',
    });

    // Summary step
    steps.push({
      id: 'summary',
      type: 'summary',
      title: 'Lesson Complete!',
      content: lesson.content.summary,
    });

    return steps;
  };

  const generateQuizQuestion = (section: any): string => {
    return `What is the key concept in "${section.title}"?`;
  };

  const generateQuizOptions = (section: any): string[] => {
    return [
      `The main principle discussed in ${section.title}`,
      'A completely different ECG concept',
      'Something unrelated to ECG',
      'None of the above'
    ];
  };

  const generatePracticeQuestion = (lesson: Lesson): string => {
    return `Based on what you learned about ${lesson.title}, which statement is most accurate?`;
  };

  const generatePracticeOptions = (lesson: Lesson): string[] => {
    return [
      'The key concepts from this lesson are clinically important',
      'ECGs are not useful in medical diagnosis',
      'This lesson content is not relevant',
      'All of the above'
    ];
  };

  const [steps] = useState<LessonStep[]>(generateSteps());
  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  useEffect(() => {
    setStepStartTime(Date.now());
  }, [currentStep]);

  const handleAnswerSelect = (answerIndex: number) => {
    playClickSound(); // Play click sound when answer is selected
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const correct = selectedAnswer === currentStepData.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    // Play sound based on correct/incorrect answer
    if (correct) {
      playCorrectSound();
      setScore(score + 10);
      setStreak(streak + 1);
    } else {
      playErrorSound();
      setMistakes(mistakes + 1);
      setHearts(hearts - 1);
      setStreak(0);
      onHeartLost();
    }
  };

  const handleContinue = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Lesson complete
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      const finalScore = Math.max(0, 100 - (mistakes * 10));
      onComplete(finalScore, timeSpent);
    }
  };

  const handleExit = () => {
    if (window.confirm('Are you sure you want to exit? You\'ll lose your progress.')) {
      onExit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm border-b-2 border-blue-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button variant="ghost" onClick={handleExit} className="p-2">
            <ArrowLeft className="w-6 h-6" />
          </Button>
          
          <div className="flex-1 mx-4">
            <Progress value={progress} className="h-3 bg-gray-200" />
            <div className="text-center mt-1 text-sm text-gray-600">
              {currentStep + 1} of {steps.length}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Heart className="w-5 h-5 text-red-500" />
              <span className="font-bold text-red-600">{hearts}</span>
            </div>
            <div className="flex items-center gap-1">
              <Target className="w-5 h-5 text-blue-500" />
              <span className="font-bold text-blue-600">{streak}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          
          {!showResult ? (
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8">
                {/* Step Type Badge */}
                <div className="flex items-center justify-center mb-6">
                  <Badge 
                    variant="outline" 
                    className={`px-4 py-2 ${
                      currentStepData.type === 'introduction' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                      currentStepData.type === 'content' ? 'bg-green-50 text-green-700 border-green-200' :
                      currentStepData.type === 'quiz' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                      currentStepData.type === 'practice' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                      'bg-amber-50 text-amber-700 border-amber-200'
                    }`}
                  >
                    {currentStepData.type === 'introduction' && <Brain className="w-4 h-4 mr-2" />}
                    {currentStepData.type === 'content' && <Zap className="w-4 h-4 mr-2" />}
                    {currentStepData.type === 'quiz' && <Target className="w-4 h-4 mr-2" />}
                    {currentStepData.type === 'practice' && <Trophy className="w-4 h-4 mr-2" />}
                    {currentStepData.type === 'summary' && <Star className="w-4 h-4 mr-2" />}
                    {currentStepData.type.charAt(0).toUpperCase() + currentStepData.type.slice(1)}
                  </Badge>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
                  {currentStepData.title}
                </h2>

                {/* Content */}
                <div className="mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed text-center">
                    {currentStepData.content}
                  </p>
                  
                  {currentStepData.mediaUrl && (
                    <div className="mt-6 text-center">
                      <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">ECG Image: {currentStepData.mediaUrl}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Options for Quiz/Practice */}
                {(currentStepData.type === 'quiz' || currentStepData.type === 'practice') && currentStepData.options && (
                  <div className="space-y-3 mb-8">
                    {currentStepData.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                          selectedAnswer === index
                            ? 'border-blue-500 bg-blue-50 text-blue-900'
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            selectedAnswer === index
                              ? 'bg-blue-500 text-white'
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span className="font-medium">{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-center">
                  {(currentStepData.type === 'quiz' || currentStepData.type === 'practice') ? (
                    <Button
                      onClick={handleSubmitAnswer}
                      disabled={selectedAnswer === null}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      size="lg"
                    >
                      Check Answer
                    </Button>
                  ) : (
                    <Button
                      onClick={handleContinue}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg"
                      size="lg"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            /* Result Card */
            <Card className={`shadow-xl border-0 ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
                  isCorrect ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {isCorrect ? (
                    <CheckCircle className="w-10 h-10 text-white" />
                  ) : (
                    <X className="w-10 h-10 text-white" />
                  )}
                </div>

                <h2 className={`text-3xl font-bold mb-4 ${
                  isCorrect ? 'text-green-700' : 'text-red-700'
                }`}>
                  {isCorrect ? 'Correct!' : 'Oops!'}
                </h2>

                {isCorrect && (
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span className="font-bold text-yellow-600">+10 XP</span>
                  </div>
                )}

                <p className={`text-lg mb-6 ${
                  isCorrect ? 'text-green-600' : 'text-red-600'
                }`}>
                  {currentStepData.explanation}
                </p>

                <Button
                  onClick={handleContinue}
                  className={`font-bold py-3 px-8 rounded-xl shadow-lg ${
                    isCorrect 
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                  size="lg"
                >
                  {currentStep === steps.length - 1 ? 'Complete Lesson' : 'Continue'}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Hearts Warning */}
      {hearts <= 1 && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:w-80">
          <Card className="bg-red-500 text-white shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6" />
                <div>
                  <p className="font-bold">Low on hearts!</p>
                  <p className="text-sm text-red-100">Be careful with your next answer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DuolingoLesson;
