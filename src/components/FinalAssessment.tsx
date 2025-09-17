import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FinalAssessmentQuestion, LessonCompletionData } from '@/types/learning';
import LessonCompletionCelebration from './LessonCompletionCelebration';
import { useUISounds } from '@/hooks/useUISounds';
import { 
  Play, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Trophy, 
  AlertTriangle,
  BookOpen,
  Target
} from 'lucide-react';

interface FinalAssessmentProps {
  assessmentData: {
    preparatoryVideo?: {
      youtubeUrl: string;
      videoTitle: string;
      videoDescription: string;
      videoDuration: number;
    };
    questions: FinalAssessmentQuestion[];
    passingScore: number;
    timeLimit?: number;
  };
  lessonId?: string; // Add lesson ID for progress persistence
  lessonTitle?: string; // Add lesson title for celebration
  moduleTitle?: string; // Add module title for celebration
  onComplete: (score: number, passed: boolean, answers: Record<string, any>) => void;
  onBack: () => void;
}

const FinalAssessment: React.FC<FinalAssessmentProps> = ({
  assessmentData,
  lessonId,
  lessonTitle,
  moduleTitle,
  onComplete,
  onBack
}) => {
  // Generate storage key for this specific assessment
  const storageKey = `final-assessment-${lessonId || 'unknown'}`;
  
  // Initialize UI sounds
  const { playClickSound, playHeartMonitorSound } = useUISounds();
  
  // Add celebration state
  const [showCelebration, setShowCelebration] = useState(false);
  const [completionData, setCompletionData] = useState<LessonCompletionData | null>(null);
  
  // Load saved progress
  const loadSavedProgress = () => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('Error loading saved progress:', error);
    }
    return null;
  };

  // Save progress to localStorage
  const saveProgress = (progressData: any) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(progressData));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  // Clear saved progress (when assessment is completed)
  const clearSavedProgress = () => {
    try {
      localStorage.removeItem(storageKey);
    } catch (error) {
      console.error('Error clearing progress:', error);
    }
  };

  const savedProgress = loadSavedProgress();
  
  const [currentPhase, setCurrentPhase] = useState<'video-quiz' | 'result'>(
    savedProgress?.currentPhase || 'video-quiz'
  );
  const [currentQuestion, setCurrentQuestion] = useState(savedProgress?.currentQuestion || 0);
  const [answers, setAnswers] = useState<Record<string, any>>(savedProgress?.answers || {});
  const [timeRemaining, setTimeRemaining] = useState(
    savedProgress?.timeRemaining || (assessmentData.timeLimit ? assessmentData.timeLimit * 60 : null)
  );
  const [quizStarted, setQuizStarted] = useState(savedProgress?.quizStarted || false);
  const [score, setScore] = useState(savedProgress?.score || 0);
  const [passed, setPassed] = useState(savedProgress?.passed || false);

  // Update state and save progress
  const updateProgress = (updates: Partial<{
    currentPhase: 'video-quiz' | 'result';
    currentQuestion: number;
    answers: Record<string, any>;
    timeRemaining: number | null;
    quizStarted: boolean;
    score: number;
    passed: boolean;
  }>) => {
    const newProgress = {
      currentPhase,
      currentQuestion,
      answers,
      timeRemaining,
      quizStarted,
      score,
      passed,
      ...updates
    };
    
    // Update local state
    if (updates.currentPhase !== undefined) setCurrentPhase(updates.currentPhase);
    if (updates.currentQuestion !== undefined) setCurrentQuestion(updates.currentQuestion);
    if (updates.answers !== undefined) setAnswers(prev => ({ ...prev, ...updates.answers }));
    if (updates.timeRemaining !== undefined) setTimeRemaining(updates.timeRemaining);
    if (updates.quizStarted !== undefined) setQuizStarted(updates.quizStarted);
    if (updates.score !== undefined) setScore(updates.score);
    if (updates.passed !== undefined) setPassed(updates.passed);
    
    // Save to localStorage (but clear when assessment is completed)
    if (updates.passed && updates.currentPhase === 'result') {
      clearSavedProgress();
    } else {
      saveProgress(newProgress);
    }
  };

  // Timer effect
  useEffect(() => {
    if (quizStarted && timeRemaining && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev && prev <= 1) {
            handleFinishQuiz();
            return 0;
          }
          const newTime = prev ? prev - 1 : null;
          // Save progress with updated time
          if (newTime !== null) {
            saveProgress({
              currentPhase,
              currentQuestion,
              answers,
              timeRemaining: newTime,
              quizStarted,
              score,
              passed
            });
          }
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [quizStarted, timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartQuiz = () => {
    playHeartMonitorSound(); // Play heart monitor sound when quiz starts
    updateProgress({ quizStarted: true });
  };

  const handleAnswerSelect = (questionId: string, answer: any) => {
    playClickSound(); // Play click sound when answer is selected
    
    const newAnswers = {
      ...answers,
      [questionId]: answer
    };
    updateProgress({ answers: newAnswers });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < assessmentData.questions.length - 1) {
      updateProgress({ currentQuestion: currentQuestion + 1 });
    } else {
      handleFinishQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      updateProgress({ currentQuestion: currentQuestion - 1 });
    }
  };

  const handleFinishQuiz = () => {
    // Calculate score
    let totalPoints = 0;
    let earnedPoints = 0;

    assessmentData.questions.forEach(question => {
      totalPoints += question.points;
      const userAnswer = answers[question.id];
      
      if (userAnswer !== undefined) {
        if (typeof question.correctAnswer === 'number') {
          if (userAnswer === question.correctAnswer) {
            earnedPoints += question.points;
          }
        } else if (Array.isArray(question.correctAnswer)) {
          // For drag-drop or multi-select questions
          if (JSON.stringify(userAnswer) === JSON.stringify(question.correctAnswer)) {
            earnedPoints += question.points;
          }
        } else {
          if (userAnswer === question.correctAnswer) {
            earnedPoints += question.points;
          }
        }
      }
    });

    const finalScore = Math.round((earnedPoints / totalPoints) * 100);
    const isPassed = finalScore >= assessmentData.passingScore;
    
    updateProgress({ 
      score: finalScore, 
      passed: isPassed, 
      currentPhase: 'result' 
    });

    // If passed, prepare celebration data
    if (isPassed) {
      const completionTime = assessmentData.timeLimit ? 
        (assessmentData.timeLimit * 60) - (timeRemaining || 0) : 
        Math.round((Date.now() - Date.now()) / 1000); // Fallback calculation

      const celebrationData: LessonCompletionData = {
        lessonId: lessonId || 'unknown',
        lessonTitle: lessonTitle || 'ECG Lesson',
        moduleTitle: moduleTitle || 'ECG Learning Module',
        finalScore,
        timeSpent: completionTime,
        passingScore: assessmentData.passingScore,
        questionsAnswered: Object.keys(answers).length,
        totalQuestions: assessmentData.questions.length,
        completedAt: new Date().toISOString(),
        achievements: finalScore >= 95 ? ['Perfect Score!'] : finalScore >= 90 ? ['Excellence!'] : ['Great Job!']
      };

      setCompletionData(celebrationData);
      setShowCelebration(true);
    }

    onComplete(finalScore, isPassed, answers);
  };

  const renderVideoQuizPhase = () => {
    const { preparatoryVideo } = assessmentData;
    const question = assessmentData.questions[currentQuestion];
    const userAnswer = answers[question.id];
    const progress = ((currentQuestion + 1) / assessmentData.questions.length) * 100;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 space-y-0">
        {/* Left Side - Video */}
        <div className="space-y-4">
          <div className="text-center">
            <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Final Assessment</h2>
            <p className="text-gray-600 mb-4">
              Watch the video for preparation, then complete the quiz to pass this lesson.
            </p>
            <Badge variant="outline" className="mb-4">
              Passing Score: {assessmentData.passingScore}%
            </Badge>
          </div>

          {preparatoryVideo && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Preparatory Video
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src={preparatoryVideo.youtubeUrl.replace('watch?v=', 'embed/')}
                    title={preparatoryVideo.videoTitle}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2">{preparatoryVideo.videoTitle}</h3>
                <p className="text-sm text-gray-600 mb-4">{preparatoryVideo.videoDescription}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Duration: {Math.floor(preparatoryVideo.videoDuration / 60)} minutes
                  </span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Side - Quiz */}
        <div className="space-y-6">
          {/* Header with progress and timer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Badge variant="outline">
                Question {currentQuestion + 1} of {assessmentData.questions.length}
              </Badge>
              <Badge variant="outline">
                {question.points} points
              </Badge>
            </div>
            {timeRemaining && quizStarted && (
              <div className="flex items-center gap-2 text-orange-600">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{formatTime(timeRemaining)}</span>
              </div>
            )}
          </div>

          <Progress value={progress} className="h-2" />

          {!quizStarted ? (
            <Card className="border-2 border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Target className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Ready for the Quiz?</h3>
                  <p className="text-gray-600">
                    You have {assessmentData.questions.length} questions to complete. 
                    Watch the video on the left if you need preparation.
                  </p>
                </div>
                <Button 
                  onClick={handleStartQuiz} 
                  className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{question.question}</CardTitle>
                {question.hint && (
                  <p className="text-sm text-blue-600 italic">💡 {question.hint}</p>
                )}
              </CardHeader>
              <CardContent>
                {question.imageUrl && (
                  <div className="mb-4">
                    <img 
                      src={question.imageUrl} 
                      alt={question.imageAlt || 'Question image'}
                      className="w-full max-w-md mx-auto rounded-lg"
                    />
                  </div>
                )}

                {question.clinicalScenario && (
                  <Alert className="mb-4">
                    <AlertTriangle className="w-4 h-4" />
                    <AlertDescription>
                      <strong>Clinical Case:</strong> {question.clinicalScenario.patientAge}-year-old {question.clinicalScenario.patientGender.toLowerCase()} patient. 
                      Symptoms: {question.clinicalScenario.symptoms}
                      {question.clinicalScenario.history && ` | History: ${question.clinicalScenario.history}`}
                      {question.clinicalScenario.ecgDescription && ` | ECG: ${question.clinicalScenario.ecgDescription}`}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="space-y-3">
                  {question.options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(question.id, index)}
                      className={`w-full p-3 text-left rounded-lg border transition-colors ${
                        userAnswer === index
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </button>
                  ))}
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-between mt-6">
                  <Button 
                    variant="outline" 
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestion === 0}
                  >
                    Previous
                  </Button>
                  
                  <Button 
                    onClick={currentQuestion === assessmentData.questions.length - 1 ? handleFinishQuiz : handleNextQuestion}
                    disabled={userAnswer === undefined}
                    className={currentQuestion === assessmentData.questions.length - 1 ? 'bg-green-600 hover:bg-green-700' : ''}
                  >
                    {currentQuestion === assessmentData.questions.length - 1 ? 'Complete Assessment' : 'Next Question'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  };

  const renderResultPhase = () => {
    return (
      <div className="text-center space-y-6">
        <div>
          {passed ? (
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          ) : (
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          )}
          
          <h2 className="text-2xl font-bold mb-2">
            {passed ? 'Congratulations! 🎉' : 'Assessment Not Passed'}
          </h2>
          
          <div className="text-6xl font-bold mb-4" style={{ 
            color: passed ? '#10b981' : '#ef4444' 
          }}>
            {score}%
          </div>
          
          <p className="text-gray-600 mb-4">
            {passed 
              ? `Excellent work! You scored ${score}% and passed the assessment.`
              : `You scored ${score}%. You need ${assessmentData.passingScore}% to pass.`
            }
          </p>
          
          <Badge 
            variant={passed ? "default" : "destructive"}
            className="text-lg px-4 py-2"
          >
            {passed ? 'PASSED' : 'NOT PASSED'}
          </Badge>
        </div>

        {/* Review answers */}
        <Card>
          <CardHeader>
            <CardTitle>Review Your Answers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {assessmentData.questions.map((question, index) => {
                const userAnswer = answers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div key={question.id} className="border-l-4 pl-4" style={{
                    borderColor: isCorrect ? '#10b981' : '#ef4444'
                  }}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium">Q{index + 1}: {question.question}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Your answer: <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
                            {question.options?.[userAnswer as number] || 'No answer'}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-green-600 mt-1">
                            Correct answer: {question.options?.[question.correctAnswer as number]}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 mt-2">
                          {question.explanation}
                        </p>
                      </div>
                      <div className="ml-4">
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-center">
          {passed ? (
            // When passed, the celebration modal will handle the continuation
            // Show a message about the celebration
            <div className="text-center">
              <p className="text-green-600 font-medium mb-2">
                🎉 Assessment Passed! Celebration loading...
              </p>
              <Button 
                variant="outline"
                onClick={onBack}
                className="text-sm"
              >
                Review Results
              </Button>
            </div>
          ) : (
            <>
              <Button variant="outline" onClick={onBack}>
                Back to Lesson
              </Button>
              <Button 
                onClick={() => {
                  updateProgress({
                    currentPhase: 'video-quiz',
                    currentQuestion: 0,
                    answers: {},
                    quizStarted: false,
                    timeRemaining: assessmentData.timeLimit ? assessmentData.timeLimit * 60 : null,
                    score: 0,
                    passed: false
                  });
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Retake Assessment
              </Button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        {currentPhase === 'video-quiz' && renderVideoQuizPhase()}
        {currentPhase === 'result' && renderResultPhase()}
      </div>
      
      {/* Celebration Modal */}
      {showCelebration && completionData && (
        <LessonCompletionCelebration
          completionData={completionData}
          onContinue={() => {
            setShowCelebration(false);
            // The lesson will be completed via onComplete callback
          }}
          onClose={() => {
            setShowCelebration(false);
            onBack(); // Go back to lesson review
          }}
          showRatingPrompt={true}
        />
      )}
    </>
  );
};

export default FinalAssessment;
