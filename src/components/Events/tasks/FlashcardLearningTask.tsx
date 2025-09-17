import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, ChevronLeft, ChevronRight, CheckCircle, Clock, BookOpen } from 'lucide-react';
import { SimpleTask, FlashCard } from '../../../types/simpleEventTypes';

interface FlashcardLearningTaskProps {
  task: SimpleTask;
  onComplete: (score: number) => void;
  onBack: () => void;
}

export const FlashcardLearningTask: React.FC<FlashcardLearningTaskProps> = ({ 
  task, 
  onComplete, 
  onBack 
}) => {
  console.log('🃏 FlashcardLearningTask loaded:', { 
    taskTitle: task.title, 
    flashcardsCount: task.flashcards?.length || 0,
    questionsCount: task.questions?.length || 0,
    taskType: task.type 
  });

  const [currentPhase, setCurrentPhase] = useState<'flashcards' | 'quiz'>('flashcards');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completedCards, setCompletedCards] = useState<Set<number>>(new Set());
  
  // Quiz phase states
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const flashcards = task.flashcards || [];
  const questions = task.questions || [];
  const currentCard = flashcards[currentCardIndex];
  const currentQ = questions[currentQuestion];

  // Safety check for missing data
  if (flashcards.length === 0) {
    console.error('❌ No flashcards found for task:', task.id);
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-4">No flashcards available for this task.</p>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    console.error('❌ No questions found for task:', task.id);
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

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMarkCardComplete = () => {
    const newCompleted = new Set(completedCards);
    newCompleted.add(currentCardIndex);
    setCompletedCards(newCompleted);
  };

  const handleNextCard = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleStartQuiz = () => {
    setCurrentPhase('quiz');
  };

  // Quiz handlers
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

  if (currentPhase === 'flashcards') {
    return (
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">{task.title}</h1>
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(task.difficulty)}`}>
                {task.difficulty}
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{task.estimatedTime} min</span>
              </div>
            </div>
          </div>
          <p className="text-gray-600">{task.description}</p>
        </motion.div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              Card {currentCardIndex + 1} of {flashcards.length}
            </span>
            <span className="text-sm text-gray-600">
              Completed: {completedCards.size} / {flashcards.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedCards.size / flashcards.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Flashcard */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="relative w-full max-w-2xl mx-auto">
            <motion.div
              className="bg-white rounded-xl shadow-lg border border-gray-200 min-h-[500px] cursor-pointer"
              onClick={handleCardFlip}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isFlipped ? 'back' : 'front'}
                  initial={{ rotateY: 180, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -180, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="p-6"
                >
                  {!isFlipped ? (
                    // Front of card
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">
                        {currentCard?.title}
                      </h3>
                      
                      {/* ECG Image */}
                      <div className="mb-6">
                        <img
                          src={currentCard?.ecgImage}
                          alt="ECG Strip"
                          className="w-full max-w-lg mx-auto rounded-lg border border-gray-300"
                          onError={(e) => {
                            e.currentTarget.src = '/ecg/placeholder-ecg.png';
                          }}
                        />
                      </div>

                      <p className="text-lg text-gray-700 mb-6">
                        {currentCard?.frontContent}
                      </p>

                      <div className="text-sm text-gray-500 flex items-center justify-center space-x-2">
                        <RotateCcw className="w-4 h-4" />
                        <span>Click to reveal answer</span>
                      </div>
                    </div>
                  ) : (
                    // Back of card
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">
                        Answer & Explanation
                      </h3>

                      <p className="text-lg text-gray-700 mb-6">
                        {currentCard?.backContent}
                      </p>

                      {/* Key Points */}
                      <div className="bg-blue-50 rounded-lg p-4 mb-6">
                        <h4 className="font-semibold mb-3 text-blue-900">Key Learning Points:</h4>
                        <ul className="text-left space-y-2">
                          {currentCard?.keyPoints.map((point, index) => (
                            <li key={index} className="flex items-start space-x-2 text-blue-800">
                              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMarkCardComplete();
                        }}
                        disabled={completedCards.has(currentCardIndex)}
                        className={`px-4 py-2 rounded-lg font-medium ${
                          completedCards.has(currentCardIndex)
                            ? 'bg-green-100 text-green-800 cursor-not-allowed'
                            : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                      >
                        {completedCards.has(currentCardIndex) ? 'Completed ✓' : 'Mark as Understood'}
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevCard}
            disabled={currentCardIndex === 0}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {flashcards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentCardIndex(index);
                  setIsFlipped(false);
                }}
                className={`w-3 h-3 rounded-full ${
                  index === currentCardIndex
                    ? 'bg-blue-600'
                    : completedCards.has(index)
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {currentCardIndex < flashcards.length - 1 ? (
            <button
              onClick={handleNextCard}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleStartQuiz}
              disabled={completedCards.size < flashcards.length}
              className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <BookOpen className="w-4 h-4" />
              <span>Start Quiz</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // Quiz Phase
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Knowledge Check</h1>
        <p className="text-gray-600">Answer these questions based on what you learned from the flashcards.</p>
      </motion.div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6"
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          {currentQ?.question}
        </h3>

        <div className="space-y-3">
          {currentQ?.options.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showFeedback}
              className={`w-full p-4 text-left rounded-lg border transition-all ${
                selectedAnswer === index
                  ? showFeedback
                    ? index === currentQ.correct
                      ? 'bg-green-100 border-green-500 text-green-800'
                      : 'bg-red-100 border-red-500 text-red-800'
                    : 'bg-blue-100 border-blue-500 text-blue-800'
                  : showFeedback && index === currentQ.correct
                  ? 'bg-green-100 border-green-500 text-green-800'
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
              whileHover={{ scale: showFeedback ? 1 : 1.02 }}
              whileTap={{ scale: showFeedback ? 1 : 0.98 }}
            >
              <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
            </motion.button>
          ))}
        </div>

        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-blue-50 rounded-lg"
          >
            <p className="text-blue-800 text-sm">
              <strong>Explanation:</strong> {currentQ?.explanation}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Actions */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
        >
          Back to Overview
        </button>

        {!showFeedback ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={selectedAnswer === null}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Task'}
          </button>
        )}
      </div>
    </div>
  );
};

export default FlashcardLearningTask;
