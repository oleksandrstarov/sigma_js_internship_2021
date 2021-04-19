import { useEffect, useState } from 'react';

const usePreloader = (...props:any):boolean => {
  const [isLoaded, setIsLoaded] = useState(false);

  const checkArgs = () => {
    const isTruth = props.every((item:any):boolean => {
      switch (true) {
        case Array.isArray(item):
          return Boolean(item.length);
        default:
          return Boolean(item);
      }
    })
   setIsLoaded(isTruth)
  }

  const disablePreloader = () => {
    const preloader = document.querySelector('.preloader');

    if(isLoaded && preloader) {
      preloader.remove();
    }
  }

  useEffect(() => {
    checkArgs();
    disablePreloader();
  })

  return isLoaded;
}

export default usePreloader;
