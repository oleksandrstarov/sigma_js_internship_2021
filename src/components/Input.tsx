type InputProps = {
  type: string;
  className: string;
  [x: string]: {};
};

const Input = ({ type, className, ...restProps }: InputProps) => {
  return <input type={type} className={className} {...restProps} />;
};

export default Input;
