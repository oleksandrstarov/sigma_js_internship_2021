import { ThemeContext, ThemeContextType } from './ThemeContext';
import { useContext } from 'react';

import '../styles/Title.scss';

type TitleProps = {
  text: string;
  className?: string;
};

const Title = ({ text, className }: TitleProps) => {
  const { theme }: ThemeContextType = useContext(ThemeContext);

  return <h1 className={`default-title ${className} ${theme ? '' : 'dark-title'}`}>{text}</h1>;
};

export default Title;
