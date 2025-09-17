import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { auth, testFirebaseConnection } from '@/firebase';
import { comprehensiveFirebaseTest } from '@/test-firebase-comprehensive';
import { debugFirebaseProgressSave } from '@/debug-firebase-save';

const FirebaseTestPanel: React.FC = () => {
  const [testResults, setTestResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [debugResults, setDebugResults] = useState<any>(null);

  const runBasicTest = async () => {
    setIsLoading(true);
    try {
      const connected = await testFirebaseConnection();
      setTestResults({
        connection: connected,
        user: auth.currentUser ? {
          uid: auth.currentUser.uid,
          email: auth.currentUser.email
        } : null
      });
    } catch (error) {
      console.error('Test failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const runComprehensiveTest = async () => {
    setIsLoading(true);
    try {
      const results = await comprehensiveFirebaseTest();
      setTestResults(results);
    } catch (error) {
      console.error('Comprehensive test failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const runProgressSaveTest = async () => {
    setIsLoading(true);
    try {
      const results = await debugFirebaseProgressSave('module-1', 'lesson-1', 85, 300, false);
      setDebugResults(results);
    } catch (error) {
      console.error('Progress save test failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusBadge = (status: boolean | undefined) => {
    if (status === undefined) return <Badge variant="secondary">Not tested</Badge>;
    return status ? <Badge variant="default">✅ Pass</Badge> : <Badge variant="destructive">❌ Fail</Badge>;
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>🔥 Firebase Integration Test Panel</CardTitle>
        <CardDescription>
          Test your Firebase connection and progress saving functionality
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <Button 
            onClick={runBasicTest} 
            disabled={isLoading}
            variant="outline"
          >
            Basic Connection Test
          </Button>
          <Button 
            onClick={runComprehensiveTest} 
            disabled={isLoading}
          >
            Full Integration Test
          </Button>
          <Button 
            onClick={runProgressSaveTest} 
            disabled={isLoading}
            variant="secondary"
          >
            Test Progress Save
          </Button>
        </div>

        {isLoading && (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-2 text-sm text-gray-600">Running tests...</p>
          </div>
        )}

        {testResults && (
          <div className="space-y-3">
            <h3 className="font-semibold">Test Results:</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {typeof testResults === 'object' && testResults.connection !== undefined ? (
                <>
                  <div>Connection:</div>
                  <div>{getStatusBadge(testResults.connection)}</div>
                  
                  <div>Authentication:</div>
                  <div>{getStatusBadge(testResults.authentication)}</div>
                  
                  <div>Read Access:</div>
                  <div>{getStatusBadge(testResults.read)}</div>
                  
                  <div>Write Access:</div>
                  <div>{getStatusBadge(testResults.write)}</div>
                  
                  <div>Progress Save:</div>
                  <div>{getStatusBadge(testResults.progressSave)}</div>
                  
                  <div>User Save:</div>
                  <div>{getStatusBadge(testResults.userSave)}</div>
                </>
              ) : (
                <>
                  <div>Connection:</div>
                  <div>{getStatusBadge(testResults?.connection)}</div>
                </>
              )}
            </div>
            
            {testResults.user && (
              <div className="mt-3 p-3 bg-gray-50 rounded">
                <p className="text-sm"><strong>Current User:</strong></p>
                <p className="text-xs">ID: {testResults.user.uid}</p>
                <p className="text-xs">Email: {testResults.user.email || 'No email'}</p>
              </div>
            )}
          </div>
        )}

        {debugResults && (
          <div className="space-y-3">
            <h3 className="font-semibold">Progress Save Debug:</h3>
            <div className="p-3 bg-gray-50 rounded text-sm">
              <p><strong>Success:</strong> {debugResults.success ? '✅ Yes' : '❌ No'}</p>
              {debugResults.error && (
                <p className="text-red-600"><strong>Error:</strong> {debugResults.error}</p>
              )}
              {debugResults.success && (
                <p className="text-green-600">Progress save operation completed successfully!</p>
              )}
            </div>
          </div>
        )}

        <div className="mt-4 p-3 bg-blue-50 rounded text-sm">
          <p><strong>💡 Tips:</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li>Make sure you're signed in for full functionality tests</li>
            <li>Check browser console for detailed logs</li>
            <li>If tests fail, verify your Firebase configuration</li>
            <li>Ensure Firestore rules allow your operations</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default FirebaseTestPanel;
