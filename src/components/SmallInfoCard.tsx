import buttonImgSrc from '../assets/image95.png';
import { useEffect } from 'react';

import api from 'src/service/api';

import '../styles/SmallCardInfo.scss';
const SmallInfoCard = () => {

  // fetchRequest
  // let [data, setData] = useState<{}>();
  // useEffect(() => {
  //   api.getDataById(number).then((res: any) => {
  //     setData(res.data);
  //   });
  //   setData(fetchRequest);
  // }, [])

  // let [data, setData] = useState<{}>({});
  useEffect(() => {
    // api.getDataById(732450).then((res: any) => {
    //   setData(res);
    // });
    console.log(api.getDataById(732450));

  }, [])
  // console.log(data);

  return (
    <div className='smallCardInfo'>

      {/* temporary TitleComponent */}
      <div className='titleComponent smallCardInfo__title'>
        {/* <p>{data.title}</p> */}
      </div>

      <div className='smallCardInfo__rate'>
        {/* <div className='smallCardInfo__rate-imdb'>IMDB <br />{data.vote_average}</div> */}
        {/* <div className='smallCardInfo__rate-voters'>Voters <br /> {data.vote_average}</div> */}
      </div>

      <div className='smallCardInfo__filter'></div>

      {/* <img src={`https://image.tmdb.org/t/p/w185${data.poster_path}`} alt='sdfasdf' className='smallCardInfo__img' /> */}
      {/* <link rel='stylesheet' href={`/movie-details/${data.id}`}> */}
      <button className='smallCardInfo__button'>
        <p className='smallCardInfo__button-text' >VIEW DETAILS</p>
        <img src={buttonImgSrc} alt='button Img' className='smallCardInfo__button-img' />
      </button>
      {/* </link> */}
    </div>
  )
}

export default SmallInfoCard;

