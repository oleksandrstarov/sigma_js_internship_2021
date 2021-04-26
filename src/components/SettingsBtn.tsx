import { useState, useRef } from 'react';

import useOutsideClick from 'src/hooks/useOutsideClick ';
import '../styles/Header.scss';

import settings from '../assets/settings.png';
import SettingsBar from './SettingsBar';

const SettingsBtn = () => {
  const [isSettingsBarActive, setIsSettingsBarActive] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    if (isSettingsBarActive) {
      setIsSettingsBarActive(false);
    }
  });

  const handlerBar = () => {
    setIsSettingsBarActive(!isSettingsBarActive);
  }

  return (
    <div className="settings-wrapper">
      <div onClick={() => handlerBar()} className="header-nav-link settings-button">
        <img src={settings} alt="settings img" className={isSettingsBarActive ? "settings-img-button-active" : "settings-img-button"} />
      </div>
      <div ref={ref} className={isSettingsBarActive ? "settings-bar-active" : "settings-bar"}>
        <SettingsBar />
      </div>
    </div>
  );
}

export default SettingsBtn