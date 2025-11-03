import React from 'react';

type StartScreenProps = {
  numQestion: number;
  dispatch: React.Dispatch<{ type: 'start' }>;
};
const StartScreen = ({ numQestion, dispatch }: StartScreenProps) => {
  return (
    <div className="app__start">
      <h1>Welcome to the React Quiz!</h1>
      <h3>{numQestion} question to test your React mastery</h3>
      <a className="app__btn-start" onClick={() => dispatch({ type: 'start' })}>
        Let's start
      </a>
    </div>
  );
};

export default StartScreen;
