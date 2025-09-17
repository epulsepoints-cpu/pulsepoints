import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminOrderDashboard from './AdminOrderDashboard';
import { useGameState } from '@/hooks/useGameState';

const AdminDebugTest: React.FC = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { gameState } = useGameState();

  useEffect(() => {
    console.log('🧪 AdminDebugTest - GameState:', gameState);
    console.log('🧪 AdminDebugTest - User:', gameState.user);
    console.log('🧪 AdminDebugTest - Is Authenticated:', gameState.isAuthenticated);
  }, [gameState]);

  const checkAdminStatus = async () => {
    if (!gameState.isAuthenticated || !gameState.user?.id) {
      console.log('❌ Not authenticated or no user ID');
      return;
    }

    try {
      console.log('🔍 Checking admin status for user:', gameState.user.id);
      const { db } = await import('@/firebase');
      const { doc, getDoc } = await import('firebase/firestore');
      
      const userRef = doc(db, 'users', gameState.user.id);
      const userDoc = await getDoc(userRef);
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log('📄 Firebase user data:', userData);
        console.log('🔐 isAdmin field:', userData.isAdmin, 'type:', typeof userData.isAdmin);
        
        if (userData.isAdmin === true) {
          setIsAdmin(true);
          console.log('✅ Admin status confirmed');
        } else {
          console.log('❌ Not an admin');
        }
      } else {
        console.log('❌ User document not found');
      }
    } catch (error) {
      console.error('❌ Error checking admin status:', error);
    }
  };

  const forceAdminStatus = () => {
    setIsAdmin(true);
    console.log('🔧 Admin status forced ON for testing');
  };

  const testOrderDashboard = () => {
    console.log('🧪 Testing Order Dashboard with isAdmin:', isAdmin);
    setShowDashboard(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Admin Order Dashboard Debug Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* User Info */}
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold">Current User Info:</h3>
              <p>Authenticated: {String(gameState.isAuthenticated)}</p>
              <p>User ID: {gameState.user?.id || 'None'}</p>
              <p>Username: {gameState.user?.username || 'None'}</p>
              <p>Local isAdmin state: {String(isAdmin)}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-4 flex-wrap">
              <Button onClick={checkAdminStatus}>
                Check Admin Status in Firebase
              </Button>
              <Button onClick={forceAdminStatus} variant="outline">
                Force Admin Status (Test)
              </Button>
              <Button 
                onClick={testOrderDashboard} 
                disabled={!isAdmin}
                className={isAdmin ? 'bg-green-600 hover:bg-green-700' : ''}
              >
                Test Order Dashboard
              </Button>
            </div>

            {/* Dashboard Modal */}
            {showDashboard && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
                  <AdminOrderDashboard 
                    isAdmin={isAdmin}
                    onClose={() => {
                      console.log('🔒 Closing dashboard');
                      setShowDashboard(false);
                    }}
                  />
                </div>
              </div>
            )}

            {/* Instructions */}
            <div className="bg-yellow-50 p-4 rounded">
              <h3 className="font-semibold">Instructions:</h3>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>First click "Check Admin Status in Firebase" - this should set isAdmin to true if your Firebase user has isAdmin: true</li>
                <li>If that doesn't work, click "Force Admin Status (Test)" to enable it temporarily</li>
                <li>Once isAdmin is true, click "Test Order Dashboard" to open the dashboard</li>
                <li>Check the browser console for debug messages</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDebugTest;
