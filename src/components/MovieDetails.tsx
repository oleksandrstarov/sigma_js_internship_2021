import { useState, useEffect, useContext } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeContext'
import { useLocation } from 'react-router-dom';
import Container from './Container';
import Breadcrumbs from './Breadcrumbs';

import api from '../service/api';

import ReadMore from './ReadMore';
import Detail from './Detail';
import Title from './Title';
import GenreRedirection from './GenreRedirection';
import StarRating from './StarRating';
import FavoritesBtn from './FavoritesBtn';

import '../styles/MovieDetails.scss';
import Preloader from './Preloader';

enum ImageWidth {
  w500
}

type MovieInfo = {
  poster_path: string;
  original_title: string;
  title: string;
  tagline: string;
  status: string;
  release_date: string;
  budget: string;
  popularity: string;
  vote_average: string;
  runtime: string;
  genres: [{ id: number | null; name: string }];
  production_countries: [{ name: string }];
  overview: string;
};

const MovieDetails = () => {
  const [movieData, setMovieData] = useState<MovieInfo | null>(null);
  const [poster, setPoster] = useState<string>('');
  const { theme }: ThemeContextType = useContext(ThemeContext);
  const { search } = useLocation();

  const {
    original_title,
    title,
    tagline,
    status,
    release_date,
    budget,
    popularity,
    vote_average,
    runtime,
    genres,
    production_countries,
    overview
  } = movieData || {};

  useEffect(() => {
    if (movieData?.poster_path) {
      setPoster(api.getFullImgLink(movieData.poster_path, ImageWidth[0]));
    }
  }, [movieData])

  useEffect(() => {
    api.getDataById(Number(new URLSearchParams(search).get('id'))).then((res: any) => {
      setMovieData(res);
    });
  }, []);

  return (
    <div className={`details-container ${theme ? '' : 'dark-theme'}`}>
      <Preloader isLoaded={Boolean(movieData && poster)}/>
      <Container>
        <Breadcrumbs/>
        <section className="movie-wrapper">
          <div className="movie-img">
            <img src={poster} alt="poster" />
          </div>
          <div className="movie-details">
            <Title text={title ?? ""} className={`${theme ? '' : 'dark-theme'}`} />
            <div className="fav-raiting">
            <span>
              {vote_average && <StarRating
                numberOfStars={5}
                colorFilled={'#ff636d'}
                colorUnfilled={theme ? '#c4c4c4' : '#ffffff'}
                voteAverage={Number(vote_average)}
                movieId={Number(new URLSearchParams(search).get('id'))}
              />}
            </span>
              <FavoritesBtn movieId={Number(new URLSearchParams(search).get('id'))} />
            </div>
            <div className="general-info">
              <Detail title="Original title" textContent={original_title} />
              <Detail title="Tagline" textContent={tagline} />
              <Detail title="release_date" textContent={release_date} />
              <Detail title="Status" textContent={status} />
              <Detail title="Budget" textContent={budget} />
              <Detail
                title="Country"
                textContent={production_countries?.map(({ name }) => name)
                  .join(', ')}
              />
              <Detail title="Duration" textContent={runtime} />
              <Detail title="IMDB" textContent={vote_average} />
              <Detail title="Popularity" textContent={popularity} />
            </div>
          </div>
        </section>
        <div className="genres">
          {genres?.map(genre => <div key={genre.id}>
            <GenreRedirection genre={genre.name} />
          </div>)}
        </div>
        <div className="description">
          <ReadMore>{overview ?? ''}</ReadMore>
        </div>
      </Container>
    </div>
  );
};

export default MovieDetails;
