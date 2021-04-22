import { useHistory } from 'react-router';

type GenreProps = {
  genreId: number | null,
  genre: string
}

const GenreRedirection = ({ genreId, genre }: GenreProps) => {
  const history = useHistory();

  const getMoviesByGenre = (id: number | null) => {
    if (id) {
      history.push(`/search-results/a/${id}/1060/2021/false/false/1`);
    }
  }

  return (
    <button onClick={() => getMoviesByGenre(genreId)}>{genre}</button>
  )
}

export default GenreRedirection;
