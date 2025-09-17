import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import Confetti from 'react-confetti';
import { 
  CheckCircle, 
  Crown, 
  Trophy, 
  Flame, 
  Star, 
  Sparkles,
  Award,
  Zap,
  Heart
} from 'lucide-react';

interface CelebrationProps {
  type: 'correct' | 'perfect' | 'streak' | 'levelUp' | 'lessonComplete' | 'perfectLesson';
  isVisible: boolean;
  onComplete: () => void;
  score?: number;
  streak?: number;
}

const CelebrationAnimation: React.FC<CelebrationProps> = ({ 
  type, 
  isVisible,
  onComplete,
  score = 0,
  streak = 0
}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Show confetti for major celebrations
      if (['perfect', 'levelUp', 'lessonComplete', 'perfectLesson'].includes(type)) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }

      // Auto-close after duration
      const duration = type === 'correct' ? 1500 : 3000;
      const timer = setTimeout(onComplete, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, type, onComplete]);

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    scale: isVisible ? 1 : 0,
    config: { tension: 300, friction: 30 }
  });

  const celebrations = {
    correct: {
      icon: <CheckCircle className="w-16 h-16 text-green-500" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      title: "Correct!",
      subtitle: `+${Math.max(10, score)} points`,
      particles: 'green'
    },
    perfect: {
      icon: <Crown className="w-20 h-20 text-yellow-500" />,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200", 
      textColor: "text-yellow-700",
      title: "Perfect!",
      subtitle: "Flawless execution!",
      particles: 'gold'
    },
    streak: {
      icon: <Flame className="w-18 h-18 text-orange-500" />,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-700",
      title: `${streak} Streak!`,
      subtitle: "You're on fire!",
      particles: 'orange'
    },
    levelUp: {
      icon: <Star className="w-20 h-20 text-purple-500" />,
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700",
      title: "Level Up!",
      subtitle: "Amazing progress!",
      particles: 'purple'
    },
    lessonComplete: {
      icon: <Trophy className="w-24 h-24 text-blue-500" />,
      bgColor: "bg-blue-50", 
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      title: "Lesson Complete!",
      subtitle: `Final Score: ${score}`,
      particles: 'blue'
    },
    perfectLesson: {
      icon: <Award className="w-24 h-24 text-pink-500" />,
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200", 
      textColor: "text-pink-700",
      title: "Perfect Lesson!",
      subtitle: "Incredible achievement!",
      particles: 'rainbow'
    }
  };

  const celebration = celebrations[type];

  const getConfettiColors = () => {
    switch (celebration.particles) {
      case 'green': return ['#10B981', '#34D399', '#6EE7B7'];
      case 'gold': return ['#F59E0B', '#FBBF24', '#FCD34D'];
      case 'orange': return ['#F97316', '#FB923C', '#FDBA74'];
      case 'purple': return ['#8B5CF6', '#A78BFA', '#C4B5FD'];
      case 'blue': return ['#3B82F6', '#60A5FA', '#93C5FD'];
      case 'rainbow': return ['#EF4444', '#F97316', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6'];
      default: return ['#10B981', '#3B82F6', '#8B5CF6'];
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {showConfetti && (
            <Confetti
              width={windowSize.width}
              height={windowSize.height}
              numberOfPieces={type === 'perfectLesson' ? 200 : 100}
              recycle={false}
              colors={getConfettiColors()}
              gravity={0.3}
            />
          )}
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <animated.div
              style={springProps}
              className={`${celebration.bgColor} ${celebration.borderColor} border-4 rounded-3xl p-8 text-center shadow-2xl max-w-sm mx-4 relative overflow-hidden`}
            >
              {/* Main Icon with Bounce Animation */}
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1.1, 1]
                }}
                transition={{ 
                  duration: 0.8, 
                  repeat: type === 'correct' ? 1 : 2,
                  ease: "easeInOut"
                }}
                className="mb-4"
              >
                {celebration.icon}
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-3xl font-bold ${celebration.textColor} mb-2`}
              >
                {celebration.title}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-lg ${celebration.textColor} opacity-80`}
              >
                {celebration.subtitle}
              </motion.p>

              {/* Floating Sparkles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360],
                    y: [-10, -30, -50]
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                >
                  <Sparkles className={`w-4 h-4 ${celebration.textColor}`} />
                </motion.div>
              ))}

              {/* Pulse Ring Effect */}
              <motion.div
                className={`absolute inset-0 rounded-3xl ${celebration.borderColor} border-2`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </animated.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CelebrationAnimation;
