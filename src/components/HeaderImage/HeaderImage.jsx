import './HeaderImage.css';

const HeaderImage = (props) => {
  const { page } = props;
  const imgSrc = `/assets/${page}-header.jpg`;

  return <img src={imgSrc} alt="" className="header-image" />;
};

export default HeaderImage;