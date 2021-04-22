import { createContext, ReactNode, useState } from 'react';

export type MovieRatingContextType = {
  handleIconState: (value: boolean) => void;
  isMovieIdInFavorites: boolean;
};

type MovieRatingContextProviderType = {
  children?: ReactNode;
};

export const MovieRatingContext = createContext<MovieRatingContextType>({
  handleIconState: () => {},
  isMovieIdInFavorites: false
});

export const MovieRatingProvider = ({
  children
}: MovieRatingContextProviderType) => {
  const [isMovieIdInFavorites, setIsMovieIdInFavorites] = useState(false);

  const handleIconState = (value: boolean) => {
    setIsMovieIdInFavorites(value);
    console.log(isMovieIdInFavorites + " Context");
  };
  return (
    <MovieRatingContext.Provider
      value={{ handleIconState, isMovieIdInFavorites }}>
      {children}
    </MovieRatingContext.Provider>
  );
};
