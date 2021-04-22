// import { useState, useRef } from 'react';

import useOutsideClick from 'src/hooks/useOutsideClick ';
import '../styles/Header.scss';

import settings from '../assets/settings.png';
import SettingsBar from './SettingsBar';

const SettingsBtn = () => {
    const [isBar, setIsBar] = useState(false);
    const ref = useRef(null);

    useOutsideClick(ref, () => {
        if (isBar) {
            setIsBar(false);
        }
    });

    const hendlerBar = () => {
        setIsBar(!isBar);
    }
    return (
        <div className="settings-wrapper">
            <div onClick={() => hendlerBar()} className="header-nav-link settings-button">
                <img src={settings} alt="settings img" className={!isBar ? "settings-img-button" : "settings-img-button-active"} />
            </div>
            <div ref={ref} className={!isBar ? "settings-bar" : "settings-bar-active"}>
                <SettingsBar />
            </div>
        </div>
    );
}

export default SettingsBtn