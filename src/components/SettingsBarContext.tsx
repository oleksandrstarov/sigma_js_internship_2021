import { createContext, ReactNode, useState } from 'react';
import { FeatureStatus } from '../models';

import api from '../service/api';

export type HistoryBarContextType = {
  handleSetBar: () => void,
  handleUpdateFavotites: () => void,
  handleUpdateHistory: () => void,
  historyBar: FeatureStatus,
  favoriteState: number,
  historyState: number,
}

export const HistoryBarContext = createContext<HistoryBarContextType>({
  handleSetBar: () => { },
  handleUpdateFavotites: () => { },
  handleUpdateHistory: () => { },
  historyBar: FeatureStatus.disabled,
  favoriteState: 0,
  historyState: 0,
});

type HistoryBarProviderType = {
  children?: ReactNode
}

export const HistoryBarProvider = ({ children }: HistoryBarProviderType) => {
  const [historyBar, setHistoryBar] = useState(api.getStore().historyBar);
  const [favoriteState, setFavoriteState] = useState(api.getFavoritsIdList().length);
  const [historyState, setHistoryState] = useState(api.getHistoryIdList().length);

  const handleSetBar = () => {
    setHistoryBar(api.switchHistoryBar());
  }

  const handleUpdateFavotites = () => {
    setFavoriteState(api.getFavoritsIdList().length);
  }

  const handleUpdateHistory = () => {
    setHistoryState(api.getHistoryIdList().length)
  }


  return (
    <HistoryBarContext.Provider value={{
      handleSetBar, handleUpdateFavotites, handleUpdateHistory,
      historyBar, favoriteState, historyState,
    }}>
      {children}
    </HistoryBarContext.Provider>
  )
}
