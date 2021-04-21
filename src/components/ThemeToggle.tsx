import { useContext } from 'react';

import { ThemeContext, ThemeContextType } from './ThemeContext';

import { Theme } from '../models';

import '../styles/ThemeToggle.scss';

const ThemeImage = {
  [Theme.dark]: '/images/moon.svg',
  [Theme.light]: '/images/sun.svg'
};

const ThemeToggler = () => {
  const { handleTheme, theme }: ThemeContextType = useContext(ThemeContext)

  return (
    <>
      <input
        checked={!!theme}
        onChange={() => handleTheme()}
        className="switch-checkbox"
        id="switch-new"
        type="checkbox"
      />
      <label className={`switch-label ${Theme[theme]}`} htmlFor="switch-new">
        <img src={ThemeImage[theme]} alt="icon" className="switch-button" />
      </label>
    </>
  );
};

export default ThemeToggler;
