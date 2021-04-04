import { ReactChild } from 'react';

type LinkProps = {
  href: string;

  children?: ReactChild;

  [x: string]: any;
};

const Link = ({ href, children, ...restProps }: LinkProps) => {
  return (
    <a href={href} {...restProps}>
      {children}
    </a>
  );
};

export default Link;
