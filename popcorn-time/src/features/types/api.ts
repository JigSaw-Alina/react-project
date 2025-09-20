export type BaseMovieEntity = {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
};

export type MoviesSearchResponse = {
  Search: BaseMovieEntity[];
  totalResults: string;
  Response: string;
  Error?: string;
};
