import { useEffect, useState } from 'react';
// import CardInfo from './CardInfo';
import Title from './Title';
// import Slider from './Slider';
// import PopularMovie from './PopularMovie';

import api from 'src/service/api';


const WrapperFavorites = () => {
  let result: any = [];

  const [movies, setMovies] = useState<any | null>(null);

  useEffect(() => {
    setMovies(localStorage.getItem('favorites'));
    api.getDataByIds(JSON.parse(movies)).then((res: any) => {
      res.map((item: Object) => result.push(item))
    })

    // console.log(result);
  }, [movies])

  return !movies ? null : (
    <div>
      <Title text="Favourites" />
      {/* <Slider>
        {result.map((item: any) => <PopularMovie movie={item} />)}
      </Slider> */}
    </div>
  )
}

export default WrapperFavorites;
