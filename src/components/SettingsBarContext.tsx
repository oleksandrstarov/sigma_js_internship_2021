import { createContext, ReactNode, useState } from 'react';
import { FeatureStatus } from '../models';

import api from '../service/api';

export type HistoryBarContextType = {
  handleSetBar: () => void,
  handleUpdateFavotites: () => void,
  handleUpdateHistory: () => void,
  historyBar: FeatureStatus,
  favoriteContextState: number,
  historyContextState: number,
}

export const HistoryBarContext = createContext<HistoryBarContextType>({
  handleSetBar: () => { },
  handleUpdateFavotites: () => { },
  handleUpdateHistory: () => { },
  historyBar: FeatureStatus.disabled,
  favoriteContextState: 0,
  historyContextState: 0,
});

type HistoryBarProviderType = {
  children?: ReactNode
}

export const HistoryBarProvider = ({ children }: HistoryBarProviderType) => {
  const [historyBar, setHistoryBar] = useState(api.getStore().historyBar);
  const [favoriteContextState, setFavoriteContextState] = useState(api.getFavoritsIdList().length);
  const [historyContextState, setHistoryContextState] = useState(api.getHistoryIdList().length);

  const handleSetBar = () => {
    setHistoryBar(api.switchHistoryBar());
  }

  const handleUpdateFavotites = () => {
    setFavoriteContextState(api.getFavoritsIdList().length);
  }

  const handleUpdateHistory = () => {
    setHistoryContextState(api.getHistoryIdList().length)
  }


  return (
    <HistoryBarContext.Provider value={{
      handleSetBar, handleUpdateFavotites, handleUpdateHistory,
      historyBar, favoriteContextState, historyContextState,
    }}>
      {children}
    </HistoryBarContext.Provider>
  )
}
