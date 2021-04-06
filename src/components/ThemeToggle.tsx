import { useState } from 'react';
import Image from './Image';
import '../styles/ThemeToggle.scss';

enum Theme {
  dark,
  light,
}

const ThemeImage = {
  [Theme.dark]: '/images/moon.svg',
  [Theme.light]: '/images/sun.svg'
}

const ThemeToggler = () => {
  let [theme, setTheme] = useState(Theme.light);

  const handleToggle = (): void => {
    setTheme(theme === Theme.light ? Theme.dark : Theme.light);
  };

  return (
    <>
      <input
        checked={!!theme}
        onChange={handleToggle}
        className="switch-checkbox"
        id="switch-new"
        type="checkbox"
      />
      <label
        className={`switch-label ${Theme[theme]}`}
        htmlFor="switch-new">
        <Image
          src={ThemeImage[theme]}
          alt="icon"
          className="switch-button"
        />
      </label>
    </>
  );
};

export default ThemeToggler;
