import { env } from '../config/env';

export const searchMoviesApi = async (title: string) => {
  const url = `${env.OMDB_BASE_URL}?s=${encodeURIComponent(title)}&apikey=${
    env.OMDB_API_KEY
  }`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch movie');
  return res.json();
};
