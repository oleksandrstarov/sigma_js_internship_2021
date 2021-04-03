type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

const Image = ({ src, alt, className }: ImageProps, ...restProps: any) => {
  return <img {...restProps} src={src} alt={alt} className={className} />;
};

export default Image;
