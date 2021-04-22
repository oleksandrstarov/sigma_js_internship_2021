import { createContext, ReactNode, useState } from 'react';

import { Theme } from '../models';

import api from '../service/api';

export type ThemeContextType = {
  handleTheme: () => void,
  theme: Theme
}

export const ThemeContext = createContext<ThemeContextType>({
  handleTheme: () => { },
  theme: Theme.light
});

type ThemeContextProviderType = {
  children?: ReactNode
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderType) => {
  const [theme, setTheme] = useState(api.getStore().theme);

  const handleTheme = () => {
    setTheme(api.switchTheme());
  }

  return (
    <ThemeContext.Provider value={{ handleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}
