import React, { useState, useEffect } from 'react';
import { Activity, Brain, Heart, Clock, Award, Play, BookOpen } from 'lucide-react';
import ECGSimulator from './ECGSimulator';
import InteractiveVideo from './InteractiveVideo';
import ClinicalScenario from './ClinicalScenario';
import H5PContent from './H5PContent';

interface EnhancedLearningSystemProps {
  taskType: string;
  taskContent: any;
  onComplete: (results: {
    score: number;
    timeUsed: number;
    details: any;
    completed: boolean;
  }) => void;
}

const EnhancedLearningSystem: React.FC<EnhancedLearningSystemProps> = ({
  taskType,
  taskContent,
  onComplete
}) => {
  const [startTime] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = useState<any>({});

  useEffect(() => {
    // Simulate loading time for enhanced experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleTaskComplete = (score: number, details: any) => {
    const timeUsed = Math.floor((Date.now() - startTime) / 1000);
    const finalResults = {
      score,
      timeUsed,
      details,
      completed: true
    };
    
    setResults(finalResults);
    onComplete(finalResults);
  };

  const getTaskIcon = (type: string) => {
    switch (type) {
      case 'ecg-simulator':
        return <Activity className="w-6 h-6 text-blue-500" />;
      case 'interactive-video':
        return <Play className="w-6 h-6 text-purple-500" />;
      case 'clinical-scenario':
        return <Heart className="w-6 h-6 text-red-500" />;
      case 'h5p-content':
        return <Brain className="w-6 h-6 text-green-500" />;
      default:
        return <BookOpen className="w-6 h-6 text-gray-500" />;
    }
  };

  const getTaskTypeLabel = (type: string) => {
    switch (type) {
      case 'ecg-simulator':
        return 'ECG Simulator';
      case 'interactive-video':
        return 'Interactive Video';
      case 'clinical-scenario':
        return 'Clinical Scenario';
      case 'h5p-content':
        return 'Interactive Exercise';
      default:
        return 'Learning Activity';
    }
  };

  const renderTaskContent = () => {
    switch (taskType) {
      case 'ecg-simulator':
        return (
          <ECGSimulator
            content={taskContent}
            onComplete={handleTaskComplete}
          />
        );
      
      case 'interactive-video':
        return (
          <InteractiveVideo
            content={taskContent}
            onComplete={handleTaskComplete}
          />
        );
      
      case 'clinical-scenario':
        return (
          <ClinicalScenario
            content={taskContent}
            onComplete={handleTaskComplete}
          />
        );
      
      case 'h5p-content':
        return (
          <H5PContent
            content={taskContent}
            onComplete={handleTaskComplete}
          />
        );
      
      default:
        return (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <BookOpen className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Task Type Not Supported</h3>
              <p>The task type "{taskType}" is not yet supported by the enhanced learning system.</p>
            </div>
            <button
              onClick={() => handleTaskComplete(0, { error: 'Unsupported task type' })}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Skip Task
            </button>
          </div>
        );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          {/* Enhanced Loading Animation */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto">
              <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
              <div className="absolute inset-4 border-4 border-transparent border-t-purple-600 rounded-full animate-spin animation-delay-150"></div>
              <div className="absolute inset-8 border-4 border-transparent border-t-pink-600 rounded-full animate-spin animation-delay-300"></div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            {getTaskIcon(taskType)}
            <h2 className="text-2xl font-bold text-gray-800">
              Loading {getTaskTypeLabel(taskType)}
            </h2>
          </div>

          <div className="space-y-2 text-gray-600">
            <p className="animate-pulse">Initializing enhanced learning experience...</p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Brain className="w-4 h-4 text-blue-500" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-green-500" />
                <span>Real-time</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-yellow-500" />
                <span>Gamified</span>
              </div>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-blue-600 animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {getTaskIcon(taskType)}
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  {taskContent.title || getTaskTypeLabel(taskType)}
                </h1>
                <p className="text-sm text-gray-600">
                  {taskContent.description || 'Enhanced interactive learning experience'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {taskContent.timeLimit && (
                <div className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>{Math.floor(taskContent.timeLimit / 60)}:{(taskContent.timeLimit % 60).toString().padStart(2, '0')}</span>
                </div>
              )}

              {taskContent.requiredAccuracy && (
                <div className="flex items-center gap-1 text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  <Award className="w-4 h-4" />
                  <span>Target: {taskContent.requiredAccuracy}%</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {renderTaskContent()}
        </div>
      </div>

      {/* Enhanced Features Info Panel */}
      <div className="fixed bottom-6 right-6 bg-white rounded-lg shadow-lg p-4 max-w-sm">
        <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <Brain className="w-4 h-4 text-blue-500" />
          Enhanced Learning
        </h4>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Real-time feedback</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Interactive simulations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Clinical scenarios</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Gamified experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedLearningSystem;
