import { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext, ThemeContextType } from './ThemeContext';

import api from 'src/service/api';

import buttonImgSrc from '../assets/image84.png';
import FavoritesBtn from './FavoritesBtn';
import StarRating from './StarRating';

import '../styles/CardInfo.scss';

type CardInfoProps = { number: number; tailWide: boolean };

type CardInfoApiData = {
  poster_path: string;
  original_title: string;
  title: string;
  vote_average: number;
  overview: string;
  vote_count: number;
  id: number;
};

const CardInfo = ({ tailWide, number }: CardInfoProps) => {
  const { theme }: ThemeContextType = useContext(ThemeContext);
  const [movieData, setMovieData] = useState<CardInfoApiData>();

  useEffect(() => {
    api.getDataById(number).then((res: any) => {
      setMovieData(res);
    });
  }, [number]);

  return (
    <>
      {movieData ? (
        <div
          className={`card-info ${tailWide ? 'card-info__tail' : ''} ${theme ? '' : 'dark'
            }`}>
          <div className="card-info__wrapper">
            {!tailWide ? (
              <div className="titleComponent card-info__title">
                <h2>{movieData.title}</h2>
              </div>
            ) : (
              <div className="titleComponent card-info__title-tail">
                <h2>{movieData.title}</h2>
              </div>
            )}
            <div className="info-card-activities">
              {tailWide && (
                <>
                  <FavoritesBtn movieId={movieData.id} />
                  <StarRating
                    numberOfStars={5}
                    colorFilled={'#ff636d'}
                    colorUnfilled={theme ? '#c4c4c4' : '#ffffff'}
                    voteAverage={movieData.vote_average}
                    movieId={movieData.id}
                  />
                </>
              )}
            </div>
            {tailWide && (
              <div className="card-info__description">
                {movieData.overview.length >= 250 ? (
                  <p>
                    {movieData.overview.slice(0, 250)}
                    <NavLink to={`/movie-details/${number} `}>
                      <span>...Read more</span>
                    </NavLink>
                  </p>
                ) : (
                  movieData.overview
                )}
              </div>
            )}
          </div>
          <div className="cars-info_container">
            <img
              src={api.getFullImgLink(movieData.poster_path, 'w500')}
              alt={movieData.original_title}
              className={'card-info__img'}
            />
            <NavLink to={`/movie-details/${number}`}>
              <div className="card-info__gradient" />
            </NavLink>
            <div className="info-card__rate">
              <div className="info-card__imdb">
                IMDB {movieData.vote_average}
              </div>
              <div className="info-card__voters">
                Voters {movieData.vote_count}
              </div>
            </div>
            <NavLink to={`/movie-details/${number}`}>
              <button type="button" className={'card-info__button'}>
                <div className={'card-info__button-view'}>
                  <p> {'VIEW DETAILS'}</p>
                  <img
                    src={buttonImgSrc}
                    alt={movieData.original_title}
                    className={'card-info__button-img'}
                  />
                </div>
              </button>
            </NavLink>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CardInfo;
