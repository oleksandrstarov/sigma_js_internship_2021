import { useState, useEffect } from 'react';

import api from 'src/service/api';

import ReadMore from './ReadMore';

import '../styles/MovieDetails.scss';

type MovieDetailsProps = {
  match: { params: { id: string } }
}

const MovieDetails = ({ match }: MovieDetailsProps) => {

  const [movieId, setMovieId] = useState<string>(' ');
  const [movieData, setMovieData] = useState({
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
    genres: [{ id: null, name: ' ' }],
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

  const poster = api.changeImgLinks(poster_path, 'w500');

  const getMovieById = (id: number): void => {
    api.getDataById(id).then((res: any) => {
      setMovieData(res);
    })
  }

  useEffect(() => {
    setMovieId(match.params.id);
    getMovieById(Number(movieId));
  }, [movieId])

  return ((
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
        {!genres ? null : genres.map((genre) => <div key={genre.id}>{genre.name[0].toLowerCase() + genre.name.slice(1)}</div>)}
      </div>
      <div className="hl"></div>
      <div className="description">
        <ReadMore>
          {overview}
        </ReadMore>
      </div>
      <div className="hl"></div>
    </div>
  )
  )
}

function renderMovieInfo(header: string, info: any): any {
  return (
    <tr>
      <td><h4>{header}: </h4></td>
      <td><p>{info}</p></td>
    </tr>
  )
}

export default MovieDetails;
