import { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

const Container = (props: Props) => {
    const { children } = props;

    return (
        <div className="container">
            { children }
        </div>
    )
}

export default Container;