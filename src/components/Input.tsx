type Props = {
    type?: string,
    className?: string
}

const Input = (props: Props) => {
    const { type, className } = props;

    return (
        <input type={type ? type : 'text'} className={className ? className : ''}/>
    )
}

export default Input;