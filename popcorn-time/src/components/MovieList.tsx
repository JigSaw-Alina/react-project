import type { MovieListProps } from '@/types/movie';
import Movie from './Movie';

const MovieList = ({ movies, onSelectedMovie }: MovieListProps) => {
  const uniqueMovies = Array.from(
    new Map(movies.map((m) => [m.imdbID, m])).values()
  );

  return (
    <ul className="main__list main__list-watched">
      {uniqueMovies.map((movie) => (
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
