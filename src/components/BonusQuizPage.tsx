import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePulseStore } from './usePulseStore';

const BONUS_QUIZ = {
  question: 'Which ECG finding is most specific for acute myocardial infarction?',
  options: [
    'ST elevation in contiguous leads',
    'T wave inversion',
    'QRS widening',
    'Sinus bradycardia',
  ],
  correct: 0,
  explanation: 'ST elevation in contiguous leads is the most specific finding for acute MI.'
};

const BonusQuizPage = ({ onReward }) => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [rewarded, setRewarded] = useState(false);
  const navigate = useNavigate();
  const { awardBonusQuizReward } = usePulseStore();

  useEffect(() => {
    if (timeLeft <= 0 && !submitted) {
      setSubmitted(true);
    }
    if (timeLeft > 0 && !submitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, submitted]);

  const handleSubmit = async () => {
    setSubmitted(true);
    if (selected === BONUS_QUIZ.correct && !rewarded) {
      setRewarded(true);
      await awardBonusQuizReward();
      if (onReward) onReward();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4" id="bonus-quiz-page">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2 text-blue-700">Bonus Quiz</h2>
        <div className="mb-4 text-sm text-gray-600">Time left: <span className="font-bold text-red-500">{timeLeft}s</span></div>
        <div className="mb-4 font-semibold">{BONUS_QUIZ.question}</div>
        <div className="space-y-2 mb-4">
          {BONUS_QUIZ.options.map((opt, idx) => (
            <button
              key={idx}
              className={`w-full px-4 py-2 rounded-lg border text-left ${selected === idx ? 'bg-blue-100 border-blue-400' : 'bg-gray-50 border-gray-200'} ${submitted && idx === BONUS_QUIZ.correct ? 'border-green-500 bg-green-50' : ''}`}
              disabled={submitted}
              onClick={() => setSelected(idx)}
            >
              {opt}
            </button>
          ))}
        </div>
        {!submitted && (
          <button
            className="w-full py-2 bg-blue-600 text-white rounded-lg font-bold mt-2"
            disabled={selected === null}
            onClick={handleSubmit}
          >
            Submit
          </button>
        )}
        {submitted && (
          <div className="mt-4">
            {selected === BONUS_QUIZ.correct ? (
              <div className="text-green-700 font-bold text-lg">Correct! +50 XP, +1 Gem 🎉</div>
            ) : (
              <div className="text-red-600 font-bold text-lg">Incorrect. Try again next time!</div>
            )}
            <div className="text-xs text-gray-500 mt-2">{BONUS_QUIZ.explanation}</div>
            <button
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold"
              onClick={() => navigate(-1)} // Go back to previous page (store)
            >Back to Store</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BonusQuizPage;
