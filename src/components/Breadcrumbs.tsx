import '../styles/Breadcrumbs.scss';
import {useEffect, useState} from 'react';

type crumbsType = {
  name: string,
  path: string,
  exact: boolean
}

type BreadcrumbsProps = {
  dynamic?: boolean;
  className?: string;
  crumbs: [ crumb: crumbsType ];
};

const Breadcrumbs = ({ className, crumbs, dynamic }: BreadcrumbsProps) => {
  const [prevPathName, setPrevPathname] = useState('');

  useEffect(() => {
    setPrevPathname(`/${document.referrer.split('/')[3]}`);
  });

  const generateLinks = () => {
    const items = crumbs.map((item: any, index: number) => {
      return (
        <a className="breadcrumb" href={item.path} key={index++}>
          {item.name}
        </a>
      );
    });

    return items;
  };

  return (
    <div className={`breadcrumbs ${className}`}>
      {dynamic && (
        <a className="breadcrumb" href={prevPathName} key={0}>
          {prevPathName}
        </a>
      )}
      {generateLinks()}
    </div>
  );
};

export default Breadcrumbs;
