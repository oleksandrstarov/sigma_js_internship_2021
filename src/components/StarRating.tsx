import { useContext, useState } from 'react';

import { FaStar } from 'react-icons/fa';
import api from '../service/api';

import '../styles/StarRating.scss';
import { FavoritesContext, FavoritesContextType } from './FavoritesContext';
interface StarRatingProps {
  numberOfStars: number;
  colorFilled: string;
  colorUnfilled: string;
  voteAverage: number;
  movieId: number
}

const StarRating: React.FC<StarRatingProps> = ({
  numberOfStars,
  colorFilled,
  colorUnfilled,
  voteAverage,
  movieId, 
}) => {
  const [starRating, setStarRating] = useState<number>(Math.round(voteAverage / 2));
  const [iconHover, setIconHover] = useState<number>(0);
  const {
    addFavoriteMovie,
    removeFavoriteMovie
  }: FavoritesContextType = useContext(FavoritesContext);

  const handleStarState = (iconRatingValue: number): void => {
    if (iconRatingValue === 5) {
        addFavoriteMovie(movieId);
      } else if (api.isIdInFavorites(movieId)) {
        removeFavoriteMovie(movieId);
      }
    setStarRating(iconRatingValue);
  }


  return (
    <div className="star-rating">
      {[...Array(numberOfStars)].map((_, index) => {
        const iconRatingValue = index + 1;
        return (
          <label key={index}>
            <input
              className="input-radio"
              type="radio"
              name="rating"
              onClick={() => handleStarState(iconRatingValue)}
            />
            <FaStar
              className="star-rating-icon"
              color={
                iconRatingValue <= (iconHover || starRating) ? colorFilled : colorUnfilled
              }
              size={30}
              onMouseEnter={() => setIconHover(iconRatingValue)}
              onMouseLeave={() => setIconHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
