import Container from './Container';
import PopularMovie from './PopularMovie';
import { Movie } from '../models/index';

import '../styles/MovieBanner.scss';

type PopularMovies = {
  popularMovies: Array<Movie>;
};

const MovieBanner = ({ popularMovies }: PopularMovies) => {
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
