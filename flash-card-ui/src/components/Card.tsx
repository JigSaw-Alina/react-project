import type { CardProps } from '../types/Card';

const Card = ({ id, answer, question, handleClick, selectedId }: CardProps) => {
  const isFlipped = selectedId === id;
  return (
    <div
      onClick={() => handleClick(id)}
      className={`App__card ${isFlipped ? 'is-flipped' : ''}`}
    >
      <div className="App__card-inner">
        <div className="App__face front">
          <div className="App__text">{question}</div>
        </div>
        <div className="App__face back">
          <div className="App__text">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
