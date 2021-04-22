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
    isMovieIdInFavorites,
    handleIconState
  }: MovieRatingContextType = useContext(MovieRatingContext);
  console.log(isMovieIdInFavorites + " Favorites");
  const [isFavorite, setIsFavorite] = useState(api.isIdInFavorites(movieId));
 
  const heartUnfilledIcon = '/images/favoriteBtn/heartFilled.svg';
  const heartFilledIcon = '/images/favoriteBtn/heartUnfilled.svg';

  const handleSwitchFavoriteState = (): void => {
    if (isFavorite) {
      api.deleteFavoritsId(movieId);
      handleIconState(false);
    } else {
      api.setFavoritesId(movieId);
      handleIconState(true);
    }
    // isFavorite ? api.deleteFavoritsId(movieId) : api.setFavoritesId(movieId);
    setIsFavorite(!isFavorite);
    //setHandle(!handle);
  };

  return (
    <button className="favorite-btn" onClick={handleSwitchFavoriteState}>
      <img
        className="favorite-icon"
        src={
          isFavorite || isMovieIdInFavorites
            ? heartUnfilledIcon
            : heartFilledIcon
        }
        alt="favorite icon"
      />
    </button>
  );
};

export default FavoritesBtn;
