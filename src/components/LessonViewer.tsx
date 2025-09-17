import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  ArrowRight,
  CheckCircle, 
  Clock, 
  BookOpen,
  ExternalLink,
  Play,
  Image,
  Monitor,
  Trophy,
  Gem
} from 'lucide-react';
import { Lesson, LearningModule } from '@/types/learning';
import { toast } from '@/components/ui/use-toast';
import { useGameState } from '@/hooks/useGameState';
import SlideViewer from './SlideViewer';
import LessonRatingPopup from './LessonRatingPopup';
import styles from './LessonViewer.module.css';

// Helper function to extract YouTube video ID from URL
function extractYouTubeId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
}

// Helper function to validate YouTube URL
function isValidYouTubeUrl(url: string): boolean {
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
  return youtubeRegex.test(url);
}

interface LessonViewerProps {
  lesson: Lesson;
  module: LearningModule;
  onBack: () => void;
  onNextLesson?: () => void;
  onPreviousLesson?: () => void;
  onComplete: () => void;
  isCompleted?: boolean;
  lessonNumber: number;
  totalLessons: number;
}

export default function LessonViewer({
  lesson,
  module,
  onBack,
  onNextLesson,
  onPreviousLesson,
  onComplete,
  isCompleted = false,
  lessonNumber,
  totalLessons
}: LessonViewerProps) {
  const { completeLesson, checkAndUnlockNextLesson, refreshModuleProgress } = useGameState();
  const [currentSection, setCurrentSection] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showSlides, setShowSlides] = useState(false);
  const [slidesCompleted, setSlidesCompleted] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [isFirstAttempt, setIsFirstAttempt] = useState(true);
  
  // Enhanced progress tracking
  const [lessonProgress, setLessonProgress] = useState(0);
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set());
  const [viewedIntroduction, setViewedIntroduction] = useState(false);
  const [viewedSummary, setViewedSummary] = useState(false);
  const [completedSlides, setCompletedSlides] = useState(false);
  const [sectionViewTime, setSectionViewTime] = useState<Record<number, number>>({});
  const [isLessonCompleted, setIsLessonCompleted] = useState(false);
  
  // Rating popup state
  const [showRatingPopup, setShowRatingPopup] = useState(false);
  const [lessonScore, setLessonScore] = useState(0);
  const [earnedXP, setEarnedXP] = useState(0);
  const [earnedGems, setEarnedGems] = useState(0);
  const [actualTimeSpent, setActualTimeSpent] = useState(0);

  // Calculate total progress components
  const totalProgressComponents = () => {
    let total = 0;
    total += 1; // Introduction
    total += lesson.content.sections.length; // Sections
    total += 1; // Summary
    if (lesson.content.slides && lesson.content.slides.length > 0) {
      total += 1; // Slides
    }
    return total;
  };

  // Update progress whenever components change
  useEffect(() => {
    let completedComponents = 0;
    
    if (viewedIntroduction) completedComponents++;
    if (completedSlides && lesson.content.slides?.length) completedComponents++;
    if (viewedSummary) completedComponents++;
    completedComponents += completedSections.size;
    
    const newProgress = Math.round((completedComponents / totalProgressComponents()) * 100);
    setLessonProgress(newProgress);
    
    // Auto-complete lesson when 100% is reached
    if (newProgress >= 100 && !isLessonCompleted) {
      setTimeout(() => {
        handleCompleteLesson();
      }, 1000); // Small delay for better UX
    }
  }, [viewedIntroduction, completedSlides, viewedSummary, completedSections, isLessonCompleted]);

  // Track time spent on each section
  useEffect(() => {
    if (hasStarted && currentSection >= 0) {
      const startTime = Date.now();
      return () => {
        const endTime = Date.now();
        const timeSpent = endTime - startTime;
        setSectionViewTime(prev => ({
          ...prev,
          [currentSection]: (prev[currentSection] || 0) + timeSpent
        }));
      };
    }
  }, [currentSection, hasStarted]);

  useEffect(() => {
    if (hasStarted && startTime === 0) {
      setStartTime(Date.now());
      // Mark introduction as viewed when lesson starts
      setViewedIntroduction(true);
    }
  }, [hasStarted, startTime]);

  const handleStartLesson = () => {
    setHasStarted(true);
    setStartTime(Date.now());
    setViewedIntroduction(true);
    
    // Show slides first if available
    if (lesson.content.slides && lesson.content.slides.length > 0) {
      setShowSlides(true);
    }
  };

  const handleSlidesComplete = () => {
    setCompletedSlides(true);
    setSlidesCompleted(true);
    setShowSlides(false);
  };

  const handleNextSection = () => {
    // Mark current section as completed
    if (currentSection >= 0) {
      setCompletedSections(prev => new Set([...prev, currentSection]));
    }
    
    if (currentSection < lesson.content.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      setShowSummary(true);
      setViewedSummary(true);
    }
  };

  const handlePreviousSection = () => {
    if (showSummary) {
      setShowSummary(false);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleCompleteLesson = async () => {
    if (isLessonCompleted) return; // Prevent multiple completions
    
    setIsLessonCompleted(true);
    const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60); // Convert to minutes
    
    // Calculate score based on progress and time spent
    const progressScore = lessonProgress;
    const timeBonus = timeSpent <= lesson.estimatedTime ? 10 : 0;
    const finalScore = Math.min(100, progressScore + timeBonus);
    
    try {
      // Wait for lesson completion to finish before showing rating popup
      await completeLesson(lesson.id, module.id, finalScore, timeSpent, isFirstAttempt);
      
      console.log('✅ Lesson completion finished, showing rating popup');
      
      // Store completion data for the rating popup
      setLessonScore(finalScore);
      setActualTimeSpent(timeSpent);
      
      // Calculate rewards (these should match the rewards from the completeLesson function)
      const baseDifficulty = module.difficulty;
      const baseXP = baseDifficulty === 'beginner' ? 25 : baseDifficulty === 'intermediate' ? 50 : 100;
      const baseGems = baseDifficulty === 'beginner' ? 2 : baseDifficulty === 'intermediate' ? 3 : 5;
      
      let totalXP = baseXP;
      let totalGems = baseGems;
      
      // Add bonuses (similar to completeLesson logic)
      if (finalScore >= 90) {
        totalXP += Math.floor(baseXP * 0.5);
        totalGems += 2;
      } else if (finalScore >= 80) {
        totalXP += Math.floor(baseXP * 0.25);
        totalGems += 1;
      }
      
      if (timeSpent < lesson.estimatedTime) {
        totalXP += Math.floor(baseXP * 0.25);
      }
      
      if (isFirstAttempt) {
        totalXP += Math.floor(baseXP * 0.2);
        totalGems += 1;
      }
      
      setEarnedXP(totalXP);
      setEarnedGems(totalGems);
      
      // Show rating popup instead of calling onComplete immediately
      setShowRatingPopup(true);
      
      // Force refresh of module progress after lesson completion
      await refreshModuleProgress(module.id);
    } catch (error) {
      console.error('Failed to complete lesson:', error);
      setIsLessonCompleted(false); // Reset if completion failed
    }
  };

  // Enhanced section completion tracking
  const handleSectionView = (sectionIndex: number) => {
    // Mark section as viewed after a minimum time (e.g., 10 seconds)
    setTimeout(() => {
      setCompletedSections(prev => new Set([...prev, sectionIndex]));
    }, 10000); // 10 seconds viewing time
  };

  // Rating popup handlers
  const handleRatingSubmit = async (rating: number, feedback?: string) => {
    console.log('📝 Lesson rating submitted:', { rating, feedback, lessonId: lesson.id });
    
    // Here you could save the rating to the database
    // For now, just log it
    try {
      // TODO: Implement rating save to database
      // await saveLessonRating(lesson.id, rating, feedback);
      console.log('✅ Rating saved successfully');
    } catch (error) {
      console.error('❌ Failed to save rating:', error);
    }
  };

  const handleRatingContinue = () => {
    setShowRatingPopup(false);
    onComplete(); // Now call onComplete after rating
  };

  const handleRatingClose = () => {
    setShowRatingPopup(false);
    onComplete(); // Still call onComplete even if rating is skipped
  };

  // Call this when a section is displayed
  useEffect(() => {
    if (hasStarted && currentSection >= 0 && !showSummary) {
      handleSectionView(currentSection);
    }
  }, [currentSection, hasStarted, showSummary]);

  const getSectionProgress = () => {
    return lessonProgress;
  };

  const renderMediaIcon = (mediaType: string) => {
    switch (mediaType) {
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'image':
        return <Image className="w-4 h-4" />;
      case 'interactive':
        return <Monitor className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const renderContent = (content: string) => {
    // Simple markdown-like rendering
    return content
      .split('\n')
      .map((line, index) => {
        if (line.trim() === '') return <br key={index} />;
        
        // Bold text
        if (line.includes('**')) {
          const parts = line.split('**');
          return (
            <p key={index} className="mb-2">
              {parts.map((part, i) => 
                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
              )}
            </p>
          );
        }
        
        // Bullet points
        if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
          return (
            <li key={index} className="ml-4 mb-1">
              {line.replace(/^[\s]*[•-][\s]*/, '')}
            </li>
          );
        }
        
        return <p key={index} className="mb-2">{line}</p>;
      });
  };

  const [bodyOverflow, setBodyOverflow] = useState('');

  // Lock body scroll when slides modal is open
  useEffect(() => {
    if (showSlides) {
      setBodyOverflow('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      setBodyOverflow('');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSlides]);

  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Gradient Header */}
          <div className={styles.lessonGradientHeader}>
            <Button variant="ghost" onClick={onBack} className="mb-2 bg-white/20 hover:bg-white/30 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Module
            </Button>
            <div className={styles.lessonGradientTitle}>{lesson.title}</div>
            <div className={styles.lessonGradientMeta}>
              Lesson {lessonNumber} of {totalLessons} &bull; {lesson.estimatedTime} min
            </div>
          </div>
          {/* Lesson Overview */}
          <Card className="mb-6 -mt-8 shadow-lg rounded-2xl overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <Badge variant="outline" className="mb-2">
                    Lesson {lessonNumber} of {totalLessons}
                  </Badge>
                  <CardTitle className="text-2xl">{lesson.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{lesson.description}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Clock className="w-4 h-4" />
                    {lesson.estimatedTime} min
                  </div>
                  {isCompleted && (
                    <Badge variant="default" className="bg-green-500">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Completed
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Introduction</h3>
                  <p className="text-gray-700">{lesson.content.introduction}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What You'll Learn</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {lesson.content.keyPoints.map((point, index) => (
                      <li key={index} className="text-gray-700">{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Lesson Sections ({lesson.content.sections.length})</h3>
                  <div className="grid gap-2">
                    {lesson.content.sections.map((section, index) => (
                      <div key={section.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        {renderMediaIcon(section.mediaType)}
                        <span className="font-medium">{section.title}</span>
                        <Badge variant="secondary" className="ml-auto">
                          {section.mediaType}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Slides Preview */}
                {lesson.content.slides && lesson.content.slides.length > 0 && (
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold mb-2 text-purple-800">Interactive Slides Available</h3>
                    <p className="text-sm text-purple-700 mb-3">
                      This lesson includes {lesson.content.slides.length} interactive slides with visual explanations and diagrams.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => setShowSlides(true)}
                      className="border-purple-300 text-purple-700 hover:bg-purple-50"
                      size="sm"
                    >
                      <Monitor className="w-4 h-4 mr-2" />
                      Preview Slides
                    </Button>
                  </div>
                )}

                {/* Make all main action buttons full-width on mobile */}
                <Button 
                  onClick={handleStartLesson}
                  className="w-full sm:w-auto bg-white text-purple-700 font-bold shadow-md hover:bg-purple-50 border border-purple-200"
                  size="lg"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Lesson
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen h-full w-full overflow-y-auto bg-white relative">
      <div className="space-y-6 px-2 sm:px-0">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4">
          <Button onClick={onBack} variant="ghost" className="self-start">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold flex-1 text-center sm:text-left">Lesson Viewer</h2>
        </div>
        <div className="w-full overflow-x-auto">
          {/* Enhanced Progress */}
          <Card className="mb-6 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold">{lesson.title}</h2>
                <div className="flex items-center gap-2">
                  {lessonProgress >= 100 && (
                    <Badge variant="default" className="bg-green-600 text-white">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Complete
                    </Badge>
                  )}
                  <span className="text-sm text-gray-500">
                    {showSummary ? 'Summary' : `Section ${currentSection + 1} of ${lesson.content.sections.length}`}
                  </span>
                </div>
              </div>
              
              {/* Main Progress Bar */}
              <div className="mb-4">
                <Progress 
                  value={lessonProgress} 
                  className="mb-2 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                  style={{
                    background: lessonProgress >= 100 ? 'linear-gradient(to right, #10B981, #059669)' : 'linear-gradient(to right, #7b2ff2, #f357a8)'
                  }}
                />
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    {lessonProgress}% complete
                    {lessonProgress >= 100 && (
                      <span className="text-green-600 ml-2 font-medium">
                        🎉 Lesson Complete!
                      </span>
                    )}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>
                      {Math.round((Date.now() - startTime) / 1000 / 60)} min
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Breakdown */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className={`text-sm font-medium ${viewedIntroduction ? 'text-green-600' : 'text-gray-400'}`}>
                    {viewedIntroduction ? '✓' : '○'} Introduction
                  </div>
                </div>
                
                {lesson.content.slides && lesson.content.slides.length > 0 && (
                  <div className="text-center">
                    <div
                      className={`text-sm font-medium transition-colors duration-150 ${completedSlides ? 'text-green-600' : 'text-gray-400'} cursor-pointer hover:text-blue-600 underline`}
                      onClick={() => setShowSlides(true)}
                      title="View Slides"
                      style={{ userSelect: 'none' }}
                    >
                      {completedSlides ? '✓' : '○'} Slides
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <div className={`text-sm font-medium ${completedSections.size === lesson.content.sections.length ? 'text-green-600' : 'text-gray-400'}`}>
                    {completedSections.size === lesson.content.sections.length ? '✓' : '○'} Sections
                  </div>
                  <div className="text-xs text-gray-500">
                    {completedSections.size}/{lesson.content.sections.length}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className={`text-sm font-medium ${viewedSummary ? 'text-green-600' : 'text-gray-400'}`}>
                    {viewedSummary ? '✓' : '○'} Summary
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              {!showSummary ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    {renderMediaIcon(lesson.content.sections[currentSection].mediaType)}
                    <h3 className="text-xl font-semibold">
                      {lesson.content.sections[currentSection].title}
                    </h3>
                    <Badge variant="secondary">
                      {lesson.content.sections[currentSection].mediaType}
                    </Badge>
                  </div>

                  <div className="prose max-w-none">
                    {renderContent(lesson.content.sections[currentSection].content)}
                  </div>

                  {lesson.content.sections[currentSection].mediaUrl && (
                    <div className="my-6">
                      {lesson.content.sections[currentSection].mediaType === 'video' && 
                       isValidYouTubeUrl(lesson.content.sections[currentSection].mediaUrl!) ? (
                        <div className="bg-gray-50 p-2 sm:p-4 rounded-lg flex flex-col items-center max-w-xl mx-auto relative">
                          <div className="flex items-center gap-2 mb-2 sm:mb-3 w-full">
                            <Play className="h-5 w-5 text-blue-600" />
                            <h4 className="font-semibold text-gray-800 text-base sm:text-lg">Educational Video</h4>
                          </div>
                          <div className="relative w-full flex justify-center">
                            <div
                              className="video-container rounded-lg shadow-md overflow-hidden w-full"
                              style={{ maxWidth: 420, minWidth: 220, aspectRatio: '16/9', position: 'relative', background: '#000' }}
                              tabIndex={0}
                            >
                              <iframe
                                src={`https://www.youtube.com/embed/${extractYouTubeId(lesson.content.sections[currentSection].mediaUrl!)}?rel=0&modestbranding=1&fs=1&cc_load_policy=1`}
                                title={lesson.content.sections[currentSection].title}
                                className="w-full h-full min-h-[180px] max-h-[320px] aspect-video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                style={{ border: 0 }}
                              />
                              {/* Fullscreen Button */}
                              <button
                                type="button"
                                aria-label="Expand video fullscreen"
                                className="absolute bottom-2 right-2 bg-white/80 hover:bg-white rounded-full p-1 shadow-md border border-gray-200 z-10"
                                style={{ transition: 'background 0.15s' }}
                                onClick={e => {
                                  const container = (e.currentTarget.parentElement as HTMLElement);
                                  if (container.requestFullscreen) {
                                    container.requestFullscreen();
                                  } else if ((container as any).webkitRequestFullscreen) {
                                    (container as any).webkitRequestFullscreen();
                                  }
                                }}
                              >
                                <Monitor className="w-5 h-5 text-blue-600" />
                              </button>
                            </div>
                          </div>
                          <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                            <ExternalLink className="h-3 w-3" />
                            <a 
                              href={lesson.content.sections[currentSection].mediaUrl!}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-600 hover:underline"
                            >
                              Watch on YouTube
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                          <div className="flex items-center gap-2 justify-center mb-2">
                            <Image className="h-5 w-5 text-gray-600" />
                            <p className="text-gray-600 font-medium">Visual Content</p>
                          </div>
                          <p className="text-sm text-gray-500">
                            {lesson.content.sections[currentSection].mediaUrl}
                          </p>
                          <p className="text-xs text-gray-400 mt-2">
                            [Image integration coming soon]
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Lesson Summary</h3>
                  
                  <div>
                    <h4 className="font-semibold mb-3">What You Learned</h4>
                    <p className="text-gray-700 mb-4">{lesson.content.summary}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Key Points</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {lesson.content.keyPoints.map((point, index) => (
                        <li key={index} className="text-gray-700">{point}</li>
                      ))}
                    </ul>
                  </div>

                  {lesson.content.resources.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">Additional Resources</h4>
                      <div className="space-y-2">
                        {lesson.content.resources.map((resource, index) => (
                          <a
                            key={index}
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 p-3 bg-blue-50 rounded-lg transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {resource.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {!isCompleted && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2">🎯 Lesson Completion Rewards</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-yellow-600" />
                            <span className="text-green-700">
                              {module.difficulty === 'beginner' ? '25-50 XP' : 
                               module.difficulty === 'intermediate' ? '50-100 XP' : '100-150 XP'}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Gem className="w-4 h-4 text-purple-600" />
                            <span className="text-green-700">
                              {module.difficulty === 'beginner' ? '2-4 gems' : 
                               module.difficulty === 'intermediate' ? '3-6 gems' : '5-10 gems'}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-green-600 mt-2">
                          💡 Bonus rewards for high scores, speed, and first attempts!
                        </p>
                      </div>
                      <Button 
                        onClick={handleCompleteLesson}
                        className={`w-full ${
                          lessonProgress >= 100 
                            ? 'bg-green-600 hover:bg-green-700' 
                            : 'bg-gray-400 hover:bg-gray-500 cursor-not-allowed'
                        }`}
                        size="lg"
                        disabled={lessonProgress < 100 || isLessonCompleted}
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {isLessonCompleted 
                          ? 'Lesson Completed!' 
                          : lessonProgress >= 100 
                            ? 'Complete Lesson & Earn Rewards'
                            : `Complete All Sections (${lessonProgress}%)`
                        }
                      </Button>
                      
                      {lessonProgress < 100 && (
                        <p className="text-xs text-amber-600 mt-2 text-center">
                          📚 View all sections to unlock completion
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            {/* Previous button - Make full-width on mobile */}
            <Button 
              variant="outline" 
              onClick={handlePreviousSection}
              className="w-full sm:w-auto"
              disabled={!showSummary && currentSection === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex gap-2">
              {/* Navigation dots - Make horizontally scrollable on mobile */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {lesson.content.sections.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full border-2 flex items-center justify-center ${
                      completedSections.has(index)
                        ? 'bg-green-600 border-green-600'
                        : index === currentSection
                          ? 'bg-blue-600 border-blue-600'
                          : index < currentSection
                            ? 'bg-blue-300 border-blue-300'
                            : 'bg-gray-200 border-gray-300'
                    }`}
                    title={`Section ${index + 1}: ${
                      completedSections.has(index) ? 'Completed' : 
                      index === currentSection ? 'Current' : 
                      index < currentSection ? 'Viewed' : 'Not viewed'
                    }`}
                    style={{ minWidth: 16, minHeight: 16 }}
                  >
                    {completedSections.has(index) && (
                      <CheckCircle className="w-2 h-2 text-white" />
                    )}
                  </div>
                ))}
                {showSummary && (
                  <div className={`w-3 h-3 rounded-full border-2 ${
                    viewedSummary ? 'bg-green-600 border-green-600' : 'bg-blue-600 border-blue-600'
                  }`} title="Summary" style={{ minWidth: 16, minHeight: 16 }}>
                  {viewedSummary && <CheckCircle className="w-2 h-2 text-white" />}
                  </div>
                )}
              </div>
            </div>

            {/* Next button - Make full-width on mobile */}
            {!showSummary ? (
              <Button 
                onClick={handleNextSection}
                className="w-full sm:w-auto"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <div className="flex gap-2">
                {onNextLesson && lessonProgress >= 100 && (
                  <Button 
                    onClick={onNextLesson}
                    className="w-full sm:w-auto"
                  >
                    Next Lesson
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
                <Button 
                  onClick={lessonProgress >= 100 ? handleCompleteLesson : undefined}
                  className={`w-full sm:w-auto ${lessonProgress >= 100 ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}
                  disabled={lessonProgress < 100 || isLessonCompleted}
                >
                  {isLessonCompleted 
                    ? 'Completed!' 
                    : lessonProgress >= 100 
                      ? 'Complete Lesson'
                      : `${lessonProgress}% Complete`
                  }
                  <CheckCircle className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Slide Viewer Modal */}
        {showSlides && lesson.content.slides && lesson.content.slides.length > 0 && (
          <div
            style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 1000, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
          >
            {/* Collapse button, top right */}
            <button
              onClick={() => setShowSlides(false)}
              style={{ position: 'absolute', top: 16, right: 16, zIndex: 1100, background: 'rgba(255,255,255,0.85)', border: 'none', borderRadius: '50%', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', cursor: 'pointer' }}
              aria-label="Collapse slides"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <SlideViewer 
              slides={lesson.content.slides}
              onComplete={handleSlidesComplete}
            />
          </div>
        )}
        
        {/* Rating Popup */}
        <LessonRatingPopup
          isOpen={showRatingPopup}
          onClose={handleRatingClose}
          onSubmit={handleRatingSubmit}
          onContinue={handleRatingContinue}
          lessonTitle={lesson.title}
          lessonScore={lessonScore}
          xpEarned={earnedXP}
          gemsEarned={earnedGems}
          timeSpent={actualTimeSpent}
          hasNextLesson={!!onNextLesson}
        />
      </div>
    </div>
  );
}
