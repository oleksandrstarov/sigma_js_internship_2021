type InputProps = {
  [x: string]: {};
};

const Input = ({ ...restProps }: InputProps) => {
  return <input {...restProps} />;
};

export default Input;
