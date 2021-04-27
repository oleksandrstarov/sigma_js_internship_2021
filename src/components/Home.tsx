import { useEffect, useState } from 'react';

import WrapperFavorites from './WrapperFavorites';
import WrapperLastSeen from './WrapperLastSeen';
import WrapperPopular from './WrapperPopular';
import MovieBanner from './MovieBanner';

import api from 'src/service/api';
import { Movie } from 'src/models';
import Preloader from './Preloader';

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    api.getPopularQueryList().then(res => {
      setMovies(res.slice(0, 10));
    });
  }, []);

  return (
    <>
      <Preloader isLoaded={!!movies.length} />
      <MovieBanner popularMovies={movies.slice(0, 10)} />
      <div className="wrapper-space">
        <WrapperFavorites />
      </div>
      <div className="wrapper-space">
        <WrapperLastSeen />
      </div>
      <div className="wrapper-space">
        <WrapperPopular movies={movies} />
      </div>
    </>
  );
};

export default Home;
