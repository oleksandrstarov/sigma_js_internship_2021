import { useState, useRef } from 'react';
import useOutsideClick from 'src/hooks/useOutsideClick ';

import '../styles/Header.scss';
import settings from '../assets/settings.png';
import SettingsBar from './SettingsBar';



const SettingsBtn = () => {
    const [bar, setBar] = useState(false);
    const ref = useRef(null);

    useOutsideClick(ref, () => {
        if (bar) {
            setBar(false);
        }
    });

    const hendlerBar = () => {
        setBar(!bar);
    }
    return (<div className="settings-wrapper">
        <div onClick={() => hendlerBar()} className="header-nav-link settings-button">
            <img src={settings} alt="settings img" className={!bar ? "settings-img-button" : "settings-img-button-active"} />
        </div>

        <div ref={ref} className={!bar ? "settings-bar" : "settings-bar-active"}>
            <SettingsBar />
        </div>
    </div>);
}

export default SettingsBtn