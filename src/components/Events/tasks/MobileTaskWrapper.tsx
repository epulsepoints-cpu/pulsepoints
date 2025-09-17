import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';

interface MobileTaskWrapperProps {
  children: React.ReactNode;
  onBack?: () => void;
  title?: string;
  showBackButton?: boolean;
  showCloseButton?: boolean;
}

export const MobileTaskWrapper: React.FC<MobileTaskWrapperProps> = ({
  children,
  onBack,
  title,
  showBackButton = false,
  showCloseButton = false
}) => {
  const handleBackClick = (event?: React.MouseEvent) => {
    console.log('Back button clicked, onBack function:', onBack);
    if (onBack) {
      // Prevent event bubbling and ensure single execution
      event?.preventDefault();
      event?.stopPropagation();
      onBack();
    }
  };

  return (
    <div className="mobile-task-fullscreen">
      {/* Mobile Header - Only show when needed */}
      {((showBackButton && onBack) || showCloseButton || title) && (
        <div className="mobile-task-header">
          <div className="flex items-center justify-between p-3">
            {showBackButton && onBack && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleBackClick}
                className="mobile-back-button flex items-center justify-center min-w-[44px] min-h-[44px] touch-manipulation"
                style={{ 
                  touchAction: 'manipulation',
                  WebkitTouchCallout: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
            )}
            
            {title && (
              <h1 className="mobile-task-title">{title}</h1>
            )}
            
            {showCloseButton && onBack && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleBackClick}
                className="mobile-close-button"
              >
                <X className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        </div>
      )}

      {/* Task Content */}
      <div className="mobile-task-content">
        {children}
      </div>
    </div>
  );
};

export default MobileTaskWrapper;
