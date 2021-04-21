import { useState, useEffect } from 'react';

import { ThemeContext, ThemeContextType } from './ThemeContext'
import { useContext } from 'react';

import api from '../service/api';

import ReadMore from './ReadMore';

import '../styles/MovieDetails.scss';

import Detail from './Detail';
import Title from './Title';

enum ImageWidth {
  w500
}

type MovieDetailsProps = {
  match: { params: { id: string } };
};

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

const MovieDetails = ({ match }: MovieDetailsProps) => {
  const { theme }: ThemeContextType = useContext(ThemeContext);

  const [movieData, setMovieData] = useState<MovieInfo>({
    poster_path: '',
    original_title: '',
    title: '',
    tagline: '',
    status: '',
    release_date: '',
    budget: '',
    popularity: '',
    vote_average: '',
    runtime: '',
    genres: [{ id: null, name: '' }],
    production_countries: [{ name: '' }],
    overview: ''
  });

  const {
    poster_path,
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
  } = movieData;

  const poster = api.changeImgLinks(poster_path, ImageWidth[0]);

  useEffect(() => {
    api.getDataById(Number(match.params.id)).then((res: any) => {
      setMovieData(res);
    });
  }, [match.params.id]);

  return (
    <div className={`details-container ${theme ? '' : 'dark-theme'}`}>
      <section className="movie-wrapper">
        <div className="movie-img">
          <img src={poster} alt="poster" />
        </div>
        <div className="movie-details">
          <Title text={title} className={`${theme ? '' : 'dark-theme'}`} />
          <div className="general-info">
            <Detail title="Original title" textContent={original_title} />
            <Detail title="Tagline" textContent={tagline} />
            <Detail title="release_date" textContent={release_date} />
            <Detail title="Status" textContent={status} />
            <Detail title="Budget" textContent={budget} />
            <Detail
              title="Country"
              textContent={production_countries
                .map(({ name }) => name)
                .join(', ')}
            />
            <Detail title="Duration" textContent={runtime} />
            <Detail title="IMDB" textContent={vote_average} />
            <Detail title="Popularity" textContent={popularity} />
          </div>
        </div>
      </section>
      <div className="genres">
        {genres && genres.map(genre => <div key={genre.id}>{genre.name}</div>)}
      </div>
      <div className="hl"></div>
      <div className="description">
        <ReadMore>{overview}</ReadMore>
      </div>
      <div className="hl"></div>
    </div>
  );
};

export default MovieDetails;
