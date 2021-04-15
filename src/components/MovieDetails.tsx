import { useState, useEffect, ReactNode } from 'react';

import api from '../service/api';

import ReadMore from './ReadMore';

import '../styles/MovieDetails.scss';

enum ImageWidth {
  w500
}

type MovieDetailsProps = {
  match: { params: { id: string } }
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
  genres: [{ id: number | null, name: string }],
  production_countries: [{ name: string }]
  overview: string;
};

const MovieDetails = ({ match }: MovieDetailsProps) => {
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
    overview: '',
  })

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

  const poster = api.getFullImgLink(poster_path, ImageWidth[0]);

  useEffect(() => {
    api.getDataById(Number(match.params.id)).then((res: any) => {
      setMovieData(res);
    })
  }, [match.params.id])

  const renderMovieInfo = (header: string, info: string | number): ReactNode => {
    return (
      <tr>
        <td><h4>{header}: </h4></td>
        <td><p>{info}</p></td>
      </tr>
    )
  }

  return (
    <div className="details-container">
      <section className="movie-wrapper">
        <div className="movie-img">
          <img src={poster} alt="poster" />
        </div>
        <div className="movie-details">
          <h1>{title}</h1>
          <div className="general-info">
            <table>
              {renderMovieInfo("Original title", original_title)}
              {renderMovieInfo("Tagline", tagline)}
              {renderMovieInfo("release_date", release_date)}
              {renderMovieInfo("Status", status)}
              {renderMovieInfo("Budget", budget)}
              {renderMovieInfo("Country", production_countries[0].name)}
              {renderMovieInfo("Duration", runtime)}
              {renderMovieInfo("IMDB", vote_average)}
              {renderMovieInfo("Popularity", popularity)}
            </table>
          </div>
        </div>
      </section>
      <div className="genres">
        {genres && genres.map((genre) => <div key={genre.id}>{genre.name}</div>)}
      </div>
      <div className="hl"></div>
      <div className="description">
        <ReadMore>
          {overview}
        </ReadMore>
      </div>
      <div className="hl"></div>
    </div>
  );
};

export default MovieDetails;
