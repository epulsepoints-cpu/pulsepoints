import { useCallback } from 'react';
/**
 * Custom hook for playing various UI sounds
 * Handles click sounds, swoosh sounds, and heart monitor sounds
 */
export const useUISounds = () => {
    const playSound = useCallback((soundFile, volume = 0.5) => {
        try {
            const audio = new Audio(`/${soundFile}`);
            audio.volume = volume;
            audio.play().catch(error => {
                console.warn(`Failed to play sound ${soundFile}:`, error);
            });
        }
        catch (error) {
            console.warn(`Error creating audio for ${soundFile}:`, error);
        }
    }, []);
    const playClickSound = useCallback(() => {
        playSound('click.mp3', 0.3);
    }, [playSound]);
    const playSwooshSound = useCallback(() => {
        playSound('swoosh.mp3', 0.4);
    }, [playSound]);
    const playHeartMonitorSound = useCallback(() => {
        playSound('heartmonitor.mp3', 0.6);
    }, [playSound]);
    // For achievement rewards and XP/gem sounds
    const playRewardSound = useCallback(() => {
        // This will use the existing xp-gem-win.mp3 sound
        playSound('xp-gem-win.mp3', 0.7);
    }, [playSound]);
    // New brand sound for logo reveal/login
    const playBrandSound = useCallback(() => {
        playSound('brand.mp3', 0.6);
    }, [playSound]);
    // New correct answer sound for quizzes
    const playCorrectSound = useCallback(() => {
        playSound('correct.mp3', 0.5);
    }, [playSound]);
    // New error sound for wrong answers
    const playErrorSound = useCallback(() => {
        playSound('error.mp3', 0.5);
    }, [playSound]);
    return {
        playClickSound,
        playSwooshSound,
        playHeartMonitorSound,
        playRewardSound,
        playBrandSound,
        playCorrectSound,
        playErrorSound,
        playSound
    };
};
export default useUISounds;
