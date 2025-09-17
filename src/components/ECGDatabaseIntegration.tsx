/**
 * Example integration of ECGViewer component into the ECG learning app
 * This demonstrates how to use the MIT-BIH ECG database viewer
 */

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  BookOpen, 
  Database,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';
import ECGViewer from '@/components/ECGViewer';

// Integration component showing how to use ECGViewer
const ECGDatabaseIntegration: React.FC = () => {
  const [currentView, setCurrentView] = useState<'overview' | 'database' | 'analysis'>('overview');
  const [selectedRecord, setSelectedRecord] = useState<any>(null);

  const handleRecordSelection = (record: any) => {
    setSelectedRecord(record);
    console.log('ECG Record selected for analysis:', record);
    
    // Here you could integrate with your learning system:
    // - Create practice questions based on the condition
    // - Add to user's study progress
    // - Generate comparative analysis with other similar records
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
          <Database className="w-10 h-10 text-blue-500" />
          MIT-BIH ECG Database
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access real ECG recordings from the world's most comprehensive arrhythmia database. 
          Learn from actual patient data used in medical research and education.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <Activity className="w-8 h-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">48 Real Records</h3>
            <p className="text-gray-600 text-sm">
              Complete MIT-BIH arrhythmia database with diverse cardiac conditions
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">AAMI Standards</h3>
            <p className="text-gray-600 text-sm">
              Professional annotations following EC57 classification standards
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Clinical Grade</h3>
            <p className="text-gray-600 text-sm">
              Used by medical professionals and researchers worldwide
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Award className="w-8 h-8 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Educational</h3>
            <p className="text-gray-600 text-sm">
              Perfect for learning ECG interpretation and pattern recognition
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Database Stats */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Database Coverage</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2 Records</div>
              <div className="text-gray-600">Normal Sinus Rhythm</div>
              <Badge className="mt-2 bg-green-100 text-green-800">Baseline</Badge>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">25 Records</div>
              <div className="text-gray-600">Ventricular Arrhythmias</div>
              <Badge className="mt-2 bg-red-100 text-red-800">High Priority</Badge>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">21 Records</div>
              <div className="text-gray-600">Other Arrhythmias</div>
              <Badge className="mt-2 bg-blue-100 text-blue-800">Learning</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => setCurrentView('database')}
            className="flex items-center gap-2 text-lg px-8 py-3"
          >
            <Database className="w-5 h-5" />
            Explore Database
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => setCurrentView('analysis')}
            className="flex items-center gap-2 text-lg px-8 py-3"
          >
            <BookOpen className="w-5 h-5" />
            Start Learning
          </Button>
        </div>
        
        <p className="text-sm text-gray-500">
          💡 Tip: Click on any ECG record to view detailed analysis and download data
        </p>
      </div>
    </div>
  );

  const renderDatabase = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={() => setCurrentView('overview')}
          className="flex items-center gap-2"
        >
          ← Back to Overview
        </Button>
        
        <Badge className="bg-blue-100 text-blue-800">
          MIT-BIH Arrhythmia Database
        </Badge>
      </div>
      
      <ECGViewer 
        onRecordSelect={handleRecordSelection}
        className="min-h-screen"
      />
    </div>
  );

  const renderAnalysis = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={() => setCurrentView('overview')}
          className="flex items-center gap-2"
        >
          ← Back to Overview
        </Button>
      </div>

      <Card>
        <CardContent className="p-8 text-center">
          <Activity className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ECG Analysis Learning Module
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            This section will integrate the ECG database with your learning system. 
            Students can practice interpretation, take quizzes based on real records, 
            and track their progress across different arrhythmia types.
          </p>
          
          {selectedRecord && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Last Selected Record:</h3>
              <p className="text-gray-700">
                Record {selectedRecord.recordId} - {selectedRecord.condition}
              </p>
              <Badge className="mt-2 bg-blue-100 text-blue-800">
                {selectedRecord.dominantAnnotation} beats dominant
              </Badge>
            </div>
          )}
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <BookOpen className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900">Study Mode</h4>
                <p className="text-sm text-gray-600">
                  Practice with guided explanations
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900">Quiz Mode</h4>
                <p className="text-sm text-gray-600">
                  Test your skills with real ECGs
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900">Progress</h4>
                <p className="text-sm text-gray-600">
                  Track learning achievements
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-6">
        {currentView === 'overview' && renderOverview()}
        {currentView === 'database' && renderDatabase()}
        {currentView === 'analysis' && renderAnalysis()}
      </div>
    </div>
  );
};

export default ECGDatabaseIntegration;
