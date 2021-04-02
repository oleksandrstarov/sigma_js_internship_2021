import { ReactNode } from 'react';

type LinkProps = {
  href: string;
  children?: ReactNode;
};

const Link = ({ href, children }: LinkProps) => {
  return <a href={href}>{children}</a>;
};

export default Link;
