import './404.css';
import { useNavigate } from 'react-router';

const PageNotFound = () => {
    const navigate = useNavigate()
    
    const handleBackHome = () => {
        navigate('/')
    }

  return (
    <section className="error-page">
      <div className="error-title">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </div>
      <button onClick={handleBackHome} className="back-button">
        Retourner sur la page d’accueil
      </button>
    </section>
  );
};

export default PageNotFound;