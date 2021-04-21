import { useState } from 'react';

import buttonImgLine from '../assets/lines.png';
import buttonImgGroup from '../assets/Group.png';

import '../styles/RenderResults.scss';
import CardInfo from './CardInfo';
import { MovieCard } from '../models/index';

import useDeviceDetect from 'src/hooks/useDeviceDetect';
import SmallInfoCard from './SmallInfoCard';

interface RenderResultsArrList {
  list: MovieCard[];
}

const RenderResults = ({ list }: RenderResultsArrList) => {
  const [tailState, setTailState] = useState(true);

  const handlerTail = () => setTailState(!tailState);
  const mobileView = useDeviceDetect()
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
      <div className="delivery__container">
        {list.map((item: MovieCard) => {
          if (!mobileView) {

            return <CardInfo tailWide={!tailState} number={item.id} />;
          } else {

            if (tailState) {
              return <CardInfo tailWide={false} number={item.id} />;
            }

            return <div className="small-card-wrapper"><SmallInfoCard id={item.id} /></div>

          }


        })}
      </div>
    </div>
  );
};

export default RenderResults;
