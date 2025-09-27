import { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import Search from '@/components/Search';
import Numresult from '@/components/Numresult';
import Main from '@/components/Main';
import Box from '@/ui/Box';
import MovieList from '@/components/MovieList';
import { searchMoviesApi } from '@/lib/omdbApi';
import { MovieData, WatchedMovieData } from '@/types/movie';
import WatchedSummary from '@/components/WatchedSummary';
import WatchedMovieList from './components/WatchedMovieList';
import MovieDetails from './components/MovieDetails';
import Spinner from '@/ui/Spinner';
import useDebounce from '@/hooks/useDebounce';
import useLocalStoragae from '@/hooks/useLocalStorage';

 

const App = () => {
  const [movie, setMovie] = useState<MovieData[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [watched, setWatched] = useLocalStoragae<WatchedMovieData[]>('watched', [])
  const [query, setQuery] = useState('');
  const debouncedQuery  =  useDebounce(query, 500)



  useEffect(() => {
    const featchData = async () => {
      try {
        setIsloading(true);
        const data = await searchMoviesApi(debouncedQuery.trim());
        setMovie(data.Search);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    };

    console.log(debouncedQuery)

    if (debouncedQuery.trim() !== '') {
      featchData()
    } else {
      setMovie([])
    }
  }, [debouncedQuery]);

  const handleSelectedMovie = (movieId: string | null) => {
    setSelectedId(movieId);
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatch = (movie: WatchedMovieData) => {
    setWatched((watched) => [...watched, movie])
  }

  const handleDeleteWatch = (id: string) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id))
  }

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      handleCloseMovie();
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}, [handleCloseMovie]);




  return (

    <>
<NavBar>
        <Search query={query} setQuery={setQuery} />
        <Numresult movies={movie} />
      </NavBar>
      <Main>
        <Box>

          {isLoading ? (
            <div className='App__loading'><Spinner /></div>
          ) : (
            <MovieList movies={movie} onSelectedMovie={handleSelectedMovie} />
          )}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatch}
              watched={watched}

            />
          ) : (
            <>
              <WatchedSummary watched={watched}/>
              <WatchedMovieList watched={watched} onDeletedWatched={handleDeleteWatch}/>
            </>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;
