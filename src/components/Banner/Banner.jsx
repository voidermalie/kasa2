import './Banner.css';

const Banner = (props) => {
  const { page } = props;
  const imgSrc = `/assets/${page}-header.jpg`;

  return <img src={imgSrc} alt="" className="banner-image" />;
};

export default Banner;