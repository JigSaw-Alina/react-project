import { useEffect, useRef, useState } from 'react';
import { searchMovieByIdApi } from '@/lib/omdbApi';
import StarRating from '@/ui/StartRating';
import { WatchedData, WatchedMovieData } from '@/types/movie';
import Spinner from '@/ui/Spinner';

type MovieDetailsProps = {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: WatchedMovieData) => void;
  watched: WatchedMovieData[];
};
const MovieDetails = ({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}: MovieDetailsProps) => {
  const [movie, setMovie] = useState<WatchedData | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [userRating, setUserRating] = useState<number | null>(null);

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  const isWatch = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsloading(true);
        const data = await searchMovieByIdApi(selectedId);
        setMovie(data);
        console.log(parseInt(data.Runtime, 10));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    };
    getMovieDetails();
  }, [selectedId]);

  if (isLoading) {
    return (
      <div className="App__loading">
        <Spinner />
      </div>
    );
  }

  if (!movie) {
    return <div>No movie selected</div>;
  }

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  // handleMovie
  const handleMovie = () => {
    const newWachedMovie: WatchedMovieData = {
      imdbID: selectedId,
      Title: title,
      Year: year,
      Poster: poster,
      imdbRating: Number(imdbRating),
      Runtime: Number(parseInt(runtime, 10)),
      userRating,
      countRatingDecisions: countRef.current,
    };
    onAddWatched(newWachedMovie);
    onCloseMovie();
  };

  return (
    <>
      <header className="header-overview">
        <button className="header-btn-close" onClick={onCloseMovie}>
          &larr;
        </button>
        <div className="box-details">
          <img src={poster} alt={`Poster of {movie}`} />
          <div className="details-oveview">
            <h2>{title}</h2>
            <p>
              {released} &bull; {runtime}
            </p>
            <p>{genre}</p>
            <p>
              <span>⭐️</span>
              {imdbRating} IMDb rating
            </p>
          </div>
        </div>
      </header>
      <section>
        <div className="main__box-rating">
          <div className="main__rating">
            {!isWatch ? (
              <>
                <StarRating
                  maxRating={10}
                  size={'sm'}
                  onSetRating={setUserRating}
                  defaultRating={0}
                />
                {(userRating ?? 0) > 0 && (
                  <button className="main__btn-add" onClick={handleMovie}>
                    + Add to list
                  </button>
                )}
              </>
            ) : (
              <p>
                You reted with movie {watchedUserRating} <span>⭐️</span>
              </p>
            )}
          </div>
          <div className="main__description">
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Direct by {director}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
