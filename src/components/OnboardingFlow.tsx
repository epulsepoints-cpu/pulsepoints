import React, { useState, useRef, useEffect } from 'react';
import Joyride, { CallBackProps, Step } from 'react-joyride';

// Add TabType and OnboardingFlowProps definitions for type safety

type TabType = 'dashboard' | 'learn' | 'resources' | 'profile' | 'store';

interface OnboardingFlowProps {
  setActiveTab?: (tab: TabType) => void;
}

// Move steps array inside the component to access setActiveTab

export default function OnboardingFlow({ setActiveTab }: OnboardingFlowProps) {
  const [run, setRun] = useState(false);
  const lastStepIndex = useRef<number>(-1);

  const steps: Step[] = [
    {
      target: '#lesson-video',
      content: React.createElement('div', {},
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Welcome to ECGkid!'),
        React.createElement('p', null, 'Start by watching your first ECG lesson. 🎬')
      ),
      disableBeacon: true,
    },
    {
      target: '#quiz-section',
      content: React.createElement('div', {},
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Quick Quiz'),
        React.createElement('p', null, 'Test your knowledge with a quick quiz! 📝')
      ),
      disableBeacon: true,
    },
    {
      target: '#dashboard-stats-row',
      content: React.createElement('div', {},
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Track Your Progress'),
        React.createElement('p', null, 'Here are your updated stats after completing tasks. Keep an eye on your progress here.')
      ),
      disableBeacon: true,
    },
    {
      target: '#ecg-roadmap-widget-icon',
      content: React.createElement('div', {},
        React.createElement('h3', { className: 'font-bold text-lg mb-2' }, 'Your ECG Roadmap'),
        React.createElement('p', null, 'Tap here to view your ECG learning roadmap and track your journey! 🗺️'),
        React.createElement('button', {
          className: 'mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-bold',
          onClick: () => setActiveTab && setActiveTab('learn')
        }, 'Check Out Our Modules')
      ),
      disableBeacon: true,
    },
  ];

  // Wait for correct tab and target to exist before starting Joyride
  useEffect(() => {
    let timeout: number;
    function waitForTarget() {
      if (document.querySelector(steps[0].target as string)) {
        setRun(true);
      } else {
        timeout = window.setTimeout(waitForTarget, 200);
      }
    }
    waitForTarget();
    return () => clearTimeout(timeout);
  }, []);

  const handleJoyrideCallback = (data: CallBackProps) => {
    if (data.status === 'finished' || data.status === 'skipped') {
      setRun(false);
      return;
    }
    // No tab switching needed for these steps
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showSkipButton
      showProgress
      styles={{
        options: {
          zIndex: 10000,
        },
      }}
      callback={handleJoyrideCallback}
    />
  );
}
