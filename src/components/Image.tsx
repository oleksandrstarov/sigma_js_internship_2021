type Props = {
  src: string;
  alt: string;
  [x: string]: {};
};

const Image = ({ src, alt = 'img', ...restProps }: Props) => {
  return <img src={src} alt={alt} {...restProps} />;
};

export default Image;
