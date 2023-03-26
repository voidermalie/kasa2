import './Apartment.css';

import { useParams } from 'react-router-dom';

export default function Apartment() {
    const {id} = useParams()

    return (
        <h1>Apartment {id}</h1>
    )
}