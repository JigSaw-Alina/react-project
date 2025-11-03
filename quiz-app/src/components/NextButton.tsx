import React from 'react';

type NextButtonProps = {
  dispatch: React.Dispatch<{ type: 'nextQuestion' }>;
  answer: number;
};

const NextButton = ({ dispatch, answer }: NextButtonProps) => {
  if (answer === null) return null;

  return (
    <div>
      <button onClick={() => dispatch({ type: 'nextQuestion' })}>Next</button>
    </div>
  );
};

export default NextButton;
