import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  setRating: (rating: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  setRating, 
  readonly = false, 
  size = 'md' 
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          className={`${sizeClasses[size]} transition-all duration-200 ${
            readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'
          }`}
          onClick={() => !readonly && setRating(star)}
          onMouseEnter={() => !readonly && setHoverRating(star)}
          onMouseLeave={() => !readonly && setHoverRating(0)}
        >
          <Star
            className={`w-full h-full transition-colors duration-200 ${
              star <= (hoverRating || rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300 hover:text-yellow-200'
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
