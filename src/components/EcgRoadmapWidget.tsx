import React, { useState, useEffect } from 'react';
import styles from './EcgRoadmapWidget.module.css';

interface ModuleInfo {
  id: string;
  order: number;
  title: string;
  color: string;
}

interface EcgRoadmapWidgetProps {
  currentLesson: number;
  completedModules: number[];
  modules: ModuleInfo[];
  onModuleNavigate: (moduleId: string) => void;
}

const MODULE_POSITIONS = [
  { x: 30, y: 100 },
  { x: 60, y: 60 },
  { x: 100, y: 80 },
  { x: 140, y: 40 },
  { x: 180, y: 60 },
  { x: 220, y: 30 },
  { x: 260, y: 60 },
  { x: 290, y: 20 },
];

export const EcgRoadmapWidget: React.FC<EcgRoadmapWidgetProps> = ({ currentLesson, completedModules, modules, onModuleNavigate }) => {
  const [visible, setVisible] = useState(false);
  const [pulseModules, setPulseModules] = useState<number[]>([]);
  const [activeModule, setActiveModule] = useState<number | null>(null);
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);

  // Pulse effect for completed modules
  useEffect(() => {
    if (completedModules.length > 0) {
      setPulseModules(completedModules);
      const timeout = setTimeout(() => setPulseModules([]), 5000);
      return () => clearTimeout(timeout);
    }
  }, [completedModules.join(',')]);

  // Animate roadmap path
  useEffect(() => {
    if (!visible) return;
    const path = document.getElementById('roadmap-path') as unknown as SVGPolylineElement | null;
    if (path) {
      path.style.strokeDasharray = path.getTotalLength().toString();
      path.style.strokeDashoffset = path.getTotalLength().toString();
      setTimeout(() => {
        path.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(.4,2,.6,1)';
        path.style.strokeDashoffset = '0';
      }, 100);
    }
  }, [visible]);

  const handleModuleClick = (mod: ModuleInfo) => {
    setActiveModule(mod.order);
    setTimeout(() => {
      setVisible(false);
      setActiveModule(null);
      onModuleNavigate(mod.id);
    }, 350);
  };

  // Keyboard navigation for module circles
  const handleModuleKeyDown = (e: React.KeyboardEvent, mod: ModuleInfo) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleModuleClick(mod);
    }
  };

  return (
    <div className={styles.roadmapContainer} id="ecg-mastery-widget">
      <div className={styles.roadmapToggleContainer}>
        <button
          className={styles.roadmapToggleBtn}
          aria-label="Show ECG Progress"
          onClick={() => setVisible(v => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="#7b2ff2" strokeWidth="2" fill="#fff" />
            <path d="M7 14h3l2-4 3 8 2-4h4" stroke="#f357a8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {visible && (
          <div
            className={styles.roadmapPopup}
            title="ECG Mastery Roadmap"
            tabIndex={0}
            role="dialog"
            style={{ cursor: 'pointer' }}
          >
            <svg
              viewBox="0 0 320 120"
              width="100%"
              height="auto"
              className={styles.roadmapSvg}
              style={{ maxWidth: 360, minWidth: 220, height: 'auto', display: 'block', margin: '0 auto' }}
            >
              {/* Animated Roadmap Path */}
              <polyline
                id="roadmap-path"
                points="30,100 60,60 100,80 140,40 180,60 220,30 260,60 290,20"
                fill="none"
                stroke="#7b2ff2"
                strokeWidth="6"
                strokeLinejoin="round"
                opacity="0.5"
              />
              {/* Module circles */}
              {modules.map((mod, idx) => {
                const { x, y } = MODULE_POSITIONS[idx];
                const isCompleted = completedModules.includes(mod.order);
                const isCurrent = currentLesson === mod.order;
                const pulse = pulseModules.includes(mod.order);
                const isActive = activeModule === mod.order;
                return (
                  <g key={mod.id} id={`module${mod.order}`}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isActive ? 24 : 18}
                      className={
                        `${styles.moduleCircle} ` +
                        (isCompleted ? styles.completed : '') + ' ' +
                        (isCurrent ? styles.current : '') + ' ' +
                        (pulse ? styles.pulse : '')
                      }
                      style={{
                        fill: isCompleted || isCurrent ? mod.color : '#f3f4f6',
                        stroke: isCurrent ? '#f357a8' : isCompleted ? mod.color : '#7b2ff2',
                        filter: isActive ? 'drop-shadow(0 0 16px #f357a8cc)' : undefined,
                        transition: 'r 0.2s, filter 0.2s, transform 0.15s cubic-bezier(.4,2,.6,1)',
                        cursor: 'pointer',
                      }}
                      tabIndex={0}
                      aria-label={`Module ${mod.order}: ${mod.title}`}
                      onClick={() => handleModuleClick(mod)}
                      onKeyDown={e => handleModuleKeyDown(e, mod)}
                      onMouseDown={e => e.currentTarget.style.transform = 'scale(1.12)'}
                      onMouseUp={e => e.currentTarget.style.transform = ''}
                      onMouseLeave={e => e.currentTarget.style.transform = ''}
                      onFocus={e => e.currentTarget.style.transform = 'scale(1.08)'}
                      onBlur={e => e.currentTarget.style.transform = ''}
                    >
                    </circle>
                    <title>{mod.title}</title>
                    <text
                      x={x}
                      y={y + 5}
                      textAnchor="middle"
                      fontSize={isActive ? 20 : 16}
                      fill={isCompleted ? '#fff' : '#7b2ff2'}
                      fontWeight={isCurrent || isActive ? 'bold' : 'normal'}
                      style={{ pointerEvents: 'none', transition: 'font-size 0.2s' }}
                    >
                      {mod.order}
                    </text>
                  </g>
                );
              })}
            </svg>
            <div className={styles.roadmapLabel}>ECG Mastery Roadmap</div>
            <div className={styles.roadmapHint}>(Tap a module to view details)</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EcgRoadmapWidget;
