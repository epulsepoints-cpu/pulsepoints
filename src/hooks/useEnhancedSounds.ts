import { useCallback } from 'react';

/**
 * Enhanced UI Sounds Hook with comprehensive sound effects library
 * Includes medical, educational, and UI interaction sounds
 */
export const useEnhancedSounds = () => {
  const playSound = useCallback((soundFile: string, volume: number = 0.5) => {
    try {
      const audio = new Audio(`/sounds/${soundFile}`);
      audio.volume = volume;
      audio.play().catch(error => {
        console.warn(`Failed to play sound ${soundFile}:`, error);
      });
    } catch (error) {
      console.warn(`Error creating audio for ${soundFile}:`, error);
    }
  }, []);

  // UI Interaction Sounds
  const playClickSound = useCallback(() => {
    playSound('effects/click.mp3', 0.3);
  }, [playSound]);

  const playSwooshSound = useCallback(() => {
    playSound('effects/swoosh.mp3', 0.4);
  }, [playSound]);

  const playPopSound = useCallback(() => {
    playSound('effects/pop.mp3', 0.4);
  }, [playSound]);

  const playButtonHover = useCallback(() => {
    playSound('effects/button-hover.mp3', 0.2);
  }, [playSound]);

  // Medical Sounds
  const playHeartbeat = useCallback(() => {
    playSound('medical/heartbeat.mp3', 0.6);
  }, [playSound]);

  const playHeartMonitorBeep = useCallback(() => {
    playSound('medical/heart-monitor-beep.mp3', 0.5);
  }, [playSound]);

  const playPulseSound = useCallback(() => {
    playSound('medical/pulse.mp3', 0.5);
  }, [playSound]);

  const playStethoscopeSound = useCallback(() => {
    playSound('medical/stethoscope.mp3', 0.6);
  }, [playSound]);

  const playECGMachineSound = useCallback(() => {
    playSound('medical/ecg-machine.mp3', 0.4);
  }, [playSound]);

  // Success and Achievement Sounds
  const playSuccessChime = useCallback(() => {
    playSound('effects/success-chime.mp3', 0.6);
  }, [playSound]);

  const playLevelUpSound = useCallback(() => {
    playSound('effects/level-up.mp3', 0.7);
  }, [playSound]);

  const playAchievementUnlock = useCallback(() => {
    playSound('effects/achievement-unlock.mp3', 0.8);
  }, [playSound]);

  const playXPGain = useCallback(() => {
    playSound('effects/xp-gain.mp3', 0.5);
  }, [playSound]);

  const playGemCollect = useCallback(() => {
    playSound('effects/gem-collect.mp3', 0.6);
  }, [playSound]);

  const playStarEarn = useCallback(() => {
    playSound('effects/star-earn.mp3', 0.5);
  }, [playSound]);

  // Error and Feedback Sounds
  const playErrorBuzz = useCallback(() => {
    playSound('effects/error-buzz.mp3', 0.5);
  }, [playSound]);

  const playWrongAnswer = useCallback(() => {
    playSound('effects/wrong-answer.mp3', 0.4);
  }, [playSound]);

  const playWarningBeep = useCallback(() => {
    playSound('effects/warning-beep.mp3', 0.6);
  }, [playSound]);

  // Educational Sounds
  const playBookFlip = useCallback(() => {
    playSound('effects/book-flip.mp3', 0.3);
  }, [playSound]);

  const playWriting = useCallback(() => {
    playSound('effects/writing.mp3', 0.4);
  }, [playSound]);

  const playQuizStart = useCallback(() => {
    playSound('effects/quiz-start.mp3', 0.6);
  }, [playSound]);

  const playTimerTick = useCallback(() => {
    playSound('effects/timer-tick.mp3', 0.3);
  }, [playSound]);

  const playTimerEnd = useCallback(() => {
    playSound('effects/timer-end.mp3', 0.7);
  }, [playSound]);

  // Notification Sounds
  const playNotificationBell = useCallback(() => {
    playSound('effects/notification-bell.mp3', 0.5);
  }, [playSound]);

  const playMessagePop = useCallback(() => {
    playSound('effects/message-pop.mp3', 0.4);
  }, [playSound]);

  const playAlertSound = useCallback(() => {
    playSound('effects/alert.mp3', 0.6);
  }, [playSound]);

  // Ambient and Background Sounds
  const playAmbientHospital = useCallback(() => {
    playSound('medical/ambient-hospital.mp3', 0.3);
  }, [playSound]);

  const playTypingKeyboard = useCallback(() => {
    playSound('effects/typing-keyboard.mp3', 0.2);
  }, [playSound]);

  // Celebration and Party Sounds
  const playConfetti = useCallback(() => {
    playSound('effects/confetti.mp3', 0.7);
  }, [playSound]);

  const playTrumpetFanfare = useCallback(() => {
    playSound('effects/trumpet-fanfare.mp3', 0.8);
  }, [playSound]);

  const playCelebrationBells = useCallback(() => {
    playSound('effects/celebration-bells.mp3', 0.6);
  }, [playSound]);

  // Game-specific Sounds
  const playCardFlip = useCallback(() => {
    playSound('effects/card-flip.mp3', 0.4);
  }, [playSound]);

  const playPowerUp = useCallback(() => {
    playSound('effects/power-up.mp3', 0.6);
  }, [playSound]);

  const playBonusCollect = useCallback(() => {
    playSound('effects/bonus-collect.mp3', 0.7);
  }, [playSound]);

  const playStreakBonus = useCallback(() => {
    playSound('effects/streak-bonus.mp3', 0.6);
  }, [playSound]);

  // Legacy compatibility (maintains existing API)
  const playCorrectSound = useCallback(() => {
    playSuccessChime();
  }, [playSuccessChime]);

  const playErrorSound = useCallback(() => {
    playErrorBuzz();
  }, [playErrorBuzz]);

  const playRewardSound = useCallback(() => {
    playXPGain();
  }, [playXPGain]);

  const playHeartMonitorSound = useCallback(() => {
    playHeartMonitorBeep();
  }, [playHeartMonitorBeep]);

  const playBrandSound = useCallback(() => {
    playTrumpetFanfare();
  }, [playTrumpetFanfare]);

  return {
    // Core UI sounds
    playClickSound,
    playSwooshSound,
    playPopSound,
    playButtonHover,
    
    // Medical sounds
    playHeartbeat,
    playHeartMonitorBeep,
    playPulseSound,
    playStethoscopeSound,
    playECGMachineSound,
    playAmbientHospital,
    
    // Success and achievements
    playSuccessChime,
    playLevelUpSound,
    playAchievementUnlock,
    playXPGain,
    playGemCollect,
    playStarEarn,
    
    // Errors and feedback
    playErrorBuzz,
    playWrongAnswer,
    playWarningBeep,
    
    // Educational
    playBookFlip,
    playWriting,
    playQuizStart,
    playTimerTick,
    playTimerEnd,
    
    // Notifications
    playNotificationBell,
    playMessagePop,
    playAlertSound,
    
    // Celebrations
    playConfetti,
    playTrumpetFanfare,
    playCelebrationBells,
    
    // Game mechanics
    playCardFlip,
    playPowerUp,
    playBonusCollect,
    playStreakBonus,
    playTypingKeyboard,
    
    // Legacy compatibility
    playCorrectSound,
    playErrorSound,
    playRewardSound,
    playHeartMonitorSound,
    playBrandSound,
    
    // Raw sound player
    playSound
  };
};

export default useEnhancedSounds;