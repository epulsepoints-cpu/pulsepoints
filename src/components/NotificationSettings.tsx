/**
 * 🎯 DUOLINGO-STYLE NOTIFICATION SETTINGS
 * Allow users to customize their daily reminder preferences
 */

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Clock, Calendar, Smartphone, Globe, Flame, BookOpen } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface NotificationSettingsProps {
  userId: string;
  className?: string;
}

interface NotificationPreferences {
  enableDaily: boolean;
  enableStreak: boolean;
  enableTips: boolean;
  reminderTime: string; // "19:00"
  streakReminders: boolean;
  achievementNotifications: boolean;
  weeklyProgress: boolean;
  timezone: string;
  dailyReminders: boolean;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ userId, className = '' }) => {
  const [preferences, setPreferences] = useState<NotificationPreferences>({
    enableDaily: true,
    enableStreak: true,
    enableTips: true,
    reminderTime: '19:00',
    streakReminders: true,
    achievementNotifications: true,
    weeklyProgress: true,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    dailyReminders: true
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Load preferences from localStorage
  useEffect(() => {
    loadPreferences();
  }, [userId]);

  const loadPreferences = async () => {
    try {
      // Load from localStorage as fallback since client scheduler is disabled
      const stored = localStorage.getItem(`notification_prefs_${userId}`);
      if (stored) {
        const existing = JSON.parse(stored);
        setPreferences({
          enableDaily: existing.enableDaily ?? true,
          enableStreak: existing.enableStreak ?? true,
          enableTips: existing.enableTips ?? true,
          reminderTime: existing.reminderTime || '19:00',
          streakReminders: existing.streakReminders ?? true,
          achievementNotifications: existing.achievementNotifications ?? true,
          weeklyProgress: existing.weeklyProgress ?? true,
          timezone: existing.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
          dailyReminders: existing.dailyReminders ?? true
        });
      }
    } catch (error) {
      console.error('Error loading notification preferences:', error);
    }
  };

  const savePreferences = async () => {
    setIsSaving(true);
    try {
      // Save to localStorage since client-side scheduler is disabled
      localStorage.setItem(`notification_prefs_${userId}`, JSON.stringify({
        ...preferences,
        userId
      }));
      
      setLastSaved(new Date());
      
      console.log('✅ Notification preferences saved to localStorage');
      
    } catch (error) {
      console.error('Error saving notification preferences:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const timeOptions = [
    { value: '08:00', label: '8:00 AM', emoji: '☀️' },
    { value: '12:00', label: '12:00 PM', emoji: '🌞' },
    { value: '17:00', label: '5:00 PM', emoji: '🌅' },
    { value: '19:00', label: '7:00 PM', emoji: '🌆' },
    { value: '20:00', label: '8:00 PM', emoji: '🌙' },
    { value: '21:00', label: '9:00 PM', emoji: '🌃' },
  ];

  return (
    <Card className={`${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-blue-600" />
          Notification Settings
        </CardTitle>
        <p className="text-sm text-gray-600">
          Customize your daily learning reminders to build consistent ECG study habits
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Daily Goal Reminders */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Flame className="w-5 h-5 text-orange-500" />
            <div>
              <Label className="font-medium">Daily Goal Reminders</Label>
              <p className="text-sm text-gray-500">Get reminded to complete daily tasks</p>
            </div>
          </div>
          <Switch
            checked={preferences.enableDaily}
            onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, enableDaily: checked }))}
          />
        </div>

        {/* Streak Maintenance */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Flame className="w-5 h-5 text-red-500" />
            <div>
              <Label className="font-medium">Streak Maintenance</Label>
              <p className="text-sm text-gray-500">Don't lose your learning streak!</p>
            </div>
          </div>
          <Switch
            checked={preferences.enableStreak}
            onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, enableStreak: checked }))}
          />
        </div>

        {/* Educational Tips */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-blue-500" />
            <div>
              <Label className="font-medium">ECG Tips</Label>
              <p className="text-sm text-gray-500">Daily educational content</p>
            </div>
          </div>
          <Switch
            checked={preferences.enableTips}
            onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, enableTips: checked }))}
          />
        </div>

        {/* Reminder Time */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-600" />
            <Label className="font-medium">Reminder Time</Label>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {timeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setPreferences(prev => ({ ...prev, reminderTime: option.value }))}
                className={`p-3 rounded-lg border-2 text-left transition-all ${
                  preferences.reminderTime === option.value
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{option.emoji}</span>
                  <span className="font-medium text-sm">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
          
          <p className="text-xs text-gray-500">
            Daily reminders will be sent at this time. Streak reminders come 2 hours later.
          </p>
        </div>

        {/* Streak Reminders */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🔥</span>
            <span className="font-medium">Streak Protection</span>
            <Badge variant="outline" className="text-xs">Duolingo-style</Badge>
          </div>
          <button
            onClick={() => setPreferences(prev => ({ ...prev, streakReminders: !prev.streakReminders }))}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              preferences.streakReminders ? 'bg-orange-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                preferences.streakReminders ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Achievement Notifications */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">🏆</span>
            <span className="font-medium">Achievement Alerts</span>
          </div>
          <button
            onClick={() => setPreferences(prev => ({ ...prev, achievementNotifications: !prev.achievementNotifications }))}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              preferences.achievementNotifications ? 'bg-yellow-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                preferences.achievementNotifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Weekly Progress */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">📊</span>
            <span className="font-medium">Weekly Progress Reports</span>
          </div>
          <button
            onClick={() => setPreferences(prev => ({ ...prev, weeklyProgress: !prev.weeklyProgress }))}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              preferences.weeklyProgress ? 'bg-green-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                preferences.weeklyProgress ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Timezone Info */}
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Globe className="w-4 h-4" />
            <span>Timezone: {preferences.timezone}</span>
          </div>
        </div>

        {/* Platform Info */}
        <div className="bg-blue-50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-sm text-blue-700">
            <Smartphone className="w-4 h-4" />
            <span>Push notifications work on both web and mobile</span>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex flex-col gap-2">
          <Button 
            onClick={savePreferences}
            disabled={isSaving}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isSaving ? (
              <>
                <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
                Saving...
              </>
            ) : (
              <>
                <Bell className="w-4 h-4 mr-2" />
                Save Notification Settings
              </>
            )}
          </Button>
          
          {lastSaved && (
            <p className="text-xs text-gray-500 text-center">
              Last saved: {lastSaved.toLocaleTimeString()}
            </p>
          )}
        </div>

        {/* Preview */}
        {preferences.dailyReminders && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <h4 className="font-medium text-green-800 mb-1">Preview:</h4>
            <p className="text-sm text-green-700">
              "📚 Daily ECG Practice Time! Complete today's tasks to maintain your streak. 
              You're doing amazing! 🎯"
            </p>
            <p className="text-xs text-green-600 mt-1">
              Will arrive daily at {timeOptions.find(t => t.value === preferences.reminderTime)?.label}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
