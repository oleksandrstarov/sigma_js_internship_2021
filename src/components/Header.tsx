import Container from './Container';
import Image from './Image';
import Input from './Input';

const image = '/images/logo.svg';

const Header = () => {
    return (
        <header>
            <Container>
                <Image src={image} alt='logo'/>
                <Input/>
            </Container>
        </header>
    )
}

export default Header;