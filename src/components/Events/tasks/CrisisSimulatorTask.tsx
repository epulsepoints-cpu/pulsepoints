import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, AlertTriangle, CheckCircle, X, Activity, Heart, User } from 'lucide-react';
import { SimpleTask, CrisisScenario, CrisisDecision, CrisisOption } from '../../../types/simpleEventTypes';

interface CrisisSimulatorTaskProps {
  task: SimpleTask;
  onComplete: (score: number) => void;
  onBack: () => void;
}

export const CrisisSimulatorTask: React.FC<CrisisSimulatorTaskProps> = ({
  task,
  onComplete,
  onBack
}) => {
  const [currentPhase, setCurrentPhase] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastFeedback, setLastFeedback] = useState<string>('');
  const [lastConsequence, setLastConsequence] = useState<string>('');
  const [decisionHistory, setDecisionHistory] = useState<any[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const scenario = task.crisisScenario!;
  const currentDecision = scenario.decisions.find(d => d.phase === currentPhase);

  // Initialize timer for current decision
  useEffect(() => {
    if (currentDecision) {
      setTimeRemaining(currentDecision.timeAllowed);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  }, [currentPhase, currentDecision]);

  // Countdown timer
  useEffect(() => {
    if (timeRemaining > 0 && !showFeedback) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !showFeedback && currentDecision) {
      // Time up - auto-select lowest scoring option
      const worstOption = currentDecision.options.reduce((worst, option) => 
        option.points < worst.points ? option : worst
      );
      handleOptionSelect(worstOption.id);
    }
  }, [timeRemaining, showFeedback, currentDecision]);

  const handleOptionSelect = (optionId: string) => {
    if (!currentDecision || showFeedback) return;

    const option = currentDecision.options.find(o => o.id === optionId);
    if (!option) return;

    setSelectedOption(optionId);
    setLastFeedback(option.feedback);
    setLastConsequence(option.immediateConsequence);
    setShowFeedback(true);

    // Add to decision history
    const decision = {
      phase: currentPhase,
      question: currentDecision.question,
      selectedOption: option.text,
      points: option.points,
      isCorrect: option.isCorrect,
      timeUsed: currentDecision.timeAllowed - timeRemaining
    };
    
    setDecisionHistory(prev => [...prev, decision]);
    setTotalScore(prev => prev + option.points);

    // Move to next phase after showing feedback
    setTimeout(() => {
      const nextPhase = option.nextPhase || currentPhase + 1;
      const hasNextDecision = scenario.decisions.some(d => d.phase === nextPhase);
      
      if (hasNextDecision) {
        setCurrentPhase(nextPhase);
      } else {
        // Scenario completed
        completeScenario();
      }
    }, 3000);
  };

  const completeScenario = () => {
    setIsCompleted(true);
    const maxPossibleScore = scenario.decisions.reduce((total, decision) => {
      const maxPoints = Math.max(...decision.options.map(o => o.points));
      return total + maxPoints;
    }, 0);
    
    const finalScore = Math.round((totalScore / maxPossibleScore) * 100);
    
    setTimeout(() => {
      onComplete(finalScore);
    }, 2000);
  };

  const getCriticalLevelColor = (level: string) => {
    switch (level) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 text-center"
        >
          <div className="text-green-500 mb-4">
            <CheckCircle className="w-16 h-16 mx-auto" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Crisis Handled!</h2>
          <p className="text-gray-600 mb-4">You completed the emergency scenario</p>
          <div className="text-3xl font-bold text-blue-600 mb-6">
            Score: {Math.round((totalScore / (scenario.decisions.length * 100)) * 100)}%
          </div>
          
          {/* Decision Summary */}
          <div className="text-left mb-6">
            <h3 className="font-semibold mb-2">Your Decisions:</h3>
            {decisionHistory.map((decision, index) => (
              <div key={index} className="mb-2 p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">Phase {decision.phase}</div>
                <div className="text-gray-600">{decision.selectedOption}</div>
                <div className={`text-xs ${decision.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {decision.points} points • {decision.timeUsed}s
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  if (!currentDecision) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No more decisions in this scenario</p>
          <button onClick={onBack} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Back to Event
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Crisis Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-bold">EMERGENCY</span>
          </div>
          <div className={`px-2 py-1 rounded text-xs font-bold ${getCriticalLevelColor(currentDecision.criticalLevel)}`}>
            {currentDecision.criticalLevel.toUpperCase()}
          </div>
        </div>
        
        <h1 className="text-xl font-bold mb-2">{scenario.title}</h1>
        <div className="text-sm opacity-90">Phase {currentPhase} of {scenario.decisions.length}</div>
      </div>

      {/* Patient Info Panel */}
      <div className="bg-white border-b p-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-blue-600" />
            <span>{scenario.patientInfo.gender}, {scenario.patientInfo.age}yo</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-600" />
            <span className="text-xs">{scenario.patientInfo.vitalSigns}</span>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-700">
          <strong>Presentation:</strong> {scenario.patientInfo.presentation}
        </div>
      </div>

      {/* ECG Display */}
      {scenario.ecgImage && (
        <div className="bg-white border-b p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-green-600" />
            <span className="font-medium text-sm">ECG Monitor</span>
          </div>
          <div className="bg-black rounded-lg p-2">
            <img 
              src={scenario.ecgImage} 
              alt="ECG rhythm" 
              className="w-full h-auto rounded"
              style={{ filter: 'invert(1) sepia(1) hue-rotate(90deg)' }}
            />
          </div>
        </div>
      )}

      {/* Decision Phase */}
      <div className="p-4">
        {/* Timer */}
        <div className="flex items-center justify-center mb-4">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            timeRemaining <= 5 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
          }`}>
            <Clock className="w-4 h-4" />
            <span className="font-mono font-bold">{formatTime(timeRemaining)}</span>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            {currentDecision.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {currentDecision.options.map((option, index) => (
              <motion.button
                key={option.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleOptionSelect(option.id)}
                disabled={showFeedback}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedOption === option.id
                    ? option.isCorrect
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : showFeedback
                    ? 'border-gray-200 bg-gray-50 opacity-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                    selectedOption === option.id
                      ? option.isCorrect
                        ? 'bg-green-500'
                        : 'bg-red-500'
                      : 'bg-gray-400'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="flex-1">{option.text}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Feedback Panel */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-blue-500"
            >
              <h3 className="font-bold text-gray-800 mb-2">Immediate Consequence:</h3>
              <p className="text-gray-700 mb-3">{lastConsequence}</p>
              
              <h3 className="font-bold text-gray-800 mb-2">Clinical Insight:</h3>
              <p className="text-gray-700">{lastFeedback}</p>
              
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  Moving to next phase in {Math.max(0, 3 - Math.floor((Date.now() % 3000) / 1000))} seconds...
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="mt-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Progress</span>
            <span>{currentPhase} / {scenario.decisions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(currentPhase / scenario.decisions.length) * 100}%` }}
              className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrisisSimulatorTask;
