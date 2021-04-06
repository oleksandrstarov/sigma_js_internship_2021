import { ReactNode, useEffect, useRef, useState } from 'react';
import device from '../hooks/useDeviceDetect';
import '../styles/Slider.scss';

type SliderProps = {
  className?: string;
  children: ReactNode;
};

const slideWidth = 210;

const Slider = ({ className, children }: SliderProps) => {
  const listRef: any = useRef();
  const sliderRef: any = useRef();
  const progressRef: any = useRef();
  const [translate, setTranslate] = useState(0);
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);
  const [isEnough, setIsEnough] = useState(true);
  const [activeSlides, setActiveSlides] = useState(0);
  const isMobile = device();

  const next = () => {
    setTranslate(translate - slideWidth);
    setActiveSlides(activeSlides + 1);
  };

  const prev = () => {
    setTranslate(translate + slideWidth);
    setActiveSlides(activeSlides - 1);
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

  const setProgress = () => {
    const additional = !isMobile ? 1 : 0;
    const length =
      sliderRef.current.querySelectorAll('.slide').length + additional;
    progressRef.current.style.width = `${(activeSlides / length) * 100}%`;
  };

  useEffect(() => {
    if (activeSlides === 0) {
      setActiveSlides(Math.floor(sliderRef.current.clientWidth / slideWidth));
      setProgress();
    }

    setSlide(translate);
    checkSlide();
    setIsEnough(listRef.current.clientWidth > sliderRef.current.clientWidth);
    setProgress();
  }, [translate, activeSlides]);

  return (
    <div ref={sliderRef} className={`default-slider ${className}`}>
      {isEnough && !isFirst && (
        <button className="prev-arrow" onClick={prev}>
          <img src="/images/slider-arrow.svg" alt="arrow" />
        </button>
      )}
      <div className="progress-bar">
        <div ref={progressRef} className="progress"></div>
      </div>
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
