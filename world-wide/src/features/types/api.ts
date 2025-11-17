export type BaseMovieEntity = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export type MoviesSearchResponse = {
  Search: BaseMovieEntity[];
  totalResults: string;
  Response: string;
  Error?: string;
};
