import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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
  vote_count: number | null;
  id: number | null;
};

const CardInfo = ({ tailWide, number }: CardInfoProps) => {
  const [movieData, setMovieData] = useState<CardInfoApiData>({
    poster_path: '',
    original_title: '',
    title: '',
    vote_average: 0,
    vote_count: null,
    overview: '',
    id: null
  });

  const {
    poster_path,
    original_title,
    title,
    vote_average,
    overview,
    vote_count,
    id
  } = movieData;

  const srcImgLink = api.changeImgLinks(poster_path, 'w342');

  useEffect(() => {
    api.getDataById(number).then((res: any) => {
      setMovieData(res);
    });
  }, [number]);

  return (
    <div className={tailWide ? 'card-info card-info__tail' : 'card-info'}>
      <div className="card-info__wrapper">
        {!tailWide ? (
          <div className="titleComponent card-info__title">
            <h2>{title}</h2>
          </div>
        ) : (
          <div className="titleComponent card-info__title-tail">
            <h2>{title}</h2>
          </div>
        )}

        <div className="info-card-activities">
          {!tailWide
            ? null
            : <>
              <FavoritesBtn movieId={id} />
              <StarRating numberOfStars={5} colorFilled={'#ff636d'} colorUnfilled={'#c4c4c4'} voteAverage={vote_average} />
            </>}
        </div>

        {!tailWide ? null : (
          <div className="card-info__description">
            {overview.length >= 250 ? (
              <p>
                {' '}
                {overview.slice(0, 250)}
                <NavLink to={`/movie-details/${number} `}>
                  <span>...Read more</span>
                </NavLink>
              </p>
            ) : (
              overview
            )}
          </div>
        )}
      </div>
      <div className="cars-info_container">
        <img
          src={srcImgLink}
          alt={original_title}
          className={'card-info__img'}
        />
        <div className="card-info__gradient" />
        <div className="info-card__rate">
          <div className="info-card__imdb">IMDB {vote_average}</div>
          <div className="info-card__voters">Voters {vote_count}</div>
        </div>
        <NavLink to={`/movie-details/${number}`}>
          <button type="button" className={'card-info__button'}>
            <div className={'card-info__button-view'}>
              <p> {'VIEW DETAILS'}</p>
              <img
                src={buttonImgSrc}
                alt={original_title}
                className={'card-info__button-img'}
              />
            </div>
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default CardInfo;
