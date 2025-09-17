import { Lesson } from '@/types/learning';

export const optimizedLesson27Comprehensive: Lesson = {
  id: 'lesson-3-7-optimized',
  moduleId: 'module-3',
  title: "AV Nodal Reentrant Tachycardia (AVNRT) Mastery",
  description: "Master AVNRT through comprehensive interactive learning - from dual pathway physiology to emergency management",
  order: 7,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "Master AV Nodal Reentrant Tachycardia! Learn the most common supraventricular tachycardia through comprehensive interactive lessons covering dual pathway physiology, recognition patterns, differential diagnosis, and evidence-based management.",
    
    sections: [
      {
        id: 'unit-1-overview',
        title: "Unit 1: AVNRT Foundation & Anatomy",
        content: "Definition → Epidemiology → AV Node Anatomy → Dual Pathways → Basic Mechanisms",
        mediaType: 'image'
      },
      {
        id: 'unit-2-overview', 
        title: "Unit 2: Dual Pathway Physiology",
        content: "Fast Pathway → Slow Pathway → Conduction Properties → Reentry Circuit → Initiation",
        mediaType: 'image'
      },
      {
        id: 'unit-3-overview',
        title: "Unit 3: ECG Recognition & Patterns",
        content: "Typical AVNRT → Atypical AVNRT → P Wave Analysis → Rate Characteristics → Variants",
        mediaType: 'image'
      },
      {
        id: 'unit-4-overview',
        title: "Unit 4: Differential Diagnosis",
        content: "AVNRT vs AVRT → AVNRT vs AT → Narrow QRS Tachycardias → Diagnostic Maneuvers",
        mediaType: 'image'
      },
      {
        id: 'unit-5-overview',
        title: "Unit 5: Clinical Management",
        content: "Acute Treatment → Vagal Maneuvers → Medications → Chronic Management → Ablation",
        mediaType: 'image'
      },
      {
        id: 'unit-6-overview',
        title: "Unit 6: Special Considerations",
        content: "Emergency Protocols → Pediatric AVNRT → Pregnancy → Athletes → Long-term Care",
        mediaType: 'image'
      }
    ],
    
    slides: [
      // ===============================================
      // 🫀 UNIT 1: AVNRT FOUNDATION & ANATOMY (8 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🫀 Unit 1: AVNRT Foundation & Anatomy',
        content: 'Master AVNRT fundamentals! Learn the definition, epidemiology, AV node anatomy, dual pathway concept, and basic reentrant mechanisms of the most common SVT.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-foundation-anatomy.png',
        imageAlt: 'AVNRT foundation and AV node anatomy',
        videoUrl: '/lessonvideo/module3/lesson27/avnrt-foundation.mp4',
        highlights: [
          '📊 Most common SVT (60% of all SVTs)',
          '🔄 Reentrant circuit within AV node',
          '⚡ Dual pathway concept: fast + slow',
          '📈 Regular narrow QRS tachycardia',
          '👥 Affects all ages, female predominance'
        ],
        hint: '🫀 AVNRT = AV node circus movement!'
      },

      {
        id: 'avnrt-definition-epidemiology',
        title: 'AVNRT Definition & Epidemiology',
        type: 'flashcard',
        flashcardFront: '📊 What is AVNRT and how common is it among supraventricular tachycardias?',
        flashcardBack: 'DEFINITION: AV Nodal Reentrant Tachycardia - reentrant circuit using dual AV nodal pathways. PREVALENCE: Most common SVT (60% of all SVTs). DEMOGRAPHICS: 2:1 female predominance, can occur at any age. PEAK: Often presents in 20s-40s. MECHANISM: Fast + slow pathway reentry within AV node. RATE: Typically 150-250 bpm with regular rhythm!',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-foundation-anatomy.png',
        imageAlt: 'AVNRT definition and epidemiology',
        hint: '📊 #1 SVT worldwide!'
      },

      {
        id: 'av-node-anatomy',
        title: 'AV Node Anatomy & Dual Pathways',
        type: 'tabs',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-foundation-anatomy.png',
        imageAlt: 'AV node anatomy and dual pathway structure',
        videoUrl: '/lessonvideo/module3/lesson27/av-node-anatomy.mp4',
        tabs: [
          {
            title: '🏗️ AV Node Structure',
            content: 'LOCATION: Triangle of Koch (CS os, tricuspid annulus, tendon of Todaro)\nSIZE: 1-5mm compact node\nZONES: AN (atrionodal), N (nodal), NH (nodal-His)\nCELLS: Slow conduction cells, decremental properties\nINNERVATION: Rich autonomic supply (vagal, sympathetic)\nFUNCTION: Filters atrial impulses, delays AV conduction'
          },
          {
            title: '⚡ Fast Pathway',
            content: 'LOCATION: Anterosuperior AV node region\nCONDUCTION: Fast (short conduction time)\nREFRACTORY PERIOD: Long (longer recovery time)\nAUTONOMIC: Less sensitive to autonomic changes\nFUNCTION: Normal pathway for sinus rhythm\nAVNRT ROLE: Usually retrograde limb in typical AVNRT\nECG: Short AH interval during normal conduction'
          },
          {
            title: '🐌 Slow Pathway',
            content: 'LOCATION: Posteroseptal AV node region\nCONDUCTION: Slow (long conduction time)\nREFRACTORY PERIOD: Short (quick recovery)\nAUTONOMIC: Very sensitive to vagal/sympathetic tone\nFUNCTION: Backup pathway, usually dormant\nAVNRT ROLE: Usually anterograde limb in typical AVNRT\nECG: Long AH interval when conducting'
          },
          {
            title: '🔄 Dual Pathway Concept',
            content: 'REQUIREMENTS: Two functionally distinct pathways\nPROPERTIES: Different conduction speeds and refractory periods\nEQUILIBRIUM: Usually fast pathway dominates\nRECIPROCAL: When one blocks, other may conduct\nREENTRY: Different recovery times allow circus movement\nVARIATION: Not all people have functionally dual pathways'
          }
        ],
        hint: '⚡ Two pathways, one node!'
      },

      {
        id: 'reentry-circuit-basics',
        title: 'AVNRT Reentry Circuit Fundamentals',
        type: 'steps',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-foundation-anatomy.png',
        imageAlt: 'AVNRT reentry circuit mechanism',
        videoUrl: '/lessonvideo/module3/lesson27/reentry-circuit.mp4',
        steps: [
          {
            number: 1,
            title: 'Dual Pathway Setup',
            description: 'AV node has functionally separate fast and slow conducting pathways with different properties.'
          },
          {
            number: 2,
            title: 'Normal Conduction',
            description: 'Sinus rhythm uses fast pathway (shorter conduction time, reaches ventricles first).'
          },
          {
            number: 3,
            title: 'Initiating Event',
            description: 'Premature atrial contraction (PAC) blocks in fast pathway due to long refractory period.'
          },
          {
            number: 4,
            title: 'Slow Pathway Conduction',
            description: 'PAC conducts down slow pathway (recovered due to short refractory period).'
          },
          {
            number: 5,
            title: 'Fast Pathway Recovery',
            description: 'By time impulse reaches His bundle, fast pathway has recovered and can conduct retrograde.'
          },
          {
            number: 6,
            title: 'Sustained Reentry',
            description: 'Circuit established: slow pathway → His → fast pathway → atria → slow pathway...'
          }
        ],
        hint: '🔄 Block one way, conduct the other!'
      },

      {
        id: 'unit1-quiz',
        title: '🫀 Unit 1 Quiz: AVNRT Foundation',
        content: "Test your AVNRT foundation knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/avnrt-foundation-anatomy.png',
        imageAlt: 'AVNRT foundation quiz illustration',
        videoUrl: '/lessonvideo/module3/lesson27/unit1-quiz-explanation.mp4',
        hint: '🧠 Master the AV node basics!',
        question: "What percentage of all supraventricular tachycardias does AVNRT represent?",
        options: [
          "Approximately 30%",
          "Approximately 45%",
          "Approximately 60%",
          "Approximately 80%"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! AVNRT represents approximately 60% of all supraventricular tachycardias, making it the most common SVT. This high prevalence makes AVNRT recognition and management skills essential for all healthcare providers."
      },

      // ===============================================
      // 🫀 UNIT 2: DUAL PATHWAY PHYSIOLOGY (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🫀 Unit 2: Dual Pathway Physiology',
        content: 'Master dual pathway physiology! Learn fast vs slow pathway properties, conduction characteristics, refractory periods, and how pathway differences create AVNRT circuits.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-dual-pathways.png',
        imageAlt: 'AVNRT dual pathway physiology',
        videoUrl: '/lessonvideo/module3/lesson27/dual-pathway-physiology.mp4',
        highlights: [
          '⚡ Fast pathway: quick conduction, long refractory',
          '🐌 Slow pathway: slow conduction, short refractory',
          '🔄 Reciprocal properties enable reentry',
          '🎛️ Autonomic modulation affects pathways',
          '📊 Conduction curves and critical intervals'
        ],
        hint: '⚡🐌 Opposite properties create the circuit!'
      },

      {
        id: 'pathway-properties-comparison',
        title: 'Fast vs Slow Pathway Properties',
        type: 'accordion',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-dual-pathways.png',
        imageAlt: 'Fast vs slow pathway comparison',
        videoUrl: '/lessonvideo/module3/lesson27/pathway-properties.mp4',
        accordionItems: [
          {
            title: '⚡ Fast Pathway Characteristics',
            content: 'CONDUCTION VELOCITY: Fast (short AH interval)\nREFRACTORY PERIOD: Long (slow recovery)\nLOCATION: Anterosuperior AV node\nAUTONOMIC SENSITIVITY: Low (stable conduction)\nNORMAL ROLE: Primary conduction pathway\nAVNRT ROLE: Usually retrograde limb\nDRUG SENSITIVITY: Less affected by AV nodal blockers'
          },
          {
            title: '🐌 Slow Pathway Characteristics',
            content: 'CONDUCTION VELOCITY: Slow (long AH interval)\nREFRACTORY PERIOD: Short (quick recovery)\nLOCATION: Posteroseptal AV node\nAUTONOMIC SENSITIVITY: High (very responsive)\nNORMAL ROLE: Usually inactive\nAVNRT ROLE: Usually anterograde limb\nDRUG SENSITIVITY: Very responsive to AV nodal blockers'
          },
          {
            title: '🔄 Reentry Requirements',
            content: 'SLOW CONDUCTION: Allows tissue recovery ahead of wavefront\nUNIDIRECTIONAL BLOCK: One pathway blocks, other conducts\nRECOVERY TIME: Blocked pathway recovers for return conduction\nSUSTAINED CIRCUIT: Continuous loop of excitation\nCRITICAL MASS: Sufficient tissue to maintain circuit\nFUNCTIONAL: Not necessarily anatomically distinct pathways'
          },
          {
            title: '📊 Conduction Properties',
            content: 'AH INTERVAL: Fast pathway 50-120ms, slow pathway >200ms\nREFRACTORY PERIOD: Fast pathway 400-500ms, slow pathway 200-300ms\nINCREMENTAL: Both show rate-dependent prolongation\nAUTONOMIC: Vagal stimulation affects slow pathway more\nDRUGS: Calcium blockers, beta blockers affect slow pathway preferentially\nAGE: Properties may change with aging'
          }
        ],
        hint: '⚡🐌 Opposite properties are the key!'
      },

      {
        id: 'reentry-initiation-mechanism',
        title: 'AVNRT Initiation Mechanism',
        type: 'flashcard',
        flashcardFront: '🚀 How does a premature atrial contraction (PAC) initiate AVNRT?',
        flashcardBack: 'PAC ARRIVES: Premature impulse reaches AV node. FAST PATHWAY: Still refractory from previous beat (long recovery). SLOW PATHWAY: Has recovered (short refractory period). UNIDIRECTIONAL BLOCK: PAC blocked in fast pathway, conducts down slow pathway. DELAY: Slow conduction gives fast pathway time to recover. RETROGRADE: Returns via recovered fast pathway. CIRCUIT: Continuous loop established!',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-dual-pathways.png',
        imageAlt: 'AVNRT initiation mechanism',
        hint: '🚀 PAC hits the refractory sweet spot!'
      },

      {
        id: 'autonomic-modulation',
        title: 'Autonomic Effects on AVNRT Pathways',
        type: 'tabs',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-dual-pathways.png',
        imageAlt: 'Autonomic modulation of AVNRT pathways',
        videoUrl: '/lessonvideo/module3/lesson27/autonomic-effects.mp4',
        tabs: [
          {
            title: '🧘 Vagal Effects',
            content: 'SLOW PATHWAY: Markedly prolonged conduction and refractoriness\nFAST PATHWAY: Minimal effect on conduction properties\nAVNRT CIRCUIT: May terminate ongoing AVNRT\nINITIATION: May prevent AVNRT initiation\nCLINICAL: Vagal maneuvers effective for termination\nVARIABILITY: Individual sensitivity varies greatly\nTIMING: Effects wear off quickly (minutes)'
          },
          {
            title: '💪 Sympathetic Effects',
            content: 'SLOW PATHWAY: Enhanced conduction, shortened refractoriness\nFAST PATHWAY: Moderate enhancement of conduction\nAVNRT CIRCUIT: May facilitate initiation and maintenance\nEXERCISE: Can trigger AVNRT in susceptible individuals\nSTRESS: Emotional stress common trigger\nCATECHOLAMINES: Isoproterenol can induce AVNRT in lab\nCIRCADIAN: Morning hours have higher incidence'
          },
          {
            title: '☕ Other Modulators',
            content: 'CAFFEINE: Can facilitate AVNRT initiation\nALCOHOL: May trigger episodes in some patients\nNICOTINE: Sympathetic stimulation can precipitate\nMEDICATIONS: Bronchodilators, decongestants\nTHYROID: Hyperthyroidism increases AVNRT risk\nELECTROLYTES: Hypokalemia, hypomagnesemia\nFATIGUE: May alter autonomic balance'
          },
          {
            title: '🎯 Clinical Implications',
            content: 'TRIGGERS: Identify and avoid known precipitants\nVAGAL MANEUVERS: First-line acute treatment\nBETA BLOCKERS: May prevent episodes\nCALCIUM BLOCKERS: Particularly effective for slow pathway\nLIFESTYLE: Stress reduction, adequate sleep\nEDUCATION: Patient recognition of triggers\nFOLLOW-UP: Monitor for pattern changes'
          }
        ],
        hint: '🧘💪 Autonomic balance affects circuit!'
      },

      {
        id: 'unit2-quiz',
        title: '🫀 Unit 2 Quiz: Dual Pathway Physiology',
        content: "Test your pathway physiology knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: '/lessonimages/avnrt-dual-pathways.png',
        imageAlt: 'Dual pathway physiology quiz',
        videoUrl: '/lessonvideo/module3/lesson27/unit2-quiz-explanation.mp4',
        hint: '🧠 Master the pathway differences!',
        question: "Why does the slow pathway typically conduct the initiating PAC in typical AVNRT?",
        options: [
          "Because it conducts faster than the fast pathway",
          "Because it has a shorter refractory period than the fast pathway",
          "Because it's located closer to the atria",
          "Because it's more sensitive to sympathetic stimulation"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The slow pathway has a shorter refractory period compared to the fast pathway. When a PAC arrives, the fast pathway is still refractory (long recovery time), while the slow pathway has already recovered (short refractory period) and can conduct the premature impulse."
      },

      // ===============================================
      // 🫀 UNIT 3: ECG RECOGNITION & PATTERNS (8 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🫀 Unit 3: ECG Recognition & Patterns',
        content: 'Master AVNRT ECG patterns! Learn typical vs atypical AVNRT recognition, P wave analysis, rate characteristics, and morphology patterns.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/avnrt_typical_180bpm_3.png',
        imageAlt: 'AVNRT ECG recognition patterns',
        videoUrl: '/lessonvideo/module3/lesson27/ecg-recognition.mp4',
        highlights: [
          '📈 Regular narrow QRS tachycardia',
          '🕵️ P waves: absent, pseudo-R\', or pseudo-S',
          '📊 Rate typically 150-250 bpm',
          '🔍 Typical vs atypical AVNRT patterns',
          '⚡ Abrupt onset and termination'
        ],
        hint: '📈 Look for hidden or pseudo P waves!'
      },

      {
        id: 'typical-avnrt-pattern',
        title: 'Typical AVNRT ECG Pattern',
        type: 'flashcard',
        flashcardFront: '📈 What are the classic ECG features of typical AVNRT?',
        flashcardBack: 'RATE: 150-250 bpm (usually 180-220). RHYTHM: Regular narrow QRS. P WAVES: Usually not visible (hidden in QRS). PSEUDO-R\': Small terminal deflection in V1 (retrograde P). PSEUDO-S: Small terminal deflection in leads II, III, aVF. RP INTERVAL: Very short (<70ms) or absent. ONSET: Abrupt start with initiating PAC. QRS: Normal width unless aberrancy!',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/avnrt_typical_180bpm_3.png',
        imageAlt: 'Typical AVNRT ECG pattern',
        hint: '📈 P waves hide in the QRS!'
      },

      {
        id: 'p-wave-analysis',
        title: 'P Wave Patterns in AVNRT',
        type: 'tabs',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/avnrt_typical_180bpm_3.png',
        imageAlt: 'AVNRT P wave analysis patterns',
        videoUrl: '/lessonvideo/module3/lesson27/p-wave-analysis.mp4',
        tabs: [
          {
            title: '🕵️ Typical AVNRT P Waves',
            content: 'LOCATION: Hidden within or immediately after QRS\nPSEUDO-R\': Terminal positive deflection in V1\nPSEUDO-S: Terminal negative deflection in inferior leads\nRP INTERVAL: <70ms (very short)\nCONCEPT: Simultaneous atrial and ventricular activation\nFREQUENCY: 90% of AVNRT cases\nRECOGNITION: Compare to baseline ECG if available'
          },
          {
            title: '🔍 Atypical AVNRT P Waves',
            content: 'LOCATION: Clearly visible between QRS complexes\nRP INTERVAL: >70ms (RP > PR pattern)\nMORPHOLOGY: Negative in inferior leads (retrograde)\nTYPES: Fast-slow AVNRT (uncommon)\nFREQUENCY: <10% of AVNRT cases\nDIFFERENTIAL: Must distinguish from AVRT, AT\nCLUE: P waves are retrograde (inverted in II, III, aVF)'
          },
          {
            title: '👻 Absent P Waves',
            content: 'MECHANISM: Atrial and ventricular activation simultaneous\nECG: No visible P waves at all\nDIAGNOSIS: Requires high suspicion based on other features\nRESPONSE: Adenosine response helps confirm\nFREQUENCY: Common in typical AVNRT\nPITFALL: Can be confused with VT if wide QRS\nCONFIRMATION: Vagal maneuvers or adenosine'
          },
          {
            title: '🎯 Clinical Recognition Tips',
            content: 'COMPARE: Look at baseline ECG for comparison\nMAGNIFY: Use high gain to see small deflections\nLEADS: V1 best for pseudo-R\', inferior leads for pseudo-S\nTIMING: Measure RP intervals carefully\nRESPONSE: AVNRT terminates with vagal maneuvers\nDOCUMENT: Always try to capture termination\nPATTERN: Regular rhythm rules out AFib'
          }
        ],
        hint: '🕵️ Detective work finds the P waves!'
      },

      {
        id: 'typical-vs-atypical',
        title: 'Typical vs Atypical AVNRT',
        type: 'accordion',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/avnrt_typical_180bpm_3.png',
        imageAlt: 'Typical vs atypical AVNRT comparison',
        videoUrl: '/lessonvideo/module3/lesson27/typical-vs-atypical.mp4',
        accordionItems: [
          {
            title: '⚡ Typical (Common) AVNRT',
            content: 'CIRCUIT: Slow pathway → ventricles → fast pathway → atria\nFREQUENCY: 90% of all AVNRT\nP WAVES: Hidden in QRS (pseudo-R\', pseudo-S)\nRP INTERVAL: <70ms\nRATE: Usually 180-220 bpm\nTERMINATION: Excellent response to vagal maneuvers\nPROGNOSIS: Generally benign'
          },
          {
            title: '🔄 Atypical (Uncommon) AVNRT',
            content: 'CIRCUIT: Fast pathway → ventricles → slow pathway → atria\nFREQUENCY: <10% of all AVNRT\nP WAVES: Visible between QRS complexes\nRP INTERVAL: >70ms (RP > PR)\nRATE: Often slower (150-180 bpm)\nTERMINATION: May be more resistant to vagal maneuvers\nDIFFERENTIAL: Must exclude AVRT and atrial tachycardia'
          },
          {
            title: '🌟 Fast-Slow AVNRT',
            content: 'MECHANISM: Fast anterograde, slow retrograde conduction\nECG: Long RP interval, visible retrograde P waves\nRATE: Often slower than typical AVNRT\nCHALLENGE: Can mimic atrial tachycardia\nDIAGNOSIS: May require EP study for confirmation\nTREATMENT: Similar to typical AVNRT'
          },
          {
            title: '🎯 Clinical Differentiation',
            content: 'RP RELATIONSHIP: Key differentiating feature\nADENOSINE TEST: All forms respond to adenosine\nVAGAL RESPONSE: Typical form responds better\nRATE: Typical usually faster\nCOMMON: Typical form much more frequent\nEP STUDY: Gold standard for definitive diagnosis\nTREATMENT: Similar approach for both forms'
          }
        ],
        hint: '⚡🔄 RP interval tells the story!'
      },

      {
        id: 'unit3-quiz',
        title: '🫀 Unit 3 Quiz: ECG Recognition',
        content: "Test your AVNRT ECG recognition skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/avnrt_typical_180bpm_3.png',
        imageAlt: 'AVNRT ECG recognition quiz',
        videoUrl: '/lessonvideo/module3/lesson27/unit3-quiz-explanation.mp4',
        hint: '🧠 Master the ECG patterns!',
        question: "What is the most characteristic ECG finding in typical AVNRT?",
        options: [
          "Wide QRS complexes",
          "P waves hidden in QRS with pseudo-R' in V1",
          "Long RP intervals with visible P waves",
          "Irregularly irregular rhythm"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The most characteristic finding in typical AVNRT is P waves hidden in the QRS complex, often creating a pseudo-R' deflection in V1 and pseudo-S waves in inferior leads. This occurs because atrial and ventricular activation happen nearly simultaneously."
      },

      // ===============================================
      // 🫀 UNIT 4: DIFFERENTIAL DIAGNOSIS (8 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🫀 Unit 4: AVNRT Differential Diagnosis',
        content: 'Master AVNRT differential diagnosis! Learn to distinguish AVNRT from AVRT, atrial tachycardia, atrial flutter, and other narrow QRS tachycardias.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-differential-diagnosis.png',
        imageAlt: 'AVNRT differential diagnosis overview',
        videoUrl: '/lessonvideo/module3/lesson27/differential-diagnosis.mp4',
        highlights: [
          '🆚 AVNRT vs AVRT: P wave timing',
          '📊 AVNRT vs Atrial Tachycardia patterns',
          '🌊 AVNRT vs Atrial Flutter recognition',
          '💊 Diagnostic maneuvers and responses',
          '🎯 Systematic differentiation approach'
        ],
        hint: '🆚 P wave timing is the key!'
      },

      {
        id: 'avnrt-vs-avrt',
        title: 'AVNRT vs AVRT: Key Differences',
        type: 'tabs',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-differential-diagnosis.png',
        imageAlt: 'AVNRT vs AVRT comparison',
        videoUrl: '/lessonvideo/module3/lesson27/avnrt-vs-avrt.mp4',
        tabs: [
          {
            title: '⚡ AVNRT Features',
            content: 'P WAVES: Hidden in QRS or very close (RP <70ms)\nCIRCUIT: Within AV node (dual pathways)\nONSET: PAC with critical timing\nRATE: 180-220 bpm typically\nMORPHOLOGY: Pseudo-R\' in V1, pseudo-S inferiorly\nVAGAL RESPONSE: Excellent (terminates or no effect)\nDEMOGRAPHICS: Female predominance, any age'
          },
          {
            title: '🔄 AVRT Features',
            content: 'P WAVES: Clearly visible between QRS (RP >70ms)\nCIRCUIT: AV node + accessory pathway\nONSET: PAC conducting via accessory pathway\nRATE: 150-250 bpm (variable)\nMORPHOLOGY: Normal retrograde P waves\nVAGAL RESPONSE: Good (terminates or no effect)\nDEMOGRAPHICS: Often younger, may have WPW history'
          },
          {
            title: '🎯 Key Differentiators',
            content: 'RP INTERVAL: <70ms = AVNRT, >70ms = likely AVRT\nP WAVE VISIBILITY: Hidden = AVNRT, visible = AVRT\nBASELINE ECG: WPW pattern suggests AVRT\nAGE: AVNRT any age, AVRT often younger\nRECURRENCE: AVNRT more frequent episodes\nABLATION: AVNRT targets slow pathway, AVRT targets accessory pathway'
          },
          {
            title: '🔍 Diagnostic Challenges',
            content: 'OVERLAP: Some cases difficult to distinguish\nABERRANCY: Wide QRS complicates diagnosis\nCOEXISTENCE: Both can occur in same patient\nADENOSINE: Both respond similarly\nEP STUDY: Gold standard for definitive diagnosis\nCLINICAL: Treatment often similar acutely'
          }
        ],
        hint: '⚡🔄 RP interval <70ms vs >70ms!'
      },

      {
        id: 'narrow-qrs-differential',
        title: 'Narrow QRS Tachycardia Differential',
        type: 'steps',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-differential-diagnosis.png',
        imageAlt: 'Systematic narrow QRS tachycardia differentiation',
        videoUrl: '/lessonvideo/module3/lesson27/narrow-qrs-differential.mp4',
        steps: [
          {
            number: 1,
            title: 'Assess Regularity',
            description: 'Regular: AVNRT, AVRT, AT, flutter. Irregular: AFib, multifocal AT, variable block.'
          },
          {
            number: 2,
            title: 'Identify P Waves',
            description: 'Hidden in QRS: likely AVNRT. Visible between QRS: AVRT, AT, flutter. Absent: AFib.'
          },
          {
            number: 3,
            title: 'Analyze P Wave Morphology',
            description: 'Retrograde (inverted II,III,aVF): AVNRT, AVRT. Upright: AT. Sawtooth: flutter.'
          },
          {
            number: 4,
            title: 'Measure RP Interval',
            description: 'RP <70ms: typical AVNRT. RP >70ms: atypical AVNRT, AVRT, AT.'
          },
          {
            number: 5,
            title: 'Consider Rate',
            description: 'AVNRT: 180-220. AVRT: 150-250. AT: 120-250. Flutter: 150 (2:1), 100 (3:1).'
          },
          {
            number: 6,
            title: 'Apply Diagnostic Maneuvers',
            description: 'Vagal/adenosine: AVNRT/AVRT terminate. AT may slow. Flutter rarely terminates.'
          }
        ],
        hint: '🎯 Systematic approach prevents errors!'
      },

      {
        id: 'diagnostic-maneuvers',
        title: 'Diagnostic Maneuvers for AVNRT',
        type: 'flashcard',
        flashcardFront: '💊 How do vagal maneuvers and adenosine help differentiate AVNRT from other SVTs?',
        flashcardBack: 'AVNRT: Terminates abruptly (breaks reentry circuit) or no effect. AVRT: Similar to AVNRT (also terminates). ATRIAL TACHYCARDIA: May slow rate but continues (focus persists). ATRIAL FLUTTER: Rarely terminates, may expose flutter waves. KEY: AVNRT termination is abrupt and complete. Partial response suggests different diagnosis!',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-differential-diagnosis.png',
        imageAlt: 'AVNRT diagnostic maneuvers',
        hint: '💊 All-or-nothing response!'
      },

      {
        id: 'unit4-quiz',
        title: '🫀 Unit 4 Quiz: Differential Diagnosis',
        content: "Test your AVNRT differential skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'slide',
        imageUrl: '/lessonimages/avnrt-differential-diagnosis.png',
        imageAlt: 'AVNRT differential diagnosis quiz',
        videoUrl: '/lessonvideo/module3/lesson27/unit4-quiz-explanation.mp4',
        hint: '🧠 Master the distinctions!',
        question: "What is the most reliable ECG feature to distinguish typical AVNRT from orthodromic AVRT?",
        options: [
          "Heart rate during tachycardia",
          "QRS width and morphology",
          "RP interval (AVNRT <70ms, AVRT >70ms)",
          "Response to carotid massage"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! The RP interval is the most reliable ECG feature. Typical AVNRT has RP <70ms (P waves hidden in or immediately after QRS), while orthodromic AVRT has RP >70ms (clearly visible P waves between QRS complexes)."
      },

      // ===============================================
      // 🫀 UNIT 5: CLINICAL MANAGEMENT (8 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🫀 Unit 5: Clinical Management',
        content: 'Master AVNRT clinical management! Learn acute treatment approaches, vagal maneuvers, pharmacological interventions, chronic management strategies, and ablation indications.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-clinical-management.png',
        imageAlt: 'AVNRT clinical management strategies',
        videoUrl: '/lessonvideo/module3/lesson27/clinical-management.mp4',
        highlights: [
          '🧘 Vagal maneuvers: first-line acute therapy',
          '💊 Adenosine: most effective acute medication',
          '🏥 AV nodal blockers for prevention',
          '🎯 Catheter ablation: definitive cure',
          '📊 Risk stratification and follow-up'
        ],
        hint: '🧘 Start with vagal, then adenosine!'
      },

      {
        id: 'acute-management-algorithm',
        title: 'Acute AVNRT Management Algorithm',
        type: 'steps',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-clinical-management.png',
        imageAlt: 'AVNRT acute management decision tree',
        videoUrl: '/lessonvideo/module3/lesson27/acute-management.mp4',
        steps: [
          {
            number: 1,
            title: 'Assess Hemodynamic Stability',
            description: 'Stable: proceed with medical therapy. Unstable: immediate cardioversion.'
          },
          {
            number: 2,
            title: 'Vagal Maneuvers',
            description: 'Valsalva, carotid massage (if no bruits), ice water facial immersion.'
          },
          {
            number: 3,
            title: 'Adenosine 6mg IV',
            description: 'Rapid push followed by 20ml saline flush. Success rate 80-90% for AVNRT.'
          },
          {
            number: 4,
            title: 'Adenosine 12mg IV',
            description: 'If first dose ineffective. Can repeat once more if needed.'
          },
          {
            number: 5,
            title: 'Alternative Medications',
            description: 'Verapamil 2.5-5mg IV, diltiazem 0.25mg/kg IV, or beta-blockers.'
          },
          {
            number: 6,
            title: 'Cardioversion if Refractory',
            description: 'Synchronized cardioversion if medications fail and patient unstable.'
          }
        ],
        hint: '🎯 Stable = medical, unstable = electrical!'
      },

      {
        id: 'vagal-maneuvers-techniques',
        title: 'Effective Vagal Maneuver Techniques',
        type: 'accordion',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-clinical-management.png',
        imageAlt: 'Vagal maneuver techniques for AVNRT',
        videoUrl: '/lessonvideo/module3/lesson27/vagal-maneuvers.mp4',
        accordionItems: [
          {
            title: '💨 Valsalva Maneuver',
            content: 'TECHNIQUE: Bear down for 15 seconds as if having bowel movement\nEFFECTIVENESS: Most effective vagal maneuver\nMODIFIED: Supine position, legs elevated may improve success\nPATIENT: Teach technique for home use\nSAFETY: Generally safe in stable patients\nSUCCESS RATE: 25-50% termination rate\nTIMING: Works best early in episode'
          },
          {
            title: '🫀 Carotid Massage',
            content: 'TECHNIQUE: Gentle pressure over carotid bifurcation for 5-10 seconds\nPRECAUTIONS: Check for carotid bruits first\nCONTRAINDICATIONS: Carotid disease, elderly patients\nSIDE: One side at a time, never both simultaneously\nPOSITION: Supine with neck extended\nSUCCESS RATE: 25-50% when performed correctly\nSAFETY: Risk of stroke if carotid disease present'
          },
          {
            title: '❄️ Facial Cold Water',
            content: 'TECHNIQUE: Ice water immersion of face for 30 seconds\nMECHANISM: Mammalian diving reflex\nEFFECTIVENESS: Particularly good in children\nSAFETY: Very safe technique\nPRACTICAL: Easy to perform in emergency settings\nALTERNATIVE: Cold towels if immersion not possible\nAGE: Works well across all age groups'
          },
          {
            title: '🎯 Clinical Optimization',
            content: 'TIMING: Most effective early in episode\nCOMBINATION: Can try multiple techniques sequentially\nPATIENT EDUCATION: Teach patients effective techniques\nDOCUMENTATION: Record response to maneuvers\nFOLLOW-UP: Assess technique effectiveness over time\nALTERNATIVES: Prepare for pharmacological intervention\nSUCCESS: May prevent need for medications'
          }
        ],
        hint: '💨 Valsalva is usually most effective!'
      },

      {
        id: 'chronic-management-strategies',
        title: 'Chronic AVNRT Management',
        type: 'tabs',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-clinical-management.png',
        imageAlt: 'Chronic AVNRT management strategies',
        videoUrl: '/lessonvideo/module3/lesson27/chronic-management.mp4',
        tabs: [
          {
            title: '💊 Pharmacological Options',
            content: 'AV NODAL BLOCKERS: Verapamil, diltiazem, propranolol\nDOSING: Start low, titrate to effect\nEFFECTIVENESS: 60-80% reduction in episode frequency\nSIDE EFFECTS: Hypotension, fatigue, heart block\nMONITORING: Regular BP, ECG, heart rate checks\nLIMITATIONS: Not curative, lifelong therapy\nCOMPLIANCE: Important for effectiveness'
          },
          {
            title: '🎯 Catheter Ablation',
            content: 'INDICATIONS: Recurrent episodes, drug failure, patient preference\nTARGET: Slow pathway modification\nSUCCESS RATE: 95-99% cure rate\nCOMPLICATIONS: <1% heart block requiring pacemaker\nHOSPITAL: Usually outpatient procedure\nRECOVERY: Return to normal activities in days\nDURABILITY: Long-term cure in vast majority'
          },
          {
            title: '🏃 Lifestyle Modifications',
            content: 'TRIGGER AVOIDANCE: Caffeine, alcohol, stress reduction\nEXERCISE: Regular moderate exercise beneficial\nSLEEP: Adequate sleep hygiene important\nSTRESS: Stress management techniques\nWEIGHT: Maintain healthy weight\nTOBACCO: Smoking cessation\nHYDRATION: Maintain adequate hydration'
          },
          {
            title: '👥 Patient Education',
            content: 'RECOGNITION: Teach symptom recognition\nVAGAL TECHNIQUES: Home management strategies\nWHEN TO SEEK CARE: Emergency warning signs\nMEDICATION COMPLIANCE: Importance of adherence\nFOLLOW-UP: Regular cardiology visits\nACTIVITY: Usually no activity restrictions\nPROGNOSIS: Generally excellent with treatment'
          }
        ],
        hint: '💊🎯 Pills or ablation!'
      },

      {
        id: 'unit5-quiz',
        title: '🫀 Unit 5 Quiz: Clinical Management',
        content: "Test your AVNRT management knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'slide',
        imageUrl: '/lessonimages/avnrt-clinical-management.png',
        imageAlt: 'AVNRT clinical management quiz',
        videoUrl: '/lessonvideo/module3/lesson27/unit5-quiz-explanation.mp4',
        hint: '🧠 Master the treatment approach!',
        question: "What is the first-line acute treatment for hemodynamically stable AVNRT?",
        options: [
          "Immediate cardioversion",
          "Adenosine 6mg IV push",
          "Vagal maneuvers",
          "Verapamil 5mg IV"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Vagal maneuvers are the first-line treatment for hemodynamically stable AVNRT. They are safe, effective (25-50% success rate), and can be performed immediately without need for IV access or medications. Adenosine is the next step if vagal maneuvers fail."
      },

      // ===============================================
      // 🫀 UNIT 6: SPECIAL CONSIDERATIONS (8 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🫀 Unit 6: Special Considerations',
        content: 'Master AVNRT special situations! Learn pediatric considerations, pregnancy management, emergency protocols, athlete care, and long-term follow-up strategies.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-special-considerations.png',
        imageAlt: 'AVNRT special considerations and populations',
        videoUrl: '/lessonvideo/module3/lesson27/special-considerations.mp4',
        highlights: [
          '👶 Pediatric AVNRT recognition and treatment',
          '🤰 Pregnancy-safe management approaches',
          '🚨 Emergency department protocols',
          '🏃 Athletic participation guidelines',
          '📊 Long-term prognosis and outcomes'
        ],
        hint: '👥 Different populations, tailored care!'
      },

      {
        id: 'pediatric-avnrt',
        title: 'Pediatric AVNRT Management',
        type: 'accordion',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-special-considerations.png',
        imageAlt: 'Pediatric AVNRT management strategies',
        videoUrl: '/lessonvideo/module3/lesson27/pediatric-avnrt.mp4',
        accordionItems: [
          {
            title: '👶 Infants and Toddlers',
            content: 'PRESENTATION: Often poor feeding, irritability, tachypnea\nVAGAL: Ice water to face most effective\nDOSING: Adenosine 0.1mg/kg (max 6mg) first dose\nCARDIOVERSION: 0.5-1 J/kg if unstable\nHOSPITALIZATION: Often required for initial episodes\nPROGNOSIS: Many outgrow AVNRT susceptibility\nFOLLOW-UP: Pediatric cardiology essential'
          },
          {
            title: '🧒 School Age Children',
            content: 'SYMPTOMS: Palpitations, chest discomfort, fatigue\nVAGAL TRAINING: Can learn effective techniques\nMEDICATIONS: Weight-based dosing essential\nSCHOOL: Education of staff important\nACTIVITY: Usually no restrictions needed\nABLATION: Consider if frequent/symptomatic\nPSYCHOSOCIAL: Address anxiety about episodes'
          },
          {
            title: '👦 Adolescents',
            content: 'MANAGEMENT: Similar to adults\nABLATION: More readily considered\nCOMPLIANCE: Medication adherence challenges\nSPORTS: Participation decisions important\nTRANSITION: Preparation for adult care\nAUTONOMY: Increasing self-management\nRISK FACTORS: Stress, caffeine, lack of sleep'
          },
          {
            title: '🏥 Special Considerations',
            content: 'GROWTH: Medication dosing adjustments\nDEVELOPMENT: Age-appropriate explanations\nFAMILY: Parent/caregiver education crucial\nEMERGENCY PLANS: School, home protocols\nFOLLOW-UP: Regular pediatric cardiology\nFUTURE: Many children improve with age\nQOL: Maintain normal childhood activities'
          }
        ],
        hint: '👶 Age-appropriate care is essential!'
      },

      {
        id: 'pregnancy-considerations',
        title: 'AVNRT During Pregnancy',
        type: 'flashcard',
        flashcardFront: '🤰 How does pregnancy affect AVNRT and what are safe treatment options?',
        flashcardBack: 'FREQUENCY: May increase due to physiologic changes. HEMODYNAMICS: Increased blood volume, cardiac output. TREATMENT: Vagal maneuvers safe and first-line. ADENOSINE: Safe in pregnancy (Category C). VERAPAMIL: Generally safe after first trimester. AVOID: Beta-blockers may cause IUGR. DELIVERY: Avoid ergot alkaloids. ABLATION: Defer until post-partum!',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-special-considerations.png',
        imageAlt: 'AVNRT management during pregnancy',
        hint: '🤰 Vagal maneuvers and adenosine are safe!'
      },

      {
        id: 'emergency-protocols',
        title: 'Emergency Department AVNRT Protocol',
        type: 'steps',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-special-considerations.png',
        imageAlt: 'Emergency department AVNRT protocol',
        videoUrl: '/lessonvideo/module3/lesson27/emergency-protocols.mp4',
        steps: [
          {
            number: 1,
            title: 'Rapid Assessment',
            description: 'ABC assessment, vital signs, 12-lead ECG, IV access, continuous monitoring.'
          },
          {
            number: 2,
            title: 'Hemodynamic Evaluation',
            description: 'Stable: medical management. Unstable: prepare for cardioversion.'
          },
          {
            number: 3,
            title: 'Initial Treatment',
            description: 'Vagal maneuvers while preparing medications. Document rhythm strips.'
          },
          {
            number: 4,
            title: 'Pharmacological Management',
            description: 'Adenosine 6mg → 12mg → 12mg. Alternative: verapamil or diltiazem.'
          },
          {
            number: 5,
            title: 'Cardioversion if Needed',
            description: 'Synchronized cardioversion starting at 50-100J if refractory.'
          },
          {
            number: 6,
            title: 'Post-Conversion Care',
            description: 'Document rhythm, assess symptoms, cardiology consultation, discharge planning.'
          }
        ],
        hint: '🚨 Systematic approach saves time!'
      },

      {
        id: 'long-term-prognosis',
        title: 'AVNRT Long-term Prognosis & Outcomes',
        type: 'tabs',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-special-considerations.png',
        imageAlt: 'AVNRT long-term prognosis and outcomes',
        videoUrl: '/lessonvideo/module3/lesson27/long-term-prognosis.mp4',
        tabs: [
          {
            title: '📊 Natural History',
            content: 'BENIGN: Generally excellent prognosis\nMORTALITY: No increased mortality risk\nQUALITY OF LIFE: Can significantly impact daily activities\nFREQUENCY: Episodes may increase over time\nSEVERITY: Usually stable pattern once established\nAGE: Elderly may have more symptoms\nHEART DISEASE: Prognosis depends on underlying conditions'
          },
          {
            title: '💊 Medical Management Outcomes',
            content: 'EFFECTIVENESS: 60-80% reduction in episodes\nCOMPLIANCE: Critical for success\nSIDE EFFECTS: May limit long-term use\nBREAKTHROUGH: Episodes may still occur\nDOSE: May need adjustments over time\nMONITORING: Regular follow-up essential\nCOST: Ongoing medication expenses'
          },
          {
            title: '🎯 Ablation Outcomes',
            content: 'SUCCESS RATE: 95-99% cure rate\nCOMPLICATIONS: <1% permanent heart block\nRECURRENCE: <5% long-term recurrence\nQUALITY OF LIFE: Dramatic improvement\nCOST-EFFECTIVE: Long-term cost savings\nSATISFACTION: High patient satisfaction\nDURABILITY: Excellent long-term results'
          },
          {
            title: '🏃 Activity and Lifestyle',
            content: 'EXERCISE: No restrictions after successful treatment\nWORK: Can return to full activity\nDRIVING: Usually no restrictions\nPREGNANCY: Safe with appropriate management\nSPORTS: Competitive sports usually okay\nTRAVEL: No specific limitations\nPROGNOSIS: Excellent with appropriate treatment'
          }
        ],
        hint: '📊 Excellent prognosis with treatment!'
      },

      {
        id: 'unit6-quiz',
        title: '🫀 Unit 6 Quiz: Special Considerations',
        content: "Test your AVNRT special situations knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'slide',
        imageUrl: '/lessonimages/avnrt-special-considerations.png',
        imageAlt: 'AVNRT special considerations quiz',
        videoUrl: '/lessonvideo/module3/lesson27/unit6-quiz-explanation.mp4',
        hint: '🧠 Master special population care!',
        question: "What is the most appropriate first-line treatment for AVNRT in a pregnant patient?",
        options: [
          "Beta-blockers",
          "Vagal maneuvers",
          "Immediate cardioversion",
          "Calcium channel blockers"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Vagal maneuvers are the most appropriate first-line treatment for AVNRT in pregnancy. They are completely safe for both mother and fetus, effective, and avoid any medication exposure. If unsuccessful, adenosine is the next safest option."
      }
    ],

    keyPoints: [
      "🔄 AVNRT is the most common SVT (60%) caused by reentry within dual AV nodal pathways",
      "⚡🐌 Dual pathways have opposite properties: fast (quick conduction, long refractory) vs slow (slow conduction, short refractory)",
      "📈 Typical AVNRT: regular narrow QRS, rate 150-250 bpm, P waves hidden in QRS (pseudo-R' in V1)",
      "🕵️ Key differential: RP interval <70ms = AVNRT, >70ms = likely AVRT or atrial tachycardia",
      "🧘 First-line acute treatment: vagal maneuvers, then adenosine 6mg → 12mg IV push",
      "💊 Chronic management: AV nodal blockers (verapamil, diltiazem, beta-blockers) reduce episode frequency",
      "🎯 Catheter ablation: 95-99% cure rate with <1% risk of heart block, definitive treatment",
      "👶 Pediatric considerations: weight-based dosing, ice water facial immersion most effective vagal maneuver",
      "🤰 Pregnancy: vagal maneuvers and adenosine are safe, defer ablation until post-partum",
      "📊 Excellent long-term prognosis with appropriate treatment, no increased mortality risk"
    ],

    summary: "AVNRT mastery achieved! You've learned the dual pathway physiology, mastered ECG recognition patterns, understood differential diagnosis principles, and gained expertise in both acute and chronic management. This knowledge prepares you for expert-level AVNRT care across all clinical scenarios.",
    
    resources: [
      {
        title: "Advanced AVNRT Pathophysiology and Dual Pathways",
        url: "https://youtube.com/watch?v=avnrt_pathophysiology",
        type: "video"
      },
      {
        title: "AVNRT vs AVRT: Differential Diagnosis Mastery",
        url: "https://youtube.com/watch?v=avnrt_avrt_differential",
        type: "video"
      },
      {
        title: "Catheter Ablation of AVNRT: Techniques and Outcomes",
        url: "https://cardiology.org/avnrt-ablation-guide",
        type: "article"
      },
      {
        title: "Pediatric AVNRT Management Guidelines",
        url: "https://pediatriccardiology.org/avnrt-children",
        type: "article"
      }
    ]
  },
  tasks: [],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
