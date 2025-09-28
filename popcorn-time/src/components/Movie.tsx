import type { MovieProps } from '@/types/Movie';

const Movie = ({ movie, onSelectedMovie }: MovieProps) => {
  return (
    <li onClick={() => onSelectedMovie(movie.imdbID)}>
      <div className="App__Movie-box">
        <img src={movie.Poster} alt={`${movie.title} poster`} />
        <div className="App__Movie-details">
          <h3>{movie.title}</h3>
          <p>
            <span>📆</span>
            <span>{movie.year}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default Movie;
