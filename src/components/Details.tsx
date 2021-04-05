type DescriptionProps = {
  name: string;
  text: string;

  [x: string]: {};
};

const Details = ({ name, text, ...restProps }: DescriptionProps) => {
  return (
    <p {...restProps}>
      {name}:{text}
    </p>
  );
};

export default Details;
