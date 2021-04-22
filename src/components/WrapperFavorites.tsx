import { useState, useEffect } from 'react';

import Title from './Title';
import Container from './Container';
import Slider from './Slider';
import SmallInfoCard from './SmallInfoCard';

import api from '../service/api';

type MovieId = {
  id: number;
}

const WrapperFavorites = () => {
  const [movieInfo, setMovieInfo] = useState<MovieId[]>([]);

  useEffect(() => {
    api.getDataByIds(api.getFavoritsIdList()).then((res: any) => {
      setMovieInfo(res);
    });
  }, []);

  if (!movieInfo.length) {
    return null;
  }
  return (
    <>
      <Container>
        <Title text={'Favorite movies'} />
        {movieInfo.length && (<Slider>
          {movieInfo.map(({ id }: MovieId) => {
            return (
              <div className="slide" key={id}>
                <SmallInfoCard id={id} />
              </div>
            );
          })}
        </Slider>)}
      </Container>
    </>
  )
};

export default WrapperFavorites;
