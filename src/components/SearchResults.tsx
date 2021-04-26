import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import RenderResults from './RenderResults';

import api from 'src/service/api';

type FavoritesApiData = {
  poster_path: string;
  original_title: string;
  title: string;
  vote_average: number;
  vote_count: string;
  overview: string;
  backdrop_path: string;
  id: number;
};

const SearchResults = () => {
  const [data, setData] = useState<FavoritesApiData[]>();

  const { search } = useLocation();

  const urlObj = new URLSearchParams(search);

  const params = Object.fromEntries(urlObj.entries());

  useEffect(() => {
    if (params.title === 'by-genre') {
      api
        .getFilteredList({
          from: Number(params.fromYear),
          to: Number(params.toYear),
          genre: params.genre || '',
          page: 1
        })
        .then(({ results }) => {
          setData(results);
        });
    } else {
      api.getSearchList(params.title).then(res => {
        setData(res);
      });
    }
  }, [params.title, params.toYear, params.fromYear, params.genre]);

  return (
    <div className="search-wrapper">
      {!!data && <RenderResults list={data} />}
    </div>
  );
};

export default SearchResults;
