import './Home.css';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';

import { useState, useEffect } from 'react';
import { fetchLogements } from '../../api';

const Home = () => {
  const page = 'home';

  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLogements();
      setLogements(data);
    };

    fetchData();
  }, []);

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
