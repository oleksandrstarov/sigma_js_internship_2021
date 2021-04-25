import '../styles/Breadcrumbs.scss';
import { withRouter, useHistory } from "react-router-dom";

type BreadcrumbsProps = {
  className?: string
};

const Breadcrumbs = ({ className }: BreadcrumbsProps) => {
  const history = useHistory();
  const pathname = window.location.pathname;
  const pathnames = pathname?.split('/').filter(item => item);

  const onHandleClick = (link:string):void => {
    history.push(link);
  }

  return (
    <div className={`breadcrumbs ${className}`}>
      <a href="" className="breadcrumb" onClick={() => onHandleClick('/')}>Home</a>
      { pathnames && pathnames.map((name, index) => {
        const routeTo  = `${pathnames.slice(0, index + 1).join('/')}`
        return <a href="" className="breadcrumb" onClick={() => onHandleClick(routeTo)}>${name}</a>
      }) }
    </div>
  );
};

// @ts-ignore
export default withRouter(Breadcrumbs);
