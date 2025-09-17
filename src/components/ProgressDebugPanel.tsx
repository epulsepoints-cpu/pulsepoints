import React, { useState } from 'react';
import { useGameState } from '@/hooks/useGameState';
import { getUserProgressStats } from '@/services/progressService';
import { getUserAchievements } from '@/services/achievementService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProgressDebugPanel: React.FC = () => {
  const { gameState } = useGameState();
  const [debugData, setDebugData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  console.log('🔧 ProgressDebugPanel: Rendered', { userId: gameState.user?.id });

  const fetchCurrentData = async () => {
    if (!gameState.user?.id) {
      console.log('❌ No user ID for debug panel');
      return;
    }
    
    setLoading(true);
    try {
      console.log('🔍 Debug: Fetching data for user:', gameState.user.id);
      
      const [stats, achievements] = await Promise.all([
        getUserProgressStats(gameState.user.id),
        getUserAchievements(gameState.user.id)
      ]);
      
      console.log('📊 Debug: Fetched stats:', stats);
      console.log('🏆 Debug: Fetched achievements:', achievements);
      
      setDebugData({
        stats,
        achievements,
        gameStateUser: gameState.user,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('❌ Debug: Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const testProgressUpdate = async () => {
    if (!gameState.user?.id) return;
    
    try {
      console.log('🧪 Debug: Testing progress update event');
      
      // Just dispatch a test event to see if the system responds
      const progressUpdateEvent = new CustomEvent('progressUpdated', {
        detail: {
          userId: gameState.user.id,
          type: 'debug-test',
          timestamp: Date.now()
        }
      });
      window.dispatchEvent(progressUpdateEvent);
      
      console.log('✅ Debug: Progress update event dispatched');
    } catch (error) {
      console.error('❌ Debug: Failed to dispatch event:', error);
    }
  };

  React.useEffect(() => {
    if (gameState.user?.id) {
      console.log('🔧 Debug: User ID changed, fetching data');
      fetchCurrentData();
    }
  }, [gameState.user?.id]);

  if (!gameState.user?.id) {
    return (
      <Card className="m-4 border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-800">🔧 Progress Debug Panel</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-600">Please log in to use the debug panel.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="m-4 border-red-200 bg-red-50">
      <CardHeader>
        <CardTitle className="text-red-800">🔧 Progress Debug Panel</CardTitle>
        <p className="text-sm text-red-600">
          This panel helps debug progress update issues. Remove in production.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <Button 
            onClick={fetchCurrentData} 
            disabled={loading}
            variant="outline"
            size="sm"
          >
            {loading ? 'Loading...' : 'Refresh Data'}
          </Button>
          <Button 
            onClick={testProgressUpdate} 
            disabled={loading}
            variant="outline"
            size="sm"
            className="bg-blue-50 border-blue-200 text-blue-800"
          >
            Test Progress Event
          </Button>
        </div>
        
        {debugData && (
          <div className="text-sm space-y-2">
            <div>
              <strong>Last Updated:</strong> {debugData.timestamp}
            </div>
            <div>
              <strong>User XP:</strong> {debugData.gameStateUser?.xp || 0}
            </div>
            <div>
              <strong>User Gems:</strong> {debugData.gameStateUser?.gems || 0}
            </div>
            <div>
              <strong>Stats Total Lessons:</strong> {debugData.stats?.totalLessons || 0}
            </div>
            <div>
              <strong>Stats Current Streak:</strong> {debugData.stats?.currentStreak || 0}
            </div>
            <div>
              <strong>Achievements Count:</strong> {
                debugData.achievements?.achievements 
                  ? Object.keys(debugData.achievements.achievements).length 
                  : 0
              }
            </div>
            <details className="mt-4">
              <summary className="cursor-pointer font-bold">Full Data (Click to expand)</summary>
              <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto max-h-64 mt-2">
                {JSON.stringify(debugData, null, 2)}
              </pre>
            </details>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProgressDebugPanel;
