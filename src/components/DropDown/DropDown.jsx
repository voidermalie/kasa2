import { useState } from 'react';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ dropdowns, isList }) => {
  //const [isOpen, setIsOpen] = useState(new Array(dropdowns.length).fill(false));
  const [isOpen, setIsOpen] = useState(dropdowns.map(() => false));

  const toggleDropdown = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index]; //toggle = inverser le booléen
    setIsOpen(newIsOpen); // mettre à jour le state
  };

  /* toggle all at once:
    const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  */

  const closeButton = <FontAwesomeIcon icon={faChevronUp} />;
  const openButton = <FontAwesomeIcon icon={faChevronDown} />;

  //const hasMultipleItems = dropdowns.length > 1; (doesn't work)

  return (
    <div className="dropdown-wrapper">
      {dropdowns.map(({ dropdownTitle, dropdownDescription }, index) => (
        <div key={index} className="dropdown-item">
          <div className={`dropdown-title ${isOpen[index] ? 'closed' : ''}`}>
            <h2>{dropdownTitle}</h2>
            <button
              data-id={index}
              onClick={(e) => toggleDropdown(e.currentTarget.dataset.id)}
            >
              {isOpen[index] ? closeButton : openButton}
            </button>
          </div>
          {isOpen[index] && (
            <div className="dropdown-description">
              {isList ? (
                <ul>
                  {dropdownDescription.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{dropdownDescription}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;