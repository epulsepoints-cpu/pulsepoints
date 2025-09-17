import React, { useState, useEffect } from 'react';
import { Badge, Rank } from '../types/game';
import { Trophy, Star, Crown, Zap, Shield, Award, Diamond, Share, Twitter, Facebook, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BadgeSystemProps {
  userRank: Rank;
  userBadges: Badge[];
  onBadgeUnlocked?: (badge: Badge) => void;
}

const RANK_BADGES: { [key in Rank]: Badge } = {
  'ECGKid Intern': {
    id: 'intern-badge',
    name: 'ECG Explorer',
    description: 'Welcome to the ECG learning journey!',
    icon: '🩺',
    rarity: 'common',
    rank: 'ECGKid Intern'
  },
  'ECGKid Resident': {
    id: 'resident-badge',
    name: 'Heart Apprentice',
    description: 'Learning the basics of cardiac rhythms',
    icon: '💚',
    rarity: 'common',
    rank: 'ECGKid Resident'
  },
  'ECG Cadet': {
    id: 'cadet-badge',
    name: 'Rhythm Rookie',
    description: 'Mastering fundamental ECG patterns',
    icon: '⚡',
    rarity: 'rare',
    rank: 'ECG Cadet'
  },
  'Rhythm Specialist': {
    id: 'specialist-badge',
    name: 'Wave Warrior',
    description: 'Advanced pattern recognition specialist',
    icon: '🏆',
    rarity: 'rare',
    rank: 'Rhythm Specialist'
  },
  'Wave Virtuoso': {
    id: 'virtuoso-badge',
    name: 'Cardiac Virtuoso',
    description: 'Elite ECG interpretation skills',
    icon: '👑',
    rarity: 'epic',
    rank: 'Wave Virtuoso'
  },
  'ECG Grandmaster': {
    id: 'grandmaster-badge',
    name: 'ECG Legend',
    description: 'Grandmaster of cardiac diagnostics',
    icon: '💎',
    rarity: 'epic',
    rank: 'ECG Grandmaster'
  },
  'Cardiac Supreme': {
    id: 'supreme-badge',
    name: 'Cardiac Supreme',
    description: 'Ultimate ECG mastery achieved',
    icon: '🌟',
    rarity: 'legendary',
    rank: 'Cardiac Supreme'
  }
};

const BadgeUnlockedAnimation: React.FC<{ badge: Badge; onClose: () => void }> = ({ badge, onClose }) => {
  const [showSocialShare, setShowSocialShare] = useState(false);

  useEffect(() => {
    if (!showSocialShare) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [onClose, showSocialShare]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400 border-gray-400';
      case 'rare': return 'text-blue-400 border-blue-400';
      case 'epic': return 'text-purple-400 border-purple-400';
      case 'legendary': return 'text-yellow-400 border-yellow-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const shareText = `🎉 Just unlocked the "${badge.name}" badge in ECG Master! ${badge.description} #ECGMaster #MedicalEducation #Achievement`;
  const shareUrl = window.location.origin;

  const handleShare = (platform: 'twitter' | 'facebook' | 'copy') => {
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        // You could add a toast notification here
        break;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-8 text-center max-w-sm mx-4 animate-scaleIn">
        <div className="animate-bounce mb-4">
          <div className={`text-6xl mb-2 ${getRarityColor(badge.rarity)}`}>
            {badge.icon}
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2 animate-slideUp">
          Badge Unlocked!
        </h2>
        
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getRarityColor(badge.rarity)} border`}>
          {badge.rarity.toUpperCase()}
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 animate-slideUp delay-100">
          {badge.name}
        </h3>
        
        <p className="text-gray-300 mb-4 animate-slideUp delay-200">
          {badge.description}
        </p>

        {!showSocialShare ? (
          <div className="space-y-3">
            <button
              onClick={() => setShowSocialShare(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-colors animate-slideUp delay-300 flex items-center gap-2 mx-auto"
            >
              <Share className="w-4 h-4" />
              Share Achievement
            </button>
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors animate-slideUp delay-300 block mx-auto"
            >
              Awesome!
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-gray-300 mb-3">Share your achievement:</p>
            <div className="flex justify-center gap-3">
              <Button
                onClick={() => handleShare('twitter')}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                size="sm"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => handleShare('facebook')}
                className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full"
                size="sm"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => handleShare('copy')}
                className="bg-gray-600 hover:bg-gray-700 text-white p-2 rounded-full"
                size="sm"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <button
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors block mx-auto"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const BadgeDisplay: React.FC<{ badge: Badge; isUnlocked: boolean }> = ({ badge, isUnlocked }) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-400 bg-gray-100';
      case 'rare': return 'border-blue-400 bg-blue-100';
      case 'epic': return 'border-purple-400 bg-purple-100';
      case 'legendary': return 'border-yellow-400 bg-yellow-100';
      default: return 'border-gray-400 bg-gray-100';
    }
  };

  return (
    <div className={`relative p-4 rounded-lg border-2 transition-all duration-300 ${
      isUnlocked 
        ? `${getRarityColor(badge.rarity)} transform hover:scale-105` 
        : 'border-gray-300 bg-gray-50 opacity-50'
    }`}>
      <div className="text-center">
        <div className={`text-3xl mb-2 ${isUnlocked ? '' : 'grayscale'}`}>
          {badge.icon}
        </div>
        <h4 className={`font-semibold ${isUnlocked ? 'text-gray-800' : 'text-gray-500'}`}>
          {badge.name}
        </h4>
        <p className={`text-xs ${isUnlocked ? 'text-gray-600' : 'text-gray-400'}`}>
          {badge.description}
        </p>
        {!isUnlocked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export const BadgeSystem: React.FC<BadgeSystemProps> = ({ userRank, userBadges, onBadgeUnlocked }) => {
  const [showUnlockedAnimation, setShowUnlockedAnimation] = useState<Badge | null>(null);

  useEffect(() => {
    const currentRankBadge = RANK_BADGES[userRank];
    const hasBadge = userBadges.some(badge => badge.id === currentRankBadge.id);
    
    if (!hasBadge && onBadgeUnlocked) {
      setShowUnlockedAnimation(currentRankBadge);
      onBadgeUnlocked(currentRankBadge);
    }
  }, [userRank, userBadges, onBadgeUnlocked]);

  const RANK_ORDER: Rank[] = [
    'ECGKid Intern',
    'ECGKid Resident', 
    'ECG Cadet',
    'Rhythm Specialist',
    'Wave Virtuoso',
    'ECG Grandmaster',
    'Cardiac Supreme'
  ];

  const currentRankIndex = RANK_ORDER.indexOf(userRank);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <Award className="w-6 h-6 mr-2 text-yellow-500" />
          Your Badge Collection
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {RANK_ORDER.map((rank, index) => {
            const badge = RANK_BADGES[rank];
            const isUnlocked = index <= currentRankIndex;
            return (
              <BadgeDisplay
                key={badge.id}
                badge={badge}
                isUnlocked={isUnlocked}
              />
            );
          })}
        </div>
      </div>

      {showUnlockedAnimation && (
        <BadgeUnlockedAnimation
          badge={showUnlockedAnimation}
          onClose={() => setShowUnlockedAnimation(null)}
        />
      )}
    </div>
  );
};

export default BadgeSystem;
