import './Tag.css';

const Tag = ({ tags }) => {
  const tag = tags.map((tag, index) => {
    return <h3 key={index} className='tag-item'>{tag}</h3>;
  });
  return <div className='tag'>{tag}</div>;
};

export default Tag;