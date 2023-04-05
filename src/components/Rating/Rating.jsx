import './Rating.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Rating = ({ rating }) => {

  const range = [1, 2, 3, 4, 5];
  const stars = range.map((num) => (
    <FontAwesomeIcon
      icon={faStar}
      key={num}
      color={num <= rating ? '#FF6060' : '#E3E3E3'}
    />
  ));

  return <div>{stars}</div>;
};

export default Rating;

/*
const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => ( //déterminer nombre d'éléments puis mapping
    <FontAwesomeIcon
      icon={faStar}
      key={index}
      color={index < rating ? '#FF6060' : '#E3E3E3'}
    />
  ));

  return <div>{stars}</div>;
};

export default Rating;*/