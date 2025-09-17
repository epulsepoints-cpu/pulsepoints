/**
 * Fix Notification Action URLs - Client Side Utility
 *
 * This utility fixes notifications that don't have proper action URLs
 * by adding default action URLs based on notification type
 */
// Default action URLs based on notification type
export const getDefaultActionUrl = (type, notificationData) => {
    switch (type) {
        case 'lesson':
        case 'lesson_complete':
            return notificationData?.lessonId ? `/learn/${notificationData.lessonId}` : '/learn';
        case 'achievement':
        case 'rank_up':
            return '/profile?tab=achievements';
        case 'progress':
        case 'streak':
        case 'daily_goal':
            return '/dashboard?tab=progress';
        case 'module_unlock':
            return notificationData?.moduleId ? `/modules/${notificationData.moduleId}` : '/learn';
        case 'reminder':
            return '/dashboard';
        case 'social':
            return '/leaderboard';
        case 'reward':
            return '/rewards';
        case 'system':
        default:
            return '/dashboard';
    }
};
// Enhanced notification creation utility
export const createNotificationWithActionUrl = (userId, type, title, body, data, customActionUrl) => {
    const actionUrl = customActionUrl || getDefaultActionUrl(type, data);
    const notificationData = {
        userId,
        type,
        title,
        body,
        data: data || {},
        actionUrl,
        timestamp: new Date(),
        read: false,
        priority: 'normal'
    };
    console.log('📱 Creating notification with action URL:', {
        type,
        title,
        actionUrl
    });
    return notificationData;
};
// Fix notification data on the client side
export const fixNotificationActionUrl = (notification) => {
    if (!notification.actionUrl || notification.actionUrl === '' || notification.actionUrl === '/') {
        return {
            ...notification,
            actionUrl: getDefaultActionUrl(notification.type, notification.data)
        };
    }
    return notification;
};
console.log('✅ Notification action URL utilities loaded');
