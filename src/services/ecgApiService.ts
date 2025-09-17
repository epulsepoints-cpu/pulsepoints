/**
 * ECG API Service for Python-Generated Medical Signals
 * Integrates with backend to provide unlimited ECG rhythm generation
 */

export interface ECGSignal {
  id: number;
  rhythm_type: string;
  signal_data: number[];
  metadata: any;
  created_at: string;
  rhythmType: string; // Alias for compatibility
  heartRate: number;  // Will be extracted from metadata
}

export interface ECGGenerationParams {
  rhythm_type: string;
  duration?: number;
  sampling_rate?: number;
  noise_level?: number;
  heart_rate?: number;
}

export interface RhythmType {
  type: string;
  description: string;
  heart_rate_range: [number, number];
  difficulty: 'easy' | 'medium' | 'hard';
}

export class ECGApiService {
  private baseUrl = 'http://localhost:3001';

  async generateECG(params: ECGGenerationParams): Promise<ECGSignal> {
    try {
      const response = await fetch(`${this.baseUrl}/api/ecg/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.error || 'Failed to generate ECG');
      }
      
      return result.data;
    } catch (error) {
      console.error('ECG generation failed:', error);
      throw error;
    }
  }

  async getAvailableRhythms(): Promise<string[]> {
    try {
      // Since the backend doesn't have a specific rhythms endpoint,
      // we'll use the list endpoint and extract unique rhythm types
      const response = await fetch(`${this.baseUrl}/api/ecg?limit=100`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      if (result.success && result.data) {
        const uniqueRhythms = [...new Set(result.data.map((signal: any) => signal.rhythm_type as string))];
        return uniqueRhythms.filter(r => typeof r === 'string');
      }
      
      return this.getFallbackRhythmStrings();
    } catch (error) {
      console.error('Failed to fetch rhythms:', error);
      return this.getFallbackRhythmStrings();
    }
  }

  async listStoredECGs(): Promise<ECGSignal[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/ecg/list`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      return result.success ? result.signals : [];
    } catch (error) {
      console.error('Failed to list ECGs:', error);
      return [];
    }
  }

  async getECGById(id: string): Promise<ECGSignal | null> {
    try {
      const response = await fetch(`${this.baseUrl}/api/ecg/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      return result.success ? result.data : null;
    } catch (error) {
      console.error('Failed to get ECG:', error);
      return null;
    }
  }

  async healthCheck(): Promise<{ status: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/health`);
      if (response.ok) {
        return { status: 'OK' };
      } else {
        return { status: 'ERROR' };
      }
    } catch (error) {
      return { status: 'ERROR' };
    }
  }

  async getHealthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/health`);
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  private getFallbackRhythms(): RhythmType[] {
    return [
      { type: 'normal', description: 'Normal sinus rhythm', heart_rate_range: [60, 100], difficulty: 'easy' },
      { type: 'bradycardia', description: 'Sinus bradycardia', heart_rate_range: [30, 60], difficulty: 'easy' },
      { type: 'tachycardia', description: 'Sinus tachycardia', heart_rate_range: [100, 180], difficulty: 'easy' },
      { type: 'atrial_fibrillation', description: 'Atrial fibrillation', heart_rate_range: [60, 150], difficulty: 'medium' },
      { type: 'ventricular_tachycardia', description: 'Ventricular tachycardia', heart_rate_range: [150, 250], difficulty: 'hard' },
      { type: 'premature_ventricular_contractions', description: 'PVCs', heart_rate_range: [60, 100], difficulty: 'medium' }
    ];
  }

  private getFallbackRhythmStrings(): string[] {
    return this.getFallbackRhythms().map(r => r.type);
  }

  // Generate random ECG for challenge mode
  async generateRandomECG(difficulty?: 'easy' | 'medium' | 'hard'): Promise<ECGSignal> {
    const rhythmStrings = await this.getAvailableRhythms();
    const fallbackRhythms = this.getFallbackRhythms();
    
    // Map strings to rhythm objects for difficulty filtering
    const rhythms = rhythmStrings.map(rhythmStr => 
      fallbackRhythms.find(r => r.type === rhythmStr) || 
      { type: rhythmStr, description: rhythmStr, heart_rate_range: [60, 100] as [number, number], difficulty: 'medium' as const }
    );
    
    // Filter by difficulty if specified
    const filteredRhythms = difficulty 
      ? rhythms.filter(r => r.difficulty === difficulty)
      : rhythms;
    
    if (filteredRhythms.length === 0) {
      throw new Error('No rhythms available for specified difficulty');
    }
    
    // Select random rhythm
    const randomRhythm = filteredRhythms[Math.floor(Math.random() * filteredRhythms.length)];
    
    // Generate with some variation
    const params: ECGGenerationParams = {
      rhythm_type: randomRhythm.type,
      duration: 8 + Math.random() * 4, // 8-12 seconds
      noise_level: 0.02 + Math.random() * 0.08, // 0.02-0.10 noise
      // Random heart rate within normal range for rhythm
      heart_rate: Math.floor(
        randomRhythm.heart_rate_range[0] + 
        Math.random() * (randomRhythm.heart_rate_range[1] - randomRhythm.heart_rate_range[0])
      )
    };
    
    return this.generateECG(params);
  }
}

// Create singleton instance
export const ecgApi = new ECGApiService();
