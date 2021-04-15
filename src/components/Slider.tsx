import { ReactNode, useEffect, useRef, useState } from 'react';
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
  const [hasHiddenItems, setHasHiddenItems] = useState(true);
  const [activeSlides, setActiveSlides] = useState(0);

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

  useEffect(() => {
    const setProgress = () => {
      const length =
        sliderRef.current.querySelectorAll('.slide').length;
      progressRef.current.style.width = `${(activeSlides / length) * 100}%`;
    };

    if (!activeSlides) {
      setActiveSlides(Math.floor(sliderRef.current.clientWidth / slideWidth));
      setProgress();
    }

    setSlide(translate);

    const listWidth = listRef.current.clientWidth;
    const sliderWidth = sliderRef.current.clientWidth;
    setIsLast(translate <= sliderWidth + -listWidth - 60);
    setIsFirst(translate >= 0);

    setHasHiddenItems(
      listRef.current.clientWidth > sliderRef.current.clientWidth
    );
    setProgress();
  }, [translate, activeSlides]);

  return (
    <div ref={sliderRef} className={`default-slider ${className}`}>
      {hasHiddenItems && !isFirst && (
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
      {hasHiddenItems && !isLast && (
        <button className="next-arrow" onClick={next}>
          <img src="/images/slider-arrow.svg" alt="arrow" />
        </button>
      )}
    </div>
  );
};

export default Slider;
