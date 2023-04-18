import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo'
import './Header.css';

const Header = () => {
  return (
    <header>
      <Logo className={'logo'} color="#FF6060" width={211} height={68} /> 
      <nav>
        <Link className="nav" to="/">
          Accueil
        </Link>
        <Link className="nav" to="/about">
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header