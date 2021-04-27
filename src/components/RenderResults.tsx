import { useState } from "react";
import { MovieCard } from "../models/index";
import CardInfo from "./CardInfo";
import SmallInfoCard from "./SmallInfoCard";
import useDeviceDetect from "../hooks/useDeviceDetect";

import buttonImgGroup from "../assets/Group.png";
import buttonImgLine from "../assets/lines.png";

import '../styles/RenderResults.scss';

interface RenderResultsArrList {
  list: MovieCard[];
  title?: string;
}

const RenderResults = ({ list, title }: RenderResultsArrList) => {
  const [tailState, setTailState] = useState(true);
  const handlerTail = () => setTailState(!tailState);
  const isMobileView = useDeviceDetect();

  if (!list.length) {
    return (
      <div className="delivery">
        <div className="delivery__container">
          <h3>Oops no results here ;)</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="delivery">
      <div className="view-toggler ">
        <h2>{title ?? ''}</h2>
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
            className="delivery__toggler rotate-btn"
            onClick={() => handlerTail()}
          />
        )}
      </div>
      <div className="delivery__container">
        {list?.map((item: MovieCard) => {
          if (!isMobileView) {
            return <CardInfo tailWide={!tailState} number={item.id} />;
          } else {
            if (tailState) {
              return <CardInfo tailWide={false} number={item.id} />;
            }
            return (
              <div className="small-card-wrapper">
                <SmallInfoCard id={item.id} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RenderResults;
