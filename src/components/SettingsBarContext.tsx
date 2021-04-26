import { createContext, ReactNode, useState } from 'react';
import { FeatureStatus } from '../models';

import api from '../service/api';

export type SettingsBarContextType = {
  handleHistoryBarContext: () => void,
  handleFavoriteContext: () => void,
  handleHistoryContext: () => void,
  historyBarContext: FeatureStatus,
  favoriteContext: number,
  historyContext: number,
}
export const SettingsBarContext = createContext<SettingsBarContextType>({
  handleHistoryBarContext: () => { },
  handleFavoriteContext: () => { },
  handleHistoryContext: () => { },
  historyBarContext: FeatureStatus.disabled,
  favoriteContext: 0,
  historyContext: 0,
});

type SettingsBarContextProviderType = {
  children?: ReactNode
}

export const SettingsBarContextProvider = ({ children }: SettingsBarContextProviderType) => {
  const [historyBarContext, setHistoryBarContext] = useState(api.getStore().historyBar);
  const [favoriteContext, setFavoriteContext] = useState(api.getFavoritsIdList().length);
  const [historyContext, setHistoryContext] = useState(api.getHistoryIdList().length);

  const handleHistoryBarContext = () => {
    setHistoryBarContext(api.switchHistoryBar());
  }

  const handleFavoriteContext = () => {
    setFavoriteContext(api.getFavoritsIdList().length);
  }

  const handleHistoryContext = () => {
    setHistoryContext(api.getHistoryIdList().length)
  }

  return (
    <SettingsBarContext.Provider value={{
      handleHistoryBarContext, handleFavoriteContext, handleHistoryContext,
      historyBarContext, favoriteContext, historyContext,
    }}>
      {children}
    </SettingsBarContext.Provider>
  )
}
