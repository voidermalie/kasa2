import './About.css';
import aboutImg from '../../assets/about.jpg'

export default function About() {
    return (
        <div className="About">
            <img className='headerImg' src={aboutImg} alt='' />
        </div>
    )
}