import { useContext, useState } from 'react';
import { SettingsBarContext, SettingsBarContextType } from './SettingsBarContext';

import api from '../service/api';

import { FavoritesContext, FavoritesContextType } from './FavoritesContext';

import '../styles/FavoritesBtn.scss';

type FavoritesBtnProps = {
  movieId: number;
};

const FavoritesBtn: React.FC<FavoritesBtnProps> = ({ movieId }) => {
  const { handleFavoriteContext }: SettingsBarContextType = useContext(SettingsBarContext);


  const {
    addFavoriteMovie,
    removeFavoriteMovie
  }: FavoritesContextType = useContext(FavoritesContext);

  const [isMovieIdInFavorites, setIsMovieIdInFavorites] = useState(
    api.isIdInFavorites(movieId)
  );

  const heartUnfilledIcon = '/images/favoriteBtn/heartFilled.svg';
  const heartFilledIcon = '/images/favoriteBtn/heartUnfilled.svg';

  const handleSwitchFavoriteState = (): void => {
    isMovieIdInFavorites
      ? removeFavoriteMovie(movieId)
      : addFavoriteMovie(movieId);
    setIsMovieIdInFavorites(!isMovieIdInFavorites);
    handleFavoriteContext();
  };

  return (
    <button className="favorite-btn" onClick={handleSwitchFavoriteState}>
      <img
        className="favorite-icon"
        src={
          isMovieIdInFavorites
            ? heartUnfilledIcon
            : heartFilledIcon
        }
        alt="favorite icon"
      />
    </button>
  );
};

export default FavoritesBtn;
