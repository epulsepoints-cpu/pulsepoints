import React, { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/components/ui/use-toast';
import { useGameState } from '@/hooks/useGameState';
import { useUserStats } from '@/hooks/useUserStats';
import OnboardingErrorBoundary from './OnboardingErrorBoundary';
import { CompactProfileBadge } from './ProfileBadgeDisplay';
import { useUnifiedNotifications } from '@/hooks/useUnifiedNotifications';
import HeartShop from './HeartShop';
import AdminOrderDashboard from './AdminOrderDashboard';
import { cn } from '@/lib/utils';
import { 
  CheckSquare,
  BarChart3,
  User,
  Trophy,
  Heart,
  Flame,
  Diamond,
  Star,
  Target,
  Settings,
  Bell,
  Menu,
  X,
  BookOpen,
  Calendar,
  TrendingUp,
  Award,
  Zap,
  Crown,
  Play,
  Stethoscope,
  ShoppingBag,
  BookMarked,
  HeartPulse,
  Wrench,
  Newspaper,
  Camera,
  GraduationCap,
  Sliders,
  Shield,
  UserCircle,
  HelpCircle,
  LogOut,
  FileText,
  Package2,
  Activity
} from 'lucide-react';

// Import existing components
import DashboardContent from './DashboardContent';
import ECGMasterHub from './ECGMasterHub';
import UnifiedNotificationComponent from './UnifiedNotificationComponent';
import NotificationSettings from './NotificationSettings';
import Profile from './Profile';
import ProgressComponent from './ProgressComponent';
import LockedProfile from './LockedProfile';
import ResourcesModal from './ResourcesModal';
import AdvancedOnboardingAssessment from './AdvancedOnboardingAssessment';
import LoginForm from './LoginForm';
import PulsepointStore from './PulsepointStore';
import EventsMain from './Events/EventsMain';
import ECGSimulator from './ECGSimulator';
import DownloadsManager from './DownloadsManager';
import { androidRecoveryManager } from '@/utils/AndroidRecoveryManager';

type ActiveTab = 'daily-tasks' | 'learn' | 'progress' | 'store' | 'profile' | 'events' | 'ecg-simulator' | 'downloads';

const MainDuolingoLayout: React.FC = () => {
  // All useState hooks first
  const [activeTab, setActiveTab] = useState<ActiveTab>('learn');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showResourcesModal, setShowResourcesModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isInLessonView, setIsInLessonView] = useState(false); // Track full-screen lesson state
  const [isInEventsView, setIsInEventsView] = useState(false); // Track full-screen events state
  const [showOnboarding, setShowOnboarding] = useState(() => {
    // Check if user has seen onboarding before
    return !localStorage.getItem('ecg-onboarding-completed');
  });
  const [showOnboardingAssessment, setShowOnboardingAssessment] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showNotificationCenter, setShowNotificationCenter] = useState(false);
  const [showNotificationSettings, setShowNotificationSettings] = useState(false);
  const [showOrderDashboard, setShowOrderDashboard] = useState(false);

  // Custom hooks after all useState calls
  const { 
    gameState, 
    login, 
    logout, // Add logout function
    skipLogin, 
    completeTask, 
    refreshUserStatsImmediately,
    refreshDailyTasks,
    completeLearningLesson,
    loseHeart,
    loadLearningProgress,
    updateUserOnboardingData, // Add onboarding data function
    // Heart shop functions
    showHeartShop,
    hideHeartShop,
    handleHeartPurchaseSuccess
  } = useGameState();
  
  const { notifications, unreadCount: unreadNotifications } = useUnifiedNotifications();

  // Use centralized user stats for consistency across all components
  const userStats = useUserStats(gameState.user);

  // Fallback stats if user is not available
  const defaultStats = {
    id: 'demo-user',
    name: 'ECG Learner',
    level: 1,
    xp: 0,
    xpToNextLevel: 250,
    xpProgress: 0,
    gems: 0,
    gemsProgress: 0,
    rank: 'ECGKid Intern',
    rankProgress: 0,
    currentStreak: 0,
    longestStreak: 0,
    hearts: 5,
    totalTasksCompleted: 0,
    nextLevelXpRequired: 250,
    progressToNextLevel: 0,
  };

  const stats = userStats || defaultStats;

  // Navigation items for bottom tabs (moved stats to header, added store to bottom)
  const navItems = [
    { id: 'learn', label: 'ECG Master', icon: BookOpen },
    { id: 'daily-tasks', label: 'Daily', icon: CheckSquare },
    { id: 'ecg-simulator', label: 'ECG Sim', icon: Activity },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'store', label: 'Store', icon: ShoppingBag },
  ];

  // Check admin status
  useEffect(() => {
    // Initialize Google Auth for native platforms
    const initAuth = async () => {
      try {
        const { initializeGoogleAuth } = await import('@/services/authService');
        await initializeGoogleAuth();
      } catch (error) {
        console.error('Failed to initialize Google Auth:', error);
      }
    };
    
    initAuth();
    
    if (gameState.isAuthenticated && gameState.user?.id) {
      const checkAdminStatus = async () => {
        try {
          // Get Firebase auth instance first to verify user is actually logged in
          const { auth } = await import('@/firebase');
          if (!auth.currentUser) {
            console.log('⚠️ Skipping admin check - user not authenticated with Firebase');
            return;
          }
          
          const { db } = await import('@/firebase');
          const { doc, getDoc } = await import('firebase/firestore');
          const userRef = doc(db, 'users', gameState.user!.id);
          const userDoc = await getDoc(userRef);
          
          if (userDoc.exists() && userDoc.data().isAdmin === true) {
            setIsAdmin(true);
          }
        } catch (error) {
          console.error('Error checking admin status:', error);
          // Don't show error toast for permission issues during development
          if (!window.location.hostname.includes('localhost')) {
            toast({
              title: "Authentication Required",
              description: "Please sign in to access admin features",
              variant: "default"
            });
          }
        }
      };
      checkAdminStatus();
    }
  }, [gameState.isAuthenticated, gameState.user?.id]);

  // Track when Events view is active for fullscreen experience
  useEffect(() => {
    setIsInEventsView(activeTab === 'events');
  }, [activeTab]);

  // Handle task completion with Duolingo-style feedback
  const handleCompleteTask = async (taskId: string, isCorrect: boolean) => {
    try {
      await completeTask(taskId, isCorrect);
      
      if (isCorrect) {
        // Duolingo-style success feedback
        toast({
          title: "Brilliant! ✨",
          description: "Perfect answer! You're making great progress!",
          duration: 3000,
        });
        
        // Show additional motivation for streaks
        if (stats.currentStreak > 0 && stats.currentStreak % 5 === 0) {
          setTimeout(() => {
            toast({
              title: `${stats.currentStreak} Day Streak! 🔥`,
              description: "You're on fire! Keep the momentum going!",
              duration: 4000,
            });
          }, 1500);
        }
      } else {
        // Lose a heart for incorrect answer
        if (loseHeart) {
          loseHeart();
        }
        
        // Encouraging failure feedback with heart context
        const remainingHearts = Math.max(0, (gameState.user?.hearts || 5) - 1);
        
        if (remainingHearts <= 0) {
          toast({
            title: "💔 No Hearts Left!",
            description: "Hearts will regenerate over time. Take a break and review the material!",
            variant: "destructive",
            duration: 5000,
          });
        } else {
          toast({
            title: `💔 Heart Lost! (${remainingHearts} remaining)`,
            description: "Don't worry - every mistake is a step toward mastery!",
            variant: "destructive",
            duration: 3000,
          });
        }
      }
    } catch (error) {
      console.error('Error completing task:', error);
      toast({
        title: "Connection Issue",
        description: "Please check your internet and try again.",
        variant: "destructive"
      });
    }
  };

  // Check if authenticated user needs onboarding assessment
  useEffect(() => {
    console.log('🔍 MainDuolingo: Checking onboarding state:', {
      isAuthenticated: gameState.isAuthenticated,
      userId: gameState.user?.id,
      onboardingCompleted: gameState.user?.onboardingCompleted,
      currentShowOnboardingAssessment: showOnboardingAssessment
    });
    
    if (gameState.isAuthenticated && gameState.user?.id && !gameState.user.onboardingCompleted && !showOnboardingAssessment) {
      console.log('🎯 MainDuolingo: Setting showOnboardingAssessment to true');
      setShowOnboardingAssessment(true);
    } else if (gameState.user?.onboardingCompleted && showOnboardingAssessment) {
      console.log('🎯 MainDuolingo: Onboarding completed, setting showOnboardingAssessment to false');
      setShowOnboardingAssessment(false);
    }
  }, [gameState.isAuthenticated, gameState.user?.id, gameState.user?.onboardingCompleted]);

  // Handle hardware back button for internal navigation
  useEffect(() => {
    let backButtonListener: any;

    const setupInternalBackHandler = async () => {
      if (Capacitor.isNativePlatform()) {
        backButtonListener = await CapacitorApp.addListener('backButton', () => {
          // Handle internal app navigation based on current state
          if (isInLessonView) {
            // Exit lesson view
            setIsInLessonView(false);
            setActiveTab('learn');
          } else if (isInEventsView) {
            // Exit events view
            setIsInEventsView(false);
            setActiveTab('learn');
          } else if (activeTab === 'ecg-simulator') {
            // Exit ECG simulator
            setActiveTab('learn');
          } else if (showNotificationSettings) {
            // Close notification settings
            setShowNotificationSettings(false);
          } else if (activeTab !== 'learn') {
            // Go back to main learn tab
            setActiveTab('learn');
          }
          // If already on main learn tab, let the global handler deal with it
        });
      }
    };

    setupInternalBackHandler();

    return () => {
      if (backButtonListener) {
        backButtonListener.remove();
      }
    };
  }, [isInLessonView, isInEventsView, activeTab, showNotificationSettings]);

  // Show onboarding if user is new or hasn't completed professional onboarding
  if (!gameState.isAuthenticated && !gameState.isGuestUser && showOnboarding) {
    return (
      <OnboardingErrorBoundary>
        <AdvancedOnboardingAssessment 
          userId="guest-user" 
          onComplete={async (onboardingData) => {
            localStorage.setItem('ecg-onboarding-completed', 'true');
            localStorage.setItem('ecg-onboarding-data', JSON.stringify(onboardingData));
            
            // If user is already authenticated, update their profile immediately
            if (gameState.isAuthenticated && updateUserOnboardingData) {
              await updateUserOnboardingData(onboardingData);
            }
            
            setShowOnboarding(false);
            setShowLoginForm(true);
          }} 
        />
      </OnboardingErrorBoundary>
    );
  }

  // Show assessment if user is authenticated but hasn't completed onboarding
  if (gameState.isAuthenticated && showOnboardingAssessment && gameState.user?.id) {
    return (
      <OnboardingErrorBoundary>
        <AdvancedOnboardingAssessment 
          onComplete={async (data) => {
            console.log('🎯 MainDuolingo: onComplete received data:', data);
            
            // Use Android-safe navigation to prevent UI freeze
            androidRecoveryManager.safeNavigate(
              () => {
                setShowOnboardingAssessment(false);
                toast({
                  title: "Assessment Complete! 🎉",
                  description: `Starting with Module ${data.recommendedModule} based on your performance.`,
                  duration: 3000,
                });
              },
              () => {
                // Fallback navigation
                console.log('🔄 Using fallback navigation for onboarding completion');
                setShowOnboardingAssessment(false);
              }
            );
            
            // Move heavy operations to background using Android-safe wrapper
            if (updateUserOnboardingData) {
              androidRecoveryManager.safeAsyncOperation(
                () => updateUserOnboardingData(data),
                'onboarding-data-update',
                {
                  maxRetries: 3,
                  retryDelay: 1000,
                  fallbackAction: () => {
                    console.warn('⚠️ Failed to save onboarding data, will retry later');
                    // Store data locally as fallback
                    localStorage.setItem('pending-onboarding-data', JSON.stringify(data));
                  }
                }
              ).catch(error => {
                console.error('❌ MainDuolingo: Error saving assessment data:', error);
              });
            }
          }}
          onBack={() => {
            androidRecoveryManager.safeNavigate(
              () => setShowOnboardingAssessment(false),
              () => setShowOnboardingAssessment(false)
            );
          }}
          userId={gameState.user.id}
        />
      </OnboardingErrorBoundary>
    );
  }

  // Show login form after onboarding or if returning user hasn't authenticated OR if explicitly requested
  if ((!gameState.isAuthenticated && !gameState.isGuestUser && (showLoginForm || !showOnboarding)) || 
      (gameState.isGuestUser && showLoginForm)) {
    console.log('🔐 MainDuolingoLayout - Showing login form');
    console.log('🔐 Auth status:', gameState.isAuthenticated);
    console.log('🔐 Guest status:', gameState.isGuestUser);
    console.log('🔐 Show login form:', showLoginForm);
    
    return <LoginForm 
      onLogin={async (username, email) => {
        console.log('🔐 Login form - onLogin called');
        await login(username, email);
        
        // Apply stored onboarding data after successful login
        const storedOnboardingData = localStorage.getItem('ecg-onboarding-data');
        if (storedOnboardingData && updateUserOnboardingData) {
          try {
            const onboardingData = JSON.parse(storedOnboardingData);
            await updateUserOnboardingData(onboardingData);
            localStorage.removeItem('ecg-onboarding-data'); // Clean up
          } catch (error) {
            console.error('Error applying stored onboarding data:', error);
          }
        }
        setShowLoginForm(false); // Hide login form after successful login
      }} 
      onSkipLogin={() => {
        console.log('🔐 Login form - onSkipLogin called');
        setShowLoginForm(false);
        skipLogin();
      }}
    />;
  }

  // Handle notification clicks with navigation
  const handleNotificationClick = (notification: any) => {
    if (notification.actionUrl) {
      switch (notification.actionUrl) {
        case '/learn':
          setActiveTab('learn');
          break;
        case '/progress':
          setActiveTab('progress');
          break;
        case '/profile':
          setShowProfileModal(true);
          break;
        case '/achievements':
          // Navigate to achievements section in profile or progress
          setActiveTab('progress');
          break;
        case '/store':
          setActiveTab('store');
          break;
        case '/daily-tasks':
          setActiveTab('daily-tasks');
          break;
        default:
          // Handle external URLs
          if (notification.actionUrl.startsWith('http')) {
            window.open(notification.actionUrl, '_blank');
          }
          break;
      }
    }
  };

  // Main content based on active tab
  const renderMainContent = () => {
    switch (activeTab) {
      case 'learn':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
            <ECGMasterHub 
              onLessonComplete={async (moduleId: string, lessonId: string, score: number, timeSpent: number, perfect?: boolean) => {
                console.log('📚 ECG Master lesson completed:', { moduleId, lessonId, score, timeSpent, perfect });
                
                // Save progress to Firebase using useGameState
                if (completeLearningLesson) {
                  try {
                    await completeLearningLesson(moduleId, lessonId, score, timeSpent, perfect || false);
                    console.log('✅ Lesson progress saved successfully');
                  } catch (error) {
                    console.error('❌ Failed to save lesson progress:', error);
                  }
                } else {
                  console.warn('⚠️ completeLearningLesson function not available');
                }
                
                // Duolingo-style lesson completion feedback with enhanced animations
                if (perfect || score >= 95) {
                  toast({
                    title: "Perfect! 🌟",
                    description: `Flawless performance! You scored ${score}% in ${Math.round(timeSpent / 60)} minutes.`,
                    duration: 4000,
                  });
                } else if (score >= 85) {
                  toast({
                    title: "Excellent Work! 🎉",
                    description: `Great job! You scored ${score}% - you're really getting the hang of this!`,
                    duration: 3000,
                  });
                } else if (score >= 70) {
                  toast({
                    title: "Good Progress! 👍",
                    description: `Nice work! You scored ${score}% - keep practicing to improve further!`,
                    duration: 3000,
                  });
                } else {
                  toast({
                    title: "Keep Learning! 📚",
                    description: `You scored ${score}% - review the material and try again. You've got this!`,
                    variant: "destructive",
                    duration: 3000,
                  });
                }
              }}
              onHeartLost={() => {
                if (loseHeart) {
                  loseHeart();
                }
                toast({
                  title: "Oops! 💔",
                  description: "Take your time and think it through!",
                  variant: "destructive",
                  duration: 2000,
                });
              }}
              onBack={() => setActiveTab('learn')}
              onLessonViewChange={(isInLesson) => setIsInLessonView(isInLesson)}
            />
          </div>
        );

      case 'daily-tasks':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-1">Daily ECG Challenge 🎯</h1>
                  <p className="text-blue-100">Complete today's tasks to maintain your streak!</p>
                </div>
              </div>
              {stats.currentStreak > 0 && (
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                  <Flame className="w-4 h-4 text-orange-300 animate-pulse" />
                  <span className="text-sm font-medium">Current streak: {stats.currentStreak} days</span>
                </div>
              )}
            </div>
            
            <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              <DashboardContent
                gameState={gameState}
                onCompleteTask={handleCompleteTask}
                onRefreshTasks={refreshDailyTasks}
              />
            </div>
          </div>
        );

      case 'progress':
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <ProgressComponent />
          </div>
        );

      case 'store':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-1">PulsePoint Store 🛒</h1>
                  <p className="text-emerald-100">Redeem your XP and gems for amazing rewards!</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-medium">{stats.xp} XP</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                  <Diamond className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium">{stats.gems} Gems</span>
                </div>
              </div>
            </div>
            
            <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              <PulsepointStore />
            </div>
          </div>
        );

      case 'downloads':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-1">My Downloads 📥</h1>
                  <p className="text-indigo-100">Access your digital ECG learning materials anytime!</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                  <Activity className="w-4 h-4 text-green-300" />
                  <span className="text-sm font-medium">Offline Ready</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                  <BookOpen className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-medium">Study Library</span>
                </div>
              </div>
            </div>
            
            <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              <DownloadsManager onBack={() => setActiveTab('store')} />
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
            <EventsMain 
              onShowLogin={() => setShowLoginForm(true)}
              onBack={() => setActiveTab('learn')}
            />
          </div>
        );

      case 'ecg-simulator':
        return (
          <div className="animate-in fade-in slide-in-from-bottom duration-500">
            <ECGSimulator onBack={() => setActiveTab('learn')} />
          </div>
        );

      default:
        return <div>Tab content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Header - Hidden during lesson view, events view, and ECG simulator */}
      {!isInLessonView && !isInEventsView && activeTab !== 'ecg-simulator' && (
        <header className="bg-white/95 backdrop-blur-md shadow-sm border-b sticky top-0 z-40">
          <div className="px-3 py-2 md:px-4 md:py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 group">
                  <div className="p-1 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500">
                    <Stethoscope className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <h1 className="text-lg md:text-xl font-bold text-gray-900">ECG Master</h1>
                </div>
                {stats.currentStreak > 0 && (
                  <div className="flex items-center gap-1 bg-gradient-to-r from-orange-100 to-amber-100 px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-orange-200">
                    <Flame className="w-3 h-3 md:w-4 md:h-4 text-orange-500" />
                    <span className="text-xs md:text-sm font-bold text-orange-700">{stats.currentStreak}</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-1.5 md:gap-3">
                {/* Progress Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveTab('progress')}
                  className="relative group hover:bg-blue-50 p-1.5 md:p-2"
                >
                  <div className="flex items-center gap-1">
                    <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    <CompactProfileBadge userRank={(stats.rank as any) || 'ECGKid Intern'} className="scale-75 hidden sm:block" />
                  </div>
                </Button>
                
                <UnifiedNotificationComponent showBell={true} maxVisible={5} className="relative" />

                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowMobileMenu(true)}
                  className="md:hidden p-1.5"
                >
                  <Menu className="w-5 h-5 text-gray-700" />
                </Button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className={`${
        isInLessonView || isInEventsView || activeTab === 'ecg-simulator'
          ? '' 
          : 'px-3 py-2 md:px-4 md:py-4 pb-20 md:pb-4'
      }`}>
        <div className="w-full">
          {renderMainContent()}
        </div>
      </main>

      {/* Bottom Navigation - Hidden during lesson view, events view, and ECG simulator */}
      {!isInLessonView && !isInEventsView && activeTab !== 'ecg-simulator' && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/80 z-30 shadow-lg">
          <div className="px-2">
            <div className="flex items-center justify-around py-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                const isDailyTasks = item.id === 'daily-tasks';
                const completedTasksCount = gameState.completedTasks || 0;
                const totalTasksCount = gameState.dailyTasks?.length || 5;
                
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setActiveTab(item.id as ActiveTab);
                    }}
                    className={cn(
                      "flex-1 flex flex-col items-center gap-0.5 py-2 px-1 rounded-xl relative",
                      isActive
                        ? "text-green-600 bg-gradient-to-br from-green-50 to-emerald-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80"
                    )}
                  >
                    <div className="relative">
                      <div className={cn(
                        "p-1 rounded-lg",
                        isActive 
                          ? "bg-gradient-to-br from-green-100 to-emerald-100" 
                          : ""
                      )}>
                        <Icon className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      {isDailyTasks && completedTasksCount < totalTasksCount && (
                        <Badge className="absolute -top-1 -right-1 px-1 py-0 text-xs bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 min-h-0 h-4">
                          {completedTasksCount}/{totalTasksCount}
                        </Badge>
                      )}
                      {isDailyTasks && completedTasksCount === totalTasksCount && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <CheckSquare className="w-2.5 h-2.5 text-white" />
                        </div>
                      )}
                    </div>
                    <span className={cn(
                      "text-xs font-medium leading-tight",
                      isActive ? "font-bold" : ""
                    )}>{item.label}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-t-full" />
                    )}
                  </Button>
                );
              })}
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            onClick={() => setShowMobileMenu(false)} 
          />
          <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-2xl flex flex-col">
            {/* Header */}
            <div className="p-3 border-b border-gray-200 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold">Menu</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowMobileMenu(false)} 
                  className="text-white hover:bg-white/20 p-1"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* User Profile Section */}
              <div className="mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-0.5">
                      <h3 className="font-bold text-base">{stats.name}</h3>
                      <CompactProfileBadge userRank={(stats.rank as any) || 'ECGKid Intern'} className="scale-75" />
                    </div>
                    <p className="text-blue-100 text-sm">Level {stats.level} • {stats.xp} XP</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-blue-100 mb-1">
                  <span>Progress to Level {stats.level + 1}</span>
                  <span>{Math.round((stats.xp % stats.xpToNextLevel) / stats.xpToNextLevel * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-1.5 border border-white/30">
                  <div 
                    className="bg-gradient-to-r from-white to-blue-100 h-1.5 rounded-full"
                    style={{ width: `${(stats.xp % stats.xpToNextLevel) / stats.xpToNextLevel * 100}%` }}
                  />
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { icon: Heart, value: stats.hearts, color: 'red', label: 'Hearts' },
                  { icon: Diamond, value: stats.gems, color: 'blue', label: 'Gems' },
                  { icon: Flame, value: stats.currentStreak, color: 'orange', label: 'Streak' },
                  { icon: Star, value: stats.level, color: 'yellow', label: 'Level' }
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div 
                      key={stat.label}
                      className="flex items-center justify-center bg-white/15 backdrop-blur-sm p-1.5 rounded-lg border border-white/20"
                    >
                      <div className="text-center">
                        <Icon className={`w-3 h-3 mx-auto mb-0.5 text-${stat.color}-300`} />
                        <div className="text-xs font-bold">{stat.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scrollable Menu Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-3 space-y-4">
                
                {/* Learning & Progress Section */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-1 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    🎯 Learning & Progress
                  </h4>
                  <div className="space-y-0.5">
                    {[
                      { 
                        icon: BookMarked, 
                        text: 'All Modules', 
                        badge: '8', 
                        badgeColor: 'bg-blue-100 text-blue-700',
                        iconColor: 'text-blue-600',
                        action: () => { setActiveTab('learn'); setShowMobileMenu(false); }
                      },
                      { 
                        icon: BookOpen, 
                        text: 'Current Module', 
                        badge: 'Active', 
                        badgeColor: 'bg-green-100 text-green-700',
                        iconColor: 'text-green-600',
                        action: () => { setActiveTab('learn'); setShowMobileMenu(false); }
                      },
                      { 
                        icon: CheckSquare, 
                        text: 'Completed Modules', 
                        badge: '1', 
                        badgeColor: 'bg-purple-100 text-purple-700',
                        iconColor: 'text-purple-600',
                        action: () => { setActiveTab('learn'); setShowMobileMenu(false); }
                      },
                      { 
                        icon: Target, 
                        text: 'Daily Tasks', 
                        badge: `${gameState.completedTasks || 0}/${gameState.dailyTasks?.length || 5}`, 
                        badgeColor: 'bg-orange-100 text-orange-700',
                        iconColor: 'text-orange-600',
                        action: () => { setActiveTab('daily-tasks'); setShowMobileMenu(false); }
                      },
                      { 
                        icon: Trophy, 
                        text: 'Achievements', 
                        badge: 'New!', 
                        badgeColor: 'bg-yellow-100 text-yellow-700',
                        iconColor: 'text-yellow-600',
                        action: () => { setShowProfileModal(true); setShowMobileMenu(false); }
                      }
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <Button
                          key={item.text}
                          variant="ghost"
                          className="w-full justify-start gap-2 py-2 h-auto"
                          onClick={item.action}
                        >
                          <Icon className={`w-4 h-4 ${item.iconColor}`} />
                          <span className="flex-1 text-left text-sm">{item.text}</span>
                          <Badge className={`text-xs px-1.5 py-0 ${item.badgeColor} border-0`}>
                            {item.badge}
                          </Badge>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {/* Digital Content Section */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-1 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    📱 Digital Content
                  </h4>
                  <div className="space-y-0.5">
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 py-2 h-auto"
                      onClick={() => { setActiveTab('store'); setShowMobileMenu(false); }}
                    >
                      <ShoppingBag className="w-4 h-4 text-blue-600" />
                      <span className="flex-1 text-left text-sm">PulsePoints Store</span>
                      <Badge className="text-xs px-1.5 py-0 bg-blue-100 text-blue-700 border-0">
                        Shop
                      </Badge>
                    </Button>
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 py-2 h-auto"
                      onClick={() => { setActiveTab('downloads'); setShowMobileMenu(false); }}
                    >
                      <FileText className="w-4 h-4 text-green-600" />
                      <span className="flex-1 text-left text-sm">My Downloads</span>
                      <Badge className="text-xs px-1.5 py-0 bg-green-100 text-green-700 border-0">
                        Library
                      </Badge>
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 py-2 h-auto"
                      onClick={() => { setActiveTab('events'); setShowMobileMenu(false); }}
                    >
                      <Calendar className="w-4 h-4 text-purple-600" />
                      <span className="flex-1 text-left text-sm">Events & Challenges</span>
                      <Badge className="text-xs px-1.5 py-0 bg-purple-100 text-purple-700 border-0">
                        Live
                      </Badge>
                    </Button>
                  </div>
                </div>

                {/* Settings & Account Section */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-1">
                    ⚙️ Settings & Account
                  </h4>
                  <div className="space-y-0.5">
                    {isAdmin && (
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-2 py-2 h-auto bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700"
                        onClick={() => {
                          console.log('🛒 Order Management clicked! isAdmin:', isAdmin);
                          setShowOrderDashboard(true);
                          setShowMobileMenu(false);
                        }}
                      >
                        <Package2 className="w-4 h-4 text-green-600" />
                        <span className="flex-1 text-left text-sm">Order Management</span>
                        <span className="text-xs px-1.5 py-0 rounded-full bg-green-100 text-green-700">Admin</span>
                      </Button>
                    )}
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 py-2 h-auto"
                      onClick={() => {
                        setShowMobileMenu(false);
                        setShowNotificationCenter(true);
                      }}
                    >
                      <Bell className="w-4 h-4 text-blue-600" />
                      <span className="flex-1 text-left text-sm">Notifications</span>
                      {unreadNotifications > 0 && (
                        <span className="text-xs px-1.5 py-0 rounded-full bg-red-500 text-white">
                          {unreadNotifications}
                        </span>
                      )}
                    </Button>
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 py-2 h-auto"
                      onClick={() => {
                        setShowMobileMenu(false);
                        setShowNotificationSettings(true);
                      }}
                    >
                      <Settings className="w-4 h-4 text-gray-600" />
                      <span className="flex-1 text-left text-sm">Notification Settings</span>
                    </Button>
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 py-2 h-auto"
                      onClick={() => {
                        setShowMobileMenu(false);
                        window.location.href = '/privacy-policy.html';
                      }}
                    >
                      <Shield className="w-4 h-4 text-green-600" />
                      <span className="flex-1 text-left text-sm">Privacy Policy</span>
                    </Button>
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 py-2 h-auto"
                      onClick={() => {
                        setShowMobileMenu(false);
                        window.location.href = '/terms-of-service.html';
                      }}
                    >
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="flex-1 text-left text-sm">Terms of Service</span>
                    </Button>
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 py-2 h-auto"
                      onClick={() => {
                        setShowProfileModal(true);
                        setShowMobileMenu(false);
                      }}
                    >
                      <UserCircle className="w-4 h-4 text-purple-600" />
                      <span className="flex-1 text-left text-sm">Profile Settings</span>
                    </Button>
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 py-2 h-auto"
                      onClick={() => {
                        setShowMobileMenu(false);
                        window.location.href = '/help-support.html';
                      }}
                    >
                      <HelpCircle className="w-4 h-4 text-green-600" />
                      <span className="flex-1 text-left text-sm">Help & Support</span>
                    </Button>
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 py-2 h-auto text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={async () => {
                        if (confirm('Are you sure you want to logout?')) {
                          try {
                            await logout();
                            setShowMobileMenu(false);
                          } catch (error) {
                            console.error('Logout error:', error);
                            toast({
                              title: "Logout Failed",
                              description: "An error occurred during logout. Please try again.",
                              variant: "destructive",
                            });
                          }
                        }
                      }}
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="flex-1 text-left text-sm">Logout</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowProfileModal(false)} />
          <div className="absolute inset-3 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-3 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
                <h3 className="text-lg font-bold text-gray-900">Profile</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowProfileModal(false)}
                  className="hover:bg-gray-100 p-1"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex-1 overflow-auto p-3">
                {gameState.isGuestUser ? (
                  <LockedProfile 
                    onSignIn={() => {
                      setShowProfileModal(false);
                      window.location.reload();
                    }}
                  />
                ) : (
                  <Profile 
                    user={gameState.user!}
                    dailyTasks={gameState.dailyTasks}
                    completedTasks={gameState.completedTasks}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notification Center Modal */}
      {showNotificationCenter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowNotificationCenter(false)} />
          <div className="absolute inset-3 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-3 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">Notifications</h3>
                  {unreadNotifications > 0 && (
                    <Badge variant="destructive" className="ml-2">
                      {unreadNotifications}
                    </Badge>
                  )}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowNotificationCenter(false)}
                  className="hover:bg-gray-100 p-1"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex-1 overflow-auto p-3">
                <UnifiedNotificationComponent 
                  showBell={false} 
                  maxVisible={20} 
                  className="w-full" 
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notification Settings Modal */}
      {showNotificationSettings && gameState.user && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowNotificationSettings(false)} />
          <div className="absolute inset-3 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-3 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-gray-600" />
                  <h3 className="text-lg font-bold text-gray-900">Notification Settings</h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowNotificationSettings(false)}
                  className="hover:bg-gray-100 p-1"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex-1 overflow-auto p-3">
                <NotificationSettings 
                  userId={gameState.user.id}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resources Modal */}
      <ResourcesModal 
        isOpen={showResourcesModal}
        onClose={() => setShowResourcesModal(false)}
      />

      {/* Heart Shop Modal */}
      <HeartShop
        isOpen={gameState.showHeartShop || false}
        onClose={hideHeartShop}
        onPurchaseSuccess={handleHeartPurchaseSuccess}
      />

      {/* Admin Order Dashboard Modal */}
      {showOrderDashboard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <AdminOrderDashboard 
              isAdmin={isAdmin}
              onClose={() => {
                console.log('❌ Closing AdminOrderDashboard');
                setShowOrderDashboard(false);
              }}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default MainDuolingoLayout;
