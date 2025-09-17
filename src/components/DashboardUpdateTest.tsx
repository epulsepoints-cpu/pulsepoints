// Test Component to verify Dashboard XP/Gems updates
import React, { useEffect } from 'react';
import { useGameState } from '@/hooks/useGameState';

export default function DashboardUpdateTest() {
  const { gameState, completeTask } = useGameState();

  useEffect(() => {
    console.log('🔍 Dashboard Test - Current User Data:', {
      xp: gameState.user?.xp,
      gems: gameState.user?.gems,
      rank: gameState.user?.rank,
      streakCount: gameState.user?.streakCount,
      isAuthenticated: gameState.isAuthenticated,
      isGuestUser: gameState.isGuestUser
    });
  }, [gameState.user?.xp, gameState.user?.gems, gameState.user?.rank, gameState.user?.streakCount]);

  const testTaskCompletion = async () => {
    if (gameState.dailyTasks.length > 0) {
      const firstTask = gameState.dailyTasks[0];
      if (!firstTask.completed) {
        console.log('🧪 Testing task completion for XP/Gems update...');
        await completeTask(firstTask.id, true);
        console.log('✅ Task completed, user data should update');
      }
    }
  };

  return (
    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <h3 className="font-bold text-yellow-800 mb-2">Dashboard Update Test</h3>
      <div className="text-sm space-y-1">
        <p><strong>Current XP:</strong> {gameState.user?.xp || 0}</p>
        <p><strong>Current Gems:</strong> {gameState.user?.gems || 0}</p>
        <p><strong>Current Rank:</strong> {gameState.user?.rank || 'Unknown'}</p>
        <p><strong>Current Streak:</strong> {gameState.user?.streakCount || 0}</p>
        <p><strong>Authenticated:</strong> {gameState.isAuthenticated ? '✅' : '❌'}</p>
        <p><strong>Guest User:</strong> {gameState.isGuestUser ? '✅' : '❌'}</p>
        <p><strong>Daily Tasks:</strong> {gameState.dailyTasks.length}</p>
      </div>
      <button 
        onClick={testTaskCompletion}
        className="mt-2 px-3 py-1 bg-yellow-600 text-white rounded text-sm"
      >
        Test Task Completion
      </button>
    </div>
  );
}
