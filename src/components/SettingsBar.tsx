import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { SettingsBarContext, SettingsBarContextType } from './SettingsBarContext';
import { ThemeContext, ThemeContextType } from './ThemeContext'


import '../styles/Header.scss';
import '../styles/SettingsBar.scss';
import api from 'src/service/api';

const deleteImg = '/images/delete.svg';
const heart = '/images/heart.svg';
const historyImg = '/images/history.png';
const focusImg = '/images/focus.png';
const unFocusImg = '/images/view.png';

const SettingsBar = () => {
  const {
    handleHistoryBarContext, handleFavoriteContext, handleHistoryContext,
    historyBarContext, favoriteContext, historyContext,
  }: SettingsBarContextType = useContext(SettingsBarContext);
  const { theme }: ThemeContextType = useContext(ThemeContext);

  const handleFavotites = () => {
    api.clearFavoritsIdList();
    handleFavoriteContext()
  }

  const handleHistory = () => {
    api.clearHistoryIdList();
    handleHistoryContext()
  }

  return (
    <div className="settings-bar-wrapper">
      <div className="bar-items-container">
        <div className="bar-item">
          <div className="bar-item-wrapper">
            <Link to={`/favorites?page=1`} title="to favorites page">
              <div className="bar-item-btn">
                <p className="bar-title">Favorites</p>
                <img src={heart} alt="heart" className="bar-img" />
              </div>
            </Link>
            <div className="bar-counter" title="Number of movies"><span>{favoriteContext}</span></div>
          </div>
          <div className="bar-items-tools">
            <div className="bar-item-tool" title="Clear favorite movies">
              <img src={deleteImg} alt="delete" className="bar-img" />
              <div className="bar-clean-btn" onClick={handleFavotites}>
                <p className={`bar-tool-title ${theme ? '' : 'dark-text'}`}>Clear movies</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bar-item">
          <div className="bar-item-wrapper">
            <Link to={`/last-seen?page=1`} title="to history page">
              <div className="bar-item-btn">
                <p className="bar-title">Last seens</p>
                <img src={historyImg} alt="historyImg" className="bar-img" />
              </div>
            </Link>
            <div className="bar-counter" title="Number of movies"><span>{historyContext}</span></div>
          </div>
          <div className="bar-items-tools">
            <div className="bar-item-tool" title="Clear history of movies">
              <img src={deleteImg} alt="delete" className="bar-img" />
              <div className="bar-clean-btn" onClick={handleHistory}>
                <p className={`bar-tool-title ${theme ? '' : 'dark-text'}`}>Clear movies</p>
              </div>
            </div>
            <div className="bar-item-tool" title="Set to untracked history">
              <img src={historyBarContext ? focusImg : unFocusImg} alt="focusImg" className="bar-img" />
              <div className="bar-clean-btn" onClick={handleHistoryBarContext}>
                <p className={`bar-tool-title ${theme ? '' : 'dark-text'}`}>{historyBarContext ? 'Movies track' : 'Movies untrack'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsBar
