import { ReactNode, useEffect, useRef, useState } from 'react';
import '../styles/Slider.scss';

type SliderProps = {
  className?: string;
  children: ReactNode;
};

const Slider = ({ className, children }: SliderProps) => {
  const listRef: any = useRef();
  const sliderRef: any = useRef();
  const [translate, setTranslate] = useState(0);
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const [isEnough, setIsEnough] = useState(true);

  const next = () => {
    setTranslate(translate - 210);
  };

  const prev = () => {
    setTranslate(translate + 210);
  };

  const setSlide = (value: number) => {
    const item = listRef.current;
    item.style.transform = `translateX(${value}px)`;
  };

  const checkSlide = () => {
    const listWidth = listRef.current.clientWidth;
    const sliderWidth = sliderRef.current.clientWidth;
    setIsLast(translate <= -listWidth + sliderWidth - 60);
    setIsFirst(translate >= 0);
  };

  useEffect(() => {
    setSlide(translate);
    checkSlide();
    setIsEnough(listRef.current.clientWidth > sliderRef.current.clientWidth);
  }, [translate]);

  return (
    <div ref={sliderRef} className={`default-slider ${className}`}>
      {isEnough && !isFirst && (
        <button className="prev-arrow" onClick={prev}>
          <img src="/images/slider-arrow.svg" alt="arrow" />
        </button>
      )}
      <div className="slider-list" ref={listRef}>
        {children}
      </div>
      {isEnough && !isLast && (
        <button className="next-arrow" onClick={next}>
          <img src="/images/slider-arrow.svg" alt="arrow" />
        </button>
      )}
    </div>
  );
};

export default Slider;
