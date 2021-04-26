import { useContext, useState } from 'react';

import api from '../service/api';

import { FavoritesContext, FavoritesContextType } from './FavoritesContext';

import {
  MovieRatingContext,
  MovieRatingContextType
} from './MovieRatingContext';

import '../styles/FavoritesBtn.scss';

type FavoritesBtnProps = {
  movieId: number;
};

const FavoritesBtn: React.FC<FavoritesBtnProps> = ({ movieId }) => {
  const {
    addFavoriteMovie,
    removeFavoriteMovie
  }: FavoritesContextType = useContext(FavoritesContext);
  const {
    isFavoritesIconChanged,
    handleFavoriteIconState
  }: MovieRatingContextType = useContext(MovieRatingContext);

  const [isMovieIdInFavorites, setIsMovieIdInFavorites] = useState(
    api.isIdInFavorites(movieId)
  );

  const heartUnfilledIcon = '/images/favoriteBtn/heartFilled.svg';
  const heartFilledIcon = '/images/favoriteBtn/heartUnfilled.svg';

  const handleSwitchFavoriteState = (): void => {
    if (isMovieIdInFavorites) {
      removeFavoriteMovie(movieId);
      handleFavoriteIconState(false);
    } else {
      addFavoriteMovie(movieId);
      handleFavoriteIconState(true);
    }
    setIsMovieIdInFavorites(!isMovieIdInFavorites);
  };

  return (
    <button className="favorite-btn" onClick={handleSwitchFavoriteState}>
      <img
        className="favorite-icon"
        src={
          isMovieIdInFavorites || isFavoritesIconChanged
            ? heartUnfilledIcon
            : heartFilledIcon
        }
        alt="favorite icon"
      />
    </button>
  );
};

export default FavoritesBtn;
