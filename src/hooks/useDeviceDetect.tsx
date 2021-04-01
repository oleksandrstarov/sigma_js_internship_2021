import { useEffect, useState } from 'react';

type States = {
    mobile: boolean,
    desktop: boolean
}

const InitState: States = { mobile: false, desktop: false };

const useDeviceDetect = () => {
    const [device, setDevice] = useState(InitState);

    useEffect(() => {
        const width = window.innerWidth;

        if (width > 0 && width <= 992) { //992 - because we don't have design for tablet
            setDevice({ ...InitState, mobile: true })
        }

        if (width > 992) {
            setDevice({ ...InitState, desktop: true })
        }
    }, [])

    return device;
}

export default useDeviceDetect;