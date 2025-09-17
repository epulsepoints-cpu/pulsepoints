import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Lock, 
  UserPlus, 
  Mail, 
  Eye, 
  EyeOff, 
  LogIn,
  Star,
  Trophy,
  Target,
  Award,
  Shield,
  Crown,
  Sparkles
} from 'lucide-react';
import { signInWithGoogle, signInWithEmail, signUpWithEmail } from '@/firebase';
import { toast } from '@/components/ui/use-toast';

interface LockedProfileProps {
  onSignIn?: () => void;
}

const LockedProfile: React.FC<LockedProfileProps> = ({ onSignIn }) => {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [authForm, setAuthForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    displayName: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setAuthLoading(true);
    try {
      const { user, error } = await signInWithGoogle();
      if (error) {
        toast({
          title: "Sign-in Failed",
          description: error,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Welcome!",
          description: `Signed in successfully as ${user?.displayName || user?.email}`,
        });
        onSignIn?.();
      }
    } catch (error) {
      toast({
        title: "Sign-in Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAuthLoading(false);
    }
  };

  const handleEmailAuth = async () => {
    if (authMode === 'signup' && authForm.password !== authForm.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    setAuthLoading(true);
    try {
      const authFunction = authMode === 'signin' ? signInWithEmail : signUpWithEmail;
      const { user, error } = await authFunction(
        authForm.email,
        authForm.password,
        authForm.displayName
      );

      if (error) {
        toast({
          title: authMode === 'signin' ? "Sign-in Failed" : "Sign-up Failed",
          description: error,
          variant: "destructive",
        });
      } else {
        toast({
          title: authMode === 'signin' ? "Welcome Back!" : "Account Created!",
          description: authMode === 'signin' 
            ? `Signed in as ${user?.email}` 
            : `Account created for ${user?.email}`,
        });
        onSignIn?.();
      }
    } catch (error) {
      toast({
        title: "Authentication Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAuthLoading(false);
    }
  };

  const profileFeatures = [
    {
      icon: Trophy,
      title: "Achievements & Badges",
      description: "Unlock achievements and earn badges as you progress"
    },
    {
      icon: Target,
      title: "ECG Roadmap",
      description: "Track your learning journey with a personalized roadmap"
    },
    {
      icon: Star,
      title: "Activity History",
      description: "View your complete learning history and progress"
    },
    {
      icon: Award,
      title: "Rank & Leaderboard",
      description: "See your rank and compete with other learners"
    },
    {
      icon: Shield,
      title: "Profile Customization",
      description: "Personalize your profile with bio, avatar, and more"
    },
    {
      icon: Crown,
      title: "Advanced Settings",
      description: "Access advanced features and personalization options"
    }
  ];

  if (!showAuthForm) {
    return (
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center">
            <div className="bg-blue-100 p-4 rounded-full">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Sign in to unlock your Profile
          </h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Create an account or sign in to access your personalized profile, track your progress, and unlock exclusive features.
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profileFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="relative overflow-hidden border-2 border-gray-100 hover:border-blue-200 transition-colors">
                <div className="absolute top-2 right-2">
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            onClick={() => setShowAuthForm(true)}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            size="lg"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Create Account
          </Button>
          <Button
            onClick={() => {
              setAuthMode('signin');
              setShowAuthForm(true);
            }}
            variant="outline"
            className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50"
            size="lg"
          >
            <LogIn className="w-5 h-5 mr-2" />
            Sign In
          </Button>
        </div>

        {/* Google Sign In */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or continue with</span>
            </div>
          </div>
          <Button
            onClick={handleGoogleSignIn}
            disabled={authLoading}
            variant="outline"
            className="mt-4 w-full max-w-sm"
            size="lg"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {authLoading ? 'Signing in...' : 'Continue with Google'}
          </Button>
        </div>

        {/* Benefits */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Why create an account?</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Save your progress and continue learning across devices
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Unlock achievements and track your learning journey
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Get personalized recommendations and study plans
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Access exclusive content and advanced features
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Authentication Form
  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">
          {authMode === 'signin' ? 'Welcome Back!' : 'Create Account'}
        </h2>
        <p className="text-gray-600">
          {authMode === 'signin' 
            ? 'Sign in to access your profile and progress' 
            : 'Join ECGkid PulsePoints to start your learning journey'}
        </p>
      </div>

      <Card>
        <CardContent className="p-6 space-y-4">
          {authMode === 'signup' && (
            <div>
              <Label htmlFor="displayName">Full Name</Label>
              <Input
                id="displayName"
                value={authForm.displayName}
                onChange={(e) => setAuthForm(prev => ({ ...prev, displayName: e.target.value }))}
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={authForm.email}
              onChange={(e) => setAuthForm(prev => ({ ...prev, email: e.target.value }))}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={authForm.password}
                onChange={(e) => setAuthForm(prev => ({ ...prev, password: e.target.value }))}
                placeholder="Enter your password"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {authMode === 'signup' && (
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={authForm.confirmPassword}
                onChange={(e) => setAuthForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                placeholder="Confirm your password"
              />
            </div>
          )}

          <Button
            onClick={handleEmailAuth}
            disabled={authLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {authLoading 
              ? (authMode === 'signin' ? 'Signing in...' : 'Creating account...')
              : (authMode === 'signin' ? 'Sign In' : 'Create Account')
            }
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          <Button
            onClick={handleGoogleSignIn}
            disabled={authLoading}
            variant="outline"
            className="w-full"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </Button>

          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
              className="text-blue-600 hover:text-blue-700"
            >
              {authMode === 'signin' 
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"
              }
            </Button>
          </div>
        </CardContent>
      </Card>

      <Button
        variant="ghost"
        onClick={() => setShowAuthForm(false)}
        className="w-full text-gray-600 hover:text-gray-700"
      >
        ← Back to features
      </Button>
    </div>
  );
};

export default LockedProfile;
