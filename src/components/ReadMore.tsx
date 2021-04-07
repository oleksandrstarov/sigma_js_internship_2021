import { useState } from 'react';
import { ReactNode } from 'react';

import '../styles/ReadMore.scss';

interface IProps {
  children: ReactNode;
}

const ReadMore = ({ children }: IProps) => {
  const text: any = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p>
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? " ...Read more" : " Show less"}
      </span>
    </p>
  );
};

export default ReadMore;