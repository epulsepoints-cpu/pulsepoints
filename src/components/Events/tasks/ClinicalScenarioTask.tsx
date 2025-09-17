import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, CheckCircle, X, Clock, Heart, User, FileText, Eye, EyeOff } from 'lucide-react';
import { SimpleTask } from '../../../types/simpleEventTypes';

interface ClinicalScenarioTaskProps {
  task: SimpleTask;
  onComplete: (score: number) => void;
  onBack: () => void;
}

interface PatientInfo {
  age: string;
  gender: string;
  symptoms: string[];
  vitals: {
    hr: string;
    bp: string;
    resp: string;
    temp: string;
  };
  history: string[];
}

export const ClinicalScenarioTask: React.FC<ClinicalScenarioTaskProps> = ({ 
  task, 
  onComplete, 
  onBack 
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showPatientInfo, setShowPatientInfo] = useState(true);
  const [showECGImage, setShowECGImage] = useState(true);

  const questions = task.questions || [];
  const currentQuestion = questions[currentQuestionIndex];

  // Generate patient information based on the task
  const patientInfo: PatientInfo = {
    age: "65 years old",
    gender: "Male",
    symptoms: [
      "Chest pain radiating to left arm",
      "Shortness of breath",
      "Nausea and sweating"
    ],
    vitals: {
      hr: "110 bpm",
      bp: "140/90 mmHg",
      resp: "22/min",
      temp: "37.2°C"
    },
    history: [
      "Hypertension for 10 years",
      "Type 2 diabetes",
      "Previous MI 5 years ago"
    ]
  };

  const handleAnswerSelect = (answer: string) => {
    if (showAnswer) return;

    // For single selection, replace the current selection
    setSelectedAnswers([answer]);
  };

  const handleSubmit = () => {
    if (selectedAnswers.length === 0) return;
    
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedAnswers.join(', ');
    setAnswers(newAnswers);
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswers([]);
      setShowAnswer(false);
    } else {
      // Calculate score based on clinical decision accuracy
      const correctAnswers = answers.filter((answer, index) => {
        const question = questions[index];
        // For single choice
        const correctIndex = Array.isArray(question.correct) ? question.correct[0] : question.correct;
        return answer === question.options[correctIndex];
      }).length;
      
      const score = Math.round((correctAnswers / questions.length) * 100);
      onComplete(score);
    }
  };

  const isCorrectAnswer = (answer: string): boolean => {
    if (!currentQuestion) return false;
    
    if (Array.isArray(currentQuestion.correct)) {
      return currentQuestion.correct.some(index => 
        currentQuestion.options[index] === answer
      );
    } else {
      return currentQuestion.options[currentQuestion.correct] === answer;
    }
  };

  const getCorrectAnswers = (): string[] => {
    if (!currentQuestion) return [];
    
    if (Array.isArray(currentQuestion.correct)) {
      return currentQuestion.correct.map(index => currentQuestion.options[index]);
    } else {
      return [currentQuestion.options[currentQuestion.correct]];
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
        <p className="text-gray-500 mb-4">No clinical scenario data available.</p>
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
    <div className="max-w-6xl mx-auto">
      {/* Task Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6 mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Stethoscope className="w-5 h-5 text-red-600" />
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
            className="h-full bg-red-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Patient Information Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Patient Information
              </h2>
              <button
                onClick={() => setShowPatientInfo(!showPatientInfo)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                {showPatientInfo ? 'Hide' : 'Show'}
              </button>
            </div>

            {showPatientInfo && (
              <div className="space-y-4">
                {/* Basic Info */}
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h3 className="font-medium text-blue-800 mb-2">Demographics</h3>
                  <div className="text-sm space-y-1">
                    <div><strong>Age:</strong> {patientInfo.age}</div>
                    <div><strong>Gender:</strong> {patientInfo.gender}</div>
                  </div>
                </div>

                {/* Vital Signs */}
                <div className="bg-green-50 p-3 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2 flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    Vital Signs
                  </h3>
                  <div className="text-sm space-y-1">
                    <div><strong>HR:</strong> {patientInfo.vitals.hr}</div>
                    <div><strong>BP:</strong> {patientInfo.vitals.bp}</div>
                    <div><strong>RR:</strong> {patientInfo.vitals.resp}</div>
                    <div><strong>Temp:</strong> {patientInfo.vitals.temp}</div>
                  </div>
                </div>

                {/* Symptoms */}
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <h3 className="font-medium text-yellow-800 mb-2">Chief Complaints</h3>
                  <ul className="text-sm space-y-1">
                    {patientInfo.symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-start gap-1">
                        <span className="text-yellow-600 mt-1">•</span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Medical History */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2 flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    Medical History
                  </h3>
                  <ul className="text-sm space-y-1">
                    {patientInfo.history.map((item, index) => (
                      <li key={index} className="flex items-start gap-1">
                        <span className="text-gray-600 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Clinical Alerts */}
                <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                  <h3 className="font-medium text-red-800 mb-2 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Priority
                  </h3>
                  <p className="text-sm text-red-700">
                    Time-sensitive clinical decision required. Consider immediate interventions based on ECG findings.
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* ECG Display */}
          {task.ecgImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-600" />
                  12-Lead ECG
                </h2>
                <button
                  onClick={() => setShowECGImage(!showECGImage)}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  {showECGImage ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showECGImage ? 'Hide' : 'Show'} ECG
                </button>
              </div>
              
              {showECGImage && (
                <div className="border rounded-lg overflow-hidden bg-black p-4">
                  <img
                    src={task.ecgImage}
                    alt="12-Lead ECG"
                    className="w-full h-auto object-contain"
                    style={{ 
                      imageRendering: 'crisp-edges',
                      filter: 'contrast(1.2) brightness(1.1)'
                    }}
                  />
                </div>
              )}
              
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Clinical Context:</strong> Analyze this ECG in the context of the patient's presentation. 
                  Consider the symptoms, vital signs, and medical history when making your clinical decisions.
                </p>
              </div>
            </motion.div>
          )}

          {/* Question Section */}
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-4">{currentQuestion?.question}</h2>
            
            {/* Answer Options */}
            <div className="space-y-3 mb-6">
              {currentQuestion?.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`
                    w-full p-4 rounded-lg border-2 transition-all text-left
                    ${selectedAnswers.includes(option)
                      ? showAnswer
                        ? isCorrectAnswer(option)
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : 'border-red-500 bg-red-50 text-red-800'
                        : 'border-red-500 bg-red-50 text-red-800'
                      : showAnswer && isCorrectAnswer(option)
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
                    }
                    ${showAnswer ? 'cursor-default' : 'cursor-pointer hover:shadow-md'}
                  `}
                  disabled={showAnswer}
                  whileHover={!showAnswer ? { scale: 1.01 } : {}}
                  whileTap={!showAnswer ? { scale: 0.99 } : {}}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {showAnswer && selectedAnswers.includes(option) && (
                      isCorrectAnswer(option) ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )
                    )}
                    {showAnswer && isCorrectAnswer(option) && !selectedAnswers.includes(option) && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
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
                  getCorrectAnswers().every(answer => selectedAnswers.includes(answer)) &&
                  selectedAnswers.every(answer => getCorrectAnswers().includes(answer))
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    {getCorrectAnswers().every(answer => selectedAnswers.includes(answer)) &&
                     selectedAnswers.every(answer => getCorrectAnswers().includes(answer)) ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 text-red-600" />
                    )}
                    <span className={`font-semibold ${
                      getCorrectAnswers().every(answer => selectedAnswers.includes(answer)) &&
                      selectedAnswers.every(answer => getCorrectAnswers().includes(answer))
                        ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {getCorrectAnswers().every(answer => selectedAnswers.includes(answer)) &&
                       selectedAnswers.every(answer => getCorrectAnswers().includes(answer))
                        ? 'Correct Clinical Decision!' : 'Incorrect'}
                    </span>
                  </div>
                  
                  {!(getCorrectAnswers().every(answer => selectedAnswers.includes(answer)) &&
                     selectedAnswers.every(answer => getCorrectAnswers().includes(answer))) && (
                    <p className="text-red-700 mb-2">
                      <strong>Correct Answer(s):</strong> {getCorrectAnswers().join(', ')}
                    </p>
                  )}
                  
                  <p className={`text-sm ${
                    getCorrectAnswers().every(answer => selectedAnswers.includes(answer)) &&
                    selectedAnswers.every(answer => getCorrectAnswers().includes(answer))
                      ? 'text-green-700' : 'text-red-700'
                  }`}>
                    <strong>Clinical Rationale:</strong> {currentQuestion?.explanation}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between">
              <div className="text-gray-600 text-sm">
                Clinical Scenario Task
              </div>
              
              <div className="flex gap-3">
                {!showAnswer ? (
                  <button
                    onClick={handleSubmit}
                    disabled={selectedAnswers.length === 0}
                    className={`
                      px-6 py-2 rounded-lg font-medium transition-all
                      ${selectedAnswers.length > 0
                        ? 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }
                    `}
                  >
                    Submit Decision
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
                  >
                    {currentQuestionIndex < questions.length - 1 ? 'Next Case' : 'Complete Scenario'}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalScenarioTask;
