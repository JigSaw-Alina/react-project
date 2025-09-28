import type { NumResultProps } from '@/types/Movie';

const Numresult = ({ movies }: NumResultProps) => {
  return (
    <div>
      <p className="App__num-results">
        Found <strong>{movies.length}</strong> results
      </p>
    </div>
  );
};

export default Numresult;
