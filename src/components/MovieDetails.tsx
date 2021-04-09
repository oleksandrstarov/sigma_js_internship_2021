import { useState, useEffect } from 'react';
import ReadMore from './ReadMore';

import '../styles/MovieDetails.scss';

let obj = { "adult": false, "backdrop_path": "/xJHokMbljvjADYdit5fK5VQsXEG.jpg", "belongs_to_collection": null, "budget": 165000000, "genres": [{ "id": 12, "name": "Adventure" }, { "id": 18, "name": "Drama" }, { "id": 878, "name": "Science Fiction" }], "homepage": "http://www.interstellarmovie.net/", "id": 157336, "imdb_id": "tt0816692", "original_language": "en", "original_title": "Interstellar", "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.", "popularity": 104.282, "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", "production_companies": [{ "id": 923, "logo_path": "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png", "name": "Legendary Pictures", "origin_country": "US" }, { "id": 9996, "logo_path": "/3tvBqYsBhxWeHlu62SIJ1el93O7.png", "name": "Syncopy", "origin_country": "GB" }, { "id": 13769, "logo_path": null, "name": "Lynda Obst Productions", "origin_country": "" }], "production_countries": [{ "iso_3166_1": "GB", "name": "United Kingdom" }, { "iso_3166_1": "US", "name": "United States of America" }], "release_date": "2014-11-05", "revenue": 675120017, "runtime": 169, "spoken_languages": [{ "english_name": "English", "iso_639_1": "en", "name": "English" }], "status": "Released", "tagline": "Mankind was born on Earth. It was never meant to die here.", "title": "Interstellar", "video": false, "vote_average": 8.3, "vote_count": 25458 };

type MovieDetailsProps = {
  match: { params: { id: string } }
}

const MovieDetails = ({ match }: MovieDetailsProps) => {

  const [movieId, setMovieId] = useState<string>(" ");
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
    overview: ""
  })

  const getMovieById = (id: string): void => {
    // fetch api was used in a testing purposes. It will be replaced with rge axios later on
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=157c2ade7d0b335008ae899a157d8967`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setMovieData(data);
      });
  };

  useEffect(() => {
    setMovieId(match.params.id);
    getMovieById(movieId);
  }, [movieId])

  const path: string = 'https://image.tmdb.org/t/p/w500';
  return ((
    <div className="details-container">
      <section className="movie-wrapper">
        <div className="movie-img">
          <img src={path + movieData.poster_path} alt="poster" />
        </div>
        <div className="movie-details">
          <h1>{movieData.title}</h1>
          <div className="general-info">
            <table>
              {renderMovieInfo("Original title", movieData.original_title)}
              {renderMovieInfo("Tagline", movieData.tagline)}
              {renderMovieInfo("release_date", movieData.release_date)}
              {renderMovieInfo("Status", movieData.status)}
              {renderMovieInfo("Budget", movieData.budget)}
              {renderMovieInfo("Country", obj.production_countries[0].name)}
              {renderMovieInfo("Duration", movieData.runtime)}
              {renderMovieInfo("IMDB", movieData.vote_average)}
              {renderMovieInfo("Popularity", movieData.popularity)}
            </table>
          </div>
        </div>
      </section>
      <div className="genres">
        {!movieData.genres ? null : movieData.genres.map((genre) => <div key={genre.id}>{genre.name[0].toLowerCase() + genre.name.slice(1)}</div>)}
      </div>
      <div className="hl"></div>
      <div className="description">
        <ReadMore>
          {movieData.overview}
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

export default MovieDetails
