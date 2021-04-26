import { createContext, ReactNode, useState } from 'react';

export type MovieRatingContextType = {
  handleIconState: (value: boolean) => void;
  isFavoritesIconChanged: boolean;
};

type MovieRatingContextProviderType = {
  children?: ReactNode;
};

export const MovieRatingContext = createContext<MovieRatingContextType>({
  handleIconState: () => {},
  isFavoritesIconChanged: false
});

export const MovieRatingProvider = ({
  children
}: MovieRatingContextProviderType) => {
  const [isFavoritesIconChanged, setIsFavoritesIconChanged] = useState(false);

  const handleIconState = (value: boolean) => {
    setIsFavoritesIconChanged(value);
  };
  return (
    <MovieRatingContext.Provider
      value={{ handleIconState, isFavoritesIconChanged }}>
      {children}
    </MovieRatingContext.Provider>
  );
};
