import type { MovieProps } from '../types/movie';

const Movie = ({ movie, onSelectedMovie }: MovieProps) => {
  return (
    <li onClick={() => onSelectedMovie(movie.imdbID)}>
      <div className='App__Movie-box'>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <div className='App__Movie-details'>
            <h3>{movie.Title}</h3>
            <p>
              <span>📆</span>
              <span>{movie.Year}</span>
            </p>
          </div>
      </div>
    </li>
  );
};

export default Movie;
