import { ReactNode } from 'react';

import Header from './Header';
import Contacts from './Contacts';
import Footer from './Footer';
import Main from './Main';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="wrapper">
      <Header />
      <Main>{children}</Main>
      <Contacts />
      <Footer />
    </div>
  );
};

export default Layout;
