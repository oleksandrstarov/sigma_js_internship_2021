export interface Movie {
  overview: string;
  title: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
  id: number | string;
}

export interface PopularMovieProps {
  movie: Movie;
}

export enum Theme {
  dark,
  light,
}

export interface FavoriteMovie {
  movieId: number;
}
