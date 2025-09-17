import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, BookOpen, Image as ImageIcon } from 'lucide-react';
import { SimpleTask } from '../../../types/simpleEventTypes';

interface ECGQuizTaskProps {
  task: SimpleTask;
  onComplete: (score: number) => void;
  onBack: () => void;
}

export const ECGQuizTask: React.FC<ECGQuizTaskProps> = ({ task, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showECGImage, setShowECGImage] = useState(true);

  const questions = task.questions || [];
  const currentQ = questions[currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showFeedback) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Calculate final score
      const correctAnswers = answers.filter((answer, index) => 
        answer === questions[index].correct
      ).length;
      const score = Math.round((correctAnswers / questions.length) * 100);
      onComplete(score);
    }
  };

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-4">No questions available for this task.</p>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Task Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6 mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{task.title}</h1>
              <p className="text-gray-600">{task.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(task.difficulty)}`}>
              {task.difficulty.toUpperCase()}
            </span>
            <div className="text-right">
              <div className="text-sm text-gray-600">Question</div>
              <div className="font-bold">{currentQuestion + 1}/{questions.length}</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* ECG Image Display */}
      {task.ecgImage && showECGImage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-gray-600" />
              ECG Strip Analysis
            </h2>
            <button
              onClick={() => setShowECGImage(!showECGImage)}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              {showECGImage ? 'Hide' : 'Show'} ECG
            </button>
          </div>
          <div className="border rounded-lg overflow-hidden bg-gray-50">
            <img
              src={task.ecgImage}
              alt="ECG Strip for analysis"
              className="w-full h-auto object-contain max-h-64"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Analyze this ECG strip to answer the questions below.
          </p>
        </motion.div>
      )}

      {/* Question */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">{currentQ?.question}</h2>
          
          {/* Answer Options */}
          <div className="space-y-3">
            {currentQ?.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`
                  w-full text-left p-4 rounded-lg border-2 transition-all
                  ${selectedAnswer === index
                    ? showFeedback
                      ? index === currentQ.correct
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-red-500 bg-red-50 text-red-800'
                      : 'border-blue-500 bg-blue-50'
                    : showFeedback && index === currentQ.correct
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }
                  ${showFeedback ? 'cursor-default' : 'cursor-pointer hover:shadow-md'}
                `}
                disabled={showFeedback}
                whileHover={!showFeedback ? { scale: 1.01 } : {}}
                whileTap={!showFeedback ? { scale: 0.99 } : {}}
              >
                <div className="flex items-center gap-3">
                  <div className={`
                    w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold
                    ${selectedAnswer === index
                      ? showFeedback
                        ? index === currentQ.correct
                          ? 'border-green-500 bg-green-500 text-white'
                          : 'border-red-500 bg-red-500 text-white'
                        : 'border-blue-500 bg-blue-500 text-white'
                      : showFeedback && index === currentQ.correct
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-300'
                    }
                  `}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="flex-1">{option}</span>
                  {showFeedback && index === currentQ.correct && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Feedback */}
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg"
          >
            <h3 className="font-semibold text-blue-800 mb-2">Explanation:</h3>
            <p className="text-blue-700">{currentQ?.explanation}</p>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Difficulty: {task.difficulty}</span>
          </div>
          
          <div className="flex gap-3">
            {!showFeedback ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className={`
                  px-6 py-2 rounded-lg font-medium transition-all
                  ${selectedAnswer !== null
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Task'}
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ECGQuizTask;
