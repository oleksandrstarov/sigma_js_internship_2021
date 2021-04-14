import { useState, useEffect } from 'react';

import Title from './Title';
import Container from './Container';
import Slider from './Slider';
import SmallInfoCard from './SmallInfoCard';

import api from '../service/api';

const WrapperFavorites = () => {
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    api.getDataByIds(api.getFavoritsIdList()).then((res: any) => {
      setMovieInfo(res);
    });
  }, []);

  return !movieInfo.length ? null : (
    <Container>
      <Title text={'Favorite movies'} />
      <Slider>
        {movieInfo.map((movie: any) => {
          return (
            <div className="slide" key={movie.id}>
              <SmallInfoCard id={movie.id} />
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default WrapperFavorites;
