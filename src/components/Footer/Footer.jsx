import Logo from '../Logo/Logo';
import '../../../src/index.css';
import './Footer.css';

const Footer = () => {
    return (
        <footer>

            <Logo color='#FFFFFF' width={122} height={39.44} className='footer-logo' />
            <p>© 2020 Kasa. All rights reserved</p>    

        </footer>
    )
};

export default Footer;