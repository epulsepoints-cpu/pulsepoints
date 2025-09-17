import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, CheckCircle } from 'lucide-react';
import { TaskData } from '../../../types/eventTypes';

interface ECGRhythmTaskProps {
  task: TaskData;
  onProgress: (score: number) => void;
  onComplete: (score: number) => void;
}

export const ECGRhythmTask: React.FC<ECGRhythmTaskProps> = ({ task, onProgress, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<any[]>([]);
  const [measurements, setMeasurements] = useState<any[]>([]);

  // Mock ECG strip data
  const ecgData = {
    stripImage: '/images/ecg-strips/vtach-example.png',
    rhythmType: 'Ventricular Tachycardia',
    steps: [
      {
        title: 'Rate Measurement',
        instruction: 'Count the heart rate using the 6-second method',
        type: 'measurement',
        target: 180,
        tolerance: 15,
        unit: 'bpm'
      },
      {
        title: 'QRS Width',
        instruction: 'Measure the QRS width using calipers',
        type: 'measurement',
        target: 140,
        tolerance: 20,
        unit: 'ms'
      },
      {
        title: 'Rhythm Identification',
        instruction: 'What is this rhythm?',
        type: 'multiple-choice',
        options: [
          'Sinus Tachycardia',
          'Supraventricular Tachycardia',
          'Ventricular Tachycardia',
          'Atrial Flutter'
        ],
        correct: 2
      },
      {
        title: 'Treatment Decision',
        instruction: 'Patient is hypotensive (BP 80/50). What is the immediate treatment?',
        type: 'multiple-choice',
        options: [
          'Synchronized cardioversion 100J',
          'Amiodarone 150mg IV',
          'Lidocaine 1.5mg/kg',
          'Observe and monitor'
        ],
        correct: 0
      }
    ]
  };

  const currentStepData = ecgData.steps[currentStep];

  const handleMeasurement = (value: number) => {
    const newMeasurements = [...measurements];
    newMeasurements[currentStep] = value;
    setMeasurements(newMeasurements);
    
    // Check if within tolerance
    const target = currentStepData.target!;
    const tolerance = currentStepData.tolerance!;
    const isCorrect = Math.abs(value - target) <= tolerance;
    
    updateProgress(isCorrect);
    
    setTimeout(() => {
      nextStep();
    }, 1500);
  };

  const handleMultipleChoice = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = optionIndex;
    setAnswers(newAnswers);
    
    const isCorrect = optionIndex === currentStepData.correct;
    updateProgress(isCorrect);
    
    setTimeout(() => {
      nextStep();
    }, 1500);
  };

  const updateProgress = (isCorrect: boolean) => {
    const totalSteps = ecgData.steps.length;
    const currentProgress = ((currentStep + 1) / totalSteps) * 100;
    onProgress(currentProgress);
  };

  const nextStep = () => {
    if (currentStep < ecgData.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Calculate final score
      const correctAnswers = answers.filter((answer, index) => {
        const step = ecgData.steps[index];
        if (step.type === 'multiple-choice') {
          return answer === step.correct;
        } else if (step.type === 'measurement') {
          const measurement = measurements[index];
          return measurement && Math.abs(measurement - step.target!) <= step.tolerance!;
        }
        return false;
      }).length;
      
      const finalScore = Math.round((correctAnswers / ecgData.steps.length) * 100);
      onComplete(finalScore);
    }
  };

  const MeasurementInput: React.FC<{ step: any }> = ({ step }) => {
    const [value, setValue] = useState('');
    
    return (
      <div className="space-y-4">
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-blue-900 font-medium">{step.instruction}</p>
          <p className="text-blue-700 text-sm mt-1">
            Target range: {step.target - step.tolerance} - {step.target + step.tolerance} {step.unit}
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`Enter value in ${step.unit}`}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <span className="text-gray-600">{step.unit}</span>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleMeasurement(Number(value))}
          disabled={!value}
          className={`
            w-full py-3 rounded-lg font-medium transition-all duration-200
            ${value
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Submit Measurement
        </motion.button>
      </div>
    );
  };

  const MultipleChoiceStep: React.FC<{ step: any }> = ({ step }) => {
    const [selected, setSelected] = useState<number | null>(null);
    
    return (
      <div className="space-y-4">
        <div className="bg-green-50 rounded-lg p-4">
          <p className="text-green-900 font-medium">{step.instruction}</p>
        </div>
        
        <div className="space-y-3">
          {step.options.map((option: string, index: number) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSelected(index);
                handleMultipleChoice(index);
              }}
              className={`
                w-full p-4 rounded-lg border-2 text-left transition-all duration-200
                ${selected === index
                  ? 'border-green-500 bg-green-50 text-green-900'
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}
            >
              {option}
            </motion.button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Step {currentStep + 1} of {ecgData.steps.length}</span>
          <span>ECG Strip Analysis</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / ecgData.steps.length) * 100}%` }}
            className="h-full bg-green-500 rounded-full transition-all duration-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ECG Strip Display */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold">ECG Strip</h3>
            </div>
            
            {/* ECG Strip Image */}
            <div className="bg-black rounded-lg p-4 mb-4">
              <div className="aspect-[3/1] bg-green-900 rounded relative overflow-hidden">
                {/* Mock ECG Grid */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <pattern id="ecg-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#ecg-grid)" />
                </svg>
                
                {/* Mock ECG Waveform */}
                <svg className="absolute inset-0 w-full h-full">
                  <path 
                    d="M0,60 Q50,60 100,60 L120,60 L130,20 L140,100 L150,60 Q200,60 250,60 L270,60 L280,20 L290,100 L300,60 Q350,60 400,60" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            
            {/* Strip Info */}
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Lead:</strong> II</p>
              <p><strong>Speed:</strong> 25 mm/sec</p>
              <p><strong>Gain:</strong> 10 mm/mV</p>
            </div>
          </div>
        </div>

        {/* Current Step */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Target className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold">{currentStepData.title}</h3>
            </div>
            
            {currentStepData.type === 'measurement' ? (
              <MeasurementInput step={currentStepData} />
            ) : (
              <MultipleChoiceStep step={currentStepData} />
            )}
          </div>
          
          {/* Previous Results */}
          {currentStep > 0 && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Previous Results:</h4>
              <div className="space-y-1 text-sm">
                {ecgData.steps.slice(0, currentStep).map((step, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{step.title}:</span>
                    <div className="flex items-center space-x-2">
                      {step.type === 'measurement' ? (
                        <span>{measurements[index]} {step.unit}</span>
                      ) : (
                        <span>{step.options[answers[index]]}</span>
                      )}
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ECGRhythmTask;
