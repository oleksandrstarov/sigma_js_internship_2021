type BreadcrumbsProps = {
    className?: string;
};

const Breadcrumbs = ({ className }: BreadcrumbsProps) => {
    const generateLinks = (): string => {
        return 'breadcrumbs';
    }

    return(
        <div className={`breadcrumbs ${ className }`}>
            { generateLinks() }
        </div>
    )
};

export default Breadcrumbs;
