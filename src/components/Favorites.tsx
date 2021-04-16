import { useEffect, useState } from 'react';
import api from 'src/service/api';
import RenderResults from './RenderResults';

type FaforitesApiData = {
  poster_path: string;
  original_title: string;
  title: string;
  vote_average: number;
  vote_count: string;
  overview: string;
  backdrop_path: string;
  id: number;
}

const Favorites = () => {
  const [favoritesData, setFavoritesData] = useState<FaforitesApiData[]>([{
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
    api.getDataByIds(api.getFavoritsIdList()).then((res: any) => {
      setFavoritesData(res);
    });
  }, [])

  return (
    <div className="favorites-wrapper">
      <RenderResults list={favoritesData} />
    </div>
  );
};

export default Favorites;
