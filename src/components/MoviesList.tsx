import { ReactNode } from 'react';
import { useParams } from 'react-router';

const MoviesList = (props: any) => {
  type Query = {
    title: string;
    id: string;
  };

  type Props = {
    title: string;
    children?: ReactNode;
  };

  const query: Query = useParams();
  const properties: Props = props;

  return (
    <div>
      <h1>{properties.title}</h1>
      <p>title query: {query.title}</p>
    </div>
  );
};

export default MoviesList;
