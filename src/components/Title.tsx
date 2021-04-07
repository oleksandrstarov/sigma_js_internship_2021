import '../styles/Title.scss';

type TitleProps = {
  text: string;
  className?: string;
};

const Title = ({ text, className }: TitleProps) => {
  return <h1 className={`default-title ${className}`}>{text}</h1>;
};

export default Title;
