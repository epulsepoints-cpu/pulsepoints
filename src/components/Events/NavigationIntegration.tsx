// Integration Guide for Events Tab in Bottom Navigation
// Add this to your existing navigation component

import React from 'react';
import { Calendar, BookOpen, ShoppingCart, Zap } from 'lucide-react';
import EventsMain from './components/Events/EventsMain';

// 1. Update your navigation state to include events
const [activeTab, setActiveTab] = useState('ecg-hub'); // or your current default

// 2. Add events to your tab configuration
const navigationTabs = [
  {
    id: 'ecg-hub',
    label: 'ECG Master Hub',
    icon: BookOpen,
    component: YourECGHubComponent
  },
  {
    id: 'daily',
    label: 'Daily',
    icon: Calendar,
    component: YourDailyComponent
  },
  {
    id: 'events',
    label: 'Events',
    icon: Zap, // FIFA Mobile-style lightning icon
    component: EventsMain,
    badge: '4', // Show number of active events
    badgeColor: 'bg-red-500' // Make it prominent
  },
  {
    id: 'store',
    label: 'Store',
    icon: ShoppingCart,
    component: YourStoreComponent
  }
];

// 3. Example bottom navigation component
export const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2">
        {navigationTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative flex flex-col items-center justify-center p-2 rounded-lg
                transition-all duration-200 min-w-0 flex-1
                ${isActive 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-600 hover:text-gray-900'
                }
              `}
            >
              <div className="relative">
                <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''} transition-transform`} />
                
                {/* Events Badge */}
                {tab.badge && (
                  <div className={`
                    absolute -top-2 -right-2 w-5 h-5 rounded-full
                    flex items-center justify-center text-xs font-bold text-white
                    ${tab.badgeColor || 'bg-red-500'}
                  `}>
                    {tab.badge}
                  </div>
                )}
              </div>
              
              <span className={`
                text-xs mt-1 font-medium truncate w-full text-center
                ${isActive ? 'text-blue-600' : 'text-gray-600'}
              `}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// 4. Main app component with events integration
export const MainApp = () => {
  const [activeTab, setActiveTab] = useState('ecg-hub');
  
  const renderActiveComponent = () => {
    const activeTabConfig = navigationTabs.find(tab => tab.id === activeTab);
    const Component = activeTabConfig?.component;
    
    return Component ? <Component /> : <div>Tab not found</div>;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        {renderActiveComponent()}
      </div>
      
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

// 5. CSS classes for animations (add to your global CSS)
/*
.events-tab-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

.events-badge-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
  }
  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}
*/

// 6. Add to your useAuth or context provider to initialize events
import { checkAndInitializeEvents } from './services/autoInitializeEvents';

useEffect(() => {
  if (user?.uid) {
    // Initialize FIFA Mobile events system
    checkAndInitializeEvents();
  }
}, [user]);

export default MainApp;
