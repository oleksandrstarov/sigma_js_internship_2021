import { useContext, ReactNode } from 'react';

import { ThemeContext, ThemeContextType } from './ThemeContext'

import Header from './Header';
import Contacts from './Contacts';
import Footer from './Footer';
import Main from './Main';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme }: ThemeContextType = useContext(ThemeContext);

  return (
    <div className={`wrapper ${theme ? '' : 'dark-theme'}`}>
      <Header />
      <Main>{children}</Main>
      <Contacts />
      <Footer />
    </div>
  );
};

export default Layout;
