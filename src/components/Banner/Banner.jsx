import './Banner.css';

const publicUrl = process.env.PUBLIC_URL;

const Banner = (props) => {
  const { page } = props;
  const imgSrc = `${publicUrl}/assets/${page}-header.jpg`;

  return <img src={imgSrc} alt="" className="banner-image" />;
};

export default Banner;