import { Lesson } from '@/types/learning';

export const optimizedLesson75: Lesson = {
  id: 'lesson-9-7-optimized',
  moduleId: 'module-9',
  title: "Complications and Post-MI ECG Changes",
  description: "Recognize ECG signs of MI complications and post-infarction monitoring patterns",
  order: 7,
  estimatedTime: 20,
  content: {
    type: 'mixed',
    introduction: "Learn to identify ECG signs of MI complications including mechanical complications, arrhythmias, and pericarditis. Post-MI monitoring helps detect life-threatening complications early.",
    sections: [
      {
        id: 'section-overview',
        title: "MI Complications",
        content: "COMPLICATION DETECTION: Mechanical → Electrical → Pericardial → Thrombotic → Early Recognition → Life-Saving Intervention",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'complications-overview',
        title: 'MI Complications Overview',
        content: 'MI complications include mechanical (papillary muscle rupture, VSD, free wall rupture), electrical (VT/VF, heart block), pericardial (pericarditis), and thrombotic (LV thrombus).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module9/lesson75/complications-overview.jpg',
        imageAlt: 'Overview of MI complications requiring urgent recognition',
        audio: {
          narrationUrl: 'audio/module9/lesson75/complications-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'papillary-muscle-rupture',
        title: 'Papillary Muscle Rupture',
        question: 'Acute papillary muscle rupture post-MI typically shows:',
        options: [
          'Normal ECG',
          'New pathological Q waves with acute pulmonary edema',
          'ST elevation only',
          'Isolated T wave changes'
        ],
        correctAnswer: 1,
        explanation: 'Papillary muscle rupture shows new Q waves in the territory with acute severe MR causing flash pulmonary edema. Medical emergency requiring urgent surgery.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson75/papillary-muscle-rupture.jpg',
        imageAlt: 'ECG showing inferior MI with papillary muscle rupture complications',
        audio: {
          narrationUrl: 'audio/module9/lesson75/papillary-muscle-rupture.mp3',
          autoPlay: false
        }
      },
      {
        id: 'ventricular-septal-defect',
        title: 'Post-MI Ventricular Septal Defect',
        content: 'VSD post-MI: New harsh systolic murmur with Q waves in affected territory. Anterior MI → apical VSD, inferior MI → posterior VSD. Both require urgent surgical repair.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson75/ventricular-septal-defect.jpg',
        imageAlt: 'Post-MI VSD with characteristic ECG and clinical findings'},
      {
        id: 'post-mi-heart-block',
        title: 'Post-MI Heart Block',
        question: 'Inferior MI with complete heart block typically affects:',
        options: [
          'AV node (transient, narrow escape)',
          'Bundle of His (permanent, wide escape)',
          'No conduction system',
          'Only atrial conduction'
        ],
        correctAnswer: 0,
        explanation: 'Inferior MI affects AV node causing transient complete heart block with narrow QRS escape rhythm. Usually resolves, unlike anterior MI heart block.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module9/lesson75/post-mi-heart-block.jpg',
        imageAlt: 'Complete heart block complicating inferior MI'},
      {
        id: 'post-mi-pericarditis',
        title: 'Post-MI Pericarditis (Dressler Syndrome)',
        content: 'Post-MI pericarditis: Diffuse ST elevation weeks after MI, different from acute MI pattern. Responds to anti-inflammatory treatment, not revascularization.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module9/lesson75/post-mi-pericarditis.jpg',
        imageAlt: 'Post-MI pericarditis showing diffuse ST elevation pattern'},
      {
        id: 'ventricular-aneurysm',
        title: 'Left Ventricular Aneurysm',
        question: 'LV aneurysm post-MI typically shows:',
        options: [
          'Resolved Q waves',
          'Persistent ST elevation in infarct territory',
          'Normal ECG',
          'New bundle branch block'
        ],
        correctAnswer: 1,
        explanation: 'LV aneurysm shows persistent ST elevation weeks after MI in the infarct territory, indicating dyskinetic wall motion and potential thrombus formation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson75/ventricular-aneurysm.jpg',
        imageAlt: 'LV aneurysm with persistent ST elevation post-MI'},
      {
        id: 'arrhythmic-complications',
        title: 'Post-MI Arrhythmic Complications',
        content: 'VT/VF risk highest first 24-48 hours post-MI. Sustained monomorphic VT suggests scar-related reentry. Polymorphic VT suggests ongoing ischemia requiring revascularization.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module9/lesson75/arrhythmic-complications.jpg',
        imageAlt: 'Post-MI ventricular arrhythmias requiring immediate treatment'},
      {
        id: 'complications-mastery',
        title: 'MI Complications Mastery',
        content: 'You can now recognize serious MI complications early through ECG monitoring. This enables rapid intervention for mechanical, electrical, and pericardial complications.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson75/complications-mastery.jpg',
        imageAlt: 'MI complications recognition mastery for optimal patient care',
        audio: {
          narrationUrl: 'audio/module9/lesson75/complications-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "MI complications include mechanical (papillary rupture, VSD), electrical (VT, heart block), pericardial (Dressler syndrome), and aneurysm formation. Early ECG recognition saves lives.",
    keyPoints: [
      "Mechanical complications require urgent surgical repair",
      "Inferior MI heart block usually transient",
      "Persistent ST elevation suggests LV aneurysm",
      "VT/VF risk highest first 48 hours post-MI"
    ],
    resources: [
      {
        title: "MI Complications Recognition",
        url: "https://youtube.com/watch?v=mi_complications",
        type: "video"
      }
    ]
  },
  tasks: [],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
