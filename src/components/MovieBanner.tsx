import { useEffect, useState } from 'react';

import Container from './Container';
import PopularMovie from './PopularMovie';
import { Movie } from '../models/index';

import api from '../service/api';

import '../styles/MovieBanner.scss';

const MovieBanner = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const getPopularMovies = (): void => {
     api.getPopularQueryList().then(data => {
       setPopularMovies(data);
     });
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  const randomMovie =
    popularMovies[Math.floor(Math.random() * popularMovies.length)];

  return (
    <section className="movie-banner">
      <Container>
        {randomMovie && <PopularMovie movie={randomMovie} />}
      </Container>
    </section>
  );
};

export default MovieBanner;
