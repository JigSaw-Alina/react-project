import { QuestionData } from '@/types/Question';

type OptionsProps = {
  questions: QuestionData;
  dispatch: React.Dispatch<{ type: 'newAnswer'; payload: number }>;
  answer: number;
};

const Options = ({ questions, dispatch, answer }: OptionsProps) => {
  const { options, correctOption } = questions;
  const hasAnswered = answer !== null;
  return (
    <div>
      {options.map((option: string, index: number) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} 
          ${
            hasAnswered ? (index === correctOption ? 'correct' : 'wrong') : ''
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
