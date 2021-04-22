import '../styles/Preloader.scss';
import React, {useEffect, useRef} from "react";

type PreloaderProps = {
  isLoaded: boolean
}

const Preloader = ({isLoaded}: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement|undefined|null>();

  const removeLoader = ():void => {
    preloaderRef?.current?.remove();
  }

  useEffect(():void => {
    if(isLoaded && preloaderRef) {
      removeLoader();
    }
  }, [isLoaded])

  return (
    <div ref={preloaderRef as React.RefObject<HTMLDivElement>} className="preloader">
      <img className="preloader-icon" src="/images/spinner.svg" alt="preloader"/>
    </div>
  )
}

export default Preloader;
