type InputProps = {
  type: string;
  className?: string;
};

const Input = ({ type, className }: InputProps, ...restProps: any) => {
  return <input {...restProps} type={type} className={className} />;
};

export default Input;
