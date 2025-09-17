// EXAMPLE: Adding a Real ECG Module 
// Add this to your sampleModules.ts file

{
  title: "STEMI Recognition & Management",
  description: "Master the identification of ST-elevation myocardial infarction patterns and acute management strategies",
  category: 'ischemia',
  difficulty: 'intermediate',
  estimatedTime: 75,
  prerequisites: ["ECG Basics & Anatomy", "Normal Sinus Rhythm"],
  lessons: [
    {
      id: 'stemi-lesson-1',
      moduleId: '',
      title: "STEMI Criteria & Lead Groups",
      description: "Learn the diagnostic criteria for STEMI and anatomical lead correlations",
      order: 1,
      estimatedTime: 25,
      content: {
        type: 'mixed',
        introduction: "ST-elevation myocardial infarction (STEMI) is a medical emergency requiring rapid identification and treatment. The key is recognizing the specific ECG patterns that indicate acute coronary artery occlusion.",
        sections: [
          {
            id: 'stemi-criteria',
            title: "STEMI Diagnostic Criteria",
            content: `
              **STEMI Criteria (AHA Guidelines):**
              
              • **Men ≥40 years:** ST elevation ≥2mm in V2-V3, ≥1mm in other leads
              • **Men <40 years:** ST elevation ≥2.5mm in V2-V3, ≥1mm in other leads  
              • **Women:** ST elevation ≥1.5mm in V2-V3, ≥1mm in other leads
              • **Posterior leads (V7-V9):** ST elevation ≥0.5mm
              
              **Time-sensitive diagnosis:** These changes must be in ≥2 contiguous leads representing the same coronary territory.
            `,
            mediaType: 'image'
          },
          {
            id: 'lead-groups',
            title: "Anatomical Lead Correlations",
            content: `
              **Anterior STEMI:** V1-V6 (LAD territory)
              • Septal: V1-V2
              • Anterior: V3-V4  
              • Lateral: V5-V6, I, aVL
              
              **Inferior STEMI:** II, III, aVF (RCA/LCX territory)
              • Often shows reciprocal depression in I, aVL
              
              **Posterior STEMI:** V7-V9 or reciprocal changes in V1-V3
              • Large R waves and ST depression in V1-V2
              
              **Right Ventricular:** V4R (with inferior STEMI)
            `,
            mediaType: 'interactive'
          }
        ],
        summary: "You now understand STEMI diagnostic criteria and can correlate ECG changes with coronary anatomy.",
        keyPoints: [
          "Age and gender-specific ST elevation criteria",
          "Contiguous leads requirement (≥2 leads)",
          "Anatomical correlation with coronary territories",
          "Time-sensitive diagnosis for emergency treatment"
        ],
        resources: [
          {
            title: "AHA STEMI Guidelines 2013",
            url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000006",
            type: "external"
          },
          {
            title: "ESC STEMI Guidelines",
            url: "https://academic.oup.com/eurheartj/article/39/2/119/4095042",
            type: "external"
          }
        ]
      },
      tasks: [],
      completed: false,
      attempts: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'stemi-lesson-2',
      moduleId: '',
      title: "STEMI Mimics & Differential Diagnosis",
      description: "Distinguish STEMI from other causes of ST elevation",
      order: 2,
      estimatedTime: 20,
      content: {
        type: 'mixed',
        introduction: "Not all ST elevation represents acute STEMI. Understanding STEMI mimics is crucial to avoid unnecessary interventions and identify the true cause of ST changes.",
        sections: [
          {
            id: 'stemi-mimics',
            title: "Common STEMI Mimics",
            content: `
              **Benign Early Repolarization (BER):**
              • Concave ST elevation (vs convex in STEMI)
              • J-point notching or slurring
              • Prominent T waves
              • No reciprocal changes
              • Stable pattern over time
              
              **Pericarditis:**
              • Widespread concave ST elevation
              • PR depression (opposite of STEMI)
              • No territorial distribution
              • Often has chest pain with positional component
              
              **Left Bundle Branch Block:**
              • Can mask STEMI changes
              • Use Sgarbossa criteria for STEMI diagnosis
              • Consider serial ECGs and clinical picture
              
              **Hyperkalemia:**
              • Peaked T waves → QRS widening → sine wave
              • Can cause pseudo-STEMI pattern
            `,
            mediaType: 'image'
          }
        ],
        summary: "You can now differentiate true STEMI from common mimics using morphology and clinical context.",
        keyPoints: [
          "BER shows concave ST elevation with J-point changes",
          "Pericarditis has widespread changes + PR depression", 
          "LBBB requires Sgarbossa criteria for STEMI diagnosis",
          "Clinical correlation is essential for diagnosis"
        ],
        resources: []
      },
      tasks: [],
      completed: false,
      attempts: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'stemi-lesson-3',
      moduleId: '',
      title: "Acute Management & Door-to-Balloon Time",
      description: "Learn the time-critical management of STEMI patients",
      order: 3,
      estimatedTime: 30,
      content: {
        type: 'mixed',
        introduction: "Time is muscle in STEMI management. Every minute of delay increases mortality and reduces myocardial salvage. Understanding the management pathway is crucial for optimal patient outcomes.",
        sections: [
          {
            id: 'management-pathway',
            title: "STEMI Management Algorithm",
            content: `
              **Immediate Actions (0-10 minutes):**
              • 12-lead ECG within 10 minutes of arrival
              • Aspirin 325mg (unless allergic)
              • Clopidogrel 600mg loading dose
              • Atorvastatin 80mg
              • Metoprolol if no contraindications
              
              **Reperfusion Strategy (Goal <90 minutes):**
              
              **Primary PCI (Preferred if available <120 min):**
              • Door-to-balloon time goal: <90 minutes
              • Transfer to cath lab immediately
              • Bivalirudin or heparin + GP IIb/IIIa inhibitor
              
              **Fibrinolytic Therapy (if PCI not available):**
              • Door-to-needle time goal: <30 minutes
              • Age <75: TNK-tPA weight-based dosing
              • Monitor for reperfusion signs
              • Transfer for rescue PCI if failed
              
              **Contraindications to Lysis:**
              • Active bleeding, recent surgery, stroke history
              • Aortic dissection, severe hypertension
            `,
            mediaType: 'interactive'
          }
        ],
        summary: "You understand the critical time windows and management strategies for STEMI patients.",
        keyPoints: [
          "ECG diagnosis within 10 minutes of arrival",
          "Primary PCI preferred if available <120 minutes", 
          "Door-to-balloon goal <90 minutes",
          "Fibrinolysis if PCI unavailable (goal <30 min)",
          "Dual antiplatelet therapy is essential"
        ],
        resources: [
          {
            title: "ACC/AHA STEMI Guidelines",
            url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000000336",
            type: "external"
          }
        ]
      },
      tasks: [],
      completed: false,
      attempts: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  unlocked: false, // Will unlock when prerequisites are met
  order: 8,
  tags: ['stemi', 'ischemia', 'emergency', 'acute', 'management', 'pci'],
  featured: true
}
