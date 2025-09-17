import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Activity, CheckCircle, Clock, Calculator, Heart, Target } from 'lucide-react';
import { TaskData } from '../../../types/eventTypes';
import ECGStrip from '../../ECGStrip';
import ControlledMeasurementInput from '../../ControlledMeasurementInput';

interface ECGRhythmTaskProps {
  task: TaskData;
  onProgress: (score: number) => void;
  onComplete: (score: number) => void;
}

export const ECGRhythmTask: React.FC<ECGRhythmTaskProps> = ({ task, onProgress, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [measurements, setMeasurements] = useState<{ [key: string]: number }>({});
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [completed, setCompleted] = useState<boolean[]>([]);
  const [submitted, setSubmitted] = useState<boolean[]>([]);

  // Real ECG analysis with actual medical values
  const ecgAnalysis = {
    stripImage: '/images/ecg-strips/normal-sinus-rhythm.png',
    scenario: 'A 45-year-old patient presents with chest pain. Analyze this 12-lead ECG.',
    steps: [
      {
        id: 'rate',
        title: 'Heart Rate Calculation',
        instruction: 'Calculate the heart rate using the R-R interval method',
        type: 'measurement',
        target: 75,
        tolerance: 10,
        unit: 'bpm',
        hint: 'Count R waves in 6 seconds and multiply by 10, or use 300 ÷ (large squares between R waves)',
        explanation: 'Normal heart rate is 60-100 bpm. This rhythm shows approximately 75 bpm.'
      },
      {
        id: 'pr_interval',
        title: 'PR Interval Measurement',
        instruction: 'Measure the PR interval duration',
        type: 'measurement',
        target: 160,
        tolerance: 40,
        unit: 'ms',
        hint: 'Measure from start of P wave to start of QRS complex (normal: 120-200ms)',
        explanation: 'PR interval represents atrial depolarization and AV conduction time.'
      },
      {
        id: 'qrs_duration',
        title: 'QRS Duration',
        instruction: 'Measure the QRS complex width',
        type: 'measurement',
        target: 100,
        tolerance: 20,
        unit: 'ms',
        hint: 'Measure from start to end of QRS complex (normal: <120ms)',
        explanation: 'QRS duration represents ventricular depolarization time.'
      },
      {
        id: 'qt_interval',
        title: 'QT Interval',
        instruction: 'Measure the QT interval',
        type: 'measurement',
        target: 400,
        tolerance: 40,
        unit: 'ms',
        hint: 'Measure from start of QRS to end of T wave',
        explanation: 'QT interval represents total ventricular depolarization and repolarization.'
      },
      {
        id: 'rhythm',
        title: 'Rhythm Interpretation',
        instruction: 'What is the rhythm interpretation?',
        type: 'choice',
        options: [
          'Normal Sinus Rhythm',
          'Sinus Tachycardia', 
          'Sinus Bradycardia',
          'Atrial Fibrillation',
          'First Degree AV Block'
        ],
        correct: 0,
        explanation: 'This shows normal sinus rhythm: regular P waves, normal PR interval, QRS <120ms, rate 60-100 bpm'
      }
    ]
  };

  const currentStepData = ecgAnalysis.steps[currentStep];

  // Memoized handlers to prevent unnecessary re-renders
  const handleMeasurement = useCallback((stepId: string, value: number) => {
    const newMeasurements = { ...measurements, [stepId]: value };
    setMeasurements(newMeasurements);
    
    // Mark as submitted
    const newSubmitted = [...submitted];
    newSubmitted[currentStep] = true;
    setSubmitted(newSubmitted);
    
    // Check if correct
    const step = ecgAnalysis.steps.find(s => s.id === stepId);
    if (step && step.type === 'measurement') {
      const isCorrect = Math.abs(value - step.target) <= step.tolerance;
      const newCompleted = [...completed];
      newCompleted[currentStep] = isCorrect;
      setCompleted(newCompleted);
      
      // Calculate progress
      const correctAnswers = newCompleted.filter(Boolean).length;
      const progress = (correctAnswers / ecgAnalysis.steps.length) * 100;
      onProgress(progress);
      
      // Auto advance after delay
      setTimeout(() => {
        if (currentStep < ecgAnalysis.steps.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          const finalScore = (correctAnswers / ecgAnalysis.steps.length) * 100;
          onComplete(finalScore);
        }
      }, 3000);
    }
  }, [measurements, submitted, currentStep, completed, onProgress, onComplete, ecgAnalysis.steps]);

  const handleChoice = useCallback((choiceIndex: number) => {
    // Mark as submitted
    const newSubmitted = [...submitted];
    newSubmitted[currentStep] = true;
    setSubmitted(newSubmitted);
    
    // Store answer
    const newAnswers = { ...answers, [currentStepData.id]: choiceIndex };
    setAnswers(newAnswers);
    
    // Check if correct
    const isCorrect = choiceIndex === currentStepData.correct;
    const newCompleted = [...completed];
    newCompleted[currentStep] = isCorrect;
    setCompleted(newCompleted);
    
    // Calculate progress
    const correctAnswers = newCompleted.filter(Boolean).length;
    const progress = (correctAnswers / ecgAnalysis.steps.length) * 100;
    onProgress(progress);
    
    // Auto advance after delay
    setTimeout(() => {
      if (currentStep < ecgAnalysis.steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        const finalScore = (correctAnswers / ecgAnalysis.steps.length) * 100;
        onComplete(finalScore);
      }
    }, 3000);
  }, [submitted, currentStep, answers, completed, currentStepData, onProgress, onComplete, ecgAnalysis.steps]);

  const MultipleChoiceStep: React.FC<{ step: any }> = ({ step }) => {
    const selectedAnswer = answers[step.id];
    const isSubmitted = submitted[currentStep];
    
    return (
      <div className="space-y-4">
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="text-green-900 font-bold text-lg mb-2">{step.title}</h3>
          <p className="text-green-800 font-medium">{step.instruction}</p>
        </div>
        
        <div className="space-y-3">
          {step.options.map((option: string, index: number) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === step.correct;
            const showResult = isSubmitted;
            
            let buttonClass = 'w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ';
            
            if (showResult) {
              if (isSelected && isCorrect) {
                buttonClass += 'border-green-500 bg-green-100 text-green-800';
              } else if (isSelected && !isCorrect) {
                buttonClass += 'border-red-500 bg-red-100 text-red-800';
              } else if (isCorrect) {
                buttonClass += 'border-green-500 bg-green-50 text-green-700';
              } else {
                buttonClass += 'border-gray-300 bg-gray-50 text-gray-600';
              }
            } else {
              if (isSelected) {
                buttonClass += 'border-blue-500 bg-blue-50 text-blue-800';
              } else {
                buttonClass += 'border-gray-300 hover:border-blue-300 hover:bg-blue-50';
              }
            }
            
            return (
              <motion.button
                key={index}
                whileHover={!showResult ? { scale: 1.01 } : {}}
                whileTap={!showResult ? { scale: 0.99 } : {}}
                onClick={() => !isSubmitted && handleChoice(index)}
                disabled={isSubmitted}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {showResult && (
                    <span>
                      {isSelected && isCorrect && '✅'}
                      {isSelected && !isCorrect && '❌'}
                      {!isSelected && isCorrect && '✅'}
                    </span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {isSubmitted && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 text-sm font-medium">{step.explanation}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-3">
          <Activity className="w-8 h-8 text-red-500 mr-3" />
          <h1 className="text-2xl font-bold text-gray-900">ECG Rhythm Analysis</h1>
        </div>
        <p className="text-gray-600">{ecgAnalysis.scenario}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Step {currentStep + 1} of {ecgAnalysis.steps.length}</span>
          <span>{Math.round(((currentStep + 1) / ecgAnalysis.steps.length) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div 
            className="h-2 bg-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / ecgAnalysis.steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* ECG Strip Display */}
      <div className="mb-8">
        <div className="bg-black rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">ECG Monitor - Lead II</span>
            </div>
            <div className="text-green-400 text-sm">25 mm/s, 10 mm/mV</div>
          </div>
          
          {/* Real ECG Strip Component */}
          <ECGStrip rhythm="normal" rate={75} />
        </div>
      </div>

      {/* Current Step Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {currentStepData.type === 'measurement' ? (
          <ControlledMeasurementInput
            stepId={currentStepData.id}
            step={currentStepData}
            onSubmit={handleMeasurement}
            isSubmitted={submitted[currentStep]}
            submittedValue={measurements[currentStepData.id]}
          />
        ) : (
          <MultipleChoiceStep step={currentStepData} />
        )}
      </div>

      {/* Step Navigation */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Previous Step
        </button>
        
        <div className="flex space-x-2">
          {ecgAnalysis.steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentStep
                  ? 'bg-blue-600'
                  : completed[index]
                  ? 'bg-green-500'
                  : submitted[index]
                  ? 'bg-red-500'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={() => setCurrentStep(Math.min(ecgAnalysis.steps.length - 1, currentStep + 1))}
          disabled={currentStep === ecgAnalysis.steps.length - 1}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next Step →
        </button>
      </div>
    </div>
  );
};

export default ECGRhythmTask;
