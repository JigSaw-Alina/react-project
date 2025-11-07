type OptionsProps = {
  maxPossiblePoints: number;
  numQestion: number;
  index: number;
  points: number;
  answer: number;
};

const Progress = ({
  index,
  maxPossiblePoints,
  numQestion,
  points,
  answer,
}: OptionsProps) => {
  return (
    <header className="progress">
      <progress max={numQestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQestion}
      </p>

      <p className="">
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
