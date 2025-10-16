import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Settings, Globe, Palette, Database, Shield, Info } from 'lucide-react';

interface AppSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AppPreferences {
  theme: 'light' | 'dark' | 'system';
  language: 'en' | 'es' | 'fr' | 'de';
  animations: boolean;
  dataCollection: boolean;
  crashReporting: boolean;
  autoSync: boolean;
  offlineMode: boolean;
  cacheSize: 'small' | 'medium' | 'large';
}

const AppSettings: React.FC<AppSettingsProps> = ({ isOpen, onClose }) => {
  const [preferences, setPreferences] = useState<AppPreferences>({
    theme: 'system',
    language: 'en',
    animations: true,
    dataCollection: true,
    crashReporting: true,
    autoSync: true,
    offlineMode: false,
    cacheSize: 'medium'
  });

  // Load preferences from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('e-pulsepoints-app-preferences');
    if (saved) {
      setPreferences(JSON.parse(saved));
    }
  }, []);

  // Save preferences to localStorage
  const savePreferences = (newPrefs: AppPreferences) => {
    setPreferences(newPrefs);
    localStorage.setItem('e-pulsepoints-app-preferences', JSON.stringify(newPrefs));
  };

  const updatePreference = <K extends keyof AppPreferences>(
    key: K,
    value: AppPreferences[K]
  ) => {
    const newPrefs = { ...preferences, [key]: value };
    savePreferences(newPrefs);
  };

  const clearAppData = () => {
    if (confirm('Are you sure you want to clear all app data? This action cannot be undone.')) {
      localStorage.clear();
      alert('App data cleared. Please restart the app.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-bold text-blue-600 flex items-center gap-2">
            <Settings className="w-6 h-6" />
            App Settings
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Appearance Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Palette className="w-5 h-5 text-purple-500" />
              Appearance
            </div>
            
            <div className="space-y-3 ml-7">
              <div className="flex items-center justify-between">
                <Label htmlFor="theme" className="text-sm font-medium">
                  Theme
                </Label>
                <Select
                  value={preferences.theme}
                  onValueChange={(value: 'light' | 'dark' | 'system') => 
                    updatePreference('theme', value)
                  }
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system">System</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="animations" className="text-sm font-medium">
                  Enable animations
                </Label>
                <Switch
                  id="animations"
                  checked={preferences.animations}
                  onCheckedChange={(checked) => updatePreference('animations', checked)}
                />
              </div>
            </div>
          </div>

          {/* Language Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Globe className="w-5 h-5 text-blue-500" />
              Language & Region
            </div>
            
            <div className="ml-7">
              <div className="flex items-center justify-between">
                <Label htmlFor="language" className="text-sm font-medium">
                  Language
                </Label>
                <Select
                  value={preferences.language}
                  onValueChange={(value: 'en' | 'es' | 'fr' | 'de') => 
                    updatePreference('language', value)
                  }
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Data & Privacy Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Shield className="w-5 h-5 text-green-500" />
              Data & Privacy
            </div>
            
            <div className="ml-7 space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="data-collection" className="text-sm font-medium">
                  Anonymous usage analytics
                </Label>
                <Switch
                  id="data-collection"
                  checked={preferences.dataCollection}
                  onCheckedChange={(checked) => updatePreference('dataCollection', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="crash-reporting" className="text-sm font-medium">
                  Crash reporting
                </Label>
                <Switch
                  id="crash-reporting"
                  checked={preferences.crashReporting}
                  onCheckedChange={(checked) => updatePreference('crashReporting', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="auto-sync" className="text-sm font-medium">
                  Auto-sync progress
                </Label>
                <Switch
                  id="auto-sync"
                  checked={preferences.autoSync}
                  onCheckedChange={(checked) => updatePreference('autoSync', checked)}
                />
              </div>
            </div>
          </div>

          {/* Storage Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Database className="w-5 h-5 text-orange-500" />
              Storage
            </div>
            
            <div className="ml-7 space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="offline-mode" className="text-sm font-medium">
                  Offline mode
                </Label>
                <Switch
                  id="offline-mode"
                  checked={preferences.offlineMode}
                  onCheckedChange={(checked) => updatePreference('offlineMode', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="cache-size" className="text-sm font-medium">
                  Cache size
                </Label>
                <Select
                  value={preferences.cacheSize}
                  onValueChange={(value: 'small' | 'medium' | 'large') => 
                    updatePreference('cacheSize', value)
                  }
                >
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (50MB)</SelectItem>
                    <SelectItem value="medium">Medium (200MB)</SelectItem>
                    <SelectItem value="large">Large (500MB)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* App Info Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
              <Info className="w-5 h-5 text-gray-500" />
              App Information
            </div>
            
            <div className="ml-7 space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Version:</span>
                <span>1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span>Build:</span>
                <span>2025.01.26</span>
              </div>
              <div className="flex justify-between">
                <span>Platform:</span>
                <span>Capacitor</span>
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="pt-4 border-t">
            <Button 
              variant="destructive" 
              onClick={clearAppData}
              className="w-full"
            >
              Clear All App Data
            </Button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              This will reset all settings and clear cached data
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t">
            <Button onClick={onClose} className="flex-1 bg-blue-600 hover:bg-blue-700">
              Save Settings
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                const defaultPrefs: AppPreferences = {
                  theme: 'system',
                  language: 'en',
                  animations: true,
                  dataCollection: true,
                  crashReporting: true,
                  autoSync: true,
                  offlineMode: false,
                  cacheSize: 'medium'
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

export default AppSettings;
