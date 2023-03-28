import homeImg from '../../assets/home.jpg';
import '../../../src/index.css';
import './Home.css';

function Home() {
  return (
    <div className="home-content">
      <div className='container-headerImg'>
        <h1>Chez vous, partout et ailleurs</h1>
        <img className='headerImg' src={homeImg} alt=''/>
      </div>
      <div className='cardContainer'>
        <article></article>
      </div>
    </div>
  );
}

export default Home;