import { Genres } from '../models';

export const API_KEY = 'api_key=157c2ade7d0b335008ae899a157d8967';
export const API_URL = 'https://api.themoviedb.org/3/';
export const API_IMG_URL = 'https://image.tmdb.org/t/p/';
export const API_DATE_QUERY = 'primary_release_date.lte=';
export const API_GENRE_ID = {
  [Genres.Comedy]: 35,
  [Genres.Drama]: 18,
  [Genres.Romance]: 10749,
  [Genres.Mystery]: 9648,
  [Genres.Thriller]: 53,
  [Genres.Animation]: 16,
  [Genres.Action]: 28,
  [Genres.Adventure]: 12,
  [Genres.Crime]: 80,
  [Genres.Fantasy]: 14,
  [Genres.ScienceFiction]: 28,
  [Genres.Horror]: 27,
  [Genres.Family]: 10751,
  [Genres.Western]: 37
};
