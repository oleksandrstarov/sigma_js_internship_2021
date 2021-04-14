import { useState } from 'react';

import api from '../service/api';

import '../styles/FavoritesBtn.scss';

type FavoritesBtnProps = {
  movieId: number;
};

const FavoritesBtn: React.FC<FavoritesBtnProps> = ({ movieId }) => {
  const [isFavorite, setisFavorite] = useState(api.isIdInFavorites(movieId));

  const heartUnfilledIcon = '/images/favoriteBtn/heartFilled.svg';
  const heartFilledIcon = '/images/favoriteBtn/heartUnfilled.svg';

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    isFavorite ? api.setFavoritesId(movieId) : api.deleteFavoritsId(movieId);
    setisFavorite(api.isIdInFavorites(movieId));
  };

  return (
    <a href="#!" className="favorite-btn" onClick={handleClick}>
      <img
        className="favorite-icon"
        src={isFavorite ? heartFilledIcon : heartUnfilledIcon}
        alt="favorite icon"
      />
    </a>
  );
};

export default FavoritesBtn;
