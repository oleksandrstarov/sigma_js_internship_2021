import { createContext, ReactNode, useState } from 'react';

import api from '../service/api';

export type FavoritesContextType = {
  handleFavoritesState: () => void;
  favoritesState: [];
};

type FavoritesContextProviderType = {
  children?: ReactNode;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  handleFavoritesState: () => {},
  favoritesState: []
});

export const FavoritesContextProvider = ({
  children
}: FavoritesContextProviderType) => {
  const [favoritesState, setFavoritesState] = useState(
    api.getFavoritsIdList()
  );
  console.log(api.getFavoritsIdList());

  const handleFavoritesState = () => {
   // setFavoritesState(api.getFavoritsIdList());
    setFavoritesState(api.getFavoritsIdList());
  };
  return (
    <FavoritesContext.Provider value={{ handleFavoritesState, favoritesState }}>
      {children}
    </FavoritesContext.Provider>
  );
};
