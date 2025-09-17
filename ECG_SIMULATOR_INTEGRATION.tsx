/**
 * ECG Simulator Integration with Python-Generated Signals
 * ======================================================
 * 
 * This file shows how to integrate the Python-generated ECG signals
 * into your existing ECGSimulator.tsx component.
 */

// 1. First, create an API service for ECG operations
// File: src/services/ecgApiService.ts

export interface ECGSignal {
  id: string;
  signal_data: number[];
  time_data: number[];
  rhythm_type: string;
  heart_rate_bpm: number;
  duration_seconds: number;
  sample_rate: number;
  stats: {
    sample_count: number;
    voltage_range: { min: number; max: number };
    num_beats: number;
    signal_quality: string;
  };
}

export interface ECGGenerationParams {
  rhythm_type: string;
  duration?: number;
  sampling_rate?: number;
  noise_level?: number;
  heart_rate?: number;
}

export class ECGApiService {
  private baseUrl = 'http://localhost:3001';

  async generateECG(params: ECGGenerationParams): Promise<ECGSignal> {
    const response = await fetch(`${this.baseUrl}/api/ecg/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });
    
    const result = await response.json();
    if (!result.success) {
      throw new Error(result.error || 'Failed to generate ECG');
    }
    
    // Get the full signal data
    const signalResponse = await fetch(`${this.baseUrl}/api/ecg/${result.data.id}`);
    const signalData = await signalResponse.json();
    
    if (!signalData.success) {
      throw new Error('Failed to retrieve ECG signal data');
    }
    
    return signalData.data;
  }

  async getAvailableRhythms() {
    const response = await fetch(`${this.baseUrl}/api/ecg/rhythms`);
    const result = await response.json();
    return result.success ? result.data : [];
  }

  async listStoredECGs() {
    const response = await fetch(`${this.baseUrl}/api/ecg/list`);
    const result = await response.json();
    return result.success ? result.signals : [];
  }

  async getECGSvg(id: string, width = 800, height = 300): Promise<string> {
    const response = await fetch(`${this.baseUrl}/api/ecg/${id}/svg?width=${width}&height=${height}`);
    return await response.text();
  }
}

// 2. Update your ECGSimulator.tsx to use real ECG signals
// File: src/components/ECGSimulator.tsx (Updated sections)

import React, { useState, useEffect, useRef } from 'react';
import { ECGApiService, ECGSignal } from '../services/ecgApiService';

// Initialize ECG API service
const ecgApi = new ECGApiService();

// Update your sample questions to use real ECG data
interface ECGQuestion {
  id: number;
  ecgSignal?: ECGSignal;  // Add real ECG signal data
  ecgImage: string;       // Keep image as fallback
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  rhythm: string;
  heartRate: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Real ECG generation function for practice/challenge modes
const generateRandomECGQuestion = async (): Promise<ECGQuestion> => {
  try {
    // Get available rhythm types
    const rhythms = await ecgApi.getAvailableRhythms();
    const randomRhythm = rhythms[Math.floor(Math.random() * rhythms.length)];
    
    // Generate ECG signal
    const ecgSignal = await ecgApi.generateECG({
      rhythm_type: randomRhythm.type,
      duration: 8,  // 8 seconds for questions
      sampling_rate: 500,
      noise_level: 0.05
    });
    
    // Create question based on rhythm type
    const question: ECGQuestion = {
      id: Date.now(),
      ecgSignal: ecgSignal,
      ecgImage: '', // Will be generated from signal
      question: `What rhythm is shown in this ECG?`,
      options: shuffleOptions([
        randomRhythm.description,
        ...getRandomWrongAnswers(randomRhythm.type)
      ]),
      correctAnswer: 0, // Will be adjusted after shuffling
      explanation: `This is ${randomRhythm.description}. ${getExplanation(randomRhythm.type)}`,
      rhythm: randomRhythm.type,
      heartRate: ecgSignal.heart_rate_bpm,
      difficulty: getDifficulty(randomRhythm.type)
    };
    
    return question;
  } catch (error) {
    console.error('Failed to generate ECG question:', error);
    // Return fallback to existing static questions
    return getRandomStaticQuestion();
  }
};

// ECG Visualization Component
const ECGWaveform: React.FC<{ signal: ECGSignal; width?: number; height?: number }> = ({ 
  signal, 
  width = 800, 
  height = 300 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const drawECG = (animate = false) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw grid (medical paper style)
    drawGrid(ctx, width, height);
    
    // Draw ECG signal
    const data = signal.signal_data;
    const timeData = signal.time_data;
    
    if (animate) {
      animateECGTrace(ctx, data, timeData, width, height);
    } else {
      drawStaticECGTrace(ctx, data, timeData, width, height);
    }
  };

  const drawGrid = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.strokeStyle = '#ffcccc';
    ctx.lineWidth = 0.5;
    
    // Major grid lines (every 20px = 0.2s)
    for (let x = 0; x <= w; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    
    for (let y = 0; y <= h; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    
    // Minor grid lines (every 4px)
    ctx.strokeStyle = '#ffe6e6';
    ctx.lineWidth = 0.25;
    
    for (let x = 0; x <= w; x += 4) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
  };

  const drawStaticECGTrace = (
    ctx: CanvasRenderingContext2D, 
    data: number[], 
    timeData: number[], 
    w: number, 
    h: number
  ) => {
    if (data.length === 0) return;

    // Normalize data to canvas height
    const minVal = Math.min(...data);
    const maxVal = Math.max(...data);
    const range = maxVal - minVal;
    
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let i = 0; i < data.length; i++) {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((data[i] - minVal) / range) * h * 0.8 - h * 0.1;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    ctx.stroke();
  };

  const animateECGTrace = (
    ctx: CanvasRenderingContext2D, 
    data: number[], 
    timeData: number[], 
    w: number, 
    h: number
  ) => {
    setIsAnimating(true);
    let currentIndex = 0;
    
    const animate = () => {
      if (currentIndex >= data.length) {
        setIsAnimating(false);
        return;
      }
      
      // Clear and redraw grid
      ctx.clearRect(0, 0, w, h);
      drawGrid(ctx, w, h);
      
      // Draw ECG trace up to current index
      if (currentIndex > 0) {
        const minVal = Math.min(...data);
        const maxVal = Math.max(...data);
        const range = maxVal - minVal;
        
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let i = 0; i <= currentIndex; i++) {
          const x = (i / (data.length - 1)) * w;
          const y = h - ((data[i] - minVal) / range) * h * 0.8 - h * 0.1;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }
      
      currentIndex += 10; // Speed of animation
      requestAnimationFrame(animate);
    };
    
    animate();
  };

  useEffect(() => {
    drawECG();
  }, [signal]);

  return (
    <div className="ecg-waveform">
      <canvas 
        ref={canvasRef} 
        width={width} 
        height={height}
        className="border border-gray-300 bg-white"
      />
      <div className="mt-2 flex gap-4 text-sm text-gray-600">
        <span>Rhythm: {signal.rhythm_type}</span>
        <span>HR: {signal.heart_rate_bpm} BPM</span>
        <span>Duration: {signal.duration_seconds}s</span>
        <span>Quality: {signal.stats.signal_quality}</span>
        <button 
          onClick={() => drawECG(true)}
          disabled={isAnimating}
          className="px-2 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {isAnimating ? 'Animating...' : 'Animate'}
        </button>
      </div>
    </div>
  );
};

// Updated ECGSimulator component sections
const ECGSimulator: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<ECGQuestion | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [mode, setMode] = useState<'learn' | 'practice' | 'challenge'>('learn');

  // Generate new ECG question for practice/challenge modes
  const generateNewQuestion = async () => {
    if (mode === 'learn') return; // Use static questions for learn mode
    
    setIsGenerating(true);
    try {
      const newQuestion = await generateRandomECGQuestion();
      setCurrentQuestion(newQuestion);
    } catch (error) {
      console.error('Failed to generate ECG question:', error);
      // Fallback to static questions
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="ecg-simulator">
      {/* Mode selector */}
      <div className="mode-selector mb-6">
        <button 
          onClick={() => setMode('learn')} 
          className={`px-4 py-2 rounded ${mode === 'learn' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Learn (Categories)
        </button>
        <button 
          onClick={() => setMode('practice')} 
          className={`px-4 py-2 rounded ${mode === 'practice' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
        >
          Practice (Random ECGs)
        </button>
        <button 
          onClick={() => setMode('challenge')} 
          className={`px-4 py-2 rounded ${mode === 'challenge' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
        >
          Challenge (Time Pressure)
        </button>
      </div>

      {/* ECG Display */}
      {currentQuestion && (
        <div className="ecg-display mb-6">
          {currentQuestion.ecgSignal ? (
            <ECGWaveform signal={currentQuestion.ecgSignal} />
          ) : (
            <img 
              src={currentQuestion.ecgImage} 
              alt="ECG Strip" 
              className="w-full max-w-4xl mx-auto"
            />
          )}
        </div>
      )}

      {/* Generate New ECG Button for Practice/Challenge */}
      {(mode === 'practice' || mode === 'challenge') && (
        <button
          onClick={generateNewQuestion}
          disabled={isGenerating}
          className="mb-4 px-6 py-2 bg-purple-500 text-white rounded disabled:opacity-50"
        >
          {isGenerating ? 'Generating New ECG...' : 'Generate New ECG'}
        </button>
      )}

      {/* Rest of your existing ECGSimulator component... */}
    </div>
  );
};

// Helper functions
const shuffleOptions = (options: string[]): string[] => {
  const shuffled = [...options];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getRandomWrongAnswers = (correctRhythm: string): string[] => {
  const allRhythms = [
    'Normal sinus rhythm',
    'Sinus bradycardia', 
    'Sinus tachycardia',
    'Atrial fibrillation',
    'Ventricular tachycardia',
    'Premature ventricular contractions'
  ];
  
  // Filter out correct answer and return 3 random wrong answers
  const wrongAnswers = allRhythms.filter(r => !r.toLowerCase().includes(correctRhythm));
  return wrongAnswers.sort(() => 0.5 - Math.random()).slice(0, 3);
};

const getExplanation = (rhythmType: string): string => {
  const explanations = {
    'normal': 'Normal sinus rhythm has regular P waves, normal PR intervals, and a heart rate of 60-100 BPM.',
    'bradycardia': 'Bradycardia is characterized by a heart rate less than 60 BPM with otherwise normal rhythm.',
    'tachycardia': 'Tachycardia shows a heart rate greater than 100 BPM with regular rhythm.',
    'atrial_fibrillation': 'Atrial fibrillation shows irregularly irregular rhythm with no distinct P waves.',
    'ventricular_tachycardia': 'V-Tach shows wide QRS complexes with a rapid rate, typically >150 BPM.',
    'premature_ventricular_contractions': 'PVCs appear as wide, bizarre QRS complexes that occur earlier than expected.'
  };
  
  return explanations[rhythmType] || 'This rhythm has distinctive characteristics that help with identification.';
};

const getDifficulty = (rhythmType: string): 'easy' | 'medium' | 'hard' => {
  const difficulty = {
    'normal': 'easy',
    'bradycardia': 'easy',
    'tachycardia': 'easy',
    'atrial_fibrillation': 'medium',
    'ventricular_tachycardia': 'hard',
    'premature_ventricular_contractions': 'medium'
  };
  
  return difficulty[rhythmType] as 'easy' | 'medium' | 'hard' || 'medium';
};

export default ECGSimulator;
