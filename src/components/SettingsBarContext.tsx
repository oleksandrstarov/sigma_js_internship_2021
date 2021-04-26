import { createContext, ReactNode, useState } from 'react';
import { FeatureStatus } from '../models';

import api from '../service/api';

export type SettingsBarContextType = {
  handleSetBar: () => void,
  handleUpdateFavotites: () => void,
  handleUpdateHistory: () => void,
  historyBarContext: FeatureStatus,
  favoriteContext: number,
  historyContext: number,
}
export const SettingsBarContext = createContext<SettingsBarContextType>({
  handleSetBar: () => { },
  handleUpdateFavotites: () => { },
  handleUpdateHistory: () => { },
  historyBarContext: FeatureStatus.disabled,
  favoriteContext: 0,
  historyContext: 0,
});

type SettingsBarContextProviderType = {
  children?: ReactNode
}

export const SettingsBarContextProvider = ({ children }: SettingsBarContextProviderType) => {


  const handleSetBar = () => {
    setHistoryBarContext(api.switchHistoryBar());
  }

  const handleUpdateFavotites = () => {
    setFavoriteContext(api.getFavoritsIdList().length);
  }

  const handleUpdateHistory = () => {
    setHistoryContext(api.getHistoryIdList().length)
  }

  return (
    <SettingsBarContext.Provider value={{
      handleSetBar, handleUpdateFavotites, handleUpdateHistory,
      historyBarContext, favoriteContext, historyContext,
    }}>
      {children}
    </SettingsBarContext.Provider>
  )
}
