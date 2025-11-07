import React from 'react';

type FinishScreenProps = {
  points: number;
  maxPossiblePoints: number;
  highscore: number;
  dispatch: React.Dispatch<{ type: 'restart' }>;
};

const FinishScreen = ({
  points,
  maxPossiblePoints,
  highscore,
  dispatch,
}: FinishScreenProps) => {
  const percentage = (points / maxPossiblePoints) * 100;

  const thresholds = [
    { limit: 100, emoji: '🥇' },
    { limit: 80, emoji: '🍾' },
    { limit: 50, emoji: '😏' },
    { limit: 1, emoji: '😠' },
    { limit: 0, emoji: '👎' },
  ];

  const emoji = thresholds.find((t) => percentage >= t.limit)?.emoji ?? '👎';

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{' '}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;
