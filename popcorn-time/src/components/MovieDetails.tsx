import { useEffect, useState } from 'react';
import { searchMovieByIdApi } from '@/lib/omdbApi';

type MovieDetailsProps = {
  selectedId: string;
  handleCloseMovie: () => void;
};
// searchMovieByIdApi
const MovieDetails = ({ selectedId, handleCloseMovie }: MovieDetailsProps) => {
  const [error, setError] = useState('');
  const [isLoading, setIsloading] = useState(false);
  


  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setIsloading(true);
        const data = await searchMovieByIdApi(selectedId);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    };
    getMovieDetails();
  }, [selectedId]);

  return (
    <div>
      <button onClick={handleCloseMovie}>&larr;</button>
      {selectedId}
    </div>
  );
};

export default MovieDetails;
