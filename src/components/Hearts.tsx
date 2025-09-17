import React from 'react';
import { Heart } from 'lucide-react';

interface HeartsProps {
  current: number;
  max?: number;
  className?: string;
  showNumber?: boolean;
}

export default function Hearts({ current, max = 5, className = '', showNumber = true }: HeartsProps) {
  const hearts = [];
  
  // Create heart icons
  for (let i = 0; i < max; i++) {
    const isFilled = i < current;
    hearts.push(
      <Heart
        key={i}
        className={`w-5 h-5 ${
          isFilled 
            ? 'fill-red-500 text-red-500' 
            : 'fill-gray-300 text-gray-300'
        } transition-colors duration-200`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex gap-0.5">
        {hearts}
      </div>
      {showNumber && (
        <span className="text-sm font-medium text-gray-700 ml-1">
          {current}/{max}
        </span>
      )}
    </div>
  );
}
