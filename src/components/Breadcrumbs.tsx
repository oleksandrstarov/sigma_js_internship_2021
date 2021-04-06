import '../styles/Breadcrumbs.scss';

type BreadcrumbsProps = {
    dynamic?: boolean
    className?: string;
    children: any
};

const Breadcrumbs = ({ className, children, dynamic }: BreadcrumbsProps) => {
    const generateLinks = () => {
        const items = children.map((item:any, index:number) => {
            return <a className="breadcrumb" href={item.path} key={index}>{item.name}</a>
        })

        return items;
    }

    return(
        <div className={`breadcrumbs ${ className }`}>
            {
                generateLinks()
            }
        </div>
    )
};

export default Breadcrumbs;
