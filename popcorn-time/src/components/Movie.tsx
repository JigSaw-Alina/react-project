import type { MovieProps } from '@/types/movie';

const Movie = ({ movie, onSelectedMovie }: MovieProps) => {
  console.log(movie);

  const { Title: title, Poster: poster, Year: year } = movie;

  return (
    <li onClick={() => onSelectedMovie(movie.imdbID)}>
      <div className="App__Movie-box">
        <img src={poster} alt={`${title} poster`} />
        <div className="App__Movie-details">
          <h3>{title}</h3>
          <p>
            <span>📆</span>
            <span>{year}</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default Movie;
