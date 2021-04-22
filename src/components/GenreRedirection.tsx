import { useState } from 'react';

import api from '../service/api';

const GenreRedirection = ({ genreId, genre }: any) => {
  const [movies, setMovies] = useState<any>();

  const getMoviesByGenre = (id: number) => {
    api.getMoviesByGenre(id).then((res: any) => {
      setMovies(res);
    });
  }
  console.log(movies);
  return (
    <button onClick={() => getMoviesByGenre(Number(genreId))}>{genre}</button>
  )
}

export default GenreRedirection;
