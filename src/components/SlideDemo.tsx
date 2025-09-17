import React from 'react';
import SlideViewer, { SlideBuilder } from '@/components/SlideViewer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SlideDemo() {
  // Demo slides showcasing different slide types
  const demoSlides = [
    SlideBuilder.createTextSlide(
      'intro',
      'Welcome to ECG Learning!',
      'Interactive slides make complex concepts easy to understand.',
      [
        'Visual learning approach',
        'Step-by-step explanations', 
        'Interactive elements',
        'Self-paced learning'
      ]
    ),
    
    SlideBuilder.createStepsSlide(
      'heart-chambers',
      'Four Heart Chambers',
      [
        {
          number: 1,
          title: 'Right Atrium',
          description: 'Receives blood from the body',
          icon: 'heart'
        },
        {
          number: 2,
          title: 'Right Ventricle', 
          description: 'Pumps blood to lungs',
          icon: 'lungs'
        },
        {
          number: 3,
          title: 'Left Atrium',
          description: 'Receives blood from lungs',
          icon: 'heart'
        },
        {
          number: 4,
          title: 'Left Ventricle',
          description: 'Pumps blood to body',
          icon: 'muscle'
        }
      ]
    ),

    SlideBuilder.createComparisonSlide(
      'normal-vs-abnormal',
      'Normal vs Abnormal ECG',
      'Normal Findings',
      'Abnormal Findings',
      [
        'Regular rhythm',
        'Rate 60-100 bpm',
        'Normal P waves',
        'Normal QRS width'
      ],
      [
        'Irregular rhythm',
        'Rate <60 or >100 bpm',
        'Absent P waves',
        'Wide QRS complexes'
      ]
    ),

    SlideBuilder.createHighlightSlide(
      'key-points',
      'Remember These Key Points',
      'These concepts are fundamental to ECG interpretation.',
      [
        'P wave = atrial activity',
        'QRS = ventricular activity', 
        'T wave = recovery phase',
        'Rate and rhythm are different'
      ]
    ),

    SlideBuilder.createQuestionSlide(
      'question',
      'Quick Check',
      'What does the QRS complex represent?'
    )
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Google Primer Style Slides Demo
            </CardTitle>
            <p className="text-center text-gray-600">
              Interactive slides integrated into ECG learning lessons
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Features:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✅ Multiple slide types (text, steps, comparison, highlight)</li>
                  <li>✅ Auto-play functionality</li>
                  <li>✅ Progress tracking</li>
                  <li>✅ Interactive navigation</li>
                  <li>✅ Mobile-responsive design</li>
                  <li>✅ Customizable themes</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Slide Types:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>📝 <strong>Text:</strong> Introduction and explanations</li>
                  <li>📊 <strong>Steps:</strong> Sequential learning processes</li>
                  <li>⚖️ <strong>Comparison:</strong> Normal vs abnormal findings</li>
                  <li>💡 <strong>Highlight:</strong> Key points and tips</li>
                  <li>❓ <strong>Question:</strong> Knowledge checks</li>
                  <li>📋 <strong>Diagram:</strong> Visual representations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <SlideViewer 
          slides={demoSlides}
          onComplete={() => {
            alert('Slides completed! This would normally advance to the next lesson section.');
          }}
          autoPlay={false}
          className="shadow-2xl"
        />

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-3">Integration with Learning Modules</h3>
            <p className="text-gray-700 mb-3">
              These slides are now integrated into your ECG learning modules. Each lesson can include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-medium text-blue-900">Before Content</h4>
                <p className="text-blue-700">Introduction slides to set context</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium text-green-900">During Learning</h4>
                <p className="text-green-700">Visual explanations alongside video/text</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <h4 className="font-medium text-purple-900">After Content</h4>
                <p className="text-purple-700">Summary slides and knowledge checks</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
