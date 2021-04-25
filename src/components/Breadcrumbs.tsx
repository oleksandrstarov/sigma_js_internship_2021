import '../styles/Breadcrumbs.scss';
import { withRouter, useHistory } from "react-router-dom";

type BreadcrumbsProps = {
  className?: string
};

const Breadcrumbs = ({ className }: BreadcrumbsProps) => {
  const history = useHistory();
  const pathname = window.location.pathname;
  // @ts-ignore
  const pathnames = pathname?.split('/').filter(item => item);
  console.log(pathnames)

  return (
    <div className={`breadcrumbs ${className}`}>
      <a className="breadcrumb" onClick={() => history.push('/')}>Home</a>
      { pathnames && pathnames.map((name, index) => {
        console.log(pathnames)
        const routeTo  = `${pathnames.slice(0, index + 1).join('/')}`
        return <a className="breadcrumb" onClick={() => history.push(routeTo)}>${name}</a>
      }) }
    </div>
  );
};

// @ts-ignore
export default withRouter(Breadcrumbs);
