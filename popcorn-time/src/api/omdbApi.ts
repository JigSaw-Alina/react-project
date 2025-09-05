import { env } from '../config/env';
import axios from 'axios';

export const searchMoviesApi = async (title: string) => {
  const url = `${env.OMDB_BASE_URL}?s=${encodeURIComponent(title)}&apikey=${
    env.OMDB_API_KEY
  }`;
  const res = await axios.get(url);
  if (res.status !== 200) throw new Error('Failed to fetch movie');
  return res.data;
};
