import { ReactNode } from 'react';

import '../App.scss';
import Breadcrumbs from "./Breadcrumbs";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className="main">
    <Breadcrumbs/>
    {children}
  </main>;
};

export default Main;
