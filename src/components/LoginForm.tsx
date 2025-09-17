import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { signInWithGoogle } from '@/firebase';
import { useUISounds } from '@/hooks/useUISounds';

interface LoginFormProps {
  onLogin: (username: string, email?: string) => void;
  onSkipLogin: () => void;
  showSaveProgressPrompt?: boolean; // New prop to show progress saving message
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onSkipLogin, showSaveProgressPrompt = false }) => {
  const { playBrandSound } = useUISounds();

  // Play brand sound when component mounts (logo is revealed)
  useEffect(() => {
    const timer = setTimeout(() => {
      playBrandSound();
    }, 500); // Small delay for better UX

    return () => clearTimeout(timer);
  }, [playBrandSound]);

  const handleGoogleLogin = async () => {
    try {
      console.log('🔐 Starting Google login process...');
      const result = await signInWithGoogle();
      
      if (result.error) {
        console.error('❌ Google sign-in failed:', result.error);
        alert(`Google sign-in failed: ${result.error}`);
        return;
      }
      
      if (result.user) {
        console.log('✅ Google login successful, calling onLogin...');
        onLogin(result.user.displayName || '', result.user.email || '');
      }
    } catch (error) {
      console.error('❌ Google login error:', error);
      alert('Google sign-in failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-6 text-center space-y-6">
      <div>
        <img src="/ecgkid_logo.png" alt="ECGkid Logo" className="w-20 h-20 mx-auto mb-2 object-contain" />
        <h1 className="text-3xl font-bold text-purple-800">ECGkid PulsePoints</h1>
        <p className="text-sm text-gray-600">Master ECGs Daily, One PulsePoint at a Time</p>
      </div>

      {/* Progress Save Prompt */}
      {showSaveProgressPrompt && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-2">Assessment Complete! 🎉</h3>
          <p className="text-sm text-green-700 mb-3">
            Great job! You've completed the onboarding assessment. Sign in now to save your progress and personalized learning plan.
          </p>
          <div className="text-xs text-green-600 bg-green-100 rounded px-2 py-1 inline-block">
            💡 Your assessment results and recommended module will be saved to your account
          </div>
        </div>
      )}

      {/* Regular welcome message for non-onboarding users */}
      {!showSaveProgressPrompt && (
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Welcome Back!</h2>
          <p className="text-gray-600 text-sm">
            Sign in to continue your ECG learning journey and track your progress.
          </p>
        </div>
      )}

      <Button
        variant="outline"
        onClick={handleGoogleLogin}
        className="flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 shadow-sm font-medium py-2 px-4 rounded transition-all"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M44.5 20H24V28.5H36.9C35.4 33.1 31.1 36 24 36C16.3 36 10 29.7 10 22C10 14.3 16.3 8 24 8C27.3 8 30.1 9.1 32.3 11L38.1 5.2C34.5 2 29.6 0 24 0C10.7 0 0 10.7 0 24C0 37.3 10.7 48 24 48C37.3 48 48 37.3 48 24C48 22.3 47.8 20.7 47.5 19.2L44.5 20Z"
              fill="#FFC107"
            />
            <path
              d="M6.3 14.7L12.9 19.2C14.7 15.2 18.9 12 24 12C27.3 12 30.1 13.1 32.3 15L38.1 9.2C34.5 6 29.6 4 24 4C16.3 4 10 10.3 10 18C10 19.3 10.2 20.6 10.5 21.8L6.3 14.7Z"
              fill="#FF3D00"
            />
            <path
              d="M24 44C31.1 44 35.4 41.1 36.9 36.5L24 28.5V36H36.9C35.4 40.6 31.1 44 24 44Z"
              fill="#4CAF50"
            />
            <path
              d="M44.5 20H24V28.5H36.9C36.3 30.3 35.1 31.8 33.5 32.8L39.2 37.3C42.2 34.6 44.5 30.7 44.5 26C44.5 24.7 44.3 23.4 44 22.2L44.5 20Z"
              fill="#1976D2"
            />
          </g>
        </svg>
        {showSaveProgressPrompt ? 'Save Progress - Sign in with Google' : 'Sign in with Google'}
      </Button>

      <Button 
        variant="outline" 
        onClick={onSkipLogin}
        className={showSaveProgressPrompt ? 'text-gray-500' : ''}
      >
        {showSaveProgressPrompt ? 'Continue as Guest (Progress Not Saved)' : 'Continue without login'}
      </Button>

      <div className="text-xs text-gray-400 mt-4">
        <p>Built with ❤️ by ECGkid.org • Your streak starts now!</p>
        <div className="mt-2 space-x-4">
          <a href="/privacy-policy.html" target="_blank" className="hover:text-gray-600 underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service.html" target="_blank" className="hover:text-gray-600 underline">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
