import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from 'src/service/api';

import buttonImgSrc from '../assets/image95.png';
import '../styles/SmallCardInfo.scss';


type CardinfoProps = {
  id: number;
};

type DataType = {
  title: string;
  poster_path: string;
  vote_average: string;
  vote_count: string;
  id?: number;
};

const SmallInfoCard = ({ id }: CardinfoProps) => {

  const [data, setData] = useState<DataType>({
    poster_path: '',
    vote_count: '',
    title: '',
    vote_average: '',

  });

  useEffect(() => {
    api.getDataById(id).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div className="small-cardInfo">
      {/* temporary TitleComponent */}
      <div className="title-component small-cardInfo__title">
        <p>{data.title}</p>
      </div>
      <div className="small-cardInfo__rate">
        <div className="small-cardInfo__rate-voters">Voters<br />{data.vote_count}</div>
        <div className="small-cardInfo__rate-imdb">IMDB<br />{data.vote_average}</div>
      </div>
      <div className="small-cardInfo__filter"></div>
      <div className="small-cardInfo__img-wrapper">
        <img src={`https://image.tmdb.org/t/p/w185${data.poster_path}`} alt={data.title} className="small-cardInfo__img" />
      </div>
      <Link to={`/movie-details/${data.id}`}>
        <button className="small-cardInfo__button">
          <p className="small-cardInfo__button-text">VIEW DETAILS</p>
          <img src={buttonImgSrc} alt="button Img" className="small-cardInfo__button-img" />
        </button>
      </Link>
    </div >
  )
}

export default SmallInfoCard;

