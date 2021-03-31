import { ReactNode } from 'react';
import { useParams } from 'react-router';

type Query = {
    id: string,
    title: string,
    genre: string
}

type Props = {
    pageTitle: string;
    children? : ReactNode;
}

const MoviesList = (props: Props) => {
    const { title, genre} : Query = useParams();
    const { pageTitle } = props;

    return (
        <div className="movies-list">
            <h1>{ pageTitle }</h1>
            <p>title param: { title }</p>
            <p>genre param: { genre }</p>
        </div>
    )
}

export default MoviesList
