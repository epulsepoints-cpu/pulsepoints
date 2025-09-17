import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, X, Heart, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LessonTask {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'drag-drop' | 'image-identification';
  question: string;
  content: any;
  correctAnswer: any;
}

interface FullScreenLessonLayoutProps {
  lessonId: string;
  tasks: LessonTask[];
  onLessonComplete: (lessonId: string, score: number) => void;
  onLessonExit: (lessonId: string, currentTask: number, progress: number) => void;
}

export const FullScreenLessonLayout: React.FC<FullScreenLessonLayoutProps> = ({
  lessonId,
  tasks,
  onLessonComplete,
  onLessonExit
}) => {
  const navigate = useNavigate();
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<any>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [lives, setLives] = useState(5);
  const [streak, setStreak] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [lessonScore, setLessonScore] = useState(0);

  const currentTask = tasks[currentTaskIndex];
  const progress = ((currentTaskIndex + 1) / tasks.length) * 100;

  // Auto-save progress
  useEffect(() => {
    const saveProgress = () => {
      localStorage.setItem(`lesson_${lessonId}_progress`, JSON.stringify({
        currentTask: currentTaskIndex,
        progress: progress,
        lives,
        streak,
        score: lessonScore
      }));
    };

    const interval = setInterval(saveProgress, 5000); // Save every 5 seconds
    return () => clearInterval(interval);
  }, [currentTaskIndex, progress, lives, streak, lessonScore, lessonId]);

  const handleAnswerSelect = (answer: any) => {
    setSelectedAnswer(answer);
  };

  const handleContinue = () => {
    if (selectedAnswer === null) return;

    const correct = selectedAnswer === currentTask.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      setStreak(prev => prev + 1);
      setLessonScore(prev => prev + 10);
    } else {
      setLives(prev => prev - 1);
      setStreak(0);
    }

    setTimeout(() => {
      if (currentTaskIndex === tasks.length - 1) {
        // Lesson complete
        onLessonComplete(lessonId, lessonScore);
        navigate('/modules', { replace: true });
      } else {
        // Next task
        setCurrentTaskIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setShowResult(false);
      }
    }, 2000);
  };

  const handleExit = () => {
    onLessonExit(lessonId, currentTaskIndex, progress);
    navigate('/modules', { replace: true });
  };

  if (lives <= 0) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl p-8 mx-4 text-center max-w-md"
        >
          <div className="text-6xl mb-4">💔</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Out of Lives!</h2>
          <p className="text-gray-600 mb-6">Don't worry, you can try again later.</p>
          <button
            onClick={handleExit}
            className="w-full bg-red-500 text-white py-3 rounded-xl font-medium hover:bg-red-600 transition-colors"
          >
            Back to Modules
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <button
          onClick={handleExit}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {/* Progress Bar */}
        <div className="flex-1 mx-4">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Lives and Streak */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Heart className="text-red-500" size={20} />
            <span className="font-medium text-red-500">{lives}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Flame className="text-orange-500" size={20} />
            <span className="font-medium text-orange-500">{streak}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between p-6 max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTaskIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col justify-center"
          >
            {/* Task Content */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
                {currentTask.question}
              </h2>
              
              {/* Task-specific content will be rendered here */}
              <div className="space-y-4">
                {/* This would be replaced with task-specific components */}
                {currentTask.type === 'multiple-choice' && (
                  <div className="space-y-3">
                    {currentTask.content.options.map((option: any, index: number) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswerSelect(option)}
                        className={`w-full p-4 text-left border-2 rounded-xl transition-all ${
                          selectedAnswer === option
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Continue Button */}
        <div className="pt-6">
          <motion.button
            onClick={handleContinue}
            disabled={selectedAnswer === null}
            whileHover={{ scale: selectedAnswer ? 1.02 : 1 }}
            whileTap={{ scale: selectedAnswer ? 0.98 : 1 }}
            className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
              selectedAnswer
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
          </motion.button>
        </div>
      </div>

      {/* Result Overlay */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-x-0 bottom-0 p-6 ${
              isCorrect ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-bold">
                {isCorrect ? '🎉 Correct!' : '❌ Incorrect'}
              </h3>
              <p className="text-green-100">
                {isCorrect 
                  ? 'Great job! Keep it up!' 
                  : `The correct answer was: ${currentTask.correctAnswer}`
                }
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FullScreenLessonLayout;
