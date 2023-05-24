import './About.css';
import Banner from '../../components/Banner/Banner';
import '../../components/Banner/Banner.css';
import Dropdown from '../../components/Dropdown/Dropdown';

const About = () => {
  const page = 'about';

  const aboutTitles = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];
  const aboutDescriptions = [
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  ];

  const dropdowns1 = [
    {
      dropdownTitle: aboutTitles[0],
      dropdownDescription: aboutDescriptions[0],
    },
  ];

  const dropdowns2 = [
    {
      dropdownTitle: aboutTitles[1],
      dropdownDescription: aboutDescriptions[1],
    },
  ];

  const dropdowns3 = [
    {
      dropdownTitle: aboutTitles[2],
      dropdownDescription: aboutDescriptions[2],
    },
  ];

  const dropdowns4 = [
    {
      dropdownTitle: aboutTitles[3],
      dropdownDescription: aboutDescriptions[3],
    },
  ];

  return (
    <section className="about-content container">
      <Banner page={page} />
      <h1>À propos</h1>
      <Dropdown dropdowns={dropdowns1} />
      <Dropdown dropdowns={dropdowns2} />
      <Dropdown dropdowns={dropdowns3} />
      <Dropdown dropdowns={dropdowns4} />
    </section>
  );
};

export default About;


/*
const About = () => {
  const page = 'about';

  const aboutTitles = ['Fiabilité', 'Respect', 'Service', 'Sécurité'];
  const aboutDescriptions = [
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  ];

  const dropdowns = aboutTitles.map((title, index) => {
    return {
      dropdownTitle: title,
      dropdownDescription: aboutDescriptions[index],
    };
  });

  return (
    <div className="about-content">
      <Banner page={page} />
      <h1>À propos</h1>
      <Dropdown
        dropdowns={dropdowns}
      />
    </div>
  );
};

export default About;*/