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

const App = () => {
  const [{ status, questions, index, answer }, dispatch] = useReducer(
    questionReducer,
    initialState
  );

  const numQestion = questions.length;

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

  console.log(status);

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
            <Question
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  );
};

export default App;
