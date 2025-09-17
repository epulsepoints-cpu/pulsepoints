import React, { useState } from 'react';
import { setupEvents } from '@/scripts/setupWeeklyEvents';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Settings, CheckCircle, AlertCircle } from 'lucide-react';

/**
 * Admin component for initializing the Weekly Events system
 * This component should only be used once to set up the system
 */
export const EventSystemSetup: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null);

  const handleSetup = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      const setupResult = await setupEvents();
      setResult(setupResult);
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Weekly Events System Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-600">
            This will initialize the Weekly Events system in your Firebase database. 
            This should only be run once during initial setup.
          </p>

          <div className="space-y-2">
            <h4 className="font-medium">What this will do:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Create event templates in Firestore</li>
              <li>• Set up global event configuration</li>
              <li>• Generate the first active weekly event</li>
              <li>• Configure proper database structure</li>
            </ul>
          </div>

          <Button 
            onClick={handleSetup} 
            disabled={isLoading || (result?.success === true)}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Setting up system...
              </>
            ) : result?.success ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Setup Complete
              </>
            ) : (
              <>
                <Settings className="w-4 h-4 mr-2" />
                Initialize Events System
              </>
            )}
          </Button>

          {result && (
            <Alert className={result.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {result.success ? (
                  <div>
                    <p className="font-medium text-green-800">✅ Setup successful!</p>
                    <p className="text-green-700 mt-1">
                      {result.message || 'Weekly Events system is now ready to use.'}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="font-medium text-red-800">❌ Setup failed</p>
                    <p className="text-red-700 mt-1">
                      {result.error || 'An unknown error occurred during setup.'}
                    </p>
                  </div>
                )}
              </AlertDescription>
            </Alert>
          )}

          {result?.success && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Next Steps:</h4>
              <ol className="text-sm text-blue-800 space-y-1">
                <li>1. Update your Firestore security rules (check console for details)</li>
                <li>2. Remove this setup component from your app</li>
                <li>3. The Events tab should now show an active event</li>
                <li>4. Users can start participating in weekly challenges!</li>
              </ol>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EventSystemSetup;
