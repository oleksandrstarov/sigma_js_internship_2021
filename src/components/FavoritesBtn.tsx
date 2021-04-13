import { useState } from 'react';

import { FavoriteMovie } from '../models/index';
import api from '../service/api';

import '../styles/FavoritesBtn.scss';

const FavoritesBtn: React.FC<FavoriteMovie> = ({ movieId }) => {
  const [icon, setIcon] = useState(api.isIdInFavorites(movieId));

  const heartUnfilledIcon = '/images/favoriteBtn/heartFilled.svg';
  const heartFilledIcon = '/images/favoriteBtn/heartUnfilled.svg';

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    api.isIdInFavorites(movieId)
      ? api.setFavoritesId(movieId)
      : api.deleteFavoritsId(movieId);
    setIcon(api.isIdInFavorites(movieId));
  };

  return (
    <a href="#!" className="favorite-btn" onClick={handleClick}>
      <img
        className="favorite-icon"
        src={icon ? heartFilledIcon : heartUnfilledIcon}
        alt="favorite icon"
      />
    </a>
  );
};

export default FavoritesBtn;
