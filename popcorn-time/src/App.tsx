import { useEffect } from 'react';
// import NavBar from './components/NavBar';
// import Search from './components/Search';
// import Numresult from './components/Numresult';
// import Main from './components/Main';
// import { tempMovieData } from './data/movie';
// import Box from './components/Box';
// import MovieList from './components/MovieList';
// import { useState } from 'react';
// import StarRating from './components/StartRating';
import { fetchMovies } from './services/movies'

const App = () => {
  // const [movie, setMovie] = useState(tempMovieData);
  // const [query, setQuery] = useState('');
  // const [userRating, setUserRating] = useState<string>('');
  const title = 'Interstellar';

  useEffect(() => {
    const loadMOvies = async () => {
      try {
        const fetchedMovies = await fetchMovies(title); // Fetch movies
        console.log(fetchedMovies);
      } catch (error) {
        console.log(error);
      }
    };
    loadMOvies();
  }, []);

  return (
    <h1>test</h1>

    // <StarRating maxRating={4} size={24} defaultRating={3} />
    // <>
    //   <NavBar>
    //     <Search query={query} setQuery={setQuery} />
    //     <Numresult movies={movie} />
    //   </NavBar>
    //   <Main>
    //     <Box>
    //       <MovieList movies={movie} />
    //     </Box>
    //     <Box>1</Box>
    //   </Main>
    //   {/*

    //   </div> */}
    // </>
  );
};

export default App;
