import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
};

type FavoritesApiData = {
  page: number,
  results: Array<MovieType>,
  total_pages: number
}

const SearchResults = () => {
  const [data, setData] = useState<Array<MovieType>>();
  const [pagesAmount, setPagesAmount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const { search } = useLocation();
  const urlObj = new URLSearchParams(search);
  const params = Object.fromEntries(urlObj.entries());

  const switchPage = (index:number):void => {
    setCurrentPage(index)
  }

  useEffect(() => {
    if (params.title === 'by-genre') {
      api
        .getFilteredList({
          from: Number(params.fromYear),
          to: Number(params.toYear),
          genre: params.genre || '',
          page: currentPage
        })
        .then(({ results }) => {
          setData(results);
        });
    } else {
      api.getSearchList(params.title, currentPage).then((res: FavoritesApiData) => {
        setData(res.results)
        setPagesAmount(res.total_pages);
      });
    }
  }, [currentPage, params.title, params.toYear, params.fromYear, params.genre, params.page])

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
