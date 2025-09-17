#!/usr/bin/env python3
"""
Correct Clinical ECG Generator
Generates 12-lead ECGs in proper clinical column layout:
Column 1: I, II, III (bipolar limb leads)
Column 2: aVR, aVL, aVF (augmented limb leads) 
Column 3: V1, V2, V3 (precordial chest leads)
Column 4: V4, V5, V6 (remaining precordial leads)
Plus: Lead II rhythm strip at bottom
"""

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from pathlib import Path
import json
import os
from datetime import datetime

# Clinical ECG Database
CLINICAL_DIAGNOSES = [
    # Basic Rhythms
    {
        'key': 'normal_sinus_rhythm',
        'name': 'Normal Sinus Rhythm',
        'characteristics': 'Regular rhythm, normal rate (60-100 BPM), normal intervals',
        'rate': 75,
        'category': 'Basic Rhythms'
    },
    {
        'key': 'sinus_bradycardia',
        'name': 'Sinus Bradycardia', 
        'characteristics': 'Slow heart rate (<60 BPM), regular rhythm',
        'rate': 45,
        'category': 'Basic Rhythms'
    },
    {
        'key': 'sinus_tachycardia',
        'name': 'Sinus Tachycardia',
        'characteristics': 'Fast heart rate (>100 BPM), regular rhythm', 
        'rate': 120,
        'category': 'Basic Rhythms'
    },
    {
        'key': 'sinus_arrhythmia',
        'name': 'Sinus Arrhythmia',
        'characteristics': 'Irregular sinus rhythm, rate varies with respiration',
        'rate': 70,
        'category': 'Basic Rhythms'
    },
    
    # Atrial Arrhythmias
    {
        'key': 'atrial_fibrillation',
        'name': 'Atrial Fibrillation',
        'characteristics': 'Irregularly irregular rhythm, no P waves, fibrillatory waves',
        'rate': 90,
        'category': 'Atrial Arrhythmias'
    },
    {
        'key': 'atrial_flutter',
        'name': 'Atrial Flutter',
        'characteristics': 'Regular atrial rate ~300 BPM, sawtooth pattern',
        'rate': 75,
        'category': 'Atrial Arrhythmias'
    },
    {
        'key': 'afib_rvr',
        'name': 'Atrial Fibrillation with RVR',
        'characteristics': 'AFib with rapid ventricular response (>100 BPM)',
        'rate': 140,
        'category': 'Atrial Arrhythmias'
    },
    {
        'key': 'multifocal_atrial_tachycardia',
        'name': 'Multifocal Atrial Tachycardia',
        'characteristics': 'Multiple P wave morphologies, irregular rhythm',
        'rate': 110,
        'category': 'Atrial Arrhythmias'
    },
    
    # Ventricular Arrhythmias
    {
        'key': 'monomorphic_vt',
        'name': 'Monomorphic Ventricular Tachycardia',
        'characteristics': 'Wide QRS tachycardia, uniform morphology',
        'rate': 180,
        'category': 'Ventricular Arrhythmias'
    },
    {
        'key': 'polymorphic_vt',
        'name': 'Polymorphic Ventricular Tachycardia',
        'characteristics': 'Wide QRS tachycardia, varying morphology',
        'rate': 200,
        'category': 'Ventricular Arrhythmias'
    },
    {
        'key': 'ventricular_fibrillation',
        'name': 'Ventricular Fibrillation',
        'characteristics': 'Chaotic ventricular activity, no organized QRS',
        'rate': 0,
        'category': 'Ventricular Arrhythmias'
    },
    {
        'key': 'monomorphic_pvc',
        'name': 'Monomorphic PVCs',
        'characteristics': 'Premature ventricular contractions, same morphology',
        'rate': 75,
        'category': 'Ventricular Arrhythmias'
    },
    {
        'key': 'polymorphic_pvc',
        'name': 'Polymorphic PVCs',
        'characteristics': 'Premature ventricular contractions, different morphologies',
        'rate': 75,
        'category': 'Ventricular Arrhythmias'
    },
    
    # Supraventricular
    {
        'key': 'svt_avnrt',
        'name': 'SVT (AVNRT)',
        'characteristics': 'AV nodal reentrant tachycardia, narrow QRS',
        'rate': 150,
        'category': 'Supraventricular'
    },
    {
        'key': 'svt_avrt',
        'name': 'SVT (AVRT)',
        'characteristics': 'AV reentrant tachycardia, accessory pathway',
        'rate': 160,
        'category': 'Supraventricular'
    },
    
    # Conduction Blocks
    {
        'key': 'left_bundle_branch_block',
        'name': 'Left Bundle Branch Block',
        'characteristics': 'Wide QRS, broad R in V6, deep S in V1',
        'rate': 75,
        'category': 'Conduction Blocks'
    },
    {
        'key': 'right_bundle_branch_block',
        'name': 'Right Bundle Branch Block',
        'characteristics': 'Wide QRS, RSR\' pattern in V1, wide S in V6',
        'rate': 75,
        'category': 'Conduction Blocks'
    },
    
    # AV Blocks
    {
        'key': 'first_degree_av_block',
        'name': 'First Degree AV Block',
        'characteristics': 'Prolonged PR interval (>200ms), 1:1 conduction',
        'rate': 70,
        'category': 'AV Blocks'
    },
    {
        'key': 'second_degree_av_block_type1',
        'name': 'Second Degree AV Block (Mobitz I)',
        'characteristics': 'Progressive PR prolongation, dropped QRS (Wenckebach)',
        'rate': 55,
        'category': 'AV Blocks'
    },
    {
        'key': 'second_degree_av_block_type2',
        'name': 'Second Degree AV Block (Mobitz II)',
        'characteristics': 'Fixed PR interval, intermittent dropped QRS',
        'rate': 50,
        'category': 'AV Blocks'
    },
    {
        'key': 'third_degree_av_block',
        'name': 'Third Degree (Complete) AV Block',
        'characteristics': 'Complete AV dissociation, independent P and QRS',
        'rate': 40,
        'category': 'AV Blocks'
    },
    
    # STEMI/MI
    {
        'key': 'stemi_anterior',
        'name': 'STEMI - Anterior',
        'characteristics': 'ST elevation in V1-V6, anterior wall MI',
        'rate': 80,
        'category': 'Myocardial Infarction'
    },
    {
        'key': 'stemi_inferior',
        'name': 'STEMI - Inferior',
        'characteristics': 'ST elevation in II, III, aVF, inferior wall MI',
        'rate': 70,
        'category': 'Myocardial Infarction'
    },
    {
        'key': 'stemi_lateral',
        'name': 'STEMI - Lateral',
        'characteristics': 'ST elevation in I, aVL, V5-V6, lateral wall MI',
        'rate': 75,
        'category': 'Myocardial Infarction'
    },
    {
        'key': 'nstemi',
        'name': 'NSTEMI',
        'characteristics': 'ST depression, T wave inversion, no ST elevation',
        'rate': 85,
        'category': 'Myocardial Infarction'
    },
    {
        'key': 'inferior_mi',
        'name': 'Old Inferior MI',
        'characteristics': 'Q waves in II, III, aVF, old inferior infarct',
        'rate': 70,
        'category': 'Myocardial Infarction'
    },
    {
        'key': 'anterior_mi',
        'name': 'Old Anterior MI',
        'characteristics': 'Q waves in V1-V6, old anterior infarct',
        'rate': 75,
        'category': 'Myocardial Infarction'
    },
    {
        'key': 'wellens_syndrome',
        'name': 'Wellens Syndrome',
        'characteristics': 'Biphasic T waves in V2-V3, LAD stenosis pattern',
        'rate': 75,
        'category': 'Myocardial Infarction'
    },
    
    # Hypertrophy
    {
        'key': 'left_ventricular_hypertrophy',
        'name': 'Left Ventricular Hypertrophy',
        'characteristics': 'Tall R waves in V5-V6, deep S in V1-V2',
        'rate': 70,
        'category': 'Hypertrophy'
    },
    {
        'key': 'lvh_twi',
        'name': 'LVH with T Wave Inversions',
        'characteristics': 'LVH criteria plus T wave inversions (strain pattern)',
        'rate': 75,
        'category': 'Hypertrophy'
    },
    {
        'key': 'right_ventricular_hypertrophy',
        'name': 'Right Ventricular Hypertrophy',
        'characteristics': 'Tall R in V1, deep S in V6, right axis deviation',
        'rate': 80,
        'category': 'Hypertrophy'
    },
    {
        'key': 'left_atrial_enlargement',
        'name': 'Left Atrial Enlargement',
        'characteristics': 'Wide P waves (>120ms), notched P in lead II',
        'rate': 75,
        'category': 'Atrial Enlargement'
    },
    {
        'key': 'right_atrial_enlargement',
        'name': 'Right Atrial Enlargement',
        'characteristics': 'Tall P waves (>2.5mm) in lead II',
        'rate': 85,
        'category': 'Atrial Enlargement'
    },
    
    # Electrolyte Abnormalities
    {
        'key': 'hyperkalemia',
        'name': 'Hyperkalemia',
        'characteristics': 'Tall peaked T waves, wide QRS, sine wave pattern',
        'rate': 60,
        'category': 'Electrolyte Disorders'
    },
    {
        'key': 'hypokalemia',
        'name': 'Hypokalemia',
        'characteristics': 'Flat T waves, prominent U waves, ST depression',
        'rate': 70,
        'category': 'Electrolyte Disorders'
    },
    {
        'key': 'hypercalcemia',
        'name': 'Hypercalcemia',
        'characteristics': 'Shortened QT interval, J waves',
        'rate': 75,
        'category': 'Electrolyte Disorders'
    },
    {
        'key': 'hypocalcemia',
        'name': 'Hypocalcemia',
        'characteristics': 'Prolonged QT interval due to long ST segment',
        'rate': 75,
        'category': 'Electrolyte Disorders'
    },
    
    # Other Conditions
    {
        'key': 'long_qt_twi',
        'name': 'Long QT with T Wave Inversion',
        'characteristics': 'Prolonged QT interval with inverted T waves',
        'rate': 70,
        'category': 'Other Conditions'
    },
    {
        'key': 'brugada_syndrome',
        'name': 'Brugada Syndrome',
        'characteristics': 'ST elevation in V1-V3, coved ST segment',
        'rate': 75,
        'category': 'Other Conditions'
    },
    {
        'key': 'acute_pericarditis',
        'name': 'Acute Pericarditis',
        'characteristics': 'Diffuse ST elevation, PR depression',
        'rate': 90,
        'category': 'Other Conditions'
    },
    {
        'key': 'pericardial_effusion',
        'name': 'Pericardial Effusion',
        'characteristics': 'Low voltage QRS, electrical alternans possible',
        'rate': 85,
        'category': 'Other Conditions'
    },
    {
        'key': 'pulmonary_embolism',
        'name': 'Pulmonary Embolism',
        'characteristics': 'S1Q3T3 pattern, right heart strain',
        'rate': 110,
        'category': 'Other Conditions'
    },
    {
        'key': 'digitalis_effect',
        'name': 'Digitalis Effect',
        'characteristics': 'Sagging ST depression, shortened QT',
        'rate': 60,
        'category': 'Drug Effects'
    },
    
    # Junctional Rhythms
    {
        'key': 'junctional_rhythm',
        'name': 'Junctional Rhythm',
        'characteristics': 'Narrow QRS, no P waves or inverted P waves',
        'rate': 50,
        'category': 'Junctional Rhythms'
    },
    {
        'key': 'accelerated_junctional',
        'name': 'Accelerated Junctional Rhythm',
        'characteristics': 'Junctional rhythm 60-100 BPM',
        'rate': 80,
        'category': 'Junctional Rhythms'
    },
    {
        'key': 'idioventricular_rhythm',
        'name': 'Idioventricular Rhythm',
        'characteristics': 'Wide QRS, rate 30-50 BPM, ventricular escape',
        'rate': 40,
        'category': 'Ventricular Rhythms'
    },
    {
        'key': 'accelerated_idioventricular',
        'name': 'Accelerated Idioventricular Rhythm',
        'characteristics': 'Wide QRS, rate 50-100 BPM, ventricular origin',
        'rate': 75,
        'category': 'Ventricular Rhythms'
    }
]

class ClinicalECGGenerator:
    def __init__(self):
        self.fs = 500  # Sample rate (Hz)
        self.duration = 3.0  # 3 seconds
        self.t = np.linspace(0, self.duration, int(self.fs * self.duration))
        
        # Clinical layout: 4 columns + rhythm strip
        # Column 1: I, II, III
        # Column 2: aVR, aVL, aVF  
        # Column 3: V1, V2, V3
        # Column 4: V4, V5, V6
        # Bottom: Lead II rhythm strip (6 seconds)
        self.lead_positions = {
            # Column 1 - Bipolar limb leads
            'I': (0, 0),
            'II': (0, 1), 
            'III': (0, 2),
            
            # Column 2 - Augmented limb leads
            'aVR': (1, 0),
            'aVL': (1, 1),
            'aVF': (1, 2),
            
            # Column 3 - Precordial V1-V3
            'V1': (2, 0),
            'V2': (2, 1),
            'V3': (2, 2),
            
            # Column 4 - Precordial V4-V6
            'V4': (3, 0),
            'V5': (3, 1),
            'V6': (3, 2),
        }
        
    def generate_base_signal(self, heart_rate, diagnosis_key):
        """Generate base ECG signal based on diagnosis"""
        rr_interval = 60.0 / heart_rate if heart_rate > 0 else 1.0
        
        # Create base sinusoidal signal
        base_signal = np.zeros_like(self.t)
        
        if diagnosis_key == 'ventricular_fibrillation':
            # VF: Chaotic, irregular waveform
            return np.random.normal(0, 0.3, len(self.t))
        
        # Generate QRS complexes
        current_time = 0.2  # Start offset
        while current_time < self.duration:
            qrs_start = int(current_time * self.fs)
            qrs_duration = int(0.08 * self.fs)  # 80ms QRS
            
            if qrs_start + qrs_duration < len(base_signal):
                # Create QRS complex
                qrs_t = np.linspace(0, 1, qrs_duration)
                
                if 'bundle_branch_block' in diagnosis_key:
                    # Wide QRS for bundle branch blocks
                    qrs_duration = int(0.12 * self.fs)  # 120ms
                    qrs_t = np.linspace(0, 1, qrs_duration)
                    
                if 'ventricular' in diagnosis_key and 'tachycardia' in diagnosis_key:
                    # Wide, bizarre QRS for VT
                    qrs_amplitude = 1.5
                    qrs_pattern = qrs_amplitude * np.sin(np.pi * qrs_t) * np.exp(-2 * qrs_t)
                else:
                    # Normal QRS
                    qrs_amplitude = 1.0
                    qrs_pattern = qrs_amplitude * np.sin(np.pi * qrs_t)
                
                base_signal[qrs_start:qrs_start + len(qrs_pattern)] = qrs_pattern
            
            # Add irregular timing for AFib
            if 'atrial_fibrillation' in diagnosis_key:
                current_time += rr_interval * (0.7 + 0.6 * np.random.random())
            else:
                current_time += rr_interval
                
        return base_signal
    
    def apply_lead_characteristics(self, base_signal, lead_name, diagnosis_key):
        """Apply lead-specific characteristics"""
        signal = base_signal.copy()
        
        # Lead-specific amplitude adjustments
        amplitude_factors = {
            'I': 1.0, 'II': 1.2, 'III': 0.8,
            'aVR': -0.6, 'aVL': 0.9, 'aVF': 1.1,
            'V1': 0.7, 'V2': 1.0, 'V3': 1.3,
            'V4': 1.5, 'V5': 1.2, 'V6': 1.0
        }
        
        signal *= amplitude_factors.get(lead_name, 1.0)
        
        # Apply diagnosis-specific changes
        if 'stemi' in diagnosis_key:
            if diagnosis_key == 'stemi_anterior' and lead_name in ['V1', 'V2', 'V3', 'V4', 'V5', 'V6']:
                signal += 0.3  # ST elevation
            elif diagnosis_key == 'stemi_inferior' and lead_name in ['II', 'III', 'aVF']:
                signal += 0.4  # ST elevation
            elif diagnosis_key == 'stemi_lateral' and lead_name in ['I', 'aVL', 'V5', 'V6']:
                signal += 0.3  # ST elevation
                
        elif diagnosis_key == 'left_bundle_branch_block':
            if lead_name == 'V6':
                signal *= 1.5  # Broad R wave
            elif lead_name == 'V1':
                signal *= -0.8  # Deep S wave
                
        elif diagnosis_key == 'right_bundle_branch_block':
            if lead_name == 'V1':
                signal += 0.3 * np.sin(4 * np.pi * self.t)  # RSR' pattern
            elif lead_name == 'V6':
                signal += -0.2 * np.sin(2 * np.pi * self.t)  # Wide S
                
        elif diagnosis_key == 'left_ventricular_hypertrophy':
            if lead_name in ['V5', 'V6']:
                signal *= 1.8  # Tall R waves
            elif lead_name in ['V1', 'V2']:
                signal *= -1.5  # Deep S waves
                
        elif 'hyperkalemia' in diagnosis_key:
            # Tall, peaked T waves
            signal += 0.4 * np.sin(0.5 * np.pi * self.t)
            
        elif 'hypokalemia' in diagnosis_key:
            # Flat T waves, prominent U waves
            signal *= 0.7
            signal += 0.1 * np.sin(0.3 * np.pi * self.t)
            
        # Add some noise for realism
        signal += np.random.normal(0, 0.02, len(signal))
        
        return signal
    
    def create_clinical_layout(self, diagnosis):
        """Create 12-lead ECG in proper clinical column layout with traditional ECG paper"""
        fig = plt.figure(figsize=(15, 10))
        
        # Traditional pink ECG paper background
        ecg_pink = '#FFE5E5'  # Light pink
        fig.patch.set_facecolor(ecg_pink)
        
        # Generate base signal
        base_signal = self.generate_base_signal(diagnosis['rate'], diagnosis['key'])
        
        # Create 4x3 grid for the 12 leads
        gs = fig.add_gridspec(4, 4, height_ratios=[1, 1, 1, 0.8], hspace=0.3, wspace=0.2)
        
        # Lead order in clinical column layout
        lead_columns = [
            ['I', 'II', 'III'],          # Column 1: Bipolar limb leads
            ['aVR', 'aVL', 'aVF'],       # Column 2: Augmented limb leads
            ['V1', 'V2', 'V3'],          # Column 3: Precordial V1-V3
            ['V4', 'V5', 'V6']           # Column 4: Precordial V4-V6
        ]
        
        # Plot each column
        for col_idx, column_leads in enumerate(lead_columns):
            for row_idx, lead_name in enumerate(column_leads):
                ax = fig.add_subplot(gs[row_idx, col_idx])
                
                # Set pink background for each subplot
                ax.set_facecolor(ecg_pink)
                
                # Generate lead-specific signal
                lead_signal = self.apply_lead_characteristics(base_signal, lead_name, diagnosis['key'])
                
                # Plot ECG trace in black
                ax.plot(self.t, lead_signal, 'black', linewidth=1.2)
                ax.set_xlim(0, self.duration)
                ax.set_ylim(-2, 2)
                
                # ECG paper grid - pink lines
                ax.grid(True, alpha=0.6, linewidth=0.4, color='#FF69B4', linestyle='-')
                ax.grid(True, alpha=0.3, linewidth=0.2, color='#FFB6C1', linestyle='-')
                
                # Add black border around each lead
                for spine in ax.spines.values():
                    spine.set_edgecolor('black')
                    spine.set_linewidth(1.5)
                
                # Lead label with black background
                bbox_props = dict(boxstyle="round,pad=0.2", facecolor='black', alpha=0.8)
                ax.text(0.02, 0.95, lead_name, transform=ax.transAxes, 
                       fontsize=11, fontweight='bold', va='top', color='white', bbox=bbox_props)
                
                # Remove axes ticks but keep spines for borders
                ax.set_xticks([])
                ax.set_yticks([])
                
        # Add Lead II rhythm strip at bottom (6 seconds)
        rhythm_ax = fig.add_subplot(gs[3, :])
        
        # Set pink background for rhythm strip
        rhythm_ax.set_facecolor(ecg_pink)
        
        rhythm_t = np.linspace(0, 6.0, int(self.fs * 6.0))
        rhythm_base = self.generate_base_signal(diagnosis['rate'], diagnosis['key'])
        
        # Extend rhythm signal to 6 seconds
        rhythm_signal = np.tile(rhythm_base, int(np.ceil(6.0 / self.duration)))[:len(rhythm_t)]
        rhythm_signal = self.apply_lead_characteristics(rhythm_signal, 'II', diagnosis['key'])
        
        # Plot rhythm strip in black
        rhythm_ax.plot(rhythm_t, rhythm_signal, 'black', linewidth=1.2)
        rhythm_ax.set_xlim(0, 6.0)
        rhythm_ax.set_ylim(-2, 2)
        
        # ECG paper grid for rhythm strip
        rhythm_ax.grid(True, alpha=0.6, linewidth=0.4, color='#FF69B4', linestyle='-')
        rhythm_ax.grid(True, alpha=0.3, linewidth=0.2, color='#FFB6C1', linestyle='-')
        
        # Add black border around rhythm strip
        for spine in rhythm_ax.spines.values():
            spine.set_edgecolor('black')
            spine.set_linewidth(1.5)
        
        # Rhythm strip label with black background
        bbox_props = dict(boxstyle="round,pad=0.2", facecolor='black', alpha=0.8)
        rhythm_ax.text(0.02, 0.95, 'Lead II (Rhythm Strip - 6 seconds)', transform=rhythm_ax.transAxes,
                      fontsize=11, fontweight='bold', va='top', color='white', bbox=bbox_props)
        rhythm_ax.set_xticks([])
        rhythm_ax.set_yticks([])
        
        plt.tight_layout()
        return fig

def main():
    print("🏥 Correct Clinical ECG Generator")
    print("=" * 60)
    print("Generating ECGs in proper clinical column layout:")
    print("Column 1: I, II, III (bipolar limb leads)")
    print("Column 2: aVR, aVL, aVF (augmented limb leads)")
    print("Column 3: V1, V2, V3 (precordial chest leads)")
    print("Column 4: V4, V5, V6 (remaining precordial leads)")
    print("Background: Traditional pink ECG paper with medical grid")
    print("Format: 1200x400px horizontal layout")
    print("Duration: 3 seconds + 6-second rhythm strip")
    print()
    
    # Create output directory for corrected clinical ECGs
    output_dir = Path("public/ecg/correct_clinical")
    output_dir.mkdir(parents=True, exist_ok=True)
    
    generator = ClinicalECGGenerator()
    results = []
    
    total_diagnoses = len(CLINICAL_DIAGNOSES)
    print(f"Generating {total_diagnoses} clinical ECGs")
    
    for i, diagnosis in enumerate(CLINICAL_DIAGNOSES, 1):
        print(f"[{i}/{total_diagnoses}] Generating {diagnosis['name']}...")
        
        try:
            # Generate ECG
            fig = generator.create_clinical_layout(diagnosis)
            
            # Save with high DPI for medical quality and pink ECG background
            filename = f"correct_clinical_{diagnosis['key']}.png"
            filepath = output_dir / filename
            
            fig.savefig(filepath, dpi=150, bbox_inches='tight', 
                       facecolor='#FFE5E5', edgecolor='black',
                       format='png', pil_kwargs={'optimize': True})
            plt.close(fig)
            
            # Get file size
            file_size_kb = filepath.stat().st_size / 1024
            
            print(f"    ✅ Saved: {filename} ({file_size_kb:.1f}KB)")
            
            results.append({
                'diagnosis_key': diagnosis['key'],
                'diagnosis_name': diagnosis['name'],
                'filename': filename,
                'filepath': str(filepath),
                'file_size_kb': round(file_size_kb, 1),
                'characteristics': diagnosis['characteristics'],
                'heart_rate': diagnosis['rate'],
                'category': diagnosis['category'],
                'success': True
            })
            
        except Exception as e:
            print(f"    ❌ Failed: {str(e)}")
            results.append({
                'diagnosis_key': diagnosis['key'],
                'diagnosis_name': diagnosis['name'],
                'error': str(e),
                'success': False
            })
    
    # Generate report
    successful = sum(1 for r in results if r['success'])
    failed = len(results) - successful
    
    report = {
        'generation_time': datetime.now().isoformat(),
        'total_diagnoses': len(CLINICAL_DIAGNOSES),
        'successful_generations': successful,
        'failed_generations': failed,
        'output_directory': str(output_dir),
        'format': '1200x400px clinical columns standard',
        'layout': 'Column 1: I,II,III | Column 2: aVR,aVL,aVF | Column 3: V1,V2,V3 | Column 4: V4,V5,V6 + Lead II rhythm',
        'results': results
    }
    
    report_file = output_dir / 'clinical_columns_report.json'
    with open(report_file, 'w') as f:
        json.dump(report, f, indent=2)
    
    print(f"\n🎉 Generated {successful} clinical ECGs successfully!")
    print(f"📁 Output: {output_dir}")
    print(f"📊 Report: {report_file}")
    print("📱 Ready for mobile quiz integration!")

if __name__ == "__main__":
    main()
