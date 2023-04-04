import './Apartment.css';

import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import Slideshow from '../../components/Slideshow/Slideshow';
import Dropdown from '../../components/Dropdown/Dropdown';
import { ApartmentContext } from '../../context/ApartmentContext';

const Apartment = () => {

    const { id } = useParams();
    const logements = useContext(ApartmentContext);
    const logement = logements.find((logement) => logement.id === id);
console.log(logement)
    return (
        <div className='content-apartment'>
            <Slideshow />
            <div className='wrapper-title'>
                <div className='container-apartment' key={logement.id}>
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>
                    <div className='tags'></div>
                </div>
                <div className='container-host'>
                    <div className='infos-host'>
                        <p>{logement.host.name}</p>
                        <img className='avatar' src={logement.host.picture} alt='avatar' />
                    </div>
                    <div className='rating'></div>
                </div>
            </div>
            <div className='wrapper-description'>
                <Dropdown dropdownTitles='Description' dropdownDescriptions={logement.description}/>
                <Dropdown dropdownTitles='Équipements' dropdownDescriptions={logement.equipments}/>
            </div>
        </div>
    )
}

export default Apartment;