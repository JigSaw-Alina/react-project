import axios from 'axios';
import { env } from '@/config/env';
import { MoviesSearchResponse } from '@/features/types/api';

export const searchMoviesApi = async (
  title: string
): Promise<MoviesSearchResponse> => {
  try {
    const url = `${env.OMDB_BASE_URL}?s=${encodeURIComponent(title)}&apikey=${
      env.OMDB_API_KEY
    }`;
    const { data } = await axios.get<MoviesSearchResponse>(url);

    if (data.Response === 'False') {
      throw new Error(data.Error || 'No movies found');
    }

    return data;
  } catch (error: any) {
    console.error('Error fetching movies:', error.message || error);
    throw new Error('Failed to fetch movies from OMDB API');
  }
};

export const searchMovieByIdApi = async (id: string) => {
  const url = `${env.OMDB_BASE_URL}?i=${encodeURIComponent(id)}&apikey=${
    env.OMDB_API_KEY
  }`;
  const res = await axios.get(url);
  if (res.status !== 200) throw new Error('Failed to fetch movie');
  return res.data;
};
