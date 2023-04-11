import './Tag.css';

const Tag = ({tags}) => {
    const tag = tags.map(tag => {return <h3>{tag}</h3>})
    return <>{tag}</>
};

export default Tag;