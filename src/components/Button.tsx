type ButtonProps = {
  text?: string;
  className?: string;
};

const Button = ({ className, text }: ButtonProps) => {
  return (
    <button type="button" className={className}>
      {text}
    </button>
  );
};

export default Button;
