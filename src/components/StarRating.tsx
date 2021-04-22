import { useState } from 'react';

import { FaStar } from 'react-icons/fa';

import { ThemeContext, ThemeContextType } from './ThemeContext'
import { useContext } from 'react';

import '../styles/StarRating.scss';

interface StarRatingProps {
  numberOfStars: number;
  colorFilled: string;
  colorUnfilled: string;
  voteAverage: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  numberOfStars,
  colorFilled,
  colorUnfilled,
  voteAverage
}) => {
  const [starRating, setStarRating] = useState<number>(Math.round(voteAverage / 2));
  const [iconHover, setIconHover] = useState<number>(0);

  const { theme }: ThemeContextType = useContext(ThemeContext);

  if (!theme) {
    colorUnfilled = '#ffffff';
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
