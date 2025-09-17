import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Play, Wrench, Newspaper, Camera, BookOpen, HeartPulse
} from 'lucide-react';
import { cn } from '@/lib/utils';

import CoursesTab from './CoursesTab';
import VideosTab from './VideosTab';
import NewsTab from './NewsTab';
import XrayTab from './XrayTab';
import ToolsTab from './ToolsTab';
import EcgLibraryTab from './EcgLibraryTab';

type TabType = 'videos' | 'tools' | 'news' | 'xray' | 'courses' | 'library';

const tabs = [
  { id: 'videos' as TabType, label: 'Videos', icon: Play },
  { id: 'tools' as TabType, label: 'Tools', icon: Wrench },
  { id: 'news' as TabType, label: 'News', icon: Newspaper },
  { id: 'xray' as TabType, label: 'X-Ray Vault', icon: Camera },
  { id: 'courses' as TabType, label: 'Courses', icon: BookOpen },
  { id: 'library' as TabType, label: 'ECG Library', icon: HeartPulse }
];

const ResourcesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('videos');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'videos': return <VideosTab />;
      case 'tools': return <ToolsTab />;
      case 'news': return <NewsTab />;
      case 'xray': return <XrayTab />;
      case 'courses': return <CoursesTab />;
      case 'library': return <EcgLibraryTab />;
      default: return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-4 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ECGkid Resources
        </h1>
      </div>
      <div className="flex flex-wrap gap-2 mb-4 p-2 bg-white/50 rounded-lg backdrop-blur-sm">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Button
              key={tab.id}
              data-tab={tab.id}
              variant={activeTab === tab.id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 transition-all duration-300 transform hover:scale-105',
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'hover:bg-blue-100 text-gray-700'
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </Button>
          );
        })}
      </div>
      <div className="pb-4 overflow-y-auto" style={{ minHeight: 300 }}>
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default ResourcesPage;