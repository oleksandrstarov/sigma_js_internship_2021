import { useEffect } from 'react';

const usePreloader = (isLoaded: boolean) => {
  const checkData = (): void => {
    const preloader = document.querySelector('.preloader');

    if(isLoaded && preloader) {
      preloader.remove();
    }
  }

  useEffect(() => {
    checkData();
  })
}

export default usePreloader;
