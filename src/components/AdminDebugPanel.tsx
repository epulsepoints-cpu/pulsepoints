import React, { useEffect, useState } from 'react';
import { useGameState } from '@/hooks/useGameState';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AdminDebugPanel: React.FC = () => {
  const { gameState } = useGameState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  const addDebugLog = (message: string) => {
    console.log(message);
    setDebugInfo(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const checkAdminStatus = async () => {
    if (!gameState.user?.id) {
      addDebugLog('❌ No user ID found');
      return;
    }

    try {
      addDebugLog(`🔍 Checking admin status for user: ${gameState.user.id}`);
      const { db } = await import('@/firebase');
      const { doc, getDoc } = await import('firebase/firestore');
      const userRef = doc(db, 'users', gameState.user.id);
      const userDoc = await getDoc(userRef);
      
      if (userDoc.exists()) {
        const data = userDoc.data();
        setUserData(data);
        addDebugLog(`📄 User document found: ${JSON.stringify(data, null, 2)}`);
        addDebugLog(`🔐 isAdmin field: ${data.isAdmin} (type: ${typeof data.isAdmin})`);
        
        if (data.isAdmin === true) {
          setIsAdmin(true);
          addDebugLog('✅ Admin privileges confirmed!');
        } else {
          setIsAdmin(false);
          addDebugLog(`❌ Admin privileges denied. isAdmin = ${data.isAdmin}`);
        }
      } else {
        addDebugLog('❌ User document does not exist in Firestore');
      }
    } catch (error) {
      addDebugLog(`💥 Error checking admin status: ${error}`);
    }
  };

  useEffect(() => {
    if (gameState.isAuthenticated && gameState.user?.id) {
      checkAdminStatus();
    }
  }, [gameState.isAuthenticated, gameState.user?.id]);

  return (
    <Card className="w-full max-w-4xl mx-auto mt-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🐛 Admin Debug Panel
          <Badge variant={isAdmin ? "default" : "destructive"}>
            {isAdmin ? "ADMIN" : "NOT ADMIN"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">🔑 Authentication Status</h3>
            <div className="space-y-1 text-sm">
              <div>Authenticated: {gameState.isAuthenticated ? '✅ Yes' : '❌ No'}</div>
              <div>User ID: {gameState.user?.id || '❌ None'}</div>
              <div>Username: {gameState.user?.username || '❌ None'}</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">👑 Admin Status</h3>
            <div className="space-y-1 text-sm">
              <div>Is Admin: {isAdmin ? '✅ Yes' : '❌ No'}</div>
              <div>Firebase Data: {userData ? '✅ Loaded' : '❌ Not loaded'}</div>
            </div>
          </div>
        </div>

        {/* Firebase Data */}
        {userData && (
          <div>
            <h3 className="font-semibold mb-2">📄 Firebase User Document</h3>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
              {JSON.stringify(userData, null, 2)}
            </pre>
          </div>
        )}

        {/* Debug Actions */}
        <div className="flex gap-2">
          <Button onClick={checkAdminStatus} variant="outline">
            🔄 Recheck Admin Status
          </Button>
          <Button 
            onClick={() => setDebugInfo([])} 
            variant="outline"
          >
            🗑️ Clear Logs
          </Button>
        </div>

        {/* Debug Logs */}
        <div>
          <h3 className="font-semibold mb-2">📝 Debug Logs</h3>
          <div className="bg-gray-900 text-green-400 p-3 rounded h-40 overflow-auto text-xs font-mono">
            {debugInfo.length === 0 ? (
              <div className="text-gray-500">No logs yet...</div>
            ) : (
              debugInfo.map((log, index) => (
                <div key={index}>{log}</div>
              ))
            )}
          </div>
        </div>

        {/* Quick Fix Suggestions */}
        <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
          <h3 className="font-semibold mb-2">💡 Quick Fix Suggestions</h3>
          <div className="space-y-1 text-sm">
            {!gameState.isAuthenticated && (
              <div>🔐 You need to login first</div>
            )}
            {gameState.isAuthenticated && !userData && (
              <div>📄 Your user document is missing from Firebase</div>
            )}
            {userData && userData.isAdmin !== true && (
              <div>👑 Set isAdmin: true (boolean) in your Firebase user document</div>
            )}
            {userData && typeof userData.isAdmin === 'string' && (
              <div>⚠️ Your isAdmin field is a string, it should be boolean true</div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminDebugPanel;
