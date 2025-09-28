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

export type WatchedData = MovieData & {
  Runtime: string;
  imdbRating: number;
  userRating: number;
  Released: string;
  Plot: string;
  Actors: string;
  Director: string;
  Genre: string;
};

export type WatchedMovieData = MovieData & {
  imdbRating: number;
  Runtime: number;
  userRating: number | null;
  countRatingDecisions: number;
};

// A single movie
export type MovieProps = {
  movie: MovieData;
  onSelectedMovie: (movieId: string | null) => void;
};

// A collection of movies
export type MoviesProps = {
  movies: MovieData[];
  onSelectedMovie: (movieId: string | null) => void;
};

export type WatchedSummaryProps = {
  watched: WatchedMovieData[];
};

export type NumResultProps = {
  movies: MovieData[];
};

// Reuse MoviesProps if needed (optional aliases for clarity)

export type MainProps = MoviesProps;
export type ListBoxProps = MoviesProps;
export type MovieListProps = MoviesProps;
export type WatchedMovieListProps = WatchedSummaryProps;
