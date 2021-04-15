import { useState } from 'react';

import { FaStar } from 'react-icons/fa';
import { StarRatingProps } from '../models/index';

import '../styles/StarRating.scss';

const StarRating: React.FC<StarRatingProps> = ({
  numberOfStars,
  colorFilled,
  colorUnfilled
}) => {
  const [starRating, setStarRating] = useState<number>(0);
  const [iconHover, setIconHover] = useState<number>(0);

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
              value={iconRatingValue}
              onClick={() => {
                setStarRating(iconRatingValue);
              }}
            />
            <FaStar
              className="star-rating-icon"
              color={
                iconRatingValue <= (iconHover || starRating) ? colorFilled : colorUnfilled
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
