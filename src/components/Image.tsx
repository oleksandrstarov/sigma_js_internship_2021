type ImageProps = {
  src: string;
  alt: string;
  [x: string]: {};
};

const Image = ({ src, alt = 'img', ...restProps }: ImageProps) => {
  return <img src={src} alt={alt} {...restProps} />;
};

export default Image;
