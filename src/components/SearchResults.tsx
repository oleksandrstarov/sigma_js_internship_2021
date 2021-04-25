import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import RenderResults from './RenderResults';

import api from 'src/service/api';
import Container from "./Container";
import Pagination from "./Pagination";

type MovieType = {
  poster_path: string;
  original_title: string;
  title: string;
  vote_average: number;
  vote_count: string;
  overview: string;
  backdrop_path: string;
  id: number;
}

type FavoritesApiData = {
  page: number,
  results: Array<MovieType>,
  total_pages: number
}

interface SearchResultsMatchParams {
  title: string;

}

const SearchResults = ({ match }: RouteComponentProps<SearchResultsMatchParams>) => {
  const [data, setData] = useState<Array<MovieType>>();
  const [pagesAmount, setPagesAmount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);

  const switchPage = (index:number):void => {
    setCurrentPage(index)
  }

  useEffect(() => {
    api.getSearchList(match.params.title, currentPage).then((res: FavoritesApiData) => {
      setData(res.results)
      setPagesAmount(res.total_pages);
    });
  }, [match.params, currentPage])

  return (
    <div className="search-wrapper">
      {!!data && (
        <Container>
          <RenderResults list={data} />
          <Pagination totalPages={pagesAmount} switchPage={switchPage}/>
        </Container>
      )}
    </div>
  );
};

export default SearchResults;
