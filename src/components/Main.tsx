import { ReactNode } from 'react';

import '../App.scss';

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => {
  return <main className="main">{children}</main>;
};

export default Main;
