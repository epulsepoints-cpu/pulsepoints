/**
 * ECG API Service for Python-Generated Medical Signals
 * Integrates with backend to provide unlimited ECG rhythm generation
 */
export class ECGApiService {
    baseUrl = 'http://localhost:3001';
    async generateECG(params) {
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
        }
        catch (error) {
            console.error('ECG generation failed:', error);
            throw error;
        }
    }
    async getAvailableRhythms() {
        try {
            // Since the backend doesn't have a specific rhythms endpoint,
            // we'll use the list endpoint and extract unique rhythm types
            const response = await fetch(`${this.baseUrl}/api/ecg?limit=100`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            if (result.success && result.data) {
                const uniqueRhythms = [...new Set(result.data.map((signal) => signal.rhythm_type))];
                return uniqueRhythms.filter(r => typeof r === 'string');
            }
            return this.getFallbackRhythmStrings();
        }
        catch (error) {
            console.error('Failed to fetch rhythms:', error);
            return this.getFallbackRhythmStrings();
        }
    }
    async listStoredECGs() {
        try {
            const response = await fetch(`${this.baseUrl}/api/ecg/list`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            return result.success ? result.signals : [];
        }
        catch (error) {
            console.error('Failed to list ECGs:', error);
            return [];
        }
    }
    async getECGById(id) {
        try {
            const response = await fetch(`${this.baseUrl}/api/ecg/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            return result.success ? result.data : null;
        }
        catch (error) {
            console.error('Failed to get ECG:', error);
            return null;
        }
    }
    async healthCheck() {
        try {
            const response = await fetch(`${this.baseUrl}/api/health`);
            if (response.ok) {
                return { status: 'OK' };
            }
            else {
                return { status: 'ERROR' };
            }
        }
        catch (error) {
            return { status: 'ERROR' };
        }
    }
    async getHealthCheck() {
        try {
            const response = await fetch(`${this.baseUrl}/api/health`);
            return response.ok;
        }
        catch (error) {
            return false;
        }
    }
    getFallbackRhythms() {
        return [
            { type: 'normal', description: 'Normal sinus rhythm', heart_rate_range: [60, 100], difficulty: 'easy' },
            { type: 'bradycardia', description: 'Sinus bradycardia', heart_rate_range: [30, 60], difficulty: 'easy' },
            { type: 'tachycardia', description: 'Sinus tachycardia', heart_rate_range: [100, 180], difficulty: 'easy' },
            { type: 'atrial_fibrillation', description: 'Atrial fibrillation', heart_rate_range: [60, 150], difficulty: 'medium' },
            { type: 'ventricular_tachycardia', description: 'Ventricular tachycardia', heart_rate_range: [150, 250], difficulty: 'hard' },
            { type: 'premature_ventricular_contractions', description: 'PVCs', heart_rate_range: [60, 100], difficulty: 'medium' }
        ];
    }
    getFallbackRhythmStrings() {
        return this.getFallbackRhythms().map(r => r.type);
    }
    // Generate random ECG for challenge mode
    async generateRandomECG(difficulty) {
        const rhythmStrings = await this.getAvailableRhythms();
        const fallbackRhythms = this.getFallbackRhythms();
        // Map strings to rhythm objects for difficulty filtering
        const rhythms = rhythmStrings.map(rhythmStr => fallbackRhythms.find(r => r.type === rhythmStr) ||
            { type: rhythmStr, description: rhythmStr, heart_rate_range: [60, 100], difficulty: 'medium' });
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
        const params = {
            rhythm_type: randomRhythm.type,
            duration: 8 + Math.random() * 4, // 8-12 seconds
            noise_level: 0.02 + Math.random() * 0.08, // 0.02-0.10 noise
            // Random heart rate within normal range for rhythm
            heart_rate: Math.floor(randomRhythm.heart_rate_range[0] +
                Math.random() * (randomRhythm.heart_rate_range[1] - randomRhythm.heart_rate_range[0]))
        };
        return this.generateECG(params);
    }
}
// Create singleton instance
export const ecgApi = new ECGApiService();
