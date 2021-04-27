import { useState, useEffect, useContext } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeContext';

import SmallInfoCard from './SmallInfoCard';
import Container from './Container';
import Slider from './Slider';
import Title from './Title';

import api from '../service/api';
import { MovieId } from '../components/WrapperFavorites';

const WrapperPopular = () => {
  const { theme }: ThemeContextType = useContext(ThemeContext);
  const [movies, setMovies] = useState<Array<MovieId>>([]);

  useEffect(() => {
    api.getPopularQueryList().then(res => setMovies(res.slice(0, 10)));
  }, []);

  return (
    <>
      <Container>
        <Title text={"Popular movies"} className={`${theme ? '' : 'dark-theme'}`} />
        {movies?.length && (<Slider>
          {movies.map(({ id }: MovieId) => {
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

export default WrapperPopular;
