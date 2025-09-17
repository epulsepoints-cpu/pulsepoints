import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { X, Bell, Volume2, Clock, Target, Brain, Award } from 'lucide-react';

interface StudySettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StudyPreferences {
  notifications: boolean;
  soundEffects: boolean;
  dailyGoal: number;
  studyReminders: boolean;
  reminderTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  autoAdvance: boolean;
  showHints: boolean;
  practiceMode: boolean;
}

const StudySettings: React.FC<StudySettingsProps> = ({ isOpen, onClose }) => {
  const [preferences, setPreferences] = useState<StudyPreferences>({
    notifications: true,
    soundEffects: true,
    dailyGoal: 15,
    studyReminders: true,
    reminderTime: '18:00',
    difficulty: 'intermediate',
    autoAdvance: false,
    showHints: true,
    practiceMode: false
  });

  // Load preferences from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ecgkid-study-preferences');
    if (saved) {
      setPreferences(JSON.parse(saved));
    }
  }, []);

  // Save preferences to localStorage
  const savePreferences = (newPrefs: StudyPreferences) => {
    setPreferences(newPrefs);
    localStorage.setItem('ecgkid-study-preferences', JSON.stringify(newPrefs));
  };

  const updatePreference = <K extends keyof StudyPreferences>(
    key: K,
    value: StudyPreferences[K]
  ) => {
    const newPrefs = { ...preferences, [key]: value };
    savePreferences(newPrefs);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-bold text-blue-600 flex items-center gap-2">
            <Brain className="w-6 h-6" />
            Study Settings
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Notifications Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Bell className="w-5 h-5 text-blue-500" />
              Notifications
            </div>
            
            <div className="space-y-3 ml-7">
              <div className="flex items-center justify-between">
                <Label htmlFor="notifications" className="text-sm font-medium">
                  Enable notifications
                </Label>
                <Switch
                  id="notifications"
                  checked={preferences.notifications}
                  onCheckedChange={(checked) => updatePreference('notifications', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="reminders" className="text-sm font-medium">
                  Daily study reminders
                </Label>
                <Switch
                  id="reminders"
                  checked={preferences.studyReminders}
                  onCheckedChange={(checked) => updatePreference('studyReminders', checked)}
                />
              </div>
              
              {preferences.studyReminders && (
                <div className="flex items-center justify-between">
                  <Label htmlFor="reminder-time" className="text-sm font-medium">
                    Reminder time
                  </Label>
                  <input
                    type="time"
                    id="reminder-time"
                    value={preferences.reminderTime}
                    onChange={(e) => updatePreference('reminderTime', e.target.value)}
                    className="px-3 py-1 border rounded-md text-sm"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Audio Settings */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Volume2 className="w-5 h-5 text-green-500" />
              Audio
            </div>
            
            <div className="ml-7">
              <div className="flex items-center justify-between">
                <Label htmlFor="sound-effects" className="text-sm font-medium">
                  Sound effects
                </Label>
                <Switch
                  id="sound-effects"
                  checked={preferences.soundEffects}
                  onCheckedChange={(checked) => updatePreference('soundEffects', checked)}
                />
              </div>
            </div>
          </div>

          {/* Study Goals */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Target className="w-5 h-5 text-orange-500" />
              Daily Goal
            </div>
            
            <div className="ml-7 space-y-3">
              <div className="space-y-2">
                <Label className="text-sm font-medium">
                  Daily study target: {preferences.dailyGoal} minutes
                </Label>
                <Slider
                  value={[preferences.dailyGoal]}
                  onValueChange={([value]) => updatePreference('dailyGoal', value)}
                  max={120}
                  min={5}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5 min</span>
                  <span>2 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Preferences */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Award className="w-5 h-5 text-purple-500" />
              Learning Preferences
            </div>
            
            <div className="ml-7 space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="difficulty" className="text-sm font-medium">
                  Preferred difficulty
                </Label>
                <Select
                  value={preferences.difficulty}
                  onValueChange={(value: 'beginner' | 'intermediate' | 'advanced') => 
                    updatePreference('difficulty', value)
                  }
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-advance" className="text-sm font-medium">
                  Auto-advance after correct answers
                </Label>
                <Switch
                  id="auto-advance"
                  checked={preferences.autoAdvance}
                  onCheckedChange={(checked) => updatePreference('autoAdvance', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="show-hints" className="text-sm font-medium">
                  Show learning hints
                </Label>
                <Switch
                  id="show-hints"
                  checked={preferences.showHints}
                  onCheckedChange={(checked) => updatePreference('showHints', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="practice-mode" className="text-sm font-medium">
                  Practice mode (no penalties)
                </Label>
                <Switch
                  id="practice-mode"
                  checked={preferences.practiceMode}
                  onCheckedChange={(checked) => updatePreference('practiceMode', checked)}
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            <Button onClick={onClose} className="flex-1 bg-blue-600 hover:bg-blue-700">
              Save Settings
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                const defaultPrefs: StudyPreferences = {
                  notifications: true,
                  soundEffects: true,
                  dailyGoal: 15,
                  studyReminders: true,
                  reminderTime: '18:00',
                  difficulty: 'intermediate',
                  autoAdvance: false,
                  showHints: true,
                  practiceMode: false
                };
                savePreferences(defaultPrefs);
              }}
            >
              Reset to Default
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudySettings;
