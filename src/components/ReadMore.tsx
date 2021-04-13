import { useState } from 'react';
import { ReactText } from 'react';

import '../styles/ReadMore.scss';

interface IProps {
  children: ReactText;
}

const ReadMore = ({ children }: IProps) => {
  const text = String(children);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  if (!text) {
    return null;
  }
  return <>{text.length < 250 ? text : (
    <p>
      {isReadMore ? text.slice(0, 250) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? " ...Read more" : " Show less"}
      </span>
    </p>
  )}</>
};

export default ReadMore;
