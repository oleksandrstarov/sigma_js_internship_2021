import Container from './Container';
import Image from './Image';
import Input from './Input';

import '../styles/Header.scss'

const image = '/images/logo.svg';

const Header = () => {
    return (
        <header>
            <Container>
                <Image src={image} alt='logo'/>
                <Input type="text"/>
            </Container>
        </header>
    )
}

export default Header;