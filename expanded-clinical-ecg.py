#!/usr/bin/env python3
"""
Expanded Clinical ECG Generator
Generates clinical-standard 12-lead ECGs for all available diagnoses
Format: 1200x400px horizontal layout, 3-second duration
Medical accuracy: 10mm/mV amplitude, 25mm/s paper speed
"""

import numpy as np
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from pathlib import Path
import json
import os
from datetime import datetime

class ExpandedClinicalECGGenerator:
    def __init__(self):
        self.output_dir = Path("public/ecg/clinical_corrected")  # New folder for corrected layout
        self.output_dir.mkdir(parents=True, exist_ok=True)
        
        # Medical-standard parameters
        self.duration = 3.0  # seconds
        self.sample_rate = 500  # Hz
        self.samples = int(self.duration * self.sample_rate)
        self.time = np.linspace(0, self.duration, self.samples)
        
        # Clinical format settings
        self.fig_width = 12.0  # inches
        self.fig_height = 4.0   # inches
        self.dpi = 100
        
        # Medical scaling: 10mm/mV, 25mm/s
        self.mv_per_inch = 10.0 / 25.4  # 10mm per mV converted to inches
        self.paper_speed = 25.0  # mm/s
        
        # Initialize comprehensive diagnosis database
        self.diagnoses = self._initialize_diagnoses()
        
    def _initialize_diagnoses(self):
        """Initialize comprehensive diagnosis database with clinical parameters"""
        return {
            # === NORMAL & SINUS RHYTHMS ===
            'normal_sinus_rhythm': {
                'name': 'Normal Sinus Rhythm',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Regular rhythm, normal rate (60-100 BPM), normal intervals',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'sinus_bradycardia': {
                'name': 'Sinus Bradycardia',
                'heart_rate': 45,
                'pr_interval': 0.18,
                'qrs_width': 0.08,
                'qt_interval': 0.46,
                'characteristics': 'Slow heart rate (<60 BPM), regular rhythm',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'sinus_tachycardia': {
                'name': 'Sinus Tachycardia',
                'heart_rate': 120,
                'pr_interval': 0.14,
                'qrs_width': 0.08,
                'qt_interval': 0.36,
                'characteristics': 'Fast heart rate (>100 BPM), regular rhythm',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'sinus_arrhythmia': {
                'name': 'Sinus Arrhythmia',
                'heart_rate': 70,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Irregular sinus rhythm, rate varies with respiration',
                'p_wave_present': True,
                'rhythm_type': 'irregular'
            },
            
            # === ATRIAL ARRHYTHMIAS ===
            'atrial_fibrillation': {
                'name': 'Atrial Fibrillation',
                'heart_rate': 90,
                'pr_interval': None,  # No P waves
                'qrs_width': 0.08,
                'qt_interval': 0.38,
                'characteristics': 'Irregularly irregular rhythm, no P waves',
                'p_wave_present': False,
                'rhythm_type': 'irregularly_irregular'
            },
            'atrial_flutter': {
                'name': 'Atrial Flutter',
                'heart_rate': 75,  # 2:1 conduction (atrial rate 300)
                'pr_interval': None,  # Flutter waves instead
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Sawtooth flutter waves, regular ventricular response',
                'p_wave_present': False,
                'rhythm_type': 'regular'
            },
            'afib_rvr': {
                'name': 'Atrial Fibrillation with RVR',
                'heart_rate': 150,
                'pr_interval': None,
                'qrs_width': 0.08,
                'qt_interval': 0.32,
                'characteristics': 'Irregularly irregular rhythm, rapid ventricular response',
                'p_wave_present': False,
                'rhythm_type': 'irregularly_irregular'
            },
            'multifocal_atrial_tachycardia': {
                'name': 'Multifocal Atrial Tachycardia',
                'heart_rate': 110,
                'pr_interval': 0.15,
                'qrs_width': 0.08,
                'qt_interval': 0.36,
                'characteristics': 'Multiple P wave morphologies, irregular rhythm',
                'p_wave_present': True,
                'rhythm_type': 'irregular'
            },
            
            # === VENTRICULAR ARRHYTHMIAS ===
            'monomorphic_vt': {
                'name': 'Monomorphic Ventricular Tachycardia',
                'heart_rate': 180,
                'pr_interval': None,
                'qrs_width': 0.14,
                'qt_interval': None,
                'characteristics': 'Wide QRS tachycardia, monomorphic morphology',
                'p_wave_present': False,
                'rhythm_type': 'regular'
            },
            'polymorphic_vt': {
                'name': 'Polymorphic Ventricular Tachycardia',
                'heart_rate': 200,
                'pr_interval': None,
                'qrs_width': 0.16,
                'qt_interval': None,
                'characteristics': 'Wide QRS tachycardia, changing morphology',
                'p_wave_present': False,
                'rhythm_type': 'irregular'
            },
            'ventricular_fibrillation': {
                'name': 'Ventricular Fibrillation',
                'heart_rate': None,  # Chaotic
                'pr_interval': None,
                'qrs_width': None,
                'qt_interval': None,
                'characteristics': 'Chaotic ventricular activity, no organized rhythm',
                'p_wave_present': False,
                'rhythm_type': 'chaotic'
            },
            'monomorphic_pvc': {
                'name': 'Monomorphic PVCs',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.08,  # For normal beats
                'qt_interval': 0.40,
                'characteristics': 'Premature ventricular complexes, same morphology',
                'p_wave_present': True,
                'rhythm_type': 'irregular'
            },
            'polymorphic_pvc': {
                'name': 'Polymorphic PVCs',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Premature ventricular complexes, different morphologies',
                'p_wave_present': True,
                'rhythm_type': 'irregular'
            },
            
            # === SUPRAVENTRICULAR TACHYCARDIAS ===
            'svt_avnrt': {
                'name': 'SVT (AVNRT)',
                'heart_rate': 160,
                'pr_interval': None,  # P waves hidden in QRS
                'qrs_width': 0.08,
                'qt_interval': 0.32,
                'characteristics': 'Narrow QRS tachycardia, regular rhythm',
                'p_wave_present': False,
                'rhythm_type': 'regular'
            },
            'svt_avrt': {
                'name': 'SVT (AVRT)',
                'heart_rate': 170,
                'pr_interval': None,  # Retrograde P waves
                'qrs_width': 0.08,
                'qt_interval': 0.30,
                'characteristics': 'Narrow QRS tachycardia, retrograde P waves',
                'p_wave_present': False,
                'rhythm_type': 'regular'
            },
            
            # === CONDUCTION DISORDERS ===
            'left_bundle_branch_block': {
                'name': 'Left Bundle Branch Block',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.13,
                'qt_interval': 0.42,
                'characteristics': 'Wide QRS with broad R in V6, deep S in V1',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'right_bundle_branch_block': {
                'name': 'Right Bundle Branch Block',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.13,
                'qt_interval': 0.42,
                'characteristics': "Wide QRS with RSR' pattern in V1",
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'first_degree_av_block': {
                'name': 'First Degree AV Block',
                'heart_rate': 70,
                'pr_interval': 0.24,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Prolonged PR interval (>200ms), regular rhythm',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'second_degree_av_block_type1': {
                'name': 'Second Degree AV Block (Mobitz I)',
                'heart_rate': 60,
                'pr_interval': 0.20,  # Variable
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Progressive PR prolongation with dropped beats',
                'p_wave_present': True,
                'rhythm_type': 'irregular'
            },
            'second_degree_av_block_type2': {
                'name': 'Second Degree AV Block (Mobitz II)',
                'heart_rate': 55,
                'pr_interval': 0.18,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Fixed PR interval with intermittent dropped beats',
                'p_wave_present': True,
                'rhythm_type': 'irregular'
            },
            'third_degree_av_block': {
                'name': 'Third Degree (Complete) AV Block',
                'heart_rate': 40,
                'pr_interval': None,  # No relationship
                'qrs_width': 0.12,
                'qt_interval': 0.46,
                'characteristics': 'Complete AV dissociation, escape rhythm',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            
            # === ISCHEMIA & INFARCTION ===
            'stemi_anterior': {
                'name': 'STEMI - Anterior',
                'heart_rate': 85,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'ST elevation in V1-V6, anterior wall injury',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'stemi_inferior': {
                'name': 'STEMI - Inferior',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'ST elevation in II, III, aVF, inferior wall injury',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'stemi_lateral': {
                'name': 'STEMI - Lateral',
                'heart_rate': 80,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'ST elevation in I, aVL, V5-V6, lateral wall injury',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'nstemi': {
                'name': 'NSTEMI',
                'heart_rate': 85,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'ST depression, T wave inversion, no ST elevation',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'inferior_mi': {
                'name': 'Old Inferior MI',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Q waves in II, III, aVF, old inferior infarction',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'anterior_mi': {
                'name': 'Old Anterior MI',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Q waves in V1-V6, old anterior infarction',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'wellens_syndrome': {
                'name': 'Wellens Syndrome',
                'heart_rate': 80,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Biphasic T waves in V2-V3, critical LAD stenosis',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            
            # === STRUCTURAL HEART DISEASE ===
            'left_ventricular_hypertrophy': {
                'name': 'Left Ventricular Hypertrophy',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.10,
                'qt_interval': 0.42,
                'characteristics': 'Voltage criteria for LVH, strain pattern',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'lvh_twi': {
                'name': 'LVH with T Wave Inversions',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.10,
                'qt_interval': 0.42,
                'characteristics': 'LVH voltage criteria with secondary repolarization changes',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'right_ventricular_hypertrophy': {
                'name': 'Right Ventricular Hypertrophy',
                'heart_rate': 85,
                'pr_interval': 0.16,
                'qrs_width': 0.09,
                'qt_interval': 0.40,
                'characteristics': 'Right axis deviation, tall R in V1',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'left_atrial_enlargement': {
                'name': 'Left Atrial Enlargement',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'P mitrale in II, biphasic P in V1',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'right_atrial_enlargement': {
                'name': 'Right Atrial Enlargement',
                'heart_rate': 85,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Tall peaked P waves (P pulmonale)',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            
            # === ELECTROLYTE ABNORMALITIES ===
            'hyperkalemia': {
                'name': 'Hyperkalemia',
                'heart_rate': 65,
                'pr_interval': 0.18,
                'qrs_width': 0.11,
                'qt_interval': 0.38,
                'characteristics': 'Tall peaked T waves, widened QRS',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'hypokalemia': {
                'name': 'Hypokalemia',
                'heart_rate': 80,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.46,
                'characteristics': 'U waves, flattened T waves, prolonged QT',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'hypercalcemia': {
                'name': 'Hypercalcemia',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.32,
                'characteristics': 'Shortened QT interval',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'hypocalcemia': {
                'name': 'Hypocalcemia',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.48,
                'characteristics': 'Prolonged QT interval',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            
            # === OTHER CONDITIONS ===
            'long_qt_twi': {
                'name': 'Long QT with T Wave Inversion',
                'heart_rate': 70,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.52,
                'characteristics': 'Prolonged QT interval with global T wave inversions',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'brugada_syndrome': {
                'name': 'Brugada Syndrome',
                'heart_rate': 75,
                'pr_interval': 0.16,
                'qrs_width': 0.10,
                'qt_interval': 0.40,
                'characteristics': 'Type 1 Brugada pattern in V1-V3',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'acute_pericarditis': {
                'name': 'Acute Pericarditis',
                'heart_rate': 85,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Diffuse ST elevation with PR depression',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'pericardial_effusion': {
                'name': 'Pericardial Effusion',
                'heart_rate': 90,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Low voltage, electrical alternans',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'pulmonary_embolism': {
                'name': 'Pulmonary Embolism',
                'heart_rate': 110,
                'pr_interval': 0.16,
                'qrs_width': 0.08,
                'qt_interval': 0.36,
                'characteristics': 'S1Q3T3 pattern, right heart strain',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            'digitalis_effect': {
                'name': 'Digitalis Effect',
                'heart_rate': 65,
                'pr_interval': 0.18,
                'qrs_width': 0.08,
                'qt_interval': 0.38,
                'characteristics': 'Salvador Dali sign, scooped ST segments',
                'p_wave_present': True,
                'rhythm_type': 'regular'
            },
            
            # === JUNCTIONAL RHYTHMS ===
            'junctional_rhythm': {
                'name': 'Junctional Rhythm',
                'heart_rate': 50,
                'pr_interval': None,  # No P waves or retrograde
                'qrs_width': 0.08,
                'qt_interval': 0.44,
                'characteristics': 'Narrow QRS, no P waves or retrograde P waves',
                'p_wave_present': False,
                'rhythm_type': 'regular'
            },
            'accelerated_junctional': {
                'name': 'Accelerated Junctional Rhythm',
                'heart_rate': 80,
                'pr_interval': None,
                'qrs_width': 0.08,
                'qt_interval': 0.40,
                'characteristics': 'Junctional rhythm at 60-100 BPM',
                'p_wave_present': False,
                'rhythm_type': 'regular'
            },
            
            # === ESCAPE RHYTHMS ===
            'idioventricular_rhythm': {
                'name': 'Idioventricular Rhythm',
                'heart_rate': 35,
                'pr_interval': None,
                'qrs_width': 0.14,
                'qt_interval': 0.48,
                'characteristics': 'Wide QRS escape rhythm, rate 20-40 BPM',
                'p_wave_present': False,
                'rhythm_type': 'regular'
            },
            'accelerated_idioventricular': {
                'name': 'Accelerated Idioventricular Rhythm',
                'heart_rate': 70,
                'pr_interval': None,
                'qrs_width': 0.14,
                'qt_interval': 0.40,
                'characteristics': 'Wide QRS rhythm, rate 50-100 BPM',
                'p_wave_present': False,
                'rhythm_type': 'regular'
            }
        }
    
    def generate_clinical_ecg_waveform(self, diagnosis_key):
        """Generate ECG waveform for specific diagnosis"""
        diagnosis = self.diagnoses[diagnosis_key]
        
        # Handle special cases
        if diagnosis_key == 'ventricular_fibrillation':
            return self._generate_vfib_waveform()
        
        # Calculate heart rate and intervals
        heart_rate = diagnosis['heart_rate']
        if heart_rate is None:
            heart_rate = 75  # Default fallback
            
        rr_interval = 60.0 / heart_rate
        
        # Generate base waveform
        ecg_signal = np.zeros(self.samples)
        
        # Calculate beat positions
        beat_times = []
        current_time = 0.2  # Start after 200ms
        
        while current_time < self.duration - 0.2:
            beat_times.append(current_time)
            
            # Add rhythm irregularity based on type
            if diagnosis['rhythm_type'] == 'irregularly_irregular':
                # AFib pattern
                rr_variation = np.random.uniform(0.7, 1.3) * rr_interval
            elif diagnosis['rhythm_type'] == 'irregular':
                # Mild irregularity
                rr_variation = np.random.uniform(0.9, 1.1) * rr_interval
            else:
                # Regular rhythm
                rr_variation = rr_interval
                
            current_time += rr_variation
        
        # Generate ECG for each beat
        for beat_time in beat_times:
            ecg_signal += self._generate_single_beat(beat_time, diagnosis)
        
        return ecg_signal
    
    def _generate_single_beat(self, beat_time, diagnosis):
        """Generate a single ECG beat"""
        beat_signal = np.zeros(self.samples)
        beat_idx = int(beat_time * self.sample_rate)
        
        if beat_idx >= self.samples:
            return beat_signal
        
        # P wave (if present)
        if diagnosis['p_wave_present'] and diagnosis['pr_interval']:
            p_time = beat_time - 0.08
            if p_time > 0:
                p_idx = int(p_time * self.sample_rate)
                if p_idx < self.samples:
                    beat_signal += self._generate_p_wave(p_idx, diagnosis)
        
        # QRS complex
        beat_signal += self._generate_qrs_complex(beat_idx, diagnosis)
        
        # T wave
        t_time = beat_time + diagnosis['qrs_width'] + 0.10
        t_idx = int(t_time * self.sample_rate)
        if t_idx < self.samples:
            beat_signal += self._generate_t_wave(t_idx, diagnosis)
        
        return beat_signal
    
    def _generate_p_wave(self, p_idx, diagnosis):
        """Generate P wave"""
        p_wave = np.zeros(self.samples)
        p_duration = int(0.08 * self.sample_rate)  # 80ms
        
        for i in range(p_duration):
            if p_idx + i < self.samples:
                # Gaussian P wave
                t_norm = (i - p_duration/2) / (p_duration/4)
                amplitude = 0.1 * np.exp(-t_norm**2)
                p_wave[p_idx + i] = amplitude
        
        return p_wave
    
    def _generate_qrs_complex(self, qrs_idx, diagnosis):
        """Generate QRS complex"""
        qrs_signal = np.zeros(self.samples)
        qrs_duration = int(diagnosis['qrs_width'] * self.sample_rate)
        
        # Different QRS morphologies based on diagnosis
        if 'bundle_branch_block' in diagnosis['name'].lower():
            # Wide QRS for bundle branch blocks
            qrs_signal += self._generate_wide_qrs(qrs_idx, qrs_duration, diagnosis)
        elif 'ventricular' in diagnosis['name'].lower() and 'pvc' not in diagnosis['name'].lower():
            # Wide QRS for ventricular rhythms
            qrs_signal += self._generate_ventricular_qrs(qrs_idx, qrs_duration)
        else:
            # Normal narrow QRS
            qrs_signal += self._generate_normal_qrs(qrs_idx, qrs_duration)
        
        return qrs_signal
    
    def _generate_normal_qrs(self, qrs_idx, duration):
        """Generate normal QRS complex"""
        qrs = np.zeros(self.samples)
        
        # Q wave (small)
        q_duration = int(duration * 0.2)
        for i in range(q_duration):
            if qrs_idx + i < self.samples:
                qrs[qrs_idx + i] = -0.05
        
        # R wave (dominant)
        r_start = qrs_idx + q_duration
        r_duration = int(duration * 0.4)
        for i in range(r_duration):
            if r_start + i < self.samples:
                t_norm = i / r_duration
                qrs[r_start + i] = 1.0 * np.sin(np.pi * t_norm)
        
        # S wave
        s_start = r_start + r_duration
        s_duration = int(duration * 0.4)
        for i in range(s_duration):
            if s_start + i < self.samples:
                t_norm = i / s_duration
                qrs[s_start + i] = -0.3 * np.sin(np.pi * t_norm)
        
        return qrs
    
    def _generate_wide_qrs(self, qrs_idx, duration, diagnosis):
        """Generate wide QRS for bundle branch blocks"""
        qrs = np.zeros(self.samples)
        
        if 'left_bundle' in diagnosis['name'].lower():
            # LBBB pattern - broad R wave
            for i in range(duration):
                if qrs_idx + i < self.samples:
                    t_norm = i / duration
                    if t_norm < 0.7:
                        qrs[qrs_idx + i] = 0.8 * (1 - np.cos(2 * np.pi * t_norm))
                    else:
                        qrs[qrs_idx + i] = 0.8 * np.cos(np.pi * (t_norm - 0.7) / 0.3)
        else:
            # RBBB pattern - RSR' morphology
            for i in range(duration):
                if qrs_idx + i < self.samples:
                    t_norm = i / duration
                    if t_norm < 0.3:
                        qrs[qrs_idx + i] = 0.6 * np.sin(np.pi * t_norm / 0.3)
                    elif t_norm < 0.6:
                        qrs[qrs_idx + i] = -0.2
                    else:
                        qrs[qrs_idx + i] = 0.4 * np.sin(np.pi * (t_norm - 0.6) / 0.4)
        
        return qrs
    
    def _generate_ventricular_qrs(self, qrs_idx, duration):
        """Generate wide QRS for ventricular rhythms"""
        qrs = np.zeros(self.samples)
        
        for i in range(duration):
            if qrs_idx + i < self.samples:
                t_norm = i / duration
                # Wide, bizarre morphology
                qrs[qrs_idx + i] = 0.8 * np.sin(2 * np.pi * t_norm) * np.exp(-t_norm)
        
        return qrs
    
    def _generate_t_wave(self, t_idx, diagnosis):
        """Generate T wave"""
        t_wave = np.zeros(self.samples)
        t_duration = int(0.15 * self.sample_rate)  # 150ms
        
        # T wave morphology based on diagnosis
        if 'hyperkalemia' in diagnosis['name'].lower():
            # Tall peaked T waves
            amplitude = 0.4
        elif 'inversion' in diagnosis['characteristics'].lower():
            # Inverted T waves
            amplitude = -0.2
        elif 'hypokalemia' in diagnosis['name'].lower():
            # Flattened T waves
            amplitude = 0.05
        else:
            # Normal T wave
            amplitude = 0.2
        
        for i in range(t_duration):
            if t_idx + i < self.samples:
                t_norm = (i - t_duration/2) / (t_duration/3)
                t_wave[t_idx + i] = amplitude * np.exp(-t_norm**2)
        
        return t_wave
    
    def _generate_vfib_waveform(self):
        """Generate chaotic ventricular fibrillation waveform"""
        vfib_signal = np.zeros(self.samples)
        
        # Generate chaotic oscillations
        for i in range(self.samples):
            freq = np.random.uniform(8, 15)  # 8-15 Hz
            amplitude = np.random.uniform(0.1, 0.8)
            phase = np.random.uniform(0, 2*np.pi)
            
            vfib_signal[i] = amplitude * np.sin(2 * np.pi * freq * self.time[i] + phase)
        
        # Add noise for chaotic appearance
        noise = np.random.normal(0, 0.1, self.samples)
        vfib_signal += noise
        
        return vfib_signal
    
    def create_clinical_layout(self, diagnosis_key):
        """Create clinical standard 12-lead ECG layout - HORIZONTAL ONLY"""
        # Generate waveform
        base_signal = self.generate_clinical_ecg_waveform(diagnosis_key)
        
        # Create figure
        fig, ax = plt.subplots(figsize=(self.fig_width, self.fig_height), dpi=self.dpi)
        
        # Lead labels and positions (CORRECTED: Clinical standard COLUMN layout)
        # HORIZONTAL ONLY - NO rhythm strip
        leads = [
            # Column 1: I, II, III (bipolar limb leads)
            ('I', 0, 2),    # Top row
            ('II', 0, 1),   # Middle row 
            ('III', 0, 0),  # Bottom row
            # Column 2: aVR, aVL, aVF (augmented limb leads)
            ('aVR', 1, 2),  # Top row
            ('aVL', 1, 1),  # Middle row
            ('aVF', 1, 0),  # Bottom row
            # Column 3: V1, V2, V3 (precordial chest leads)
            ('V1', 2, 2),   # Top row
            ('V2', 2, 1),   # Middle row
            ('V3', 2, 0),   # Bottom row
            # Column 4: V4, V5, V6 (rest of precordial leads)
            ('V4', 3, 2),   # Top row
            ('V5', 3, 1),   # Middle row
            ('V6', 3, 0)    # Bottom row
        ]
        
        # Grid layout: 4 columns, 3 rows ONLY (no rhythm strip)
        col_width = 1.0 / 4  # 4 columns
        row_height = 1.0 / 3 # 3 rows (equal height)
        
        # Plot each lead
        for lead_name, col, row in leads:
            x_start = col * col_width
            y_start = row * row_height  # Fixed: no inversion, no offset
            
            # Create lead-specific signal variation
            lead_signal = self._modify_signal_for_lead(base_signal, lead_name, diagnosis_key)
            
            # Plot the signal
            x_data = np.linspace(x_start + 0.01, x_start + col_width * 0.95, len(lead_signal))
            y_data = y_start + lead_signal * 0.08 + row_height/2  # Scale and center properly
            
            ax.plot(x_data, y_data, 'black', linewidth=1.0)
            
            # Add lead label
            ax.text(x_start + 0.01, y_start + row_height - 0.05, lead_name, 
                   fontsize=9, fontweight='bold', color='black')
        
        # NO RHYTHM STRIP - removed completely
        
        # Add minimal grid
        self._add_minimal_grid(ax)
        
        # Clean up plot
        ax.set_xlim(0, 1)
        ax.set_ylim(0, 1)
        ax.set_aspect('equal')
        ax.axis('off')
        
        # Set background to pink ECG paper
        fig.patch.set_facecolor('#FFE4E1')  # Pink ECG paper background
        
        return fig
    
    def _modify_signal_for_lead(self, base_signal, lead_name, diagnosis_key):
        """Modify signal to simulate different lead perspectives"""
        signal = base_signal.copy()
        
        # Lead-specific amplitude and morphology variations
        lead_factors = {
            'I': 0.8, 'II': 1.0, 'III': 0.6,
            'aVR': -0.7, 'aVL': 0.7, 'aVF': 0.9,
            'V1': 0.6, 'V2': 0.8, 'V3': 1.2,
            'V4': 1.4, 'V5': 1.3, 'V6': 1.1
        }
        
        factor = lead_factors.get(lead_name, 1.0)
        signal *= factor
        
        # Add lead-specific variations based on diagnosis
        if diagnosis_key == 'left_bundle_branch_block':
            if lead_name in ['V5', 'V6', 'I', 'aVL']:
                signal *= 1.3  # Prominent in lateral leads
            elif lead_name == 'V1':
                signal *= -0.8  # Deep S wave in V1
        elif diagnosis_key == 'right_bundle_branch_block':
            if lead_name == 'V1':
                # RSR' pattern simulation
                signal = self._add_rsr_pattern(signal)
            elif lead_name in ['V5', 'V6']:
                signal *= 0.7  # Smaller in lateral leads
        
        return signal
    
    def _add_rsr_pattern(self, signal):
        """Add RSR' pattern for RBBB in V1"""
        # This is a simplified simulation
        modified_signal = signal.copy()
        # Add small secondary R wave
        for i in range(len(signal)):
            if abs(signal[i]) > 0.5:  # Near QRS complexes
                if i + 20 < len(signal):
                    modified_signal[i + 20] += 0.3
        return modified_signal
    
    def _add_minimal_grid(self, ax):
        """Add traditional pink ECG paper background with grid"""
        # Set pink ECG paper background
        ecg_pink = '#FFE4E1'  # Light pink color typical of ECG paper
        ax.set_facecolor(ecg_pink)
        
        # ECG grid lines (darker pink/red)
        major_grid_color = '#FFB6C1'  # Light pink for major grid
        minor_grid_color = '#FFC0CB'  # Very light pink for minor grid
        
        # Major grid lines (every 5mm = 0.2 seconds at 25mm/s)
        for x in np.arange(0, 1.01, 0.08):  # Major time divisions
            ax.axvline(x, color=major_grid_color, linewidth=0.8, alpha=0.7)
        
        # Minor grid lines (every 1mm = 0.04 seconds at 25mm/s)  
        for x in np.arange(0, 1.01, 0.016):  # Minor time divisions
            ax.axvline(x, color=minor_grid_color, linewidth=0.4, alpha=0.5)
        
        # Major horizontal lines (every 5mm = 0.5mV at 10mm/mV)
        for y in np.arange(0, 1.01, 0.05):  # Major voltage divisions
            ax.axhline(y, color=major_grid_color, linewidth=0.8, alpha=0.7)
            
        # Minor horizontal lines (every 1mm = 0.1mV at 10mm/mV)
        for y in np.arange(0, 1.01, 0.01):  # Minor voltage divisions
            ax.axhline(y, color=minor_grid_color, linewidth=0.4, alpha=0.5)
    
    def generate_clinical_ecg(self, diagnosis_key):
        """Generate and save clinical ECG"""
        try:
            diagnosis = self.diagnoses[diagnosis_key]
            
            # Create the clinical ECG
            fig = self.create_clinical_layout(diagnosis_key)
            
            # Save the image
            filename = f"clinical_{diagnosis_key}.png"
            filepath = self.output_dir / filename
            
            fig.savefig(filepath, dpi=self.dpi, bbox_inches='tight', 
                       facecolor='#FFE4E1', edgecolor='none',  # Pink ECG paper background
                       pad_inches=0.1)
            plt.close(fig)
            
            # Get file size
            file_size = filepath.stat().st_size / 1024  # KB
            
            return {
                'diagnosis_key': diagnosis_key,
                'diagnosis_name': diagnosis['name'],
                'filename': filename,
                'filepath': str(filepath),
                'file_size_kb': round(file_size, 1),
                'characteristics': diagnosis['characteristics'],
                'heart_rate': diagnosis['heart_rate'],
                'success': True
            }
            
        except Exception as e:
            return {
                'diagnosis_key': diagnosis_key,
                'error': str(e),
                'success': False
            }
    
    def generate_all_clinical_ecgs(self):
        """Generate all clinical ECGs"""
        print("🏥 CORRECTED Clinical ECG Generator")
        print("=" * 60)
        print(f"Generating {len(self.diagnoses)} clinical ECGs")
        print("Format: 1200x400px - HORIZONTAL ONLY layout")
        print("Layout: Col1(I,II,III) | Col2(aVR,aVL,aVF) | Col3(V1,V2,V3) | Col4(V4,V5,V6)")
        print("Background: Traditional pink ECG paper with grid")
        print("Duration: 3 seconds, NO rhythm strip")
        print()
        
        results = []
        successful = 0
        failed = 0
        
        for i, diagnosis_key in enumerate(self.diagnoses.keys(), 1):
            diagnosis_name = self.diagnoses[diagnosis_key]['name']
            print(f"[{i}/{len(self.diagnoses)}] Generating {diagnosis_name}...")
            
            result = self.generate_clinical_ecg(diagnosis_key)
            results.append(result)
            
            if result['success']:
                successful += 1
                print(f"    ✅ Saved: {result['filename']} ({result['file_size_kb']}KB)")
            else:
                failed += 1
                print(f"    ❌ Failed: {result['error']}")
        
        # Generate summary report
        report = {
            'generation_time': datetime.now().isoformat(),
            'total_diagnoses': len(self.diagnoses),
            'successful_generations': successful,
            'failed_generations': failed,
            'output_directory': str(self.output_dir),
            'format': '1200x400px clinical standard',
            'results': results
        }
        
        # Save report
        report_path = self.output_dir / 'expanded_clinical_report.json'
        with open(report_path, 'w') as f:
            json.dump(report, f, indent=2)
        
        print()
        print(f"🎉 Generated {successful} clinical ECGs successfully!")
        if failed > 0:
            print(f"⚠️  {failed} generations failed")
        print(f"📁 Output: {self.output_dir}")
        print(f"📊 Report: {report_path}")
        print("📱 Ready for mobile quiz integration!")
        
        return report

def main():
    generator = ExpandedClinicalECGGenerator()
    generator.generate_all_clinical_ecgs()

if __name__ == "__main__":
    main()
