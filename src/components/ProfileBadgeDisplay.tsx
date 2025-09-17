import React from 'react';
import { Badge, Rank } from '../types/game';
import { Crown, Star, Trophy, Shield } from 'lucide-react';

interface ProfileBadgeDisplayProps {
  userRank: Rank;
  className?: string;
}

const RANK_BADGE_CONFIG: { [key in Rank]: { icon: string; color: string; bgColor: string; borderColor: string } } = {
  'ECGKid Intern': {
    icon: '🩺',
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-300'
  },
  'ECGKid Resident': {
    icon: '💚',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-300'
  },
  'ECG Cadet': {
    icon: '⚡',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-300'
  },
  'Rhythm Specialist': {
    icon: '🏆',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-300'
  },
  'Wave Virtuoso': {
    icon: '👑',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
    borderColor: 'border-indigo-300'
  },
  'ECG Grandmaster': {
    icon: '💎',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-300'
  },
  'Cardiac Supreme': {
    icon: '🌟',
    color: 'text-yellow-600',
    bgColor: 'bg-gradient-to-br from-yellow-200 to-orange-200',
    borderColor: 'border-yellow-400'
  }
};

export const ProfileBadgeDisplay: React.FC<ProfileBadgeDisplayProps> = ({ userRank, className = '' }) => {
  const badgeConfig = RANK_BADGE_CONFIG[userRank] || RANK_BADGE_CONFIG['ECGKid Intern']; // Fallback to default

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className={`
        relative flex items-center justify-center w-12 h-12 rounded-full border-2 
        ${badgeConfig.bgColor} ${badgeConfig.borderColor}
        transform transition-all duration-300 hover:scale-110 hover:shadow-lg
      `}>
        <span className="text-2xl">{badgeConfig.icon}</span>
        
        {/* Rank tier indicator */}
        {userRank === 'Cardiac Supreme' && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
            <Crown className="w-2 h-2 text-yellow-800" />
          </div>
        )}
        
        {(userRank === 'ECG Grandmaster' || userRank === 'Wave Virtuoso') && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-400 rounded-full border-2 border-white flex items-center justify-center">
            <Star className="w-2 h-2 text-white" />
          </div>
        )}
      </div>
      
      <div className="flex flex-col">
        <span className={`font-semibold text-sm ${badgeConfig.color}`}>
          {userRank}
        </span>
        <span className="text-xs text-gray-500">
          Rank Badge
        </span>
      </div>
    </div>
  );
};

// Compact version for smaller spaces
export const CompactProfileBadge: React.FC<ProfileBadgeDisplayProps> = ({ userRank, className = '' }) => {
  const badgeConfig = RANK_BADGE_CONFIG[userRank] || RANK_BADGE_CONFIG['ECGKid Intern']; // Fallback to default

  return (
    <div className={`
      inline-flex items-center justify-center w-8 h-8 rounded-full border-2 
      ${badgeConfig.bgColor} ${badgeConfig.borderColor}
      transform transition-all duration-300 hover:scale-110
      ${className}
    `} title={userRank}>
      <span className="text-lg">{badgeConfig.icon}</span>
    </div>
  );
};

// Large display version for profile pages
export const LargeProfileBadge: React.FC<ProfileBadgeDisplayProps> = ({ userRank, className = '' }) => {
  const badgeConfig = RANK_BADGE_CONFIG[userRank] || RANK_BADGE_CONFIG['ECGKid Intern']; // Fallback to default

  return (
    <div className={`text-center ${className}`}>
      <div className={`
        relative inline-flex items-center justify-center w-20 h-20 rounded-full border-4 
        ${badgeConfig.bgColor} ${badgeConfig.borderColor}
        transform transition-all duration-300 hover:scale-105 hover:shadow-xl
        mb-3
      `}>
        <span className="text-4xl">{badgeConfig.icon}</span>
        
        {/* Premium effects for highest ranks */}
        {userRank === 'Cardiac Supreme' && (
          <>
            <div className="absolute inset-0 rounded-full animate-pulse bg-yellow-200 opacity-20"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
              <Crown className="w-3 h-3 text-white" />
            </div>
          </>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className={`font-bold text-lg ${badgeConfig.color}`}>
          {userRank}
        </h3>
        <p className="text-sm text-gray-500">
          Elite Rank Achieved
        </p>
      </div>
    </div>
  );
};

export default ProfileBadgeDisplay;
