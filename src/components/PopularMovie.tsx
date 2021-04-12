import { Link } from 'react-router-dom';

import useDeviceDetect from '../hooks/useDeviceDetect';
import { PopularMovieProps } from '../models/index';
import { API_IMG_URL } from '../constants/api';

import '../styles/MovieBanner.scss';

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
  const starRaitingIcon = '/images/star.svg';
  const mobileImgPath = `${API_IMG_URL}original/${poster_path}`;
  const desktopImgPath = `${API_IMG_URL}original/${backdrop_path}`;
  const starRaitingArr: string[] = [
    starRaitingIcon,
    starRaitingIcon,
    starRaitingIcon,
    starRaitingIcon,
    starRaitingIcon
  ];

  return (
    <div className="movie-banner-body">
      <div className="movie-image-container">
        <img
          src={mobile ? mobileImgPath : desktopImgPath}
          className="movie-banner-image"
          alt={movie.title}
        />
        <div className="movie-image-overlay"></div>
      </div>
      <div className="movie-banner-details">
        <h3 className="movie-title">{title}</h3>
        <p
          className={`movie-description ${
            window.innerWidth < 767 ? 'text-overlow' : ''
          }`}>
          {overview.length >= 250 ? (
            <p>
              {overview.slice(0, 250)}
              <Link className="movie-read-more" to={`/movie-details/:${id} `}>
                <span>...Read more</span>
              </Link>
            </p>
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
            {starRaitingArr.map((icon, index) => (
              <img src={icon} key={index} alt="icon star" />
            ))}
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
