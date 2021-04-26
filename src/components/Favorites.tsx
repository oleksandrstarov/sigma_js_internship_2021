import { useEffect, useState } from 'react';
import api from 'src/service/api';
import RenderResults from './RenderResults';
import Container from "./Container";
import Pagination from "./Pagination";

const Favorites = () => {
  const [favoritesData, setData] = useState([]);
  const [pagesAmount, setPagesAmount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const switchPage = (index:number):void => {
    setCurrentPage(index);
  }

  useEffect(() => {
    const data = api.getFavoritesByOffset( 20 * (currentPage - 1));
    setPagesAmount(data.total_pages);
    api.getDataByIds(data.favorites).then((res: any) => {
      setData(res);
    });
  }, [currentPage])

  return (
    <div className="favorites-wrapper">
      {favoritesData && (
        <Container>
          <RenderResults list={favoritesData} />
          <Pagination totalPages={pagesAmount} switchPage={switchPage}/>
        </Container>
      )}
    </div>
  );
};

export default Favorites;
