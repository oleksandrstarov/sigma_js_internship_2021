import { ReactNode } from 'react';

type LinkProps = {
  href: string;
  children?: ReactNode;
  className?: string;
};

const Link = ({ href, children, className }: LinkProps) => {
  return <a href={href} className={className}>{children}</a>;
};

export default Link;
