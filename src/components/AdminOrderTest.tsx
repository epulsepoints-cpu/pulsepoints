import React, { useState, useEffect } from 'react';
import { useGameState } from '@/hooks/useGameState';
import AdminOrderDashboard from './AdminOrderDashboard';
import { Button } from '@/components/ui/button';
import { Package2 } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Simple Admin Order Dashboard Test Component
 * Use this to test the order dashboard independently
 */
const AdminOrderTest: React.FC = () => {
  const { gameState } = useGameState();
  const [showOrderDashboard, setShowOrderDashboard] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check admin status
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (gameState.isAuthenticated && gameState.user?.id) {
        try {
          console.log('🔍 Checking admin status for user:', gameState.user.id);
          const userRef = doc(db, 'users', gameState.user.id);
          const userDoc = await getDoc(userRef);
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log('📄 User data from Firebase:', userData);
            
            if (userData.isAdmin === true) {
              setIsAdmin(true);
              console.log('✅ Admin access confirmed!');
            } else {
              console.log('❌ Admin access denied. Current isAdmin value:', userData.isAdmin);
              console.log('💡 To fix: Set isAdmin: true in Firebase for user:', gameState.user.id);
            }
          } else {
            console.log('❌ User document not found in Firebase');
          }
        } catch (error) {
          console.error('Error checking admin status:', error);
        }
      }
      setLoading(false);
    };

    checkAdminStatus();
  }, [gameState.isAuthenticated, gameState.user?.id]);

  if (loading) {
    return (
      <div className="p-4 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p>Checking admin status...</p>
      </div>
    );
  }

  if (!gameState.isAuthenticated) {
    return (
      <div className="p-4 text-center">
        <p className="text-red-600">❌ Please log in first</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="p-4 text-center max-w-md mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-lg font-bold text-red-800 mb-2">❌ Admin Access Required</h3>
          <p className="text-red-700 mb-3">You need admin privileges to access the order dashboard.</p>
          <div className="bg-white p-3 rounded border text-sm text-left">
            <p className="font-semibold mb-1">To fix this:</p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Open Firebase Console</li>
              <li>Go to Firestore Database</li>
              <li>Find users → {gameState.user?.id}</li>
              <li>Add field: <code className="bg-gray-100 px-1 rounded">isAdmin: true</code></li>
              <li>Save and refresh this page</li>
            </ol>
          </div>
          <Button 
            onClick={() => window.location.reload()} 
            className="mt-3"
            variant="outline"
          >
            🔄 Refresh Page
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="max-w-md mx-auto text-center mb-6">
        <h2 className="text-2xl font-bold mb-4">🎉 Admin Access Confirmed!</h2>
        <p className="text-gray-600 mb-4">
          You have admin privileges. Click below to access the order dashboard.
        </p>
        
        <Button
          onClick={() => setShowOrderDashboard(true)}
          className="flex items-center gap-2 mx-auto"
          size="lg"
        >
          <Package2 className="h-5 w-5" />
          📦 Open Order Dashboard
        </Button>
      </div>

      {/* Order Dashboard Modal */}
      {showOrderDashboard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <AdminOrderDashboard 
              onClose={() => setShowOrderDashboard(false)}
              isAdmin={true}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOrderTest;
