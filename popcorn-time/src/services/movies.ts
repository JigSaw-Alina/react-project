import { searchMoviesApi } from '../lib/omdbApi';
import { MovieData } from '../types/movie';

export const fetchMovies = async (title: string): Promise<MovieData[]> => {
  const data = await searchMoviesApi(title);
  return data.Search || [];
};
