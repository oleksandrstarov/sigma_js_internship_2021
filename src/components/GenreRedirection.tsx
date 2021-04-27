import { useHistory } from "react-router";

type GenreProps = {
  genre: string;
};

const GenreRedirection = ({ genre }: GenreProps) => {
  const history = useHistory();
  return (
    <a
      onClick={() =>
        history.push(`/search-results?title=by-genre&genre=${genre}&page=1`)
      }
      href="#!">
      {genre}
    </a>
  );
}

export default GenreRedirection;
