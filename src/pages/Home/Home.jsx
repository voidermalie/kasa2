import './Home.css';
import Banner from '../../components/Banner/Banner';

const Home = () => {
  const page = 'home';
  return (
    <div className="home-content">
      <div className="wrapper-header-image">
        <h1>Chez vous, partout et ailleurs</h1>
        <Banner page={page} />
      </div>
      <div className="card-container">
        <article></article>
      </div>
    </div>
  );
};

export default Home;