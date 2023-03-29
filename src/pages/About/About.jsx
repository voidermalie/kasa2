import './About.css';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import DropDown from '../../components/DropDown/DropDown';

const About = () => {
  const page = 'about';
  return (
    <div className='about-content'>
      <HeaderImage page={page} />
      <DropDown />
    </div>
  );
};

export default About;