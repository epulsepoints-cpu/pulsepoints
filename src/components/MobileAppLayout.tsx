import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, BookOpen, User, Menu, X, Trophy, Gem, Star, Target, Settings, HelpCircle, Info, LogOut, Award, Activity, Lock, Brain,
  TrendingUp, BarChart3, MapPin, Calendar, Flame, BookMarked, CheckSquare, TestTube, Zap, Library, Gamepad2, 
  Bookmark, CreditCard, Bell, Moon, Sliders, Download, Clock, Play, Wrench, Newspaper, Camera, HeartPulse, ChevronRight,
  BellRing, BellOff, Sparkles, Shield, FileText, ShoppingCart, Package2
} from 'lucide-react';
import { useGameState } from '@/hooks/useGameState';
import LoginForm from './LoginForm';
import DashboardContent from './DashboardContent';
import AdvancedOnboardingAssessment from './AdvancedOnboardingAssessment';
import ResourcesPage from './ResourcesPage';
import Profile from './Profile';
import LockedProfile from './LockedProfile';
import ECGMasterHub from './ECGMasterHub';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { signOutUser } from '@/firebase';
import { toast } from '@/components/ui/use-toast';
import { unifiedNotificationService } from '@/services/unifiedNotificationService';
import { useUnifiedNotifications } from '@/hooks/useUnifiedNotifications';
import EcgRoadmapWidget from './EcgRoadmapWidget';
import PulsepointStore from './PulsepointStore';
import DownloadsManager from './DownloadsManager';
import AdminOrderDashboard from './AdminOrderDashboard';

const MobileAppLayout: React.FC = () => {
  const navigate = useNavigate();
  const { 
    gameState, 
    login, 
    logout, // Add logout from useGameState
    skipLogin, 
    completeTask, 
    refreshUserStatsImmediately,
    refreshDailyTasks,
    completeLearningLesson,
    loseHeart,
    updateUserOnboardingData // Add onboarding data function
  } = useGameState();
  const [onboardingDone, setOnboardingDone] = useState(() => {
    // Check both localStorage and user data for onboarding completion
    const localStorageCompleted = localStorage.getItem('ecg-onboarding-completed') === 'true';
    return localStorageCompleted;
  });
  const [showOnboardingAssessment, setShowOnboardingAssessment] = useState(false);
  const [showSaveProgressPrompt, setShowSaveProgressPrompt] = useState(false); // New state for progress prompt
  const [activeTab, setActiveTab] = useState<'dashboard' | 'learn' | 'resources' | 'profile' | 'store'>('dashboard');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDownloads, setShowDownloads] = useState(false);
  const [showOrderDashboard, setShowOrderDashboard] = useState(false);
  const [showDebugPanel, setShowDebugPanel] = useState(false);
  const { unreadCount: unreadNotifications } = useUnifiedNotifications();
  const [isAdmin, setIsAdmin] = useState(false);
  // Removed learning state - now handled by ECGMasterHub

  const handleCompleteTask = (taskId: string, isCorrect: boolean) => {
    completeTask(taskId, isCorrect);
  };

  // Removed learning navigation handlers - now handled by ECGMasterHub

  // Mobile navigation items (only 3 tabs now - Resources moved to menu)
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: Home },
    { id: 'learn', label: 'ECG Master', icon: BookOpen },
    { id: 'store', label: 'Store', icon: CreditCard },
  ];

  // Function to close mobile menu and reset submenu state
  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  // Initialize FCM and check admin status
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
      unifiedNotificationService.initialize();
      
      // Check if user needs onboarding assessment
      // Only show assessment if both Firebase and localStorage indicate incomplete onboarding
      const localStorageCompleted = localStorage.getItem('ecg-onboarding-completed') === 'true';
      const userOnboardingCompleted = gameState.user.onboardingCompleted;
      
      console.log('🔍 Onboarding check:', {
        localStorageCompleted,
        userOnboardingCompleted,
        userId: gameState.user.id
      });
      
      // Show assessment only if BOTH sources say onboarding is not completed
      if (!localStorageCompleted && !userOnboardingCompleted) {
        console.log('⚠️ Showing onboarding assessment - both sources indicate incomplete');
        setShowOnboardingAssessment(true);
      } else {
        console.log('✅ Onboarding already completed - skipping assessment');
        setShowOnboardingAssessment(false);
        
        // Sync localStorage with Firebase if there's a mismatch
        if (userOnboardingCompleted && !localStorageCompleted) {
          console.log('🔄 Syncing localStorage with Firebase completion status');
          localStorage.setItem('ecg-onboarding-completed', 'true');
          setOnboardingDone(true);
        }
      }
      
      // Check if user is admin
      const checkAdminStatus = async () => {
        try {
          console.log('🔍 Checking admin status for user:', gameState.user!.id);
          const { db } = await import('@/firebase');
          const { doc, getDoc } = await import('firebase/firestore');
          const userRef = doc(db, 'users', gameState.user!.id);
          const userDoc = await getDoc(userRef);
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log('📄 User document data:', userData);
            console.log('🔐 isAdmin field value:', userData.isAdmin, 'type:', typeof userData.isAdmin);
            
            if (userData.isAdmin === true) {
              setIsAdmin(true);
              console.log('✅ Admin privileges detected for user:', gameState.user!.id);
            } else {
              console.log('❌ Admin privileges NOT detected. isAdmin =', userData.isAdmin);
              console.log('💡 To fix: Set isAdmin: true in Firebase Firestore for user:', gameState.user!.id);
            }
          } else {
            console.log('❌ User document does not exist in Firestore for:', gameState.user!.id);
          }
        } catch (error) {
          console.error('Error checking admin status:', error);
        }
      };
      
      checkAdminStatus();
    }
  }, [gameState.isAuthenticated, gameState.user?.id, gameState.user?.onboardingCompleted]);

  const { refreshNotifications } = useUnifiedNotifications();
  
  const loadNotificationCount = async () => {
    if (gameState.user?.id) {
      try {
        await refreshNotifications();
      } catch (error) {
        console.error('Error loading notification count:', error);
      }
    }
  };

  // Enhanced Mobile menu items with sections
  const menuSections = [
    {
      title: 'LEARNING & PROGRESS',
      items: [
        { 
          label: '🎯 Duolingo-Style Learning', 
          icon: Sparkles, 
          action: () => {
            navigate('/duolingo');
            closeMobileMenu();
          },
          badge: 'NEW!',
          highlight: true
        },
        { 
          label: '📈 Learning Progress', 
          icon: TrendingUp, 
          action: () => {
            setActiveTab('profile');
            closeMobileMenu();
          },
          badge: `${Math.round((gameState.completedTasks || 0) / Math.max(gameState.dailyTasks.length, 1) * 100)}%`
        },
        { 
          label: '📊 Study Statistics', 
          icon: BarChart3, 
          action: () => {
            setActiveTab('profile');
            closeMobileMenu();
          },
          badge: `${gameState.user?.totalTasksCompleted || 0}`
        },
        { 
          label: '🗺️ ECG Roadmap', 
          icon: MapPin, 
          action: () => {
            setActiveTab('profile');
            closeMobileMenu();
          }
        },
      ]
    },
    {
      title: 'MODULES & CONTENT',
      items: [
        { 
          label: '📚 All Modules', 
          icon: BookMarked, 
          action: () => {
            setActiveTab('learn');
            closeMobileMenu();
          },
          badge: '5'
        },
        { 
          label: '📖 Current Module', 
          icon: BookOpen, 
          action: () => {
            setActiveTab('learn');
            closeMobileMenu();
          },
          badge: 'Active'
        },
        { 
          label: '✅ Completed Modules', 
          icon: CheckSquare, 
          action: () => {
            setActiveTab('learn');
            closeMobileMenu();
          },
          badge: '1'
        },
      ]
    },
    {
      title: 'RESOURCES & TOOLS',
      items: [
        { 
          label: '📋 ECG Library', 
          icon: Library, 
          action: () => {
            setActiveTab('resources');
            closeMobileMenu();
            setTimeout(() => {
              const libraryTab = document.querySelector('[data-tab="library"]') as HTMLElement;
              if (libraryTab) libraryTab.click();
            }, 100);
          },
          badge: 'New'
        },
        { 
          label: '📹 Videos', 
          icon: Play, 
          action: () => {
            setActiveTab('resources');
            closeMobileMenu();
            setTimeout(() => {
              const videosTab = document.querySelector('[data-tab="videos"]') as HTMLElement;
              if (videosTab) videosTab.click();
            }, 100);
          }
        },
        { 
          label: '🔧 Tools', 
          icon: Wrench, 
          action: () => {
            setActiveTab('resources');
            closeMobileMenu();
            setTimeout(() => {
              const toolsTab = document.querySelector('[data-tab="tools"]') as HTMLElement;
              if (toolsTab) toolsTab.click();
            }, 100);
          }
        },
        { 
          label: '📰 News', 
          icon: Newspaper, 
          action: () => {
            setActiveTab('resources');
            closeMobileMenu();
            setTimeout(() => {
              const newsTab = document.querySelector('[data-tab="news"]') as HTMLElement;
              if (newsTab) newsTab.click();
            }, 100);
          }
        },
        { 
          label: '📸 X-Ray Vault', 
          icon: Camera, 
          action: () => {
            setActiveTab('resources');
            closeMobileMenu();
            setTimeout(() => {
              const xrayTab = document.querySelector('[data-tab="xray"]') as HTMLElement;
              if (xrayTab) xrayTab.click();
            }, 100);
          }
        },
        { 
          label: '🎓 Courses', 
          icon: BookOpen, 
          action: () => {
            setActiveTab('resources');
            closeMobileMenu();
            setTimeout(() => {
              const coursesTab = document.querySelector('[data-tab="courses"]') as HTMLElement;
              if (coursesTab) coursesTab.click();
            }, 100);
          }
        }
      ]
    },
    {
      title: 'DIGITAL CONTENT',
      items: [
        { 
          label: '🛒 PulsePoints Store', 
          icon: ShoppingCart, 
          action: () => {
            setActiveTab('store');
            setShowDownloads(false);
            closeMobileMenu();
          },
          badge: 'Shop'
        },
        { 
          label: '📥 My Downloads', 
          icon: Download, 
          action: () => {
            setActiveTab('store');
            setShowDownloads(true);
            closeMobileMenu();
          },
          badge: 'Library'
        },
      ]
    },
    {
      title: 'SETTINGS & ACCOUNT',
      items: [
        ...(isAdmin ? [
          { 
            label: '📦 Order Management', 
            icon: Package2,
            action: () => {
              console.log('🛒 Order Management clicked! Current isAdmin state:', isAdmin);
              setShowOrderDashboard(true);
              setTimeout(() => {
                console.log('🟢 showOrderDashboard state:', true);
              }, 100);
              closeMobileMenu();
            },
            badge: 'Admin'
          },
          { 
            label: '👑 Admin Dashboard', 
            icon: Settings,
            action: () => {
              // Direct navigation with timestamp to force a fresh load
              window.location.href = '/admin?t=' + new Date().getTime();
            },
            badge: 'Admin'
          }
        ] : []),
        { 
          label: '🔔 Notifications', 
          icon: Bell, 
          action: () => {
            // Notifications are now shown in top bar UnifiedNotificationComponent
            closeMobileMenu();
          },
          badge: unreadNotifications > 0 ? unreadNotifications.toString() : undefined
        },
        { 
          label: '⚙️ Study Settings', 
          icon: Sliders, 
          action: () => {
            // Settings can be accessed through profile tab
            setActiveTab('profile');
            closeMobileMenu();
          }
        },
        { 
          label: '🏆 Achievements', 
          icon: Award, 
          action: () => {
            setActiveTab('profile');
            closeMobileMenu();
          }
        },
        { 
          label: '📜 Activity History', 
          icon: Activity, 
          action: () => {
            setActiveTab('profile');
            closeMobileMenu();
          }
        },
        { 
          label: '🛡️ Privacy Policy', 
          icon: Shield, 
          action: () => window.open('/privacy-policy.html', '_blank')
        },
        { 
          label: '📄 Terms of Service', 
          icon: FileText, 
          action: () => window.open('/terms-of-service.html', '_blank')
        },
        { 
          label: 'ℹ️ About ECGkid', 
          icon: Info, 
          action: () => window.open('/about.html', '_blank')
        },
        { 
          label: '⚕️ Medical Disclaimer', 
          icon: Shield, 
          action: () => window.open('/medical-disclaimer.html', '_blank')
        },
        { 
          label: '🚪 Logout', 
          icon: LogOut, 
          action: async () => {
            if (confirm('Are you sure you want to logout?')) {
              try {
                await logout(); // Use the new logout function
                toast({
                  title: "Signed Out",
                  description: "You have been signed out successfully.",
                });
              } catch (error) {
                console.error('Sign-out error:', error);
                toast({
                  title: "Sign-out Failed",
                  description: "An unexpected error occurred. Please try again.",
                  variant: "destructive",
                });
              }
            }
          }
        },
      ]
    }
  ];

  // If not authenticated, show onboarding/login
  const handleOnboardingFinish = async (onboardingData: any) => {
    setOnboardingDone(true);
    localStorage.setItem('ecg-onboarding-completed', 'true');
    localStorage.setItem('ecg-onboarding-data', JSON.stringify(onboardingData));
    
    // After onboarding completion for guest users, show login prompt
    console.log('🎯 Onboarding completed for guest user, showing login option');
    setShowSaveProgressPrompt(true); // Enable save progress prompt
  };

  const handleAssessmentComplete = async (data: any) => {
    try {
      if (updateUserOnboardingData) {
        await updateUserOnboardingData(data);
        setShowOnboardingAssessment(false);
        
        // Update both localStorage and state to prevent re-showing
        localStorage.setItem('ecg-onboarding-completed', 'true');
        setOnboardingDone(true);
        
        // Navigate to recommended module first
        setActiveTab('learn');
        
        // Store the recommended module for ECGMasterHub to use
        localStorage.setItem('ecg-recommended-module', data.recommendedModule.toString());
        
        console.log('✅ Assessment completed and onboarding marked as done');
        
        toast({
          title: "Assessment Complete! 🎉",
          description: `Starting with Module ${data.recommendedModule} based on your performance.`,
        });
      }
    } catch (error) {
      console.error('Error saving assessment data:', error);
      toast({
        title: "Error",
        description: "Failed to save assessment results. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!gameState.isAuthenticated) {
    return (
      <div className="min-h-screen w-full">
        {!onboardingDone ? (
          <AdvancedOnboardingAssessment 
            userId="guest-user"
            onComplete={handleOnboardingFinish} 
          />
        ) : (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
            <LoginForm 
              onLogin={async (username, email) => {
                await login(username, email);
                
                // Apply stored onboarding data after successful login
                const storedOnboardingData = localStorage.getItem('ecg-onboarding-data');
                if (storedOnboardingData && updateUserOnboardingData) {
                  try {
                    const onboardingData = JSON.parse(storedOnboardingData);
                    await updateUserOnboardingData(onboardingData);
                    localStorage.removeItem('ecg-onboarding-data'); // Clean up
                    
                    // Reset the save progress prompt state
                    setShowSaveProgressPrompt(false);
                    
                    // Show success message about saved progress
                    setTimeout(() => {
                      // This will show after login is complete
                      console.log('✅ Onboarding data successfully saved to user account');
                    }, 1000);
                  } catch (error) {
                    console.error('Error applying stored onboarding data:', error);
                  }
                }
              }} 
              onSkipLogin={() => {
                skipLogin();
                setShowSaveProgressPrompt(false); // Reset prompt state when skipping
              }}
              showSaveProgressPrompt={showSaveProgressPrompt}
            />
          </div>
        )}
      </div>
    );
  }

  // Show assessment if user is authenticated but hasn't completed onboarding
  if (gameState.isAuthenticated && showOnboardingAssessment && gameState.user?.id) {
    return (
      <AdvancedOnboardingAssessment 
        onComplete={handleAssessmentComplete}
        onBack={() => setShowOnboardingAssessment(false)}
        userId={gameState.user.id}
      />
    );
  }

  // Main authenticated layout
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header with title and menu button */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ECGkid PulsePoints
            </h1>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Admin Quick Access Button */}
            {isAdmin && (
              <span className="flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Direct navigation with timestamp to force a fresh load
                    window.location.href = '/admin?t=' + new Date().getTime();
                  }}
                  className="bg-yellow-50 border-yellow-200 text-yellow-700 hover:bg-yellow-100 hover:text-yellow-800 transition-colors"
                  title="Access Admin Dashboard"
                >
                  <span className="mr-1">👑</span>
                  Admin
                </Button>
              </span>
            )}
            
            {/* Notification Bell */}
            <span className="flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  // Notification functionality is now in UnifiedNotificationComponent
                  // This button can be removed or repurposed
                }}
                className="relative hover:bg-blue-50 transition-colors"
              >
                <Bell className={cn(
                  "w-5 h-5 transition-colors",
                  unreadNotifications > 0 ? "text-blue-600" : "text-gray-600"
                )} />
                {unreadNotifications > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-2 -right-2 h-5 min-w-5 px-1.5 rounded-full flex items-center justify-center text-[10px] font-medium animate-fade-in"
                  >
                    {unreadNotifications > 99 ? '99+' : unreadNotifications}
                  </Badge>
                )}
              </Button>
            </span>
            {/* Profile Icon */}
            <span className="flex-shrink-0">
              <Button
                variant={activeTab === 'profile' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('profile')}
                className={activeTab === 'profile' ? 'bg-blue-50 text-blue-600' : ''}
              >
                <User className="w-5 h-5" />
              </Button>
            </span>
            {/* ECG Roadmap Widget (mobile) */}
            <span className="flex-shrink-0" id="ecg-roadmap-widget-icon">
              <EcgRoadmapWidget
                currentLesson={1}
                completedModules={[1]}
                modules={[
                  { id: 'module-1', order: 1, title: 'ECG Fundamentals', color: '#43e97b' },
                  { id: 'module-2', order: 2, title: 'Normal Sinus Rhythm', color: '#38b6ff' },
                  { id: 'module-3', order: 3, title: 'Intervals & Measurements', color: '#f7b42c' },
                  { id: 'module-4', order: 4, title: 'Atrial Arrhythmias', color: '#f357a8' },
                  { id: 'module-5', order: 5, title: 'Ventricular Arrhythmias', color: '#7b2ff2' },
                  { id: 'module-6', order: 6, title: 'Advanced Arrhythmias', color: '#ff6b6b' },
                  { id: 'module-7', order: 7, title: 'Clinical Conditions & MI', color: '#e74c3c' },
                ]}
                onModuleNavigate={(moduleId: string) => {
                  setActiveTab('learn');
                  // ECGMasterHub will handle module navigation internally
                }}
              />
            </span>
            {/* Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowMobileMenu(true)}
              className="md:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={closeMobileMenu}
        >
          <div 
            className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Menu</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMobileMenu}
                  className="hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col h-full">
              {/* Scrollable Menu Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-2">
                  {/* User Info */}
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg mb-4 border border-blue-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{gameState.user?.username || 'User'}</div>
                        <div className="text-sm text-gray-600">{gameState.user?.rank || 'Beginner'}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">XP</div>
                        <div className="font-bold text-blue-600">{gameState.user?.xp || 0}</div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-green-50 p-2 rounded-lg text-center border border-green-100">
                      <Trophy className="w-4 h-4 mx-auto mb-1 text-green-600" />
                      <div className="text-xs text-green-700 font-medium">{gameState.user?.gems || 0} Gems</div>
                    </div>
                    <div className="bg-orange-50 p-2 rounded-lg text-center border border-orange-100">
                      <Target className="w-4 h-4 mx-auto mb-1 text-orange-600" />
                      <div className="text-xs text-orange-700 font-medium">{gameState.user?.streakCount || 0} Streak</div>
                    </div>
                    <div className="bg-purple-50 p-2 rounded-lg text-center border border-purple-100">
                      <Star className="w-4 h-4 mx-auto mb-1 text-purple-600" />
                      <div className="text-xs text-purple-700 font-medium">{gameState.completedTasks || 0} Tasks</div>
                    </div>
                  </div>

                  {/* Menu Sections */}
                  <div className="space-y-1 pb-4">
                    {menuSections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="mb-6">
                        {/* Section Header */}
                        <div className="px-2 py-2 mb-2">
                          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {section.title}
                          </h3>
                        </div>
                        
                        {/* Section Items */}
                        <div className="space-y-1">
                          {section.items.map((item, itemIndex) => {
                            const Icon = item.icon;
                            const isLogout = item.label === 'Logout';
                            return (
                              <div key={itemIndex}>
                                <Button
                                  variant="ghost"
                                  className={`w-full justify-start text-left h-12 ${
                                    isLogout 
                                      ? 'text-red-600 hover:text-red-700 hover:bg-red-50' 
                                      : (item as any).highlight
                                      ? 'bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border border-indigo-200 text-indigo-700 font-medium'
                                      : 'hover:bg-gray-50'
                                  }`}
                                  onClick={() => {
                                  item.action();
                                  if (!isLogout) closeMobileMenu();
                                }}
                                >
                                  <Icon className={`w-4 h-4 mr-3 ${(item as any).highlight ? 'text-indigo-600' : ''}`} />
                                  <span className="flex-1">{item.label}</span>
                                  {item.badge && (
                                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                      item.badge === 'NEW!' 
                                        ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white animate-pulse' 
                                      : item.badge === 'New' 
                                        ? 'bg-green-100 text-green-700' 
                                        : item.badge === 'Active'
                                        ? 'bg-blue-100 text-blue-700'
                                        : item.badge === 'Off'
                                        ? 'bg-gray-100 text-gray-600'
                                        : item.badge.includes('🔥')
                                        ? 'bg-orange-100 text-orange-700'
                                        : item.badge.includes('%')
                                        ? 'bg-purple-100 text-purple-700'
                                        : 'bg-gray-100 text-gray-600'
                                    }`}>
                                      {item.badge}
                                    </span>
                                  )}
                                </Button>
                              </div>
                            );
                          })}
                        </div>
                        
                        {/* Section Divider (except for last section) */}
                        {sectionIndex < menuSections.length - 1 && (
                          <div className="mt-4 pt-4 border-t border-gray-100"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="text-center text-xs text-gray-500">
                  ECGkid PulsePoints v1.0
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-4 sm:space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <CardContent className="p-3 sm:p-4 text-center">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2" />
                    <div className="text-lg sm:text-2xl font-bold">{gameState.user?.xp || 0}</div>
                    <div className="text-xs sm:text-sm opacity-90">XP</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <CardContent className="p-3 sm:p-4 text-center">
                    <Gem className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2" />
                    <div className="text-lg sm:text-2xl font-bold">{gameState.user?.gems || 0}</div>
                    <div className="text-xs sm:text-sm opacity-90">Gems</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <CardContent className="p-3 sm:p-4 text-center">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2" />
                    <div className="text-sm sm:text-base font-bold">{gameState.user?.rank || 'Beginner'}</div>
                    <div className="text-xs sm:text-sm opacity-90">Rank</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardContent className="p-3 sm:p-4 text-center">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2" />
                    <div className="text-lg sm:text-2xl font-bold">{gameState.user?.streakCount || 0}</div>
                    <div className="text-xs sm:text-sm opacity-90">Streak</div>
                  </CardContent>
                </Card>
              </div>

              {/* Dashboard Content */}
              <DashboardContent
                gameState={gameState}
                onCompleteTask={handleCompleteTask}
                onRefreshTasks={refreshDailyTasks}
              />
            </div>
          )}

          {activeTab === 'learn' && (
            <ECGMasterHub 
              onLessonComplete={(moduleId: string, lessonId: string, score: number, timeSpent: number, perfect?: boolean) => {
                // Handle lesson completion with integrated system
                console.log('Lesson completed:', { moduleId, lessonId, score, timeSpent, perfect });
                if (completeLearningLesson) {
                  completeLearningLesson(moduleId, lessonId, score, timeSpent, perfect);
                }
              }}
              onHeartLost={() => {
                console.log('Heart lost!');
                if (loseHeart) {
                  loseHeart();
                }
              }}
              onBack={() => setActiveTab('dashboard')}
            />
          )}

          {activeTab === 'resources' && <ResourcesPage />}

          {activeTab === 'profile' && gameState.user && (
            gameState.isGuestUser ? (
              <LockedProfile 
                onSignIn={() => {
                  // Refresh the page or redirect to reload the authenticated state
                  window.location.reload();
                }}
              />
            ) : (
              <Profile 
                user={gameState.user}
                dailyTasks={gameState.dailyTasks}
                completedTasks={gameState.completedTasks}
              />
            )
          )}

          {activeTab === 'store' && (
            <div className="py-4">
              {showDownloads ? (
                <DownloadsManager 
                  onBack={() => {
                    setShowDownloads(false);
                    setActiveTab('store');
                  }}
                />
              ) : (
                <PulsepointStore />
              )}
            </div>
          )}

          {/* Admin Order Dashboard Modal */}
          {showOrderDashboard && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
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
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30 safe-area-pb">
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-around py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <Button
                  key={item.id}
                  id={`tab-${item.id}`}
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveTab(item.id as typeof activeTab)}
                  className={cn(
                    "flex-1 flex flex-col items-center gap-1 py-2 sm:py-3 px-1 sm:px-2 rounded-lg transition-colors relative",
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <div className="relative">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-xs font-medium">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </nav>
      
      {/* Notifications are now handled by UnifiedNotificationComponent in header */}
    </div>
  );
};

export default MobileAppLayout;
