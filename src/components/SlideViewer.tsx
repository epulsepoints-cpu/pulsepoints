import React, { useState, useEffect, useRef } from 'react';
import styles from './SlideViewer.module.css';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  RotateCcw,
  Maximize2,
  ArrowRight,
  CheckCircle,
  Circle,
  Target,
  Lightbulb,
  AlertCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Slide, DiagramElement, StepData } from '@/types/learning';

// Helper Components for Interactive Slides
const AccordionItem: React.FC<{
  title: string;
  content: string;
  icon?: string;
  defaultOpen?: boolean;
}> = ({ title, content, icon, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 text-left flex items-center justify-between"
      >
        <div className="flex items-center space-x-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="font-medium text-gray-900">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-white border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  );
};

const TabsComponent: React.FC<{
  tabs: Array<{ title: string; content: string; icon?: string }>;
}> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 px-4 py-3 text-center font-medium transition-colors ${
              activeTab === index
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.title}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="p-4">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {tabs[activeTab]?.content}
        </p>
      </div>
    </div>
  );
};

interface SlideViewerProps {
  slides: Slide[];
  onComplete?: () => void;
  autoPlay?: boolean;
  className?: string;
}

export default function SlideViewer({ 
  slides, 
  onComplete, 
  autoPlay = false, 
  className = "" 
}: SlideViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [completedSlides, setCompletedSlides] = useState<Set<number>>(new Set());
  const [audioPlayed, setAudioPlayed] = useState<Set<number>>(new Set());
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const slideCount = slides.length;

  useEffect(() => {
    let interval: number;
    if (isPlaying && slides.length > 1) {
      interval = setInterval(() => {
        setCurrentSlide(prev => {
          const next = prev + 1;
          if (next >= slides.length) {
            setIsPlaying(false);
            // Auto-complete when slideshow ends
            if (onComplete) {
              setTimeout(() => onComplete(), 1000);
            }
            return prev;
          }
          return next;
        });
      }, 4000); // 4 seconds per slide
    }
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  useEffect(() => {
    setCompletedSlides(prev => new Set([...prev, currentSlide]));
  }, [currentSlide]);

  const nextSlide = () => {
    const currentSlideData = slides[currentSlide];
    
    // Audio enforcement: Check if current slide has audio and if it's been played
    if (currentSlideData.type === 'audio' && currentSlideData.audioUrl) {
      console.log('🎵 Audio slide detected:', currentSlideData.id);
      console.log('🎵 Audio played set:', audioPlayed);
      console.log('🎵 Current slide:', currentSlide);
      console.log('🎵 Has been played:', audioPlayed.has(currentSlide));
      
      if (!audioPlayed.has(currentSlide)) {
        // Show toast notification requiring audio playback
        alert('🎧 Please listen to the audio completely before proceeding to the next slide.');
        return; // Prevent advancing
      }
    }
    
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (onComplete) {
      onComplete();
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Audio handling functions
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  const handleAudioEnded = () => {
    console.log('🎵 Audio ended for slide:', currentSlide);
    setIsAudioPlaying(false);
    setAudioPlayed(prev => {
      const newSet = new Set([...prev, currentSlide]);
      console.log('🎵 Updated audioPlayed set:', newSet);
      return newSet;
    });
  };

  const handleAudioPlay = () => {
    setIsAudioPlaying(true);
  };

  const handleAudioPause = () => {
    setIsAudioPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const resetSlides = () => {
    setCurrentSlide(0);
    setCompletedSlides(new Set([0]));
    setIsPlaying(false);
  };

  if (!slides || slides.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <Circle className="mx-auto mb-4 h-12 w-12" />
        <p>No slides available</p>
      </div>
    );
  }

  const slide = slides[currentSlide];
  const progress = ((currentSlide + 1) / slides.length) * 100;

  const renderSlideContent = () => {
    switch (slide.type) {
      case 'steps':
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 px-2">{slide.title}</h2>
            {slide.imageUrl && (
              <div className="text-center mb-4 md:mb-6 px-2">
                <img 
                  src={slide.imageUrl} 
                  alt={slide.imageAlt || slide.title}
                  className="mx-auto rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl object-contain border max-h-48 sm:max-h-64 md:max-h-96"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE1MEMxNDcuMjM5IDEyNSAxNDUgMTI3LjIzOSAxNDUgMTMwVjE3MEMxNDUgMTcyLjc2MSAxNDcuMjM5IDE3NSAxNTAgMTc1SDE3NUMxNzcuNzYxIDE3NSAxODAgMTcyLjc2MSAxODAgMTcwVjEzMEMxODAgMTI3LjIzOSAxNzcuNzYxIDEyNSAxNzUgMTI1WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMjI1IDEyNUgyMDBDMTk3LjIzOSAxMjUgMTk1IDEyNy4yMzkgMTk1IDEzMFYxNzBDMTk1IDE3Mi43NjEgMTk3LjIzOSAxNzUgMjAwIDE3NUgyMjVDMjI3Ljc2MSAxNzUgMjMwIDE3Mi43NjEgMjMwIDE3MFYxMzBDMjMwIDEyNy4yMzkgMjI3Ljc2MSAxMjUgMjI1IDEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTI3NSAxMjVIMjUwQzI0Ny4yMzkgMTI1IDI0NSAxMjcuMjM5IDI0NSAxMzBWMTcwQzI0NSAxNzIuNzYxIDI0Ny4yMzkgMTc1IDI1MCAxNzVIMjc1QzI3Ny43NjEgMTc1IDI4MCAxNzIuNzYxIDI4MCAxNzBWMTMwQzI4MCAxMjcuMjM5IDI3Ny43NjEgMTI1IDI3NSAxMjVaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiPkVDRyBJbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD4KPHN2Zz4=';
                  }}
                />
                {slide.imageAlt && (
                  <p className="text-xs md:text-sm text-gray-600 mt-2 italic max-w-2xl mx-auto px-2">
                    {slide.imageAlt}
                  </p>
                )}
              </div>
            )}
            <div className="space-y-3 md:space-y-4 px-2">
              {slide.steps?.map((step, index) => {
                // Handle both string arrays and complex step objects
                if (typeof step === 'string') {
                  return (
                    <div key={index} className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-lg shadow-sm border">
                      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">{step}</p>
                      </div>
                    </div>
                  );
                } else {
                  // Handle complex step objects (legacy format)
                  return (
                    <div key={step.number} className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-lg shadow-sm border">
                      <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">
                        {step.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm md:text-base">{step.title}</h3>
                        <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );

      case 'comparison':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">{slide.title}</h2>
            {slide.imageUrl && (
              <div className="text-center mb-6">
                <img 
                  src={slide.imageUrl} 
                  alt={slide.imageAlt || slide.title}
                  className="mx-auto rounded-lg shadow-lg max-h-96 object-contain border"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE1MEMxNDcuMjM5IDEyNSAxNDUgMTI3LjIzOSAxNDUgMTMwVjE3MEMxNDUgMTcyLjc2MSAxNDcuMjM5IDE3NSAxNTAgMTc1SDE3NUMxNzcuNzYxIDE3NSAxODAgMTcyLjc2MSAxODAgMTcwVjEzMEMxODAgMTI3LjIzOSAxNzcuNzYxIDEyNSAxNzUgMTI1WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMjI1IDEyNUgyMDBDMTk3LjIzOSAxMjUgMTk1IDEyNy4yMzkgMTk1IDEzMFYxNzBDMTk1IDE3Mi43NjEgMTk3LjIzOSAxNzUgMjAwIDE3NUgyMjVDMjI3Ljc2MSAxNzUgMjMwIDE3Mi43NjEgMjMwIDE3MFYxMzBDMjMwIDEyNy4yMzkgMjI3Ljc2MSAxMjUgMjI1IDEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTI3NSAxMjVIMjUwQzI0Ny4yMzkgMTI1IDI0NSAxMjcuMjM5IDI0NSAxMzBWMTcwQzI0NSAxNzIuNzYxIDI0Ny4yMzkgMTc1IDI1MCAxNzVIMjc1QzI3Ny43NjEgMTc1IDI4MCAxNzIuNzYxIDI4MCAxNzBWMTMwQzI4MCAxMjcuMjM5IDI3Ny43NjEgMTI1IDI3NSAxMjVaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiPkVDRyBJbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD4KPHN2Zz4=';
                  }}
                />
                {slide.imageAlt && (
                  <p className="text-sm text-gray-600 mt-2 italic max-w-2xl mx-auto">
                    {slide.imageAlt}
                  </p>
                )}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-green-50 p-4 md:p-6 rounded-lg">
                <h3 className="font-bold text-green-800 mb-4 text-center text-sm md:text-base">
                  {slide.leftTitle || slide.comparison?.leftTitle}
                </h3>
                <ul className="space-y-2">
                  {(slide.leftContent || slide.comparison?.leftItems || []).map((item, index) => (
                    <li key={index} className="flex items-start space-x-2 text-green-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 p-4 md:p-6 rounded-lg">
                <h3 className="font-bold text-red-800 mb-4 text-center text-sm md:text-base">
                  {slide.rightTitle || slide.comparison?.rightTitle}
                </h3>
                <ul className="space-y-2">
                  {(slide.rightContent || slide.comparison?.rightItems || []).map((item, index) => (
                    <li key={index} className="flex items-start space-x-2 text-red-700">
                      <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'highlight':
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 px-2">{slide.title}</h2>
            {slide.imageUrl && (
              <div className="text-center mb-4 md:mb-6 px-2">
                <img 
                  src={slide.imageUrl} 
                  alt={slide.imageAlt || slide.title}
                  className="mx-auto rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl object-contain border max-h-48 sm:max-h-64 md:max-h-96"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE1MEMxNDcuMjM5IDEyNSAxNDUgMTI3LjIzOSAxNDUgMTMwVjE3MEMxNDUgMTcyLjc2MSAxNDcuMjM5IDE3NSAxNTAgMTc1SDE3NUMxNzcuNzYxIDE3NSAxODAgMTcyLjc2MSAxODAgMTcwVjEzMEMxODAgMTI3LjIzOSAxNzcuNzYxIDEyNSAxNzUgMTI1WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMjI1IDEyNUgyMDBDMTk3LjIzOSAxMjUgMTk1IDEyNy4yMzkgMTk1IDEzMFYxNzBDMTk1IDE3Mi43NjEgMTk3LjIzOSAxNzUgMjAwIDE3NUgyMjVDMjI3Ljc2MSAxNzUgMjMwIDE3Mi43NjEgMjMwIDE3MFYxMzBDMjMwIDEyNy4yMzkgMjI3Ljc2MSAxMjUgMjI1IDEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTI3NSAxMjVIMjUwQzI0Ny4yMzkgMTI1IDI0NSAxMjcuMjM5IDI0NSAxMzBWMTcwQzI0NSAxNzIuNzYxIDI0Ny4yMzkgMTc1IDI1MCAxNzVIMjc1QzI3Ny43NjEgMTc1IDI4MCAxNzIuNzYxIDI4MCAxNzBWMTMwQzI4MCAxMjcuMjM5IDI3Ny43NjEgMTI1IDI3NSAxMjVaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiPkVDRyBJbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD4KPHN2Zz4=';
                  }}
                />
                {slide.imageAlt && (
                  <p className="text-xs md:text-sm text-gray-600 mt-2 italic max-w-2xl mx-auto px-2">
                    {slide.imageAlt}
                  </p>
                )}
              </div>
            )}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 md:p-6 rounded-r-lg mx-2">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  {/* Handle both string content and array content */}
                  {typeof slide.content === 'string' ? (
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">{slide.content}</p>
                  ) : (
                    <div className="space-y-2">
                      {Array.isArray(slide.content) && slide.content.map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <Target className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="font-medium text-yellow-800 text-sm md:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Handle highlights array (legacy format) */}
                  {slide.highlights && (
                    <ul className="mt-4 space-y-2">
                      {slide.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Target className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="font-medium text-yellow-800 text-sm md:text-base">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 'diagram':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">{slide.title}</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-center text-gray-600 mb-6">{slide.content}</p>
              <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
                <p className="text-center text-gray-500">
                  [Interactive Diagram: {slide.diagram?.type}]
                </p>
                <p className="text-center text-sm text-gray-400 mt-2">
                  Diagram visualization coming soon
                </p>
              </div>
            </div>
          </div>
        );

      case 'audio':
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 px-2">{slide.title}</h2>
            {slide.imageUrl && (
              <div className="text-center mb-4 md:mb-6 px-2">
                <img 
                  src={slide.imageUrl} 
                  alt={slide.imageAlt || slide.title}
                  className="mx-auto rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl object-contain border max-h-48 sm:max-h-64 md:max-h-96"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE1MEMxNDcuMjM5IDEyNSAxNDUgMTI3LjIzOSAxNDUgMTMwVjE3MEMxNDUgMTcyLjc2MSAxNDcuMjM5IDE3NSAxNTAgMTc1SDE3NUMxNzcuNzYxIDE3NSAxODAgMTcyLjc2MSAxODAgMTcwVjEzMEMxODAgMTI3LjIzOSAxNzcuNzYxIDEyNSAxNzUgMTI1WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMjI1IDEyNUgyMDBDMTk3LjIzOSAxMjUgMTk1IDEyNy4yMzkgMTk1IDEzMFYxNzBDMTk1IDE3Mi43NjEgMTk3LjIzOSAxNzUgMjAwIDE3NUgyMjVDMjI3Ljc2MSAxNzUgMjMwIDE3Mi43NjEgMjMwIDE3MFYxMzBDMjMwIDEyNy4yMzkgMjI3Ljc2MSAxMjUgMjI1IDEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTI3NSAxMjVIMjUwQzI0Ny4yMzkgMTI1IDI0NSAxMjcuMjM5IDI0NSAxMzBWMTcwQzI0NSAxNzIuNzYxIDI0Ny4yMzkgMTc1IDI1MCAxNzVIMjc1QzI3Ny43NjEgMTc1IDI4MCAxNzIuNzYxIDI4MCAxNzBWMTMwQzI4MCAxMjcuMjM5IDI3Ny43NjEgMTI1IDI7NSAxMjVaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiPkF1ZGlvIFBsYWNlaG9sZGVyPC90ZXh0Pgo8L3N2Zz4=';
                  }}
                />
                {slide.imageAlt && (
                  <p className="text-xs md:text-sm text-gray-600 mt-2 italic max-w-2xl mx-auto px-2">
                    {slide.imageAlt}
                  </p>
                )}
              </div>
            )}
            <div className="text-center px-2">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
                {slide.content}
              </p>
              
              {/* Audio Player */}
              {slide.audioUrl && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200 max-w-md mx-auto">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <Button
                      onClick={toggleAudio}
                      className={`w-16 h-16 rounded-full ${
                        isAudioPlaying 
                          ? 'bg-red-500 hover:bg-red-600' 
                          : 'bg-blue-500 hover:bg-blue-600'
                      } text-white shadow-lg transition-all duration-200 transform hover:scale-105`}
                    >
                      {isAudioPlaying ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8 ml-1" />
                      )}
                    </Button>
                  </div>
                  
                  <audio
                    ref={audioRef}
                    src={slide.audioUrl}
                    onEnded={handleAudioEnded}
                    onPlay={handleAudioPlay}
                    onPause={handleAudioPause}
                    preload="metadata"
                    className="hidden"
                  />
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">
                      {isAudioPlaying ? '🎵 Playing...' : '🎧 Click to listen'}
                    </p>
                    {audioPlayed.has(currentSlide) && (
                      <p className="text-xs text-green-600 font-medium">
                        ✅ Audio completed - You can now proceed
                      </p>
                    )}
                    {!audioPlayed.has(currentSlide) && slide.audioUrl && (
                      <p className="text-xs text-orange-600 font-medium">
                        ⚠️ Please listen to the audio before proceeding
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        );

      case 'flashcard':
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 px-2">{slide.title}</h2>
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 md:p-8 rounded-xl shadow-lg text-white min-h-48 flex flex-col justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">{slide.icon || '💡'}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4">{slide.flashcardFront || slide.content}</h3>
                  {slide.flashcardBack && (
                    <div className="border-t border-white/30 pt-4 mt-4">
                      <p className="text-sm md:text-base opacity-90">{slide.flashcardBack}</p>
                    </div>
                  )}
                </div>
              </div>
              {slide.hint && (
                <p className="text-center text-sm text-gray-600 mt-4 italic">💡 {slide.hint}</p>
              )}
            </div>
          </div>
        );

      case 'accordion':
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 px-2">{slide.title}</h2>
            <div className="max-w-2xl mx-auto space-y-3">
              {slide.accordionItems?.map((item, index) => (
                <AccordionItem 
                  key={index}
                  title={item.title}
                  content={item.content}
                  icon={item.icon}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
            {slide.hint && (
              <p className="text-center text-sm text-gray-600 mt-6 italic">💡 {slide.hint}</p>
            )}
          </div>
        );

      case 'tabs':
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 px-2">{slide.title}</h2>
            <div className="max-w-3xl mx-auto">
              <TabsComponent tabs={slide.tabs || []} />
            </div>
            {slide.hint && (
              <p className="text-center text-sm text-gray-600 mt-6 italic">💡 {slide.hint}</p>
            )}
          </div>
        );

      case 'question':
        return <QuestionSlide slide={slide} onNext={nextSlide} />;

      default: // text, image
        return (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 px-2">{slide.title}</h2>
            {slide.imageUrl && (
              <div className="text-center mb-4 md:mb-6 px-2">
                <img 
                  src={slide.imageUrl} 
                  alt={slide.imageAlt || slide.title}
                  className="mx-auto rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl object-contain border max-h-48 sm:max-h-64 md:max-h-96"
                  onError={(e) => {
                    // Show placeholder if image fails to load
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNzUgMTI1SDE1MEMxNDcuMjM5IDEyNSAxNDUgMTI3LjIzOSAxNDUgMTMwVjE3MEMxNDUgMTcyLjc2MSAxNDcuMjM5IDE3NSAxNTAgMTc1SDE3NUMxNzcuNzYxIDE3NSAxODAgMTcyLjc2MSAxODAgMTcwVjEzMEMxODAgMTI3LjIzOSAxNzcuNzYxIDEyNSAxNzUgMTI1WiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMjI1IDEyNUgyMDBDMTk3LjIzOSAxMjUgMTk1IDEyNy4yMzkgMTk1IDEzMFYxNzBDMTk1IDE3Mi43NjEgMTk3LjIzOSAxNzUgMjAwIDE3NUgyMjVDMjI3Ljc2MSAxNzUgMjMwIDE3Mi43NjEgMjMwIDE3MFYxMzBDMjMwIDEyNy4yMzkgMjI3Ljc2MSAxMjUgMjI1IDEyNVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTI3NSAxMjVIMjUwQzI0Ny4yMzkgMTI1IDI0NSAxMjcuMjM5IDI0NSAxMzBWMTcwQzI0NSAxNzIuNzYxIDI0Ny4yMzkgMTc1IDI1MCAxNzVIMjc1QzI3Ny43NjEgMTc1IDI4MCAxNzIuNzYxIDI4MCAxNzBWMTMwQzI4MCAxMjcuMjM5IDI3Ny43NjEgMTI1IDI3NSAxMjVaIiBmaWxsPSIjOUNBM0FGIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiPkVDRyBJbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD4KPC9zdmc+';
                    e.currentTarget.alt = slide.imageAlt || 'ECG Image Placeholder';
                  }}
                />
                {slide.imageAlt && (
                  <p className="text-xs md:text-sm text-gray-600 mt-2 italic max-w-2xl mx-auto px-2">
                    {slide.imageAlt}
                  </p>
                )}
              </div>
            )}
            <div className="text-center px-2">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {slide.content}
              </p>
              {slide.bullets && (
                <div className="mt-4 md:mt-6 text-left max-w-2xl mx-auto">
                  <ul className="space-y-2">
                    {slide.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm md:text-base leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const delta = touchEndX.current - touchStartX.current;
      if (delta > 50) prevSlide();
      else if (delta < -50) nextSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Slide transition logic
  const getSlideClass = (index: number) => {
    if (index === currentSlide) return styles.slideCard + ' ' + styles.active;
    if (index === currentSlide - 1) return styles.slideCard + ' ' + styles.inactiveLeft;
    if (index === currentSlide + 1) return styles.slideCard + ' ' + styles.inactiveRight;
    return styles.slideCard;
  };

  // Full-viewport root
  return (
    <div className={`${styles.slideViewerRoot} ${className}`}> 
      {/* Slides */}
      {slides.map((slide, idx) => {
        if (Math.abs(idx - currentSlide) > 1) return null; // Only render prev/current/next
        return (
          <div
            key={idx}
            className={getSlideClass(idx)}
            style={{ background: slide.backgroundColor || '#fff', color: slide.textColor || '#1f2937' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.slideContent}>
              {idx === currentSlide && renderSlideContent()}
            </div>
          </div>
        );
      })}

      {/* Navigation */}
      <div className={styles.slideNav}>
        <Button variant="outline" onClick={prevSlide} disabled={currentSlide === 0} size="sm">
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button 
          onClick={nextSlide} 
          size="sm" 
          className={`
            ${slide.type === 'audio' && slide.audioUrl && !audioPlayed.has(currentSlide)
              ? 'bg-gray-400 hover:bg-gray-500 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
            } text-white
          `}
          disabled={slide.type === 'audio' && slide.audioUrl && !audioPlayed.has(currentSlide)}
        >
          {slide.type === 'audio' && slide.audioUrl && !audioPlayed.has(currentSlide) ? (
            <>🎧 Listen First</>
          ) : (
            <>{currentSlide === slideCount - 1 ? 'Done' : 'Next'} <ChevronRight className="w-5 h-5" /></>
          )}
        </Button>
      </div>
      {/* Dots */}
      <div className={styles.slideDots}>
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={styles.slideDot + (idx === currentSlide ? ' ' + styles.active : '')}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}

// Helper component for creating slides
export const SlideBuilder = {
  createTextSlide: (id: string, title: string, content: string, bullets?: string[]): Slide => ({
    id,
    title,
    content,
    type: 'text',
    layout: 'centered',
    bullets,
    animation: 'fade'
  }),

  createHighlightSlide: (id: string, title: string, content: string, highlights: string[]): Slide => ({
    id,
    title,
    content,
    type: 'highlight',
    layout: 'centered',
    highlights,
    animation: 'fade'
  }),

  createStepsSlide: (id: string, title: string, steps: StepData[]): Slide => ({
    id,
    title,
    content: '',
    type: 'steps',
    layout: 'full',
    steps,
    animation: 'slide'
  }),

  createComparisonSlide: (
    id: string, 
    title: string, 
    leftTitle: string, 
    rightTitle: string,
    leftItems: string[],
    rightItems: string[]
  ): Slide => ({
    id,
    title,
    content: '',
    type: 'comparison',
    layout: 'full',
    comparison: {
      leftTitle,
      rightTitle,
      leftItems,
      rightItems
    },
    animation: 'slide'
  }),

  createQuestionSlide: (id: string, title: string, content: string): Slide => ({
    id,
    title,
    content,
    type: 'question',
    layout: 'centered',
    backgroundColor: '#eff6ff',
    animation: 'zoom'
  })
};

// Interactive Question Slide Component
interface QuestionSlideProps {
  slide: Slide;
  onNext: () => void;
}

function QuestionSlide({ slide, onNext }: QuestionSlideProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    onNext();
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="bg-blue-50 p-4 md:p-6 lg:p-8 rounded-lg mx-2">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-blue-900 mb-4 text-center">{slide.title}</h2>
        <p className="text-base md:text-lg text-blue-800 mb-4 md:mb-6 text-center px-2">{slide.question}</p>
        
        <div className="space-y-2 md:space-y-3 max-w-2xl mx-auto">
          {slide.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showExplanation}
              className={`w-full p-3 md:p-4 text-left rounded-lg border-2 transition-all ${
                selectedAnswer === index
                  ? selectedAnswer === slide.correctAnswer
                    ? 'border-green-500 bg-green-50 text-green-800'
                    : 'border-red-500 bg-red-50 text-red-800'
                  : showExplanation && index === slide.correctAnswer
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : 'border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-start space-x-2 md:space-x-3">
                <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-sm md:text-base leading-relaxed">{option}</span>
                {showExplanation && index === slide.correctAnswer && (
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 ml-auto flex-shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="mt-4 md:mt-6 p-3 md:p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start space-x-2 md:space-x-3">
              <Lightbulb className="w-4 h-4 md:w-5 md:h-5 text-yellow-600 mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 mb-2 text-sm md:text-base">
                  {selectedAnswer === slide.correctAnswer ? 'Correct!' : 'Incorrect'}
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{slide.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {slide.hint && !showExplanation && (
          <div className="mt-3 md:mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-3 h-3 md:w-4 md:h-4 text-yellow-600 mt-1 flex-shrink-0" />
              <p className="text-xs md:text-sm text-yellow-800 leading-relaxed">{slide.hint}</p>
            </div>
          </div>
        )}

        <div className="mt-4 md:mt-6 text-center">
          {showExplanation ? (
            <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-sm md:text-base">
              Continue <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
            </Button>
          ) : (
            <p className="text-xs md:text-sm text-blue-600">Select an answer to see the explanation</p>
          )}
        </div>
      </div>
    </div>
  );
}
