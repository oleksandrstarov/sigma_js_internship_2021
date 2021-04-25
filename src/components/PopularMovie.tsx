import { Link } from 'react-router-dom';

import useDeviceDetect from '../hooks/useDeviceDetect';
import { PopularMovieProps } from '../models/index';
import { API_IMG_URL } from '../constants/api';

import '../styles/MovieBanner.scss';
import StarRating from './StarRating';

const PopularMovie: React.FC<PopularMovieProps> = ({ movie }) => {
  const mobile = useDeviceDetect();
  const {
    overview,
    title,
    poster_path,
    vote_average,
    backdrop_path,
    id
  } = movie;

  const btnIcon = '/images/btn-icon.png';
  const mobileImgPath = `${API_IMG_URL}original/${poster_path}`;
  const desktopImgPath = `${API_IMG_URL}original/${backdrop_path}`;

  return (
    <div className="movie-banner-body">
      <div className="movie-image-container">
        <Link className="movie-read-more" to={`/movie-details/${id}`}>
          <img
            src={mobile ? mobileImgPath : desktopImgPath}
            className="movie-banner-image"
            alt={movie.title}
          />
        </Link>
        <div className="movie-image-overlay"></div>
      </div>
      <div className="movie-banner-details">
        <div className="flex-helper">
          <h3 className="movie-title">{title}</h3>
        </div>
        <p
          className={`movie-description ${
            window.innerWidth < 767 ? 'text-overlow' : ''
          }`}>
          {overview.length >= 250 ? (
            <span>
              {overview.slice(0, 250)}
              <Link className="movie-read-more" to={`/movie-details/${id}`}>
                <span>...Read more</span>
              </Link>
            </span>
          ) : (
            overview
          )}
        </p>
        <div className="movie-rating-container">
          <p className="movie-rating-box">
            <span className="movie-rating">IMDB</span>
            <span className="movie-rating movie-rating-number">
              {vote_average}
            </span>
          </p>
          <div className="movie-rating-stars">
            <StarRating
              numberOfStars={5}
              colorFilled={'#ff636d'}
              colorUnfilled={'#c4c4c4'}
              voteAverage={vote_average}
            />
          </div>
        </div>
        <Link to={{ pathname: `movie-details/${id}` }} className="movie-btn">
          <span className="movie-btn-title">View details</span>
          <img src={btnIcon} alt="btn icon" className="movie-btn-icon" />
        </Link>
      </div>
    </div>
  );
};

export default PopularMovie;
