/**
 * 🎯 UNIFIED NOTIFICATION COMPONENT
 * Single component to replace all conflicting notification UI
 */

import React, { useState, useEffect } from 'react';
import { Bell, X, Check, CheckCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useUnifiedNotifications } from '@/hooks/useUnifiedNotifications';

interface UnifiedNotificationProps {
  showBell?: boolean;
  maxVisible?: number;
  className?: string;
}

export const UnifiedNotificationComponent: React.FC<UnifiedNotificationProps> = ({
  showBell = true,
  maxVisible = 5,
  className = ''
}) => {
  const { 
    notifications, 
    unreadCount, 
    isLoading, 
    markAsRead, 
    markAllAsRead, 
    clearAll 
  } = useUnifiedNotifications();
  
  const [isOpen, setIsOpen] = useState(false);
  const [visibleNotifications, setVisibleNotifications] = useState(notifications.slice(0, maxVisible));

  // Update visible notifications when data changes
  useEffect(() => {
    setVisibleNotifications(notifications.slice(0, maxVisible));
  }, [notifications, maxVisible]);

  // Handle notification click
  const handleNotificationClick = async (notificationId: string) => {
    await markAsRead(notificationId);
  };

  // Get notification icon based on type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'lesson': return '📚';
      case 'achievement': return '🏆';
      case 'progress': return '📈';
      case 'reminder': return '⏰';
      case 'celebration': return '🎉';
      default: return '📢';
    }
  };

  // Get notification color based on type
  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'lesson': return 'bg-blue-50 border-blue-200';
      case 'achievement': return 'bg-yellow-50 border-yellow-200';
      case 'progress': return 'bg-green-50 border-green-200';
      case 'reminder': return 'bg-purple-50 border-purple-200';
      case 'celebration': return 'bg-pink-50 border-pink-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  if (!showBell) {
    // Just show notifications without bell trigger
    return (
      <div className={`space-y-2 ${className}`}>
        {visibleNotifications.map((notification) => (
          <Card 
            key={notification.id} 
            className={`cursor-pointer transition-all hover:shadow-md ${getNotificationColor(notification.type)} ${!notification.read ? 'ring-2 ring-blue-300' : ''}`}
            onClick={() => handleNotificationClick(notification.id!)}
          >
            <CardContent className="p-3">
              <div className="flex items-start gap-3">
                <span className="text-xl">{getNotificationIcon(notification.type)}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-gray-900 truncate">
                    {notification.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {notification.body}
                  </p>
                  <span className="text-xs text-gray-400 mt-1">
                    {notification.timestamp?.toDate?.()?.toLocaleTimeString() || 'Now'}
                  </span>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
        
        {notifications.length === 0 && !isLoading && (
          <Card className="bg-gray-50">
            <CardContent className="p-6 text-center">
              <p className="text-gray-500">No notifications yet</p>
            </CardContent>
          </Card>
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Notification Bell Trigger */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-gray-100"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-xs"
          >
            {unreadCount > 99 ? '99+' : unreadCount}
          </Badge>
        )}
      </Button>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-hidden transform -translate-x-1 sm:translate-x-0">
          {/* Header */}
          <div className="p-3 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-gray-900">Notifications</h3>
              <div className="flex items-center gap-2">
                {unreadCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={markAllAsRead}
                    className="text-xs"
                  >
                    <CheckCheck className="w-3 h-3 mr-1" />
                    <span className="hidden sm:inline">Mark all read</span>
                    <span className="sm:hidden">Read all</span>
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-64 overflow-y-auto">
            {isLoading ? (
              <div className="p-4 text-center text-gray-500">
                Loading notifications...
              </div>
            ) : visibleNotifications.length > 0 ? (
              <div className="space-y-1 p-2">
                {visibleNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${!notification.read ? 'bg-blue-50 border-l-4 border-blue-400' : ''}`}
                    onClick={() => handleNotificationClick(notification.id!)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-lg flex-shrink-0">{getNotificationIcon(notification.type)}</span>
                      <div className="flex-1 min-w-0 overflow-hidden">
                        <h4 className="font-medium text-sm text-gray-900 truncate">
                          {notification.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2 break-words">
                          {notification.body}
                        </p>
                        <span className="text-xs text-gray-400 mt-1 block">
                          {notification.timestamp?.toDate?.()?.toLocaleTimeString() || 'Now'}
                        </span>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-gray-500">
                <Bell className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p>No notifications yet</p>
              </div>
            )}
          </div>

          {/* Footer */}
          {notifications.length > maxVisible && (
            <div className="p-3 border-t border-gray-200 bg-gray-50 text-center">
              <Button variant="ghost" size="sm" className="text-xs">
                View all {notifications.length} notifications
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Click overlay to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default UnifiedNotificationComponent;
