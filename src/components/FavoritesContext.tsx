import { createContext, ReactNode, useState } from 'react';

import api from '../service/api';

export type FavoritesContextType = {
  addFavoriteMovie: (movieId: number) => void;
  removeFavoriteMovie: (movieId: number) => void;
  favoritesMoviesState: [];
};

type FavoritesContextProviderType = {
  children?: ReactNode;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  addFavoriteMovie: () => { },
  removeFavoriteMovie: () => { },
  favoritesMoviesState: []
});

export const FavoritesContextProvider = ({
  children
}: FavoritesContextProviderType) => {
  const [favoritesMoviesState, setFavoritesMoviesState] = useState(
    api.getFavoritsIdList()
  );

  const addFavoriteMovie = (movieId: number) => {
    api.setFavoritesId(movieId)
    setFavoritesMoviesState(api.getFavoritsIdList());
  };

  const removeFavoriteMovie = (movieId: number) => {
    api.deleteFavoritsId(movieId);
    setFavoritesMoviesState(api.getFavoritsIdList());
  }

  return (
    <FavoritesContext.Provider
      value={{ addFavoriteMovie, favoritesMoviesState, removeFavoriteMovie }}>
      {children}
    </FavoritesContext.Provider>
  );
};
