import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Star, CheckCircle, X } from 'lucide-react';
import { SimpleTask } from '../../types/simpleEventTypes';
import { simpleEventsService } from '../../services/simpleEventsService';

// Import specific task components
import ECGQuizTask from './tasks/ECGQuizTask';
import RhythmRecognitionTask from './tasks/RhythmRecognitionTask';
import ClinicalScenarioTask from './tasks/ClinicalScenarioTask';

interface TaskRunnerProps {
  taskId: string;
  taskType: string;
  eventId: string;
  onBack: () => void;
  onComplete: (taskId: string, score: number) => void;
}

export const TaskRunner: React.FC<TaskRunnerProps> = ({
  taskId,
  taskType,
  eventId,
  onBack,
  onComplete
}) => {
  const [task, setTask] = useState<SimpleTask | null>(null);
  const [loading, setLoading] = useState(true);
  const [startTime] = useState<Date>(new Date());
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  useEffect(() => {
    loadTask();
    
    // Timer for elapsed time
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [taskId, eventId]);

  const loadTask = () => {
    try {
      setLoading(true);
      
      // Extract day ID from task ID (format: day-X-task-Y)
      const dayId = extractDayIdFromTaskId(taskId);
      const taskData = simpleEventsService.getTask(eventId, dayId, taskId);
      
      if (taskData) {
        setTask(taskData);
      } else {
        console.error('Task not found:', taskId);
      }
    } catch (error) {
      console.error('Failed to load task:', error);
    } finally {
      setLoading(false);
    }
  };

  const extractDayIdFromTaskId = (taskId: string): string => {
    // Task ID format: day-X-task-Y
    // Extract day-X part
    const parts = taskId.split('-');
    if (parts.length >= 2 && parts[0] === 'day') {
      return `${eventId}-day-${parts[1]}`;
    }
    return taskId; // fallback
  };

  const handleTaskComplete = (score: number) => {
    if (isCompleted) return;
    
    setIsCompleted(true);
    setFinalScore(score);
    setShowCompletionModal(true);
    
    // Calculate time spent in minutes
    const timeSpentMinutes = Math.ceil(timeElapsed / 60);
    
    // Save progress
    const dayId = extractDayIdFromTaskId(taskId);
    simpleEventsService.completeTask(eventId, dayId, taskId, score, timeSpentMinutes);
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      handleContinue();
    }, 3000);
  };

  const handleContinue = () => {
    setShowCompletionModal(false);
    onComplete(taskId, finalScore);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const renderTaskComponent = () => {
    if (!task) return null;

    const commonProps = {
      task,
      onComplete: handleTaskComplete,
      onBack
    };

    switch (taskType) {
      case 'ecg-quiz':
        return <ECGQuizTask {...commonProps} />;
      case 'rhythm-recognition':
        return <RhythmRecognitionTask {...commonProps} />;
      case 'clinical-scenario':
        return <ClinicalScenarioTask {...commonProps} />;
      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">Task type not implemented: {taskType}</p>
            <button
              onClick={onBack}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Go Back
            </button>
          </div>
        );
    }
  };

  if (loading || !task) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Mobile-first Header - Full Width, Compact */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 px-2 py-1 text-gray-600 hover:text-gray-800 transition-colors min-w-0"
            >
              <ArrowLeft className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">Back</span>
            </button>
            
            {/* Mobile: Stack stats vertically on very small screens */}
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1 text-gray-600">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-mono">{formatTime(timeElapsed)}</span>
              </div>
              
              <div className="flex items-center gap-1 text-yellow-600">
                <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">+</span>
                <span>{task.rewards.xp}</span>
                <span className="hidden sm:inline">XP</span>
              </div>
              
              <div className="flex items-center gap-1 text-green-600">
                <span>💎</span>
                <span className="hidden xs:inline">+</span>
                <span>{task.rewards.gems}</span>
                <span className="hidden sm:inline">Gems</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Content - Full Width Mobile */}
      <div className="w-full">
        {renderTaskComponent()}
      </div>

      {/* Mobile-Optimized Completion Modal */}
      <AnimatePresence>
        {showCompletionModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-4 sm:p-6 text-center"
            >
              <div className="text-green-500 mb-3 sm:mb-4">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Task Completed!
              </h2>
              
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                Great job! You scored {finalScore}% on this task.
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="text-center">
                  <div className="text-yellow-500 text-xl sm:text-2xl mb-1">⚡</div>
                  <div className="text-xs sm:text-sm text-gray-600">XP Earned</div>
                  <div className="font-bold text-sm sm:text-base">+{task.rewards.xp}</div>
                </div>
                <div className="text-center">
                  <div className="text-green-500 text-xl sm:text-2xl mb-1">💎</div>
                  <div className="text-xs sm:text-sm text-gray-600">Gems Earned</div>
                  <div className="font-bold text-sm sm:text-base">+{task.rewards.gems}</div>
                </div>
              </div>
              
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={handleContinue}
                  className="flex-1 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                >
                  Continue
                </button>
                <button
                  onClick={() => setShowCompletionModal(false)}
                  className="px-2 sm:px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TaskRunner;
