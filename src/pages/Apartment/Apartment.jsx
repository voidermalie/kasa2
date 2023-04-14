import './Apartment.css';

import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Slideshow from '../../components/Slideshow/Slideshow';
import Dropdown from '../../components/Dropdown/Dropdown';
import Rating from '../../components/Rating/Rating';
import Tag from '../../components/Tag/Tag';

import { ApartmentContext } from '../../context/ApartmentContext';

const Apartment = () => {
  const { id } = useParams();
  const logements = useContext(ApartmentContext);
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const apartment = logements.find((logement) => logement.id === id);
    setLogement(apartment);
  }, [id, logements]);

  if (!logement) {
    return <div>Loading...</div>;
  }

  //dropdowns
  const dropdowns1 = [
    {
      dropdownTitle: 'Description',
      dropdownDescription: logement.description,
    },
  ];

  const dropdowns2 = [
    {
      dropdownTitle: 'Équipements',
      dropdownDescription: logement.equipments,
    },
  ];

  //slides
  const slides = logement.pictures;

  return (
    <div className="content-apartment">
      <Slideshow slides={slides} />
      <div className="wrapper-title">
        <div className="container-apartment" key={logement.id}>
          <h1>{logement.title}</h1>
          <h2>{logement.location}</h2>
          <div className="tags">
            <Tag tags={logement.tags} />
          </div>
        </div>
        <div className="container-host">
          <div className="infos-host">
            <p>{logement.host.name}</p>
            <img className="avatar" src={logement.host.picture} alt="avatar" />
          </div>
          <div className="rating">
            <Rating rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className="wrapper-description">
        <Dropdown dropdowns={dropdowns1} />
        <Dropdown dropdowns={dropdowns2} isList={true} />
      </div>
    </div>
  );
};

export default Apartment;