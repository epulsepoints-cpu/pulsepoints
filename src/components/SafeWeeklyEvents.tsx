import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import WeeklyEvents from './WeeklyEvents';

/**
 * Safe wrapper for WeeklyEvents component that handles auth context gracefully
 */
const SafeWeeklyEvents: React.FC<{ className?: string }> = ({ className }) => {
  try {
    // Test if useAuth is available
    const authContext = useAuth();
    
    // If we get here, auth context is available
    return <WeeklyEvents className={className} />;
  } catch (error) {
    // If useAuth throws an error (not within AuthProvider), show fallback
    console.warn('WeeklyEvents: Auth context not available, showing fallback');
    
    return (
      <div className={`p-6 flex flex-col items-center justify-center min-h-[400px] ${className}`}>
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
            <span className="text-gray-400 text-2xl">📅</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Weekly Events</h3>
          <p className="text-gray-600 max-w-md">
            Authentication is required to access weekly events. Please refresh the page or contact support if this issue persists.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }
};

export default SafeWeeklyEvents;
