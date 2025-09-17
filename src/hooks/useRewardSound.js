import { useRef, useEffect } from 'react';
export const useRewardSound = () => {
    const audioRef = useRef(null);
    // Initialize audio for reward sound
    useEffect(() => {
        // Create audio element for reward sound
        const audioElement = new Audio();
        // Try multiple sound sources (fallback strategy)
        const soundSources = [
            '/xp-gem-win.mp3',
            '/sounds/xp-gem-win.mp3',
            '/sounds/reward.mp3',
        ];
        let currentSourceIndex = 0;
        const tryNextSource = () => {
            if (currentSourceIndex < soundSources.length) {
                audioElement.src = soundSources[currentSourceIndex];
                audioElement.load();
                currentSourceIndex++;
            }
        };
        audioElement.addEventListener('canplaythrough', () => {
            console.log('✅ Reward sound loaded successfully');
        });
        audioElement.addEventListener('error', () => {
            console.log(`❌ Failed to load reward sound: ${soundSources[currentSourceIndex - 1]}`);
            tryNextSource();
        });
        audioElement.volume = 0.4; // Set volume to 40%
        audioElement.preload = 'auto';
        // Start loading the first source
        tryNextSource();
        audioRef.current = audioElement;
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);
    // Play reward sound
    const playRewardSound = () => {
        console.log('💎 Playing reward sound...');
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                    console.log('✅ Reward sound played successfully');
                })
                    .catch(error => {
                    console.log('❌ Reward sound failed:', error);
                    playFallbackRewardBeep();
                });
            }
            else {
                // Fallback if play() doesn't return a promise
                playFallbackRewardBeep();
            }
        }
        else {
            console.log('❌ No reward audio element, using fallback');
            playFallbackRewardBeep();
        }
    };
    // Fallback reward beep function (cheerful sound)
    const playFallbackRewardBeep = () => {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator1 = audioContext.createOscillator();
            const oscillator2 = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator1.connect(gainNode);
            oscillator2.connect(gainNode);
            gainNode.connect(audioContext.destination);
            // Create a cheerful chord (C major)
            oscillator1.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator2.frequency.setValueAtTime(659.25, audioContext.currentTime); // E5
            gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
            oscillator1.start(audioContext.currentTime);
            oscillator1.stop(audioContext.currentTime + 0.5);
            oscillator2.start(audioContext.currentTime);
            oscillator2.stop(audioContext.currentTime + 0.5);
            console.log('✅ Fallback reward beep played');
        }
        catch (audioError) {
            console.log('❌ Could not create fallback reward sound:', audioError);
        }
    };
    return {
        playRewardSound
    };
};
