import { createContext, ReactNode, useState } from 'react';

import api from '../service/api';

export type FavoritesContextType = {
  handleFavoritesState: (movieId: number) => void;
  removeMovie: (movieId: number) => void
  favoritesState: [];
};

type FavoritesContextProviderType = {
  children?: ReactNode;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  handleFavoritesState: () => {},
  removeMovie: () => {},
  favoritesState: []
});

export const FavoritesContextProvider = ({
  children
}: FavoritesContextProviderType) => {
  const [favoritesState, setFavoritesState] = useState(api.getFavoritsIdList());

  const handleFavoritesState = (movieId: number) => { // add movieId to favorites
    // setFavoritesState(api.getFavoritsIdList());
    api.setFavoritesId(movieId)
    setFavoritesState(api.getFavoritsIdList());
  };
  
  const removeMovie = (movieId: number) => {
    api.deleteFavoritsId(movieId);
    setFavoritesState(api.getFavoritsIdList());
  }


  // useEffect(() => {
  //   handleFavoritesState();
  // }, []);
  return (
    <FavoritesContext.Provider value={{ handleFavoritesState, favoritesState, removeMovie }}>
      {children}
    </FavoritesContext.Provider>
  );
};
