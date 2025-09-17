import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, HelpCircle, Play, BookOpen, Image, ArrowLeft } from 'lucide-react';
import { TaskData } from '../../../types/eventTypes';
import { MobileTaskWrapper } from './MobileTaskWrapper';

interface H5PQuizTaskProps {
  task: TaskData;
  onProgress: (score: number) => void;
  onComplete: (score: number) => void;
  onBack?: () => void;
}

export const H5PQuizTask: React.FC<H5PQuizTaskProps> = ({ task, onProgress, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showEducationalContent, setShowEducationalContent] = useState(true);

  // Get quiz content from task or use fallback
  const quizContent = task.content.quiz || {
    questions: [
      {
        id: '1',
        question: 'What is the normal heart rate range for adults?',
        options: ['40-60 bpm', '60-100 bpm', '100-150 bpm', '150-200 bpm'],
        correct: 1,
        explanation: 'Normal adult resting heart rate is 60-100 beats per minute.',
        difficulty: 'easy' as const
      },
      {
        id: '2',
        question: 'Which lead provides the best view of the inferior wall?',
        options: ['Lead I', 'Lead II', 'Lead V1', 'Lead aVR'],
        correct: 1,
        explanation: 'Lead II provides an excellent view of the inferior wall of the heart.',
        difficulty: 'medium' as const
      },
      {
        id: '3',
        question: 'What does a widened QRS complex indicate?',
        options: [
          'Normal conduction',
          'Delayed ventricular conduction',
          'Atrial enlargement',
          'Sinus tachycardia'
        ],
        correct: 1,
        explanation: 'A QRS width >120ms indicates delayed ventricular conduction, often due to bundle branch blocks.',
        difficulty: 'hard' as const
      }
    ],
    passingScore: 80
  };

  const questions = quizContent.questions;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setShowFeedback(true);

    // Calculate current progress
    const correctAnswers = newAnswers.filter((answer, index) => 
      index < questions.length && answer === questions[index].correct
    ).length;
    const progress = Math.round((correctAnswers / questions.length) * 100);
    onProgress(progress);

    // Auto-advance after showing feedback
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        // Quiz complete
        onComplete(progress);
      }
    }, 2000);
  };

  const currentQ = questions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correct;

  return (
    <MobileTaskWrapper 
      title="Quiz Challenge" 
      onBack={onBack} 
      showBackButton={!!onBack}
    >
      <div className="w-full p-4 md:p-6">
        {/* Educational Content Section */}
      {showEducationalContent && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6 border border-blue-200"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              Study Materials
            </h3>
            <button
              onClick={() => setShowEducationalContent(false)}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Start Quiz →
            </button>
          </div>
          
          {/* Educational Video */}
          {quizContent.educationalVideo && (
            <div className="mb-4">
              <div className="bg-white rounded-lg p-4 border">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <Play className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{quizContent.educationalVideo.title}</h4>
                    <p className="text-sm text-gray-600">{quizContent.educationalVideo.description}</p>
                    <div className="text-xs text-gray-500 mt-1">
                      Duration: {Math.floor(quizContent.educationalVideo.duration / 60)}:{(quizContent.educationalVideo.duration % 60).toString().padStart(2, '0')}
                    </div>
                  </div>
                  <button
                    onClick={() => window.open(quizContent.educationalVideo.youtubeUrl, '_blank')}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Watch</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Reference Images */}
          {quizContent.referenceImages && quizContent.referenceImages.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Image className="w-4 h-4 mr-1" />
                Reference Images
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {quizContent.referenceImages.slice(0, 3).map((imageUrl, index) => (
                  <div key={index} className="bg-white rounded border p-2">
                    <img
                      src={imageUrl}
                      alt={`Reference ${index + 1}`}
                      className="w-full h-16 object-cover rounded"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        (e.target as HTMLImageElement).src = '/images/placeholders/ecg-reference-placeholder.png';
                      }}
                    />
                    <div className="text-xs text-gray-500 mt-1">Reference {index + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* Progress */}
      {!showEducationalContent && (
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              className="h-full bg-blue-500 rounded-full transition-all duration-500"
            />
          </div>
        </div>
      )}

      {/* Question Card */}
      {!showEducationalContent && (
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-6"
        >
        {/* Question Header */}
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {currentQ.question}
            </h3>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                currentQ.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                currentQ.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {currentQ.difficulty}
              </span>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                <span>2 minutes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Answer Options */}
        <div className="space-y-3 mb-6">
          {currentQ.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={!showFeedback ? { scale: 1.02 } : {}}
              whileTap={!showFeedback ? { scale: 0.98 } : {}}
              onClick={() => !showFeedback && handleAnswerSelect(index)}
              disabled={showFeedback}
              className={`
                w-full p-4 rounded-lg border-2 text-left transition-all duration-200
                ${selectedAnswer === index
                  ? showFeedback
                    ? isCorrect
                      ? 'border-green-500 bg-green-50 text-green-900'
                      : 'border-red-500 bg-red-50 text-red-900'
                    : 'border-blue-500 bg-blue-50 text-blue-900'
                  : showFeedback && index === currentQ.correct
                    ? 'border-green-500 bg-green-50 text-green-900'
                    : 'border-gray-200 hover:border-gray-300'
                }
                ${showFeedback ? 'cursor-default' : 'cursor-pointer'}
              `}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showFeedback && (
                  selectedAnswer === index
                    ? isCorrect
                      ? <CheckCircle className="w-5 h-5 text-green-600" />
                      : <div className="w-5 h-5 rounded-full bg-red-500" />
                    : index === currentQ.correct
                      ? <CheckCircle className="w-5 h-5 text-green-600" />
                      : null
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg ${
              isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}
          >
            <div className="flex items-start space-x-2">
              <CheckCircle className={`w-5 h-5 mt-0.5 ${
                isCorrect ? 'text-green-600' : 'text-red-600'
              }`} />
              <div>
                <p className={`font-medium ${
                  isCorrect ? 'text-green-900' : 'text-red-900'
                }`}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </p>
                <p className={`text-sm mt-1 ${
                  isCorrect ? 'text-green-700' : 'text-red-700'
                }`}>
                  {currentQ.explanation}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        {!showFeedback && (
          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className={`
                px-6 py-2 rounded-lg font-medium transition-all duration-200
                ${selectedAnswer !== null
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              Submit Answer
            </motion.button>
          </div>
        )}
      </motion.div>
      )}

      {/* Current Progress Summary */}
      {!showEducationalContent && (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between text-sm">
            <span>Correct Answers:</span>
            <span className="font-medium">
              {answers.filter((answer, index) => answer === questions[index]?.correct).length} / {questions.length}
            </span>
          </div>
        </div>
      )}
      </div>
    </MobileTaskWrapper>
  );
};

export default H5PQuizTask;
