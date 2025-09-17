import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, Play, Pause, RotateCcw, Heart, AlertTriangle, Monitor } from 'lucide-react';
import { TaskData } from '../../../types/eventTypes';
import ECGStrip from '../../ECGStrip';

interface ECGSimulatorTaskProps {
  task: TaskData;
  onProgress: (score: number) => void;
  onComplete: (score: number) => void;
}

export const ECGSimulatorTask: React.FC<ECGSimulatorTaskProps> = ({ task, onProgress, onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [measurements, setMeasurements] = useState<{ [key: string]: number }>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [stepCompleted, setStepCompleted] = useState<boolean[]>([]);

  // Enhanced simulation scenario with real medical values
  const simulationData = {
    scenario: 'Emergency Department: 58-year-old male with chest pain and palpitations',
    patientInfo: {
      name: 'John Smith',
      age: 58,
      gender: 'male' as const,
      vitals: { 
        hr: 180, 
        bp: '90/60', 
        rr: 22, 
        spo2: 95,
        temp: 98.6
      },
      symptoms: ['Chest pain', 'Palpitations', 'Dizziness', 'Shortness of breath']
    },
    steps: [
      {
        id: 'observation',
        title: 'Initial Assessment',
        instruction: 'Observe the patient and rhythm. What do you notice?',
        type: 'observation',
        duration: 15,
        findings: [
          'Wide complex tachycardia',
          'Regular rhythm',
          'Rate approximately 180 bpm',
          'Patient appears distressed'
        ]
      },
      {
        id: 'rate_measurement',
        title: 'Heart Rate Measurement',
        instruction: 'Calculate the heart rate using the ECG',
        type: 'measurement',
        target: 180,
        tolerance: 15,
        unit: 'bpm',
        hint: 'Count QRS complexes in 6 seconds and multiply by 10'
      },
      {
        id: 'qrs_measurement',
        title: 'QRS Width Assessment',
        instruction: 'Measure the QRS width',
        type: 'measurement',
        target: 140,
        tolerance: 20,
        unit: 'ms',
        hint: 'Wide QRS (>120ms) suggests ventricular origin'
      },
      {
        id: 'rhythm_identification',
        title: 'Rhythm Identification',
        instruction: 'What is the most likely rhythm?',
        type: 'choice',
        options: [
          'Sinus Tachycardia with Aberrancy',
          'Supraventricular Tachycardia',
          'Ventricular Tachycardia',
          'Atrial Flutter with 2:1 Conduction'
        ],
        correct: 2,
        explanation: 'Wide complex tachycardia at 180 bpm with hemodynamic instability suggests VT'
      },
      {
        id: 'treatment_decision',
        title: 'Treatment Decision',
        instruction: 'Patient is hypotensive (BP 90/60) and symptomatic. What is your immediate action?',
        type: 'choice',
        options: [
          'Synchronized cardioversion 100J',
          'Amiodarone 150mg IV',
          'Lidocaine 1.5mg/kg IV',
          'Observation and monitoring'
        ],
        correct: 0,
        explanation: 'Unstable VT requires immediate synchronized cardioversion'
      }
    ],
    waveform: {
      type: 'vtach',
      rate: 180,
      amplitude: 50,
      frequency: 3,
      qrsWidth: 140
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        setCurrentTime(prev => prev + 0.1);
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying]);

  const handleMeasurementInput = (stepId: string, value: string) => {
    setUserInputs({ ...userInputs, [stepId]: value });
  };

  const submitMeasurement = (stepId: string) => {
    const value = Number(userInputs[stepId]);
    const step = simulationData.steps.find(s => s.id === stepId);
    
    if (step && step.type === 'measurement') {
      const isCorrect = Math.abs(value - step.target) <= step.tolerance;
      setMeasurements({ ...measurements, [stepId]: value });
      
      // Mark step as completed
      const newCompleted = [...stepCompleted];
      newCompleted[currentStep] = isCorrect;
      setStepCompleted(newCompleted);
      
      // Update progress
      const progress = ((currentStep + 1) / simulationData.steps.length) * 100;
      onProgress(progress);
      
      // Auto advance after showing result
      setTimeout(() => {
        if (currentStep < simulationData.steps.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          calculateFinalScore();
        }
      }, 3000);
    }
  };

  const handleChoice = (choiceIndex: number) => {
    const step = simulationData.steps[currentStep];
    if (step.type === 'choice') {
      const isCorrect = choiceIndex === step.correct;
      
      // Mark step as completed
      const newCompleted = [...stepCompleted];
      newCompleted[currentStep] = isCorrect;
      setStepCompleted(newCompleted);
      
      // Update progress
      const progress = ((currentStep + 1) / simulationData.steps.length) * 100;
      onProgress(progress);
      
      // Auto advance after showing result
      setTimeout(() => {
        if (currentStep < simulationData.steps.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          calculateFinalScore();
        }
      }, 3000);
    }
  };

  const calculateFinalScore = () => {
    const correctSteps = stepCompleted.filter(Boolean).length;
    const finalScore = (correctSteps / simulationData.steps.length) * 100;
    onComplete(finalScore);
  };

  const currentStepData = simulationData.steps[currentStep];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Patient Information Panel */}
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <div className="flex items-center mb-2">
          <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
          <h2 className="text-lg font-bold text-red-800">Emergency Scenario</h2>
        </div>
        <p className="text-red-700 mb-3">{simulationData.scenario}</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="font-medium text-red-800">Patient:</span>
            <p className="text-red-700">{simulationData.patientInfo.name}, {simulationData.patientInfo.age}M</p>
          </div>
          <div>
            <span className="font-medium text-red-800">Vital Signs:</span>
            <p className="text-red-700">HR: {simulationData.patientInfo.vitals.hr}</p>
            <p className="text-red-700">BP: {simulationData.patientInfo.vitals.bp}</p>
          </div>
          <div>
            <span className="font-medium text-red-800">O2 Sat:</span>
            <p className="text-red-700">{simulationData.patientInfo.vitals.spo2}%</p>
          </div>
          <div>
            <span className="font-medium text-red-800">Symptoms:</span>
            <p className="text-red-700 text-xs">{simulationData.patientInfo.symptoms.join(', ')}</p>
          </div>
        </div>
      </div>

      {/* ECG Monitor */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Monitor className="w-5 h-5 text-green-400" />
            <span className="text-gray-700 font-medium">ECG Monitor - Lead II</span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-1 px-3 py-1 bg-green-600 text-white rounded text-sm"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <button
              onClick={() => {
                setCurrentTime(0);
                setIsPlaying(false);
              }}
              className="flex items-center space-x-1 px-3 py-1 bg-gray-600 text-white rounded text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>
        
        {/* Use our ECG Strip component */}
        <ECGStrip rhythm="vtach" rate={180} />
      </div>

      {/* Current Step */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">
            Step {currentStep + 1}: {currentStepData.title}
          </h3>
          <div className="text-sm text-gray-600">
            {currentStep + 1} of {simulationData.steps.length}
          </div>
        </div>

        <p className="text-gray-700 mb-6">{currentStepData.instruction}</p>

        {currentStepData.type === 'observation' && (
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Clinical Findings:</h4>
              <ul className="space-y-1">
                {currentStepData.findings?.map((finding, index) => (
                  <li key={index} className="text-blue-800 text-sm flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {finding}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => {
                setCurrentStep(currentStep + 1);
                onProgress(((currentStep + 1) / simulationData.steps.length) * 100);
              }}
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
              Continue Assessment
            </button>
          </div>
        )}

        {currentStepData.type === 'measurement' && (
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-yellow-800 text-sm">{currentStepData.hint}</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="number"
                value={userInputs[currentStepData.id] || ''}
                onChange={(e) => handleMeasurementInput(currentStepData.id, e.target.value)}
                placeholder="Enter measurement"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
              <span className="text-gray-600 font-medium">{currentStepData.unit}</span>
              <button
                onClick={() => submitMeasurement(currentStepData.id)}
                disabled={!userInputs[currentStepData.id]}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-300"
              >
                Submit
              </button>
            </div>

            {measurements[currentStepData.id] && (
              <div className={`p-4 rounded-lg ${
                Math.abs(measurements[currentStepData.id] - currentStepData.target) <= currentStepData.tolerance
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {Math.abs(measurements[currentStepData.id] - currentStepData.target) <= currentStepData.tolerance
                  ? '✅ Correct measurement!'
                  : `❌ Expected: ${currentStepData.target} ± ${currentStepData.tolerance} ${currentStepData.unit}`
                }
              </div>
            )}
          </div>
        )}

        {currentStepData.type === 'choice' && (
          <div className="space-y-3">
            {currentStepData.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleChoice(index)}
                className="w-full p-4 text-left border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                {option}
              </button>
            ))}
            
            {stepCompleted[currentStep] !== undefined && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">{currentStepData.explanation}</p>
              </div>
            )}
          </div>
        )}

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / simulationData.steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ECGSimulatorTask;
