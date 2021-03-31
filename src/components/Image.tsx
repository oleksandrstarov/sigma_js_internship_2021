type Props = {
    src: string;
    alt? : string;
}

const Image = (props: Props) => {
    const { src, alt } = props;

    return (
        <img src={ src } alt={ alt }/>
    )
}

export default Image;