/**
 * 📱 MOBILE NAVIGATION INTEGRATION HOOK
 * Easy integration hook for existing components
 */

import { useEffect } from 'react';
import { useMobileNavigation, NavigationTab, NavigationView } from '@/services/MobileNavigationManager';

export interface NavigationIntegrationOptions {
  tab: NavigationTab;
  view?: NavigationView;
  hideBottomNav?: boolean;
  preventBack?: boolean;
  onBackPressed?: () => boolean; // Return true if handled
}

export const useNavigationIntegration = (options: NavigationIntegrationOptions) => {
  const { navigate, navigateToView, goBack, setModalOpen, navigationState } = useMobileNavigation();

  useEffect(() => {
    // Set current navigation state
    navigate(options.tab, options.view || 'main');
  }, [options.tab, options.view, navigate]);

  useEffect(() => {
    // Handle bottom nav visibility
    if (options.hideBottomNav !== undefined) {
      // This would be handled by the navigation manager internally
      // based on the current tab/view combination
    }
  }, [options.hideBottomNav]);

  const handleBackPress = () => {
    if (options.onBackPressed) {
      const handled = options.onBackPressed();
      if (handled) return true;
    }

    if (options.preventBack) {
      return true; // Prevent default back behavior
    }

    return goBack();
  };

  return {
    currentTab: navigationState.currentTab,
    currentView: navigationState.currentView,
    canGoBack: navigationState.canGoBack,
    showBottomNav: navigationState.showBottomNav,
    navigate,
    navigateToView,
    goBack: handleBackPress,
    setModalOpen
  };
};

// Hook for lesson integration
export const useLessonNavigation = (lessonId?: string) => {
  return useNavigationIntegration({
    tab: 'learn',
    view: 'lesson',
    hideBottomNav: true,
    onBackPressed: () => {
      // Custom lesson back handling
      console.log('📚 Lesson back pressed, showing exit confirmation');
      return false; // Allow default back behavior
    }
  });
};

// Hook for simulator integration
export const useSimulatorNavigation = () => {
  return useNavigationIntegration({
    tab: 'ecg-simulator',
    view: 'simulator',
    hideBottomNav: true,
    onBackPressed: () => {
      // Custom simulator back handling
      console.log('🔬 Simulator back pressed');
      return false; // Allow default back behavior
    }
  });
};

// Hook for modal integration
export const useModalNavigation = (isOpen: boolean) => {
  const navigation = useMobileNavigation();

  useEffect(() => {
    navigation.setModalOpen(isOpen);
  }, [isOpen, navigation]);

  return navigation;
};