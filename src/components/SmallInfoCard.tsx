import { useEffect, useState } from 'react';

import api from 'src/service/api';

import buttonImgSrc from '../assets/image95.png';
import '../styles/SmallCardInfo.scss';

const SmallInfoCard = () => {

  const [data, setData] = useState<{}>();

  useEffect(() => {
    api.getDataById(123).then((res: any) => {
      setData(res);
    });
  }, [])

  return (
    <div className="small-cardInfo">
      {/* temporary TitleComponent */}
      <div className="title-component small-cardInfo__title">
        <p>{data.title}</p>
      </div>
      <div className="small-cardInfo__rate">
        <div className="small-cardInfo__rate-imdb">IMDB <br />{data.vote_average}</div>
        <div className="small-cardInfo__rate-voters">Voters <br /> {data.vote_average}</div>
      </div>
      <div className="small-cardInfo__filter"></div>
      <img src={`https://image.tmdb.org/t/p/w185${data.poster_path}`} alt={data.title} className="smallCardInfo__img" />
      <link rel="stylesheet" href={`/movie-details/${data.id}`}>
        <button className="small-cardInfo__button">
          <p className="small-cardInfo__button-text">VIEW DETAILS</p>
          <img src={buttonImgSrc} alt="button Img" className="small-cardInfo__button-img" />
        </button>
      </link>
    </div >
  )
}

export default SmallInfoCard;

