import { useContext, useState } from 'react';

import api from '../service/api';

import '../styles/FavoritesBtn.scss';
import { FavoritesContext, FavoritesContextType } from './FavoritesContext';

type FavoritesBtnProps = {
  movieId: number;
};

const FavoritesBtn: React.FC<FavoritesBtnProps> = ({ movieId }) => {
  const {
    addFavoriteMovie,
    removeFavoriteMovie
  }: FavoritesContextType = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(api.isIdInFavorites(movieId));

  const heartUnfilledIcon = '/images/favoriteBtn/heartFilled.svg';
  const heartFilledIcon = '/images/favoriteBtn/heartUnfilled.svg';

  const handleSwitchFavoriteState = (): void => {
    if (isFavorite) {
      api.deleteFavoritsId(movieId);
      removeFavoriteMovie(movieId);
    } else {
       addFavoriteMovie(movieId);
       console.log(movieId)
    }
    // !isFavorite ? api.setFavoritesId(movieId) : api.deleteFavoritsId(movieId);
    setIsFavorite(api.isIdInFavorites(movieId));
  };

  return (
    <button className="favorite-btn" onClick={handleSwitchFavoriteState}>
      <img
        className="favorite-icon"
        src={!isFavorite ? heartFilledIcon : heartUnfilledIcon}
        alt="favorite icon"
      />
    </button>
  );
};

export default FavoritesBtn;
