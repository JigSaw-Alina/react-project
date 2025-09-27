export type BaseMovieEntity = {
  imdbID: string;
  title: string;
  year: string;
  Poster: string;
};

export type MoviesSearchResponse = {
  Search: BaseMovieEntity[];
  totalResults: string;
  Response: string;
  Error?: string;
};
