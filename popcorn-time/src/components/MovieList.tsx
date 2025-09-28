import type { MovieListProps } from '@/types/Movie';
import Movie from './Movie';

const MovieList = ({ movies, onSelectedMovie }: MovieListProps) => {
  return (
    <ul className="main__list main__list-watched">
      {movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          onSelectedMovie={onSelectedMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;
