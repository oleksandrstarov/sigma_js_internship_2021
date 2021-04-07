import { useEffect, useState } from 'react';

import Container from './Container';
import PopularMovie from './PopularMovie';
import { Movie } from '../models/models';

import '../styles/MovieBanner.scss';

const MovieBanner = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const BASE_URL: string = 'https://api.themoviedb.org/3/movie/';
  const API_KEY: string = '3f42cb974635f0f6e4deae85cbfd4c53';

  const getPopularMovies = (): void => {
    // fetch api was used in a testing purposes. It will be replaced with rge axios later on
    fetch(`${BASE_URL}popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        setPopularMovies(data.results);
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
