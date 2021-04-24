import { useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa';

import api from 'src/service/api';
import ratingData from '../service/rating';

import '../styles/StarRating.scss';
import {
  MovieRatingContext,
  MovieRatingContextType
} from './MovieRatingContext';

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
  console.log(starRating);
  const [iconHover, setIconHover] = useState<number>(0);

  const { handleIconState }: MovieRatingContextType = useContext(
    MovieRatingContext
  );

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
      api.setFavoritesId(movieId);
      handleIconState(true);
    }
    setStarRating(iconRatingValue);
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
