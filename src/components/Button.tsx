import { ReactChild } from 'react';

type Props = {
  children: ReactChild;
  [x: string]: {};
};

const Button = ({ children, ...restProps }: Props) => {
  return <button {...restProps}>{children}</button>;
};

export default Button;
