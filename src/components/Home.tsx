import { useEffect, useState } from 'react';

import WrapperFavorites from './WrapperFavorites';
import SmallInfoCard from './SmallInfoCard';
import MovieBanner from './MovieBanner';
import Container from './Container';
import Slider from './Slider';
import Title from './Title';

import api from 'src/service/api';

export type MoviesType = {
  vote_count: number;
  vote_average: number;
  original_title: string;
  poster_path: string;
  overview: string;
  title: string;
  id: number;
}

const Home = () => {
  const [movies, setMovies] = useState<[]>([]);
  const [history, setHistory] = useState<MoviesType[]>();

  useEffect(() => {
    api.getPopularQueryList().then(res => setMovies(res.slice(0, 10)));
    api.getDataByIds(api.getHistoryIdList()).then((res) => { setHistory(res); console.log(res) });
  }, []);

  return (
    <>
      <MovieBanner />
      <div className="wrapper-space">
        <WrapperFavorites />
      </div>
      <Container>
        {history && <div className="wrapper-space">
          {history.length ? <Title text={'Last seens'} /> : null}
          {history.length ? (<Slider>
            {history.map((movie: MoviesType) => {
              return (
                <div className="slide" key={movie.poster_path}>
                  <SmallInfoCard id={movie.id} />
                </div>
              );
            })}
          </Slider>) : null}
        </div>}
        <div className="wrapper-space">
          <Title text={'Popular movies'} />
          {movies.length ? (<Slider>
            {movies.map((movie: MoviesType) => {
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
