import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, ZoomIn } from 'lucide-react';
import EnhancedImage from './EnhancedImage';

interface QuizLayoutProps {
  title: string;
  question: string;
  imageUrl?: string;
  imageAlt?: string;
  options: string[];
  selectedAnswer?: number;
  showResult?: boolean;
  isCorrect?: boolean;
  explanation?: string;
  category?: string;
  points?: number;
  onAnswerSelect: (index: number) => void;
  onSubmit?: () => void;
  onImageZoom?: (imageUrl: string) => void;
  className?: string;
  useEnhancedImage?: boolean; // Flag to use EnhancedImage component
}

export const QuizLayoutFixed: React.FC<QuizLayoutProps> = ({
  title,
  question,
  imageUrl,
  imageAlt,
  options,
  selectedAnswer,
  showResult = false,
  isCorrect = false,
  explanation,
  category,
  points,
  onAnswerSelect,
  onSubmit,
  onImageZoom,
  className = "",
  useEnhancedImage = true
}) => {
  return (
    <div className={`flex flex-col h-full bg-gray-50 ${className}`}>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-4 pb-8">
          {/* Quiz Header Card */}
          <Card className="bg-white shadow-sm border border-gray-200">
            <CardHeader className="pb-4">
              {/* Category and Points */}
              {(category || points) && (
                <div className="flex justify-between items-center mb-3">
                  {category && (
                    <Badge 
                      variant="outline" 
                      className="text-xs px-3 py-1 bg-blue-50 text-blue-700 border-blue-200"
                    >
                      {category}
                    </Badge>
                  )}
                  {points && (
                    <Badge className="bg-purple-600 hover:bg-purple-700 text-xs px-3 py-1">
                      {points} pts
                    </Badge>
                  )}
                </div>
              )}
              
              {/* Title */}
              <CardTitle className="text-lg sm:text-xl leading-tight text-gray-800 mb-2">
                {title}
              </CardTitle>
              
              {/* Question */}
              {question && (
                <div className="mt-2">
                  <p className="text-base text-gray-700 leading-relaxed font-medium">
                    {question}
                  </p>
                </div>
              )}
            </CardHeader>
          </Card>

          {/* ECG Image Section - Separated from options */}
          {imageUrl && (
            <Card className="bg-white shadow-sm border border-gray-200">
              <CardContent className="p-4">
                <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-inner">
                  {useEnhancedImage ? (
                    <div className="min-h-[200px] max-h-[300px] flex items-center justify-center">
                      <EnhancedImage
                        src={imageUrl}
                        alt={imageAlt || "ECG or medical diagram"}
                        className="w-full bg-white rounded-lg border object-contain"
                        downloadFileName={`quiz-image.png`}
                        enableZoom={true}
                        enableRotation={true}
                        enableFullscreen={true}
                        enableDownload={true}
                      />
                    </div>
                  ) : (
                    <div 
                      className="relative cursor-pointer group"
                      onClick={() => onImageZoom?.(imageUrl)}
                    >
                      <img 
                        src={imageUrl}
                        alt={imageAlt || "ECG or medical diagram"}
                        className="w-full h-auto object-contain bg-white rounded-lg"
                        style={{
                          maxWidth: '100%',
                          minHeight: '200px',
                          maxHeight: '300px'
                        }}
                      />
                      
                      {/* Zoom indicator */}
                      <div className="absolute top-3 right-3 bg-gray-700/80 text-white p-2 rounded-full opacity-80 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Image caption */}
                <div className="mt-3">
                  <p className="text-xs text-gray-500 text-center">
                    📊 {useEnhancedImage ? 'Use image controls to zoom and analyze' : 'Tap image to zoom'} • Analyze the ECG pattern carefully
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Answer Options Section - Completely separated from image */}
          <Card className="bg-white shadow-sm border border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-gray-700">
                Choose your answer:
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="flex flex-col gap-3">
                {options.map((option, index) => (
                  <Button
                    key={index}
                    variant={showResult ? 
                      (index === selectedAnswer ? "default" : "outline") : 
                      "outline"
                    }
                    className={`w-full justify-start text-left h-auto py-4 px-4 transition-all duration-200 ${
                      showResult && index === selectedAnswer ? 
                        (isCorrect ? 'bg-green-600 hover:bg-green-700 border-green-600 text-white' : 
                         'bg-red-600 hover:bg-red-700 border-red-600 text-white') : 
                        selectedAnswer === index ?
                          'bg-purple-100 border-purple-300 text-purple-700' :
                          'hover:bg-gray-50 hover:border-gray-300 active:scale-[0.98] border-gray-200'
                    }`}
                    onClick={() => onAnswerSelect(index)}
                    disabled={showResult}
                    style={{
                      minHeight: '56px',
                      borderRadius: '12px',
                      boxShadow: selectedAnswer === index && !showResult ? 
                        '0 2px 8px rgba(147, 51, 234, 0.15)' : 
                        '0 1px 3px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div className="flex items-center gap-3 w-full">
                      {/* Option Label */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        showResult && index === selectedAnswer ? 
                          'bg-white/20 text-white border border-white/30' :
                          selectedAnswer === index ?
                            'bg-purple-600 text-white border-2 border-purple-600' :
                            'bg-gray-100 text-gray-600 border-2 border-gray-300'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      
                      {/* Option Text */}
                      <div className="flex-1 text-left">
                        <p className={`text-sm leading-relaxed font-medium break-words ${
                          showResult && index === selectedAnswer ? 'text-white' : 'text-gray-700'
                        }`}>
                          {option}
                        </p>
                      </div>
                      
                      {/* Correct/Incorrect indicator */}
                      {showResult && index === selectedAnswer && (
                        <div className="flex-shrink-0">
                          {isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-white" />
                          ) : (
                            <X className="w-5 h-5 text-white" />
                          )}
                        </div>
                      )}
                    </div>
                  </Button>
                ))}
              </div>

              {/* Submit Button - Only show if answer selected and not showing result */}
              {selectedAnswer !== undefined && !showResult && onSubmit && (
                <div className="mt-4">
                  <Button 
                    onClick={onSubmit}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 font-bold rounded-lg shadow-md"
                    style={{ minHeight: '48px' }}
                  >
                    Submit Answer
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Result/Explanation Section */}
          {showResult && explanation && (
            <Card className={`shadow-sm border-2 ${
              isCorrect 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}>
              <CardContent className="p-4">
                <div className="flex flex-col gap-3">
                  {/* Result Header */}
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <X className="w-6 h-6 text-red-600" />
                    )}
                    <h3 className={`text-lg font-bold ${
                      isCorrect ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {isCorrect ? 'Excellent!' : 'Not quite right!'}
                    </h3>
                  </div>
                  
                  {/* Explanation */}
                  <div className={`p-3 rounded-lg ${
                    isCorrect ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <p className={`text-sm leading-relaxed ${
                      isCorrect ? 'text-green-800' : 'text-red-800'
                    }`}>
                      <span className="font-semibold">Explanation: </span>
                      {explanation}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizLayoutFixed;
