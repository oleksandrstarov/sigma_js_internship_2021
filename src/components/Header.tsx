import { useState, useEffect } from 'react';

import '../styles/Header.css';

const imageXl = '/images/logo-xl.svg';
const imageSm = '/images/logo-sm.svg';
const heart = '/images/heart.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = () => {
    if (window.pageYOffset > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={isScrolled ? 'active' : ''}>
      <div className="container">
        <a href="/" className="header-logo">
          <img src={window.innerWidth < 992 ? imageSm : imageXl} alt="logo" />
        </a>
        <input type="text" className="header-search" />
        <a href="/favorites" className="header-nav-link">
          <span>Favorites</span>
          <img src={heart} />
        </a>
      </div>
    </header>
  );
};

export default Header;
