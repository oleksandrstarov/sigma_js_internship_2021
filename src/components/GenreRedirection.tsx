import { Link } from 'react-router-dom';

type GenreProps = {
  genre: string
}

const GenreRedirection = ({ genre }: GenreProps) => {
  return (
    <Link to={`/search-results/by-genre/${genre}/1060/2021/false/false/1`}>{genre}</Link>
  )
}

export default GenreRedirection;
