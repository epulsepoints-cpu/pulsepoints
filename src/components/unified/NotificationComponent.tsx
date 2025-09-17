/**
 * Unified Notification Component
 * 
 * A comprehensive notification UI that replaces all other notification components
 * to prevent conflicts and provide consistent notification display.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, Check, Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { useUnifiedNotifications } from '@/hooks/useUnifiedNotifications';
import { NotificationData } from '@/services/unifiedNotificationService';
import { cn } from '@/lib/utils';

interface NotificationComponentProps {
  className?: string;
  showBadge?: boolean;
  position?: 'fixed' | 'relative';
  maxNotifications?: number;
}

const NotificationComponent: React.FC<NotificationComponentProps> = ({
  className,
  showBadge = true,
  position = 'relative',
  maxNotifications = 5
}) => {
  const {
    notifications,
    unreadCount,
    isLoading,
    markAsRead,
    refreshNotifications
  } = useUnifiedNotifications();

  // State for error handling and component behavior
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [displayedNotifications, setDisplayedNotifications] = useState<NotificationData[]>([]);

  // Clear error function
  const clearError = () => setError(null);

  // Update displayed notifications
  useEffect(() => {
    setDisplayedNotifications(notifications.slice(0, maxNotifications));
  }, [notifications, maxNotifications]);

  // Handle notification click
  const handleNotificationClick = async (notification: NotificationData) => {
    if (!notification.read && notification.id) {
      await markAsRead(notification.id);
    }

    // Navigate to action URL if provided
    if (notification.actionUrl) {
      window.location.href = notification.actionUrl;
    }
  };

  // Get notification icon
  const getNotificationIcon = (type: NotificationData['type'], category?: NotificationData['category']) => {
    if (category) {
      switch (category) {
        case 'success':
          return <CheckCircle className="w-4 h-4 text-green-500" />;
        case 'warning':
          return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
        case 'error':
          return <XCircle className="w-4 h-4 text-red-500" />;
        default:
          return <Info className="w-4 h-4 text-blue-500" />;
      }
    }

    switch (type) {
      case 'achievement':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'lesson':
        return <Info className="w-4 h-4 text-blue-500" />;
      case 'reminder':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <Bell className="w-4 h-4 text-gray-500" />;
    }
  };

  // Get notification color theme
  const getNotificationTheme = (type: NotificationData['type'], category?: NotificationData['category']) => {
    if (category) {
      switch (category) {
        case 'success':
          return 'border-green-200 bg-green-50 hover:bg-green-100';
        case 'warning':
          return 'border-yellow-200 bg-yellow-50 hover:bg-yellow-100';
        case 'error':
          return 'border-red-200 bg-red-50 hover:bg-red-100';
        default:
          return 'border-blue-200 bg-blue-50 hover:bg-blue-100';
      }
    }

    switch (type) {
      case 'achievement':
        return 'border-green-200 bg-green-50 hover:bg-green-100';
      case 'lesson':
        return 'border-blue-200 bg-blue-50 hover:bg-blue-100';
      case 'reminder':
        return 'border-yellow-200 bg-yellow-50 hover:bg-yellow-100';
      default:
        return 'border-gray-200 bg-gray-50 hover:bg-gray-100';
    }
  };

  // Format timestamp
  const formatTimestamp = (timestamp: any) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString();
  };

  return (
    <div className={cn('relative', className)}>
      {/* Error Display */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2 p-2 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
        >
          <div className="flex items-center justify-between">
            <span>{error}</span>
            <button
              onClick={clearError}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Notification Bell */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={isLoading}
        >
          <Bell className={cn(
            'w-5 h-5',
            unreadCount > 0 ? 'text-blue-600' : 'text-gray-500'
          )} />
          
          {/* Unread Badge */}
          {showBadge && unreadCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
            >
              {unreadCount > 99 ? '99+' : unreadCount}
            </motion.span>
          )}
        </button>

        {/* Notification Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className={cn(
                'absolute right-0 mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50',
                position === 'fixed' && 'fixed top-16 right-4'
              )}
            >
              {/* Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  <div className="flex items-center space-x-2">
                    {unreadCount > 0 && (
                      <span className="text-sm text-gray-500">
                        {unreadCount} unread
                      </span>
                    )}
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Loading State */}
              {isLoading && (
                <div className="p-8 text-center">
                  <div className="animate-spin w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p className="text-gray-500">Loading notifications...</p>
                </div>
              )}

              {/* Notifications List */}
              {!isLoading && (
                <div className="max-h-96 overflow-y-auto">
                  {displayedNotifications.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      <Bell className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                      <p>No notifications yet</p>
                    </div>
                  ) : (
                    displayedNotifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={cn(
                          'p-4 border-b border-gray-100 cursor-pointer transition-colors',
                          getNotificationTheme(notification.type, notification.category),
                          !notification.read && 'bg-blue-50 border-l-4 border-l-blue-500'
                        )}
                        onClick={() => handleNotificationClick(notification)}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            {getNotificationIcon(notification.type, notification.category)}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <p className={cn(
                              'text-sm font-medium text-gray-900',
                              !notification.read && 'font-semibold'
                            )}>
                              {notification.title}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              {notification.body}
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              {formatTimestamp(notification.timestamp)}
                            </p>
                          </div>

                          {!notification.read && (
                            <div className="flex-shrink-0">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              )}

              {/* Footer */}
              {!isLoading && notifications.length > maxNotifications && (
                <div className="p-4 border-t border-gray-200 text-center">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      // Navigate to full notifications page
                      window.location.href = '/notifications';
                    }}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View all {notifications.length} notifications
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NotificationComponent;
