import { ReactNode } from "react";
import '../styles/Slider.scss';

type SliderProps = {
    className? : string,
    children: ReactNode
}

const Slider = ({ className, children }: SliderProps) => {
    return (
        <div className={`default-slider ${ className }`}>
            { children }
        </div>
    )
}

export default Slider;
