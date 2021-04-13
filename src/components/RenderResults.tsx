import { useState } from 'react';

import buttonImgLine from '../assets/lines.png';
import buttonImgGroup from '../assets/Group.png';

import '../styles/RenderResults.scss';
import CardInfo from './CardInfo';

type ArrListProps = {
  list: {}[];
}

const RenderResults = ({ list }: ArrListProps) => {

  const [tailState, setTailState] = useState(true);

  const handlerTail = () => setTailState(!tailState);

  return (
    <div className='delivery'>
      <div className='view-toggler'>
        {tailState
          ? <img src={buttonImgGroup} alt='button-img-group' className='delivery__taggler' onClick={() => handlerTail()} />
          : <img src={buttonImgLine} alt='button-img-line' className='delivery__taggler' onClick={() => handlerTail()} />}
      </div>
      <div className="delivery__container">
        {list.map((item: any) => {
          return <CardInfo tailWide={!tailState} number={item.id} />
        })}
      </div>
    </div>
  );
};

export default RenderResults;
