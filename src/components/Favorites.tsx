import { useEffect, useState } from 'react';
import api from 'src/service/api';
import RenderResults from './RenderResults';

const Favorites = () => {
  const [favoritesData, setData] = useState([]);

  useEffect(() => {
    api.getDataByIds(api.getFavoritsIdList()).then((res: any) => {
      setData(res);
    });
  }, [])

  return (
    <div className="favorites-wrapper">
      <RenderResults list={favoritesData} />
    </div>
  );
};

export default Favorites;
