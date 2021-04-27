import { useEffect, useState, useContext } from 'react';

import { ThemeContext, ThemeContextType } from './ThemeContext';

import { Link } from 'react-router-dom';
import Title from './Title';

import api from '../service/api';

import buttonImgSrc from '../assets/image95.png';
import '../styles/SmallCardInfo.scss';

type CardInfoProps = {
  id: number;
};

type ResponseData = {
  title: string;
  poster_path: string;
  vote_average: string;
  vote_count: string;
  id?: number;
};

const SmallInfoCard = ({ id }: CardInfoProps) => {
  const { theme }: ThemeContextType = useContext(ThemeContext);
  const [data, setData] = useState<ResponseData>();

  useEffect(() => {
    api.getDataById(id).then(res => {
      setData(res);
    });
  }, [id]);

  return <>{data && (
    <div className={`small-cardInfo ${theme ? '' : 'dark'}`}>
      <Link to={`/movie-details?id=${data.id}`}>
        <div className="small-cardInfo__title">
          <Title text={data.title} />
        </div>
      </Link>
      <div className="small-cardInfo__rate">
        <div className="small-cardInfo__rate-voters">
          Voters
          <br />
          {data.vote_count}
        </div>
        <div className="small-cardInfo__rate-imdb">
          IMDB
          <br />
          {data.vote_average}
        </div>
      </div>
      <div className="small-cardInfo__filter"></div>
      <div className="small-cardInfo__img-wrapper">
        <img
          src={api.getFullImgLink(data.poster_path, 'w185')}
          alt={data.title}
          className="small-cardInfo__img"
        />
      </div>
      <Link to={`/movie-details?id=${data.id}`}>
        <button className="small-cardInfo__button">
          <p className="small-cardInfo__button-text">VIEW DETAILS</p>
          <img
            src={buttonImgSrc}
            alt="button Img"
            className="small-cardInfo__button-img"
          />
        </button>
      </Link>
    </div>
  )}</>;
};

export default SmallInfoCard;
