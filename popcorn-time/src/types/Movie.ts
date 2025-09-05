import type { Dispatch, SetStateAction } from 'react';

export type SearchProps = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

export type MovieData = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export type WatchedData = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  runtime: number;
  imdbRating: number;
  userRating: number;
};

// A single movie
export type MovieProps = {
  movie: MovieData;
};

// A collection of movies
export type MoviesProps = {
  movies: MovieData[];
};

// Reuse MoviesProps if needed (optional aliases for clarity)
export type NumResultProps = MoviesProps;
export type MainProps = MoviesProps;
export type ListBoxProps = MoviesProps;
export type MovieListProps = MoviesProps;


