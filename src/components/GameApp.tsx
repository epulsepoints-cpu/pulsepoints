import React, { useState } from 'react';
import { useGameState } from '@/hooks/useGameState';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import Onboarding from './Onboarding';
import OnboardingFlow from './OnboardingFlow';

const GameApp: React.FC = () => {
  const { gameState, login, skipLogin, completeTask } = useGameState();
  const [onboardingDone, setOnboardingDone] = useState(() => {
    return localStorage.getItem('onboardingDone') === 'true';
  });

  const handleCompleteTask = (taskId: string, isCorrect: boolean) => {
    completeTask(taskId, isCorrect);
  };

  const handleOnboardingFinish = () => {
    setOnboardingDone(true);
    localStorage.setItem('onboardingDone', 'true');
  };

  return (
    <>
      <OnboardingFlow />
      {!gameState.isAuthenticated ? (
        !onboardingDone ? (
          <Onboarding onFinish={handleOnboardingFinish} />
        ) : (
          <LoginForm onLogin={login} onSkipLogin={skipLogin} />
        )
      ) : (
        <Dashboard
          gameState={gameState}
          onCompleteTask={handleCompleteTask}
        />
      )}
    </>
  );
};

export default GameApp;
