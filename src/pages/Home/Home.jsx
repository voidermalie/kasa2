import './Home.css';
import HeaderImage from '../../components/HeaderImage/HeaderImage';

const Home = () => {
  const page = 'home';
  return (
    <div className='home-content'>
      <div className='wrapper-header-image'>
        <h1>Chez vous, partout et ailleurs</h1>
        <HeaderImage page={page} />
      </div>
      <div className="card-container">
        <article></article>
      </div>
    </div>
  );
};

export default Home;
