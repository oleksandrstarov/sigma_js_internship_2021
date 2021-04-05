import { NavLink } from 'react-router-dom';

type ButtonProps = {
  text?: string;
  classNameButton?: string;
  classNameContainer?: string;
  classNameImg?: string;
  buttonImgSrc: string;
  original_title: string;
  number?: number;
  link?: string;
};

const Button = ({
  classNameButton,
  classNameContainer,
  classNameImg,
  text,
  buttonImgSrc,
  original_title,
  number,
  link
}: ButtonProps) => {
  return (
    <NavLink to={`${link}:${number} `}>
      <button type='button' className={classNameButton}>
        <div className={classNameContainer}>
          <p> {text}</p>
          <img
            src={buttonImgSrc}
            alt={original_title}
            className={classNameImg}
          />
        </div>
      </button>
    </NavLink>
  );
};

export default Button;
