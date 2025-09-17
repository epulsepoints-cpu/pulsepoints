import React, { useState, useEffect } from 'react';
import { Bell, X, Check, Calendar, Clock, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { db } from '@/firebase';
import { useAuth } from '@/hooks/useAuth';
import { collection, query, where, orderBy, limit, onSnapshot, doc, updateDoc, Timestamp, getDocs, addDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { fixNotificationActionUrl, getDefaultActionUrl } from '@/utils/notificationUtils';

// Define notification types
interface Notification {
  id: string;
  title: string;
  body: string;
  type: 'system' | 'lesson' | 'reminder' | 'achievement' | 'progress';
  read: boolean;
  timestamp: Timestamp;
  actionUrl?: string;
  iconUrl?: string;
  relatedItemId?: string;
}

// Group notifications by date
const groupNotificationsByDate = (notifications: Notification[]) => {
  const groups: Record<string, Notification[]> = {
    'Today': [],
    'Yesterday': [],
    'This Week': [],
    'Earlier': []
  };
  
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);
  
  notifications.forEach(notification => {
    const date = notification.timestamp.toDate();
    
    if (date.toDateString() === now.toDateString()) {
      groups['Today'].push(notification);
    } else if (date.toDateString() === yesterday.toDateString()) {
      groups['Yesterday'].push(notification);
    } else if (date > weekAgo) {
      groups['This Week'].push(notification);
    } else {
      groups['Earlier'].push(notification);
    }
  });
  
  return groups;
};

// Get icon for notification type
const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'lesson':
      return <Calendar className="h-4 w-4 text-blue-500" />;
    case 'reminder':
      return <Clock className="h-4 w-4 text-amber-500" />;
    case 'achievement':
      return <Badge className="h-4 w-4 text-green-500" />;
    default:
      return <Bell className="h-4 w-4 text-primary" />;
  }
};

export default function NotificationMenu() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [activeTab, setActiveTab] = useState("all");
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Fetch notifications when user changes or menu opens
  useEffect(() => {
    if (user?.uid) {
      const notificationsRef = collection(db, 'userNotifications');
      const q = query(
        notificationsRef,
        where('userId', '==', user.uid),
        orderBy('timestamp', 'desc'),
        limit(50)
      );
      
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedNotifications: Notification[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data() as Omit<Notification, 'id'>;
          const notification = {
            id: doc.id,
            ...data,
            timestamp: data.timestamp as Timestamp
          };
          
          // Fix missing action URLs using utility
          const fixedNotification = fixNotificationActionUrl(notification);
          fetchedNotifications.push(fixedNotification);
        });
        
        setNotifications(fetchedNotifications);
        setUnreadCount(fetchedNotifications.filter(n => !n.read).length);
      }, (error) => {
        console.error("Error fetching notifications:", error);
      });
      
      return () => unsubscribe();
    }
  }, [user?.uid]);
  
  // DISABLED: Create reminder notifications for incomplete tasks
  // This was creating notifications EVERY HOUR causing spam!
  // Now handled by UnifiedNotificationService with proper throttling
  useEffect(() => {
    if (!user?.uid) return;
    
    console.log('📝 Reminder notifications disabled - was causing spam with hourly checks');
    console.log('📝 Reminder logic moved to UnifiedNotificationService with proper throttling');
    
    // Optional: Check incomplete items once when component mounts (not on interval)
    // Uncomment only if needed and ensure proper throttling
    /*
    const checkIncompleteItemsOnce = async () => {
      try {
        // This would only run once when component mounts
        // Add your logic here if needed, but with proper 24-hour throttling
      } catch (error) {
        console.error('Error checking incomplete items:', error);
      }
    };
    
    checkIncompleteItemsOnce();
    */
  }, [user?.uid]);
  
  // Mark notification as read
  const markAsRead = async (notification: Notification) => {
    if (notification.read) return;
    
    try {
      const notificationRef = doc(db, 'userNotifications', notification.id);
      await updateDoc(notificationRef, { read: true });
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };
  
  // Mark all as read
  const markAllAsRead = async () => {
    try {
      const unreadNotifications = notifications.filter(n => !n.read);
      
      // Update each unread notification
      const promises = unreadNotifications.map(notification => {
        const notificationRef = doc(db, 'userNotifications', notification.id);
        return updateDoc(notificationRef, { read: true });
      });
      
      await Promise.all(promises);
      
      toast({
        title: "Success",
        description: `${unreadNotifications.length} notifications marked as read`,
      });
      
    } catch (error) {
      console.error('Error marking all as read:', error);
      toast({
        title: "Error",
        description: "Failed to mark notifications as read",
        variant: "destructive",
      });
    }
  };
  
  // Handle notification click
  const handleNotificationClick = (notification: Notification) => {
    markAsRead(notification);
    
    // Debug logging
    console.log('📱 Notification clicked:', {
      id: notification.id,
      type: notification.type,
      actionUrl: notification.actionUrl,
      title: notification.title
    });
    
    // Determine the URL to navigate to
    let targetUrl = notification.actionUrl;
    
    // If no actionUrl or it's empty/invalid, use the utility function
    if (!targetUrl || targetUrl === '' || targetUrl === '/') {
      targetUrl = getDefaultActionUrl(notification.type, notification);
      console.log('🔗 Using default action URL:', targetUrl);
    } else {
      console.log('🔗 Using notification action URL:', targetUrl);
    }
    
    // Navigate to the determined URL
    try {
      navigate(targetUrl);
      console.log('✅ Navigation successful to:', targetUrl);
    } catch (error) {
      console.error('❌ Navigation failed:', error);
      // Fallback to dashboard
      navigate('/dashboard');
    }
    
    setIsOpen(false);
  };

  // Filter notifications based on active tab
  const filteredNotifications = activeTab === 'unread' 
    ? notifications.filter(n => !n.read)
    : notifications;
  
  // Group notifications by date
  const groupedNotifications = groupNotificationsByDate(filteredNotifications);
  
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative" size="icon">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 md:w-96" align="end">
        <div className="flex items-center justify-between p-2">
          <DropdownMenuLabel className="font-normal">
            <p className="text-sm font-medium">Notifications</p>
            <p className="text-xs text-muted-foreground">
              {unreadCount > 0 
                ? `You have ${unreadCount} unread ${unreadCount === 1 ? 'notification' : 'notifications'}`
                : 'No new notifications'}
            </p>
          </DropdownMenuLabel>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead}>
              <Check className="mr-1 h-3.5 w-3.5" />
              <span className="text-xs">Mark all read</span>
            </Button>
          )}
        </div>
        <DropdownMenuSeparator />
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <div className="px-2 pt-1">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread {unreadCount > 0 && `(${unreadCount})`}</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0 focus:outline-none">
            <ScrollArea className="h-[300px]">
              {Object.keys(groupedNotifications).map(date => {
                if (groupedNotifications[date].length === 0) return null;
                
                return (
                  <div key={date}>
                    <DropdownMenuLabel className="text-xs text-muted-foreground py-1 pt-2">
                      {date}
                    </DropdownMenuLabel>
                    <DropdownMenuGroup>
                      {groupedNotifications[date].map(notification => (
                        <DropdownMenuItem 
                          key={notification.id} 
                          className={`flex flex-col items-start p-3 gap-1 ${!notification.read ? 'bg-accent/40' : ''}`}
                          onClick={() => handleNotificationClick(notification)}
                        >
                          <div className="flex w-full justify-between">
                            <div className="flex items-center">
                              {getNotificationIcon(notification.type)}
                              <span className="ml-2 text-xs font-medium">{notification.title}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {formatDistanceToNow(notification.timestamp.toDate(), { addSuffix: true })}
                            </span>
                          </div>
                          <p className="text-sm">{notification.body}</p>
                          {notification.actionUrl && (
                            <div className="flex items-center text-xs text-primary mt-1">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              View details
                            </div>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </div>
                );
              })}
              
              {filteredNotifications.length === 0 && (
                <div className="flex flex-col items-center justify-center h-[200px] text-center p-4">
                  <Bell className="h-8 w-8 text-muted-foreground mb-2 opacity-40" />
                  <p className="text-sm font-medium">No notifications</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activeTab === 'unread' 
                      ? 'You have no unread notifications'
                      : 'You have no notifications yet'}
                  </p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="unread" className="mt-0 focus:outline-none">
            <ScrollArea className="h-[300px]">
              {Object.keys(groupedNotifications).map(date => {
                if (groupedNotifications[date].length === 0) return null;
                
                return (
                  <div key={date}>
                    <DropdownMenuLabel className="text-xs text-muted-foreground py-1 pt-2">
                      {date}
                    </DropdownMenuLabel>
                    <DropdownMenuGroup>
                      {groupedNotifications[date].map(notification => (
                        <DropdownMenuItem 
                          key={notification.id} 
                          className="flex flex-col items-start p-3 gap-1 bg-accent/40"
                          onClick={() => handleNotificationClick(notification)}
                        >
                          <div className="flex w-full justify-between">
                            <div className="flex items-center">
                              {getNotificationIcon(notification.type)}
                              <span className="ml-2 text-xs font-medium">{notification.title}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {formatDistanceToNow(notification.timestamp.toDate(), { addSuffix: true })}
                            </span>
                          </div>
                          <p className="text-sm">{notification.body}</p>
                          {notification.actionUrl && (
                            <div className="flex items-center text-xs text-primary mt-1">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              View details
                            </div>
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  </div>
                );
              })}
              
              {filteredNotifications.length === 0 && (
                <div className="flex flex-col items-center justify-center h-[200px] text-center p-4">
                  <Check className="h-8 w-8 text-muted-foreground mb-2 opacity-40" />
                  <p className="text-sm font-medium">All caught up!</p>
                  <p className="text-xs text-muted-foreground mt-1">You've read all your notifications</p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
