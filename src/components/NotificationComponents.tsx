/**
 * 🔔 NOTIFICATION COMPONENTS
 * UI components for displaying and managing notifications
 */

import React from 'react';
import { Bell, X, Check, CheckCheck, TestTube } from 'lucide-react';
import { useNotifications, useNotificationPermissions } from '@/hooks/useNotifications';
import { NotificationData } from '@/services/NotificationManager';

// Notification Bell Icon with Badge
export const NotificationBell: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { unreadCount } = useNotifications();

  return (
    <div className={`relative ${className}`}>
      <Bell className="w-6 h-6" />
      {unreadCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center min-w-[20px]">
          {unreadCount > 99 ? '99+' : unreadCount}
        </span>
      )}
    </div>
  );
};

// Individual Notification Item
export const NotificationItem: React.FC<{
  notification: NotificationData;
  onMarkAsRead: (id: string) => void;
  onDismiss?: (id: string) => void;
}> = ({ notification, onMarkAsRead, onDismiss }) => {
  const getNotificationIcon = (type: NotificationData['type']) => {
    switch (type) {
      case 'achievement':
        return '🏆';
      case 'lesson':
        return '📚';
      case 'reminder':
        return '⏰';
      case 'celebration':
        return '🎉';
      case 'progress':
        return '📈';
      default:
        return '🔔';
    }
  };

  const getNotificationColor = (type: NotificationData['type']) => {
    switch (type) {
      case 'achievement':
        return 'border-l-yellow-500 bg-yellow-50';
      case 'lesson':
        return 'border-l-blue-500 bg-blue-50';
      case 'reminder':
        return 'border-l-orange-500 bg-orange-50';
      case 'celebration':
        return 'border-l-purple-500 bg-purple-50';
      case 'progress':
        return 'border-l-green-500 bg-green-50';
      default:
        return 'border-l-gray-500 bg-gray-50';
    }
  };

  const formatTimestamp = (timestamp: any) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString();
  };

  return (
    <div
      className={`
        border-l-4 p-4 mb-3 rounded-r-lg shadow-sm transition-all duration-200 hover:shadow-md
        ${getNotificationColor(notification.type)}
        ${!notification.read ? 'border-l-4' : 'border-l-2 opacity-75'}
      `}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">{getNotificationIcon(notification.type)}</span>
            <h4 className={`text-sm font-medium truncate ${!notification.read ? 'font-semibold' : ''}`}>
              {notification.title}
            </h4>
            {!notification.read && (
              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-2 leading-relaxed">
            {notification.body}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">
              {formatTimestamp(notification.timestamp)}
            </span>
            
            <div className="flex items-center gap-2">
              {!notification.read && notification.id && (
                <button
                  onClick={() => onMarkAsRead(notification.id!)}
                  className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 py-1 rounded transition-colors flex items-center gap-1"
                  title="Mark as read"
                >
                  <Check className="w-3 h-3" />
                  Read
                </button>
              )}
              
              {onDismiss && notification.id && (
                <button
                  onClick={() => onDismiss(notification.id!)}
                  className="text-xs text-gray-500 hover:text-gray-700 p-1"
                  title="Dismiss"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Notification List Component
export const NotificationList: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { 
    notifications, 
    isLoading, 
    markAsRead, 
    markAllAsRead, 
    loadNotifications 
  } = useNotifications();

  if (isLoading) {
    return (
      <div className={`p-4 ${className}`}>
        <div className="animate-pulse space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (notifications.length === 0) {
    return (
      <div className={`p-8 text-center text-gray-500 ${className}`}>
        <Bell className="w-12 h-12 mx-auto mb-3 text-gray-300" />
        <p className="text-sm">No notifications yet</p>
        <p className="text-xs mt-1">We'll notify you about achievements, reminders, and updates</p>
      </div>
    );
  }

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className={className}>
      <div className="flex items-center justify-between p-4 border-b">
        <h3 className="font-semibold text-gray-900">
          Notifications {unreadCount > 0 && `(${unreadCount} unread)`}
        </h3>
        
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded transition-colors flex items-center gap-1"
            >
              <CheckCheck className="w-3 h-3" />
              Mark all read
            </button>
          )}
          
          <button
            onClick={loadNotifications}
            className="text-xs text-blue-600 hover:text-blue-800 px-2 py-1 rounded transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>
      
      <div className="max-h-96 overflow-y-auto p-4">
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id || `${notification.timestamp}-${notification.title}`}
            notification={notification}
            onMarkAsRead={markAsRead}
          />
        ))}
      </div>
    </div>
  );
};

// Notification Dropdown/Popover
export const NotificationDropdown: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}> = ({ isOpen, onClose, className = '' }) => {
  if (!isOpen) return null;

  return (
    <div className={`absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50 ${className}`}>
      <NotificationList />
    </div>
  );
};

// Permission Request Component
export const NotificationPermissionBanner: React.FC = () => {
  const { permissionStatus, requestPermissions, hasPermission } = useNotificationPermissions();

  if (hasPermission || permissionStatus === 'denied') {
    return null;
  }

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
      <div className="flex items-center gap-3">
        <Bell className="w-5 h-5 text-blue-600" />
        <div className="flex-1">
          <h4 className="text-sm font-medium text-blue-900">Enable Notifications</h4>
          <p className="text-xs text-blue-700 mt-1">
            Get notified about achievements, lesson reminders, and important updates
          </p>
        </div>
        <button
          onClick={requestPermissions}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded transition-colors"
        >
          Enable
        </button>
      </div>
    </div>
  );
};

// Test Notification Button (for development)
export const TestNotificationButton: React.FC = () => {
  const { sendTestNotification, isInitialized } = useNotifications();

  if (import.meta.env.PROD) {
    return null;
  }

  return (
    <button
      onClick={sendTestNotification}
      disabled={!isInitialized}
      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 text-gray-700 text-xs px-3 py-2 rounded transition-colors"
      title="Send test notification (dev only)"
    >
      <TestTube className="w-3 h-3" />
      Test Notification
    </button>
  );
};

// Notification Status Indicator
export const NotificationStatusIndicator: React.FC = () => {
  const { isInitialized } = useNotifications();
  const { hasPermission } = useNotificationPermissions();

  const getStatus = () => {
    if (!isInitialized) return { text: 'Initializing...', color: 'text-yellow-600' };
    if (!hasPermission) return { text: 'Permission needed', color: 'text-orange-600' };
    return { text: 'Active', color: 'text-green-600' };
  };

  const status = getStatus();

  return (
    <div className="flex items-center gap-2 text-xs">
      <div className={`w-2 h-2 rounded-full ${status.color.replace('text-', 'bg-')}`}></div>
      <span className={status.color}>Notifications: {status.text}</span>
    </div>
  );
};