import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import RenderResults from './RenderResults';

import api from 'src/service/api';

type FaforitsApiData = {
  poster_path: string;
  original_title: string;
  title: string;
  vote_average: number;
  vote_count: string;
  overview: string;
  backdrop_path: string;
  id: number;
}

interface SearchResultsMatchParams {
  title: string;

}

const SearchResults = ({ match }: RouteComponentProps<SearchResultsMatchParams>) => {
  const [data, setData] = useState<FaforitsApiData[]>();

  useEffect(() => {
    api.getSearchList(match.params.title).then((res: FaforitsApiData[]) => {
      setData(res);
    });
  }, [match.params])

  return (
    <div className="search-wrapper">
      {!!data && <RenderResults list={data} />}
    </div>
  );
};

export default SearchResults;
