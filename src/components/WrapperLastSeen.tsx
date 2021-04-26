import { useState, useEffect, useContext } from 'react';
import { HistoryBarContext, HistoryBarContextType } from './SettingsBarContext'

import { ThemeContext, ThemeContextType } from './ThemeContext';

import Title from './Title';
import Container from './Container';
import Slider from './Slider';
import SmallInfoCard from './SmallInfoCard';

import api from '../service/api';

type MovieId = {
  id: number;
}
type MoviesType = {
  vote_count: number;
  vote_average: number;
  original_title: string;
  poster_path: string;
  overview: string;
  title: string;
  id: number;
}

const WrapperLasSeen = () => {
  const { historyState }: HistoryBarContextType = useContext(HistoryBarContext);

  const { theme }: ThemeContextType = useContext(ThemeContext);
  const [history, setHistory] = useState<MoviesType[]>();


  useEffect(() => {
    api.getDataByIds(api.getHistoryIdList()).then((res) => { setHistory(res) });
  }, [historyState]);

  return (
    <>{historyState ?
      <Container>
        <Title text={"Last seen"} className={`${theme ? '' : 'dark-theme'}`} />
        {history?.length && (<Slider>
          {history.map(({ id }: MovieId) => {
            return (
              <div className="slide" key={id}>
                <SmallInfoCard id={id} />
              </div>
            );
          })}
        </Slider>)}
      </Container>
      : null} </>
  )
};

export default WrapperLasSeen;
