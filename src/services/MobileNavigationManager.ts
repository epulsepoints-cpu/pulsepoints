/**
 * 📱 UNIFIED MOBILE NAVIGATION MANAGER
 * Centralized navigation system for consistent mobile experience
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import './NavigationToastBridge'; // Initialize toast bridge

// Global toast function type
declare global {
  interface Window {
    ecgToast?: (options: {
      title: string;
      description: string;
      duration?: number;
      variant?: 'default' | 'destructive';
    }) => void;
  }
}

export type NavigationTab = 
  | 'learn' 
  | 'daily-tasks' 
  | 'progress' 
  | 'achievements' 
  | 'store' 
  | 'ecg-simulator'
  | 'events';

export type NavigationView = 
  | 'main' 
  | 'lesson' 
  | 'quiz' 
  | 'simulator' 
  | 'results' 
  | 'profile' 
  | 'settings';

export interface NavigationState {
  currentTab: NavigationTab;
  currentView: NavigationView;
  previousTab?: NavigationTab;
  previousView?: NavigationView;
  navigationStack: { tab: NavigationTab; view: NavigationView }[];
  showBottomNav: boolean;
  isModalOpen: boolean;
  canGoBack: boolean;
}

export interface NavigationConfig {
  id: NavigationTab;
  label: string;
  icon: any;
  component?: React.ComponentType;
  badge?: string | number;
  badgeColor?: string;
  requiresAuth?: boolean;
  hidden?: boolean;
}

class MobileNavigationManager {
  private static instance: MobileNavigationManager;
  private listeners: Array<(state: NavigationState) => void> = [];
  private backButtonListeners: Array<() => void> = [];
  private capacitorBackButtonListener: any = null;
  private state: NavigationState = {
    currentTab: 'learn',
    currentView: 'main',
    navigationStack: [{ tab: 'learn', view: 'main' }],
    showBottomNav: true,
    isModalOpen: false,
    canGoBack: false
  };

  static getInstance(): MobileNavigationManager {
    if (!MobileNavigationManager.instance) {
      MobileNavigationManager.instance = new MobileNavigationManager();
    }
    return MobileNavigationManager.instance;
  }

  /**
   * 🚀 INITIALIZATION
   */
  async initialize(): Promise<void> {
    console.log('📱 Initializing Mobile Navigation Manager...');
    
    try {
      // Set up hardware back button for Android
      if (Capacitor.isNativePlatform()) {
        await this.setupHardwareBackButton();
      }

      // Set up browser back button handling
      this.setupBrowserBackButton();

      // Set up deep linking
      this.setupDeepLinking();

      console.log('✅ Mobile Navigation Manager initialized');
    } catch (error) {
      console.error('❌ Failed to initialize Mobile Navigation Manager:', error);
    }
  }

  /**
   * 📱 HARDWARE BACK BUTTON (Android)
   */
  private async setupHardwareBackButton(): Promise<void> {
    try {
      // Remove any existing listener
      if (this.capacitorBackButtonListener) {
        this.capacitorBackButtonListener.remove();
      }

      this.capacitorBackButtonListener = await CapacitorApp.addListener('backButton', () => {
        console.log('📱 Hardware back button pressed');
        this.handleBackNavigation();
      });

      console.log('✅ Hardware back button listener set up');
    } catch (error) {
      console.error('❌ Error setting up hardware back button:', error);
    }
  }

  /**
   * 🌐 BROWSER BACK BUTTON
   */
  private setupBrowserBackButton(): void {
    const handlePopState = (event: PopStateEvent) => {
      console.log('🌐 Browser back button pressed', event.state);
      
      if (event.state?.navigationState) {
        this.restoreNavigationState(event.state.navigationState);
      } else {
        this.handleBackNavigation();
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Store cleanup function
    this.backButtonListeners.push(() => {
      window.removeEventListener('popstate', handlePopState);
    });
  }

  /**
   * 🔗 DEEP LINKING
   */
  private setupDeepLinking(): void {
    // Update browser history when navigation state changes
    this.addListener((state) => {
      const url = this.generateURLFromState(state);
      const historyState = { navigationState: state };
      
      if (window.location.pathname !== url) {
        window.history.pushState(historyState, '', url);
      }
    });
  }

  /**
   * 🧭 NAVIGATION ACTIONS
   */
  navigateToTab(tab: NavigationTab, view: NavigationView = 'main'): void {
    console.log(`📱 Navigating to tab: ${tab}, view: ${view}`);
    
    const previousState = { ...this.state };
    
    // Update navigation stack
    const newStackItem = { tab, view };
    const updatedStack = [...this.state.navigationStack];
    
    // Remove any existing occurrence of this tab/view combination
    const existingIndex = updatedStack.findIndex(
      item => item.tab === tab && item.view === view
    );
    if (existingIndex !== -1) {
      updatedStack.splice(existingIndex, 1);
    }
    
    // Add to top of stack
    updatedStack.push(newStackItem);
    
    // Keep stack size manageable (max 10 items)
    if (updatedStack.length > 10) {
      updatedStack.shift();
    }

    this.updateState({
      previousTab: this.state.currentTab,
      previousView: this.state.currentView,
      currentTab: tab,
      currentView: view,
      navigationStack: updatedStack,
      canGoBack: updatedStack.length > 1,
      showBottomNav: this.shouldShowBottomNav(tab, view)
    });
  }

  navigateToView(view: NavigationView): void {
    console.log(`📱 Navigating to view: ${view}`);
    this.navigateToTab(this.state.currentTab, view);
  }

  /**
   * ⬅️ BACK NAVIGATION
   */
  handleBackNavigation(): boolean {
    console.log('⬅️ Handling back navigation', this.state);
    
    // If modal is open, close it first
    if (this.state.isModalOpen) {
      this.setModalOpen(false);
      return true;
    }

    // Check if we can navigate back in our stack
    if (this.state.navigationStack.length > 1) {
      return this.navigateBack();
    }

    // Handle special cases
    if (this.state.currentView !== 'main') {
      this.navigateToView('main');
      return true;
    }

    if (this.state.currentTab !== 'learn') {
      this.navigateToTab('learn');
      return true;
    }

    // If we're at the root, show exit confirmation
    this.showExitConfirmation();
    return true;
  }

  private navigateBack(): boolean {
    if (this.state.navigationStack.length <= 1) {
      return false;
    }

    const updatedStack = [...this.state.navigationStack];
    updatedStack.pop(); // Remove current item
    
    const previousItem = updatedStack[updatedStack.length - 1];
    
    this.updateState({
      previousTab: this.state.currentTab,
      previousView: this.state.currentView,
      currentTab: previousItem.tab,
      currentView: previousItem.view,
      navigationStack: updatedStack,
      canGoBack: updatedStack.length > 1,
      showBottomNav: this.shouldShowBottomNav(previousItem.tab, previousItem.view)
    });

    return true;
  }

  private showExitConfirmation(): void {
    console.log('📱 Showing exit confirmation');
    
    // Show toast using global toast function if available
    if (window.ecgToast) {
      window.ecgToast({
        title: "Exit App",
        description: "Press back again to exit",
        duration: 2000
      });
    } else {
      console.log('Exit confirmation: Press back again to exit');
    }

    // Set up temporary listener for second back press
    let confirmationTimeout: ReturnType<typeof setTimeout>;
    let confirmationListener: any;

    const handleConfirmationBack = () => {
      console.log('📱 Second back press - exiting app');
      if (Capacitor.isNativePlatform()) {
        CapacitorApp.exitApp();
      } else {
        window.close();
      }
    };

    if (Capacitor.isNativePlatform()) {
      confirmationListener = CapacitorApp.addListener('backButton', handleConfirmationBack);
    } else {
      window.addEventListener('popstate', handleConfirmationBack);
    }

    // Clean up confirmation listener after 2 seconds
    confirmationTimeout = setTimeout(() => {
      if (confirmationListener) {
        confirmationListener.remove?.();
        window.removeEventListener?.('popstate', handleConfirmationBack);
      }
    }, 2000);
  }

  /**
   * 🎛️ STATE MANAGEMENT
   */
  private updateState(updates: Partial<NavigationState>): void {
    this.state = { ...this.state, ...updates };
    this.notifyListeners();
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => {
      try {
        listener(this.state);
      } catch (error) {
        console.error('❌ Error in navigation listener:', error);
      }
    });
  }

  /**
   * 👂 LISTENERS
   */
  addListener(callback: (state: NavigationState) => void): () => void {
    this.listeners.push(callback);
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(listener => listener !== callback);
    };
  }

  /**
   * 🛠️ UTILITY METHODS
   */
  private shouldShowBottomNav(tab: NavigationTab, view: NavigationView): boolean {
    // Hide bottom nav during lessons, quizzes, simulator
    const hiddenViews: NavigationView[] = ['lesson', 'quiz', 'simulator'];
    const hiddenTabs: NavigationTab[] = ['ecg-simulator'];
    
    return !hiddenViews.includes(view) && !hiddenTabs.includes(tab);
  }

  private generateURLFromState(state: NavigationState): string {
    const { currentTab, currentView } = state;
    
    if (currentView === 'main') {
      return `/${currentTab === 'learn' ? '' : currentTab}`;
    }
    
    return `/${currentTab}/${currentView}`;
  }

  private restoreNavigationState(state: NavigationState): void {
    this.state = { ...state };
    this.notifyListeners();
  }

  setModalOpen(isOpen: boolean): void {
    this.updateState({ isModalOpen: isOpen });
  }

  getCurrentState(): NavigationState {
    return { ...this.state };
  }

  /**
   * 🧹 CLEANUP
   */
  cleanup(): void {
    console.log('🧹 Cleaning up Mobile Navigation Manager');
    
    // Remove Capacitor listener
    if (this.capacitorBackButtonListener) {
      this.capacitorBackButtonListener.remove();
      this.capacitorBackButtonListener = null;
    }

    // Remove browser listeners
    this.backButtonListeners.forEach(cleanup => cleanup());
    this.backButtonListeners = [];

    // Clear listeners
    this.listeners = [];
  }
}

// Export singleton instance
export const mobileNavigationManager = MobileNavigationManager.getInstance();

// React Hook for using mobile navigation
export const useMobileNavigation = () => {
  const [navigationState, setNavigationState] = useState<NavigationState>(
    mobileNavigationManager.getCurrentState()
  );

  useEffect(() => {
    const unsubscribe = mobileNavigationManager.addListener(setNavigationState);
    return unsubscribe;
  }, []);

  const navigate = useCallback((tab: NavigationTab, view: NavigationView = 'main') => {
    mobileNavigationManager.navigateToTab(tab, view);
  }, []);

  const navigateToView = useCallback((view: NavigationView) => {
    mobileNavigationManager.navigateToView(view);
  }, []);

  const goBack = useCallback(() => {
    return mobileNavigationManager.handleBackNavigation();
  }, []);

  const setModalOpen = useCallback((isOpen: boolean) => {
    mobileNavigationManager.setModalOpen(isOpen);
  }, []);

  return {
    navigationState,
    navigate,
    navigateToView,
    goBack,
    setModalOpen,
    currentTab: navigationState.currentTab,
    currentView: navigationState.currentView,
    canGoBack: navigationState.canGoBack,
    showBottomNav: navigationState.showBottomNav
  };
};

// Initialize on import
if (typeof window !== 'undefined') {
  mobileNavigationManager.initialize().catch(console.error);
}