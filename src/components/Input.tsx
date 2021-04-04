type Props = {
  [x: string]: {};
};

const Input = ({ ...restProps }: Props) => {
  return <input {...restProps} />;
};

export default Input;
