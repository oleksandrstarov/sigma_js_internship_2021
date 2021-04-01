import { useState, useEffect} from "react";

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
    const [isScrolled, setIsScrolled] = useState(false);

    const { mobile } = useDeviceDetect();

    const onScroll = () => {
        console.log(isScrolled)

        if(window.pageYOffset > 30) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={isScrolled ? 'active' : ''}>
            <Container>
                <Link href='/' className="header-logo">
                    <Image src={ mobile ? imageSm : imageXl } alt='logo'/>
                </Link>
                <Input type='' className="header-search"/>
                <Link href='/favorites' className="header-nav-link">
                    <span>Favorites</span>
                    <Image src={heart}/>
                </Link>
            </Container>
        </header>
    )
}

export default Header;