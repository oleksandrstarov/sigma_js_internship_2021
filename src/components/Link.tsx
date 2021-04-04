import { ReactChild } from 'react';

type Props = {
  href: string;

  children?: ReactChild;

  [x: string]: any;
};

const Link = ({ href, children, ...restProps }: Props) => {
  return (
    <a href={href} {...restProps}>
      {children}
    </a>
  );
};

export default Link;
