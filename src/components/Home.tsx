import { useEffect, useState } from 'react';

import WrapperFavorites from './WrapperFavorites';
import SmallInfoCard from './SmallInfoCard';
import MovieBanner from './MovieBanner';
import Container from './Container';
import Slider from './Slider';
import Title from './Title';
import { Movie } from '../models/index';

import api from 'src/service/api';

export type MoviesType = {
  vote_count: number;
  vote_average: number;
  original_title: string;
  poster_path: string;
  overview: string;
  title: string;
  id: number;
};

const Home = () => {
  const [movies, setMovies] = useState<[]>([]);
  const [history, setHistory] = useState<MoviesType[]>();
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    api.getPopularQueryList().then(res => {
      setMovies(res.slice(0, 10));
      setPopularMovies(res);
    });
    api.getDataByIds(api.getHistoryIdList()).then(res => {
      setHistory(res);
    });
  }, []);

  return (
    <>
      <MovieBanner popularMovies={popularMovies} />
      <div className="wrapper-space">
        <WrapperFavorites />
      </div>
      <Container>
        {history && (
          <div className="wrapper-space">
            {history.length ? (
              <>
                <Title text={'Last seens'} />
                <Slider>
                  {history.map((movie: MoviesType) => {
                    return (
                      <div className="slide" key={movie.poster_path}>
                        <SmallInfoCard id={movie.id} />
                      </div>
                    );
                  })}
                </Slider>{' '}
              </>
            ) : null}
          </div>
        )}
        <div className="wrapper-space">
          <Title text={'Popular movies'} />
          {movies.length ? (
            <Slider>
              {movies.map((movie: MoviesType) => {
                return (
                  <div className="slide" key={movie.poster_path}>
                    <SmallInfoCard id={movie.id} />
                  </div>
                );
              })}
            </Slider>
          ) : null}
        </div>
      </Container>
    </>
  );
};

export default Home;
