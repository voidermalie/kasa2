import { useState } from 'react';
import './DropDown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropDown = () => {

  const [isOpen, setIsOpen] = useState(false);

  const aboutTitles = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];
  const aboutDescriptions = [
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  ];

  const closeButton = <FontAwesomeIcon icon={faChevronUp} />;
  const openButton = <FontAwesomeIcon icon={faChevronDown} />;

  return (
    <div className="dropdown-wrapper">
      {aboutTitles.map((aboutTitle, index) => (
        <div key={index} className="dropdown-item">
          <div className={`dropdown-title ${isOpen ? 'closed' : ''}`}>
            <h1>{aboutTitle}</h1>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? closeButton : openButton}
            </button>
          </div>
          {isOpen && (
            <div className="dropdown-description">
              <p>{aboutDescriptions[index]}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDown;