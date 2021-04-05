import { useState } from 'react';
import Image from './Image';
import '../styles/ThemeToggle.scss';

enum ThemeInfo {
    LightThemeImg = '/images/sun.svg',
    DarkThemeImg = '/images/moon.svg',
    LightStyle = 'light',
    DarkStyle = 'dark'
}

const ThemeToggler = () => {
    const [theme, setValue] = useState(true);

    const handleToggle = (): void => {
        setValue(!theme);
    };
    return (
        <>
            <input
                checked={theme}
                onChange={handleToggle}
                className="switch-checkbox"
                id="switch-new"
                type="checkbox"
            />
            <label
                className={`switch-label ${theme ? ThemeInfo.LightStyle : ThemeInfo.DarkStyle
                    }`}
                htmlFor="switch-new">
                <Image
                    src={theme ? ThemeInfo.LightThemeImg : ThemeInfo.DarkThemeImg}
                    alt="icon"
                    className="switch-button"
                />
            </label>
        </>
    );
};

export default ThemeToggler;
