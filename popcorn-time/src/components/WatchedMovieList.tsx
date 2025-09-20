import { WatchedData } from "@/types/movie";
import WatchedMovie from "@/components/WatchedMovie";

type WatchedMovieListProps = {
  watched: WatchedData[];
  onDeletedWatched: (id: string) => void;
}


const WatchedMovieList = ({ watched, onDeletedWatched }: WatchedMovieListProps) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie 
         movie={movie}
         key={movie.imdbID}
         onDeletedWatched={onDeletedWatched}
        />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
