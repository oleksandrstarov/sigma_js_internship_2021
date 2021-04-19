import { useEffect, useState } from 'react';

import WrapperFavorites from './WrapperFavorites';
import SmallInfoCard from './SmallInfoCard';
import MovieBanner from './MovieBanner';
import Container from './Container';
import Slider from './Slider';
import Title from './Title';

import api from 'src/service/api';

const Home = () => {
  const [movies, setMovies] = useState<[]>([]);
  const [history, setHistry] = useState<{}[]>([]);

  useEffect(() => {
    api.getPopularQueryList().then(results => setMovies(results.slice(0, 10)));
  }, []);

  useEffect(() => {
    api.getDataByIds(api.getHistoryIdList()).then(results => setHistry(results));
  }, []);
  return (
    <>
      <MovieBanner />
      <div className="wrapper-space">
        <WrapperFavorites />
      </div>

      <Container>
        <div className="wrapper-space">
          {history.length ? <Title text={'Last seens'} /> : null}
          {history.length ? (<Slider>
            {history.map((movie: any) => {
              return (
                <div className="slide" key={movie.poster_path}>
                  <SmallInfoCard id={movie.id} />
                </div>
              );
            })}
          </Slider>) : null}
        </div>
        <div className="wrapper-space">
          <Title text={'Popular movies'} />
          {movies.length ? (<Slider>
            {movies.map((movie: any) => {
              return (
                <div className="slide" key={movie.poster_path}>
                  <SmallInfoCard id={movie.id} />
                </div>
              );
            })}
          </Slider>) : null}
        </div>
      </Container>
    </>
  );

};

export default Home;
