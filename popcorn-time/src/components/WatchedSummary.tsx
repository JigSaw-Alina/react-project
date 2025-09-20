import { WatchedSummaryProps } from "@/types/movie";
import { useMemo } from "react";

const average = ((numbers: number[]) => {
  if (numbers.length === 0) return 0; // handle empty array
  return numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
})


type WatchedSummaryResult = {
  avgImdbRating: number;
  avgUserRating: number;
  avgRuntime: number;
};

const WatchedSummary = ({watched} : WatchedSummaryProps) => {

  const { avgImdbRating, avgUserRating, avgRuntime } = useMemo<WatchedSummaryResult>(() => {
    const imdbRating = watched.map((movie) => movie.imdbRating);
    const userRating = watched.map((movie) => movie.userRating);
    const runTime = watched.map((movie) => parseInt(movie.Runtime, 10));
    console.log('test', runTime)

    return {
      avgImdbRating: average(imdbRating),
      avgUserRating: average(userRating),
      avgRuntime: average(runTime),
    };
  }, [watched]);

  return (
    <div className="App__summary">
      <h2>Movies you watched</h2>
      <div className="App__summary-details">
        <p>
          <span>#️⃣</span>
          <span>{watched.length}movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
        <span>🌟</span>
        <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  )
};

export default WatchedSummary;
