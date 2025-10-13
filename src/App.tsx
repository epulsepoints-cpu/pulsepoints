import React, { useEffect, useState } from "react";
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

// ANDROID FIX: Direct imports instead of React.lazy() for Android WebView compatibility
import MainDuolingoLayout from "@/components/MainDuolingoLayout";
import MobileAppLayout from "@/components/MobileAppLayout";
import BonusQuizPage from "@/components/BonusQuizPage";
import NotificationTestPage from "@/components/NotificationTestPage";
import AdminDashboardPage from "@/pages/AdminDashboardPage";
import AdminOrderTest from "@/components/AdminOrderTest";
import AdminDebugTest from "@/components/AdminDebugTest";

// Simple loading component
const LoadingApp = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">E-Pulsepoints</h1>
      <p className="text-gray-600">Loading your medical education platform...</p>
    </div>
  </div>
);

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
          
          const currentPath = location.pathname;
          
          if (currentPath === '/') {
            toast({
              title: "Press back again to exit",
              description: "Tap the back button again to close the app",
              duration: 2000
            });
            
            setTimeout(() => {
              CapacitorApp.addListener('backButton', () => {
                CapacitorApp.exitApp();
              });
            }, 2000);
            
          } else if (currentPath === '/legacy') {
            navigate('/');
          } else if (currentPath === '/bonus-quiz') {
            navigate('/');
          } else if (canGoBack) {
            window.history.back();
          } else {
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
        await verifyFirebaseSetup();
        setFirebaseVerified(true);
        console.log('✅ Firebase verification complete');
        
        await autoInitializeEventsSystem();
        console.log('✅ Events system ready');
        
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
  }, []);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <NetworkStatusIndicator />
        <BrowserRouter>
          <BackButtonHandler />
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
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
