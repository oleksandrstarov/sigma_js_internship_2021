// import { ReactChild } from 'react';

type LinkProps = {
  href: string;
  children?: any;
  className?: string;
};

const Link = ({ href, children, className }: LinkProps) => {
  return (
    <a href={href} className={`default-link ${className ? className : ''}`}>
      {children ? children : ''}
    </a>
  );
};

export default Link;
