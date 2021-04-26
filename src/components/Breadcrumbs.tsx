import '../styles/Breadcrumbs.scss';
import { useHistory, useLocation } from 'react-router';
import {SyntheticEvent, useEffect, useState} from 'react';

const Breadcrumbs = () => {
  const [pathnames, setPathnames] = useState<Array<string>|null>(null)
  const history = useHistory();
  const pathname = useLocation().pathname;

  const handleClick = (e:SyntheticEvent, path:string):void => {
    e.preventDefault();
    history.push(path);
  }

  useEffect(() => {
    setPathnames(pathname.split('/').filter(item => item));
  }, [])

  return (
    <div className="breadcrumbs">
      <a href="#" className="breadcrumb" onClick={(e) => handleClick(e, '/')}>Home</a>
      { pathnames?.map((name, index) => {
        const routeTo = `/${pathnames?.slice(0, index + 1).join('/')}`;
        return <a href="#" className="breadcrumb" onClick={(e) => handleClick(e, routeTo)}>{name.split('-').join(' ')}</a>
      }) }
    </div>
  );
};

export default Breadcrumbs;
