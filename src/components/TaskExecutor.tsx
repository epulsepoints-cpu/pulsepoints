import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Star, 
  Play,
  RotateCcw,
  Lightbulb
} from 'lucide-react';
import { LearningTask } from '@/types/learning';
import { cn } from '@/lib/utils';

interface TaskExecutorProps {
  task: LearningTask;
  onTaskComplete: (taskId: string, score: number, timeSpent: number) => void;
  taskNumber: number;
  totalTasks: number;
}

const TaskExecutor: React.FC<TaskExecutorProps> = ({
  task,
  onTaskComplete,
  taskNumber,
  totalTasks
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [startTime] = useState(Date.now());
  const [timeSpent, setTimeSpent] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  const handleSubmit = () => {
    if (!selectedAnswer || isSubmitted) return;

    const correct = selectedAnswer === task.content.correctAnswer?.toString();
    setIsCorrect(correct);
    setIsSubmitted(true);

    // Calculate score based on correctness and time
    let score = 0;
    if (correct) {
      score = task.points;
      // Bonus points for quick answers (under 30 seconds)
      if (timeSpent < 30) {
        score += Math.floor(task.points * 0.2);
      }
    }

    // Complete task after showing feedback
    setTimeout(() => {
      onTaskComplete(task.id, score, timeSpent);
    }, 2000);
  };

  const handleRetry = () => {
    setSelectedAnswer('');
    setIsSubmitted(false);
    setIsCorrect(false);
    setShowHint(false);
  };

  const renderTaskContent = () => {
    switch (task.type) {
      case 'quiz':
        return renderQuizTask();
      case 'video':
        return renderVideoTask();
      case 'flashcard':
        return renderFlashcardTask();
      case 'case-study':
        return renderCaseStudyTask();
      case 'interpretation':
        return renderInterpretationTask();
      default:
        return <p>Unsupported task type: {task.type}</p>;
    }
  };

  const renderQuizTask = () => (
    <div className="space-y-6">
      {/* Question */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{task.content.question}</h3>
        
        {/* ECG Image if available */}
        {task.content.imageUrl && (
          <div className="border rounded-lg overflow-hidden">
            <img 
              src={task.content.imageUrl} 
              alt="ECG Strip"
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Description */}
        {task.content.description && (
          <p className="text-muted-foreground">{task.content.description}</p>
        )}
      </div>

      {/* Answer Options */}
      <RadioGroup
        value={selectedAnswer}
        onValueChange={setSelectedAnswer}
        disabled={isSubmitted}
        className="space-y-3"
      >
        {task.content.options?.map((option: string, index: number) => (
          <div 
            key={index} 
            className={cn(
              "flex items-center space-x-2 p-3 rounded-lg border transition-colors",
              isSubmitted && index.toString() === task.content.correctAnswer?.toString()
                ? "bg-green-50 border-green-200"
                : isSubmitted && index.toString() === selectedAnswer && !isCorrect
                ? "bg-red-50 border-red-200"
                : "hover:bg-muted"
            )}
          >
            <RadioGroupItem value={index.toString()} id={`option-${index}`} />
            <Label 
              htmlFor={`option-${index}`} 
              className="flex-1 cursor-pointer"
            >
              {option}
            </Label>
            {isSubmitted && index.toString() === task.content.correctAnswer?.toString() && (
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            )}
            {isSubmitted && index.toString() === selectedAnswer && !isCorrect && (
              <XCircle className="w-5 h-5 text-red-600" />
            )}
          </div>
        ))}
      </RadioGroup>

      {/* Hint */}
      {task.content.hint && (
        <div className="space-y-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowHint(!showHint)}
            className="text-xs"
          >
            <Lightbulb className="w-4 h-4 mr-2" />
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </Button>
          
          {showHint && (
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">{task.content.hint}</p>
            </div>
          )}
        </div>
      )}

      {/* Explanation (shown after submission) */}
      {isSubmitted && task.content.explanation && (
        <div className={cn(
          "p-4 rounded-lg border",
          isCorrect ? "bg-green-50 border-green-200" : "bg-blue-50 border-blue-200"
        )}>
          <h4 className="font-semibold mb-2">Explanation:</h4>
          <p className="text-sm">{task.content.explanation}</p>
        </div>
      )}
    </div>
  );

  const renderVideoTask = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{task.content.title}</h3>
      
      <div className="aspect-video rounded-lg overflow-hidden bg-muted">
        <iframe
          src={task.content.videoUrl}
          className="w-full h-full"
          allowFullScreen
          title={task.content.title}
        />
      </div>

      {task.content.description && (
        <p className="text-muted-foreground">{task.content.description}</p>
      )}

      <Button 
        onClick={() => onTaskComplete(task.id, task.points, timeSpent)}
        className="w-full"
      >
        Mark as Watched
      </Button>
    </div>
  );

  const renderFlashcardTask = () => (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4">{task.content.front}</h3>
        
        {task.content.imageUrl && (
          <div className="border rounded-lg overflow-hidden mb-4">
            <img 
              src={task.content.imageUrl} 
              alt="Flashcard visual"
              className="w-full h-auto max-h-64 object-contain"
            />
          </div>
        )}

        {!isSubmitted ? (
          <Button onClick={() => setIsSubmitted(true)}>
            Reveal Answer
          </Button>
        ) : (
          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-medium">{task.content.back}</p>
            </div>
            
            <div className="flex gap-2 justify-center">
              <Button 
                variant="outline"
                onClick={() => onTaskComplete(task.id, Math.floor(task.points * 0.5), timeSpent)}
              >
                Hard
              </Button>
              <Button 
                onClick={() => onTaskComplete(task.id, task.points, timeSpent)}
              >
                Good
              </Button>
              <Button 
                variant="outline"
                onClick={() => onTaskComplete(task.id, Math.floor(task.points * 1.2), timeSpent)}
              >
                Easy
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderCaseStudyTask = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{task.content.patientInfo?.title || 'Case Study'}</h3>
      
      {task.content.patientInfo && (
        <div className="p-4 bg-muted rounded-lg">
          <h4 className="font-semibold mb-2">Patient Information:</h4>
          <p><strong>Age:</strong> {task.content.patientInfo.age}</p>
          <p><strong>Gender:</strong> {task.content.patientInfo.gender}</p>
          <p><strong>Symptoms:</strong> {task.content.patientInfo.symptoms}</p>
          <p><strong>History:</strong> {task.content.patientInfo.history}</p>
        </div>
      )}

      {task.content.imageUrl && (
        <div className="border rounded-lg overflow-hidden">
          <img 
            src={task.content.imageUrl} 
            alt="ECG for case study"
            className="w-full h-auto"
          />
        </div>
      )}

      <div className="space-y-2">
        <h4 className="font-semibold">Question:</h4>
        <p>{task.content.question}</p>
      </div>

      {/* This would be similar to quiz rendering */}
      {renderQuizTask()}
    </div>
  );

  const renderInterpretationTask = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">ECG Interpretation</h3>
      
      {task.content.imageUrl && (
        <div className="border rounded-lg overflow-hidden">
          <img 
            src={task.content.imageUrl} 
            alt="ECG for interpretation"
            className="w-full h-auto"
          />
        </div>
      )}

      <div className="space-y-2">
        <h4 className="font-semibold">Interpret this ECG:</h4>
        <p className="text-muted-foreground">{task.content.instructions}</p>
      </div>

      {/* This would use the quiz format for interpretation options */}
      {renderQuizTask()}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Task Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Task {taskNumber} of {totalTasks}</h2>
          <p className="text-sm text-muted-foreground capitalize">
            {task.type.replace('-', ' ')} • {task.points} points
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            {Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}
          </div>
          
          <Badge variant="outline">
            {Math.round(((taskNumber - 1) / totalTasks) * 100)}%
          </Badge>
        </div>
      </div>

      {/* Task Progress */}
      <Progress value={((taskNumber - 1) / totalTasks) * 100} className="h-2" />

      {/* Task Content */}
      <Card>
        <CardContent className="pt-6">
          {renderTaskContent()}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      {!isSubmitted && task.type !== 'video' && task.type !== 'flashcard' && (
        <div className="flex gap-2">
          <Button 
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="flex-1"
          >
            Submit Answer
          </Button>
        </div>
      )}

      {isSubmitted && !isCorrect && task.type === 'quiz' && (
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={handleRetry}
            className="flex-1"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      )}

      {/* Feedback */}
      {isSubmitted && (
        <div className={cn(
          "flex items-center gap-2 p-3 rounded-lg",
          isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
        )}>
          {isCorrect ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Correct! +{task.points} points</span>
              {timeSpent < 30 && (
                <Badge variant="secondary" className="ml-2">
                  <Star className="w-3 h-3 mr-1" />
                  Speed bonus!
                </Badge>
              )}
            </>
          ) : (
            <>
              <XCircle className="w-5 h-5" />
              <span className="font-medium">Incorrect. Keep trying!</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskExecutor;