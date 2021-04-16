import { useEffect, useState } from 'react';
import api from 'src/service/api';
import RenderResults from './RenderResults';

const Favorites = () => {
  const [data, setData] = useState([{
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
      setData(res);
    });
  }, [])

  return (
    <div className="favorites-wrapper">
      <RenderResults list={data} />
    </div>
  );
};

export default Favorites;
