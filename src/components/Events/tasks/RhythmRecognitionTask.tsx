import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, CheckCircle, X, Eye, EyeOff } from 'lucide-react';
import { SimpleTask } from '../../../types/simpleEventTypes';

interface RhythmRecognitionTaskProps {
  task: SimpleTask;
  onComplete: (score: number) => void;
  onBack: () => void;
}

export const RhythmRecognitionTask: React.FC<RhythmRecognitionTaskProps> = ({ 
  task, 
  onComplete, 
  onBack 
}) => {
  const [selectedRhythm, setSelectedRhythm] = useState<string>('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showECGImage, setShowECGImage] = useState(true);

  const questions = task.questions || [];
  const currentQuestion = questions[currentQuestionIndex];

  // Rhythm options based on the task's rhythm type
  const rhythmOptions = [
    'Normal Sinus Rhythm',
    'Sinus Bradycardia',
    'Sinus Tachycardia',
    'Atrial Fibrillation',
    'Atrial Flutter',
    'Ventricular Tachycardia',
    'Ventricular Fibrillation',
    'Supraventricular Tachycardia',
    'Premature Ventricular Contractions',
    'First Degree AV Block',
    'Second Degree AV Block',
    'Third Degree AV Block',
    'Left Bundle Branch Block',
    'Right Bundle Branch Block'
  ];

  const handleRhythmSelect = (rhythm: string) => {
    if (!showAnswer) {
      setSelectedRhythm(rhythm);
    }
  };

  const handleSubmit = () => {
    if (!selectedRhythm) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedRhythm;
    setAnswers(newAnswers);
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedRhythm('');
      setShowAnswer(false);
    } else {
      // Calculate score based on correct rhythm recognition
      const correctAnswers = answers.filter((answer, index) => {
        const question = questions[index];
        const correctOption = question.options[question.correct];
        return answer.toLowerCase().includes(correctOption.toLowerCase()) ||
               correctOption.toLowerCase().includes(answer.toLowerCase());
      }).length;
      
      const score = Math.round((correctAnswers / questions.length) * 100);
      onComplete(score);
    }
  };

  const isCorrectRhythm = (rhythm: string): boolean => {
    if (!currentQuestion) return false;
    const correctOption = currentQuestion.options[currentQuestion.correct];
    return rhythm.toLowerCase().includes(correctOption.toLowerCase()) ||
           correctOption.toLowerCase().includes(rhythm.toLowerCase());
  };

  const getCorrectRhythm = (): string => {
    if (!currentQuestion) return '';
    return currentQuestion.options[currentQuestion.correct];
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
        <p className="text-gray-500 mb-4">No rhythm recognition data available.</p>
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
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Zap className="w-5 h-5 text-yellow-600" />
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
              <div className="font-bold">{currentQuestionIndex + 1}/{questions.length}</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="h-full bg-yellow-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* ECG Strip Display */}
      {task.ecgImage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              ECG Rhythm Strip
            </h2>
            <button
              onClick={() => setShowECGImage(!showECGImage)}
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
            >
              {showECGImage ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showECGImage ? 'Hide' : 'Show'} Strip
            </button>
          </div>
          
          {showECGImage && (
            <div className="border rounded-lg overflow-hidden bg-black p-4">
              <img
                src={task.ecgImage}
                alt="ECG Rhythm Strip"
                className="w-full h-auto object-contain"
                style={{ 
                  imageRendering: 'crisp-edges',
                  filter: 'contrast(1.2) brightness(1.1)'
                }}
              />
            </div>
          )}
          
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Instructions:</strong> Analyze the rhythm pattern, rate, and regularity. 
              Identify any abnormal features such as P wave morphology, PR intervals, and QRS complexes.
            </p>
          </div>
        </motion.div>
      )}

      {/* Current Question */}
      <motion.div
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-xl shadow-lg p-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">{currentQuestion?.question}</h2>
        
        {/* Rhythm Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {rhythmOptions.map((rhythm) => (
            <motion.button
              key={rhythm}
              onClick={() => handleRhythmSelect(rhythm)}
              className={`
                p-3 rounded-lg border-2 transition-all text-left
                ${selectedRhythm === rhythm
                  ? showAnswer
                    ? isCorrectRhythm(rhythm)
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-red-500 bg-red-50 text-red-800'
                    : 'border-yellow-500 bg-yellow-50 text-yellow-800'
                  : showAnswer && isCorrectRhythm(rhythm)
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
                }
                ${showAnswer ? 'cursor-default' : 'cursor-pointer hover:shadow-md'}
              `}
              disabled={showAnswer}
              whileHover={!showAnswer ? { scale: 1.02 } : {}}
              whileTap={!showAnswer ? { scale: 0.98 } : {}}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm">{rhythm}</span>
                {showAnswer && selectedRhythm === rhythm && (
                  isCorrectRhythm(rhythm) ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <X className="w-4 h-4 text-red-500" />
                  )
                )}
                {showAnswer && isCorrectRhythm(rhythm) && selectedRhythm !== rhythm && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Answer Feedback */}
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className={`p-4 rounded-lg border ${
              isCorrectRhythm(selectedRhythm) 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrectRhythm(selectedRhythm) ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <X className="w-5 h-5 text-red-600" />
                )}
                <span className={`font-semibold ${
                  isCorrectRhythm(selectedRhythm) ? 'text-green-800' : 'text-red-800'
                }`}>
                  {isCorrectRhythm(selectedRhythm) ? 'Correct!' : 'Incorrect'}
                </span>
              </div>
              
              {!isCorrectRhythm(selectedRhythm) && (
                <p className="text-red-700 mb-2">
                  <strong>Correct Answer:</strong> {getCorrectRhythm()}
                </p>
              )}
              
              <p className={`text-sm ${
                isCorrectRhythm(selectedRhythm) ? 'text-green-700' : 'text-red-700'
              }`}>
                <strong>Explanation:</strong> {currentQuestion?.explanation}
              </p>
            </div>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between">
          <div className="text-gray-600 text-sm">
            {task.rhythmType && (
              <span>Focus: {task.rhythmType}</span>
            )}
          </div>
          
          <div className="flex gap-3">
            {!showAnswer ? (
              <button
                onClick={handleSubmit}
                disabled={!selectedRhythm}
                className={`
                  px-6 py-2 rounded-lg font-medium transition-all
                  ${selectedRhythm
                    ? 'bg-yellow-600 text-white hover:bg-yellow-700 shadow-md hover:shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
              >
                {currentQuestionIndex < questions.length - 1 ? 'Next Strip' : 'Complete Task'}
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RhythmRecognitionTask;
