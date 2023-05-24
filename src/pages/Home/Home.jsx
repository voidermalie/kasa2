import './Home.css';
import '../../components/Card/Card.css';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

import { useContext } from 'react';
import { ApartmentContext } from '../../context/ApartmentContext';


const Home = () => {
  const page = 'home';

  const logements = useContext(ApartmentContext);

  return (
    <section className="home-content">
      <div className="banner-wrapper">
        <h1>Chez vous, partout et ailleurs</h1>
        <Banner page={page} />
      </div>
      <div className="card-wrapper">
        {logements.map((logement) => (
            <Card
              key={logement.id}
              logement={logement}
              to={`apartment/${logement.id}`}
            />
        ))}
      </div>
    </section>
  );
};

export default Home;