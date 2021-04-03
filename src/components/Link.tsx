import { ReactNode } from 'react';

type Props = {
  href: string;
  children?: ReactNode;
  className?: string;
};

const Link = ({ href, children, className }: Props) => {
  return (
    <a href={href} className={`default-link ${className ? className : ''}`}>
      {children ? children : ''}
    </a>
  );
};

export default Link;
