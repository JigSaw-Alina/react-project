// import { useState } from 'react';
// import NavBar from './components/NavBar';
// import Search from './components/Search';
// import Numresult from './components/Numresult';
// import Main from './components/Main';
// import { tempMovieData } from './data/movie';
// import Box from './components/Box';
// import MovieList from './components/MovieList';
// import { useState } from 'react';
import StarRating from './components/StartRating';

const App = () => {
  // const [movie, setMovie] = useState(tempMovieData);
  // const [query, setQuery] = useState('');
  // const [userRating, setUserRating] = useState<string>('');

  return (
    <StarRating maxRating={4} size={24} />
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
