import React, { useState, useEffect } from 'react';
import { signInWithGoogle, testFirebaseConnection, getFirebaseStatus } from '@/firebase';

const FirebaseDebugPanel: React.FC = () => {
  const [status, setStatus] = useState<any>(null);
  const [connectionTest, setConnectionTest] = useState<boolean | null>(null);
  const [authTest, setAuthTest] = useState<string>('');

  useEffect(() => {
    // Test Firebase status on component mount
    const firebaseStatus = getFirebaseStatus();
    setStatus(firebaseStatus);
    
    // Test connection
    testFirebaseConnection().then(result => {
      setConnectionTest(result);
    });
  }, []);

  const handleTestAuth = async () => {
    setAuthTest('Testing...');
    try {
      const result = await signInWithGoogle();
      if (result.error) {
        setAuthTest(`❌ Auth Error: ${result.error}`);
      } else {
        setAuthTest(`✅ Auth Success: ${result.user?.displayName || 'Unknown User'}`);
      }
    } catch (error) {
      setAuthTest(`❌ Auth Exception: ${error.message}`);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-md">
      <h3 className="font-bold text-sm mb-2">🔥 Firebase Debug Panel</h3>
      
      <div className="text-xs space-y-1">
        <div><strong>Status:</strong></div>
        <div>Auth: {status?.authReady ? '✅' : '❌'}</div>
        <div>DB: {status?.dbReady ? '✅' : '❌'}</div>
        <div>Analytics: {status?.analyticsReady ? '✅' : '❌'}</div>
        <div>Connection: {connectionTest === null ? '⏳' : connectionTest ? '✅' : '❌'}</div>
        
        <button 
          onClick={handleTestAuth}
          className="mt-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
        >
          Test Auth
        </button>
        
        {authTest && (
          <div className="mt-1 text-xs">{authTest}</div>
        )}
      </div>
    </div>
  );
};

export default FirebaseDebugPanel;
