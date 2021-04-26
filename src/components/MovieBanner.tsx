import Container from './Container';
import PopularMovie from './PopularMovie';
import { Movie } from '../models/index';

import '../styles/MovieBanner.scss';
import { useEffect, useState } from 'react';

type PopularMovies = {
  popularMovies: Array<Movie>;
};

const MovieBanner = ({ popularMovies }: PopularMovies) => {
  const [randomMovie, setRandomMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (popularMovies.length) {
      setRandomMovie(
        popularMovies[Math.floor(Math.random() * popularMovies.length)]
      );
    }
  }, [popularMovies]);

  return (
    <section className="movie-banner">
      <Container>
        {randomMovie && <PopularMovie movie={randomMovie} />}
      </Container>
    </section>
  );
};

export default MovieBanner;
