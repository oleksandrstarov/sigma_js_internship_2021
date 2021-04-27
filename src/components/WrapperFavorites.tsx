import { useState, useEffect, useContext } from 'react';
import { SettingsBarContext, SettingsBarContextType } from './SettingsBarContext';

import Title from './Title';
import Container from './Container';
import Slider from './Slider';
import SmallInfoCard from './SmallInfoCard';
import api from '../service/api';
import { FavoritesContext, FavoritesContextType } from './FavoritesContext';
import { ThemeContext, ThemeContextType } from './ThemeContext';

export type MovieId = {
  id: number;
};

const WrapperFavorites = () => {
  const { favoriteContext }: SettingsBarContextType = useContext(SettingsBarContext);
  const { theme }: ThemeContextType = useContext(ThemeContext);
  const { favoritesMoviesState }: FavoritesContextType = useContext(
    FavoritesContext
  );
  const [movieInfo, setMovieInfo] = useState<MovieId[]>([]);

  useEffect(() => {
    api.getDataByIds(favoritesMoviesState).then((res: any) => {
      setMovieInfo(res);
    });
  }, [favoritesMoviesState]);

  if (!movieInfo.length) {
    return null;
  }
  return (
    <>{favoriteContext ?
      <Container>
        <Title
          text={'Favorite movies'}
          className={`${theme ? '' : 'dark-theme'}`}
        />
        {movieInfo.length && (
          <Slider>
            {movieInfo.map(({ id }: MovieId) => {
              return (
                <div className="slide" key={id}>
                  <SmallInfoCard id={id} />
                </div>
              );
            })}
          </Slider>
        )}
      </Container>
      : null}</>
  );
};

export default WrapperFavorites;
