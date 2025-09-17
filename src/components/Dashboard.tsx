import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GameState } from '@/types/game';
import TaskCard from './TaskCard';
import ResourcesModal from './ResourcesModal';
import ResourcesPage from "@/components/ResourcesPage";
import { Trophy, Gem, Star, Target, BookOpen, User, Flame, TrendingUp } from 'lucide-react';
import SocialShareCard from './SocialSharedCard';
import Profile from './Profile';
import DashboardUpdateTest from './DashboardUpdateTest';
import CircularProgress from './CircularProgress';
import EcgRoadmapWidget from './EcgRoadmapWidget';

interface DashboardProps {
  gameState: GameState;
  onCompleteTask: (taskId: string, isCorrect: boolean) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ gameState, onCompleteTask }) => {
  const { user, dailyTasks, completedTasks, isAuthenticated, isGuestUser } = gameState;
  const [showShare, setShowShare] = useState(false);
  const [localUserData, setLocalUserData] = useState(user);
  
  const totalTasks = dailyTasks.length || 1;
  const progressPercentage = (completedTasks / totalTasks) * 100;
  const allTasksComplete = completedTasks === totalTasks;

  // Update local user data when gameState.user changes
  useEffect(() => {
    setLocalUserData(user);
    console.log('🔄 Dashboard user data updated:', {
      xp: user?.xp,
      gems: user?.gems,
      rank: user?.rank,
      streakCount: user?.streakCount
    });
  }, [user?.xp, user?.gems, user?.rank, user?.streakCount, user?.totalTasksCompleted]);

  if (!user) return <div>Loading...</div>;

  // Use local data with fallback to ensure we have the latest values
  const displayUser = localUserData || user;

  // Handler for task completion (no popup logic here)
  const handleTaskComplete = (taskId: string, isCorrect: boolean) => {
    onCompleteTask(taskId, isCorrect);
  };

  // Show share popup only when all tasks are complete (and not before)
  useEffect(() => {
    if (allTasksComplete && completedTasks > 0) {
      setShowShare(true);
    }
  }, [allTasksComplete, completedTasks]);

  // Animated progress values (simulate animation on mount)
  const [xpProgress, setXpProgress] = useState(0);
  const [gemsProgress, setGemsProgress] = useState(0);
  const [rankProgress, setRankProgress] = useState(0);
  const [streakProgress, setStreakProgress] = useState(0);

  useEffect(() => {
    // Animate progress bars in
    setTimeout(() => setXpProgress(Math.min(100, (displayUser.xp % 100))), 200);
    setTimeout(() => setGemsProgress(Math.min(100, (displayUser.gems % 100))), 400);
    // Rank progress: use XP as a proxy (e.g., percent to next rank)
    setTimeout(() => setRankProgress(Math.min(100, (displayUser.xp % 100))), 600);
    setTimeout(() => setStreakProgress(Math.min(100, (displayUser.streakCount ? displayUser.streakCount * 10 : 0))), 800);
  }, [displayUser.xp, displayUser.gems, displayUser.streakCount]);

  // Calculate daily goal progress
  const dailyGoal = 5;
  const dailyProgress = Math.min(100, (completedTasks / dailyGoal) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center space-y-2 sm:space-y-0 mb-2">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ECGkid PulsePoints
            </h1>
            <p className="text-gray-600">Master ECG skills with gamified learning!</p>
          </div>
          <div className="flex items-center justify-center gap-2 mt-2 sm:mt-0">
            {/* Place EcgRoadmapWidget near the top right (next to where a bell icon would be) */}
            <EcgRoadmapWidget
              currentLesson={gameState.userLearningProfile?.currentLessonId ?
                (gameState.availableModules?.findIndex(mod => mod.lessons.some(lesson => lesson.id === gameState.userLearningProfile.currentLessonId)) ?? 0) + 1
                : 1}
              completedModules={
                (gameState.userLearningProfile?.completedModules || []).map(
                  modId => (gameState.availableModules?.findIndex(mod => mod.id === modId) ?? -1) + 1
                ).filter(n => n > 0)
              }
              modules={
                (gameState.availableModules || []).map((mod, idx) => ({
                  id: mod.id,
                  order: idx + 1,
                  title: mod.title,
                  color: [
                    '#43e97b', // green
                    '#38b6ff', // blue
                    '#f7b42c', // yellow
                    '#f357a8', // pink
                    '#7b2ff2', // purple
                    '#ffb347', // orange
                    '#ff6961', // red
                    '#b993d6'  // lavender
                  ][idx % 8]
                }))
              }
              onModuleNavigate={(moduleId: string) => {
                // Optionally, navigate to module detail or show a toast
                alert('Navigate to module: ' + moduleId);
              }}
            />
          </div>
        </div>

        {/* Animated Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 text-xs font-semibold text-blue-700"><TrendingUp className="w-4 h-4" />XP</span>
            <Progress value={xpProgress} variant="default" className="w-16 h-2 mt-1" />
            <span className="text-xs mt-1">{displayUser.xp % 100}/100</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 text-xs font-semibold text-pink-700"><Gem className="w-4 h-4" />Gems</span>
            <Progress value={gemsProgress} variant="success" className="w-16 h-2 mt-1" />
            <span className="text-xs mt-1">{displayUser.gems % 100}/100</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 text-xs font-semibold text-yellow-700"><Star className="w-4 h-4" />Rank</span>
            <Progress value={rankProgress} variant="warning" className="w-16 h-2 mt-1" />
            <span className="text-xs mt-1">{displayUser.rank || 'N/A'}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1 text-xs font-semibold text-orange-700"><Flame className="w-4 h-4" />Streak</span>
            <Progress value={streakProgress} variant="error" className="w-16 h-2 mt-1" />
            <span className="text-xs mt-1">{displayUser.streakCount} days</span>
          </div>
        </div>

        {/* Daily Goal Card */}
        <div className="flex justify-center mt-4">
          <div className="bg-white rounded-xl shadow-lg px-4 py-3 flex flex-col items-center w-full max-w-xs">
            <span className="text-xs font-semibold text-purple-700 flex items-center gap-1 mb-1"><TrendingUp className="w-4 h-4" />Daily Goal</span>
            <CircularProgress value={dailyProgress} size={80} />
            <div className="text-sm mt-2 font-semibold">
              {completedTasks} of {dailyGoal} tasks complete
            </div>
            {completedTasks >= dailyGoal ? (
              <button className="mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow hover:scale-105 transition">Claim Bonus</button>
            ) : (
              <div className="mt-2 text-xs text-gray-500">Keep going to reach your goal!</div>
            )}
          </div>
        </div>

        {/* Debug Info - Simplified (no Airtable references) */}
        {dailyTasks.length === 0 && (
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="p-4">
              <h3 className="font-bold text-yellow-800 mb-2">System Status:</h3>
              <div className="text-sm space-y-1">
                <p>• Daily Tasks: {dailyTasks.length} loaded</p>
                <p>• User: {user ? '✅ Authenticated' : '❌ Not authenticated'}</p>
                <p>• Firestore: {dailyTasks.length > 0 ? '✅ Connected' : '⏳ Loading...'}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Temporary Import Button */}
        {dailyTasks.length === 0 && (
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-4">
              <h3 className="font-bold text-green-800 mb-2">🚀 First Time Setup:</h3>
              <p className="text-sm text-green-700 mb-3">
                Import sample ECG tasks (including videos) to get started!
              </p>
              <button 
                onClick={async () => {
                  try {
                    console.log('📥 Importing sample tasks to Firestore...');
                    
                    // Import the sample tasks directly
                    const { db } = await import('@/firebase');
                    const { collection, addDoc } = await import('firebase/firestore');
                    
                    const sampleTasks = [
                      {
                        taskId: 1,
                        taskStatus: 'active',
                        question: 'What is the normal heart rate range for adults?',
                        taskType: 'quiz',
                        optionA: '60-100 bpm',
                        optionB: '80-120 bpm',
                        optionC: '40-80 bpm',
                        optionD: '100-140 bpm',
                        correctAnswer: '60-100 bpm',
                        xp: 10,
                        difficulty: 'easy',
                        explanation: 'Normal adult heart rate is 60-100 beats per minute at rest',
                        usageCount: 0,
                        priority: 1,
                        createdAt: new Date().toISOString()
                      },
                      {
                        taskId: 2,
                        taskStatus: 'active',
                        question: 'Which lead shows the best view of the inferior wall?',
                        taskType: 'quiz',
                        optionA: 'Lead II',
                        optionB: 'Lead V1',
                        optionC: 'Lead aVF',
                        optionD: 'Lead V6',
                        correctAnswer: 'Lead aVF',
                        xp: 15,
                        difficulty: 'medium',
                        explanation: 'Lead aVF provides the best view of the inferior wall of the heart',
                        usageCount: 0,
                        priority: 1,
                        createdAt: new Date().toISOString()
                      },
                      {
                        taskId: 3,
                        taskStatus: 'active',
                        question: 'What does a prolonged QT interval increase the risk of?',
                        taskType: 'quiz',
                        optionA: 'Atrial fibrillation',
                        optionB: 'Torsades de pointes',
                        optionC: 'Heart block',
                        optionD: 'Bradycardia',
                        correctAnswer: 'Torsades de pointes',
                        xp: 20,
                        difficulty: 'hard',
                        explanation: 'Prolonged QT interval is a risk factor for torsades de pointes',
                        usageCount: 0,
                        priority: 1,
                        createdAt: new Date().toISOString()
                      },
                      {
                        taskId: 4,
                        taskStatus: 'active',
                        question: 'What is the normal PR interval duration?',
                        taskType: 'quiz',
                        optionA: '0.12-0.20 seconds',
                        optionB: '0.06-0.12 seconds',
                        optionC: '0.20-0.40 seconds',
                        optionD: '0.04-0.08 seconds',
                        correctAnswer: '0.12-0.20 seconds',
                        xp: 10,
                        difficulty: 'easy',
                        explanation: 'Normal PR interval is 0.12-0.20 seconds (3-5 small squares)',
                        usageCount: 0,
                        priority: 1,
                        createdAt: new Date().toISOString()
                      },
                      {
                        taskId: 5,
                        taskStatus: 'active',
                        question: 'Which rhythm is characterized by irregular R-R intervals?',
                        taskType: 'quiz',
                        optionA: 'Sinus rhythm',
                        optionB: 'Atrial fibrillation',
                        optionC: 'Ventricular tachycardia',
                        optionD: 'Complete heart block',
                        correctAnswer: 'Atrial fibrillation',
                        xp: 15,
                        difficulty: 'medium',
                        explanation: 'Atrial fibrillation shows irregularly irregular R-R intervals',
                        usageCount: 0,
                        priority: 1,
                        createdAt: new Date().toISOString()
                      },
                      {
                        taskId: 6,
                        taskStatus: 'active',
                        question: 'Watch: ECG Basics Tutorial',
                        taskType: 'video',
                        correctAnswer: 'Completed',
                        explanation: 'Learn the fundamentals of ECG interpretation',
                        youtubeUrl: 'https://youtu.be/u6ISIifO7kA?si=Od2YHwc5673cZ', // Replace with your actual video
                        videoTitle: 'ECG Basics: Understanding Heart Rhythms',
                        videoDescription: 'Complete guide to reading ECG strips',
                        videoDuration: 300,
                        xp: 15,
                        gems: 10,
                        difficulty: 'easy',
                        usageCount: 0,
                        priority: 1,
                        createdAt: new Date().toISOString()
                      }
                    ];
                    
                    const tasksRef = collection(db, 'ecgTasks');
                    
                    for (const task of sampleTasks) {
                      await addDoc(tasksRef, task);
                      console.log('✅ Imported task:', task.taskId);
                    }
                    
                    console.log('🎉 All tasks imported successfully!');
                    alert('✅ Sample tasks imported! Refresh the page to see them.');
                    window.location.reload();
                    
                  } catch (error) {
                    console.error('❌ Import failed:', error);
                    alert('❌ Import failed: ' + error.message);
                  }
                }}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                📥 Import Sample Tasks
              </button>
            </CardContent>
          </Card>
        )}

        {/* Navigation Tabs */}
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="resources">
              <BookOpen className="w-4 h-4 mr-2" />
              Resources
            </TabsTrigger>
            <TabsTrigger value="profile">
              <User className="w-4 h-4 mr-2" />
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm opacity-90">XP</p>
                  <p className="text-xl font-bold">{displayUser.xp}</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardContent className="p-4 text-center">
                  <Gem className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm opacity-90">Gems</p>
                  <p className="text-xl font-bold">{displayUser.gems}</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-4 text-center">
                  <Star className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm opacity-90">Rank</p>
                  <p className="text-sm font-bold">{displayUser.rank}</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardContent className="p-4 text-center">
                  <Target className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm opacity-90">Streak</p>
                  <p className="text-xl font-bold">{displayUser.streakCount || displayUser.currentStreak || 0}</p>
                </CardContent>
              </Card>
            </div>

            {/* Progress Card */}
            <Card className="border-2 border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Daily Progress
                  </CardTitle>
                  <Badge variant={allTasksComplete ? "default" : "secondary"}>
                    {completedTasks}/{totalTasks} Complete
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={progressPercentage} className="h-3" />
                <p className="text-sm text-gray-600 mt-2">
                  {allTasksComplete 
                    ? "🎉 All tasks complete! Bonus XP earned!" 
                    : `${totalTasks - completedTasks} tasks remaining`}
                </p>
              </CardContent>
            </Card>

            {/* Debug Test Component */}
            {import.meta.env.MODE === 'development' && (
              <DashboardUpdateTest />
            )}

            {/* Tasks */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Today's Tasks</h2>
              {dailyTasks.length === 0 ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-600">Loading tasks (quiz, flashcard, and video) from Firestore...</p>
                    <p className="text-sm text-gray-500 mt-2">
                      If this persists, please import tasks to Firestore.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {dailyTasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onComplete={handleTaskComplete}
                    />
                  ))}
                </div>
              )}
            </div>

            {allTasksComplete && (
              <Card className="border-2 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Congratulations!
                  </h3>
                  <p className="text-green-700">
                    You've completed all daily tasks! Come back tomorrow for new challenges.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="resources">
            <ResourcesPage />
          </TabsContent>

          <TabsContent value="profile">
            <Profile 
              user={user} 
              dailyTasks={dailyTasks}
              completedTasks={completedTasks}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Social Share Modal */}
      {showShare && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="relative">
            <SocialShareCard 
              completedTasks={completedTasks}
              totalPoints={user?.totalPoints || 0}
              streakCount={user?.streakCount || 0}
            />
            <button
              onClick={() => setShowShare(false)}
              className="absolute -top-2 -right-2 bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-gray-700"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
