type Props = {
    text?: string;
    className? : string;
}


const Button = (props: Props) => {
    const { className, text } = props;

    return (
        <button type='button' className={ className ? className : '' }>
            { text ? text : '' }
        </button>
    )
}

export default Button;