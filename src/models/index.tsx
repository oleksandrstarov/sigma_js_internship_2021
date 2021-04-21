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
export interface StarRatingProps {
  numberOfStars: number;
  colorFilled: string;
  colorUnfilled: string;
}

export enum Genres {
  Comedy = 'Comedy',
  Drama = 'Drama',
  Romance = 'Romance',
  Mystery = 'Mystery',
  Thriller = 'Thriller',
  Animation = 'Animation',
  Action = 'Action',
  Adventure = 'Adventure',
  Crime = 'Crime',
  Fantasy = 'Fantasy',
  ScienceFiction = 'Science Fiction',
  Horror = 'Horror',
  Family = 'Family'
}
