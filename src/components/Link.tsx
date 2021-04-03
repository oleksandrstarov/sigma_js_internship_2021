import { ReactNode } from 'react';

type LinkProps = {
  href: string;
  children?: ReactNode;
};

const Link = ({ href, children }: LinkProps, ...restProps: any) => {
  return (
    <a {...restProps} href={href}>
      {children}
    </a>
  );
};

export default Link;
