import { useEffect } from 'react';

const usePreloader = (isLoaded: boolean) => {
  useEffect(() => {
    (function () {
      const preloader = document.querySelector('.preloader');

      if(isLoaded && preloader) {
        preloader.style.display = 'none';
      } else if(preloader) {
        preloader.style.display = 'flex';
      }
    })()
  })
}

export default usePreloader;
