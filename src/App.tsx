import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import ErrorBoundary from "@/components/ErrorBoundary";
import { NetworkStatusIndicator } from "@/hooks/useNetworkStatus";
import { AuthProvider } from "@/hooks/useAuth";
import { unifiedNotificationService } from "@/services/unifiedNotificationService";
import verifyFirebaseSetup from "@/lib/firebase-checker";
import { autoInitializeEventsSystem } from "@/services/autoInitializeEvents";
import { toast } from "@/components/ui/use-toast";

// Simple loading component
const LoadingApp = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">ECGkid PulsePoints</h1>
      <p className="text-gray-600">Loading your medical education platform...</p>
    </div>
  </div>
);

// Lazy load the main components to avoid initial load issues
const MainDuolingoLayout = React.lazy(() => import("@/components/MainDuolingoLayout"));
const MobileAppLayout = React.lazy(() => import("@/components/MobileAppLayout"));
const BonusQuizPage = React.lazy(() => import("@/components/BonusQuizPage"));
const NotificationTestPage = React.lazy(() => import("@/components/NotificationTestPage"));
const AdminDashboardPage = React.lazy(() => import("@/pages/AdminDashboardPage"));
const AdminOrderTest = React.lazy(() => import("@/components/AdminOrderTest"));
const AdminDebugTest = React.lazy(() => import("@/components/AdminDebugTest"));

// Back Button Handler Component
const BackButtonHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let backButtonListener: any;

    const setupBackButtonHandler = async () => {
      if (Capacitor.isNativePlatform()) {
        backButtonListener = await CapacitorApp.addListener('backButton', ({ canGoBack }) => {
          console.log('Hardware back button pressed, canGoBack:', canGoBack);
          
          // Get current URL path
          const currentPath = location.pathname;
          
          // Define navigation hierarchy
          if (currentPath === '/') {
            // On main screen - prevent default exit, show toast instead
            toast({
              title: "Press back again to exit",
              description: "Tap the back button again to close the app",
              duration: 2000
            });
            
            // Set a timeout to allow exit on second press
            setTimeout(() => {
              CapacitorApp.addListener('backButton', () => {
                CapacitorApp.exitApp();
              });
            }, 2000);
            
          } else if (currentPath === '/legacy') {
            // From legacy route, go to main
            navigate('/');
          } else if (currentPath === '/bonus-quiz') {
            // From bonus quiz, go to main
            navigate('/');
          } else if (canGoBack) {
            // For other routes, use browser back if available
            window.history.back();
          } else {
            // Fallback to main route
            navigate('/');
          }
        });
      }
    };

    setupBackButtonHandler();

    return () => {
      if (backButtonListener) {
        backButtonListener.remove();
      }
    };
  }, [navigate, location.pathname]);

  return null;
};

const App = () => {
  const [firebaseVerified, setFirebaseVerified] = useState(false);
  
  // Initialize push notifications and verify Firebase setup
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Check Firebase connection
        await verifyFirebaseSetup();
        setFirebaseVerified(true);
        console.log('✅ Firebase verification complete');
        
        // Auto-initialize events system
        await autoInitializeEventsSystem();
        console.log('✅ Events system ready');
        
        // Initialize notification service for all platforms
        console.log('🔔 Initializing notification service...');
        const notificationInit = await unifiedNotificationService.initialize();
        if (notificationInit) {
          console.log('✅ Notification service initialized successfully');
        } else {
          console.error('❌ Notification service initialization failed');
        }
        
        console.log('✅ App initialization complete');
        
      } catch (error) {
        console.error('❌ App initialization failed:', error);
        toast({
          title: "Initialization Error",
          description: "Unable to connect to Firebase services. Some features may not be available.",
          variant: "destructive"
        });
      }
    };
    
    initializeApp();
      
    // Remove the old duplicate initialization logic
  }, []);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <NetworkStatusIndicator />
        <BrowserRouter>
          <BackButtonHandler />
          <Suspense fallback={<LoadingApp />}>
            <Routes>
              <Route path="/" element={<MainDuolingoLayout />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="/admin-orders" element={<AdminOrderTest />} />
              <Route path="/admin-debug" element={<AdminDebugTest />} />
              <Route path="/legacy" element={<MobileAppLayout />} />
              <Route path="/bonus-quiz" element={<BonusQuizPage onReward={() => {}} />} />
              <Route path="/test-notifications" element={<NotificationTestPage />} />
              <Route path="*" element={<MainDuolingoLayout />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;