export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  data?: Record<string, any>;
  read: boolean;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
  priority: 'low' | 'normal' | 'high';
  category: NotificationCategory;
  actionUrl?: string;
  imageUrl?: string;
}

export type NotificationType = 
  | 'achievement'
  | 'progress'
  | 'streak'
  | 'module_unlock'
  | 'lesson_complete'
  | 'rank_up'
  | 'daily_goal'
  | 'reminder'
  | 'social'
  | 'system'
  | 'reward';

export type NotificationCategory = 
  | 'learning'
  | 'achievements'
  | 'social'
  | 'system'
  | 'reminders';

export interface NotificationPreferences {
  userId: string;
  pushNotifications: {
    enabled: boolean;
    achievements: boolean;
    progress: boolean;
    streaks: boolean;
    reminders: boolean;
    social: boolean;
    system: boolean;
  };
  emailNotifications: {
    enabled: boolean;
    weeklyReports: boolean;
    achievements: boolean;
    newContent: boolean;
    reminders: boolean;
  };
  inAppNotifications: {
    enabled: boolean;
    sound: boolean;
    badge: boolean;
  };
  quietHours: {
    enabled: boolean;
    startTime: string; // "22:00"
    endTime: string;   // "08:00"
  };
  reminderTime: string; // "19:00" - preferred study reminder time
  updatedAt: string;
}

export interface NotificationTemplate {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  category: NotificationCategory;
  priority: 'low' | 'normal' | 'high';
  variables?: string[]; // e.g., ['username', 'xp', 'streakCount']
}

export interface PushNotificationPayload {
  title: string;
  body: string;
  icon?: string;
  image?: string;
  badge?: number;
  data?: Record<string, any>;
  actions?: Array<{
    action: string;
    title: string;
    icon?: string;
  }>;
}

export interface NotificationStats {
  total: number;
  unread: number;
  byCategory: Record<NotificationCategory, number>;
  byType: Record<NotificationType, number>;
}
