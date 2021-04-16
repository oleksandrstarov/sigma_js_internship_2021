import { useEffect, useState } from 'react';
import api from 'src/service/api';
import RenderResults from './RenderResults';
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

const SearchResults = ({ match }: any) => {

  const [data, setData] = useState<FaforitsApiData[]>([{
    poster_path: '',
    original_title: '',
    title: '',
    vote_average: 0,
    vote_count: '',
    overview: '',
    backdrop_path: '',
    id: 0,
  }]);

  useEffect(() => {
    api.getSearchList(match.params.title).then((res: any) => {
      setData(res);
    });
  }, [match.params])

  return (
    <div className="search-wrapper">
      <RenderResults list={data} />
    </div>
  );
};

export default SearchResults;
