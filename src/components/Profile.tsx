import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { User, DailyTask, RANK_THRESHOLDS } from '@/types/game';
import { 
  Trophy, 
  Gem, 
  Star, 
  Target, 
  Calendar, 
  Activity, 
  BookOpen, 
  Heart, 
  Zap, 
  Award,
  TrendingUp,
  Clock,
  MapPin,
  Save,
  Edit3,
  Crown,
  Shield,
  Medal,
  Flame,
  Video,
  Brain,
  FileText,
  Settings,
  Camera,
  User as UserIcon,
  Mail,
  Phone,
  MapPin as Location,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Lock,
  Unlock,
  LogOut,
  LogIn,
  Eye,
  EyeOff
} from 'lucide-react';
import { auth, db, signInWithGoogle, signInWithEmail, signUpWithEmail, signOutUser } from '@/firebase';
import { updateDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from '@/components/ui/use-toast';
import ECGRoadmap from './ECGRoadmap';
import { useGameState } from '@/hooks/useGameState';
import './Profile.mobile.css'; // Add a new CSS file for mobile-specific styles

interface ProfileProps {
  user: User;
  dailyTasks: DailyTask[];
  completedTasks: number;
}

const Profile: React.FC<ProfileProps> = ({ user, dailyTasks, completedTasks }) => {
  const { gameState } = useGameState();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    username: user.username,
    email: user.email || '',
    avatar: user.avatar || '',
    bio: user.bio || '',
    location: user.location || '',
    profession: user.profession || '',
    specialization: user.specialization || '',
    phone: user.phone || '',
    yearsOfExperience: user.yearsOfExperience || '',
    institution: user.institution || '',
    goals: user.goals || '',
    prefix: user.prefix || '' // Add prefix to state
  });
  const [loading, setLoading] = useState(false);
  
  // Authentication state
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
  const [isAuthenticated, setIsAuthenticated] = useState(!!auth.currentUser);

  // Load extended profile data from Firebase
  useEffect(() => {
    const loadExtendedProfile = async () => {
      if (user.id) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.id));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setEditedProfile(prev => ({
              ...prev,
              bio: userData.bio || '',
              location: userData.location || '',
              profession: userData.profession || '',
              specialization: userData.specialization || '',
              phone: userData.phone || '',
              yearsOfExperience: userData.yearsOfExperience || '',
              institution: userData.institution || '',
              goals: userData.goals || '',
              prefix: userData.prefix || '' // Add prefix from Firestore
            }));
          }
        } catch (error) {
          console.error('Error loading extended profile:', error);
        }
      }
    };

    loadExtendedProfile();
    
    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, [user.id]);

  // Calculate progress to next rank (now based on gems)
  const getCurrentRankProgress = () => {
    const ranks = Object.entries(RANK_THRESHOLDS).sort((a, b) => a[1] - b[1]);
    const currentRankIndex = ranks.findIndex(([rank]) => rank === user.rank);
    if (currentRankIndex === ranks.length - 1) {
      return { progress: 100, nextRank: null, required: 0 };
    }
    const nextRank = ranks[currentRankIndex + 1];
    const currentThreshold = ranks[currentRankIndex][1];
    const nextThreshold = nextRank[1];
    const progress = ((user.gems - currentThreshold) / (nextThreshold - currentThreshold)) * 100;
    return {
      progress: Math.min(100, Math.max(0, progress)),
      nextRank: nextRank[0],
      required: nextThreshold - user.gems
    };
  };

  const handleSaveProfile = async () => {
    if (!user.id) return;

    setLoading(true);
    try {
      const userRef = doc(db, 'users', user.id);
      await updateDoc(userRef, {
        username: editedProfile.username,
        email: editedProfile.email,
        avatar: editedProfile.avatar,
        bio: editedProfile.bio,
        location: editedProfile.location,
        profession: editedProfile.profession,
        specialization: editedProfile.specialization,
        phone: editedProfile.phone,
        yearsOfExperience: editedProfile.yearsOfExperience,
        institution: editedProfile.institution,
        goals: editedProfile.goals,
        lastUpdated: new Date().toISOString()
      });

      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Authentication functions
  const handleGoogleSignIn = async () => {
    setAuthLoading(true);
    try {
      const { user: firebaseUser, error } = await signInWithGoogle();
      if (error) {
        toast({
          title: "Sign-in Failed",
          description: error,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Welcome!",
          description: `Signed in successfully as ${firebaseUser?.displayName || firebaseUser?.email}`,
        });
        setShowAuthForm(false);
        // Trigger a page reload to refresh user data
        window.location.reload();
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
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
      let result;
      if (authMode === 'signin') {
        result = await signInWithEmail(authForm.email, authForm.password);
      } else {
        result = await signUpWithEmail(authForm.email, authForm.password, authForm.displayName);
      }

      if (result.error) {
        toast({
          title: authMode === 'signin' ? "Sign-in Failed" : "Sign-up Failed",
          description: result.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: authMode === 'signin' ? "Welcome Back!" : "Account Created!",
          description: authMode === 'signin' 
            ? "You have been signed in successfully." 
            : "Your account has been created and you are now signed in.",
        });
        setShowAuthForm(false);
        setAuthForm({ email: '', password: '', confirmPassword: '', displayName: '' });
        // Trigger a page reload to refresh user data
        window.location.reload();
      }
    } catch (error) {
      console.error('Email auth error:', error);
      toast({
        title: "Authentication Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    setAuthLoading(true);
    try {
      const { success, error } = await signOutUser();
      if (error) {
        toast({
          title: "Sign-out Failed",
          description: error,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Signed Out",
          description: "You have been signed out successfully.",
        });
        // Clear local data and redirect or reload
        localStorage.clear();
        window.location.reload();
      }
    } catch (error) {
      console.error('Sign-out error:', error);
      toast({
        title: "Sign-out Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAuthLoading(false);
    }
  };

  const rankProgress = getCurrentRankProgress();

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                <AvatarImage src={editedProfile.avatar || user.avatar} alt={editedProfile.username} />
                <AvatarFallback className="bg-blue-500 text-white text-xl font-bold">
                  {editedProfile.username.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <div className="absolute -bottom-2 -right-2 flex flex-col items-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full p-1 h-8 w-8 mb-1"
                    asChild
                  >
                    <label htmlFor="avatar-upload" className="cursor-pointer">
                      <Camera className="w-4 h-4" />
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            // For now, use a local URL. In production, upload to storage and save the URL.
                            const url = URL.createObjectURL(file);
                            setEditedProfile(prev => ({ ...prev, avatar: url }));
                          }
                        }}
                      />
                    </label>
                  </Button>
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                {isEditing ? (
                  <>
                    {/* Remove prefix input */}
                    <Input
                      className="w-48"
                      placeholder="Full Name"
                      value={editedProfile.username}
                      onChange={e => setEditedProfile(prev => ({ ...prev, username: e.target.value }))}
                    />
                  </>
                ) : (
                  <h1 className="text-2xl font-bold text-gray-800">
                    {editedProfile.username}
                  </h1>
                )}
                <Badge variant="secondary" className="text-sm">
                  {user.rank}
                </Badge>
                <Button
                  size="sm"
                  variant="outline"
                  aria-label="Open Settings"
                  onClick={() => {
                    setIsEditing(false);
                    // Open the Settings tab below (robust: use TabsTrigger click)
                    setTimeout(() => {
                      const settingsTab = document.querySelector('[role="tab"][data-state][value="settings"], [role="tab"][data-value="settings"]');
                      if (settingsTab) (settingsTab as HTMLElement).click();
                    }, 0);
                  }}
                  className="ml-auto"
                >
                  <Settings className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-gray-600 mb-3">{user.email}</p>
              
              {/* Rank Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to {rankProgress.nextRank || 'Max Rank'}</span>
                  <span>{rankProgress.required > 0 ? `${rankProgress.required} Gems needed` : 'Max rank achieved!'}</span>
                </div>
                <Progress value={rankProgress.progress} className="h-2" />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold">{user.xp}</p>
            <p className="text-sm opacity-90">Total XP</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4 text-center">
            <Gem className="w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold">{user.gems}</p>
            <p className="text-sm opacity-90">Gems</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-4 text-center">
            <Flame className="w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold">{user.streakCount || 0}</p>
            <p className="text-sm opacity-90">Day Streak</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold">{user.totalTasksCompleted || completedTasks}</p>
            <p className="text-sm opacity-90">Tasks Done</p>
          </CardContent>
        </Card>
      </div>

      {/* Profile Tabs */}
      <Tabs defaultValue="roadmap" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="roadmap">ECG Roadmap</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="roadmap" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                ECG Learning Roadmap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-lg font-semibold mb-2">Learning Roadmap Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  Track your progress through comprehensive ECG learning modules and pathways.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">📚 Module 1</h4>
                    <p className="text-sm text-gray-600">Basic ECG Fundamentals</p>
                    <Progress value={50} className="mt-2" />
                  </div>
                  <div className="p-4 border rounded-lg opacity-50">
                    <h4 className="font-semibold mb-2">🔒 Module 2</h4>
                    <p className="text-sm text-gray-600">Advanced Arrhythmias</p>
                    <Progress value={0} className="mt-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          {/* Edit Button for Settings Tab */}
          {!isEditing && (
            <div className="flex justify-end">
              <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
                Edit
              </Button>
            </div>
          )}
          {/* Moved Overview Content Here */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserIcon className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isEditing ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={editedProfile.username}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, username: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={editedProfile.email}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={editedProfile.bio}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, bio: e.target.value }))}
                        placeholder="Tell us about yourself..."
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={editedProfile.location}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="City, Country"
                      />
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>{user.email || 'Not provided'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Location className="w-4 h-4 text-gray-500" />
                      <span>{editedProfile.location || 'Not provided'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>Joined {user.joinDate ? new Date(user.joinDate).toLocaleDateString() : 'Recently'}</span>
                    </div>
                    {editedProfile.bio && (
                      <div className="mt-3 p-3 bg-gray-50 rounded-md">
                        <p className="text-sm text-gray-700">{editedProfile.bio}</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Professional Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Professional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isEditing ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="profession">Profession</Label>
                      <Input
                        id="profession"
                        value={editedProfile.profession}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, profession: e.target.value }))}
                        placeholder="e.g., Medical Student, Nurse, Doctor"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialization">Specialization</Label>
                      <Input
                        id="specialization"
                        value={editedProfile.specialization}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, specialization: e.target.value }))}
                        placeholder="e.g., Cardiology, Emergency Medicine"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution</Label>
                      <Input
                        id="institution"
                        value={editedProfile.institution}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, institution: e.target.value }))}
                        placeholder="University or Hospital"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input
                        id="experience"
                        value={editedProfile.yearsOfExperience}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, yearsOfExperience: e.target.value }))}
                        placeholder="e.g., 2"
                      />
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="w-4 h-4 text-gray-500" />
                      <span>{editedProfile.profession || 'Not specified'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap className="w-4 h-4 text-gray-500" />
                      <span>{editedProfile.specialization || 'Not specified'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="w-4 h-4 text-gray-500" />
                      <span>{editedProfile.institution || 'Not specified'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{editedProfile.yearsOfExperience ? `${editedProfile.yearsOfExperience} years` : 'Not specified'}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Learning Goals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Learning Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-2">
                  <Label htmlFor="goals">Your Learning Goals</Label>
                  <Textarea
                    id="goals"
                    value={editedProfile.goals}
                    onChange={(e) => setEditedProfile(prev => ({ ...prev, goals: e.target.value }))}
                    placeholder="What do you want to achieve with ECG learning?"
                    rows={4}
                  />
                </div>
              ) : (
                <div className="text-sm text-gray-700">
                  {editedProfile.goals || 'No learning goals set yet. Click edit to add your goals!'}
                </div>
              )}
            </CardContent>
          </Card>

          {isEditing && (
            <div className="flex gap-2">
              <Button onClick={handleSaveProfile} disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          )}

          {/* Account Authentication */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Authentication Status */}
              <div className="p-4 border rounded-lg bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {isAuthenticated ? (
                      <>
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <div>
                          <h4 className="font-medium text-green-700">Account Connected</h4>
                          <p className="text-sm text-gray-600">
                            Signed in as {auth.currentUser?.email || auth.currentUser?.displayName || 'User'}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5 text-orange-500" />
                        <div>
                          <h4 className="font-medium text-orange-700">Guest Account</h4>
                          <p className="text-sm text-gray-600">Sign in to save your progress securely</p>
                        </div>
                      </>
                    )}
                  </div>
                  {isAuthenticated ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleSignOut}
                      disabled={authLoading}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  ) : (
                    <Button 
                      variant="default" 
                      size="sm" 
                      onClick={() => setShowAuthForm(true)}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <LogIn className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                  )}
                </div>
              </div>

              {/* Sign In/Sign Up Form */}
              {showAuthForm && (
                <Card className="border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {authMode === 'signin' ? 'Sign In' : 'Create Account'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Google Sign In */}
                    <Button
                      variant="outline"
                      onClick={handleGoogleSignIn}
                      disabled={authLoading}
                      className="w-full"
                    >
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Continue with Google
                    </Button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-muted-foreground">or</span>
                      </div>
                    </div>

                    {/* Email Form */}
                    <div className="space-y-3">
                      {authMode === 'signup' && (
                        <div className="space-y-2">
                          <Label htmlFor="displayName">Full Name</Label>
                          <Input
                            id="displayName"
                            type="text"
                            value={authForm.displayName}
                            onChange={(e) => setAuthForm(prev => ({ ...prev, displayName: e.target.value }))}
                            placeholder="Enter your full name"
                          />
                        </div>
                      )}
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={authForm.email}
                          onChange={(e) => setAuthForm(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={authForm.password}
                            onChange={(e) => setAuthForm(prev => ({ ...prev, password: e.target.value }))}
                            placeholder="Enter your password"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                      
                      {authMode === 'signup' && (
                        <div className="space-y-2">
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
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={handleEmailAuth}
                        disabled={authLoading || !authForm.email || !authForm.password || (authMode === 'signup' && (!authForm.displayName || !authForm.confirmPassword))}
                        className="flex-1"
                      >
                        {authLoading ? 'Loading...' : (authMode === 'signin' ? 'Sign In' : 'Create Account')}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => setShowAuthForm(false)}
                        disabled={authLoading}
                      >
                        Cancel
                      </Button>
                    </div>

                    <div className="text-center">
                      <Button
                        variant="link"
                        onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
                        disabled={authLoading}
                        className="text-sm"
                      >
                        {authMode === 'signin' 
                          ? "Don't have an account? Sign up" 
                          : "Already have an account? Sign in"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
