import { useEffect, useState } from 'react';
import api from 'src/service/api';
import RenderResults from './RenderResults';

type MoviesType = {
  vote_count: number;
  vote_average: number;
  original_title: string;
  poster_path: string;
  overview: string;
  title: string;
  id: number;
};

const LastSeen = () => {
  const [data, setData] = useState<MoviesType[]>([]);

  useEffect(() => {
    api.getDataByIds(api.getHistoryIdList()).then((res: MoviesType[]) => {
      setData(res);
    });
  }, []);

  return <RenderResults list={data} />;
};

export default LastSeen;
