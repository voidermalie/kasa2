import './Tag.css';

const Tag = ({ tags }) => {
  const tag = tags.map((tag) => {
    return <h3 className='tag-item'>{tag}</h3>;
  });
  return <div className='tag'>{tag}</div>;
};

export default Tag;