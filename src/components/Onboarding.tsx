import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import { ChevronRight, Play, Trophy, Target, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import fun1 from "@/assets/lottie/fun1.json";
import fun2 from "@/assets/lottie/fun2.json";
import fun3 from "@/assets/lottie/fun3.json";

const steps = [
  {
    animation: fun1,
    icon: Heart,
    title: "Master ECG Skills",
    desc: "Learn to read electrocardiograms like a pro with our interactive learning platform",
    color: "from-blue-500 to-purple-600",
    bgColor: "from-blue-50 to-purple-50",
  },
  {
    animation: fun2,
    icon: Target,
    title: "Daily Challenges",
    desc: "Complete daily tasks, quizzes, and video lessons to build your expertise step by step",
    color: "from-green-500 to-teal-600",
    bgColor: "from-green-50 to-teal-50",
  },
  {
    animation: fun3,
    icon: Trophy,
    title: "Earn Rewards",
    desc: "Collect XP, gems, and achievements as you progress through your ECG learning journey",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
  },
];

interface OnboardingProps {
  onFinish: () => void;
}

const AUTO_SCROLL_INTERVAL = 4000; // 4 seconds

const Onboarding: React.FC<OnboardingProps> = ({ onFinish }) => {
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      if (step < steps.length - 1) {
        setStep(step + 1);
      } else {
        onFinish();
      }
    }, AUTO_SCROLL_INTERVAL);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [step, onFinish]);

  const goToNext = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsAnimating(true);
    
    setTimeout(() => {
      if (step < steps.length - 1) {
        setStep(step + 1);
      } else {
        onFinish();
      }
      setIsAnimating(false);
    }, 300);
  };

  const goToStep = (index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setStep(index);
  };

  const currentStep = steps[step];
  const IconComponent = currentStep.icon;

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br ${currentStep.bgColor} transition-all duration-1000 ease-in-out overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        {/* Progress Bar */}
        <div className="w-full max-w-md mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm font-medium text-gray-600">Step {step + 1} of {steps.length}</span>
            <span className="text-xs sm:text-sm font-medium text-gray-600">{Math.round(((step + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${currentStep.color} transition-all duration-500 ease-out`}
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Main Card */}
        <Card className={`w-full max-w-lg mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm transform transition-all duration-500 ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
          <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
            {/* Icon */}
            <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r ${currentStep.color} flex items-center justify-center shadow-lg`}>
              <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>

            {/* Animation */}
            <div className="mb-6 sm:mb-8">
              <Lottie
                animationData={currentStep.animation}
                className="w-36 h-36 sm:w-48 sm:h-48 mx-auto"
                loop={true}
              />
            </div>

            {/* Title */}
            <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${currentStep.color} bg-clip-text text-transparent`}>
              {currentStep.title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-sm mx-auto px-2">
              {currentStep.desc}
            </p>

            {/* Action Button */}
            <Button 
              onClick={goToNext}
              size="lg"
              className={`w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r ${currentStep.color} hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg font-semibold`}
            >
              {step < steps.length - 1 ? (
                <>
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </>
              ) : (
                <>
                  Let's Start!
                  <Play className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Step Indicators */}
        <div className="flex justify-center gap-3 mt-6 sm:mt-8">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => goToStep(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 touch-target ${
                i === step 
                  ? `bg-gradient-to-r ${currentStep.color} scale-125 shadow-lg` 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Skip Button */}
        <Button
          variant="ghost"
          onClick={onFinish}
          className="mt-4 sm:mt-6 text-gray-500 hover:text-gray-700 transition-colors text-sm sm:text-base"
        >
          Skip Intro
        </Button>
      </div>

      {/* Floating Elements - Hidden on small screens */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden hidden sm:block">
        <Sparkles className="absolute top-20 left-10 w-6 h-6 text-purple-300 animate-pulse" />
        <Sparkles className="absolute top-32 right-16 w-4 h-4 text-blue-300 animate-pulse delay-1000" />
        <Sparkles className="absolute bottom-40 left-20 w-5 h-5 text-pink-300 animate-pulse delay-2000" />
        <Sparkles className="absolute bottom-20 right-10 w-4 h-4 text-green-300 animate-pulse delay-500" />
      </div>
    </div>
  );
};

export default Onboarding;