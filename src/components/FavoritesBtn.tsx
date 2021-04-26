import { useContext, useState } from 'react';

import api from '../service/api';

import '../styles/FavoritesBtn.scss';

import {
  MovieRatingContext,
  MovieRatingContextType
} from './MovieRatingContext';

type FavoritesBtnProps = {
  movieId: number;
};

const FavoritesBtn: React.FC<FavoritesBtnProps> = ({ movieId }) => {
  const {
    isFavoritesIconChanged,
    handleIconState
  }: MovieRatingContextType = useContext(MovieRatingContext);

  const [isMovieIdInFavorites, setIsMovieIdInFavorites] = useState(
    api.isIdInFavorites(movieId)
  );

  const heartUnfilledIcon = '/images/favoriteBtn/heartFilled.svg';
  const heartFilledIcon = '/images/favoriteBtn/heartUnfilled.svg';

  const handleSwitchFavoriteState = (): void => {
    if (isMovieIdInFavorites) {
      api.deleteFavoritsId(movieId);
      handleIconState(false);
    } else {
      api.setFavoritesId(movieId);
      handleIconState(true);
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
