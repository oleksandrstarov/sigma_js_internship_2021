import Container from './Container';
import Image from './Image';
import Input from './Input';
import Link from './Link';

import useDeviceDetect from '../hooks/useDeviceDetect';

import '../styles/Header.scss'

const imageXl = '/images/logo-xl.svg';
const imageSm = '/images/logo-sm.svg';
const heart = '/images/heart.svg';

const Header = () => {
    const { mobile } = useDeviceDetect();

    return (
        <header>
            <Container>
                <Link href='/'>
                    <Image src={ mobile ? imageSm : imageXl } alt='logo'/>
                </Link>
                <Input type=''/>
                <Link href='/favorites' className="header-nav-link">
                    { mobile ? <Image src={ heart }/> : 'Favorites' }
                </Link>
            </Container>
        </header>
    )
}

export default Header;