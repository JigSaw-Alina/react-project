import { useEffect, useReducer } from 'react';
import Header from '@/components/Header';
import Main from '@/components/Main';
import {
  initialState,
  questionReducer,
} from '@/features/types/question/reducers/questionReducer';
import { fetchQuestion } from '@/services/question';
import Loader from '@/ui/Loader';
import Error from '@/ui/Error';
import StartScreen from '@/components/StartScreen';
import Question from '@/components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import { QuestionData } from './types/Question';
import FinishScreen from './components/FinishScreen';
import Footer from './components/Footer';
import Timer from './components/Timer';

const App = () => {
  const [
    { status, questions, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(questionReducer, initialState);

  const numQestion = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev: number, curr: QuestionData) => prev + curr.points,
    0
  );

  console.log(secondsRemaining);

  useEffect(() => {
    const getQuestion = async () => {
      try {
        const questions = await fetchQuestion();
        dispatch({ type: 'dataRecived', payload: questions });
      } catch (error) {
        dispatch({ type: 'dataFailed', payload: 'error' });
      }
    };

    getQuestion();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numQestion={numQestion} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              maxPossiblePoints={maxPossiblePoints}
              numQestion={numQestion}
              points={points}
              answer={answer}
            />
            <Question
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQestion={numQestion}
              />
            </Footer>
          </>
        )}

        {status === 'finished' && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
};

export default App;
