import {ReactNode} from 'react';

type Props = {
    href: string,
    children? : ReactNode
}

const Link = (props: Props) => {
    const { href, children } = props;

    return (
        <a href={ href }>
            { children ? children : '' }
        </a>
    )
}

export default Link;