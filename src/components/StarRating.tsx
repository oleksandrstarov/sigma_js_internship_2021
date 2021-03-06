import { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';

import ratingData from '../service/rating';
import { FavoritesContext, FavoritesContextType } from './FavoritesContext';
import { SettingsBarContext, SettingsBarContextType } from './SettingsBarContext';

import '../styles/StarRating.scss';

type StarRatingProps = {
  numberOfStars: number;
  colorFilled: string;
  colorUnfilled: string;
  movieId: number;
  voteAverage: number;
};

const MAX_RATE = 5;

const StarRating: React.FC<StarRatingProps> = ({
  numberOfStars,
  colorFilled,
  colorUnfilled,
  movieId,
  voteAverage
}) => {
  const [starRating, setStarRating] = useState<number>(getMovieRatingValue());
  const { handleFavoriteContext }: SettingsBarContextType = useContext(SettingsBarContext);

  const [iconHover, setIconHover] = useState<number>(0);
  const {
    addFavoriteMovie,
  }: FavoritesContextType = useContext(FavoritesContext);

  function getMovieRatingValue(): number {
    if (!ratingData.getMovieRatingFromStorage().length)
      return Math.round(voteAverage / 2);
    if (!ratingData.getMovieRatingById(movieId))
      return Math.round(voteAverage / 2);
    return ratingData.getMovieRatingById(movieId).movieRate;
  }

  const handleMovieRatingState = (iconRatingValue: number) => {
    ratingData.setMovieRatingObj({
      id: movieId,
      movieRate: iconRatingValue
    });
    if (iconRatingValue === MAX_RATE) {
      addFavoriteMovie(movieId);
      handleFavoriteContext()
    }
    setStarRating(getMovieRatingValue());
  };

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
              onClick={() => handleMovieRatingState(iconRatingValue)}
            />
            <FaStar
              className="star-rating-icon"
              color={
                iconRatingValue <= (iconHover || starRating)
                  ? colorFilled
                  : colorUnfilled
              }
              size={22}
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
