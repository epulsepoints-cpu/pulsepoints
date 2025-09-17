import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { User, DailyTask, RANK_THRESHOLDS } from '@/types/game';
import { 
  Trophy, 
  Gem, 
  Star, 
  Target, 
  Calendar, 
  Activity, 
  BookOpen, 
  Heart, 
  Zap, 
  Award,
  TrendingUp,
  Clock,
  MapPin,
  Save,
  Edit3,
  Crown,
  Shield,
  Medal,
  Flame,
  Video,
  Brain,
  FileText,
  Settings,
  Camera,
  User as UserIcon,
  Mail,
  Phone,
  MapPin as Location,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Lock,
  Unlock
} from 'lucide-react';
import { auth, db } from '@/firebase';
import { updateDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from '@/components/ui/use-toast';

interface ProfileProps {
  user: User;
  dailyTasks: DailyTask[];
  completedTasks: number;
}

const Profile: React.FC<ProfileProps> = ({ user, dailyTasks, completedTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({
    username: user.username,
    email: user.email || '',
    avatar: user.avatar || '',
    bio: user.bio || '',
    location: user.location || '',
    profession: user.profession || '',
    specialization: user.specialization || '',
    phone: user.phone || '',
    yearsOfExperience: user.yearsOfExperience || '',
    institution: user.institution || '',
    goals: user.goals || ''
  });
  const [loading, setLoading] = useState(false);

  // Load extended profile data from Firebase
  useEffect(() => {
    const loadExtendedProfile = async () => {
      if (user.id) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.id));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setEditedProfile(prev => ({
              ...prev,
              bio: userData.bio || '',
              location: userData.location || '',
              profession: userData.profession || '',
              specialization: userData.specialization || '',
              phone: userData.phone || '',
              yearsOfExperience: userData.yearsOfExperience || '',
              institution: userData.institution || '',
              goals: userData.goals || ''
            }));
          }
        } catch (error) {
          console.error('Error loading extended profile:', error);
        }
      }
    };

    loadExtendedProfile();
  }, [user.id]);

  // Calculate progress to next rank
  const getCurrentRankProgress = () => {
    const ranks = Object.entries(RANK_THRESHOLDS).sort((a, b) => a[1] - b[1]);
    const currentRankIndex = ranks.findIndex(([rank]) => rank === user.rank);
    
    if (currentRankIndex === ranks.length - 1) {
      return { progress: 100, nextRank: null, required: 0 };
    }
    
    const nextRank = ranks[currentRankIndex + 1];
    const currentThreshold = ranks[currentRankIndex][1];
    const nextThreshold = nextRank[1];
    const progress = ((user.xp - currentThreshold) / (nextThreshold - currentThreshold)) * 100;
    
    return {
      progress: Math.min(100, Math.max(0, progress)),
      nextRank: nextRank[0],
      required: nextThreshold - user.xp
    };
  };

  const handleSaveProfile = async () => {
    if (!user.id) return;

    setLoading(true);
    try {
      const userRef = doc(db, 'users', user.id);
      await updateDoc(userRef, {
        username: editedProfile.username,
        email: editedProfile.email,
        avatar: editedProfile.avatar,
        bio: editedProfile.bio,
        location: editedProfile.location,
        profession: editedProfile.profession,
        specialization: editedProfile.specialization,
        phone: editedProfile.phone,
        yearsOfExperience: editedProfile.yearsOfExperience,
        institution: editedProfile.institution,
        goals: editedProfile.goals,
        lastUpdated: new Date().toISOString()
      });

      toast({
        title: "Profile Updated",
        description: "Your profile has been successfully updated.",
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: "Error",
        description: "Failed to update profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const rankProgress = getCurrentRankProgress();

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar className="w-20 h-20 border-4 border-white shadow-lg">
                <AvatarImage src={user.avatar || editedProfile.avatar} alt={user.username} />
                <AvatarFallback className="bg-blue-500 text-white text-xl font-bold">
                  {user.username.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute -bottom-2 -right-2 rounded-full p-1 h-8 w-8"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-2xl font-bold text-gray-800">{user.username}</h1>
                <Badge variant="secondary" className="text-sm">
                  {user.rank}
                </Badge>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsEditing(!isEditing)}
                  className="ml-auto"
                >
                  {isEditing ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
              </div>
              <p className="text-gray-600 mb-3">{user.email}</p>
              
              {/* Rank Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to {rankProgress.nextRank || 'Max Rank'}</span>
                  <span>{rankProgress.required > 0 ? `${rankProgress.required} XP needed` : 'Max rank achieved!'}</span>
                </div>
                <Progress value={rankProgress.progress} className="h-2" />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold">{user.xp}</p>
            <p className="text-sm opacity-90">Total XP</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-4 text-center">
            <Gem className="w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold">{user.gems}</p>
            <p className="text-sm opacity-90">Gems</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-4 text-center">
            <Flame className="w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold">{user.streakCount || 0}</p>
            <p className="text-sm opacity-90">Day Streak</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold">{user.totalTasksCompleted || completedTasks}</p>
            <p className="text-sm opacity-90">Tasks Done</p>
          </CardContent>
        </Card>
      </div>

      {/* Profile Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="roadmap">ECG Roadmap</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserIcon className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isEditing ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={editedProfile.username}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, username: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={editedProfile.email}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={editedProfile.bio}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, bio: e.target.value }))}
                        placeholder="Tell us about yourself..."
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={editedProfile.location}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, location: e.target.value }))}
                        placeholder="City, Country"
                      />
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>{user.email || 'Not provided'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Location className="w-4 h-4 text-gray-500" />
                      <span>{editedProfile.location || 'Not provided'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span>Joined {user.joinDate ? new Date(user.joinDate).toLocaleDateString() : 'Recently'}</span>
                    </div>
                    {editedProfile.bio && (
                      <div className="mt-3 p-3 bg-gray-50 rounded-md">
                        <p className="text-sm text-gray-700">{editedProfile.bio}</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Professional Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Professional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isEditing ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="profession">Profession</Label>
                      <Input
                        id="profession"
                        value={editedProfile.profession}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, profession: e.target.value }))}
                        placeholder="e.g., Medical Student, Nurse, Doctor"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="specialization">Specialization</Label>
                      <Input
                        id="specialization"
                        value={editedProfile.specialization}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, specialization: e.target.value }))}
                        placeholder="e.g., Cardiology, Emergency Medicine"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="institution">Institution</Label>
                      <Input
                        id="institution"
                        value={editedProfile.institution}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, institution: e.target.value }))}
                        placeholder="University or Hospital"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input
                        id="experience"
                        value={editedProfile.yearsOfExperience}
                        onChange={(e) => setEditedProfile(prev => ({ ...prev, yearsOfExperience: e.target.value }))}
                        placeholder="e.g., 2"
                      />
                    </div>
                  </>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="w-4 h-4 text-gray-500" />
                      <span>{editedProfile.profession || 'Not specified'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap className="w-4 h-4 text-gray-500" />
                      <span>{editedProfile.specialization || 'Not specified'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="w-4 h-4 text-gray-500" />
                      <span>{editedProfile.institution || 'Not specified'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{editedProfile.yearsOfExperience ? `${editedProfile.yearsOfExperience} years` : 'Not specified'}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Learning Goals */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Learning Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-2">
                  <Label htmlFor="goals">Your Learning Goals</Label>
                  <Textarea
                    id="goals"
                    value={editedProfile.goals}
                    onChange={(e) => setEditedProfile(prev => ({ ...prev, goals: e.target.value }))}
                    placeholder="What do you want to achieve with ECG learning?"
                    rows={4}
                  />
                </div>
              ) : (
                <div className="text-sm text-gray-700">
                  {editedProfile.goals || 'No learning goals set yet. Click edit to add your goals!'}
                </div>
              )}
            </CardContent>
          </Card>

          {isEditing && (
            <div className="flex gap-2">
              <Button onClick={handleSaveProfile} disabled={loading}>
                {loading ? 'Saving...' : 'Save Changes'}
              </Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Your Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* First Steps Achievement */}
                <Card className={`relative ${(user.totalTasksCompleted || completedTasks) >= 1 ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-full ${(user.totalTasksCompleted || completedTasks) >= 1 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
                        {(user.totalTasksCompleted || completedTasks) >= 1 ? <CheckCircle className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">First Steps</h4>
                        <p className="text-xs text-gray-600">Complete your first task</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{Math.min(user.totalTasksCompleted || completedTasks, 1)}/1</span>
                      </div>
                      <Progress value={Math.min(((user.totalTasksCompleted || completedTasks) / 1) * 100, 100)} className="h-2" />
                      <div className="flex gap-2 text-xs">
                        <Badge variant="outline" className="text-xs">+10 XP</Badge>
                        <Badge variant="outline" className="text-xs">+5 Gems</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* XP Collector Achievement */}
                <Card className={`relative ${user.xp >= 100 ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-full ${user.xp >= 100 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
                        {user.xp >= 100 ? <CheckCircle className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">XP Collector</h4>
                        <p className="text-xs text-gray-600">Earn 100 XP</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{Math.min(user.xp, 100)}/100</span>
                      </div>
                      <Progress value={Math.min((user.xp / 100) * 100, 100)} className="h-2" />
                      <div className="flex gap-2 text-xs">
                        <Badge variant="outline" className="text-xs">+10 Gems</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Streak Warrior Achievement */}
                <Card className={`relative ${(user.streakCount || 0) >= 7 ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-full ${(user.streakCount || 0) >= 7 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
                        {(user.streakCount || 0) >= 7 ? <CheckCircle className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">Streak Warrior</h4>
                        <p className="text-xs text-gray-600">Maintain a 7-day streak</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{Math.min(user.streakCount || 0, 7)}/7</span>
                      </div>
                      <Progress value={Math.min(((user.streakCount || 0) / 7) * 100, 100)} className="h-2" />
                      <div className="flex gap-2 text-xs">
                        <Badge variant="outline" className="text-xs">+50 XP</Badge>
                        <Badge variant="outline" className="text-xs">+20 Gems</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Video Enthusiast Achievement */}
                <Card className={`relative ${(user.videosWatched || 0) >= 10 ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-full ${(user.videosWatched || 0) >= 10 ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
                        {(user.videosWatched || 0) >= 10 ? <CheckCircle className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">Video Enthusiast</h4>
                        <p className="text-xs text-gray-600">Watch 10 educational videos</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{Math.min(user.videosWatched || 0, 10)}/10</span>
                      </div>
                      <Progress value={Math.min(((user.videosWatched || 0) / 10) * 100, 100)} className="h-2" />
                      <div className="flex gap-2 text-xs">
                        <Badge variant="outline" className="text-xs">+15 Gems</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Resident Achievement */}
                <Card className={`relative ${user.xp >= RANK_THRESHOLDS.Resident ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-full ${user.xp >= RANK_THRESHOLDS.Resident ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
                        {user.xp >= RANK_THRESHOLDS.Resident ? <CheckCircle className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">Resident Achievement</h4>
                        <p className="text-xs text-gray-600">Reach Resident rank</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{Math.min(user.xp, RANK_THRESHOLDS.Resident)}/{RANK_THRESHOLDS.Resident}</span>
                      </div>
                      <Progress value={Math.min((user.xp / RANK_THRESHOLDS.Resident) * 100, 100)} className="h-2" />
                      <div className="flex gap-2 text-xs">
                        <Badge variant="outline" className="text-xs">+50 Gems</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* ECG Wizard Achievement */}
                <Card className={`relative ${user.xp >= RANK_THRESHOLDS['ECG Wizard'] ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-full ${user.xp >= RANK_THRESHOLDS['ECG Wizard'] ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'}`}>
                        {user.xp >= RANK_THRESHOLDS['ECG Wizard'] ? <CheckCircle className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">ECG Wizard</h4>
                        <p className="text-xs text-gray-600">Reach ECG Wizard rank</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{Math.min(user.xp, RANK_THRESHOLDS['ECG Wizard'])}/{RANK_THRESHOLDS['ECG Wizard']}</span>
                      </div>
                      <Progress value={Math.min((user.xp / RANK_THRESHOLDS['ECG Wizard']) * 100, 100)} className="h-2" />
                      <div className="flex gap-2 text-xs">
                        <Badge variant="outline" className="text-xs">+200 Gems</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roadmap" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                ECG Learning Roadmap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Basic Rhythm Recognition */}
                <Card className="relative border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-blue-500 text-white">
                        <Heart className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">Basic Rhythm Recognition</h4>
                          <Badge variant="default">Beginner</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Learn to identify normal sinus rhythm and basic abnormalities</p>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>0%</span>
                            </div>
                            <Progress value={0} className="h-2" />
                          </div>
                          <Badge variant="outline" className="text-xs">3 tasks</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Intervals and Waves */}
                <Card className="relative border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-green-500 text-white">
                        <Activity className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">Intervals and Waves</h4>
                          <Badge variant="default">Beginner</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Master PR, QRS, and QT intervals, P waves, and T waves</p>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>0%</span>
                            </div>
                            <Progress value={0} className="h-2" />
                          </div>
                          <Badge variant="outline" className="text-xs">5 tasks</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Lead Placement */}
                <Card className="relative border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-purple-500 text-white">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">Lead Placement and Views</h4>
                          <Badge variant="secondary">Intermediate</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Understand 12-lead ECG placement and anatomical views</p>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>0%</span>
                            </div>
                            <Progress value={0} className="h-2" />
                          </div>
                          <Badge variant="outline" className="text-xs">3 tasks</Badge>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Requires: Basic Rhythm Recognition</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrhythmias */}
                <Card className="relative border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-yellow-500 text-white">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">Common Arrhythmias</h4>
                          <Badge variant="secondary">Intermediate</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Identify and understand common arrhythmias</p>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>0%</span>
                            </div>
                            <Progress value={0} className="h-2" />
                          </div>
                          <Badge variant="outline" className="text-xs">5 tasks</Badge>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Requires: Intervals and Waves</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* MI Patterns */}
                <Card className="relative border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-red-500 text-white">
                        <Heart className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">Myocardial Infarction Patterns</h4>
                          <Badge variant="destructive">Advanced</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Recognize STEMI, NSTEMI, and other MI patterns</p>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>0%</span>
                            </div>
                            <Progress value={0} className="h-2" />
                          </div>
                          <Badge variant="outline" className="text-xs">5 tasks</Badge>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Requires: Lead Placement and Views</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Advanced Blocks */}
                <Card className="relative border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-gray-500 text-white">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">Advanced Conduction Blocks</h4>
                          <Badge variant="destructive">Advanced</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Master complex heart blocks and conduction abnormalities</p>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span>0%</span>
                            </div>
                            <Progress value={0} className="h-2" />
                          </div>
                          <Badge variant="outline" className="text-xs">4 tasks</Badge>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Requires: Common Arrhythmias</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Activity & Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-blue-50">
                  <CardContent className="p-3 text-center">
                    <Brain className="w-6 h-6 mx-auto mb-1 text-blue-500" />
                    <p className="text-lg font-bold">{user.quizzesCompleted || 0}</p>
                    <p className="text-xs text-gray-600">Quizzes</p>
                  </CardContent>
                </Card>
                <Card className="bg-green-50">
                  <CardContent className="p-3 text-center">
                    <Video className="w-6 h-6 mx-auto mb-1 text-green-500" />
                    <p className="text-lg font-bold">{user.videosWatched || 0}</p>
                    <p className="text-xs text-gray-600">Videos</p>
                  </CardContent>
                </Card>
                <Card className="bg-purple-50">
                  <CardContent className="p-3 text-center">
                    <FileText className="w-6 h-6 mx-auto mb-1 text-purple-500" />
                    <p className="text-lg font-bold">{user.flashcardsStudied || 0}</p>
                    <p className="text-xs text-gray-600">Flashcards</p>
                  </CardContent>
                </Card>
                <Card className="bg-orange-50">
                  <CardContent className="p-3 text-center">
                    <Flame className="w-6 h-6 mx-auto mb-1 text-orange-500" />
                    <p className="text-lg font-bold">{user.longestStreak || 0}</p>
                    <p className="text-xs text-gray-600">Best Streak</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center text-gray-500 py-4">
                <Activity className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                <p>Detailed activity tracking coming soon!</p>
                <p className="text-sm">We'll show your daily learning activity here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-600">Receive daily reminders and progress updates</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Privacy Settings</h4>
                    <p className="text-sm text-gray-600">Control who can see your progress</p>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Data Export</h4>
                    <p className="text-sm text-gray-600">Download your learning data</p>
                  </div>
                  <Button variant="outline" size="sm">Export</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
