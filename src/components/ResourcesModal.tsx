import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  X, Play, Wrench, Newspaper, Camera, BookOpen, HeartPulse
} from 'lucide-react';
import { cn } from '@/lib/utils';

import CoursesTab from './CoursesTab';
import VideosTab from './VideosTab';
import NewsTab from './NewsTab';
import XrayTab from './XrayTab';
import ToolsTab from './ToolsTab';
import EcgLibraryTab from './EcgLibraryTab';

interface ResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'videos' | 'tools' | 'news' | 'xray' | 'courses' | 'library';

const tabs = [
  { id: 'videos' as TabType, label: 'Videos', icon: Play },
  { id: 'tools' as TabType, label: 'Tools', icon: Wrench },
  { id: 'news' as TabType, label: 'News', icon: Newspaper },
  { id: 'xray' as TabType, label: 'X-Ray Vault', icon: Camera },
  { id: 'courses' as TabType, label: 'Courses', icon: BookOpen },
  { id: 'library' as TabType, label: 'ECG Library', icon: HeartPulse }
];

const ResourcesModal: React.FC<ResourcesModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('videos');

  // 🛑 Lock scroll on modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          'max-w-6xl max-h-[95vh] p-0 rounded-xl shadow-2xl backdrop-blur-xl overflow-hidden border border-white/20',
          'bg-white/80 dark:bg-gray-900/80 backdrop-saturate-150'
        )}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }}
      >
        <DialogHeader className="p-4 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ECGkid Resources
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 hover:bg-red-100 hover:text-red-600"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="px-4">
          <div className="flex flex-wrap gap-2 mb-4 p-2 bg-white/50 rounded-lg backdrop-blur-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
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
        </div>

        <div className="px-4 pb-4 overflow-y-auto max-h-[75vh] custom-scroll">
          {renderActiveTab()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResourcesModal;
