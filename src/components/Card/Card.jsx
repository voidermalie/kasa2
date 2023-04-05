import './Card.css';
import { Link } from 'react-router-dom';


/* // logement en tant qu'objet
const Card = ({ logement, to }) => { // logement en tant qu'objet
    return (
      <Link to={to} className='card-link' key={logement.id}>
        <article className="card-container">
          <img className="card-image" src={logement.cover} alt={logement.title} />
          <h2 className="card-title">{logement.title}</h2>
        </article>
      </Link>
    );
  };
  
  export default Card;
*/

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