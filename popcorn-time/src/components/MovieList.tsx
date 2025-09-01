import type { MovieListProps } from '../types/movie';
import Movie from './Movie';

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className="main__list main__list-watched">
      {movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
