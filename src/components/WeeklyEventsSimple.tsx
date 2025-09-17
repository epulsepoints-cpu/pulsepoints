import React from 'react';
import { Calendar, Clock, Trophy, Users } from 'lucide-react';

/**
 * Simple fallback component for Weekly Events when the main component has issues
 */
const WeeklyEventsSimple: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`p-6 space-y-6 ${className}`}>
      {/* Event Header */}
      <div className="border-2 border-red-200 bg-red-50 rounded-lg p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                Shock Zone Challenge
                <span className="px-2 py-1 bg-gray-200 rounded text-sm">
                  <Users className="w-3 h-3 mr-1 inline" />
                  Loading...
                </span>
              </h2>
              <p className="text-gray-600 mt-1">Master arrhythmia recognition and emergency protocols</p>
            </div>
          </div>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
            <Trophy className="w-4 h-4 mr-1 inline" />
            Leaderboard
          </button>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mt-4">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Progress: 0/7 days</span>
            <span className="font-medium text-red-500">0% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full" style={{ width: '0%' }}></div>
          </div>
        </div>

        {/* Event Countdown */}
        <div className="flex items-center justify-center gap-2 p-3 bg-white/50 rounded-lg border mt-4">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">
            Event ends in: Loading...
          </span>
        </div>
      </div>

      {/* Daily Challenges Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Daily Challenges
        </h3>
        
        <div className="grid grid-cols-7 gap-2 md:gap-3">
          {Array.from({ length: 7 }, (_, i) => (
            <div
              key={i + 1}
              className={`
                aspect-square rounded-lg border-2 p-2 flex flex-col items-center justify-center text-center
                ${i === 0 
                  ? 'border-blue-300 bg-blue-50 text-blue-700' 
                  : 'border-gray-200 bg-gray-50 text-gray-400'
                }
              `}
            >
              <div className="text-lg font-bold mb-1">
                {i + 1}
              </div>
              <div className="text-xs">
                {i === 0 ? 'Start' : 'Locked'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Message */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">🔄 Setting up Weekly Events...</h4>
        <p className="text-sm text-blue-800 mb-3">
          The events system is being initialized automatically. This usually takes just a moment.
        </p>
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-sm text-blue-700">Please wait...</span>
        </div>
      </div>

      {/* Info Message */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">Weekly Events System</h4>
        <p className="text-sm text-gray-600">
          The Weekly Events system is loading. If you continue to see this message, please:
        </p>
        <ol className="text-sm text-gray-600 mt-2 ml-4 list-decimal">
          <li>Ensure you are signed in to your account</li>
          <li>Check your internet connection</li>
          <li>Refresh the page</li>
          <li>Contact support if the issue persists</li>
        </ol>
        <button
          onClick={() => window.location.reload()}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default WeeklyEventsSimple;
