import { Link } from 'react-router-dom';

type GenreProps = {
  genre: string
}

const GenreRedirection = ({ genre }: GenreProps) => {
  return (
    <Link to={`/search-results?title=by-genre&genre=${genre}&page=1`}>{genre}</Link>
  )
}

export default GenreRedirection;
