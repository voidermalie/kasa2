import './About.css';
import HeaderImage from '../../components/HeaderImage/HeaderImage';

const About = () => {
  const page = 'about';
  return (
    <div className='about-content'>
      <HeaderImage page={page} />
    </div>
  );
};

export default About;