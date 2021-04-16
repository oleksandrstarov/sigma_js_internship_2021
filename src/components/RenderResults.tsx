import { useState } from 'react';

import buttonImgLine from '../assets/lines.png';
import buttonImgGroup from '../assets/Group.png';

import CardInfo from './CardInfo';
import { MovieCard } from '../models/index';

import '../styles/RenderResults.scss';

interface RenderResultsArrList {
  list: MovieCard[];
}

const RenderResults = ({ list }: RenderResultsArrList) => {
  const [tailState, setTailState] = useState(true);

  const handlerTail = () => setTailState(!tailState);

  return (
    <div className="delivery">
      <div className="view-toggler">
        {tailState ? (
          <img
            src={buttonImgGroup}
            alt="button-img-group"
            className="delivery__toggler"
            onClick={() => handlerTail()}
          />
        ) : (
          <img
            src={buttonImgLine}
            alt="button-img-line"
            className="delivery__toggler"
            onClick={() => handlerTail()}
          />
        )}
      </div>
      <div className={tailState ? "delivery__container" : "delivery__container-wide"}>
        {list.length ? list.map((item: MovieCard) => {
          return <CardInfo tailWide={!tailState} number={item.id} />;
        }) : <div className="oops-favorite"> Oops, it's empty here :(</div>}
      </div>
    </div>
  );
};

export default RenderResults;
