import { createContext, ReactNode, useState } from 'react';

export type MovieRatingContextType = {
  handleFavoriteIconState: (value: boolean) => void;
  isFavoritesIconChanged: boolean;
};

type MovieRatingContextProviderType = {
  children?: ReactNode;
};

export const MovieRatingContext = createContext<MovieRatingContextType>({
  handleFavoriteIconState: () => {},
  isFavoritesIconChanged: false
});

export const MovieRatingProvider = ({
  children
}: MovieRatingContextProviderType) => {
  const [isFavoritesIconChanged, setIsFavoritesIconChanged] = useState(false);

  const handleFavoriteIconState = (value: boolean) => {
    setIsFavoritesIconChanged(value);
  };

  return (
    <MovieRatingContext.Provider
      value={{ handleFavoriteIconState, isFavoritesIconChanged }}>
      {children}
    </MovieRatingContext.Provider>
  );
};
