import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Calculator } from 'lucide-react';

interface ControlledMeasurementInputProps {
  stepId: string;
  step: {
    title: string;
    instruction: string;
    hint?: string;
    target: number;
    tolerance: number;
    unit: string;
    explanation?: string;
  };
  onSubmit: (stepId: string, value: number) => void;
  isSubmitted?: boolean;
  submittedValue?: number;
  disabled?: boolean;
}

export const ControlledMeasurementInput: React.FC<ControlledMeasurementInputProps> = ({
  stepId,
  step,
  onSubmit,
  isSubmitted = false,
  submittedValue,
  disabled = false
}) => {
  // Local state for input value - this persists through parent re-renders
  const [inputValue, setInputValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState(false);
  
  // Ref to maintain focus
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Memoized handlers to prevent unnecessary re-renders
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and one decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setInputValue(value);
    }
  }, []);
  
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  
  const handleSubmit = useCallback(() => {
    const numValue = Number(inputValue);
    if (numValue > 0) {
      onSubmit(stepId, numValue);
    }
  }, [inputValue, stepId, onSubmit]);
  
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue && !isSubmitted) {
      handleSubmit();
    }
  }, [inputValue, isSubmitted, handleSubmit]);
  
  // Check if the submitted value is within range
  const isCorrect = useCallback(() => {
    if (submittedValue === undefined) return false;
    return Math.abs(submittedValue - step.target) <= step.tolerance;
  }, [submittedValue, step.target, step.tolerance]);
  
  // Determine border and background color based on state
  const getInputStyle = useCallback(() => {
    if (isSubmitted) {
      return isCorrect() 
        ? 'border-green-500 bg-green-50 text-green-800' 
        : 'border-red-500 bg-red-50 text-red-800';
    }
    if (isFocused) {
      return 'border-blue-500 bg-white ring-2 ring-blue-200';
    }
    return 'border-gray-300 bg-white hover:border-gray-400';
  }, [isSubmitted, isCorrect, isFocused]);
  
  // Only clear input when step actually changes (not on every render)
  useEffect(() => {
    if (isSubmitted && submittedValue !== undefined) {
      setInputValue(submittedValue.toString());
    }
  }, [isSubmitted, submittedValue]);
  
  return (
    <div className="space-y-4">
      {/* Step Information */}
      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="text-blue-900 font-bold text-lg mb-2">{step.title}</h3>
        <p className="text-blue-800 font-medium mb-2">{step.instruction}</p>
        {step.hint && <p className="text-blue-700 text-sm">{step.hint}</p>}
        <p className="text-blue-600 text-xs mt-2">
          Expected range: {step.target - step.tolerance} - {step.target + step.tolerance} {step.unit}
        </p>
      </div>
      
      {/* Input Field */}
      <div className="flex items-center space-x-3">
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            inputMode="decimal"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyPress={handleKeyPress}
            placeholder="Enter measurement"
            disabled={disabled || isSubmitted}
            className={`
              w-full px-4 py-3 border-2 rounded-lg text-lg font-medium
              transition-all duration-200 ease-in-out
              focus:outline-none
              disabled:cursor-not-allowed disabled:opacity-70
              ${getInputStyle()}
            `}
            autoComplete="off"
            spellCheck="false"
          />
          
          {/* Result Icon */}
          {isSubmitted && (
            <div className="absolute right-3 top-3 pointer-events-none">
              {isCorrect() ? (
                <CheckCircle className="w-6 h-6 text-green-600" />
              ) : (
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✗</span>
                </div>
              )}
            </div>
          )}
        </div>
        
        <span className="text-gray-600 font-medium min-w-[3rem]">{step.unit}</span>
      </div>

      {/* Feedback */}
      {isSubmitted && submittedValue !== undefined && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${isCorrect() ? 'bg-green-100' : 'bg-red-100'}`}
        >
          <p className={`font-medium mb-2 ${isCorrect() ? 'text-green-800' : 'text-red-800'}`}>
            {isCorrect() 
              ? '✅ Correct! Your measurement is accurate.'
              : `❌ Your answer (${submittedValue} ${step.unit}) is outside the expected range.`
            }
          </p>
          <p className="text-gray-700 text-sm">{step.explanation || 'Measurement recorded successfully.'}</p>
        </motion.div>
      )}
      
      {/* Submit Button */}
      {!isSubmitted && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={!inputValue || inputValue === '0' || disabled}
          className={`
            w-full py-3 rounded-lg font-medium transition-all duration-200
            ${inputValue && inputValue !== '0' && !disabled
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          <Calculator className="w-5 h-5 inline mr-2" />
          Submit Measurement
        </motion.button>
      )}
    </div>
  );
};

export default ControlledMeasurementInput;
