import { useState } from 'react';

import api from '../service/api';

import '../styles/FavoritesBtn.scss';

type FavoritesBtnProps = {
  movieId: number;
  isMovieIdInFavorites?: boolean;
};

const FavoritesBtn: React.FC<FavoritesBtnProps> = ({
  movieId,
  isMovieIdInFavorites
}) => {
  const [isFavorite, setIsFavorite] = useState(api.isIdInFavorites(movieId));

  const heartUnfilledIcon = '/images/favoriteBtn/heartFilled.svg';
  const heartFilledIcon = '/images/favoriteBtn/heartUnfilled.svg';

  const handleSwitchFavoriteState = (): void => {
    isFavorite ? api.deleteFavoritsId(movieId) : api.setFavoritesId(movieId);
    setIsFavorite(!isFavorite);
  };

  return (
    <button className="favorite-btn" onClick={handleSwitchFavoriteState}>
      {isMovieIdInFavorites ? (
        <img
          className="favorite-icon"
          src={isMovieIdInFavorites ? heartUnfilledIcon : heartFilledIcon}
          alt="favorite icon"
        />
      ) : (
        <img
          className="favorite-icon"
          src={isFavorite ? heartUnfilledIcon : heartFilledIcon}
          alt="favorite icon"
        />
      )}
    </button>
  );
};

export default FavoritesBtn;
