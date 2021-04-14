import '../styles/Breadcrumbs.scss';
import { useEffect, useState } from 'react';
import routing from "../config/routing";

type CrumbsType = {
  name: string,
  path?: string
}

type BreadcrumbsProps = {
  dynamic?: boolean;
  className?: string;
  crumbs: CrumbsType[];
};

const Breadcrumbs = ({ className, crumbs, dynamic }: BreadcrumbsProps) => {
  const [prevPath, setPrevPath] = useState('');
  const [prevPathName, setPrevPathName] = useState('')

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

  const getPrevPath = () => {
    const { name } = routing.find(({ path }): boolean => path.includes(prevPath)) || { name: '' };
    setPrevPathName(name);
  }

  useEffect(() => {
    setPrevPath(`/${document.referrer.split('/')[3]}`);
    getPrevPath()
  });

  return (
    <div className={`breadcrumbs ${className}`}>
      {(prevPathName && dynamic) && (
        <a className="breadcrumb" href={prevPath} key={0}>
          {prevPathName}
        </a>
      )}
      {generateLinks()}
    </div>
  );
};

export default Breadcrumbs;
