import { useEffect, useState } from 'react';

const mobileMaxWidth: number = 992;
const mobileMinWidth: number = 0;

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;

    if (width > mobileMinWidth && width <= mobileMaxWidth) {
      //992 - because we don't have design for tablet
      setIsMobile(true);
    }

    if (width > mobileMaxWidth) {
      setIsMobile(false);
    }
  }, []);

  return isMobile;
};

export default useDeviceDetect;
