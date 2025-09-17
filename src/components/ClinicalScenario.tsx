import React, { useState, useEffect } from 'react';
import { Clock, Heart, Activity, Thermometer, User, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface ClinicalScenarioProps {
  content: {
    scenario: string;
    patientInfo: {
      age: number;
      gender: 'male' | 'female' | 'other';
      chiefComplaint: string;
      vitals: {
        hr: number;
        bp: string;
        rr: number;
        spo2: number;
        temp: number;
      };
    };
    ecgStrip?: string;
    labValues?: Record<string, string>;
    decisionTree: {
      question: string;
      options: Array<{
        text: string;
        outcome: 'correct' | 'partial' | 'incorrect';
        points: number;
        feedback: string;
        nextStep?: string;
      }>;
    };
    timeLimit: number;
    learningPoints: string[];
  };
  onComplete: (score: number, timeUsed: number, decisions: any[]) => void;
}

const ClinicalScenario: React.FC<ClinicalScenarioProps> = ({ content, onComplete }) => {
  const [timeRemaining, setTimeRemaining] = useState(content.timeLimit);
  const [currentStep, setCurrentStep] = useState(0);
  const [decisions, setDecisions] = useState<any[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showVitals, setShowVitals] = useState(true);
  const [showECG, setShowECG] = useState(false);
  const [showLabs, setShowLabs] = useState(false);

  useEffect(() => {
    if (timeRemaining > 0 && !isComplete) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !isComplete) {
      // Time's up
      handleComplete();
    }
  }, [timeRemaining, isComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return;
    setSelectedOption(optionIndex);
  };

  const handleConfirmDecision = () => {
    if (selectedOption === null) return;

    const selectedChoice = content.decisionTree.options[selectedOption];
    const decision = {
      question: content.decisionTree.question,
      selectedOption: selectedChoice.text,
      outcome: selectedChoice.outcome,
      points: selectedChoice.points,
      feedback: selectedChoice.feedback,
      timeUsed: content.timeLimit - timeRemaining
    };

    setDecisions(prev => [...prev, decision]);
    setTotalScore(prev => prev + selectedChoice.points);
    setShowFeedback(true);

    // Auto-advance after showing feedback
    setTimeout(() => {
      if (selectedChoice.nextStep) {
        // Would advance to next step in a more complex scenario
        setCurrentStep(prev => prev + 1);
        setSelectedOption(null);
        setShowFeedback(false);
      } else {
        handleComplete();
      }
    }, 3000);
  };

  const handleComplete = () => {
    setIsComplete(true);
    const timeUsed = content.timeLimit - timeRemaining;
    onComplete(totalScore, timeUsed, decisions);
  };

  const getOutcomeIcon = (outcome: string) => {
    switch (outcome) {
      case 'correct':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'partial':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'incorrect':
        return <X className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getVitalStatus = (vital: string, value: number | string) => {
    switch (vital) {
      case 'hr':
        const hr = value as number;
        if (hr < 60) return 'text-blue-600 font-bold'; // Bradycardia
        if (hr > 100) return 'text-red-600 font-bold'; // Tachycardia
        return 'text-green-600';
      case 'spo2':
        const spo2 = value as number;
        if (spo2 < 95) return 'text-red-600 font-bold';
        return 'text-green-600';
      case 'temp':
        const temp = value as number;
        if (temp > 38.0) return 'text-red-600 font-bold'; // Fever
        return 'text-green-600';
      default:
        return 'text-gray-800';
    }
  };

  if (isComplete) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Scenario Complete!</h2>
          <div className="text-3xl font-bold text-green-600 mb-4">
            Score: {totalScore} points
          </div>
          <div className="text-gray-600">
            Time Used: {formatTime(content.timeLimit - timeRemaining)}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h3 className="text-lg font-semibold">Your Decisions:</h3>
          {decisions.map((decision, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-start gap-3">
                {getOutcomeIcon(decision.outcome)}
                <div className="flex-1">
                  <div className="font-medium">{decision.selectedOption}</div>
                  <div className="text-sm text-gray-600 mt-1">{decision.feedback}</div>
                  <div className="text-sm text-blue-600 mt-1">
                    +{decision.points} points
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Learning Points:</h4>
          <ul className="list-disc list-inside space-y-1">
            {content.learningPoints.map((point, index) => (
              <li key={index} className="text-sm text-blue-800">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header with Timer */}
      <div className="bg-red-600 text-white p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Emergency Scenario</h2>
          <div className="flex items-center gap-2 text-lg font-mono">
            <Clock className="w-5 h-5" />
            {formatTime(timeRemaining)}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Scenario Description */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-yellow-900 mb-2">Patient Presentation</h3>
          <p className="text-yellow-800">{content.scenario}</p>
        </div>

        {/* Patient Info Tabs */}
        <div className="mb-6">
          <div className="flex border-b border-gray-200 mb-4">
            <button
              onClick={() => { setShowVitals(true); setShowECG(false); setShowLabs(false); }}
              className={`px-4 py-2 font-medium ${showVitals ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
            >
              Patient Info & Vitals
            </button>
            {content.ecgStrip && (
              <button
                onClick={() => { setShowVitals(false); setShowECG(true); setShowLabs(false); }}
                className={`px-4 py-2 font-medium ${showECG ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
              >
                ECG
              </button>
            )}
            {content.labValues && (
              <button
                onClick={() => { setShowVitals(false); setShowECG(false); setShowLabs(true); }}
                className={`px-4 py-2 font-medium ${showLabs ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
              >
                Lab Values
              </button>
            )}
          </div>

          {/* Patient Info & Vitals */}
          {showVitals && (
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Patient Information
                </h4>
                <div className="space-y-2 text-sm">
                  <div><strong>Age:</strong> {content.patientInfo.age} years</div>
                  <div><strong>Gender:</strong> {content.patientInfo.gender}</div>
                  <div><strong>Chief Complaint:</strong> {content.patientInfo.chiefComplaint}</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Vital Signs
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className={`flex items-center gap-1 ${getVitalStatus('hr', content.patientInfo.vitals.hr)}`}>
                    <Heart className="w-4 h-4" />
                    <span>HR: {content.patientInfo.vitals.hr}</span>
                  </div>
                  <div className="text-gray-800">
                    BP: {content.patientInfo.vitals.bp}
                  </div>
                  <div className="text-gray-800">
                    RR: {content.patientInfo.vitals.rr}
                  </div>
                  <div className={getVitalStatus('spo2', content.patientInfo.vitals.spo2)}>
                    SpO2: {content.patientInfo.vitals.spo2}%
                  </div>
                  <div className={`flex items-center gap-1 ${getVitalStatus('temp', content.patientInfo.vitals.temp)}`}>
                    <Thermometer className="w-4 h-4" />
                    <span>Temp: {content.patientInfo.vitals.temp}°C</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ECG Strip */}
          {showECG && content.ecgStrip && (
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
              <h4 className="font-semibold mb-3">12-Lead ECG</h4>
              <img src={content.ecgStrip} alt="ECG Strip" className="w-full rounded border" />
            </div>
          )}

          {/* Lab Values */}
          {showLabs && content.labValues && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Laboratory Results</h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                {Object.entries(content.labValues).map(([test, value]) => (
                  <div key={test} className="flex justify-between">
                    <span>{test}:</span>
                    <span className="font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Decision Point */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-900 mb-4">{content.decisionTree.question}</h3>
          
          <div className="space-y-2">
            {content.decisionTree.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={showFeedback}
                className={`w-full text-left p-3 rounded border transition-colors ${
                  selectedOption === index
                    ? 'border-blue-500 bg-blue-100'
                    : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                } ${showFeedback ? 'cursor-not-allowed opacity-75' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <span>{option.text}</span>
                  {showFeedback && selectedOption === index && getOutcomeIcon(option.outcome)}
                </div>
              </button>
            ))}
          </div>

          {selectedOption !== null && !showFeedback && (
            <button
              onClick={handleConfirmDecision}
              className="mt-4 w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
            >
              Confirm Decision
            </button>
          )}

          {showFeedback && selectedOption !== null && (
            <div className="mt-4 p-3 rounded bg-white border">
              <div className="flex items-start gap-2">
                {getOutcomeIcon(content.decisionTree.options[selectedOption].outcome)}
                <div>
                  <div className="font-medium">
                    {content.decisionTree.options[selectedOption].outcome === 'correct' && 'Excellent choice!'}
                    {content.decisionTree.options[selectedOption].outcome === 'partial' && 'Partially correct.'}
                    {content.decisionTree.options[selectedOption].outcome === 'incorrect' && 'Not the best choice.'}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {content.decisionTree.options[selectedOption].feedback}
                  </div>
                  <div className="text-sm text-blue-600 mt-1">
                    +{content.decisionTree.options[selectedOption].points} points
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Score Display */}
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-700">
            Current Score: <span className="text-green-600">{totalScore} points</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalScenario;
