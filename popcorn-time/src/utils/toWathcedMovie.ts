import type { BaseMovieEntity } from '@/features/types/api';
import { WatchedMovieData } from '@/types/movie';

type toWathcedMovieProps = {
  m: BaseMovieEntity;
};

const toWatchedMovie = ({ m }: toWathcedMovieProps): WatchedMovieData => {
  const { imdbID, Title, Year, Poster } = m;

  return {
    imdbID,
    Title,
    Year,
    Poster,
    imdbRating: 0,
    Runtime: 0,
    userRating: null,
  };
};

export default toWatchedMovie;
