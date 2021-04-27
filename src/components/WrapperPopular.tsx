import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeContext';

import SmallInfoCard from './SmallInfoCard';
import Container from './Container';
import Slider from './Slider';
import Title from './Title';

import { Movie } from '../models';

type WrapperPopularPropsType = {
  movies: Movie[];
}

const WrapperPopular = ({ movies }: WrapperPopularPropsType) => {
  const { theme }: ThemeContextType = useContext(ThemeContext);

  return (
    <>
      <Container>
        <Title text={"Popular movies"} className={`${theme ? '' : 'dark-theme'}`} />
        {movies?.length && (<Slider>
          {movies.map(({ id }: Movie) => {
            return (
              <div className="slide" key={id}>
                <SmallInfoCard id={Number(id)} />
              </div>
            );
          })}
        </Slider>)}
      </Container>
    </>
  )
};

export default WrapperPopular;
