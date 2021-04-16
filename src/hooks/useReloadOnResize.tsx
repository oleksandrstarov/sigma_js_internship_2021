import { useEffect } from "react";

const useReloadOnResize = (): void => {

    useEffect(() => {
        const documentWidth = document.documentElement.clientWidth;
        let time: any;
        window.onresize = function () {
            if (time)
                clearTimeout(time);
            time = setTimeout(function () {
                if (documentWidth !== document.documentElement.clientWidth) {
                    window.location.reload();
                }
            }, 123);
        };
    }, [])
};

export default useReloadOnResize;