import { useState } from "react";
import Image from './Image';
import Input from './Input';
import '../styles/ThemeToggle.scss';

const imageSun: string = '/images/sun.svg';
const imageMoon: string = '/images/moon.svg';

const ThemeToggler = () => {
    const [value, setValue] = useState(true);

    const handleToggle = (): void => {
        setValue(!value)
    }

    return (
        <>
            <Input
                checked={value}
                onChange={handleToggle}
                className="switch-checkbox"
                id="switch-new"
                type="checkbox"
            />
            <label
                className={`switch-label  ${value ? "light" : "dark"}`}
                htmlFor={`switch-new`}
            >
                <Image src={value ? imageSun : imageMoon} alt="icon" className="switch-button" />
            </label>
        </>
    )
}

export default ThemeToggler;
