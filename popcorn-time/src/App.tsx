import { useEffect, useState, useTransition } from 'react';
import NavBar from '@/components/NavBar';
import Search from '@/components/Search';
import Numresult from '@/components/Numresult';
import Main from '@/components/Main';
import Box from '@/ui/Box';
import MovieList from '@/components/MovieList';
import { searchMoviesApi } from '@/lib/omdbApi';
import { MovieData } from '@/types/movie';
import WatchedSummary from '@/components/WatchedSummary';
import WatchedMovieList from './components/WatchedMovieList';
import MovieDetails from './components/MovieDetails';
// import StarRating from '@/ui/StartRating';

const App = () => {
  const [movie, setMovie] = useState<MovieData[]>([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // const [userRating, setUserRating] = useState<string>('');

  useEffect(() => {
    const featchData = async () => {
      try {
        setIsloading(true);
        const data = await searchMoviesApi('Sponge');
        setMovie(data.Search);
        console.log(data.Search);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    };
    featchData();
  }, [query]);

  const handleSelectedMovie = (movieId: string | null) => {
    setSelectedId(movieId);
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  return (
    // <StarRating maxRating={4} size={24} defaultRating={3} />
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <Numresult movies={movie} />
      </NavBar>
      <Main>
        <Box>
          {isLoading ? (
            <h1 className="Loading">Loading.....</h1>
          ) : (
            <MovieList movies={movie} onSelectedMovie={handleSelectedMovie} />
          )}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              handleCloseMovie={handleCloseMovie}
            />
          ) : (
            <>
              <WatchedSummary />
              <WatchedMovieList />
            </>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;
