import { useState } from 'react';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({dropdownTitles, dropdownDescriptions}) => {

  const [isOpen, setIsOpen] = useState(Array(dropdownTitles.length).fill(false));

  const toggleDropdown = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index]; //toggle = inverser le booléen
    setIsOpen(newIsOpen); // mettre à jour le state
  };

  const closeButton = <FontAwesomeIcon icon={faChevronUp} />;
  const openButton = <FontAwesomeIcon icon={faChevronDown} />;

  return (
    <div className="dropdown-wrapper">
      {dropdownTitles.map((dropdownTitle, index) => (
        <div key={index} className="dropdown-item">
          <div className={`dropdown-title ${isOpen[index] ? 'closed' : ''}`}>
            <h1>{dropdownTitle}</h1>
            <button
            data-id={index}
            onClick={(e) => toggleDropdown(e.currentTarget.dataset.id)}
            >
              {isOpen[index] ? closeButton : openButton}
            </button>
          </div>
          {isOpen[index] && (
            <div className="dropdown-description">
              <p>{dropdownDescriptions[index]}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;