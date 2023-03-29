import './Apartment.css';

import { useParams } from 'react-router-dom';

const Apartment = () => {
    const {id} = useParams()

    return (
        <h1>Apartment {id}</h1>
    )
}

export default Apartment