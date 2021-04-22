// import { NavLink } from 'react-router-dom';

import '../styles/Header.scss';
import '../styles/SettingsBar.scss';

const deleteImg = '/images/delete.svg';
const heart = '/images/heart.svg';
const historyImg = '/images/history.png';
const focusImg = '/images/focus.png';

const SettingsBar = () => {
    return (
        <div className="settings-bar-wrapper">
            <div className="bar-items-container">
                <div className="bar-item">
                    <div className="bar-item-wrapper">
                        <NavLink to={`/favorites/1`} title="to favorites page">
                            <div className="bar-item-btn">
                                <p className="bar-title">Favorites</p>
                                <img src={heart} alt="heart" className="bar-img" />
                            </div>
                        </NavLink>
                        <div className="bar-counter" title="Number of movies"><span>0</span></div>
                    </div>
                    <div className="bar-items-tools">
                        <div className="bar-item-tool" title="Clear favorite movies">
                            <img src={deleteImg} alt="delete" className="bar-img" />
                            <div className="bar-clean-btn">
                                <p className="bar-tool-title">Clear movies</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="bar-item">
                    <div className="bar-item-wrapper">
                        <NavLink to={`/history/1`} title="to history page">
                            <div className="bar-item-btn">
                                <p className="bar-title">Last seens</p>
                                <img src={historyImg} alt="historyImg" className="bar-img" />
                            </div>
                        </NavLink>
                        <div className="bar-counter" title="Number of movies"><span>0</span></div>
                    </div>
                    <div className="bar-items-tools">
                        <div className="bar-item-tool" title="Clear history of movies">
                            <img src={deleteImg} alt="delete" className="bar-img" />
                            <div className="bar-clean-btn">
                                <p className="bar-tool-title">Clear movies</p>
                            </div>
                        </div>
                        <div className="bar-item-tool" title="Set to untracked history">
                            <img src={focusImg} alt="focusImg" className="bar-img" />
                            <div className="bar-clean-btn">
                                <p className="bar-tool-title">Tracked</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

            </div>
        </div>

    )
}

export default SettingsBar
