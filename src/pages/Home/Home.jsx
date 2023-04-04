import './Home.css';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

import { useContext } from 'react';
import { ApartmentContext } from '../../context/ApartmentContext';

const Home = () => {
  const page = 'home';

  const logements = useContext(ApartmentContext);

  return (
    <div className="home-content">
      <div className="banner-wrapper">
        <h1>Chez vous, partout et ailleurs</h1>
        <Banner page={page} />
      </div>
      <div className="card-wrapper">
        {logements.map((logement) => (
            <Card
              key={logement.id}
              cardSrc={logement.cover}
              cardAlt={logement.title}
              cardTitle={logement.title}
              to={`apartment/${logement.id}`}
            />
        ))}
      </div>
    </div>
  );
};

export default Home;