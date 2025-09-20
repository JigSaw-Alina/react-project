import { WatchedData } from "@/types/movie"



type WatchedMovieProps = {
  movie: WatchedData;
  onDeletedWatched: (id: string) => void;
}

const WatchedMovie = ({ movie, onDeletedWatched }: WatchedMovieProps) => {
  const {
    Poster: poster,
    Title: title,
    imdbRating,
    userRating,
    Runtime: runtime
  } = movie

  return (
    <li>
        <img src={poster} alt={`${title} poster`}  />
         <h3>{title}</h3>
        <div>
          <p>
            <span>⭐️</span>
            <span>{imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{runtime} min</span>
          </p>
          <button className="btn-delete" onClick={() => onDeletedWatched(movie.imdbID)}>X</button>
        </div>
    </li>
  );
}

export default WatchedMovie