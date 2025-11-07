import React from 'react';

type NextButtonProps = {
  dispatch: React.Dispatch<{ type: 'nextQuestion' } | { type: 'finish' }>;
  answer: number;
  numQestion: number;
  index: number;
};

const NextButton = ({
  dispatch,
  answer,
  index,
  numQestion,
}: NextButtonProps) => {
  if (answer === null) return null;

  if (index < numQestion - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );

  if (index === numQestion - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finish
      </button>
    );
};

export default NextButton;
