import { QuestionData } from '@/types/Question';
import Options from './Options';

type QuestionProps = {
  questions: QuestionData;
  dispatch: React.Dispatch<{ type: 'newAnswer' }>;
  answer: number;
};

const Question = ({ questions, answer, dispatch }: QuestionProps) => {
  return (
    <div>
      <h4>{questions.question}</h4>
      <div className="options">
        <Options questions={questions} dispatch={dispatch} answer={answer} />
      </div>
    </div>
  );
};

export default Question;
