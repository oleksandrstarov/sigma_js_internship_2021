export interface Movie {
  overview: string;
  title: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
  id: number | string;
}

export interface MovieCard {
  id: number;
}

export interface PopularMovieProps {
  movie: Movie;
}

export enum Theme {
  dark,
  light
}

export enum FeatureStatus {
  disabled,
  enabled
}

export interface StarRatingProps {
  numberOfStars: number;
  colorFilled: string;
  colorUnfilled: string;
}

