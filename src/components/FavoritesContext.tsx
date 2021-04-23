import { Children, createContext, ReactNode } from 'react';

//import api from "../service/api"

export type FavoritesContextType = {
  handleFavoritesState: () => number | string;
};

type FavoritesContextProviderType = {
  children?: ReactNode;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  handleFavoritesState: () => {}
});

export const FavoritesContextProvider = ({
  children
}: FavoritesContextProviderType) => {
  const handleFavoritesState = (movieId: number | string) => {
    console.log(movieId);
  };
  return (
    <FavoritesContext.Provider value={{ handleFavoritesState }}>
      {children}
    </FavoritesContext.Provider>
  );
};
