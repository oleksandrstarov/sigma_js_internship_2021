import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import api from 'src/service/api';

import buttonImgSrc from '../assets/image84.png';
import '../styles/CardInfo.scss';

let CardInfo = ({ tailWide, number }: { number: number; tailWide: boolean }) => {
  const [data, setData] = useState({
    poster_path: '',
    original_title: '',
    title: '',
    vote_average: '',
    vote_count: '',
    overview: '',

  });
  const { poster_path, original_title, title, vote_average, overview, vote_count } = data;
  const srcImg = api.changeImgLinks(poster_path, 'w342');

  useEffect(() => {
    api.getDataById(number).then((res: any) => {
      setData(res);
    });
  }, [number]);

  return (
    <div className={tailWide
      ? 'card-info card-info__tail'
      : 'card-info'
    }>
      {/* temporary TitleComponent */}
      <div className='card-info__wrapper'>
        {!tailWide ? (
          <div className='titleComponent card-info__title'>
            <h2>{title}</h2>
          </div>
        ) : (
          <div className='titleComponent card-info__title-tail'>
            <h2>{title}</h2>
          </div>
        )}
        {!tailWide ? null : (
          <div className='card-info__description'>
            {overview.length >= 250 ? (
              <p>
                {' '}
                {overview.slice(0, 250)}
                <NavLink to={`/movie-details/:${number} `}>
                  <span>...Read more</span>
                </NavLink>
              </p>
            ) : (
              overview
            )}
          </div>
        )}
      </div>
      <div className='cars-info_container'>
        <img src={srcImg} alt={original_title} className={'card-info__img'} />
        <div className='card-info__gradient' />
        <div className='info-card__rate'>
          <div className='info-card__imdb'>IMDB {vote_average}</div>
          <div className='info-card__voters'>Voters {vote_count}</div>
        </div>
        <NavLink to={`/movie-details/:${number}`}>
          <button type='button' className={'card-info__button'}>
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
