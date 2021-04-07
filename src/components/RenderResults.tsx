import '../styles/RenderResults.scss';

import buttonImgLine from '../assets/lines.png';

import buttonImgGroup from '../assets/Group.png';

import { useState } from 'react';

import useDeviceDetect from 'src/hooks/useDeviceDetect';

const RenderResults = () => {

    const [tailState, setTailState] = useState(true);

    const screenState = useDeviceDetect();

    const handlerTail = () => setTailState(!tailState);

    // Here are commented out temporary examples for future components.
    const createListItems = () => {
        return tailState
            ? screenState ? /* <componentExample props={item}/>) */ : /* <componentExample props={item, tailState}/>) */
            :/* <componentExample props={item, tailState}/>) */;
    }

    const listItems = createListItems();

    return (
        <div className='delivery'>

            <div className='view-toggler' onClick={() => handlerTail()}>
                {tailState
                    ? <img src={buttonImgGroup} alt='button-img-group' className='delivery__taggler' />
                    : <img src={buttonImgLine} alt='button-img-line' className='delivery__taggler' />}
            </div>

            <div className="delivery__container">
                {listItems}
            </div>
        </div>
    );
};

export default RenderResults;
