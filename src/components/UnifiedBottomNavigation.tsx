/**
 * 📱 UNIFIED MOBILE BOTTOM NAVIGATION
 * Consistent bottom navigation bar for all mobile screens
 */

import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Home, 
  BookOpen, 
  Calendar, 
  Trophy, 
  CreditCard, 
  Zap,
  Activity
} from 'lucide-react';
import { useMobileNavigation, NavigationTab, NavigationConfig } from '@/services/MobileNavigationManager';

// Navigation configuration
const navigationConfigs: NavigationConfig[] = [
  {
    id: 'learn',
    label: 'Learn',
    icon: BookOpen,
    requiresAuth: false
  },
  {
    id: 'daily-tasks',
    label: 'Daily',
    icon: Calendar,
    requiresAuth: false
  },
  {
    id: 'progress',
    label: 'Progress',
    icon: Trophy,
    requiresAuth: true
  },
  {
    id: 'ecg-simulator',
    label: 'Simulator',
    icon: Activity,
    requiresAuth: false
  },
  {
    id: 'store',
    label: 'Store',
    icon: CreditCard,
    requiresAuth: false
  }
];

export interface UnifiedBottomNavigationProps {
  className?: string;
  userAuthenticated?: boolean;
  completedTasks?: number;
  totalTasks?: number;
  eventsBadge?: string | number;
  onTabChange?: (tab: NavigationTab) => void;
}

export const UnifiedBottomNavigation: React.FC<UnifiedBottomNavigationProps> = ({
  className = '',
  userAuthenticated = false,
  completedTasks = 0,
  totalTasks = 0,
  eventsBadge,
  onTabChange
}) => {
  const { navigationState, navigate, currentTab } = useMobileNavigation();

  // Filter navigation items based on auth status
  const visibleNavItems = navigationConfigs.filter(item => 
    !item.hidden && (!item.requiresAuth || userAuthenticated)
  );

  const handleTabClick = (tabId: NavigationTab) => {
    navigate(tabId);
    onTabChange?.(tabId);
  };

  const getBadgeForTab = (tabId: NavigationTab): string | number | undefined => {
    switch (tabId) {
      case 'daily-tasks':
        return totalTasks > 0 ? `${completedTasks}/${totalTasks}` : undefined;
      case 'events':
        return eventsBadge;
      default:
        return undefined;
    }
  };

  const getBadgeColorForTab = (tabId: NavigationTab): string => {
    switch (tabId) {
      case 'daily-tasks':
        return completedTasks === totalTasks ? 'bg-green-500' : 'bg-blue-500';
      case 'events':
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  // Don't show if navigation state says to hide
  if (!navigationState.showBottomNav) {
    return null;
  }

  return (
    <nav className={cn(
      "fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200/80 z-30 shadow-lg safe-area-pb",
      className
    )}>
      <div className="px-2">
        <div className="flex items-center justify-around py-1.5">
          {visibleNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            const badge = getBadgeForTab(item.id);
            const badgeColor = getBadgeColorForTab(item.id);
            
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={cn(
                  "flex-1 flex flex-col items-center gap-0.5 py-2 px-1 rounded-xl relative transition-all duration-200",
                  isActive
                    ? "text-green-600 bg-gradient-to-br from-green-50 to-emerald-50 scale-105"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 active:scale-95"
                )}
                aria-label={item.label}
                role="tab"
                aria-selected={isActive}
              >
                <div className="relative">
                  <Icon className={cn(
                    "transition-all duration-200",
                    isActive ? "w-6 h-6" : "w-5 h-5"
                  )} />
                  
                  {/* Badge */}
                  {badge && (
                    <span className={cn(
                      "absolute -top-2 -right-2 text-white text-xs rounded-full flex items-center justify-center min-w-[18px] h-[18px] px-1 font-medium shadow-md",
                      badgeColor
                    )}>
                      {badge}
                    </span>
                  )}
                  
                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                  )}
                </div>
                
                <span className={cn(
                  "text-xs font-medium transition-all duration-200",
                  isActive ? "text-green-700 font-semibold" : "text-gray-600"
                )}>
                  {item.label}
                </span>
                
                {/* Haptic feedback indicator */}
                {isActive && (
                  <div className="absolute inset-0 rounded-xl border-2 border-green-200 opacity-50 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Navigation state indicator (for debugging) */}
      {import.meta.env.DEV && (
        <div className="absolute top-0 left-0 bg-black/80 text-white text-xs p-1 rounded-br">
          {currentTab}/{navigationState.currentView} ({navigationState.navigationStack.length})
        </div>
      )}
    </nav>
  );
};

// Alternative compact version for specific screens
export const CompactBottomNavigation: React.FC<UnifiedBottomNavigationProps> = (props) => {
  return (
    <UnifiedBottomNavigation 
      {...props}
      className="py-1 border-t-0 bg-white/90 shadow-sm"
    />
  );
};

// Navigation item component for custom implementations
export const NavigationItem: React.FC<{
  config: NavigationConfig;
  isActive: boolean;
  badge?: string | number;
  badgeColor?: string;
  onClick: () => void;
  className?: string;
}> = ({ config, isActive, badge, badgeColor = 'bg-blue-500', onClick, className = '' }) => {
  const Icon = config.icon;
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-1 flex flex-col items-center gap-0.5 py-2 px-1 rounded-xl relative transition-all duration-200",
        isActive
          ? "text-green-600 bg-gradient-to-br from-green-50 to-emerald-50 scale-105"
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/80 active:scale-95",
        className
      )}
      aria-label={config.label}
    >
      <div className="relative">
        <Icon className={cn(
          "transition-all duration-200",
          isActive ? "w-6 h-6" : "w-5 h-5"
        )} />
        
        {badge && (
          <span className={cn(
            "absolute -top-2 -right-2 text-white text-xs rounded-full flex items-center justify-center min-w-[18px] h-[18px] px-1 font-medium shadow-md",
            badgeColor
          )}>
            {badge}
          </span>
        )}
      </div>
      
      <span className={cn(
        "text-xs font-medium transition-all duration-200",
        isActive ? "text-green-700 font-semibold" : "text-gray-600"
      )}>
        {config.label}
      </span>
    </button>
  );
};