import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Zap, Activity, Play, Pause, RotateCcw, Heart, AlertTriangle, Monitor, ArrowLeft } from 'lucide-react';
import { TaskData } from '../../../types/eventTypes';
import ECGStrip from '../../ECGStrip';
import ControlledMeasurementInput from '../../ControlledMeasurementInput';
import { MobileTaskWrapper } from './MobileTaskWrapper';

interface ECGSimulatorTaskProps {
  task: TaskData;
  onProgress: (score: number) => void;
  onComplete: (score: number) => void;
  onBack?: () => void;
}

export const ECGSimulatorTask: React.FC<ECGSimulatorTaskProps> = ({ task, onProgress, onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userInputs, setUserInputs] = useState<{ [key: string]: string }>({});
  const [stepCompleted, setStepCompleted] = useState<boolean[]>([]);
  const [measurements, setMeasurements] = useState<{ [key: string]: number }>({});

  // Enhanced simulation scenario with real medical values from task data
  const simulationData = {
    scenario: task.content?.simulator?.scenario || 'Emergency Department: 58-year-old male with chest pain and palpitations',
    caseImage: task.content?.simulator?.caseImages?.[0] || '/ecg/medical_accurate/vtach_150bpm.png',
    patientInfo: task.content?.simulator?.patientInfo || {
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
    ]
  };

  const handleMeasurementInput = useCallback((stepId: string, value: string) => {
    setUserInputs({ ...userInputs, [stepId]: value });
  }, [userInputs]);

  const submitMeasurement = useCallback((stepId: string, value: number) => {
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
  }, [measurements, stepCompleted, currentStep, onProgress, simulationData.steps]);

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
    <MobileTaskWrapper 
      title="ECG Simulator" 
      onBack={onBack} 
      showBackButton={!!onBack}
    >
      {/* Additional Mobile Back Button */}
      <div className="md:hidden bg-white border-b border-gray-200 p-3 sticky top-0 z-50">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Events</span>
        </button>
      </div>

      <div className="w-full p-4 md:p-6">
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
            <p className="text-red-700">
              {(simulationData.patientInfo as any).name || 'Patient'}, {simulationData.patientInfo.age}{simulationData.patientInfo.gender.charAt(0).toUpperCase()}
            </p>
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
            <span className="font-medium text-red-800">Chief Complaint:</span>
            <p className="text-red-700 text-xs">
              {(simulationData.patientInfo as any).chiefComplaint || 'Chest pain and palpitations'}
            </p>
            {(simulationData.patientInfo as any).symptoms && (
              <p className="text-red-700 text-xs">{(simulationData.patientInfo as any).symptoms.join(', ')}</p>
            )}
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
        </div>
        
        {/* Medical Grade ECG Image */}
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={simulationData.caseImage}
              alt="ECG rhythm strip for clinical simulation"
              className="w-full h-auto max-h-64 object-contain border border-gray-200 rounded ecg-simulator-image-visible"
              style={{
                display: 'block',
                visibility: 'visible',
                opacity: '1',
                zIndex: 10,
                position: 'relative',
                minHeight: '150px',
                backgroundColor: 'white'
              } as React.CSSProperties}
              onLoad={(e) => {
                console.log('✅ ECG Simulator Image loaded successfully:', simulationData.caseImage);
                const img = e.target as HTMLImageElement;
                console.log('📐 Image dimensions:', img.naturalWidth, 'x', img.naturalHeight);
                console.log('📍 Image position:', img.getBoundingClientRect());
                
                // Force visibility after load
                img.style.display = 'block';
                img.style.visibility = 'visible';
                img.style.opacity = '1';
              }}
              onError={(e) => {
                console.error('❌ ECG Simulator Image failed to load:', simulationData.caseImage);
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                // Could show ECGStrip as fallback here
              }}
            />
            <div className="flex items-center justify-center mt-2">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                ✅ Clinical Simulation ECG
              </span>
            </div>
          </div>
        </div>
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
          <ControlledMeasurementInput
            stepId={currentStepData.id}
            step={{
              title: currentStepData.title,
              instruction: currentStepData.instruction,
              hint: currentStepData.hint || '',
              target: currentStepData.target || 0,
              tolerance: currentStepData.tolerance || 0,
              unit: currentStepData.unit || '',
              explanation: currentStepData.explanation
            }}
            onSubmit={submitMeasurement}
            isSubmitted={stepCompleted[currentStep] !== undefined}
            submittedValue={measurements[currentStepData.id]}
          />
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
    </MobileTaskWrapper>
  );
};

export default ECGSimulatorTask;