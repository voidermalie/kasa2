import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ cardSrc, cardAlt, cardTitle, to }) => {
  return (
    <Link to={to} className='card-link'>
      <article className="card-container">
        <img className="card-image" src={cardSrc} alt={cardAlt} />
        <h2 className="card-title">{cardTitle}</h2>
      </article>
    </Link>
  );
};

export default Card;