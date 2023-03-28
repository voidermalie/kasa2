import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo'
import '../../../src/index.css'
import './Header.css';

export default function Header() {
  return (
    <header>
      <Logo color="#FF6060" /> 
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